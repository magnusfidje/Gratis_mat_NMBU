/* ── Translations ────────────────────────────── */
const TRANSLATIONS = {
  no: {
    'site.title':   'Gratis Mat NMBU',
    'site.subtitle':'Arrangementer med gratis mat på campus',

    'nav.calendar': 'Kalender',
    'nav.now':      'Mat nå',
    'nav.events':   'Arrangementer',
    'nav.submit':   'Legg til',
    'nav.subscribe':'Varsler',

    'cal.months':  ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'],
    'cal.weekdays':['Man','Tir','Ons','Tor','Fre','Lør','Søn'],

    'feed.title':    'Kommende arrangementer',
    'feed.subtitle': 'Alle arrangementer med gratis mat på NMBU',
    'feed.empty':    'Ingen kommende arrangementer ennå.',
    'feed.add_first':'Legg til det første!',

    'submit.title':    'Legg til arrangement',
    'submit.subtitle': 'Har du et arrangement med gratis mat? Legg det til her!',
    'submit.label.title':      'Tittel',
    'submit.label.date':       'Dato',
    'submit.label.time':       'Tidspunkt',
    'submit.label.location':   'Sted',
    'submit.label.category':   'Kategori mat',
    'submit.label.customFood': 'Spesifiser mat',
    'submit.label.organizer':  'Arrangør / organisasjon',
    'submit.label.description':'Beskrivelse',
    'submit.label.signupLink': 'Link til arrangement',
    'submit.label.contact':    'Kontakt (valgfritt)',
    'submit.ph.title':       'f.eks. Fadderukeavslutning',
    'submit.ph.location':    'f.eks. Urbygningen, TF1A101',
    'submit.ph.category':    'Velg kategori…',
    'submit.ph.customFood':  'f.eks. Taco, Sushi, Wraps…',
    'submit.ph.organizer':   'f.eks. Studentforeningen X',
    'submit.ph.description': 'Hva skjer? Hva slags mat? Hvem kan delta?',
    'submit.ph.contact':     'E-post eller navn',
    'submit.btn':         'Legg til arrangement',
    'submit.btn.saving':  'Lagrer…',
    'submit.success':     '✓ Arrangementet ble lagt til! Abonnenter varsles via push-varsel.',
    'submit.err.required':'Vennligst fyll inn tittel, dato, sted og kategori.',
    'submit.err.food':    'Vennligst spesifiser hva slags mat det er.',

    'sub.title':    'Varsler',
    'sub.subtitle': 'Slik holder du deg oppdatert',
    'sub.ios.title':   'iPhone / iPad',
    'sub.ios.note':    'iOS krever at siden er lagt til på Hjem-skjermen for at varsler skal fungere:',
    'sub.ios.step1':   'Åpne denne siden i Safari',
    'sub.ios.step2':   'Trykk del-ikonet nederst (firkant med pil opp)',
    'sub.ios.step3':   'Velg «Legg til på Hjem-skjerm»',
    'sub.ios.step4':   'Åpne appen fra Hjem-skjermen og trykk «Aktiver varsler»',
    'sub.ios.placeholder': 'Skjermbilde kommer',
    'sub.android.title': 'Android',
    'sub.android.text':  'Trykk på «Aktiver varsler»-knappen øverst. Nettleseren spør om du vil tillate varsler — trykk Tillat. Fungerer i Chrome, Firefox og Edge.',
    'push.btn.enable':  'Aktiver varsler',
    'push.btn.saving':  'Aktiverer…',
    'push.enabled':     '✓ Varsler er aktivert',
    'push.unsupported': 'Nettleseren din støtter ikke push-varsler. Prøv Chrome eller Firefox.',
    'push.denied':      'Du har blokkert varsler. Gå til nettleserinnstillinger for å tillate dem igjen.',

    'footer.text':    'Gratis Mat NMBU — Ås campus',
    'footer.add':     'Legg til arrangement',
    'footer.contact': 'Kontakt oss',

    'cat.pizza':  'Pizza',
    'cat.burger': 'Burger',
    'cat.snacks': 'Snacks',
    'cat.annet':  'Annet',

    'filter.all': 'Alle',

    'now.title':            'Mat tilgjengelig nå',
    'now.subtitle':         'Restemat og spontane tilbud på campus',
    'now.label.food':       'Hva slags mat?',
    'now.label.location':   'Hvor?',
    'now.label.description':'Beskrivelse',
    'now.label.contact':    'Kontakt (valgfritt)',
    'now.ph.food':          'f.eks. Pizza, boller, frukt…',
    'now.ph.location':      'f.eks. Urbygningen 1. etasje',
    'now.ph.description':   'Mer info…',
    'now.ph.contact':       'E-post eller navn',
    'now.btn':              'Meld fra!',
    'now.btn.saving':       'Sender…',
    'now.success':          '✓ Lagt til! Andre kan se maten nå.',
    'now.err.required':     'Fyll inn mat og sted.',
    'now.empty':            'Ingen mat tilgjengelig akkurat nå.',
    'now.info':             'Meldinger forsvinner automatisk etter 6 timer.',
    'now.ago.justnow':      'Akkurat nå',
    'now.ago.min':          'min siden',
    'now.ago.hour':         't siden',

    'event.signup': '🔗 Link til arrangement',
    'event.date_locale': 'nb-NO',
  },
  en: {
    'site.title':   'Free Food NMBU',
    'site.subtitle':'Events with free food on campus',

    'nav.calendar': 'Calendar',
    'nav.now':      'Food now',
    'nav.events':   'Events',
    'nav.submit':   'Add event',
    'nav.subscribe':'Alerts',

    'cal.months':  ['January','February','March','April','May','June','July','August','September','October','November','December'],
    'cal.weekdays':['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],

    'feed.title':    'Upcoming events',
    'feed.subtitle': 'All events with free food at NMBU',
    'feed.empty':    'No upcoming events yet.',
    'feed.add_first':'Add the first one!',

    'submit.title':    'Add event',
    'submit.subtitle': 'Do you have an event with free food? Add it here!',
    'submit.label.title':      'Title',
    'submit.label.date':       'Date',
    'submit.label.time':       'Time',
    'submit.label.location':   'Location',
    'submit.label.category':   'Food category',
    'submit.label.customFood': 'Specify food',
    'submit.label.organizer':  'Organizer / organization',
    'submit.label.description':'Description',
    'submit.label.signupLink': 'Link to event',
    'submit.label.contact':    'Contact (optional)',
    'submit.ph.title':       'e.g. Welcome week party',
    'submit.ph.location':    'e.g. Urbygningen, TF1A101',
    'submit.ph.category':    'Choose category…',
    'submit.ph.customFood':  'e.g. Tacos, Sushi, Wraps…',
    'submit.ph.organizer':   'e.g. Student association X',
    'submit.ph.description': "What's happening? What food? Who can attend?",
    'submit.ph.contact':     'Email or name',
    'submit.btn':         'Add event',
    'submit.btn.saving':  'Saving…',
    'submit.success':     '✓ Event added! Subscribers will be notified via push notification.',
    'submit.err.required':'Please fill in title, date, location and category.',
    'submit.err.food':    'Please specify what kind of food it is.',

    'sub.title':    'Notifications',
    'sub.subtitle': 'Stay updated',
    'sub.ios.title':   'iPhone / iPad',
    'sub.ios.note':    'iOS requires the page to be added to the Home Screen for notifications to work:',
    'sub.ios.step1':   'Open this page in Safari',
    'sub.ios.step2':   'Tap the share icon at the bottom (square with arrow)',
    'sub.ios.step3':   'Select "Add to Home Screen"',
    'sub.ios.step4':   'Open the app from your Home Screen and tap "Enable notifications"',
    'sub.ios.placeholder': 'Screenshot coming soon',
    'sub.android.title': 'Android',
    'sub.android.text':  'Tap the "Enable notifications" button above. The browser will ask if you want to allow notifications — tap Allow. Works in Chrome, Firefox, and Edge.',
    'push.btn.enable':  'Enable notifications',
    'push.btn.saving':  'Enabling…',
    'push.enabled':     '✓ Notifications enabled',
    'push.unsupported': 'Your browser does not support push notifications. Try Chrome or Firefox.',
    'push.denied':      'You have blocked notifications. Go to browser settings to allow them again.',

    'footer.text':    'Free Food NMBU — Ås campus',
    'footer.add':     'Add event',
    'footer.contact': 'Contact us',

    'cat.pizza':  'Pizza',
    'cat.burger': 'Burger',
    'cat.snacks': 'Snacks',
    'cat.annet':  'Other',

    'filter.all': 'All',

    'now.title':            'Food available now',
    'now.subtitle':         'Leftover food and spontaneous offers on campus',
    'now.label.food':       'What food?',
    'now.label.location':   'Where?',
    'now.label.description':'Description',
    'now.label.contact':    'Contact (optional)',
    'now.ph.food':          'e.g. Pizza, rolls, fruit…',
    'now.ph.location':      'e.g. Urbygningen 1st floor',
    'now.ph.description':   'More info…',
    'now.ph.contact':       'Email or name',
    'now.btn':              'Post!',
    'now.btn.saving':       'Posting…',
    'now.success':          '✓ Posted! Others can see it now.',
    'now.err.required':     'Please fill in food and location.',
    'now.empty':            'No food available right now.',
    'now.info':             'Posts disappear automatically after 6 hours.',
    'now.ago.justnow':      'Just now',
    'now.ago.min':          'min ago',
    'now.ago.hour':         'h ago',

    'event.signup': '🔗 Link to event',
    'event.date_locale': 'en-GB',
  }
};

/* ── Language state ──────────────────────────── */
let currentLang = localStorage.getItem('lang') || 'no';

function t(key) {
  return TRANSLATIONS[currentLang][key] ?? TRANSLATIONS['no'][key] ?? key;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });

  // Select option text (options can't hold child spans, so we update directly)
  const catSelect = document.getElementById('f-category');
  if (catSelect) {
    catSelect.options[0].text = t('submit.ph.category');
    catSelect.options[1].text = '🍕 ' + t('cat.pizza');
    catSelect.options[2].text = '🍔 ' + t('cat.burger');
    catSelect.options[3].text = '🍿 ' + t('cat.snacks');
    catSelect.options[4].text = '🍽️ ' + t('cat.annet');
  }

  // Weekday header
  const wdHeader = document.getElementById('cal-weekday-header');
  if (wdHeader) {
    wdHeader.innerHTML = t('cal.weekdays').map(d => `<span>${d}</span>`).join('');
  }

  // Language buttons active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  // Filter bar "All" button label
  const allFilterBtn = document.querySelector('.filter-btn[data-filter=""]');
  if (allFilterBtn) {
    const span = allFilterBtn.querySelector('[data-i18n="filter.all"]');
    if (span) span.textContent = t('filter.all');
  }

  // Re-render dynamic content
  renderCalendar();
  renderFeed();
  renderRestemat();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations();
}

