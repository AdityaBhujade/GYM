const coaches = [
  {
    initials: 'AM',
    name: 'ALEX MERCER',
    specialty: 'CrossFit & Athletic Performance',
    bio: 'Former competitive CrossFit athlete with 11 years of coaching experience. Alex specializes in functional movement, Olympic lifting mechanics, and building athletes who dominate in any environment.',
    years: 11,
    certs: 'CF-L3, CSCS, USAW',
  },
  {
    initials: 'JL',
    name: 'JADE LENNOX',
    specialty: 'Powerlifting & Strength',
    bio: 'National-level powerlifter and certified strength coach. Jade brings precision programming and deep biomechanical knowledge to every rep. She has coached 3 national champions in the past 5 years.',
    years: 9,
    certs: 'NSCA-CSCS, IPF Coach',
  },
  {
    initials: 'MC',
    name: 'MARIA CASTILLO',
    specialty: 'Boxing & Combat Conditioning',
    bio: 'Professional boxing background with 8 fights. Maria translates elite fight conditioning into accessible, high-intensity sessions that build cardiovascular endurance and total-body coordination.',
    years: 7,
    certs: 'USA Boxing, NASM-CPT',
  },
]

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  )
}

export default function Coaches() {
  return (
    <section className="coaches" id="coaches">
      <div className="coaches-inner">
        <div style={{ position: 'relative' }}>
          <div className="section-label">The Team</div>
          <h2 className="section-heading">COACHED BY<br />THE BEST</h2>
          <div className="section-number" style={{ right: 0, top: -10 }}>04</div>
        </div>

        <div className="coaches-grid">
          {coaches.map((c, i) => (
            <div className="coach-card" key={i}>
              <div className="coach-avatar">{c.initials}</div>
              <div className="coach-name">{c.name}</div>
              <div className="coach-specialty">{c.specialty}</div>
              <p className="coach-bio">{c.bio}</p>
              <div className="coach-exp">
                <strong>{c.years}</strong> Years Coaching
              </div>
              <div style={{ fontFamily: "'Barlow Condensed'", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 8 }}>
                {c.certs}
              </div>
              <div className="coach-social">
                <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
