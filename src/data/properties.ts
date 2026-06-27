export interface Property {
  id: string
  image: string
  badge: string
  status: 'vente' | 'location'
  address: string
  city: string
  postal?: string
  beds?: number
  baths?: number
  type: string
  price: string
  description: string
  features: string[]
  featured?: boolean
  listingUrl?: string
}

// Lien vers la fiche du courtier sur RE/MAX Alliance
export const REMAX_BROKER_URL =
  'https://remax-alliance.ca/fr/nos-courtiers/van-cropsal-126296.html'

export const properties: Property[] = [
  {
    id: 'alice-carriere',
    image: '/images/listings/alice-carriere.jpg',
    listingUrl: 'https://cropsal.com/fr/nos-proprietes/beaconsfield/235-alice-carriere-street/11547240',
    badge: 'Ã€ vendre',
    status: 'vente',
    address: '235, rue Alice-CarriÃ¨re',
    city: 'Beaconsfield',
    beds: 7,
    baths: 3,
    type: 'Maison Ã  2 Ã©tages',
    price: '1 500 000 $',
    description:
      "Vaste maison Ã  deux Ã©tages nichÃ©e dans un secteur recherchÃ© de Beaconsfield. Avec ses 7 chambres et 3 salles de bain, elle offre des espaces de vie gÃ©nÃ©reux et lumineux, idÃ©ale pour une grande famille. Terrain paysager et environnement paisible.",
    features: ['7 chambres', '3 salles de bain', 'Maison Ã  2 Ã©tages', 'Beaconsfield'],
    featured: true,
  },
  {
    id: 'rotonde',
    image: '/images/listings/rotonde.jpg',
    listingUrl: 'https://cropsal.com/fr/nos-proprietes/montreal-verdun-ile-des-soeurs/151-rue-de-la-rotonde/26185207',
    badge: 'Ã€ vendre',
    status: 'vente',
    address: '151, rue de la Rotonde',
    city: 'MontrÃ©al (Verdun/ÃŽle-des-SÅ“urs)',
    beds: 2,
    baths: 2,
    type: 'Appartement / condo',
    price: '1 190 500 $',
    description:
      "Magnifique appartement Ã  l'ÃŽle-des-SÅ“urs offrant 2 chambres et 2 salles de bain. Finitions haut de gamme, grandes fenÃªtres et emplacement de choix Ã  proximitÃ© des services, du fleuve et du centre-ville de MontrÃ©al.",
    features: ['2 chambres', '2 salles de bain', 'Appartement', 'ÃŽle-des-SÅ“urs'],
    featured: true,
  },
  {
    id: 'claude-masson-z',
    image: '/images/listings/claude-masson-z.jpg',
    listingUrl: 'https://cropsal.com/fr/nos-proprietes/montreal-mercier-hochelaga-maisonneuve/5824z-rue-claude-masson/17042189',
    badge: 'Ã€ vendre',
    status: 'vente',
    address: '5824Z, rue Claude-Masson',
    city: 'MontrÃ©al (Mercier/Hochelaga-Maisonneuve)',
    beds: 3,
    baths: 1,
    type: 'Maison Ã  paliers multiples',
    price: '699 000 $',
    description:
      "Maison Ã  paliers multiples dans le quartier Mercier/Hochelaga-Maisonneuve. 3 chambres et une salle de bain, espaces modulables et lumineux. Secteur familial bien desservi par les transports et les commerces.",
    features: ['3 chambres', '1 salle de bain', 'Paliers multiples', 'Mercier/HM'],
    featured: true,
  },
  {
    id: 'domaine-grenier',
    image: '/images/listings/domaine-grenier.jpg',
    listingUrl: 'https://cropsal.com/fr/nos-proprietes/saint-liguori/40-rue-du-domaine-grenier/21090669',
    badge: 'Ã€ vendre',
    status: 'vente',
    address: '40, rue du Domaine-Grenier',
    city: 'Saint-Liguori',
    beds: 2,
    baths: 1,
    type: 'Plain-pied',
    price: '149 000 $',
    description:
      "Charmante maison de plain-pied Ã  Saint-Liguori, dans LanaudiÃ¨re. 2 chambres et une salle de bain sur un grand terrain verdoyant. Une occasion abordable, parfaite comme premier achat ou comme chalet Ã  la campagne.",
    features: ['2 chambres', '1 salle de bain', 'Plain-pied', 'Saint-Liguori'],
    featured: true,
  },
  {
    id: 'eglise',
    image: '/images/listings/eglise.jpg',
    listingUrl: 'https://cropsal.com/fr/nos-proprietes/saint-remi/117-rue-de-l-eglise/27071854',
    badge: 'Ã€ vendre',
    status: 'vente',
    address: "117, rue de l'Ã‰glise",
    city: 'Saint-RÃ©mi',
    beds: 4,
    baths: 1,
    type: 'Plain-pied',
    price: '690 000 $',
    description:
      "Belle maison de plain-pied Ã  Saint-RÃ©mi offrant 4 chambres et une salle de bain. IdÃ©ale pour une famille en quÃªte de tranquillitÃ©, avec grand terrain et environnement champÃªtre tout en restant Ã  proximitÃ© des services.",
    features: ['4 chambres', '1 salle de bain', 'Plain-pied', 'Saint-RÃ©mi'],
  },
  {
    id: 'anderson',
    image: '/images/listings/anderson.jpg',
    listingUrl: 'https://cropsal.com/fr/nos-proprietes/montreal-pierrefonds-roxboro/4520-rue-anderson/11183653',
    badge: 'Ã€ vendre',
    status: 'vente',
    address: '4520, rue Anderson',
    city: 'MontrÃ©al (Pierrefonds-Roxboro)',
    beds: 4,
    baths: 1,
    type: 'Maison Ã  2 Ã©tages',
    price: '680 000 $',
    description:
      "Maison Ã  deux Ã©tages Ã  Pierrefonds-Roxboro, 4 chambres et une salle de bain. Quartier rÃ©sidentiel paisible et verdoyant, prÃ¨s des parcs, Ã©coles et de l'eau. Beaucoup d'espace pour la famille.",
    features: ['4 chambres', '1 salle de bain', 'Maison Ã  2 Ã©tages', 'Pierrefonds-Roxboro'],
  },
  {
    id: 'st-augustin',
    image: '/images/listings/st-augustin.jpg',
    listingUrl: 'https://cropsal.com/fr/nos-proprietes/mandeville/rg-st-augustin/23927882',
    badge: 'Terrain',
    status: 'vente',
    address: 'Rang St-Augustin',
    city: 'Mandeville',
    type: 'Terrain Ã  bÃ¢tir',
    price: '649 000 $',
    description:
      "Grand terrain Ã  bÃ¢tir Ã  Mandeville, dans LanaudiÃ¨re. Une occasion idÃ©ale pour rÃ©aliser votre projet de construction ou de villÃ©giature dans un cadre naturel exceptionnel, entourÃ© de nature et de plans d'eau.",
    features: ['Terrain Ã  bÃ¢tir', 'Grande superficie', 'Mandeville', 'LanaudiÃ¨re'],
  },
  {
    id: 'st-andre-vente',
    image: '/images/listings/st-andre-vente.jpg',
    listingUrl: 'https://cropsal.com/fr/nos-proprietes/laval-pont-viau/557-rue-st-andre/23419443',
    badge: 'Ã€ vendre',
    status: 'vente',
    address: '557, rue St-AndrÃ©',
    city: 'Laval (Pont-Viau)',
    beds: 3,
    baths: 2,
    type: 'Plain-pied',
    price: '635 000 $',
    description:
      "Maison de plain-pied Ã  Pont-Viau, Laval. 3 chambres et 2 salles de bain, parfaite pour une famille. Emplacement central Ã  quelques minutes des ponts, des Ã©coles et des services.",
    features: ['3 chambres', '2 salles de bain', 'Plain-pied', 'Laval (Pont-Viau)'],
  },
  {
    id: 'saulnier',
    image: '/images/listings/saulnier.jpg',
    listingUrl: 'https://cropsal.com/fr/nos-proprietes/repentigny-repentigny/795-rue-saulnier/10351674',
    badge: 'Ã€ vendre',
    status: 'vente',
    address: '795, rue Saulnier',
    city: 'Repentigny',
    beds: 3,
    baths: 2,
    type: 'Plain-pied',
    price: '599 900 $',
    description:
      "Maison de plain-pied Ã  Repentigny offrant 3 chambres et 2 salles de bain. Secteur familial recherchÃ©, proche des Ã©coles, parcs et commerces. AmÃ©nagement fonctionnel et accueillant.",
    features: ['3 chambres', '2 salles de bain', 'Plain-pied', 'Repentigny'],
  },
  {
    id: 'cure-labelle',
    image: '/images/listings/cure-labelle.jpg',
    listingUrl: 'https://cropsal.com/fr/nos-proprietes/laval-sainte-rose/121-boul-cure-labelle/10426285',
    badge: 'Ã€ vendre',
    status: 'vente',
    address: '121, boul. CurÃ©-Labelle',
    city: 'Laval (Sainte-Rose)',
    beds: 1,
    baths: 1,
    type: 'Duplex',
    price: '526 625 $',
    description:
      "Duplex Ã  Sainte-Rose, Laval. Une belle occasion d'investissement ou de propriÃ©tÃ© occupÃ©e par le propriÃ©taire. Bien situÃ©, Ã  proximitÃ© des commerces et du transport.",
    features: ['Duplex', '1 chambre', '1 salle de bain', 'Laval (Sainte-Rose)'],
  },
  {
    id: 'st-andre-location',
    image: '/images/listings/st-andre-vente.jpg',
    listingUrl: 'https://cropsal.com/fr/nos-proprietes/laval-pont-viau/557-rue-st-andre/23419443',
    badge: 'Ã€ louer',
    status: 'location',
    address: '557, rue St-AndrÃ©',
    city: 'Laval (Pont-Viau)',
    beds: 3,
    baths: 2,
    type: 'Plain-pied Ã  louer',
    price: '3 000 $ / mois',
    description:
      "Maison de plain-pied Ã  louer Ã  Pont-Viau, Laval. 3 chambres et 2 salles de bain, prÃªte Ã  accueillir votre famille. Disponible pour location dans un secteur central et bien desservi.",
    features: ['3 chambres', '2 salles de bain', 'Location', 'Laval (Pont-Viau)'],
  },
  {
    id: 'robert-elie',
    image: '/images/listings/robert-elie.jpg',
    listingUrl: 'https://cropsal.com/fr/nos-proprietes/laval-laval-des-rapides/603-rue-robert-elie/27689933',
    badge: 'Ã€ louer',
    status: 'location',
    address: '1607-603, rue Robert-Ã‰lie',
    city: 'Laval (Laval-des-Rapides)',
    beds: 2,
    baths: 1,
    type: 'Appartement Ã  louer',
    price: '2 150 $ / mois',
    description:
      "Appartement Ã  louer Ã  Laval-des-Rapides. 2 chambres et une salle de bain, espaces lumineux et modernes. Emplacement pratique prÃ¨s des services, des transports et des grands axes.",
    features: ['2 chambres', '1 salle de bain', 'Location', 'Laval-des-Rapides'],
  },
]

