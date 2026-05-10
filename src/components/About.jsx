export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        {/* Left column */}
        <div>
          <div className="about-num">01</div>
          <div className="section-label">Our Philosophy</div>
          <h2 className="section-heading">
            BUILT ON IRON.<br />DRIVEN BY PURPOSE.
          </h2>
          <div className="gold-rule" />
          <p className="about-body">
            IRONFORGE was not built for the casual. It was built for those who understand that strength is not given — it is extracted through relentless repetition, intelligent programming, and an environment that refuses mediocrity. Every square foot of this facility exists to forge a better version of you.
          </p>
          <p className="about-body" style={{ marginTop: '-8px' }}>
            Our methodology fuses sports science with old-school grit. Precision periodization. Elite coaching. A culture where showing up is the baseline, not the achievement.
          </p>
          <blockquote className="about-blockquote">
            <p>"Iron never lies. It exposes exactly who you are — and exactly who you could become."</p>
            <div style={{ marginTop: 12, fontFamily: "'Barlow Condensed'", fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', fontStyle: 'normal' }}>
              — Marcus Reid, Founder & Head Coach
            </div>
          </blockquote>
        </div>

        {/* Right column — feature card */}
        <div className="about-card">
          <div className="about-card-title">Facility Highlights</div>
          <ul className="about-features">
            {[
              'Over 12,000 sq ft of dedicated training space',
              'Olympic platform area — 8 full rigs',
              'Cardio & conditioning zone with elite equipment',
              'Private coaching suites for 1-on-1 sessions',
              'Recovery lounge: cold plunge, sauna, stretch room',
              'Full nutritional guidance and meal planning',
              'Advanced movement analysis & biometric tracking',
              '24/7 member access with smart entry technology',
            ].map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
