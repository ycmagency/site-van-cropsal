import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Seo from '../components/Seo'
import { neighborhoods, cityMatchesNeighborhood } from '../data/neighborhoods'
import { properties } from '../data/properties'
import { SITE } from '../data/siteConfig'
import { useLang } from '../i18n/LanguageContext'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Quartiers', item: `${SITE.url}/quartiers` },
  ],
}

export default function Quartiers() {
  const { lang } = useLang()
  const isFr = lang === 'fr'

  return (
    <>
      <Seo
        title="Quartiers de Montréal — Van Cropsal, courtier immobilier RE/MAX"
        description="Découvrez les quartiers de Montréal où Van Cropsal vous accompagne : Outremont, Westmount, Ville Mont-Royal, Le Plateau, Ville-Marie, Rosemont et plus. Maisons, condos et plex pour chaque style de vie."
        path="/quartiers"
        jsonLd={breadcrumbJsonLd}
      />

      {/* Hero */}
      <section
        className="relative min-h-[45vh] flex items-end"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(26,32,44,0.35), rgba(26,32,44,0.75)), url('/images/neighborhood-villedowntown.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 px-8 pb-14 lg:px-16 lg:pb-16 max-w-[1200px] w-full">
          <p className="text-teal font-sans text-xs tracking-[0.15em] uppercase mb-3">
            {isFr ? 'Explorer les quartiers' : 'Explore the neighbourhoods'}
          </p>
          <h1 className="font-display text-4xl lg:text-6xl text-white mb-4">
            {isFr ? 'Trouver mon quartier' : 'Find my neighbourhood'}
          </h1>
          <p className="text-white/75 font-sans leading-relaxed max-w-2xl">
            {isFr
              ? "Chaque quartier de Montréal a sa personnalité et son type de propriétés. Van Cropsal connaît le marché local en profondeur et vous aide à trouver l'endroit parfait pour votre projet."
              : 'Each Montreal neighbourhood has its own character and property types. Van Cropsal knows the local market inside out and helps you find the perfect place for your project.'}
          </p>
        </div>
      </section>

      {/* Liste des quartiers */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((n, i) => {
              const c = isFr ? n.fr : n.en
              const count = properties.filter((p) => cityMatchesNeighborhood(p.city, n)).length
              return (
                <ScrollReveal key={n.slug} delay={(i % 3) * 0.08}>
                  <Link to={`/quartiers/${n.slug}`} className="group flex flex-col h-full rounded-xl overflow-hidden bg-cream/40 shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={n.image}
                        alt={n.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {count > 0 && (
                        <span className="absolute top-3 left-3 bg-teal text-white text-xs font-sans px-3 py-1 rounded-full">
                          {count} {isFr ? (count > 1 ? 'propriétés' : 'propriété') : (count > 1 ? 'listings' : 'listing')}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <h2 className="font-display text-2xl text-navy mb-1">{n.name}</h2>
                      <p className="text-teal font-sans text-xs tracking-wider uppercase mb-3">
                        {c.tagline}
                      </p>
                      <p className="text-navy/70 font-sans text-sm leading-relaxed mb-5 flex-1">
                        {c.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-teal font-sans text-sm font-medium group-hover:gap-3 transition-all">
                        {count > 0
                          ? (isFr ? 'Voir les propriétés' : 'View properties')
                          : (isFr ? 'Découvrir le quartier' : 'Explore the neighbourhood')}
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