export function getProperty(id: string): Property | undefined {
  return properties.find((p) => p.id === id)
}

// Traductions anglaises (badge, type, description, caractÃ©ristiques) par id.
type PropEn = { badge: string; type: string; description: string; features: string[] }
const propertiesEn: Record<string, PropEn> = {
  'alice-carriere': {
    badge: 'For sale', type: 'Two-storey house',
    description: 'Spacious two-storey home nestled in a sought-after area of Beaconsfield. With 7 bedrooms and 3 bathrooms, it offers generous, bright living spaces, ideal for a large family. Landscaped lot and peaceful surroundings.',
    features: ['7 bedrooms', '3 bathrooms', 'Two-storey house', 'Beaconsfield'],
  },
  'rotonde': {
    badge: 'For sale', type: 'Apartment / condo',
    description: 'Beautiful apartment on ÃŽle-des-SÅ“urs offering 2 bedrooms and 2 bathrooms. High-end finishes, large windows and a prime location near services, the river and downtown Montreal.',
    features: ['2 bedrooms', '2 bathrooms', 'Apartment', 'ÃŽle-des-SÅ“urs'],
  },
  'claude-masson-z': {
    badge: 'For sale', type: 'Split-level house',
    description: 'Split-level home in the Mercier/Hochelaga-Maisonneuve area. 3 bedrooms and one bathroom, with flexible, bright spaces. A family-friendly neighbourhood well served by transit and shops.',
    features: ['3 bedrooms', '1 bathroom', 'Split-level', 'Mercier/HM'],
  },
  'domaine-grenier': {
    badge: 'For sale', type: 'Bungalow',
    description: 'Charming bungalow in Saint-Liguori, in the LanaudiÃ¨re region. 2 bedrooms and one bathroom on a large green lot. An affordable opportunity, perfect as a first home or a country cottage.',
    features: ['2 bedrooms', '1 bathroom', 'Bungalow', 'Saint-Liguori'],
  },
  'eglise': {
    badge: 'For sale', type: 'Bungalow',
    description: 'Lovely bungalow in Saint-RÃ©mi offering 4 bedrooms and one bathroom. Ideal for a family seeking tranquility, with a large lot and a country setting while remaining close to services.',
    features: ['4 bedrooms', '1 bathroom', 'Bungalow', 'Saint-RÃ©mi'],
  },
  'anderson': {
    badge: 'For sale', type: 'Two-storey house',
    description: 'Two-storey home in Pierrefonds-Roxboro, 4 bedrooms and one bathroom. A quiet, green residential neighbourhood near parks, schools and the water. Plenty of space for the family.',
    features: ['4 bedrooms', '1 bathroom', 'Two-storey house', 'Pierrefonds-Roxboro'],
  },
  'st-augustin': {
    badge: 'Lot', type: 'Building lot',
    description: 'Large building lot in Mandeville, in the LanaudiÃ¨re region. An ideal opportunity to build your dream home or cottage in an exceptional natural setting, surrounded by nature and waterways.',
    features: ['Building lot', 'Large area', 'Mandeville', 'LanaudiÃ¨re'],
  },
  'st-andre-vente': {
    badge: 'For sale', type: 'Bungalow',
    description: 'Bungalow in Pont-Viau, Laval. 3 bedrooms and 2 bathrooms, perfect for a family. Central location just minutes from the bridges, schools and services.',
    features: ['3 bedrooms', '2 bathrooms', 'Bungalow', 'Laval (Pont-Viau)'],
  },
  'saulnier': {
    badge: 'For sale', type: 'Bungalow',
    description: 'Bungalow in Repentigny offering 3 bedrooms and 2 bathrooms. A sought-after family area, close to schools, parks and shops. Functional and welcoming layout.',
    features: ['3 bedrooms', '2 bathrooms', 'Bungalow', 'Repentigny'],
  },
  'cure-labelle': {
    badge: 'For sale', type: 'Duplex',
    description: 'Duplex in Sainte-Rose, Laval. A great investment opportunity or owner-occupied property. Well located, close to shops and transit.',
    features: ['Duplex', '1 bedroom', '1 bathroom', 'Laval (Sainte-Rose)'],
  },
  'st-andre-location': {
    badge: 'For rent', type: 'Bungalow for rent',
    description: 'Bungalow for rent in Pont-Viau, Laval. 3 bedrooms and 2 bathrooms, ready to welcome your family. Available for rent in a central, well-served area.',
    features: ['3 bedrooms', '2 bathrooms', 'Rental', 'Laval (Pont-Viau)'],
  },
  'robert-elie': {
    badge: 'For rent', type: 'Apartment for rent',
    description: 'Apartment for rent in Laval-des-Rapides. 2 bedrooms and one bathroom, bright and modern spaces. Convenient location near services, transit and major roads.',
    features: ['2 bedrooms', '1 bathroom', 'Rental', 'Laval-des-Rapides'],
  },
}

export function localizeProperty(p: Property, lang: 'fr' | 'en'): Property {
  if (lang !== 'en') return p
  const e = propertiesEn[p.id]
  return e ? { ...p, ...e } : p
}

