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
  renderAdminPushStatus();
}

function showLogin() {
  loginSection.style.display = 'block';
  adminSection.style.display = 'none';
  logoutBtn.style.display    = 'none';
}

if (token) showAdmin(); else showLogin();

/* ── Admin push-varsler ───────────────────────── */
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = window.atob(base64);
  const arr = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
  return arr;
}

async function renderAdminPushStatus() {
  const wrap = document.getElementById('push-admin-wrap');
  if (!wrap) return;

  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    wrap.innerHTML = '<p style="font-size:.85rem;color:#888;">Nettleseren din støtter ikke push-varsler.</p>';
    return;
  }

  const reg = await navigator.serviceWorker.register('/sw.js');
  await navigator.serviceWorker.ready;
  const existing = await reg.pushManager.getSubscription();

  if (existing) {
    wrap.innerHTML = `<span style="font-size:.85rem;color:#2e7d32;font-weight:600;">🔔 Adminvarsler er aktivert</span>`;
    return;
  }

  wrap.innerHTML = `<button id="admin-push-btn" class="btn-approve" style="font-size:.85rem;">🔔 Aktiver varsler når noen sender inn arrangement</button>`;
  document.getElementById('admin-push-btn').addEventListener('click', async () => {
    const keyRes = await fetch('/api/push/public-key');
    const { publicKey } = await keyRes.json();
    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicKey)
    });
    await authFetch('/api/admin/push/subscribe', { method: 'POST', body: JSON.stringify(sub) });
    renderAdminPushStatus();
  });
}

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
