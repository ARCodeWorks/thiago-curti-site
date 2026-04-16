type FinalCtaContent = {
  title: string
  description: string
}

type FinalCtaSectionProps = {
  finalCta: FinalCtaContent
  whatsappUrl: string
  ctaLabel: string
}

const contactHighlights = [
  'Resposta inicial com direcionamento claro',
  'Atendimento direto com o sócio',
  'Condução estratégica e sem ruído',
]

export function FinalCtaSection({ finalCta, whatsappUrl, ctaLabel }: FinalCtaSectionProps) {
  return (
    <section className="section cta-section" id="contato" aria-labelledby="contato-title">
      <div className="container contact-cta-layout">
        <div className="contact-cta-copy">
          <p className="section-kicker">Contato direto</p>
          <h2 id="contato-title">{finalCta.title}</h2>
          <p className="contact-cta-description">{finalCta.description}</p>

          <ul className="contact-cta-points" aria-label="Diferenciais do contato">
            {contactHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="contact-cta-card" aria-label="Ação principal de contato">
          <p className="contact-cta-card-label">Próximo passo</p>
          <h3>Fale com o escritório</h3>
          <p>
            Se você precisa de orientação jurídica com clareza, o melhor caminho é iniciar a conversa pelo WhatsApp.
          </p>
          <a className="cta-button contact-cta-button" href={whatsappUrl} target="_blank" rel="noreferrer">
            {ctaLabel}
          </a>
        </aside>
      </div>
    </section>
  )
}