/* ── Categories ──────────────────────────────── */
const CATEGORY_EMOJIS = { pizza: '🍕', burger: '🍔', snacks: '🍿', annet: '🍽️' };

function categoryBadge(cat, customFood) {
  if (cat === 'annet' && customFood) {
    return `<span class="category-badge">🍽️ ${escHtml(customFood)}</span>`;
  }
  const emoji = CATEGORY_EMOJIS[cat] || '🍽️';
  const label = t('cat.' + cat) || cat;
  return `<span class="category-badge">${emoji} ${label}</span>`;
}

/* ── Show/hide custom food field ────────────── */
document.getElementById('f-category').addEventListener('change', function () {
  const row = document.getElementById('custom-food-row');
  const input = document.getElementById('f-custom-food');
  const show = this.value === 'annet';
  row.classList.toggle('hidden', !show);
  input.required = show;
});

/* ── Language toggle ─────────────────────────── */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

/* ── Navigation ─────────────────────────────── */
const views = {
  calendar:  document.getElementById('view-calendar'),
  now:       document.getElementById('view-now'),
  feed:      document.getElementById('view-feed'),
  submit:    document.getElementById('view-submit'),
  subscribe: document.getElementById('view-subscribe'),
};

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});

document.getElementById('footer-submit').addEventListener('click', e => {
  e.preventDefault();
  switchView('submit');
});

