const testimonials = [
  {
    quote: "I've trained at high-end facilities across three countries. IRONFORGE is in a different league entirely. The programming is elite, the coaches are genuinely invested, and the environment makes mediocrity feel physically uncomfortable.",
    name: 'DAVID OSEI',
    meta: 'Member for 3 Years — Strength & Power',
  },
  {
    quote: "Lost 28kg and competed in my first powerlifting meet — all within 14 months. Jade's coaching didn't just change my body. It changed how I see myself.",
    name: 'SARAH NKEMDIRIM',
    meta: 'Member for 14 Months — Elite Coaching',
  },
  {
    quote: "The discipline here is contagious. You walk in and the entire culture pulls you forward. No mirrors. No egos. Just iron and intent.",
    name: 'JAMES WHITMORE',
    meta: 'Member for 5 Years — CrossFit & Conditioning',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-inner">
        <div style={{ position: 'relative' }}>
          <div className="section-label">Member Stories</div>
          <h2 className="section-heading">RESULTS THAT<br />SPEAK</h2>
          <div className="section-number" style={{ right: 0, top: -10 }}>05</div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-quote-mark">"</div>
              <p className="testi-text">{t.quote}</p>
              <div className="testi-stars">
                {Array(5).fill(null).map((_, j) => (
                  <span className="testi-star" key={j}>★</span>
                ))}
              </div>
              <div className="testi-divider" />
              <div className="testi-name">{t.name}</div>
              <div className="testi-meta">{t.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
