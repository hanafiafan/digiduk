import { metaAdsTiers, metaAdsScope, metaAdsExclusions } from '../data/metaAds'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useProposalMode } from '../context/ProposalModeContext'

export default function MetaAdsSection() {
  const ref = useScrollReveal()
  const { proposalMode } = useProposalMode()

  return (
    <section className="section section--darker pricing--dark" id="meta-ads" ref={ref}>
      <div className="container">
        <div className="pricing__header">
          <div className="pricing__category-label">
            <span className="text-label">D</span>
            <span className="text-label" style={{ color: 'var(--color-accent)' }}>•</span>
            <span className="text-label">Paid Media</span>
          </div>
          <h2 className="text-headline reveal" style={{ maxWidth: '800px' }}>
            PAID MEDIA
            <br />
            WITH A <span className="text-accent">SYSTEM</span>.
          </h2>
          <p className="reveal stagger-1" style={{ marginTop: '12px' }}>
            <span className="text-italic" style={{ fontSize: 'clamp(18px, 2vw, 28px)', color: 'var(--color-muted)' }}>
              Not random boosting.
            </span>
          </p>
        </div>

        {/* Scope */}
        <div className="reveal stagger-2" style={{ marginBottom: '48px' }}>
          <h3 className="text-label" style={{ marginBottom: '16px' }}>Service Scope</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '8px' }}>
            {metaAdsScope.map((item, i) => (
              <div key={i} className="pricing-card__feature">{item}</div>
            ))}
          </div>
        </div>

        {/* Tier Table */}
        <div className="tier-table reveal stagger-3">
          <div className="tier-row tier-row__header">
            <div className="tier-row__cell">Tier</div>
            <div className="tier-row__cell">Ad Budget / bulan</div>
            <div className="tier-row__cell">Management Fee {proposalMode && <span style={{ color: '#00ff66' }}>(HPP / Margin)</span>}</div>
          </div>

          {metaAdsTiers.map((tier) => {
            let marginText = ''
            if (proposalMode && tier.internalPrice) {
              const publicNum = parseInt(tier.price.replace(/[^\d]/g, ''))
              const internalNum = parseInt(tier.internalPrice.replace(/[^\d]/g, ''))
              if (!isNaN(publicNum) && !isNaN(internalNum)) {
                marginText = `(Margin: ${(((publicNum - internalNum) / publicNum) * 100).toFixed(0)}%)`
              }
            }

            return (
              <div key={tier.tier} className="tier-row">
                <div className="tier-row__number">T{tier.tier}</div>
                <div className="tier-row__cell">
                  {tier.budget}
                  <span className="text-label" style={{ display: 'block', marginTop: '2px', fontSize: '10px' }}>
                    {tier.budgetLabel}
                  </span>
                </div>
                <div className="tier-row__cell">
                  <span className="tier-row__price">{tier.price}</span>
                  {proposalMode && tier.internalPrice && (
                    <span className="text-mono" style={{ display: 'block', marginTop: '4px', fontSize: '12px', color: '#00ff66' }}>
                      HPP: {tier.internalPrice} {marginText}
                    </span>
                  )}
                  {tier.priceNote && (
                    <span className="text-mono" style={{ display: 'block', marginTop: '4px', fontSize: '11px', color: 'var(--color-muted)' }}>
                      {tier.priceNote}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Exclusions */}
        <div className="reveal stagger-4" style={{ marginTop: '48px' }}>
          <h3 className="text-label" style={{ marginBottom: '16px' }}>Tidak Termasuk</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {metaAdsExclusions.map((item, i) => (
              <span
                key={i}
                style={{
                  padding: '6px 14px',
                  border: '1px solid rgba(242,240,233,0.1)',
                  fontSize: '13px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-muted)',
                  borderRadius: '4px'
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="pricing-card__note reveal stagger-5" style={{
          marginTop: '32px',
          maxWidth: '600px',
          background: 'rgba(101, 71, 245, 0.08)',
          borderLeft: '3px solid var(--color-accent)',
          padding: '16px 20px'
        }}>
          Minimum tiga bulan direkomendasikan untuk proses learning, testing, dan optimasi yang lebih stabil.
        </div>
      </div>
    </section>
  )
}