function switchView(name) {
  Object.values(views).forEach(v => v.classList.remove('active'));
  views[name].classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === name);
  });
  if (name === 'feed') renderFeed();
  if (name === 'now') loadRestemat();
  if (name === 'subscribe') renderPushStatus();
}

/* ── Category filter ─────────────────────────── */
let activeFilter = null; // null = all

document.getElementById('filter-bar').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  activeFilter = btn.dataset.filter || null;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b === btn);
  });
  renderFeed();
  renderCalendar();
});

/* ── API helpers ─────────────────────────────── */
let allEvents = [];

async function fetchEvents() {
  const res = await fetch('/api/events');
  allEvents = await res.json();
}

/* ── Calendar ────────────────────────────────── */
let currentYear  = new Date().getFullYear();
let currentMonth = new Date().getMonth();

document.getElementById('prev-month').addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) { currentMonth = 11; currentYear--; }
  renderCalendar();
});

document.getElementById('next-month').addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) { currentMonth = 0; currentYear++; }
  renderCalendar();
});

document.getElementById('close-day-events').addEventListener('click', () => {
  document.getElementById('day-events').classList.add('hidden');
});

function renderCalendar() {
  const months = t('cal.months');
  document.getElementById('calendar-title').textContent =
    `${months[currentMonth]} ${currentYear}`;

  const today = new Date(); today.setHours(0,0,0,0);
  const firstDay = new Date(currentYear, currentMonth, 1);
  let startDow = firstDay.getDay() - 1;
  if (startDow < 0) startDow = 6;

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrev  = new Date(currentYear, currentMonth, 0).getDate();

  const eventMap = {};
  const filteredForCal = activeFilter
    ? allEvents.filter(ev => ev.category === activeFilter)
    : allEvents;
  filteredForCal.forEach(ev => {
    if (!eventMap[ev.date]) eventMap[ev.date] = [];
    eventMap[ev.date].push(ev);
  });

  const calGrid = document.getElementById('calendar-grid');
  calGrid.innerHTML = '';

  for (let i = startDow - 1; i >= 0; i--) {
    calGrid.appendChild(makeCalCell(daysInPrev - i, 'other-month', null, []));
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${currentYear}-${String(currentMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const cellDate = new Date(currentYear, currentMonth, d);
    const isToday  = cellDate.getTime() === today.getTime();
    calGrid.appendChild(makeCalCell(d, isToday ? 'today' : '', dateStr, eventMap[dateStr] || []));
  }

  const totalCells = startDow + daysInMonth;
  const trailing   = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let d = 1; d <= trailing; d++) {
    calGrid.appendChild(makeCalCell(d, 'other-month', null, []));
  }
}

function makeCalCell(day, extraClass, dateStr, events) {
  const cell = document.createElement('div');
  cell.className = ['cal-day', extraClass, events.length ? 'has-events' : ''].filter(Boolean).join(' ');

  const num = document.createElement('span');
  num.className = 'day-num';
  num.textContent = day;
  cell.appendChild(num);

  if (events.length) {
    const dots = document.createElement('div');
    dots.className = 'event-dots';
    for (let i = 0; i < Math.min(events.length, 3); i++) {
      const dot = document.createElement('div');
      dot.className = 'event-dot';
      dots.appendChild(dot);
    }
    cell.appendChild(dots);
    cell.addEventListener('click', () => showDayEvents(dateStr, events));
  }

  return cell;
}

function showDayEvents(dateStr, events) {
  const panel  = document.getElementById('day-events');
  const titleEl = document.getElementById('day-events-title');
  const listEl  = document.getElementById('day-events-list');

  const d = new Date(dateStr + 'T12:00:00');
  titleEl.textContent = d.toLocaleDateString(t('event.date_locale'), {
    weekday:'long', day:'numeric', month:'long'
  });

  listEl.innerHTML = events.map(ev => `
    <div class="mini-event">
      <h4>${escHtml(ev.title)}${categoryBadge(ev.category, ev.customFood)}</h4>
      <div class="mini-meta">
        ${ev.time ? `🕐 ${ev.time} &nbsp;` : ''}📍 ${escHtml(ev.location)}
        ${ev.organizer ? ` &nbsp;👥 ${escHtml(ev.organizer)}` : ''}
      </div>
      ${ev.description ? `<p style="font-size:.84rem;color:#555;margin-top:.3rem;">${escHtml(ev.description)}</p>` : ''}
      ${ev.signupLink ? `<a href="${escHtml(ev.signupLink)}" target="_blank" rel="noopener" class="signup-btn">${t('event.signup')}</a>` : ''}
    </div>
  `).join('');

  panel.classList.remove('hidden');
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ── Feed ────────────────────────────────────── */
function renderFeed() {
  const listEl = document.getElementById('feed-list');
  const today  = new Date(); today.setHours(0,0,0,0);

  const upcoming = allEvents
    .filter(ev => new Date(ev.date + 'T23:59:59') >= today)
    .filter(ev => !activeFilter || ev.category === activeFilter)
    .sort((a, b) => new Date(a.date + 'T' + (a.time || '00:00')) - new Date(b.date + 'T' + (b.time || '00:00')));

  if (upcoming.length === 0) {
    listEl.innerHTML = `
      <div class="feed-empty">
        <div class="empty-icon">🍽️</div>
        <p>${t('feed.empty')}<br>
        <a href="#" onclick="switchView('submit');return false">${t('feed.add_first')}</a></p>
      </div>`;
    return;
  }

  listEl.innerHTML = upcoming.map(ev => {
    const d = new Date(ev.date + 'T12:00:00');
    const dateLabel = d.toLocaleDateString(t('event.date_locale'), {
      weekday:'long', day:'numeric', month:'long', year:'numeric'
    });
    return `
      <div class="event-card">
        <div class="event-card-accent"></div>
        <div class="event-card-body">
          <span class="event-date-badge">📅 ${dateLabel}${ev.time ? ' kl. ' + ev.time : ''}</span>
          <h3>${escHtml(ev.title)}${categoryBadge(ev.category, ev.customFood)}</h3>
          <div class="event-meta">
            <span>📍 ${escHtml(ev.location)}</span>
            ${ev.organizer ? `<span>👥 ${escHtml(ev.organizer)}</span>` : ''}
            ${ev.contact ? `<span>✉️ ${escHtml(ev.contact)}</span>` : ''}
          </div>
          ${ev.description ? `<p class="event-desc">${escHtml(ev.description)}</p>` : ''}
          ${ev.signupLink ? `<a href="${escHtml(ev.signupLink)}" target="_blank" rel="noopener" class="signup-btn">${t('event.signup')}</a>` : ''}
        </div>
      </div>`;
  }).join('');
}

/* ── Submit form ─────────────────────────────── */
document.getElementById('event-form').addEventListener('submit', async e => {
  e.preventDefault();
  const form  = e.target;
  const errEl = document.getElementById('form-error');
  const okEl  = document.getElementById('form-success');
  const btn   = document.getElementById('submit-btn').querySelector('span');

  errEl.classList.add('hidden');
  okEl.classList.add('hidden');

  const body = {
    title:       form.title.value.trim(),
    date:        form.date.value,
    time:        form.time.value,
    location:    form.location.value.trim(),
    category:    form.category.value,
    customFood:  form.customFood.value.trim(),
    organizer:   form.organizer.value.trim(),
    description: form.description.value.trim(),
    signupLink:  form.signupLink.value.trim(),
    contact:     form.contact.value.trim(),
  };

  if (!body.title || !body.date || !body.location || !body.category) {
    errEl.textContent = t('submit.err.required');
    errEl.classList.remove('hidden');
    return;
  }
  if (body.category === 'annet' && !body.customFood) {
    errEl.textContent = t('submit.err.food');
    errEl.classList.remove('hidden');
    return;
  }

  btn.textContent = t('submit.btn.saving');
  document.getElementById('submit-btn').disabled = true;

  try {
    const res  = await fetch('/api/events', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Error');

    okEl.textContent = t('submit.success');
    okEl.classList.remove('hidden');
    form.reset();
    document.getElementById('custom-food-row').classList.add('hidden');

    await fetchEvents();
    renderCalendar();
  } catch (err) {
    errEl.textContent = err.message;
    errEl.classList.remove('hidden');
  } finally {
    btn.textContent = t('submit.btn');
    document.getElementById('submit-btn').disabled = false;
  }
});

/* ── Push notifications ──────────────────────── */
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = window.atob(base64);
  const arr = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
  return arr;
}

async function renderPushStatus() {
  const container = document.getElementById('push-status');
  if (!container) return;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true;

  // iOS i Safari (ikke standalone) – kan ikke bruke push ennå
  if (isIOS && !isStandalone) {
    container.innerHTML = `
      <div class="push-info-box">
        <span class="push-info-icon">📱</span>
        <span>${currentLang === 'no'
          ? 'Legg til siden på Hjem-skjermen først (se guide under), åpne appen og trykk "Aktiver varsler".'
          : 'Add this page to your Home Screen first (see guide below), open the app, then tap "Enable notifications".'
        }</span>
      </div>`;
    return;
  }

  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    container.innerHTML = `<p class="push-unsupported">${t('push.unsupported')}</p>`;
    return;
  }

  if (Notification.permission === 'denied') {
    container.innerHTML = `<p class="push-unsupported">${t('push.denied')}</p>`;
    return;
  }

  // Sjekk om allerede abonnert
  try {
    const reg = await navigator.serviceWorker.register('/sw.js');
    await navigator.serviceWorker.ready;
    const existing = await reg.pushManager.getSubscription();
    if (existing) {
      container.innerHTML = `<div class="push-enabled-badge">✓ ${t('push.enabled')}</div>`;
      return;
    }
  } catch {}

  container.innerHTML = `
    <button class="btn-primary btn-push" id="push-btn">
      <span>${t('push.btn.enable')}</span>
    </button>`;
  document.getElementById('push-btn').addEventListener('click', subscribeToPush);
}

async function subscribeToPush() {
  const btn = document.getElementById('push-btn');
  if (btn) { btn.disabled = true; btn.querySelector('span').textContent = t('push.btn.saving'); }

  try {
    const reg = await navigator.serviceWorker.register('/sw.js');
    await navigator.serviceWorker.ready;

    const keyRes = await fetch('/api/push/public-key');
    const { publicKey } = await keyRes.json();

    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicKey)
    });

    await fetch('/api/push/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sub)
    });

    renderPushStatus();
  } catch (err) {
    console.error('Push-feil:', err);
    if (btn) { btn.disabled = false; btn.querySelector('span').textContent = t('push.btn.enable'); }
  }
}

