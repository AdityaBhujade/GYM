export default function Hero() {
  return (
    <section className="hero" id="training">
      {/* Animated gradient glows */}
      <div className="hero-glow hero-glow-amber" />
      <div className="hero-glow hero-glow-red" />

      <div className="hero-content">
        <div className="hero-pre anim-fade-up-d1">
          Premium Athletic Training — Est. 2012
        </div>

        <h1 className="hero-h1 anim-fade-up-d2">
          FORGE YOUR
          <span>LIMITS.</span>
        </h1>

        <p className="hero-sub anim-fade-up-d3">
          Premium training. Relentless discipline.<br />Real results — forged in iron.
        </p>

        <div className="hero-btns anim-fade-up-d4">
          <a href="#contact" className="btn-primary">Begin Your Journey</a>
          <a href="#training" className="btn-ghost">Explore Programs</a>
        </div>
      </div>

      {/* Floating asymmetric badges */}
      <div className="hero-badges anim-fade-up-d3">
        <div className="hero-badge">
          <div className="hero-badge-num">12+</div>
          <div className="hero-badge-label">Years of Mastery</div>
        </div>
        <div className="hero-badge" style={{ marginLeft: 40 }}>
          <div className="hero-badge-num">2,400+</div>
          <div className="hero-badge-label">Elite Members</div>
        </div>
        <div className="hero-badge">
          <div className="hero-badge-num">98%</div>
          <div className="hero-badge-label">Success Rate</div>
        </div>
      </div>

      <div className="hero-scroll anim-fade-up-d4">
        <div className="hero-scroll-line" />
        Scroll to explore
      </div>
    </section>
  )
}
