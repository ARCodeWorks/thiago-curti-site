type CredentialsSectionProps = {
  credentials: string[]
  values: string[]
}

export function CredentialsSection({ credentials, values }: CredentialsSectionProps) {
  return (
    <section className="section alt" id="credenciais" aria-labelledby="credenciais-title">
      <div className="container credentials-layout">
        <div className="credentials-intro">
          <p className="section-kicker">Base técnica do escritório</p>
          <h2 id="credenciais-title">Credenciais e valores que sustentam a condução dos casos</h2>
          <p className="section-intro">
            A atuação combina formação direcionada, repertório operacional e uma lógica de trabalho guiada por
            organização, transparência e responsabilidade estratégica.
          </p>
        </div>

        <div className="credentials-grid">
          <article className="credentials-panel" aria-labelledby="credenciais-formacao-title">
            <p className="credentials-panel-label">Formação e especialização</p>
            <h3 id="credenciais-formacao-title">Credenciais</h3>
            <ul className="credentials-list">
              {credentials.map((item, index) => (
                <li className="credentials-item" key={item}>
                  <span className="credentials-item-index">{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="credentials-panel credentials-panel-accent" aria-labelledby="credenciais-valores-title">
            <p className="credentials-panel-label">Cultura de atuação</p>
            <h3 id="credenciais-valores-title">Valores inegociáveis</h3>
            <ul className="credentials-list">
              {values.map((item, index) => (
                <li className="credentials-item" key={item}>
                  <span className="credentials-item-index">{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