/* ── Restemat ────────────────────────────────── */
let restematRefreshTimer = null;

function timeAgo(isoString) {
  const diffMs = Date.now() - new Date(isoString).getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return t('now.ago.justnow');
  if (diffMin < 60) return `${diffMin} ${t('now.ago.min')}`;
  const diffH = Math.floor(diffMin / 60);
  return `${diffH} ${t('now.ago.hour')}`;
}

async function loadRestemat() {
  await renderRestemat();
  if (restematRefreshTimer) clearInterval(restematRefreshTimer);
  restematRefreshTimer = setInterval(renderRestemat, 2 * 60 * 1000);
}

async function renderRestemat() {
  const feedEl = document.getElementById('restemat-feed');
  if (!feedEl) return;
  try {
    const res   = await fetch('/api/restemat');
    const posts = await res.json();
    if (posts.length === 0) {
      feedEl.innerHTML = `
        <div class="feed-empty">
          <div class="empty-icon">🍽️</div>
          <p>${t('now.empty')}</p>
        </div>`;
      return;
    }
    feedEl.innerHTML = posts.map(p => `
      <div class="restemat-card">
        <div class="restemat-card-top">
          <span class="restemat-food">${escHtml(p.food)}</span>
          <span class="live-dot" title="LIVE"></span>
        </div>
        <div class="restemat-meta">
          <span>📍 ${escHtml(p.location)}</span>
          <span class="time-ago">${timeAgo(p.createdAt)}</span>
        </div>
        ${p.description ? `<p class="restemat-desc">${escHtml(p.description)}</p>` : ''}
        ${p.contact ? `<p class="restemat-contact">✉️ ${escHtml(p.contact)}</p>` : ''}
      </div>`).join('');
  } catch {
    feedEl.innerHTML = '';
  }
}

