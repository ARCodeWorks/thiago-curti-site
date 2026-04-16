import type { FooterContent } from '../../data/siteContent'

type SiteFooterProps = {
  footer: FooterContent
  brandFocus: string
}

export function SiteFooter({ footer, brandFocus }: SiteFooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-brand-column">
            <p className="footer-brand-name">Thiago Curti</p>
            <p className="footer-brand-text">{footer.note}</p>
            <p className="footer-brand-text">{brandFocus}</p>
          </div>

          <div className="footer-column">
            <h3>Navegação</h3>
            <ul>
              {footer.navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href="#inicio">Voltar ao topo</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Atuação</h3>
            <ul>
              {footer.serviceLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contato</h3>
            <ul>
              <li>
                <a href={footer.primaryLink} target="_blank" rel="noreferrer">
                  Agendar no WhatsApp
                </a>
              </li>
              {footer.supportLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {footer.intro}. Todos os direitos reservados.</p>
          <p>{footer.legal}</p>
        </div>
      </div>
    </footer>
  )
}
