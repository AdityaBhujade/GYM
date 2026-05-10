import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    image: '/images/carousel_weights.png',
    tag: 'Iron & Intent',
    heading: 'BUILD STRENGTH\nBEYOND LIMITS',
    body:
      'State-of-the-art free weights, Olympic platforms, and competition-grade equipment — engineered for those who refuse to settle for average.',
    cta: { label: 'Explore Equipment', href: '#training' },
    accent: 'gold',
  },
  {
    image: '/images/carousel_athlete.png',
    tag: 'Elite Performance',
    heading: 'FORGE YOUR\nBEST SELF',
    body:
      'Every rep. Every session. Every breakthrough. Our elite coaches design programming that adapts to your body and accelerates your results.',
    cta: { label: 'Meet Our Coaches', href: '#coaches' },
    accent: 'red',
  },
  {
    image: '/images/carousel_boxing.png',
    tag: 'Combat Conditioning',
    heading: 'FIGHT. TRAIN.\nDOMINATE.',
    body:
      'From boxing fundamentals to high-intensity combat conditioning — our ring is where cardiovascular endurance meets total-body power.',
    cta: { label: 'View Programs', href: '#programs' },
    accent: 'gold',
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('next')

  const goTo = useCallback(
    (idx, dir = 'next') => {
      if (animating || idx === current) return
      setDirection(dir)
      setAnimating(true)
      setTimeout(() => {
        setCurrent(idx)
        setAnimating(false)
      }, 550)
    },
    [animating, current]
  )

  const next = useCallback(
    () => goTo((current + 1) % slides.length, 'next'),
    [current, goTo]
  )
  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length, 'prev'),
    [current, goTo]
  )

  // Auto-play
  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const slide = slides[current]

  return (
    <section className="gym-carousel" id="gallery" aria-label="Gallery">
      {/* Background image with parallax-fade */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`gym-carousel-bg ${i === current ? 'gym-carousel-bg--active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden="true"
        />
      ))}

      {/* Dark overlay gradient */}
      <div className="gym-carousel-overlay" />

      {/* Decorative accent line */}
      <div className={`gym-carousel-accent gym-carousel-accent--${slide.accent}`} />

      {/* Content */}
      <div className={`gym-carousel-content ${animating ? `gym-carousel-content--exit-${direction}` : 'gym-carousel-content--enter'}`}>
        <div className="gym-carousel-tag">{slide.tag}</div>
        <h1 className="gym-carousel-heading">
          {slide.heading.split('\n').map((line, i) => (
            <span key={i} className={i === 1 ? 'gym-carousel-heading-accent' : ''}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>
        <div className="gym-carousel-rule" />
        <p className="gym-carousel-body">{slide.body}</p>
        <a href={slide.cta.href} className={`gym-carousel-cta gym-carousel-cta--${slide.accent}`}>
          {slide.cta.label}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Slide counter */}
      <div className="gym-carousel-counter" aria-live="polite">
        <span className="gym-carousel-counter-cur">{String(current + 1).padStart(2, '0')}</span>
        <span className="gym-carousel-counter-sep">/</span>
        <span className="gym-carousel-counter-total">{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Dot navigation */}
      <div className="gym-carousel-dots" role="tablist" aria-label="Slide navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            className={`gym-carousel-dot ${i === current ? 'gym-carousel-dot--active' : ''}`}
            onClick={() => goTo(i, i > current ? 'next' : 'prev')}
          />
        ))}
      </div>

      {/* Arrow controls */}
      <div className="gym-carousel-arrows">
        <button
          className="gym-carousel-arrow"
          onClick={prev}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="gym-carousel-arrow"
          onClick={next}
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="gym-carousel-progress">
        <div
          key={current}
          className={`gym-carousel-progress-bar gym-carousel-progress-bar--${slide.accent}`}
        />
      </div>
    </section>
  )
}
