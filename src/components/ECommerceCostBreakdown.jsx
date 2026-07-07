import { useState } from 'react'
import { useProposalMode } from '../context/ProposalModeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

const data = {
  core: {
    name: 'E-Commerce Core',
    price: 12500000,
    hpp: 6250000,
    clientBreakdown: [
      { name: 'System Development', percentage: 60 },
      { name: 'Infrastructure', percentage: 15 },
      { name: 'Integration', percentage: 10 },
      { name: 'Deployment', percentage: 5 },
      { name: 'Support', percentage: 10 }
    ],
    internalBreakdown: [
      { name: 'UI/UX & System Architecture (HPP)', value: 1250000, percentage: 10 },
      { name: 'Frontend Development (HPP)', value: 2000000, percentage: 16 },
      { name: 'Backend & Database (HPP)', value: 1500000, percentage: 12 },
      { name: 'Custom CMS (HPP)', value: 1000000, percentage: 8 },
      { name: 'Infrastructure & Deployment (HPP)', value: 500000, percentage: 4 }
    ]
  },
  complete: {
    name: 'E-Commerce Complete',
    price: 15900000,
    hpp: 8000000,
    clientBreakdown: [
      { name: 'System Development', percentage: 55 },
      { name: 'Infrastructure', percentage: 20 },
      { name: 'Integration', percentage: 15 },
      { name: 'Deployment', percentage: 5 },
      { name: 'Support', percentage: 5 }
    ],
    internalBreakdown: [
      { name: 'UI/UX & System Architecture (HPP)', value: 1500000, percentage: 9.4 },
      { name: 'Frontend Development (HPP)', value: 2500000, percentage: 15.7 },
      { name: 'Backend & Database (HPP)', value: 2000000, percentage: 12.6 },
      { name: 'Custom CMS (HPP)', value: 1200000, percentage: 7.5 },
      { name: 'Infrastructure & Deployment (HPP)', value: 800000, percentage: 5 }
    ]
  }
}

