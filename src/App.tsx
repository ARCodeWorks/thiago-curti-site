import './App.css'
import logo from './assets/branding/logo.png'
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

function App() {
  return (
    <>
      <SkipLink href="#conteudo-principal" label="Pular para o conteúdo" />
      <SiteHeader logoSrc={logo} whatsappUrl={contact.whatsappUrl} ctaLabel={contact.ctaLabel} />
      <HeroSection hero={hero} whatsappUrl={contact.whatsappUrl} ctaLabel={contact.ctaLabel} />

      <main id="conteudo-principal">
        <AboutSection about={about} />
        <SpecialtiesSection specialties={specialties} />
        <PublicProfileSection publicProfile={publicProfile} serviceFlow={serviceFlow} />
        <DifferentialsSection differentials={differentials} />
        <CredentialsSection credentials={credentials} values={values} />
        <FaqSection faq={faq} />
        <FinalCtaSection finalCta={finalCta} whatsappUrl={contact.whatsappUrl} ctaLabel={contact.ctaLabel} />
      </main>

      <SiteFooter footer={footer} brandFocus={brand.focus} />
    </>
  )
}

export default App
