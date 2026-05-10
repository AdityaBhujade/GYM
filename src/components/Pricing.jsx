const plans = [
  {
    tier: 'Basic',
    name: 'FORGE BASIC',
    price: 49,
    featured: false,
    features: [
      'Full gym floor access',
      'Group classes (5/week max)',
      'Locker room & showers',
      'Mobile app access',
      'Monthly fitness assessment',
    ],
  },
  {
    tier: 'Most Popular',
    name: 'FORGE PRO',
    price: 89,
    featured: true,
    features: [
      'Unlimited gym access (24/7)',
      'Unlimited group classes',
      'Recovery lounge access',
      '2 Personal training sessions/mo',
      'Nutrition consultation',
      'Priority class booking',
      'Personalized program design',
    ],
  },
  {
    tier: 'Elite',
    name: 'FORGE ELITE',
    price: 179,
    featured: false,
    features: [
      'Everything in Forge Pro',
      '8 Personal training sessions/mo',
      'Monthly body composition scan',
      'Custom meal planning',
      'Direct coach messaging',
      'Guest passes (2/month)',
      'IRONFORGE gear kit',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-inner">
        <div style={{ position: 'relative' }}>
          <div className="section-label">Membership</div>
          <h2 className="section-heading">INVEST IN<br />YOURSELF</h2>
          <div className="section-number" style={{ right: 0, top: -10 }}>06</div>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div className={`pricing-card ${p.featured ? 'featured' : ''}`} key={i}>
              {p.featured && <div className="pricing-popular">Most Popular</div>}
              <div className="pricing-tier">{p.tier}</div>
              <div className="pricing-name">{p.name}</div>
              <div className="pricing-price">
                <span className="price-currency">$</span>
                <span className="price-num">{p.price}</span>
                <span className="price-period">/ mo</span>
              </div>
              <ul className="pricing-features">
                {p.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <a
                href="#contact"
                className={p.featured ? 'btn-primary' : 'btn-ghost'}
                style={{ display: 'block', textAlign: 'center' }}
              >
                {p.featured ? 'Start Now' : 'Choose Plan'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
