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
  const [activeHref, setActiveHref] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleActiveChanged = (e) => {
      const idx = e.detail
      // Map scroll section indices to nav links
      const hrefMap = {
        2: '#services',
        3: '#pricing',
        4: '#pricing',
        5: '#pricing',
        10: '#addons',
        12: '#process',
        15: '#inquiry'
      }
      setActiveHref(hrefMap[idx] || '')
    }

    window.addEventListener('activeSectionChanged', handleActiveChanged)
    return () => window.removeEventListener('activeSectionChanged', handleActiveChanged)
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
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.querySelector(href)
    if (el) {
      const rect = el.getBoundingClientRect()
      const targetY = rect.top + window.scrollY - 80
      window.scrollTo({ top: targetY, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <a href="#" className="navbar__logo" onClick={(e) => handleLinkClick(e, '#')}>DIGIDUK</a>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${link.href === activeHref ? 'navbar__link--active' : ''}`}
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
            className={`mobile-menu__link ${link.href === activeHref ? 'mobile-menu__link--active' : ''}`}
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
