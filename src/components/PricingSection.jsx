import { landingPagePackages, portfolioPackages, ecommercePackages } from '../data/packages'
import PricingCard from './PricingCard'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pricingGroups = [
  {
    id: 'landing',
    label: 'A',
    category: 'Product Landing Page',
    subtitle: 'Halaman konversi untuk kampanye dan produk',
    packages: landingPagePackages,
    dark: false
  },
  {
    id: 'portfolio',
    label: 'B',
    category: 'Brand Portfolio Website',
    subtitle: 'Website presentasi brand profesional',
    packages: portfolioPackages,
    dark: true
  },
  {
    id: 'ecommerce',
    label: 'C',
    category: 'Custom E-Commerce',
    subtitle: 'Toko online custom dengan sistem lengkap',
    packages: ecommercePackages,
    dark: false
  }
]

export default function PricingSection() {
  return (
    <div id="pricing">
      {pricingGroups.map((group) => (
        <PricingGroup key={group.id} group={group} />
      ))}
    </div>
  )
}

function PricingGroup({ group }) {
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      className={`pricing section ${group.dark ? 'section--dark pricing--dark' : ''}`}
    >
      <div className="container">
        <div className="pricing__header">
          <div className="pricing__category-label">
            <span className="text-label">{group.label}</span>
            <span className="text-label" style={{ color: 'var(--color-accent)' }}>•</span>
            <span className="text-label">Website Pricing</span>
          </div>
          <h2 className="text-subheadline reveal">
            {group.category.toUpperCase()}{' '}
          </h2>
          <p className="reveal stagger-1" style={{ marginTop: '8px', color: 'var(--color-muted)', maxWidth: '500px' }}>
            {group.subtitle}
          </p>
        </div>

        <div className="pricing__grid">
          {group.packages.map((pkg, i) => (
            <PricingCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
