import type { Differential } from '../../data/siteContent'

type DifferentialsSectionProps = {
  differentials: Differential[]
}

export function DifferentialsSection({ differentials }: DifferentialsSectionProps) {
  return (
    <section className="section" id="diferenciais" aria-labelledby="diferenciais-title">
      <div className="container">
        <h2 id="diferenciais-title">Diferenciais de atuação</h2>
        <div className="card-grid">
          {differentials.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
