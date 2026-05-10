export const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&family=DM+Sans:wght@300;400;500&family=Oswald:wght@400;600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg-primary: #0A0A08;
  --bg-secondary: #111110;
  --bg-card: #1A1A18;
  --accent-gold: #E8A020;
  --accent-red: #C1272D;
  --text-primary: #F2EDE4;
  --text-muted: #7A7570;
  --border: #2A2A28;
  --surface-hover: #222220;
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'DM Sans', sans-serif;
  font-weight: 300;
  overflow-x: hidden;
}

/* Noise grain overlay */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
  opacity: 0.35;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-60px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.12; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.06); }
}

@keyframes countUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.anim-fade-up { animation: fadeUp 0.8s ease forwards; }
.anim-fade-up-d1 { animation: fadeUp 0.8s ease 0.1s forwards; opacity: 0; }
.anim-fade-up-d2 { animation: fadeUp 0.8s ease 0.25s forwards; opacity: 0; }
.anim-fade-up-d3 { animation: fadeUp 0.8s ease 0.4s forwards; opacity: 0; }
.anim-fade-up-d4 { animation: fadeUp 0.8s ease 0.55s forwards; opacity: 0; }
.anim-slide-left { animation: slideInLeft 0.7s ease forwards; }

/* NAV */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  transition: background 0.3s ease, border-bottom 0.3s ease;
  padding: 0 48px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav.scrolled {
  background: rgba(10,10,8,0.97);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(8px);
}
.nav-links { display: flex; gap: 36px; list-style: none; }
.nav-links a {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--text-muted);
  transition: color 0.2s;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -3px; left: 0;
  width: 0; height: 1px;
  background: var(--accent-gold);
  transition: width 0.3s ease;
}
.nav-links a:hover { color: var(--text-primary); }
.nav-links a:hover::after { width: 100%; }

.nav-cta {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-gold);
  background: transparent;
  border: 1.5px solid var(--accent-gold);
  padding: 10px 24px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.25s, color 0.25s;
  border-radius: 0;
}
.nav-cta:hover { background: var(--accent-gold); color: var(--bg-primary); }

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 26px; height: 2px;
  background: var(--text-primary);
  transition: all 0.3s ease;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.mobile-menu {
  position: fixed;
  inset: 0;
  background: var(--bg-primary);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
}
.mobile-menu.open { transform: translateX(0); }
.mobile-menu a {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 52px;
  letter-spacing: 0.06em;
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.2s;
}
.mobile-menu a:hover { color: var(--accent-gold); }

/* SECTION COMMON */
.section-number {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(120px, 18vw, 200px);
  color: var(--border);
  position: absolute;
  top: -20px; right: -20px;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}
.section-label {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--accent-gold);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}
.section-label::before {
  content: '';
  display: block;
  width: 32px; height: 1px;
  background: var(--accent-gold);
}
.section-heading {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(42px, 6vw, 72px);
  line-height: 0.95;
  letter-spacing: 0.03em;
  color: var(--text-primary);
}

.gold-rule {
  width: 60px; height: 2px;
  background: var(--accent-gold);
  margin: 24px 0;
}

