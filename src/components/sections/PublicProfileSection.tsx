type PublicProfileSectionProps = {
  publicProfile: string[]
  serviceFlow: string[]
}

export function PublicProfileSection({ publicProfile, serviceFlow }: PublicProfileSectionProps) {
  return (
    <section className="section alt" id="publico" aria-labelledby="publico-title">
      <div className="container split-two">
        <div>
          <h2 id="publico-title">Perfil de cliente que o escritório atende</h2>
          <ul className="check-list">
            {publicProfile.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Como a condução acontece</h2>
          <ol className="flow-list">
            {serviceFlow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
