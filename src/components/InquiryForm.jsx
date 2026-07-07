import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import MagneticButton from './MagneticButton'

const serviceOptions = [
  'E-Commerce',
  'Product Landing Page',
  'Brand Portfolio',
  'Meta Ads',
  'Meta Pixel & CAPI',
  'Maintenance / Add-on'
]

const budgetOptions = [
  '< Rp5.000.000',
  'Rp5.000.000 – Rp10.000.000',
  'Rp10.000.000 – Rp20.000.000',
  '> Rp20.000.000'
]

const timelineOptions = [
  '< 2 minggu',
  '2–4 minggu',
  '1–2 bulan',
  '> 2 bulan',
  'Flexible'
]

export default function InquiryForm() {
  const ref = useScrollReveal()
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    service: '',
    budget: '',
    timeline: '',
    name: '',
    company: '',
    whatsapp: '',
    email: '',
    description: '',
    agreed: false
  })
  const [submitted, setSubmitted] = useState(false)

  const totalSteps = 4

  const selectOption = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const next = () => {
    if (step < totalSteps - 1) setStep(step + 1)
  }

  const prev = () => {
    if (step > 0) setStep(step - 1)
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="section" id="inquiry" ref={ref}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '64px', marginBottom: '24px' }}>✓</div>
          <h2 className="text-subheadline">INQUIRY TERKIRIM</h2>
          <p style={{ color: 'var(--color-muted)', marginTop: '16px', maxWidth: '460px', margin: '16px auto 0' }}>
            Terima kasih! Tim kami akan menghubungi Anda dalam 1×24 jam melalui WhatsApp atau email.
          </p>
          <div style={{ marginTop: '32px' }}>
            <a
              href="https://wa.me/6281234567890"
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Follow Up via WhatsApp</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="inquiry section" id="inquiry" ref={ref} style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="pricing__header" style={{ textAlign: 'center' }}>
          <h2 className="text-headline reveal" style={{ margin: '0 auto' }}>
            START YOUR <span className="text-accent">PROJECT</span>
          </h2>
          <p className="reveal stagger-1" style={{ marginTop: '12px', color: 'var(--color-muted)' }}>
            Ceritakan kebutuhan Anda. Kami akan membantu merancang solusi yang tepat.
          </p>
        </div>

        <div className="inquiry__form">
          {/* Step 0: Service */}
          <div className={`inquiry__step ${step === 0 ? 'inquiry__step--active' : ''}`}>
            <div className="inquiry__step-label">Step 1 / {totalSteps}</div>
            <h3 className="inquiry__step-title">Layanan apa yang Anda butuhkan?</h3>
            <div className="inquiry__options">
              {serviceOptions.map((option) => (
                <div
                  key={option}
                  className={`inquiry__option ${formData.service === option ? 'inquiry__option--selected' : ''}`}
                  onClick={() => selectOption('service', option)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && selectOption('service', option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Budget */}
          <div className={`inquiry__step ${step === 1 ? 'inquiry__step--active' : ''}`}>
            <div className="inquiry__step-label">Step 2 / {totalSteps}</div>
            <h3 className="inquiry__step-title">Berapa estimasi budget Anda?</h3>
            <div className="inquiry__options">
              {budgetOptions.map((option) => (
                <div
                  key={option}
                  className={`inquiry__option ${formData.budget === option ? 'inquiry__option--selected' : ''}`}
                  onClick={() => selectOption('budget', option)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && selectOption('budget', option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Timeline */}
          <div className={`inquiry__step ${step === 2 ? 'inquiry__step--active' : ''}`}>
            <div className="inquiry__step-label">Step 3 / {totalSteps}</div>
            <h3 className="inquiry__step-title">Kapan target peluncuran?</h3>
            <div className="inquiry__options">
              {timelineOptions.map((option) => (
                <div
                  key={option}
                  className={`inquiry__option ${formData.timeline === option ? 'inquiry__option--selected' : ''}`}
                  onClick={() => selectOption('timeline', option)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && selectOption('timeline', option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Details */}
          <div className={`inquiry__step ${step === 3 ? 'inquiry__step--active' : ''}`}>
            <div className="inquiry__step-label">Step 4 / {totalSteps}</div>
            <h3 className="inquiry__step-title">Detail kontak & deskripsi proyek</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="inquiry__field">
                <label htmlFor="inq-name">Nama</label>
                <input
                  id="inq-name"
                  type="text"
                  placeholder="Nama lengkap"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
              </div>
              <div className="inquiry__field">
                <label htmlFor="inq-company">Perusahaan</label>
                <input
                  id="inq-company"
                  type="text"
                  placeholder="Nama perusahaan"
                  value={formData.company}
                  onChange={(e) => updateField('company', e.target.value)}
                />
              </div>
              <div className="inquiry__field">
                <label htmlFor="inq-whatsapp">WhatsApp</label>
                <input
                  id="inq-whatsapp"
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  value={formData.whatsapp}
                  onChange={(e) => updateField('whatsapp', e.target.value)}
                />
              </div>
              <div className="inquiry__field">
                <label htmlFor="inq-email">Email</label>
                <input
                  id="inq-email"
                  type="email"
                  placeholder="email@company.com"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                />
              </div>
            </div>

            <div className="inquiry__field">
              <label htmlFor="inq-desc">Deskripsi Proyek</label>
              <textarea
                id="inq-desc"
                placeholder="Ceritakan tentang proyek Anda, referensi, fitur yang dibutuhkan..."
                value={formData.description}
                onChange={(e) => updateField('description', e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '16px' }}>
              <input
                type="checkbox"
                id="inq-agree"
                checked={formData.agreed}
                onChange={(e) => updateField('agreed', e.target.checked)}
                style={{ marginTop: '4px', width: '18px', height: '18px', accentColor: 'var(--color-accent)' }}
              />
              <label htmlFor="inq-agree" style={{ fontSize: 'var(--text-body-sm)', color: 'var(--color-muted)', cursor: 'pointer' }}>
                Saya memahami bahwa harga final mengikuti scope proyek yang disetujui.
              </label>
            </div>
          </div>

          {/* Navigation */}
          <div className="inquiry__nav">
            <div className="inquiry__progress">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`inquiry__progress-dot ${
                    i === step ? 'inquiry__progress-dot--active' : ''
                  } ${i < step ? 'inquiry__progress-dot--done' : ''}`}
                />
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              {step > 0 && (
                <button className="btn btn--secondary btn--small" onClick={prev}>
                  <span>← Back</span>
                </button>
              )}
              {step < totalSteps - 1 ? (
                <MagneticButton className="btn btn--primary btn--small" onClick={next}>
                  <span>Next</span>
                  <span className="btn-arrow">→</span>
                </MagneticButton>
              ) : (
                <MagneticButton className="btn btn--primary btn--small" onClick={handleSubmit}>
                  <span>Build My Project Brief</span>
                  <span className="btn-arrow">→</span>
                </MagneticButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
