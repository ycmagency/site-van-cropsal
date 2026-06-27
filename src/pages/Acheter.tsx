import AcheterHero from '../sections/acheter/AcheterHero'
import BuyingAdvantages from '../sections/acheter/BuyingAdvantages'
import TipsSection from '../sections/acheter/TipsSection'
import ArticlesSection from '../sections/shared/ArticlesSection'
import CTABanner from '../components/CTABanner'
import Seo from '../components/Seo'

export default function Acheter() {
  return (
    <>
      <Seo
        title="Acheter une propriété à Montréal, Laval & Rive-Nord | Van Cropsal RE/MAX"
        description="Achetez votre propriété en confiance avec Van Cropsal, courtier immobilier RE/MAX. Accompagnement personnalisé, recherche ciblée et négociation à Montréal, Laval et environs."
        path="/acheter"
        image="/images/hero-acheter.jpg"
      />
      <AcheterHero />
      <BuyingAdvantages />
      <TipsSection />
      <ArticlesSection />
      <CTABanner imageSrc="/images/broker-cta.jpg" buttonLink="/contact" square />
    </>
  )
}
