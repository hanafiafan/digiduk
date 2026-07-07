import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'Add-ons', href: '#addons' },
  { label: 'Contact', href: '#inquiry' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <a href="#" className="navbar__logo">DIGIDUK</a>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#inquiry"
          className="navbar__cta"
          onClick={(e) => handleLinkClick(e, '#inquiry')}
        >
          Start a Project
        </a>

        <button
          className="navbar__mobile-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <button
          className="mobile-menu__close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          CLOSE ✕
        </button>
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-menu__link"
            style={{ transitionDelay: `${0.1 + i * 0.05}s` }}
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
