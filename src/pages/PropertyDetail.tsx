import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, BedDouble, Bath, Home, MapPin, ExternalLink } from 'lucide-react'
import { getProperty, properties, REMAX_BROKER_URL, localizeProperty } from '../data/properties'
import PropertyCard from '../components/PropertyCard'
import Logo from '../components/Logo'
import ScrollReveal from '../components/ScrollReveal'
import Seo from '../components/Seo'
import { SITE } from '../data/siteConfig'
import { useLang } from '../i18n/LanguageContext'

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>()
  const { t, lang } = useLang()
  const base = id ? getProperty(id) : undefined
  const property = base ? localizeProperty(base, lang) : undefined

  if (!property) {
    return (
      <section className="bg-navy min-h-[70vh] flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="font-display text-4xl text-white mb-4">{t.detail.notFound}</h1>
          <Link to="/proprietes" className="text-teal font-sans hover:underline">
            {t.detail.backLink}
          </Link>
        </div>
      </section>
    )
  }

  const similar = properties
    .filter((p) => p.id !== property.id)
    .slice(0, 3)
    .map((p) => localizeProperty(p, lang))

  const priceValue = property.price.replace(/[^\d]/g, '')
  const listingJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Product', 'Residence'],
    name: `${property.address}, ${property.city}`,
    description: property.description,
    image: `${SITE.url}${property.image}`,
    url: `${SITE.url}/proprietes/${property.id}`,
    ...(property.beds !== undefined ? { numberOfBedrooms: property.beds } : {}),
    ...(property.baths !== undefined ? { numberOfBathroomsTotal: property.baths } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: 'QC',
      addressCountry: 'CA',
    },
    broker: { '@id': `${SITE.url}/#realestateagent` },
    ...(priceValue
      ? {
          offers: {
            '@type': 'Offer',
            price: priceValue,
            priceCurrency: 'CAD',
            availability: 'https://schema.org/InStock',
            seller: { '@id': `${SITE.url}/#realestateagent` },
          },
        }
      : {}),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Propriétés', item: `${SITE.url}/proprietes` },
      { '@type': 'ListItem', position: 3, name: property.address, item: `${SITE.url}/proprietes/${property.id}` },
    ],
  }

  return (
    <>
      <Seo
        title={`${property.address}, ${property.city} — ${property.price}`}
        description={property.description.slice(0, 160)}
        path={`/proprietes/${property.id}`}
        image={property.image}
        jsonLd={[listingJsonLd, breadcrumbJsonLd]}
      />
      {/* Hero image */}
      <section
        className="relative min-h-[55vh] lg:min-h-[70vh] flex items-end pt-20"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26,32,44,0.25), rgba(26,32,44,0.75)), url('${property.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-8 pb-10 lg:pb-14">
          <span className={`inline-block text-white text-xs font-sans px-3 py-1 rounded-sm mb-4 ${property.status === 'location' ? 'bg-red-600' : 'bg-teal'}`}>
            {property.badge}
          </span>
          <h1 className="font-display text-3xl lg:text-5xl text-white mb-2">{property.address}</h1>
          <p className="text-white/80 font-sans flex items-center gap-2">
            <MapPin size={16} /> {property.city}
          </p>
          <p className="text-white font-display text-3xl lg:text-4xl mt-4">{property.price}</p>
        </div>
      </section>

      {/* Breadcrumb / back */}
      <div className="bg-cream border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-4">
          <Link to="/proprietes" className="inline-flex items-center gap-2 text-navy/70 font-sans text-sm hover:text-teal transition-colors">
            <ArrowLeft size={16} /> {t.detail.retour}
          </Link>
        </div>
      </div>

      {/* Details */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Left: info */}
          <div className="lg:col-span-2">
            {/* Key facts */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-cream rounded-lg p-5 flex flex-col gap-1">
                <Home size={20} className="text-teal mb-1" />
                <span className="text-navy/50 font-sans text-xs uppercase tracking-wider">{t.detail.type}</span>
                <span className="text-navy font-sans text-sm font-medium">{property.type}</span>
              </div>
              {property.beds !== undefined && (
                <div className="bg-cream rounded-lg p-5 flex flex-col gap-1">
                  <BedDouble size={20} className="text-teal mb-1" />
                  <span className="text-navy/50 font-sans text-xs uppercase tracking-wider">{t.detail.chambres}</span>
                  <span className="text-navy font-sans text-sm font-medium">{property.beds}</span>
                </div>
              )}
              {property.baths !== undefined && (
                <div className="bg-cream rounded-lg p-5 flex flex-col gap-1">
                  <Bath size={20} className="text-teal mb-1" />
                  <span className="text-navy/50 font-sans text-xs uppercase tracking-wider">{t.detail.sdb}</span>
                  <span className="text-navy font-sans text-sm font-medium">{property.baths}</span>
                </div>
              )}
            </div>

            <h2 className="font-display text-2xl lg:text-3xl text-navy mb-4">{t.detail.description}</h2>
            <p className="text-navy/70 font-sans leading-relaxed mb-8">{property.description}</p>

            <h3 className="font-sans font-medium text-navy text-sm tracking-wider uppercase mb-4">{t.detail.caracteristiques}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-navy/70 font-sans text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: broker card with RE/MAX banner */}
          <aside className="lg:col-span-1">
            <div className="bg-navy rounded-lg overflow-hidden sticky top-24">
              {/* Filet d'accent teal */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-teal to-transparent opacity-60" />

              <div className="p-6">
                {/* Logo VC */}
                <div className="pb-5 mb-5 border-b border-white/10">
                  <Logo variant="dark" size="sm" />
                </div>

                <p className="text-white font-display text-xl mb-1">Van Cropsal</p>
                <p className="text-white/60 font-sans text-sm mb-5">{t.detail.brokerTitle}</p>

                <div className="flex flex-col gap-2 mb-6">
                  <a href="tel:+14384029471" className="text-white/90 font-sans text-sm hover:text-teal transition-colors">438 402-9471 <span className="text-white/40">{t.detail.cell}</span></a>
                  <a href="tel:+15143290000" className="text-white/90 font-sans text-sm hover:text-teal transition-colors">514 329-0000 <span className="text-white/40">{t.detail.bureau}</span></a>
                  <a href="mailto:vanc@remax-quebec.com" className="text-teal font-sans text-sm hover:text-teal-dark transition-colors break-all">vanc@remax-quebec.com</a>
                </div>

                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-teal text-white rounded-lg font-sans text-sm font-medium hover:bg-teal-dark transition-all mb-3"
                >
                  {t.detail.contacter}
                </Link>
                <a
                  href={property.listingUrl ?? REMAX_BROKER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 border border-white/25 text-white rounded-lg font-sans text-sm font-medium hover:bg-white/10 transition-all"
                >
                  {t.detail.voirRemax} <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Similar properties */}
      <section className="bg-cream py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl text-navy mb-8">{t.detail.autres}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similar.map((p) => (
              <PropertyCard
                key={p.id}
                id={p.id}
                image={p.image}
                badge={p.badge}
                address={p.address}
                location={p.city}
                price={p.price}
                size={p.features.slice(0, 2).join(' · ')}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
