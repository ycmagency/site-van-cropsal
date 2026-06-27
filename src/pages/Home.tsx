import HeroSection from '../sections/home/HeroSection'
import AboutSection from '../sections/home/AboutSection'
import FeaturedProperties from '../sections/home/FeaturedProperties'
import PropertySearchCTA from '../sections/home/PropertySearchCTA'
import SpotlightSection from '../sections/home/SpotlightSection'
import Testimonials from '../sections/home/Testimonials'
import NeighborhoodExplorer from '../sections/home/NeighborhoodExplorer'
import CTABanner from '../components/CTABanner'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <>
      <Seo
        title="Van Cropsal — Courtier Immobilier | Montréal, Laval & Rive-Nord | RE/MAX"
        description="Achetez ou vendez votre propriété avec Van Cropsal, courtier immobilier RE/MAX à Montréal, Laval, Saint-Léonard et la Rive-Nord. 6 ans d'expérience, plus de 45 transactions par année. Appelez le 438 402-9471."
        path="/"
      />
      <HeroSection />
      <AboutSection />
      <FeaturedProperties />
      <PropertySearchCTA />
      <SpotlightSection />
      <Testimonials />
      <NeighborhoodExplorer />
      <CTABanner imageSrc="/images/broker-cta.jpg" buttonLink="/contact" square />
    </>
  )
}
