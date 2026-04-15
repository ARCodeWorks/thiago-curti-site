import type { Specialty } from '../../data/siteContent'

type SpecialtiesSectionProps = {
  specialties: Specialty[]
}

export function SpecialtiesSection({ specialties }: SpecialtiesSectionProps) {
  return (
    <section className="section" id="especialidades" aria-labelledby="especialidades-title">
      <div className="container">
        <h2 id="especialidades-title">Áreas de atuação prioritárias</h2>
        <p className="section-intro">
          Atuação em ordem estratégica definida no briefing: Previdenciário, Trabalhista e Direito Médico.
        </p>
        <div className="specialty-grid">
          {specialties.map((item) => (
            <article className="specialty-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
