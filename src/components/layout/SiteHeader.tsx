import { useState } from 'react'

type SiteHeaderProps = {
  logoSrc: string
  whatsappUrl: string
  ctaLabel: string
}

export function SiteHeader({ logoSrc, whatsappUrl, ctaLabel }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <img className="brand-logo" src={logoSrc} alt="Logo Thiago Curti" />
        </a>

        <button
          type="button"
          className={`nav-toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-site-nav"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="mobile-site-nav"
          className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Navegação principal"
        >
          <ul className="nav-list">
            <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
            <li><a href="#especialidades" onClick={closeMenu}>Especialidades</a></li>
            <li><a href="#diferenciais" onClick={closeMenu}>Diferenciais</a></li>
            <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
            <li className="nav-mobile-cta">
              <a className="cta-button cta-small" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
                {ctaLabel}
              </a>
            </li>
          </ul>
        </nav>

        <a className="cta-button cta-small nav-cta-desktop" href={whatsappUrl} target="_blank" rel="noreferrer">
          {ctaLabel}
        </a>
      </div>
    </header>
  )
}
