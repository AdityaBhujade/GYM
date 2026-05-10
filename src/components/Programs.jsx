const programs = [
  {
    tag: 'Strength & Power',
    name: 'STRENGTH & POWER',
    desc: 'Progressive overload meets intelligent periodization. Built for those who want to move serious weight and build a physique that commands respect. Barbell-centric, science-backed, results-guaranteed.',
    duration: '60–90 min',
    frequency: '4x / Week',
    difficulty: 85,
    level: 'Intermediate – Advanced',
  },
  {
    tag: 'Conditioning',
    name: 'HIIT & CONDITIONING',
    desc: 'High-intensity intervals engineered to incinerate fat while preserving hard-earned muscle. Each session is a calculated assault on your cardiovascular ceiling — leaving nothing on the floor.',
    duration: '45 min',
    frequency: '3–5x / Week',
    difficulty: 70,
    level: 'All Levels',
  },
  {
    tag: 'Personal Coaching',
    name: 'ELITE COACHING',
    desc: '1-on-1 sessions with our top-tier coaches. Full movement audit, custom programming, and weekly check-ins. For those who refuse to leave results to chance. The fastest path from where you are to where you need to be.',
    duration: '60 min',
    frequency: 'Flexible',
    difficulty: 95,
    level: 'All Levels',
  },
]

export default function Programs() {
  return (
    <section className="programs" id="training">
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64, flexWrap: 'wrap', gap: 20, position: 'relative' }}>
          <div>
            <div className="section-label">What We Offer</div>
            <h2 className="section-heading">TRAINING<br />PROGRAMS</h2>
          </div>
          <div className="section-number">02</div>
          <a href="#contact" className="btn-ghost">View All Programs</a>
        </div>
      </div>

      <div className="programs-cards">
        {programs.map((p, i) => (
          <div className="program-card" key={i}>
            <div className="program-tag">{p.tag}</div>
            <div className="program-name">{p.name}</div>
            <p className="program-desc">{p.desc}</p>
            <div className="program-meta">
              <div className="program-meta-item">
                <div className="program-meta-label">Duration</div>
                <div className="program-meta-value">{p.duration}</div>
              </div>
              <div className="program-meta-item">
                <div className="program-meta-label">Frequency</div>
                <div className="program-meta-value">{p.frequency}</div>
              </div>
            </div>
            <div className="difficulty-bar">
              <div className="difficulty-label">
                <span>Intensity</span>
                <span>{p.level}</span>
              </div>
              <div className="difficulty-track">
                <div className="difficulty-fill" style={{ width: `${p.difficulty}%` }} />
              </div>
            </div>
            <a href="#contact" className="program-link">
              Explore Program →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
