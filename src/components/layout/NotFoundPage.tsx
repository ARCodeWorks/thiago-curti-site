type NotFoundPageProps = {
  whatsappUrl: string
  whatsappLabel: string
  emailUrl: string
  emailLabel: string
}

export function NotFoundPage({ whatsappUrl, whatsappLabel, emailUrl, emailLabel }: NotFoundPageProps) {
  return (
    <main className="not-found-page" id="conteudo-principal" aria-labelledby="not-found-title">
      <section className="container not-found-content">
        <p className="section-kicker">Erro 404</p>
        <h1 id="not-found-title">Página não encontrada</h1>
        <p className="not-found-description">
          O endereço acessado não existe ou foi movido. Você pode voltar para a página inicial ou iniciar contato
          direto com o escritório.
        </p>

        <div className="not-found-actions">
          <a className="cta-button" href="/">
            Voltar para o início
          </a>
          <a className="cta-button" href={whatsappUrl} target="_blank" rel="noreferrer">
            {whatsappLabel}
          </a>
          <a className="not-found-email-link" href={emailUrl}>
            {emailLabel}
          </a>
        </div>
      </section>
    </main>
  )
}