document.getElementById('restemat-form').addEventListener('submit', async e => {
  e.preventDefault();
  const form  = e.target;
  const errEl = document.getElementById('restemat-error');
  const okEl  = document.getElementById('restemat-success');
  const btn   = document.getElementById('restemat-btn').querySelector('span');

  errEl.classList.add('hidden');
  okEl.classList.add('hidden');

  const body = {
    food:        form.food.value.trim(),
    location:    form.location.value.trim(),
    description: form.description.value.trim(),
    contact:     form.contact.value.trim(),
  };

  if (!body.food || !body.location) {
    errEl.textContent = t('now.err.required');
    errEl.classList.remove('hidden');
    return;
  }

  btn.textContent = t('now.btn.saving');
  document.getElementById('restemat-btn').disabled = true;

  try {
    const res  = await fetch('/api/restemat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Error');

    okEl.textContent = t('now.success');
    okEl.classList.remove('hidden');
    form.reset();
    await renderRestemat();
  } catch (err) {
    errEl.textContent = err.message;
    errEl.classList.remove('hidden');
  } finally {
    btn.textContent = t('now.btn');
    document.getElementById('restemat-btn').disabled = false;
  }
});

/* ── Utility ─────────────────────────────────── */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Init ────────────────────────────────────── */
(async () => {
  await fetchEvents();
  applyTranslations(); // renders calendar + feed too
})();
