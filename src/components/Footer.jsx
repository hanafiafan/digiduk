import { useScrollReveal } from '../hooks/useScrollReveal'

const marqueeText = 'STRATEGY × DESIGN × DEVELOPMENT × PERFORMANCE × '

export default function Footer() {
  const ref = useScrollReveal()

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <h2 className="footer__headline reveal">
          LET'S BUILD
          <br />
          SOMETHING <span className="text-accent">USEFUL</span>.
          <span className="text-italic">
            and impossible to ignore.
          </span>
        </h2>

        <div className="footer__cta-row reveal stagger-2">
          <a
            href="#inquiry"
            className="btn btn--primary"
            onClick={(e) => {
              e.preventDefault()
              const el = document.querySelector('#inquiry')
              if (el) { const r = el.getBoundingClientRect(); window.scrollTo({ top: r.top + window.scrollY - 80, behavior: 'smooth' }) }
            }}
          >
            <span>Start a Project</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>

      {/* Marquee */}
      <div className="footer__marquee">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i}>
                {marqueeText.split(' × ').map((word, j) => (
                  <span key={j}>
                    {word}
                    {j < marqueeText.split(' × ').length - 1 && (
                      <span className="marquee-separator"> × </span>
                    )}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <div className="footer__col">
            <span className="footer__col-title">Contact</span>
            <a href="mailto:hello@digiduk.com" className="footer__link">hello@digiduk.com</a>
            <a href="https://wa.me/6281234567890" className="footer__link" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>

          <div className="footer__col">
            <span className="footer__col-title">Social</span>
            <a href="#" className="footer__link">Instagram</a>
            <a href="#" className="footer__link">Behance</a>
          </div>

          <div className="footer__col">
            <span className="footer__col-title">Services</span>
            <a href="#pricing" className="footer__link">E-Commerce</a>
            <a href="#pricing" className="footer__link">Landing Page</a>
            <a href="#pricing" className="footer__link">Brand Portfolio</a>
            <a href="#meta-ads" className="footer__link">Meta Ads</a>
          </div>

          <div className="footer__col">
            <span className="footer__col-title">Legal</span>
            <a href="#" className="footer__link">Privacy Policy</a>
            <a href="#" className="footer__link">Terms of Service</a>
          </div>

          <div className="footer__col">
            <span className="footer__col-title">Location</span>
            <span className="footer__link">Indonesia / Remote</span>
          </div>
        </div>

        <div className="footer__copy">
          © {new Date().getFullYear()} DIGIDUK. Built to perform. Designed to be remembered.
        </div>
      </div>
    </footer>
  )
}
