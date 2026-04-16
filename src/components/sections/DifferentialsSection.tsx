import type { Differential } from '../../data/siteContent'

type DifferentialsSectionProps = {
  differentials: Differential[]
}

export function DifferentialsSection({ differentials }: DifferentialsSectionProps) {
  return (
    <section className="section" id="diferenciais" aria-labelledby="diferenciais-title">
      <div className="container differentials-layout">
        <div className="differentials-intro">
          <p className="section-kicker">O que orienta a atuação</p>
          <h2 id="diferenciais-title">Diferenciais de atuação</h2>
          <p className="section-intro">
            Mais do que atender uma demanda, a proposta do escritório é conduzir cada caso com método, clareza e
            proximidade real com o cliente.
          </p>
        </div>

        <div className="differentials-track" aria-label="Principais diferenciais do escritório">
          {differentials.map((item, index) => (
            <article className="differentials-item" key={item.title}>
              <span className="differentials-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="differentials-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
