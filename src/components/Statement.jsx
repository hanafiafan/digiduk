import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Statement() {
  const ref = useScrollReveal()

  return (
    <section className="statement" ref={ref}>
      <div className="container">
        <div className="statement__text reveal">
          YOUR WEBSITE
          <br />
          SHOULDN'T FEEL
          <br />
          LIKE A{' '}
          <span className="text-accent">TEMPLATE</span>.
          <span className="text-italic">
            It should feel like your brand.
          </span>
        </div>

        <p className="statement__description reveal stagger-3">
          Setiap proyek dirancang berdasarkan kebutuhan bisnis, alur pengguna,
          fitur, sistem operasional, dan target pertumbuhan. Bukan template yang
          di-edit sedikit. Bukan asal jadi.
        </p>
      </div>
    </section>
  )
}