/* HERO */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 140px 48px 80px;
}
.hero::after {
  content: 'IRON';
  position: absolute;
  top: 50%; right: -5%;
  transform: translateY(-50%);
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(200px, 35vw, 400px);
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(232, 160, 32, 0.15);
  pointer-events: none;
  z-index: 0;
  line-height: 1;
}
.hero-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.hero-glow-amber {
  width: 800px; height: 800px;
  background: radial-gradient(circle, rgba(232,160,32,0.12) 0%, transparent 70%);
  top: -200px; right: -100px;
  animation: glowPulse 6s ease-in-out infinite;
}
.hero-glow-red {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(193,39,45,0.08) 0%, transparent 70%);
  bottom: 0; left: 200px;
  animation: glowPulse 8s ease-in-out infinite reverse;
}
.hero-content { position: relative; z-index: 1; max-width: 900px; }
.hero-pre {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent-gold);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}
.hero-pre::before {
  content: '';
  display: block;
  width: 48px; height: 1px;
  background: var(--accent-gold);
}
.hero-h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(80px, 12vw, 160px);
  line-height: 0.88;
  letter-spacing: 0.02em;
  margin-bottom: 0;
}
.hero-h1 span { color: var(--accent-gold); display: block; }
.hero-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 17px;
  font-weight: 300;
  color: var(--text-muted);
  letter-spacing: 0.01em;
  margin-top: 36px;
  margin-bottom: 52px;
  max-width: 440px;
  line-height: 1.8;
}
.hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-primary {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: var(--accent-gold);
  color: var(--bg-primary);
  border: none;
  padding: 16px 48px 16px 40px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  border-radius: 0;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  transition: background 0.2s, transform 0.2s;
}
.btn-primary:hover { background: #d4911c; transform: translateY(-3px) scale(1.02); }
.btn-ghost {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: transparent;
  color: var(--text-primary);
  border: 1.5px solid var(--border);
  padding: 16px 40px 16px 48px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  border-radius: 0;
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
  transition: border-color 0.2s, color 0.2s;
}
.btn-ghost:hover { border-color: var(--accent-gold); color: var(--accent-gold); }

.hero-badges {
  position: absolute;
  right: 48px; top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 18px;
  z-index: 1;
}
.hero-badge {
  border: 1px solid var(--border);
  background: rgba(26,26,24,0.8);
  padding: 16px 20px;
  backdrop-filter: blur(6px);
}
.hero-badge-num {
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: var(--accent-gold);
  line-height: 1;
}
.hero-badge-label {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-top: 4px;
}
.hero-scroll {
  position: absolute;
  bottom: 40px; left: 48px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.hero-scroll-line {
  width: 48px; height: 1px;
  background: var(--text-muted);
}

/* STATS BAR */
.stats-bar {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 56px 48px;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}
.stat-item {
  padding: 0 40px;
  border-right: 1px solid var(--border);
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.stat-item.visible { opacity: 1; animation: countUp 0.6s ease forwards; }
.stat-item:first-child { padding-left: 0; }
.stat-item:last-child { border-right: none; }
.stat-num {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
}
.stat-num span { color: var(--accent-gold); }
.stat-label {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-top: 8px;
}

/* ABOUT */
.about {
  padding: 120px 48px;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
  background: var(--bg-primary);
  padding-bottom: 160px;
}
.about-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 80px;
  align-items: start;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.about-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(100px, 14vw, 180px);
  color: var(--accent-gold);
  opacity: 0.08;
  line-height: 0.8;
  margin-bottom: -40px;
}
.about-body {
  font-family: 'DM Sans', sans-serif;
  font-size: 15.5px;
  line-height: 1.85;
  color: var(--text-muted);
  margin: 20px 0 28px;
  max-width: 520px;
}
.about-blockquote {
  border-left: 2px solid var(--accent-gold);
  padding-left: 24px;
  margin: 32px 0;
}
.about-blockquote p {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: var(--text-primary);
  font-style: italic;
  line-height: 1.4;
}
.about-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent-gold);
  padding: 56px 48px;
  margin-top: -60px;
  position: relative;
  z-index: 10;
  box-shadow: 20px 20px 0 rgba(10,10,8,0.5);
}
.about-card-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--accent-gold);
  margin-bottom: 28px;
}
.about-features { list-style: none; display: flex; flex-direction: column; gap: 16px; }
.about-features li {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: var(--text-muted);
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}
.about-features li:last-child { border-bottom: none; padding-bottom: 0; }
.about-features li::before {
  content: '—';
  color: var(--accent-gold);
  flex-shrink: 0;
  font-weight: 700;
}

