type CredentialsSectionProps = {
  credentials: string[]
  values: string[]
}

export function CredentialsSection({ credentials, values }: CredentialsSectionProps) {
  return (
    <section className="section alt" id="credenciais" aria-labelledby="credenciais-title">
      <div className="container split-two">
        <div>
          <h2 id="credenciais-title">Credenciais</h2>
          <ul className="stack-list">
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Valores inegociáveis</h2>
          <ul className="stack-list">
            {values.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
