let token = localStorage.getItem('adminToken');

const loginSection  = document.getElementById('login-section');
const adminSection  = document.getElementById('admin-section');
const logoutBtn     = document.getElementById('logout-btn');

/* ── Auth ─────────────────────────────────────── */
function showAdmin() {
  loginSection.style.display = 'none';
  adminSection.style.display = 'block';
  logoutBtn.style.display    = 'block';
  loadPending();
  loadPublished();
}

function showLogin() {
  loginSection.style.display = 'block';
  adminSection.style.display = 'none';
  logoutBtn.style.display    = 'none';
}

if (token) showAdmin(); else showLogin();

document.getElementById('login-form').addEventListener('submit', async e => {
  e.preventDefault();
  const errEl = document.getElementById('login-error');
  errEl.textContent = '';

  const res  = await fetch('/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
    })
  });

  if (res.ok) {
    const data = await res.json();
    token = data.token;
    localStorage.setItem('adminToken', token);
    showAdmin();
  } else {
    errEl.textContent = 'Feil brukernavn eller passord.';
  }
});

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('adminToken');
  token = null;
  showLogin();
});

/* ── Tabs ─────────────────────────────────────── */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

/* ── Helpers ──────────────────────────────────── */
function escHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formatDate(date, time) {
  const d = new Date(date + 'T12:00:00');
  const label = d.toLocaleDateString('nb-NO', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  return time ? `${label} kl. ${time}` : label;
}

const CAT = { pizza: '🍕 Pizza', burger: '🍔 Burger', snacks: '🍿 Snacks', annet: '🍽️ Annet' };

async function authFetch(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, ...(options.headers || {}) }
  });
  if (res.status === 401) { localStorage.removeItem('adminToken'); showLogin(); return null; }
  return res;
}

/* ── Pending events ───────────────────────────── */
async function loadPending() {
  const res = await authFetch('/api/admin/pending');
  if (!res) return;
  const events = await res.json();

  const badge = document.getElementById('pending-badge');
  if (events.length > 0) { badge.textContent = events.length; badge.style.display = 'inline-block'; }
  else badge.style.display = 'none';

  const listEl = document.getElementById('pending-list');
  if (events.length === 0) {
    listEl.innerHTML = '<p class="empty">Ingen arrangementer venter på godkjenning.</p>';
    return;
  }

  listEl.innerHTML = events.map(ev => `
    <div class="event-card pending" id="pending-${escHtml(ev.id)}">
      <h3>${escHtml(ev.title)} <span style="font-weight:400;color:#888;font-size:.85rem;">${CAT[ev.category] || ev.category}${ev.customFood ? ' – ' + escHtml(ev.customFood) : ''}</span></h3>
      <div class="event-meta">
        <span>📅 ${formatDate(ev.date, ev.time)}</span>
        <span>📍 ${escHtml(ev.location)}</span>
        ${ev.organizer ? `<span>👥 ${escHtml(ev.organizer)}</span>` : ''}
        ${ev.contact   ? `<span>✉️ ${escHtml(ev.contact)}</span>`   : ''}
      </div>
      ${ev.description ? `<p class="event-desc">${escHtml(ev.description)}</p>` : ''}
      <div class="card-actions">
        <button class="btn-approve" onclick="approve('${escHtml(ev.id)}')">✓ Godkjenn</button>
        <button class="btn-reject"  onclick="reject('${escHtml(ev.id)}')">✕ Avslå</button>
      </div>
    </div>
  `).join('');
}

async function approve(id) {
  const res = await authFetch(`/api/admin/approve/${id}`, { method: 'POST' });
  if (res && res.ok) { loadPending(); loadPublished(); }
}

async function reject(id) {
  if (!confirm('Er du sikker på at du vil avslå dette arrangementet?')) return;
  const res = await authFetch(`/api/admin/reject/${id}`, { method: 'POST' });
  if (res && res.ok) loadPending();
}

/* ── Published events ─────────────────────────── */
async function loadPublished() {
  const res = await authFetch('/api/admin/events');
  if (!res) return;
  const events = await res.json();

  const listEl = document.getElementById('published-list');
  if (events.length === 0) {
    listEl.innerHTML = '<p class="empty">Ingen publiserte arrangementer.</p>';
    return;
  }

  listEl.innerHTML = events.map(ev => `
    <div class="event-card" id="published-${escHtml(ev.id)}">
      <h3>${escHtml(ev.title)} <span style="font-weight:400;color:#888;font-size:.85rem;">${CAT[ev.category] || ev.category}${ev.customFood ? ' – ' + escHtml(ev.customFood) : ''}</span></h3>
      <div class="event-meta">
        <span>📅 ${formatDate(ev.date, ev.time)}</span>
        <span>📍 ${escHtml(ev.location)}</span>
        ${ev.organizer ? `<span>👥 ${escHtml(ev.organizer)}</span>` : ''}
        ${ev.contact   ? `<span>✉️ ${escHtml(ev.contact)}</span>`   : ''}
      </div>
      ${ev.description ? `<p class="event-desc">${escHtml(ev.description)}</p>` : ''}
      <div class="card-actions">
        <button class="btn-delete" onclick="deleteEvent('${escHtml(ev.id)}')">🗑 Slett</button>
      </div>
    </div>
  `).join('');
}

async function deleteEvent(id) {
  if (!confirm('Er du sikker på at du vil slette dette arrangementet?')) return;
  const res = await authFetch(`/api/admin/events/${id}`, { method: 'DELETE' });
  if (res && res.ok) loadPublished();
}
