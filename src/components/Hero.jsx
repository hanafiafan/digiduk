import { useScrollReveal } from '../hooks/useScrollReveal'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const ref = useScrollReveal()

  const meta = [
    'Custom Website',
    'E-Commerce',
    'Meta Ads',
    'Tracking Setup',
    'Indonesia / Remote'
  ]

  return (
    <section className="hero" id="hero" ref={ref}>
      {/* Background orbs */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      {/* 3D-ish Art Element */}
      <div className="hero__art" aria-hidden="true">
        <div className="hero__art-grid" />
        <div className="hero__art-shape hero__art-shape--1" />
        <div className="hero__art-shape hero__art-shape--2" />
        <div className="hero__art-shape hero__art-shape--3" />
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="hero__art-dot"
            style={{
              top: '50%',
              left: '50%',
              '--orbit-duration': `${8 + i * 3}s`,
              animationDelay: `${-i * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container hero__content">
        <div className="text-label reveal stagger-1" style={{ marginBottom: '24px' }}>
          Digital Studio — Ratecard 2025
        </div>

        <h1 className="text-hero">
          <div className="hero__title-line">
            <span className="hero__title-word" style={{ animationDelay: '0.3s' }}>
              DIGITAL SYSTEMS
            </span>
          </div>
          <div className="hero__title-line">
            <span className="hero__title-word" style={{ animationDelay: '0.5s' }}>
              BUILT TO <span className="text-accent">PERFORM</span>
            </span>
          </div>
          <div className="hero__title-line" style={{ marginTop: '12px' }}>
            <span
              className="hero__title-word text-italic"
              style={{
                animationDelay: '0.7s',
                fontSize: 'clamp(20px, 3.5vw, 52px)',
                color: 'var(--color-muted)'
              }}
            >
              designed to be remembered.
            </span>
          </div>
        </h1>

        <p className="hero__subtitle reveal stagger-3">
          Kami merancang website, sistem e-commerce, tracking, dan kampanye digital
          yang dibangun untuk bekerja—bukan sekadar terlihat bagus.
        </p>

        <div className="hero__ctas reveal stagger-4">
          <MagneticButton
            className="btn btn--primary"
            onClick={() => {
              const el = document.querySelector('#services')
              if (el) { const r = el.getBoundingClientRect(); window.scrollTo({ top: r.top + window.scrollY - 80, behavior: 'smooth' }) }
            }}
          >
            <span>Explore Services</span>
            <span className="btn-arrow">→</span>
          </MagneticButton>
          <MagneticButton
            className="btn btn--light"
            onClick={() => {
              const el = document.querySelector('#pricing')
              if (el) { const r = el.getBoundingClientRect(); window.scrollTo({ top: r.top + window.scrollY - 80, behavior: 'smooth' }) }
            }}
          >
            <span>View Ratecard</span>
          </MagneticButton>
        </div>

        <div className="hero__meta reveal stagger-5">
          {meta.map((item) => (
            <span key={item} className="hero__meta-item">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
