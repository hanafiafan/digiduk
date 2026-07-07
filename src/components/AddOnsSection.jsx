import { useState } from 'react'
import { addons } from '../data/addons'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function AddOnsSection() {
  const ref = useScrollReveal()
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="section" id="addons" ref={ref}>
      <div className="container">
        <div className="pricing__header">
          <div className="pricing__category-label">
            <span className="text-label">G</span>
            <span className="text-label" style={{ color: 'var(--color-accent)' }}>•</span>
            <span className="text-label">Modular</span>
          </div>
          <h2 className="text-subheadline reveal">
            ADD-ONS & <span className="text-italic">Extras</span>
          </h2>
          <p className="reveal stagger-1" style={{ marginTop: '8px', color: 'var(--color-muted)', maxWidth: '500px' }}>
            Fitur tambahan yang bisa ditambahkan ke paket mana saja sesuai kebutuhan proyek.
          </p>
        </div>

        <div className="reveal stagger-2">
          {addons.map((addon, i) => (
            <div
              key={i}
              className={`addon-row ${openIndex === i ? 'addon-row--open' : ''}`}
            >
              <div
                className="addon-row__header"
                onClick={() => toggle(i)}
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === i}
                onKeyDown={(e) => e.key === 'Enter' && toggle(i)}
              >
                <div className="addon-row__left">
                  <span className="addon-row__name">{addon.name}</span>
                  <span className="addon-row__badge">{addon.billing}</span>
                </div>
                <span className="addon-row__price">{addon.price}</span>
                <div className="addon-row__toggle">+</div>
              </div>
              <div className="addon-row__body">
                <p className="addon-row__desc">
                  {addon.description}
                  <br />
                  <span className="text-mono" style={{ fontSize: '11px', marginTop: '4px', display: 'inline-block' }}>
                    Complexity: {addon.complexity}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