/* PROGRAMS */
.programs {
  padding: 120px 48px;
  background: var(--bg-secondary);
  position: relative;
}
.programs-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 64px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}
.programs-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1280px;
  margin: 0 auto;
  align-items: start;
}
.program-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 3px solid transparent;
  padding: 48px 40px;
  transition: border-color 0.3s, background 0.3s, transform 0.3s;
  cursor: default;
}
.program-card:nth-child(2) {
  margin-top: 60px;
}
.program-card:hover {
  border-left-color: var(--accent-gold);
  background: var(--surface-hover);
  transform: translateY(-8px);
}
.program-tag {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--accent-gold);
  margin-bottom: 20px;
}
.program-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(28px, 3vw, 38px);
  letter-spacing: 0.03em;
  color: var(--text-primary);
  line-height: 1.05;
  margin-bottom: 16px;
}
.program-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 32px;
}
.program-meta {
  display: flex;
  gap: 24px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}
.program-meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.program-meta-label {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.program-meta-value {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
}
.difficulty-bar {
  margin-bottom: 32px;
}
.difficulty-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.difficulty-track {
  height: 2px;
  background: var(--border);
}
.difficulty-fill {
  height: 100%;
  background: var(--accent-gold);
  transition: width 1s ease;
}
.program-link {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-gold);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid transparent;
  width: fit-content;
  transition: gap 0.2s, border-color 0.2s;
}
.program-link:hover { gap: 16px; border-color: var(--accent-gold); }

/* SCHEDULE */
.schedule {
  padding: 120px 48px 140px;
  background: var(--bg-primary);
  clip-path: polygon(0 4%, 100% 0, 100% 96%, 0 100%);
  padding-top: 160px;
  position: relative;
}
.schedule-inner { max-width: 1380px; margin: 0 auto; position: relative; z-index: 1; }

/* Legend */
.sched-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
  padding: 18px 24px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  width: fit-content;
}
.sched-legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.sched-legend-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Board wrapper */
.sched-board {
  border: 1px solid var(--border);
  overflow-x: auto;
}

/* Day headers row */
.sched-day-headers {
  display: grid;
  grid-template-columns: 110px repeat(6, 1fr);
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  min-width: 760px;
}
.sched-day-header {
  padding: 14px 16px;
  border-left: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.sched-day-abbr {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 0.08em;
  color: var(--accent-gold);
  line-height: 1;
}
.sched-day-full {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.sched-period-col {
  padding: 14px 16px;
}

/* Each time-slot row */
.sched-row {
  display: grid;
  grid-template-columns: 110px repeat(6, 1fr);
  border-bottom: 1px solid var(--border);
  min-width: 760px;
}
.sched-row:last-child { border-bottom: none; }

/* Period label column */
.sched-period-col {
  padding: 18px 16px;
  border-right: 1px solid var(--border);
  background: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  flex-shrink: 0;
}
.sched-period-label {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-gold);
}
.sched-period-time {
  font-family: 'Oswald', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
}

/* Individual day cell */
.sched-cell {
  padding: 10px 12px;
  border-left: 1px solid var(--border);
  background: var(--bg-card);
  min-height: 90px;
}

/* Class card inside a cell */
.sched-card {
  padding: 10px 12px;
  height: 100%;
  cursor: default;
  transition: filter 0.2s;
}
.sched-card:hover { filter: brightness(1.15); }
.sched-class-type {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 4px;
  opacity: 0.85;
}
.sched-class-name {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.25;
  margin-bottom: 5px;
}
.sched-class-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 5px;
}
.sched-coach {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  color: var(--text-muted);
}
.sched-dur {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  border: 1px solid var(--border);
  padding: 1px 6px;
}
.sched-spots {
  font-family: 'DM Sans', sans-serif;
  font-size: 10px;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  opacity: 0.7;
}

/* Empty cell */
.sched-empty {
  width: 100%;
  height: 100%;
  min-height: 70px;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 8px,
    rgba(255,255,255,0.012) 8px,
    rgba(255,255,255,0.012) 9px
  );
}

