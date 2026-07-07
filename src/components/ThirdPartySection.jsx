import { thirdPartyServices } from '../data/thirdParty'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ThirdPartySection() {
  const ref = useScrollReveal()

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className="pricing__header">
          <div className="text-label reveal">Transparency</div>
          <h2 className="text-subheadline reveal stagger-1">
            THIRD-PARTY <span className="text-italic">Services</span>
          </h2>
          <p className="reveal stagger-2" style={{ marginTop: '8px', color: 'var(--color-muted)', maxWidth: '520px' }}>
            Informasi biaya layanan pihak ketiga yang terintegrasi dalam proyek Anda.
          </p>
        </div>

        <div className="third-party__items">
          {thirdPartyServices.map((service, i) => (
            <div key={i} className={`third-party-card reveal stagger-${i + 1}`}>
              <div className="third-party-card__provider">{service.provider}</div>
              <div className="third-party-card__notes">
                {service.notes.map((note, j) => (
                  <div key={j} className="third-party-card__note">{note}</div>
                ))}
              </div>
              {service.wording && (
                <div style={{
                  marginTop: '16px',
                  padding: '12px 16px',
                  background: 'rgba(101,71,245,0.04)',
                  borderLeft: '2px solid var(--color-accent)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  lineHeight: 1.7,
                  color: 'var(--color-muted)'
                }}>
                  "{service.wording}"
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
