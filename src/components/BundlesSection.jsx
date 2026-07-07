import { bundles, bundlePromoNote, bundleClarifications } from '../data/bundles'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function BundlesSection() {
  const ref = useScrollReveal()

  return (
    <section className="section section--darker pricing--dark" ref={ref}>
      <div className="container">
        <div className="pricing__header">
          <div className="pricing__category-label">
            <span className="text-label">F</span>
            <span className="text-label" style={{ color: 'var(--color-accent)' }}>•</span>
            <span className="text-label">Bundles</span>
          </div>
          <h2 className="text-subheadline reveal">
            META ADS <span className="text-accent">BUNDLES</span>
          </h2>
          <p className="reveal stagger-1" style={{ marginTop: '8px', color: 'var(--color-muted)', maxWidth: '500px' }}>
            Kombinasi Meta Ads + Pixel untuk efisiensi biaya dan integrasi yang lebih solid.
          </p>
        </div>

        <div className="bundles__grid">
          {bundles.map((bundle, i) => (
            <div key={i} className={`bundle-card reveal stagger-${i + 1}`}>
              <div className="bundle-card__name">{bundle.name}</div>
              <div className="bundle-card__price">{bundle.price}</div>
            </div>
          ))}
        </div>

        {/* Promo Note */}
        <div className="reveal stagger-6" style={{
          marginTop: '32px',
          padding: '20px 24px',
          background: 'rgba(101,71,245,0.08)',
          borderLeft: '3px solid var(--color-accent)',
          maxWidth: '600px'
        }}>
          <p style={{ fontWeight: 600, marginBottom: '8px', fontSize: 'var(--text-body-sm)' }}>
            {bundlePromoNote}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {bundleClarifications.map((item, i) => (
              <span key={i} className="text-mono" style={{ fontSize: '12px', color: 'var(--color-muted)' }}>
                — {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
