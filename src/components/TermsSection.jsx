import { useScrollReveal } from '../hooks/useScrollReveal'

const terms = [
  '50% DP sebelum pekerjaan dimulai',
  '30% setelah desain dan core system selesai',
  '20% sebelum peluncuran publik',
  'Maksimum dua putaran revisi major kecuali dinyatakan lain',
  'Revisi di luar scope dikenakan biaya terpisah',
  'Source code ditransfer setelah pembayaran penuh',
  'Domain dan layanan third-party sebaiknya atas nama klien',
  'Renewal setelah tahun pertama dibayar oleh klien',
  'Timeline dimulai setelah deposit dan materi proyek lengkap diterima',
  'Keterlambatan dari klien dapat menggeser timeline proyek',
  'Fitur tambahan membutuhkan quotation baru',
  'Harga provider third-party dapat berubah',
  'Persetujuan provider di luar kendali developer',
  'Bug warranty tidak mencakup fitur baru, perubahan konten, atau perubahan kebijakan third-party'
]

export default function TermsSection() {
  const ref = useScrollReveal()

  return (
    <section className="terms section" ref={ref}>
      <div className="container">
        <div className="text-label reveal" style={{ marginBottom: '12px' }}>Payment & Terms</div>
        <h2 className="text-subheadline reveal stagger-1">
          TERMS & <span className="text-italic" style={{ color: 'var(--color-muted)' }}>Payment Structure</span>
        </h2>

        <div className="terms__grid">
          {terms.map((term, i) => (
            <div key={i} className={`terms__item reveal stagger-${Math.min(i + 1, 8)}`}>
              {term}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
