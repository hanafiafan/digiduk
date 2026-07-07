import { useScrollReveal } from '../hooks/useScrollReveal'
import { useProposalMode } from '../context/ProposalModeContext'

export default function PricingCard({ pkg, index }) {
  const ref = useScrollReveal()
  const { proposalMode } = useProposalMode()

  // Calculate HPP metrics if proposalMode is active
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
    <div
      ref={ref}
      className={`pricing-card reveal stagger-${index + 1} ${pkg.featured ? 'pricing-card--featured' : ''}`}
    >
      <div className="pricing-card__head">
        <span className="pricing-card__number">PACKAGE {pkg.number}</span>
        <h3 className="pricing-card__name">{pkg.name}</h3>
        {pkg.priceLabel && (
          <div className="pricing-card__price-label">{pkg.priceLabel}</div>
        )}
        <div className="pricing-card__price">{pkg.price}</div>
        
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
        
        <p className="pricing-card__ideal" style={{ marginTop: '12px' }}>{pkg.ideal}</p>
      </div>

      <div className="pricing-card__features">
        <h4>Termasuk</h4>
        <div className="pricing-card__feature-list">
          {pkg.features.map((feature, i) => (
            <div key={i} className="pricing-card__feature">{feature}</div>
          ))}
        </div>
      </div>

      {pkg.excludes && pkg.excludes.length > 0 && (
        <div className="pricing-card__features" style={{ opacity: 0.6 }}>
          <h4>Tidak Termasuk</h4>
          <div className="pricing-card__feature-list">
            {pkg.excludes.map((item, i) => (
              <div key={i} className="pricing-card__feature" style={{ color: 'var(--color-muted)' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {pkg.note && (
        <div className="pricing-card__note">{pkg.note}</div>
      )}

      <div className="pricing-card__footer">
        <span className="pricing-card__warranty">{pkg.warranty}</span>
        <button
          className="btn btn--primary btn--small"
          onClick={() => window.scrollTo({ top: 15000, behavior: 'smooth' })}
        >
          <span>Mulai Proyek</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </div>
  )
}
