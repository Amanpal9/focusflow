# FocusFlow 🎯

> **Beat distractions. Track progress. Outrank your peers.**

A premium mobile-first student focus application inspired by Yeolpumta (YPT), rebuilt with a modern dark UI, stricter focus controls, and rich analytics. Designed to help students develop deep work habits and stay accountable.

---

## ✨ Features

### ⏱️ Pomodoro Focus Timer
- Animated SVG ring with gradient progress
- 25-minute sessions (customisable)
- Play / Pause / Reset / Skip controls
- Session counter (1–4 Pomodoros)

### 🔒 Focus Mode (App Blocker UI)
- Toggle focus lock on/off
- Allow-listed apps (Notes, PDF Reader, Calculator)
- Block-listed apps (YouTube, Instagram, Games)
- Live lock/unlock status indicator

### 📊 Analytics Dashboard
- Weekly study hours bar chart
- Subject-wise time breakdown with progress bars
- Peak productivity window detection
- 3 summary metric cards (hours, focus %, growth)

### 🏆 Leaderboard
- Gold / Silver / Bronze podium for top 3
- Full ranked list with streak and speciality info
- Your position highlighted with point delta
- Daily / Weekly / Monthly period switcher

### 👤 Profile & Gamification
- XP bar with level badge
- 30-day streak calendar (color-coded)
- Achievement badges (unlocked + locked)
- Lifetime stats: total hours, streak, badge count

### 🏠 Home Dashboard
- Live clock in status bar
- 4-card stats grid (today, focus score, weekly, rank)
- 21-day streak banner with fire animation
- One-tap "Start Focus Session" CTA
- Subject filter pills
- Daily goal progress bar

---

## 🗂️ Project Structure

```
focusflow/
├── index.html              # App entry point (semantic HTML5)
├── assets/
│   ├── css/
│   │   └── style.css       # All styles — design tokens, layout, components
│   ├── js/
│   │   └── app.js          # All interactivity — timer, navigation, state
│   └── icons/
│       └── favicon.svg     # App icon (add your own)
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Quick Start

### Option 1 — Open directly (no build needed)
```bash
git clone https://github.com/ishu7w/focusflow.git
cd focusflow
open index.html          # macOS
# or
start index.html         # Windows
# or
xdg-open index.html      # Linux
```

### Option 2 — Local dev server (recommended)
```bash
# Using Python
python3 -m http.server 8080

# Using Node.js (npx)
npx serve .

# Then open: http://localhost:8080
```

---

## 🛠️ Tech Stack

| Layer      | Technology              | Why |
|------------|-------------------------|-----|
| Markup     | HTML5 (semantic)        | Accessibility, SEO-ready |
| Styles     | Pure CSS3               | Zero dependencies, fast |
| Scripts    | Vanilla JS (ES2021)     | No framework overhead |
| Fonts      | Google Fonts CDN        | DM Sans + Space Grotesk |
| Design     | Glassmorphism + Aurora  | Premium, calming feel |

> **No build tools. No npm install. No bundler.** Just open and go.

---

## 🎨 Design System

### Color Palette
```css
--bg:     #08091A   /* Deep navy background     */
--blue:   #7C9FFF   /* Primary accent            */
--mint:   #5FDDBB   /* Success / focus active    */
--amber:  #F4A261   /* Streak / warnings         */
--purple: #C589FF   /* XP / level / gamification */
--red:    #FF7B7B   /* Blocked / danger          */
```

### Typography
- **Display / UI** — Space Grotesk (600, 700)
- **Body / Labels** — DM Sans (300, 400, 500)

### Key Patterns
- **Glassmorphism cards** — `backdrop-filter: blur(20px)` + semi-transparent border
- **Aurora background** — 4 animated radial-gradient orbs with CSS `@keyframes`
- **Dock** — macOS-style nav bar with glow states
- **Timer ring** — SVG `stroke-dashoffset` animation

---

## 📱 Responsive Behaviour

The app is built as a **mobile-first** experience centered in a 420×780px phone shell. On desktop it appears as a centered app preview — ideal for demos, pitches, and GitHub Pages hosting.

---

## 🌐 Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Your app will be live at:
   ```
   https://YOUR_USERNAME.github.io/focusflow/
   ```

---

## 🗺️ Roadmap

- [ ] localStorage persistence (timer state, session count)
- [ ] Custom Pomodoro durations (settings screen)
- [ ] Subject management (add/remove/reorder)
- [ ] Dark/light mode toggle
- [ ] Offline support via Service Worker (PWA)
- [ ] Push notifications for break reminders
- [ ] Backend integration (Node.js + PostgreSQL)
- [ ] Real leaderboard with friend invites
- [ ] React / Next.js migration
- [ ] React Native mobile port

---

## 🤝 Contributing

Pull requests are welcome!

```bash
# Fork the repo, then:
git checkout -b feature/your-feature
# Make your changes
git commit -m "feat: describe your change"
git push origin feature/your-feature
# Open a PR on GitHub
```

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

MIT — see [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgements

- Inspired by [Yeolpumta (YPT)](https://yelpumta.com) — the Korean study timer app
- UI inspired by components from [21st.dev](https://21st.dev)
- Fonts by [Google Fonts](https://fonts.google.com)

---

<p align="center">
  Made with 💙 to help students focus better
</p>

