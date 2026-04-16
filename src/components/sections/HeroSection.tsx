type HeroContent = {
  overline: string
  title: string
  subtitle: string
  highlight: string
}

type HeroSectionProps = {
  hero: HeroContent
  whatsappUrl: string
  ctaLabel: string
}

export function HeroSection({ hero, whatsappUrl, ctaLabel }: HeroSectionProps) {
  return (
    <section className="hero-section" id="inicio">
      <div className="container hero-grid">
        <div>
          <p className="overline">{hero.overline}</p>
          <h1>{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-highlight">{hero.highlight}</p>
          <div className="hero-actions">
            <a className="cta-button hero-cta-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              {ctaLabel}
            </a>
            <a className="text-link" href="#especialidades">Conhecer áreas de atuação</a>
          </div>
        </div>
      </div>
      <a className="hero-scroll-button" href="#sobre" aria-label="Rolar para seção Sobre">
        <span className="hero-scroll-mouse" aria-hidden="true">
          <span className="hero-scroll-wheel" />
        </span>
        <span className="hero-scroll-label">Descer</span>
      </a>
    </section>
  )
}