export default function ECommerceCostBreakdown() {
  const ref = useScrollReveal()
  const { proposalMode } = useProposalMode()
  const [selectedKey, setSelectedKey] = useState('core')

  const activeData = data[selectedKey]
  const currentPrice = activeData.price
  const currentHpp = activeData.hpp
  const currentMarkup = currentPrice - currentHpp
  const markupPercentage = ((currentMarkup / currentHpp) * 100).toFixed(1)
  const grossMargin = ((currentMarkup / currentPrice) * 100).toFixed(1)

  const formatIDR = (num) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num)
  }

  return (
    <section className="section cost-breakdown" id="cost-breakdown" ref={ref}>
      <div className="container">
        <div className="pricing__header">
          <div className="pricing__category-label">
            <span className="text-label">E-Commerce</span>
            <span className="text-label" style={{ color: 'var(--color-accent)' }}>•</span>
            <span className="text-label">Structure</span>
          </div>
          <h2 className="text-subheadline reveal">
            COST <span className="text-accent">BREAKDOWN</span>
          </h2>
          <p className="reveal stagger-1" style={{ marginTop: '8px', color: 'var(--color-muted)', maxWidth: '520px' }}>
            Transparansi alokasi sumber daya dan biaya pengembangan sistem e-commerce Anda.
          </p>
        </div>

        <div className="cost-breakdown__grid">
          {/* Package Selector */}
          <div className="cost-breakdown__selector reveal stagger-2">
            <button
              className={`cost-breakdown__option-btn ${selectedKey === 'core' ? 'cost-breakdown__option-btn--active' : ''}`}
              onClick={() => setSelectedKey('core')}
            >
              <span className="cost-breakdown__option-title">E-Commerce Core</span>
              <span className="cost-breakdown__option-price">{formatIDR(data.core.price)}</span>
            </button>
            <button
              className={`cost-breakdown__option-btn ${selectedKey === 'complete' ? 'cost-breakdown__option-btn--active' : ''}`}
              onClick={() => setSelectedKey('complete')}
            >
              <span className="cost-breakdown__option-title">E-Commerce Complete</span>
              <span className="cost-breakdown__option-price">{formatIDR(data.complete.price)}</span>
            </button>

            {proposalMode && (
              <div className="hpp-price-display" style={{ marginTop: '24px' }}>
                <span className="hpp-price-label">Proposal Mode Info</span>
                <div className="hpp-metrics-grid">
                  <div className="hpp-metric-box">
                    <span className="hpp-metric-label">HPP / COGS</span>
                    <span className="hpp-metric-value">{formatIDR(currentHpp)}</span>
                  </div>
                  <div className="hpp-metric-box">
                    <span className="hpp-metric-label">Gross Profit</span>
                    <span className="hpp-metric-value">{formatIDR(currentMarkup)}</span>
                  </div>
                  <div className="hpp-metric-box">
                    <span className="hpp-metric-label">Markup</span>
                    <span className="hpp-metric-value" style={{ color: '#00ff66' }}>{markupPercentage}%</span>
                  </div>
                  <div className="hpp-metric-box">
                    <span className="hpp-metric-label">Gross Margin</span>
                    <span className="hpp-metric-value" style={{ color: '#00ff66' }}>{grossMargin}%</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chart Display */}
          <div className="cost-breakdown__chart-card reveal stagger-3">
            <h3 className="cost-breakdown__chart-title">
              {activeData.name} — {proposalMode ? 'Internal HPP & Margin' : 'Resource Allocation'}
            </h3>

            <div className="cost-breakdown__bars">
              {/* If Client View */}
              {!proposalMode &&
                activeData.clientBreakdown.map((item, i) => {
                  const val = (currentPrice * (item.percentage / 100))
                  return (
                    <div key={i} className="cost-breakdown__bar-row">
                      <div className="cost-breakdown__bar-header">
                        <span className="cost-breakdown__bar-name">{item.name}</span>
                        <span className="cost-breakdown__bar-val">{formatIDR(val)} ({item.percentage}%)</span>
                      </div>
                      <div className="cost-breakdown__bar-container">
                        <div
                          className="cost-breakdown__bar-fill"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  )
                })}

              {/* If Internal Proposal View */}
              {proposalMode && (
                <>
                  {activeData.internalBreakdown.map((item, i) => (
                    <div key={i} className="cost-breakdown__bar-row">
                      <div className="cost-breakdown__bar-header">
                        <span className="cost-breakdown__bar-name">{item.name}</span>
                        <span className="cost-breakdown__bar-val">{formatIDR(item.value)}</span>
                      </div>
                      <div className="cost-breakdown__bar-container">
                        <div
                          className="cost-breakdown__bar-fill"
                          style={{
                            width: `${(item.value / currentPrice) * 100}%`,
                            backgroundColor: 'var(--color-accent-light)'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                  
                  {/* Gross Profit bar */}
                  <div className="cost-breakdown__bar-row">
                    <div className="cost-breakdown__bar-header">
                      <span className="cost-breakdown__bar-name" style={{ color: '#00ff66', fontWeight: 600 }}>Gross Profit / Margin (Internal)</span>
                      <span className="cost-breakdown__bar-val" style={{ color: '#00ff66', fontWeight: 600 }}>{formatIDR(currentMarkup)} ({grossMargin}%)</span>
                    </div>
                    <div className="cost-breakdown__bar-container">
                      <div
                        className="cost-breakdown__bar-fill"
                        style={{
                          width: `${(currentMarkup / currentPrice) * 100}%`,
                          backgroundColor: '#00ff66'
                        }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="cost-breakdown__summary-box">
              <div className="cost-breakdown__summary-row cost-breakdown__summary-row--highlight">
                <span>Total Project Investment</span>
                <span>{formatIDR(currentPrice)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
