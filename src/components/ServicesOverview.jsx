import { services } from '../data/services'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ServicesOverview() {
  const ref = useScrollReveal()

  return (
    <section className="services section" id="services" ref={ref}>
      <div className="container">
        <div className="services__header">
          <div>
            <div className="text-label reveal">What We Build</div>
            <h2 className="text-subheadline reveal stagger-1" style={{ marginTop: '12px' }}>
              SERVICES <span className="text-italic">overview</span>
            </h2>
          </div>
          <p className="reveal stagger-2" style={{ maxWidth: '400px', color: 'var(--color-muted)', fontSize: 'var(--text-body-sm)' }}>
            Setiap layanan dirancang sebagai sistem digital yang saling terhubung
            — bukan produk terpisah.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div key={service.id} className={`service-card reveal stagger-${i + 1}`}>
              <div className="service-card__content">
                <span className="service-card__number">{service.number}</span>
                <h3 className="service-card__title">{service.name}</h3>
                <p className="service-card__desc">{service.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
