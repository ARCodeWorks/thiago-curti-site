import { useEffect, useState } from 'react'
import './App.css'
import logo from './assets/branding/logo.png'
import { NotFoundPage } from './components/layout/NotFoundPage'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { SkipLink } from './components/layout/SkipLink'
import { AboutSection } from './components/sections/AboutSection'
import { CredentialsSection } from './components/sections/CredentialsSection'
import { DifferentialsSection } from './components/sections/DifferentialsSection'
import { FaqSection } from './components/sections/FaqSection'
import { FinalCtaSection } from './components/sections/FinalCtaSection'
import { HeroSection } from './components/sections/HeroSection'
import { PublicProfileSection } from './components/sections/PublicProfileSection'
import { SpecialtiesSection } from './components/sections/SpecialtiesSection'
import {
  about,
  brand,
  contact,
  credentials,
  differentials,
  faq,
  finalCta,
  footer,
  hero,
  publicProfile,
  serviceFlow,
  specialties,
  values,
} from './data/siteContent'

type ThemeMode = 'light' | 'dark'

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
  const basePath = (import.meta.env.BASE_URL.replace(/\/+$/, '') || '/')
  const isKnownPath =
    currentPath === basePath ||
    currentPath === `${basePath}/index.html` ||
    (basePath === '/' && (currentPath === '/' || currentPath === '/index.html'))

  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('theme-mode')
    return savedTheme === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    document.body.dataset.theme = theme
    localStorage.setItem('theme-mode', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  if (!isKnownPath) {
    return (
      <>
        <SkipLink href="#conteudo-principal" label="Pular para o conteúdo" />
        <SiteHeader
          logoSrc={logo}
          whatsappUrl={contact.whatsappUrl}
          ctaLabel={contact.ctaLabel}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <NotFoundPage
          whatsappUrl={contact.whatsappUrl}
          whatsappLabel={contact.ctaLabel}
          emailUrl={contact.emailUrl}
          emailLabel={contact.emailLabel}
        />
      </>
    )
  }

  return (
    <>
      <SkipLink href="#conteudo-principal" label="Pular para o conteúdo" />
      <SiteHeader
        logoSrc={logo}
        whatsappUrl={contact.whatsappUrl}
        ctaLabel={contact.ctaLabel}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <HeroSection hero={hero} whatsappUrl={contact.whatsappUrl} ctaLabel={contact.ctaLabel} />

      <main id="conteudo-principal">
        <AboutSection about={about} />
        <SpecialtiesSection specialties={specialties} />
        <PublicProfileSection publicProfile={publicProfile} serviceFlow={serviceFlow} />
        <DifferentialsSection differentials={differentials} />
        <CredentialsSection credentials={credentials} values={values} />
        <FaqSection faq={faq} />
        <FinalCtaSection
          finalCta={finalCta}
          whatsappUrl={contact.whatsappUrl}
          ctaLabel={contact.ctaLabel}
          emailUrl={contact.emailUrl}
          emailLabel={contact.emailLabel}
        />
      </main>

      <SiteFooter footer={footer} brandFocus={brand.focus} />
    </>
  )
}

export default App