.sched-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  flex-wrap: wrap;
  gap: 20px;
}
.sched-note {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  color: var(--text-muted);
  font-style: italic;
}

/* COACHES */
.coaches {
  padding: 120px 48px;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}
.coaches-inner { max-width: 1280px; margin: 0 auto; position: relative; z-index: 1; }
.coaches-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 64px;
  align-items: start;
}
.coach-card:nth-child(2) {
  margin-top: 48px;
}
.coach-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-top: 2px solid transparent;
  padding: 48px 40px;
  transition: border-top-color 0.3s, transform 0.3s;
}
.coach-card:hover {
  border-top-color: var(--accent-gold);
  transform: translateY(-6px);
}
.coach-avatar {
  width: 72px; height: 72px;
  border-radius: 50%;
  background: var(--accent-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px;
  letter-spacing: 0.05em;
  color: var(--bg-primary);
  margin-bottom: 28px;
}
.coach-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
  letter-spacing: 0.04em;
  color: var(--text-primary);
  margin-bottom: 8px;
}
.coach-specialty {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-gold);
  margin-bottom: 20px;
}
.coach-bio {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 24px;
}
.coach-exp {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
  padding-top: 20px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 8px;
}
.coach-exp strong {
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
}
.coach-social {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}
.coach-social a {
  color: var(--text-muted);
  transition: color 0.2s;
  display: flex;
  align-items: center;
}
.coach-social a:hover { color: var(--accent-gold); }

/* TESTIMONIALS */
.testimonials {
  padding: 120px 48px;
  background: var(--bg-primary);
  position: relative;
}
.testimonials-inner { max-width: 1280px; margin: 0 auto; }
.testimonials-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 1fr;
  gap: 24px;
  margin-top: 64px;
  align-items: start;
}
.testi-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 2px solid var(--accent-gold);
  padding: 40px;
}
.testi-card:nth-child(2) { margin-top: 60px; }
.testi-quote-mark {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 80px;
  line-height: 0.6;
  color: var(--accent-gold);
  margin-bottom: 20px;
  opacity: 0.6;
}
.testi-text {
  font-size: 15px;
  line-height: 1.75;
  color: var(--text-muted);
  margin-bottom: 28px;
}
.testi-stars {
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
}
.testi-star { color: var(--accent-gold); font-size: 14px; }
.testi-divider { width: 40px; height: 1px; background: var(--border); margin-bottom: 20px; }
.testi-name {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-primary);
}
.testi-meta {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 4px;
}

/* PRICING */
.pricing {
  padding: 120px 48px;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}
.pricing-inner { max-width: 1280px; margin: 0 auto; position: relative; z-index: 1; }
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 64px;
  align-items: center;
}
.pricing-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 56px 48px;
  position: relative;
}
.pricing-card.featured {
  background: var(--bg-primary);
  border: 2px solid var(--accent-gold);
  transform: scale(1.05);
  box-shadow: 0 40px 60px rgba(0,0,0,0.4);
  z-index: 2;
  clip-path: polygon(0 0, 100% 0, 100% 96%, 90% 100%, 0 100%);
}
.pricing-popular {
  position: absolute;
  top: 0; left: 50%;
  transform: translate(-50%, -50%);
  background: var(--accent-gold);
  color: var(--bg-primary);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 6px 20px;
  white-space: nowrap;
}
.pricing-tier {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 16px;
}
.pricing-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 36px;
  letter-spacing: 0.05em;
  color: var(--text-primary);
  margin-bottom: 32px;
}
.pricing-price {
  display: flex;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
}
.price-currency {
  font-family: 'Oswald', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: var(--text-muted);
  margin-top: 8px;
}
.price-num {
  font-family: 'Oswald', sans-serif;
  font-size: 72px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
}
.pricing-card.featured .price-num { color: var(--accent-gold); }
.price-period {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px;
  color: var(--text-muted);
  align-self: flex-end;
  margin-bottom: 10px;
}
.pricing-features { list-style: none; display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; }
.pricing-features li {
  font-size: 14px;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 12px;
}
.pricing-features li::before {
  content: '✓';
  color: var(--accent-gold);
  font-weight: 700;
  flex-shrink: 0;
}

