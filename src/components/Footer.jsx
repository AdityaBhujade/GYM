function LogoSmall() {
  return (
    <svg width="160" height="34" viewBox="0 0 160 34" xmlns="http://www.w3.org/2000/svg">
      <g fill="#E8A020">
        <rect x="2" y="3" width="14" height="2.5" />
        <rect x="6" y="5.5" width="5" height="18" />
        <rect x="2" y="23.5" width="14" height="2.5" />
        <rect x="2" y="13.2" width="14" height="1.2" />
      </g>
      <text x="22" y="25" fontFamily="'Barlow Condensed', Arial, sans-serif" fontSize="21" fontWeight="700" letterSpacing="2.5" fill="#F2EDE4">IRONFORGE</text>
    </svg>
  )
}

function InstagramSVG() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  )
}

function YoutubeSVG() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke="none" fill="currentColor"/>
    </svg>
  )
}

function TwitterXSVG() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        {/* Col 1 — Logo + tagline */}
        <div>
          <LogoSmall />
          <p className="footer-tagline">
            Where raw iron meets refined discipline. A facility engineered for those who take their performance as seriously as their legacy.
          </p>
          <div className="footer-socials">
            <a className="footer-social" href="#" aria-label="Instagram"><InstagramSVG /></a>
            <a className="footer-social" href="#" aria-label="YouTube"><YoutubeSVG /></a>
            <a className="footer-social" href="#" aria-label="Twitter/X"><TwitterXSVG /></a>
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <div className="footer-col-title">Quick Links</div>
          <ul className="footer-links">
            {['Training Programs', 'Class Schedule', 'Our Coaches', 'Membership Plans', 'Free Trial', 'Member Portal'].map(l => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Programs */}
        <div>
          <div className="footer-col-title">Programs</div>
          <ul className="footer-links">
            {['Strength & Power', 'HIIT & Conditioning', 'Elite Coaching', 'Boxing & Combat', 'Yoga Recovery', 'Powerlifting'].map(l => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-contact">
            <li><span>Address</span>14 Forge Street, Industrial Quarter, NY 10014</li>
            <li><span>Phone</span>+1 (212) 555-0174</li>
            <li><span>Email</span>forge@ironforge.gym</li>
            <li><span>Hours</span>Mon–Fri 5AM–11PM<br />Sat–Sun 6AM–9PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} IRONFORGE GYM. All rights reserved.
        </div>
        <div className="footer-motto">
          IRONFORGE GYM — <span>FORGE YOUR LIMITS</span>
        </div>
      </div>
    </footer>
  )
}
