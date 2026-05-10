import { useState } from 'react'

export default function CTABanner() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="cta-banner" id="contact">
      <div className="cta-banner-inner">
        <h2>
          YOUR FIRST<br />WEEK IS ON US.
        </h2>
        <p>
          No commitment. No catch. Walk in, experience the forge firsthand,<br />
          and decide if you're ready to become who you were built to be.
        </p>

        {submitted ? (
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 28,
            letterSpacing: '0.05em',
            color: 'var(--bg-primary)',
            borderBottom: '2px solid rgba(10,10,8,0.3)',
            paddingBottom: 16,
          }}>
            YOU'RE IN. EXPECT A CALL WITHIN 24 HOURS.
          </div>
        ) : (
          <form className="cta-form" onSubmit={handleSubmit}>
            <input
              className="cta-input"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="cta-btn">Claim Free Trial</button>
          </form>
        )}

        <div style={{ marginTop: 20, fontFamily: "'Barlow Condensed'", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(10,10,8,0.5)' }}>
          No credit card required — Full access for 7 days
        </div>
      </div>
    </section>
  )
}
