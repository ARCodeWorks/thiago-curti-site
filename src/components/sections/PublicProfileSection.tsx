type PublicProfileSectionProps = {
  publicProfile: string[]
  serviceFlow: string[]
}

export function PublicProfileSection({ publicProfile, serviceFlow }: PublicProfileSectionProps) {
  return (
    <section className="section alt" id="publico" aria-labelledby="publico-title">
      <div className="container public-profile-layout">
        <div className="public-profile-copy">
          <p className="section-kicker">Perfil de atendimento</p>
          <h2 id="publico-title">Quem podemos ajudar</h2>
          <p className="section-intro">
            Depois de definir a área de atuação, mapeamos se o seu cenário se encaixa em um perfil com maior potencial
            de resultado e condução estratégica.
          </p>
          <p className="public-profile-note">
            A atuação faz mais sentido quando existe impacto real, necessidade de resposta técnica e espaço para uma
            estratégia bem conduzida desde o início.
          </p>

          <ul className="public-profile-list">
            {publicProfile.map((item, index) => (
              <li className="public-profile-item" key={item}>
                <span className="public-profile-item-index">{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="public-profile-process" aria-labelledby="publico-flow-title">
          <p className="public-profile-process-label">Condução estratégica</p>
          <h3 id="publico-flow-title">Como a condução acontece</h3>
          <ol className="public-profile-timeline">
            {serviceFlow.map((item, index) => (
              <li className="public-profile-step" key={item}>
                <span className="public-profile-step-number">{index + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  )
}
