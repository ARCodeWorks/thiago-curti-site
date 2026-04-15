type FinalCtaContent = {
  title: string
  description: string
}

type FinalCtaSectionProps = {
  finalCta: FinalCtaContent
  whatsappUrl: string
  ctaLabel: string
}

export function FinalCtaSection({ finalCta, whatsappUrl, ctaLabel }: FinalCtaSectionProps) {
  return (
    <section className="section cta-section" id="contato" aria-labelledby="contato-title">
      <div className="container cta-center">
        <h2 id="contato-title">{finalCta.title}</h2>
        <p>{finalCta.description}</p>
        <a className="cta-button" href={whatsappUrl} target="_blank" rel="noreferrer">
          {ctaLabel}
        </a>
      </div>
    </section>
  )
}
