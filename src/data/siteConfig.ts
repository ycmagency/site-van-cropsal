// Données réelles et vérifiables du courtier — utilisées pour le SEO (JSON-LD, meta, sitemap).
export const SITE = {
  name: 'Van Cropsal — Courtier immobilier',
  shortName: 'Van Cropsal',
  // Domaine final du site (à ajuster si différent).
  url: 'https://cropsal.com',
  defaultImage: '/images/hero-home.jpg',
  locale: 'fr_CA',
  broker: {
    name: 'Van Cropsal',
    jobTitle: 'Courtier immobilier résidentiel',
    agency: 'RE/MAX Alliance & Pro-Commercial',
    office: 'Alliance Jarry',
    phone: '+1-438-402-9471',
    officePhone: '+1-514-329-0000',
    email: 'vanc@remax-quebec.com',
    street: '4865, rue Jarry Est',
    city: 'Saint-Léonard',
    region: 'QC',
    postalCode: 'H1R 1Y1',
    country: 'CA',
    // Coordonnées géographiques approximatives du bureau (Saint-Léonard, Montréal).
    geo: { latitude: 45.5901, longitude: -73.5972 },
    priceRange: '$$',
    languages: ['Français', 'English'],
    // Profils officiels (sources vérifiables)
    sameAs: [
      'https://remax-alliance.ca/fr/nos-courtiers/van-cropsal-126296.html',
      'https://www.facebook.com/Van-Cropsal-Courtier-Immobilier-103742778702855',
      'https://www.instagram.com/vancropsal/',
    ],
    areaServed: ['Montréal', 'Laval', 'Saint-Léonard', 'Repentigny', 'Rive-Nord', 'Rive-Sud', 'Montérégie'],
  },
}

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: SITE.broker.street,
  addressLocality: SITE.broker.city,
  addressRegion: SITE.broker.region,
  postalCode: SITE.broker.postalCode,
  addressCountry: SITE.broker.country,
}

const openingHours = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '20:00',
  },
]

// JSON-LD global de l'agent immobilier (réutilisé sur toutes les pages).
export const realEstateAgentJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': `${SITE.url}/#realestateagent`,
  name: SITE.broker.name,
  alternateName: `${SITE.broker.name} — ${SITE.broker.agency}`,
  jobTitle: SITE.broker.jobTitle,
  url: SITE.url,
  image: `${SITE.url}${SITE.defaultImage}`,
  logo: `${SITE.url}/images/logo-signature.png`,
  telephone: SITE.broker.phone,
  email: SITE.broker.email,
  priceRange: SITE.broker.priceRange,
  knowsLanguage: SITE.broker.languages,
  worksFor: {
    '@type': 'Organization',
    name: SITE.broker.agency,
  },
  address: postalAddress,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.broker.geo.latitude,
    longitude: SITE.broker.geo.longitude,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${SITE.broker.street} ${SITE.broker.city} ${SITE.broker.region} ${SITE.broker.postalCode}`,
  )}`,
  openingHoursSpecification: openingHours,
  areaServed: SITE.broker.areaServed.map((name) => ({ '@type': 'City', name })),
  sameAs: SITE.broker.sameAs,
}

// JSON-LD Person (Van Cropsal) — signal E-E-A-T pour Google.
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.broker.name,
  jobTitle: SITE.broker.jobTitle,
  url: SITE.url,
  image: `${SITE.url}${SITE.defaultImage}`,
  telephone: SITE.broker.phone,
  email: SITE.broker.email,
  knowsLanguage: SITE.broker.languages,
  worksFor: {
    '@type': 'Organization',
    name: SITE.broker.agency,
  },
  address: postalAddress,
  areaServed: SITE.broker.areaServed,
  sameAs: SITE.broker.sameAs,
}

// JSON-LD WebSite global.
export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  inLanguage: ['fr-CA', 'en-CA'],
  publisher: { '@id': `${SITE.url}/#realestateagent` },
}
