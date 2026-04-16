import { useState } from 'react'

type SiteHeaderProps = {
  logoSrc: string
  whatsappUrl: string
  ctaLabel: string
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function SiteHeader({ logoSrc, whatsappUrl, ctaLabel, theme, onToggleTheme }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const themeAriaLabel = theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'

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
            <li><a href="#credenciais" onClick={closeMenu}>Credenciais</a></li>
            <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
            <li className="nav-mobile-theme">
              <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label={themeAriaLabel}>
                <span className="sr-only">{themeAriaLabel}</span>
                <span className="theme-toggle-icon" aria-hidden="true">
                  {theme === 'light' ? (
                    <svg viewBox="0 0 24 24" fill="none" role="presentation">
                      <path d="M20.5 14.1a8.5 8.5 0 1 1-10.6-10.6 7 7 0 1 0 10.6 10.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" role="presentation">
                      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M12 2.5v3.1M12 18.4v3.1M4.9 4.9l2.2 2.2M16.9 16.9l2.2 2.2M2.5 12h3.1M18.4 12h3.1M4.9 19.1l2.2-2.2M16.9 7.1l2.2-2.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  )}
                </span>
              </button>
            </li>
            <li className="nav-mobile-cta">
              <a className="cta-button cta-small" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
                {ctaLabel}
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a className="cta-button cta-small nav-cta-desktop" href={whatsappUrl} target="_blank" rel="noreferrer">
            {ctaLabel}
          </a>
          <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label={themeAriaLabel}>
            <span className="sr-only">{themeAriaLabel}</span>
            <span className="theme-toggle-icon" aria-hidden="true">
              {theme === 'light' ? (
                <svg viewBox="0 0 24 24" fill="none" role="presentation">
                  <path d="M20.5 14.1a8.5 8.5 0 1 1-10.6-10.6 7 7 0 1 0 10.6 10.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" role="presentation">
                  <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 2.5v3.1M12 18.4v3.1M4.9 4.9l2.2 2.2M16.9 16.9l2.2 2.2M2.5 12h3.1M18.4 12h3.1M4.9 19.1l2.2-2.2M16.9 7.1l2.2-2.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
