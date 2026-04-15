import aboutProfileImage from '../../assets/about/about-profile.png'

type AboutContent = {
  title: string
  subtitle: string
  purpose: string
  journey: string
  promise: string
  hobbies: string
}

type AboutSectionProps = {
  about: AboutContent
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section className="section alt" id="sobre" aria-labelledby="sobre-title">
      <div className="container">
        <h2 id="sobre-title">{about.title}</h2>
        <p className="section-intro">{about.subtitle}</p>
        <div className="about-layout">
          <figure className="about-profile">
            <div className="about-photo-frame">
              <img src={aboutProfileImage} alt="Foto de perfil do advogado Thiago Curti" loading="lazy" />
              <div className="about-photo-outline" aria-hidden="true" />
            </div>
            <figcaption>Atendimento direto com o sócio, estratégia clara e comunicação objetiva.</figcaption>
          </figure>
          <div>
            <div className="about-text-stack">
              <article className="about-text-item">
                <h3>Propósito</h3>
                <p>{about.purpose}</p>
              </article>
              <article className="about-text-item">
                <h3>Trajetória e Impacto</h3>
                <p>{about.journey}</p>
              </article>
              <article className="about-text-item">
                <h3>Promessa de Valor</h3>
                <p>{about.promise}</p>
              </article>
            </div>
            <p className="about-quote">{about.hobbies}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
