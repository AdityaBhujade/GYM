import { useState, useEffect } from 'react'

function Logo() {
  return (
    <svg width="200" height="40" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
      {/* I-beam geometric mark */}
      <g fill="#E8A020">
        <rect x="2" y="4" width="18" height="3" />
        <rect x="8" y="7" width="6" height="22" />
        <rect x="2" y="29" width="18" height="3" />
        <rect x="2" y="17" width="18" height="1.5" />
      </g>
      {/* Wordmark */}
      <text
        x="28"
        y="30"
        fontFamily="'Barlow Condensed', 'Arial Narrow', Arial, sans-serif"
        fontSize="26"
        fontWeight="700"
        letterSpacing="3"
        fill="#F2EDE4"
        textAnchor="start"
      >
        IRONFORGE
      </text>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <Logo />
        <ul className="nav-links">
          {['Training', 'Classes', 'Coaches', 'Pricing', 'Contact'].map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={closeMenu}>{link}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta" style={{ display: menuOpen ? 'none' : 'inline-block' }}>
          Start Free Trial
        </a>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {['Training', 'Classes', 'Coaches', 'Pricing', 'Contact'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>{link}</a>
        ))}
        <a href="#contact" className="nav-cta" onClick={closeMenu} style={{ marginTop: 20, fontSize: 16, padding: '14px 40px' }}>
          Start Free Trial
        </a>
      </div>
    </>
  )
}