/* CTA BANNER */
.cta-banner {
  padding: 100px 48px;
  background: linear-gradient(135deg, var(--accent-gold) 0%, #d4911c 50%, var(--accent-red) 100%);
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  padding-top: 140px;
  padding-bottom: 140px;
  position: relative;
  overflow: hidden;
}
.cta-banner::before {
  content: 'FORGE';
  position: absolute;
  right: -80px; top: 50%;
  transform: translateY(-50%);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 300px;
  line-height: 1;
  color: rgba(0,0,0,0.06);
  pointer-events: none;
  user-select: none;
}
.cta-banner-inner {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.cta-banner h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(52px, 8vw, 100px);
  line-height: 0.9;
  color: var(--bg-primary);
  letter-spacing: 0.02em;
  margin-bottom: 20px;
}
.cta-banner p {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  color: rgba(10,10,8,0.75);
  margin-bottom: 40px;
  line-height: 1.7;
}
.cta-form {
  display: flex;
  gap: 0;
  max-width: 520px;
}
.cta-input {
  flex: 1;
  padding: 16px 24px;
  background: rgba(10,10,8,0.15);
  border: 1.5px solid rgba(10,10,8,0.3);
  border-right: none;
  color: var(--bg-primary);
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  border-radius: 0;
  outline: none;
}
.cta-input::placeholder { color: rgba(10,10,8,0.45); }
.cta-input:focus { background: rgba(10,10,8,0.22); }
.cta-btn {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: var(--bg-primary);
  color: var(--accent-gold);
  border: none;
  padding: 16px 32px;
  cursor: pointer;
  border-radius: 0;
  transition: background 0.2s;
  white-space: nowrap;
}
.cta-btn:hover { background: #0f0f0c; }

/* FOOTER */
footer {
  background: var(--bg-primary);
  border-top: 2px solid var(--accent-gold);
  padding: 80px 48px 40px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
  gap: 60px;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 60px;
  border-bottom: 1px solid var(--border);
}
.footer-tagline {
  font-size: 13px;
  line-height: 1.7;
  color: var(--text-muted);
  margin-top: 20px;
  max-width: 240px;
}
.footer-col-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--text-primary);
  margin-bottom: 24px;
}
.footer-links { list-style: none; display: flex; flex-direction: column; gap: 12px; }
.footer-links a {
  font-size: 14px;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
  font-family: 'DM Sans', sans-serif;
}
.footer-links a:hover { color: var(--accent-gold); }
.footer-contact {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.footer-contact li {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.5;
}
.footer-contact span { color: var(--accent-gold); display: block; font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 2px; }
.footer-socials { display: flex; gap: 16px; margin-top: 24px; }
.footer-social {
  width: 40px; height: 40px;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: border-color 0.2s, color 0.2s;
  cursor: pointer;
}
.footer-social:hover { border-color: var(--accent-gold); color: var(--accent-gold); }
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  max-width: 1280px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 16px;
}
.footer-copy {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  text-transform: uppercase;
}
.footer-motto {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 16px;
  letter-spacing: 0.15em;
  color: var(--text-muted);
}
.footer-motto span { color: var(--accent-gold); }

