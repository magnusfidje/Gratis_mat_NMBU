const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const webpush = require('web-push');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;
const SITE_URL = process.env.SITE_URL || `http://localhost:${PORT}`;

const DATA_DIR = path.join(__dirname, 'data');
const EVENTS_FILE    = path.join(DATA_DIR, 'events.json');
const RESTEMAT_FILE  = path.join(DATA_DIR, 'restemat.json');
const PUSH_SUBS_FILE = path.join(DATA_DIR, 'push_subscriptions.json');

if (!fs.existsSync(DATA_DIR))        fs.mkdirSync(DATA_DIR);
if (!fs.existsSync(EVENTS_FILE))     fs.writeFileSync(EVENTS_FILE, '[]');
if (!fs.existsSync(RESTEMAT_FILE))   fs.writeFileSync(RESTEMAT_FILE, '[]');
if (!fs.existsSync(PUSH_SUBS_FILE))  fs.writeFileSync(PUSH_SUBS_FILE, '[]');

// --- VAPID-nøkler ---
let VAPID_PUBLIC  = process.env.VAPID_PUBLIC;
let VAPID_PRIVATE = process.env.VAPID_PRIVATE;

if (!VAPID_PUBLIC || !VAPID_PRIVATE) {
  const keys = webpush.generateVAPIDKeys();
  VAPID_PUBLIC  = keys.publicKey;
  VAPID_PRIVATE = keys.privateKey;
  console.log('\n⚠️  VAPID-nøkler ikke satt som miljøvariabler. Midlertidige nøkler generert:');
  console.log(`VAPID_PUBLIC=${VAPID_PUBLIC}`);
  console.log(`VAPID_PRIVATE=${VAPID_PRIVATE}`);
  console.log('Legg disse til i Railway-miljøvariablene for å beholde abonnenter mellom omstarter.\n');
}

webpush.setVapidDetails(SITE_URL, VAPID_PUBLIC, VAPID_PRIVATE);

// --- Sikkerhet ---
app.use(helmet());
app.use(express.json());
app.use(express.static('public'));

const postLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'For mange forespørsler. Prøv igjen om litt.' }
});

function readJSON(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return []; }
}
function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// --- Events API ---

app.get('/api/events', (req, res) => {
  const events = readJSON(EVENTS_FILE);
  res.json(events.sort((a, b) =>
    new Date(a.date + 'T' + (a.time || '00:00')) - new Date(b.date + 'T' + (b.time || '00:00'))
  ));
});

const VALID_CATEGORIES = ['pizza', 'burger', 'snacks', 'annet'];

app.post('/api/events', postLimiter, async (req, res) => {
  const { title, date, time, location, category, customFood, description, organizer, signupLink, contact } = req.body;

  if (!title || !date || !location || !category)
    return res.status(400).json({ error: 'Tittel, dato, sted og kategori er påkrevd.' });
  if (!VALID_CATEGORIES.includes(category))
    return res.status(400).json({ error: 'Ugyldig kategori.' });
  if (category === 'annet' && !customFood)
    return res.status(400).json({ error: 'Spesifiser hva slags mat det er.' });
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date))
    return res.status(400).json({ error: 'Ugyldig datoformat.' });

  let cleanSignupLink = '';
  if (signupLink) { try { new URL(signupLink); cleanSignupLink = signupLink.trim(); } catch {} }

  const CATEGORY_LABELS = { pizza: '🍕 Pizza', burger: '🍔 Burger', snacks: '🍿 Snacks', annet: '🍽️ Annet' };
  const foodLabel = category === 'annet' && customFood ? `🍽️ ${customFood}` : CATEGORY_LABELS[category];

  const newEvent = {
    id: uuidv4(), title: title.trim(), date, time: time || '',
    location: location.trim(), category,
    customFood: category === 'annet' ? (customFood || '').trim() : '',
    description: (description || '').trim(), organizer: (organizer || '').trim(),
    signupLink: cleanSignupLink, contact: (contact || '').trim(),
    createdAt: new Date().toISOString()
  };

  const events = readJSON(EVENTS_FILE);
  events.push(newEvent);
  writeJSON(EVENTS_FILE, events);

  const dateStr = new Date(date + 'T12:00:00').toLocaleDateString('nb-NO', {
    weekday: 'long', day: 'numeric', month: 'long'
  });
  sendPush(`${foodLabel} Nytt arrangement`, `${title} – ${dateStr} på ${location}`, SITE_URL)
    .catch(err => console.error('Push-feil:', err));

  res.json({ success: true, event: newEvent });
});

app.delete('/api/events/:id', (req, res) => {
  const events = readJSON(EVENTS_FILE);
  const filtered = events.filter(e => e.id !== req.params.id);
  if (filtered.length === events.length)
    return res.status(404).json({ error: 'Arrangement ikke funnet.' });
  writeJSON(EVENTS_FILE, filtered);
  res.json({ success: true });
});

// --- Restemat API ---

const SIX_HOURS_MS = 6 * 60 * 60 * 1000;

app.get('/api/restemat', (req, res) => {
  const posts = readJSON(RESTEMAT_FILE);
  const cutoff = new Date(Date.now() - SIX_HOURS_MS);
  res.json(posts
    .filter(p => new Date(p.createdAt) >= cutoff)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  );
});

app.post('/api/restemat', postLimiter, async (req, res) => {
  const { location, food, description, contact } = req.body;
  if (!location || !food)
    return res.status(400).json({ error: 'Mat og sted er påkrevd.' });

  const newPost = {
    id: uuidv4(), location: location.trim(), food: food.trim(),
    description: (description || '').trim().slice(0, 200),
    contact: (contact || '').trim(), createdAt: new Date().toISOString()
  };

  const posts = readJSON(RESTEMAT_FILE);
  posts.push(newPost);
  writeJSON(RESTEMAT_FILE, posts);

  sendPush('🍽️ Mat tilgjengelig nå!', `${food} – ${location}`, SITE_URL)
    .catch(err => console.error('Push-feil:', err));

  res.json({ success: true, post: newPost });
});

// --- Push notifications API ---

app.get('/api/push/public-key', (req, res) => {
  res.json({ publicKey: VAPID_PUBLIC });
});

app.post('/api/push/subscribe', (req, res) => {
  const sub = req.body;
  if (!sub || !sub.endpoint)
    return res.status(400).json({ error: 'Ugyldig abonnement.' });

  const subs = readJSON(PUSH_SUBS_FILE);
  if (!subs.find(s => s.endpoint === sub.endpoint)) {
    subs.push(sub);
    writeJSON(PUSH_SUBS_FILE, subs);
  }
  res.json({ success: true });
});

async function sendPush(title, body, url) {
  const subs = readJSON(PUSH_SUBS_FILE);
  if (subs.length === 0) return;

  const payload = JSON.stringify({ title, body, url });
  const results = await Promise.allSettled(
    subs.map(sub => webpush.sendNotification(sub, payload))
  );

  const validSubs = subs.filter((_, i) => {
    const r = results[i];
    return r.status === 'fulfilled' || r.reason?.statusCode !== 410;
  });
  if (validSubs.length !== subs.length) writeJSON(PUSH_SUBS_FILE, validSubs);

  console.log(`Push sendt til ${subs.length} abonnent(er).`);
}

app.listen(PORT, () => {
  console.log(`\n🌿 Gratis Mat NMBU kjører på http://localhost:${PORT}\n`);
});
