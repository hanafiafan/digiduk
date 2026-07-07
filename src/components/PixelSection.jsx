import { pixelPackages } from '../data/pixel'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useProposalMode } from '../context/ProposalModeContext'

export default function PixelSection() {
  const ref = useScrollReveal()
  const { proposalMode } = useProposalMode()

  return (
    <section className="section section--dark pricing--dark" id="pixel" ref={ref}>
      <div className="container">
        <div className="pricing__header">
          <div className="pricing__category-label">
            <span className="text-label">E</span>
            <span className="text-label" style={{ color: 'var(--color-accent)' }}>•</span>
            <span className="text-label">Tracking</span>
          </div>
          <h2 className="text-subheadline reveal">
            META PIXEL & <span className="text-accent">CONVERSION API</span>
          </h2>
          <p className="reveal stagger-1" style={{ marginTop: '8px', color: 'var(--color-muted)', maxWidth: '520px' }}>
            Implementasi tracking event untuk data kampanye yang lebih akurat dan
            keputusan berbasis performa.
          </p>
        </div>

        {/* Event Flow Visualization */}
        <div className="reveal stagger-2" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          padding: '32px',
          margin: '0 0 48px',
          borderRadius: '8px',
          background: 'rgba(101,71,245,0.04)',
          border: '1px solid rgba(101,71,245,0.1)',
          flexWrap: 'wrap'
        }}>
          {['PageView', 'ViewContent', 'AddToCart', 'InitiateCheckout', 'Purchase'].map((event, i) => (
            <div key={event} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{
                padding: '8px 16px',
                background: 'rgba(101,71,245,0.12)',
                borderRadius: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '0.05em',
                color: 'var(--color-accent-light)',
                animation: `shape-pulse ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}>
                {event}
              </div>
              {i < 4 && (
                <span style={{ color: 'var(--color-accent)', fontSize: '16px' }}>→</span>
              )}
            </div>
          ))}
        </div>

        <div className="pricing__grid">
          {pixelPackages.map((pkg, i) => {
            let hppMetrics = null
            if (proposalMode && pkg.internalPrice) {
              const publicPriceNum = parseInt(pkg.price.replace(/[^\d]/g, ''))
              const internalPriceNum = parseInt(pkg.internalPrice.replace(/[^\d]/g, ''))
              if (!isNaN(publicPriceNum) && !isNaN(internalPriceNum)) {
                const markup = publicPriceNum - internalPriceNum
                const markupPercentage = ((markup / internalPriceNum) * 100).toFixed(0)
                const grossMargin = ((markup / publicPriceNum) * 100).toFixed(0)
                hppMetrics = {
                  hpp: pkg.internalPrice,
                  markup: `${markupPercentage}%`,
                  margin: `${grossMargin}%`
                }
              }
            }

            return (
              <div key={pkg.id} className={`pricing-card reveal stagger-${i + 1}`}>
                <div className="pricing-card__head">
                  <h3 className="pricing-card__name" style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}>{pkg.name}</h3>
                  {pkg.priceLabel && (
                    <div className="pricing-card__price-label">{pkg.priceLabel}</div>
                  )}
                  <div className="pricing-card__price" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>{pkg.price}</div>
                  
                  {proposalMode && hppMetrics && (
                    <div className="hpp-price-display">
                      <span className="hpp-price-label">Internal HPP / COGS</span>
                      <div className="hpp-price-value">{hppMetrics.hpp}</div>
                      <div className="hpp-metrics-grid">
                        <div className="hpp-metric-box">
                          <span className="hpp-metric-label">Markup</span>
                          <span className="hpp-metric-value" style={{ color: '#00ff66' }}>+{hppMetrics.markup}</span>
                        </div>
                        <div className="hpp-metric-box">
                          <span className="hpp-metric-label">Margin</span>
                          <span className="hpp-metric-value" style={{ color: '#00ff66' }}>{hppMetrics.margin}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <p className="pricing-card__ideal" style={{ marginTop: '12px' }}>
                    Ideal: {pkg.ideal}
                  </p>
                </div>
                <div className="pricing-card__features">
                  <h4>Termasuk</h4>
                  <div className="pricing-card__feature-list">
                    {pkg.features.map((feature, j) => (
                      <div key={j} className="pricing-card__feature">{feature}</div>
                    ))}
                  </div>
                </div>
                <div className="pricing-card__footer">
                  <span className="pricing-card__warranty" />
                  <button
                    className="btn btn--primary btn--small"
                    onClick={() => {
                      const el = document.querySelector('#inquiry')
                      if (el) { const r = el.getBoundingClientRect(); window.scrollTo({ top: r.top + window.scrollY - 80, behavior: 'smooth' }) }
                    }}
                  >
                    <span>Mulai</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="pricing-card__note reveal" style={{
          marginTop: '32px',
          maxWidth: '600px',
          background: 'rgba(101,71,245,0.08)',
          borderLeft: '3px solid var(--color-accent)',
          padding: '16px 20px'
        }}>
          Harga final bergantung pada platform website, ketersediaan akses, kompleksitas event, dan kualitas implementasi yang sudah ada.
        </div>
      </div>
    </section>
  )
}
