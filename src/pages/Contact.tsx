import ContactHero from '../sections/contact/ContactHero'
import ContactForm from '../sections/contact/ContactForm'
import CTABanner from '../components/CTABanner'
import Seo from '../components/Seo'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact — Van Cropsal, courtier immobilier"
        description="Communiquez avec Van Cropsal, courtier immobilier RE/MAX Alliance & Pro-Commercial. Téléphone 438 402-9471, courriel vanc@remax-quebec.com, bureau au 4865 rue Jarry Est, Saint-Léonard."
        path="/contact"
        image="/images/hero-contact.jpg"
      />
      <ContactHero />
      <ContactForm />
      <CTABanner imageSrc="/images/broker-cta.jpg" buttonLink="/contact" square />
    </>
  )
}
