import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const factors = [
  { icon: '📄', text: 'Jumlah halaman' },
  { icon: '📝', text: 'Volume konten' },
  { icon: '⚙️', text: 'Kompleksitas CMS' },
  { icon: '✨', text: 'Level animasi' },
  { icon: '📦', text: 'Jumlah produk' },
  { icon: '👥', text: 'Jumlah admin roles' },
  { icon: '🔗', text: 'Integrasi pihak ketiga' },
  { icon: '🔄', text: 'Putaran revisi' },
  { icon: '🌐', text: 'Jumlah bahasa' },
  { icon: '📊', text: 'Migrasi data' },
  { icon: '⏰', text: 'Urgensi deadline' },
  { icon: '🛠️', text: 'Durasi support' }
]

export default function ScopeGuard() {
  const ref = useScrollReveal()
  const [projectType, setProjectType] = useState('landing')
  const [pages, setPages] = useState(5)
  const [animation, setAnimation] = useState('basic')
  const [cms, setCms] = useState('basic')
  const [integrations, setIntegrations] = useState(1)
  const [products, setProducts] = useState(0)
  const [timeline, setTimeline] = useState('normal')
  const [support, setSupport] = useState('1m')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 })

  useEffect(() => {
    // Reset products if not ecommerce
    if (projectType !== 'ecommerce') {
      setProducts(0)
    } else if (products === 0) {
      setProducts(10)
    }
  }, [projectType])

  useEffect(() => {
    // Calculate base rate
    let base = 0
    let perPageRate = 0
    let basePagesIncluded = 0

    if (projectType === 'landing') {
      base = 2000000
      perPageRate = 350000
      basePagesIncluded = 1
    } else if (projectType === 'portfolio') {
      base = 6500000
      perPageRate = 450000
      basePagesIncluded = 5
    } else if (projectType === 'ecommerce') {
      base = 12500000
      perPageRate = 500000
      basePagesIncluded = 5
    }

    // Additional pages cost
    const additionalPages = Math.max(0, pages - basePagesIncluded)
    let pageCost = additionalPages * perPageRate

    // Animation cost
    let animCost = 0
    if (animation === 'basic') animCost = 1000000
    if (animation === 'advanced') animCost = 3000000

    // CMS cost
    let cmsCost = 0
    if (cms === 'basic') cmsCost = 1500000
    if (cms === 'advanced') cmsCost = 4000000

    // Integrations cost
    let integrationCost = integrations * 1000000

    // Products cost
    let productsCost = 0
    if (projectType === 'ecommerce') {
      productsCost = products * 15000
    }

    // Support cost
    let supportCost = 0
    if (support === '3m') supportCost = 1500000
    if (support === '6m') supportCost = 3500000

    // Subtotal
    let subtotal = base + pageCost + animCost + cmsCost + integrationCost + productsCost + supportCost

    // Timeline multiplier
    let multiplier = 1.0
    if (timeline === 'fast') multiplier = 1.25
    if (timeline === 'urgent') multiplier = 1.5

    const finalBase = subtotal * multiplier

    // Range calculation
    const minVal = Math.round((finalBase * 0.9) / 50000) * 50000
    const maxVal = Math.round((finalBase * 1.15) / 50000) * 50000

    setPriceRange({ min: minVal, max: maxVal })
  }, [projectType, pages, animation, cms, integrations, products, timeline, support])

  const formatIDR = (num) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num)
  }

  return (
    <section className="scope-guard section" id="process-calc" ref={ref}>
      <div className="container">
        <div className="pricing__header">
          <div className="text-label reveal">Scope Guard</div>
          <h2 className="text-headline reveal stagger-1" style={{ marginTop: '12px' }}>
            CLEAR SCOPE.
            <br />
            <span className="text-accent">NO PROJECT CHAOS.</span>
          </h2>

          <p className="reveal stagger-2" style={{ marginTop: '24px', color: 'var(--color-muted)', maxWidth: '560px', lineHeight: 1.8 }}>
            Harga proyek bergantung pada scope yang disepakati. Berikut faktor-faktor
            yang mempengaruhi estimasi biaya:
          </p>
        </div>

        <div className="scope-guard__factors">
          {factors.map((factor, i) => (
            <div key={i} className={`scope-factor reveal stagger-${Math.min(i + 1, 8)}`}>
              <div className="scope-factor__icon">{factor.icon}</div>
              <span className="scope-factor__text">{factor.text}</span>
            </div>
          ))}
        </div>

        {/* Calculator */}
        <div className="scope-calc reveal stagger-3">
          <div className="scope-calc__form">
            <div className="scope-calc__field">
              <label htmlFor="calc-type">Tipe Proyek</label>
              <select
                id="calc-type"
                className="scope-calc__select"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
              >
                <option value="landing">Product Landing Page</option>
                <option value="portfolio">Brand Portfolio Website</option>
                <option value="ecommerce">Custom E-Commerce</option>
              </select>
            </div>

            <div className="scope-calc__field">
              <label htmlFor="calc-pages">Jumlah Halaman</label>
              <input
                id="calc-pages"
                type="number"
                min="1"
                max="50"
                className="scope-calc__input"
                value={pages}
                onChange={(e) => setPages(Math.max(1, parseInt(e.target.value) || 1))}
              />
            </div>

            <div className="scope-calc__field">
              <label htmlFor="calc-anim">Level Animasi</label>
              <select
                id="calc-anim"
                className="scope-calc__select"
                value={animation}
                onChange={(e) => setAnimation(e.target.value)}
              >
                <option value="none">Sederhana / Standar</option>
                <option value="basic">Kinetik / Interaksi Ringan</option>
                <option value="advanced">Imersif / Heavy 3D & Scroll</option>
              </select>
            </div>

            <div className="scope-calc__field">
              <label htmlFor="calc-cms">Kompleksitas CMS</label>
              <select
                id="calc-cms"
                className="scope-calc__select"
                value={cms}
                onChange={(e) => setCms(e.target.value)}
              >
                <option value="none">Tanpa CMS (Statis)</option>
                <option value="basic">Standar (Artikel / Produk)</option>
                <option value="advanced">Custom Dashboard & Roles</option>
              </select>
            </div>

            <div className="scope-calc__field">
              <label htmlFor="calc-integrations">Jumlah Integrasi Pihak Ketiga</label>
              <input
                id="calc-integrations"
                type="number"
                min="0"
                max="10"
                className="scope-calc__input"
                value={integrations}
                onChange={(e) => setIntegrations(Math.max(0, parseInt(e.target.value) || 0))}
              />
            </div>

            {projectType === 'ecommerce' && (
              <div className="scope-calc__field">
                <label htmlFor="calc-products">Estimasi Jumlah Produk</label>
                <input
                  id="calc-products"
                  type="number"
                  min="1"
                  max="1000"
                  className="scope-calc__input"
                  value={products}
                  onChange={(e) => setProducts(Math.max(1, parseInt(e.target.value) || 1))}
                />
              </div>
            )}

            <div className="scope-calc__field">
              <label htmlFor="calc-timeline">Urgensi Deadline</label>
              <select
                id="calc-timeline"
                className="scope-calc__select"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
              >
                <option value="normal">Normal (Sesuai Timeline Standar)</option>
                <option value="fast">Cepat (+25% Speed)</option>
                <option value="urgent">Sangat Mendesak (+50% Speed)</option>
              </select>
            </div>

            <div className="scope-calc__field">
              <label htmlFor="calc-support">Durasi Support & Maintenance</label>
              <select
                id="calc-support"
                className="scope-calc__select"
                value={support}
                onChange={(e) => setSupport(e.target.value)}
              >
                <option value="1m">1 Bulan Support (Warranty)</option>
                <option value="3m">3 Bulan SLA & Backup</option>
                <option value="6m">6 Bulan SLA & SLA Tambahan</option>
              </select>
            </div>
          </div>

          {/* Calculator Output */}
          <div className="scope-calc__result-card">
            <div className="scope-calc__result-header">
              <span className="scope-calc__result-label">Estimasi Rentang Investasi</span>
              <div className="scope-calc__result-price">
                {formatIDR(priceRange.min)} – {formatIDR(priceRange.max)}
              </div>
            </div>

            <div className="scope-calc__result-breakdown">
              <div className="scope-calc__breakdown-item">
                <span>Tipe Proyek</span>
                <span>{projectType.toUpperCase()}</span>
              </div>
              <div className="scope-calc__breakdown-item">
                <span>Jumlah Halaman</span>
                <span>{pages} Halaman</span>
              </div>
              <div className="scope-calc__breakdown-item">
                <span>Durasi Support</span>
                <span>{support === '1m' ? '1 Bulan' : support === '3m' ? '3 Bulan' : '6 Bulan'}</span>
              </div>
              <div className="scope-calc__breakdown-item">
                <span>Urgensi</span>
                <span>{timeline === 'normal' ? 'Normal' : timeline === 'fast' ? 'Cepat' : 'Mendesak'}</span>
              </div>
            </div>

            <div style={{ fontSize: '11px', color: 'var(--color-muted)', fontStyle: 'italic', lineHeight: 1.5 }}>
              Estimasi ini bukan penawaran final. Harga resmi diberikan setelah scope disepakati.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
