import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    items: ['Goals', 'Audience', 'References', 'Technical Requirements', 'Scope']
  },
  {
    number: '02',
    title: 'Strategy',
    items: ['Sitemap', 'User Flow', 'Feature Planning', 'Content Hierarchy', 'System Architecture']
  },
  {
    number: '03',
    title: 'Design',
    items: ['Visual Direction', 'Wireframe', 'UI Design', 'Motion Direction', 'Approval']
  },
  {
    number: '04',
    title: 'Development',
    items: ['Frontend', 'Backend', 'CMS', 'Integration', 'Responsive Implementation']
  },
  {
    number: '05',
    title: 'Launch & Support',
    items: ['Testing', 'Deployment', 'Analytics', 'Documentation', 'Warranty & Maintenance']
  }
]

export default function ProcessSection() {
  const ref = useScrollReveal()

  return (
    <section className="process section" id="process" ref={ref}>
      <div className="container">
        <div className="pricing__header">
          <div className="text-label reveal">How We Work</div>
          <h2 className="text-headline reveal stagger-1">
            OUR <span className="text-accent">PROCESS</span>
          </h2>
          <p className="reveal stagger-2" style={{ marginTop: '8px', color: 'var(--color-muted)', maxWidth: '460px' }}>
            Lima tahapan terstruktur dari konsep hingga peluncuran.
          </p>
        </div>

        <div className="process__timeline">
          {steps.map((step, i) => (
            <div key={step.number} className={`process-step reveal stagger-${i + 1}`}>
              <div className="process-step__number">{step.number}</div>
              <h3 className="process-step__title">{step.title}</h3>
              <div className="process-step__items">
                {step.items.map((item) => (
                  <span key={item} className="process-step__item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
