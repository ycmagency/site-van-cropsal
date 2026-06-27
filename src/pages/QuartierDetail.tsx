import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import PropertyCard from '../components/PropertyCard'
import CTABanner from '../components/CTABanner'
import Seo from '../components/Seo'
import { getNeighborhood, cityMatchesNeighborhood } from '../data/neighborhoods'
import { properties, localizeProperty } from '../data/properties'
import { postsForArea } from '../data/blog'
import { SITE } from '../data/siteConfig'
import { useLang } from '../i18n/LanguageContext'

export default function QuartierDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { lang } = useLang()
  const isFr = lang === 'fr'
  const n = slug ? getNeighborhood(slug) : undefined

  if (!n) {
    return (
      <section className="bg-navy min-h-[70vh] flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="font-display text-4xl text-white mb-4">{isFr ? 'Quartier introuvable' : 'Neighbourhood not found'}</h1>
          <Link to="/quartiers" className="text-teal font-sans hover:underline">
            {isFr ? '← Retour aux quartiers' : '← Back to neighbourhoods'}
          </Link>
        </div>
      </section>
    )
  }

  const c = isFr ? n.fr : n.en
  const listings = properties.filter((p) => cityMatchesNeighborhood(p.city, n))
  const articles = postsForArea(n.slug, 3)

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Quartiers', item: `${SITE.url}/quartiers` },
      { '@type': 'ListItem', position: 3, name: n.name, item: `${SITE.url}/quartiers/${n.slug}` },
    ],
  }

  return (
    <>
      <Seo
        title={`Immobilier à ${n.name} — Propriétés & quartier | Van Cropsal`}
        description={`${c.description} Découvrez les propriétés à vendre et à louer à ${n.name} avec Van Cropsal, courtier RE/MAX.`.slice(0, 320)}
        path={`/quartiers/${n.slug}`}
        image={n.image}
        jsonLd={breadcrumbJsonLd}
      />

      {/* Hero */}
      <section
        className="relative min-h-[45vh] flex items-end"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26,32,44,0.35), rgba(26,32,44,0.8)), url('${n.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 px-8 pb-12 lg:px-16 lg:pb-16 max-w-[1200px] w-full">
          <Link to="/quartiers" className="inline-flex items-center gap-2 text-white/60 font-sans text-sm hover:text-white transition-colors mb-5">
            <ArrowLeft size={16} /> {isFr ? 'Tous les quartiers' : 'All neighbourhoods'}
          </Link>
          <p className="text-teal font-sans text-xs tracking-[0.15em] uppercase mb-3">{c.tagline}</p>
          <h1 className="font-display text-4xl lg:text-6xl text-white mb-4">{n.name}</h1>
          <p className="text-white/75 font-sans leading-relaxed max-w-2xl">{c.description}</p>
        </div>
      </section>

      {/* Propriétés du secteur */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl text-navy mb-2">
              {isFr ? `Propriétés à ${n.name}` : `Properties in ${n.name}`}
            </h2>
            <p className="text-navy/60 font-sans mb-10">
              {listings.length > 0
                ? isFr
                  ? `${listings.length} propriété${listings.length > 1 ? 's' : ''} active${listings.length > 1 ? 's' : ''} à vendre ou à louer dans ce secteur.`
                  : `${listings.length} active listing${listings.length > 1 ? 's' : ''} for sale or rent in this area.`
                : isFr
                  ? "Aucune propriété active dans ce secteur pour le moment — mais j'en obtiens régulièrement."
                  : 'No active listings in this area right now — but I get new ones regularly.'}
            </p>
          </ScrollReveal>

          {listings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((raw) => {
                const p = localizeProperty(raw, lang)
                return (
                  <ScrollReveal key={p.id}>
                    <PropertyCard
                      id={p.id}
                      image={p.image}
                      badge={p.badge}
                      status={p.status}
                      address={p.address}
                      location={p.city}
                      price={p.price}
                      size={p.features.slice(0, 2).join(' · ')}
                    />
                  </ScrollReveal>
                )
              })}
            </div>
          ) : (
            <div className="rounded-xl bg-cream p-8 text-center">
              <p className="text-navy/70 font-sans mb-5">
                {isFr
                  ? `Vous cherchez à acheter ou vendre à ${n.name} ? Je peux vous avertir dès qu'une propriété correspond à vos critères.`
                  : `Looking to buy or sell in ${n.name}? I can notify you as soon as a property matches your criteria.`}
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-teal text-white rounded-full font-sans text-sm font-medium tracking-wider hover:bg-teal-dark hover:scale-[1.02] transition-all"
              >
                {isFr ? 'Me contacter' : 'Contact me'}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Articles liés */}
      {articles.length > 0 && (
        <section className="bg-cream py-16">
          <div className="max-w-[1200px] mx-auto px-8">
            <ScrollReveal>
              <h2 className="font-display text-3xl text-navy mb-8">
                {isFr ? `À lire sur ${n.name} et le marché` : `Reading on ${n.name} and the market`}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((a) => (
                <ScrollReveal key={a.slug}>
                  <Link to={`/blogue/${a.slug}`} className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="overflow-hidden">
                      <img src={a.image} alt={a.title} className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-navy/50 font-sans text-xs tracking-wider uppercase mb-1">{a.category} · {a.dateLabel}</span>
                      <h3 className="font-display text-lg text-navy group-hover:text-teal transition-colors mb-1">{a.title}</h3>
                      <p className="text-teal font-sans text-[11px] tracking-wider uppercase mb-2">Par Van Cropsal</p>
                      <span className="inline-flex items-center gap-1.5 text-teal font-sans text-xs tracking-wider mt-auto pt-2">
                        {isFr ? "LIRE L'ARTICLE" : 'READ ARTICLE'} <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner imageSrc="/images/broker-cta.jpg" buttonLink="/contact" square />
    </>
  )
}
