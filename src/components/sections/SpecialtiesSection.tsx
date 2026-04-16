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
        <div className="specialties-showcase" aria-label="Especialidades do escritório">
          {specialties.map((item, index) => (
            <article className="specialty-panel" key={item.title}>
              <p className="specialty-index">{String(index + 1).padStart(2, '0')}</p>
              <h3>{item.title}</h3>
              <p className="specialty-description">{item.description}</p>
              <ul className="specialty-points">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="specialties-next-action">
          <a className="cta-button cta-small" href="#publico">
            Quem podemos ajudar
          </a>
        </div>
      </div>
    </section>
  )
}