/* RESPONSIVE */
@media (max-width: 1024px) {
  nav { padding: 0 32px; }
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .hero { padding: 120px 32px 60px; }
  .hero-badges { display: none; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .stat-item:nth-child(2) { border-right: none; }
  .stat-item:nth-child(3) { border-right: 1px solid var(--border); padding-top: 40px; }
  .stat-item:nth-child(4) { border-right: none; padding-top: 40px; }
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .programs-cards { grid-template-columns: 1fr; gap: 1px; }
  .programs-header { flex-direction: column; align-items: flex-start; gap: 20px; }
  .coaches-grid { grid-template-columns: 1fr; gap: 16px; }
  .testimonials-grid { grid-template-columns: 1fr; gap: 16px; }
  .testi-card:nth-child(2) { margin-top: 0; }
  .pricing-grid { grid-template-columns: 1fr; background: none; border: none; gap: 16px; }
  .pricing-card.featured { transform: scale(1); border: 2px solid var(--accent-gold); }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
  .cta-form { flex-direction: column; }
  .cta-input { border-right: 1.5px solid rgba(10,10,8,0.3); }
  .sched-board { overflow-x: auto; }
}

@media (max-width: 640px) {
  nav { padding: 0 20px; }
  .hero { padding: 100px 20px 60px; }
  .stats-bar { padding: 40px 20px; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .about, .programs, .coaches, .testimonials, .pricing, .testimonials { padding: 80px 20px; }
  .schedule { padding: 100px 20px; }
  .cta-banner { padding: 100px 20px; }
  footer { padding: 60px 20px 32px; }
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
  .footer-bottom { flex-direction: column; align-items: flex-start; }
  .sched-board { overflow-x: auto; }
  .schedule { padding: 100px 20px 80px; }
  .sched-footer { flex-direction: column; align-items: flex-start; }

  /* CAROUSEL – mobile */
  .gym-carousel { height: 100vh; min-height: 480px; }
  .gym-carousel-heading { font-size: clamp(36px, 9vw, 52px); }
  .gym-carousel-body { font-size: 14px; }
  .gym-carousel-arrows { display: none; }
  .gym-carousel-counter { left: 20px; bottom: 60px; }
}

/* =====================
   GYM CAROUSEL
   ===================== */

.gym-carousel {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 620px;
  overflow: hidden;
  background: var(--bg-primary);
}

/* Background slides – layered, only active is visible */
.gym-carousel-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(1.08);
  transition: opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 6s ease;
  will-change: opacity, transform;
}
.gym-carousel-bg--active {
  opacity: 1;
  transform: scale(1);
}

/* Dark gradient overlay – left fade for text readability */
.gym-carousel-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(10,10,8,0.88) 0%, rgba(10,10,8,0.55) 55%, rgba(10,10,8,0.15) 100%),
    linear-gradient(0deg, rgba(10,10,8,0.65) 0%, transparent 50%);
  z-index: 1;
}

/* Vertical gold/red accent bar on the left edge */
.gym-carousel-accent {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 4px;
  z-index: 3;
  transition: background 0.5s ease;
}
.gym-carousel-accent--gold { background: var(--accent-gold); }
.gym-carousel-accent--red  { background: var(--accent-red); }

/* ---- Content ---- */
.gym-carousel-content {
  position: absolute;
  left: 72px;
  top: calc(50% + 36px); /* offset for fixed navbar */
  transform: translateY(-50%);
  z-index: 2;
  max-width: 560px;
}

/* Enter/exit animations – translateY(-50%) pairs with top: calc(50% + 36px) */
@keyframes carouselEnterNext {
  from { opacity: 0; transform: translateY(calc(-50%)) translateX(-40px); }
  to   { opacity: 1; transform: translateY(calc(-50%)) translateX(0); }
}
@keyframes carouselEnterPrev {
  from { opacity: 0; transform: translateY(calc(-50%)) translateX(40px); }
  to   { opacity: 1; transform: translateY(calc(-50%)) translateX(0); }
}
@keyframes carouselExitNext {
  from { opacity: 1; transform: translateY(calc(-50%)) translateX(0); }
  to   { opacity: 0; transform: translateY(calc(-50%)) translateX(40px); }
}
@keyframes carouselExitPrev {
  from { opacity: 1; transform: translateY(calc(-50%)) translateX(0); }
  to   { opacity: 0; transform: translateY(calc(-50%)) translateX(-40px); }
}

