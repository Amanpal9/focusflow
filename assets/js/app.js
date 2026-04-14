/**
 * FocusFlow — Premium Student Focus App
 * assets/js/app.js
 *
 * Handles: screen navigation, Pomodoro timer, streak calendar,
 * subject selection, focus mode toggle, live clock, period switcher.
 */

/* ============================================================
   STATE
   ============================================================ */
const state = {
  currentScreen: 'home',
  timer: {
    running: false,
    seconds: 1500,        // 25 minutes default
    interval: null,
    session: 1,
    maxSessions: 4,
    totalCircumference: 603, // 2πr for r=96
  },
  focusMode: true,
};

/* ============================================================
   SCREEN NAVIGATION
   ============================================================ */
function switchScreen(id) {
  // Deactivate current
  document.getElementById('s-' + state.currentScreen)?.classList.remove('active');
  document.getElementById('di-' + state.currentScreen)?.classList.remove('active');

  // Activate new
  state.currentScreen = id;
  document.getElementById('s-' + id)?.classList.add('active');
  document.getElementById('di-' + id)?.classList.add('active');

  // Screen-specific init
  if (id === 'profile') buildStreakCalendar();
}

/* ============================================================
   HOME — Subject Pill Toggle
   ============================================================ */
function toggleSubj(el) {
  document.querySelectorAll('.subject-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
}

/* ============================================================
   FOCUS — Subject Button Select
   ============================================================ */
function selectSubj(el) {
  document.querySelectorAll('.subj-btn').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
}

/* ============================================================
   FOCUS — Focus Mode Toggle
   ============================================================ */
function toggleFocus(el) {
  el.classList.toggle('on');
  const isOn = el.classList.contains('on');
  state.focusMode = isOn;

  const iconEl  = document.getElementById('lock-icon');
  const labelEl = document.getElementById('lock-label');

  if (iconEl)  iconEl.textContent   = isOn ? '🔒' : '🔓';
  if (labelEl) {
    labelEl.textContent  = isOn ? 'Focus Mode Active' : 'Focus Mode Paused';
    labelEl.style.color  = isOn ? 'var(--mint)' : 'var(--amber)';
  }
}

/* ============================================================
   POMODORO TIMER
   ============================================================ */

/** Start or pause the timer */
function toggleTimer() {
  state.timer.running = !state.timer.running;
  const btn = document.getElementById('play-btn');

  if (state.timer.running) {
    btn.textContent = '⏸';
    state.timer.interval = setInterval(() => {
      if (state.timer.seconds > 0) {
        state.timer.seconds--;
        renderTimer();
      } else {
        // Session complete
        clearInterval(state.timer.interval);
        state.timer.running = false;
        btn.textContent = '▶';
        advanceSession();
      }
    }, 1000);
  } else {
    clearInterval(state.timer.interval);
    btn.textContent = '▶';
  }
}

/** Reset current session */
function resetTimer() {
  clearInterval(state.timer.interval);
  state.timer.running = false;
  state.timer.seconds = 1500;

  const btn = document.getElementById('play-btn');
  if (btn) btn.textContent = '▶';

  renderTimer();
}

/** Skip to next session */
function skipTimer() {
  resetTimer();
  advanceSession();
}

/** Increment session counter */
function advanceSession() {
  state.timer.session = Math.min(state.timer.session + 1, state.timer.maxSessions);
  const el = document.getElementById('session-count');
  if (el) el.textContent = `Session ${state.timer.session}/${state.timer.maxSessions}`;
}

/** Update DOM to reflect current timer state */
function renderTimer() {
  const { seconds, totalCircumference } = state.timer;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const display = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

  const dispEl = document.getElementById('timer-disp');
  if (dispEl) dispEl.textContent = display;

  // SVG ring progress (0% = full circle, 100% = empty)
  const progress = document.getElementById('timer-progress');
  if (progress) {
    const pct = (1500 - seconds) / 1500;
    progress.setAttribute('stroke-dashoffset', totalCircumference * (1 - pct));
  }
}

/* ============================================================
   LEADERBOARD — Period Switcher
   ============================================================ */
function switchPeriod(el) {
  document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

/* ============================================================
   PROFILE — Streak Calendar Builder
   ============================================================ */
function buildStreakCalendar() {
  const cal = document.getElementById('streak-cal');
  if (!cal || cal.children.length > 0) return; // already built

  for (let i = 0; i < 30; i++) {
    const dot = document.createElement('div');

    // Day 7 (index 6) = today, days 0-21 studied (skip 4 & 11 for realism)
    if (i === 6) {
      dot.className = 'cal-dot today';
    } else if (i < 22 && i !== 4 && i !== 11) {
      dot.className = 'cal-dot done';
    } else {
      dot.className = 'cal-dot';
    }

    cal.appendChild(dot);
  }
}

/* ============================================================
   LIVE CLOCK
   ============================================================ */
function updateClock() {
  const now  = new Date();
  const h    = String(now.getHours()).padStart(2, '0');
  const m    = String(now.getMinutes()).padStart(2, '0');
  const el   = document.getElementById('live-clock');
  if (el) el.textContent = `${h}:${m}`;
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderTimer();
  buildStreakCalendar();
  updateClock();

  // Refresh clock every minute
  setInterval(updateClock, 60_000);
});
