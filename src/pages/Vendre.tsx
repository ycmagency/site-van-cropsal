import VendreHero from '../sections/vendre/VendreHero'
import SellingPoints from '../sections/vendre/SellingPoints'
import TestimonialSection from '../sections/vendre/TestimonialSection'
import ArticlesSection from '../sections/shared/ArticlesSection'
import CTABanner from '../components/CTABanner'
import Seo from '../components/Seo'

export default function Vendre() {
  return (
    <>
      <Seo
        title="Vendre votre propriété à Montréal, Laval & Rive-Nord | Van Cropsal RE/MAX"
        description="Vendez votre propriété au meilleur prix avec Van Cropsal, courtier immobilier RE/MAX. Évaluation gratuite, mise en marché professionnelle et négociation à Montréal et Laval."
        path="/vendre"
        image="/images/hero-vendre.jpg"
      />
      <VendreHero />
      <SellingPoints />
      <TestimonialSection />
      <ArticlesSection />
      <CTABanner imageSrc="/images/broker-cta.jpg" buttonLink="/contact" square />
    </>
  )
}