.gym-carousel-content--enter {
  animation: carouselEnterNext 0.55s cubic-bezier(0.4,0,0.2,1) forwards;
}
.gym-carousel-content--exit-next {
  animation: carouselExitNext 0.55s cubic-bezier(0.4,0,0.2,1) forwards;
  pointer-events: none;
}
.gym-carousel-content--exit-prev {
  animation: carouselExitPrev 0.55s cubic-bezier(0.4,0,0.2,1) forwards;
  pointer-events: none;
}

.gym-carousel-tag {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--accent-gold);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}
.gym-carousel-tag::before {
  content: '';
  display: block;
  width: 32px; height: 1px;
  background: var(--accent-gold);
}

.gym-carousel-heading {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(52px, 7vw, 96px);
  line-height: 0.92;
  letter-spacing: 0.03em;
  color: var(--text-primary);
  margin-bottom: 0;
}
.gym-carousel-heading-accent {
  color: var(--accent-gold);
}

.gym-carousel-rule {
  width: 56px;
  height: 2px;
  background: var(--accent-gold);
  margin: 24px 0;
  opacity: 0.8;
}

.gym-carousel-body {
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 40px;
  max-width: 440px;
}

.gym-carousel-cta {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 40px 14px 32px;
  border: none;
  cursor: pointer;
  clip-path: polygon(0 0, 100% 0, 88% 100%, 0 100%);
  transition: transform 0.2s ease, filter 0.2s ease, gap 0.2s;
}
.gym-carousel-cta--gold {
  background: var(--accent-gold);
  color: var(--bg-primary);
}
.gym-carousel-cta--red {
  background: var(--accent-red);
  color: var(--text-primary);
}
.gym-carousel-cta:hover {
  transform: translateY(-3px) scale(1.02);
  filter: brightness(1.1);
  gap: 16px;
}

/* ---- Slide counter ---- */
.gym-carousel-counter {
  position: absolute;
  left: 72px;
  bottom: 48px;
  z-index: 3;
  display: flex;
  align-items: baseline;
  gap: 6px;
}
.gym-carousel-counter-cur {
  font-family: 'Oswald', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: var(--accent-gold);
  line-height: 1;
}
.gym-carousel-counter-sep {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px;
  color: var(--text-muted);
  font-weight: 600;
}
.gym-carousel-counter-total {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-muted);
}

/* ---- Dot navigation ---- */
.gym-carousel-dots {
  position: absolute;
  right: 48px;
  bottom: 52px;
  z-index: 3;
  display: flex;
  gap: 10px;
  align-items: center;
}
.gym-carousel-dot {
  width: 32px;
  height: 2px;
  background: rgba(242,237,228,0.25);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.3s, width 0.3s;
  border-radius: 1px;
}
.gym-carousel-dot--active {
  background: var(--accent-gold);
  width: 56px;
}

/* ---- Arrow controls ---- */
.gym-carousel-arrows {
  position: absolute;
  right: 48px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.gym-carousel-arrow {
  width: 48px;
  height: 48px;
  border: 1.5px solid rgba(242,237,228,0.2);
  background: rgba(10,10,8,0.5);
  backdrop-filter: blur(6px);
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s, background 0.2s, color 0.2s, transform 0.2s;
}
.gym-carousel-arrow:hover {
  border-color: var(--accent-gold);
  background: rgba(232,160,32,0.15);
  color: var(--accent-gold);
  transform: scale(1.08);
}

/* ---- Progress bar ---- */
.gym-carousel-progress {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 3px;
  background: rgba(242,237,228,0.08);
  z-index: 3;
}
@keyframes carouselProgress {
  from { width: 0%; }
  to   { width: 100%; }
}
.gym-carousel-progress-bar {
  height: 100%;
  animation: carouselProgress 6s linear forwards;
}
.gym-carousel-progress-bar--gold { background: var(--accent-gold); }
.gym-carousel-progress-bar--red  { background: var(--accent-red); }
`;
