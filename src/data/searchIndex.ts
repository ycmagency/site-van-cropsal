export interface SearchItem {
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  path: string
  type: 'page' | 'faq' | 'article'
  external?: boolean
  externalUrl?: string
}

export const searchIndex: SearchItem[] = [
  // Pages principales
  { title: 'Accueil', titleEn: 'Home', description: "Page d'accueil de Van Cropsal, courtier immobilier", descriptionEn: 'Van Cropsal real estate broker home page', path: '/', type: 'page' },
  { title: 'Vendre', titleEn: 'Sell', description: 'Vendre votre propriété avec Van Cropsal', descriptionEn: 'Sell your property with Van Cropsal', path: '/vendre', type: 'page' },
  { title: 'Acheter', titleEn: 'Buy', description: 'Acheter une propriété à Montréal et Laval', descriptionEn: 'Buy a property in Montreal and Laval', path: '/acheter', type: 'page' },
  { title: 'Propriétés', titleEn: 'Properties', description: 'Trouver une propriété — listings disponibles', descriptionEn: 'Find a property — available listings', path: '/proprietes', type: 'page' },
  { title: 'Blogue', titleEn: 'Blog', description: 'Articles et conseils immobiliers', descriptionEn: 'Real estate articles and tips', path: '/blogue', type: 'page' },
  { title: 'FAQ', titleEn: 'FAQ', description: "Questions fréquentes sur l'immobilier", descriptionEn: 'Frequently asked questions about real estate', path: '/faq', type: 'page' },
  { title: 'Nous joindre', titleEn: 'Contact', description: 'Contactez Van Cropsal', descriptionEn: 'Contact Van Cropsal', path: '/contact', type: 'page' },

  // FAQ
  { title: 'Frais courtier pour acheteur', titleEn: 'Broker fees for buyer', description: "Les services du courtier sont sans frais pour l'acheteur", descriptionEn: 'Broker services are free for the buyer', path: '/faq', type: 'faq' },
  { title: 'Mise de fonds minimale', titleEn: 'Minimum down payment', description: "5 % jusqu'à 500 000 $, 10 % jusqu'à 1 000 000 $", descriptionEn: '5% up to $500,000, 10% up to $1,000,000', path: '/faq', type: 'faq' },
  { title: 'Taxe de bienvenue', titleEn: 'Welcome tax', description: 'Droits de mutation immobilière payés à la municipalité', descriptionEn: 'Property transfer duties paid to the municipality', path: '/faq', type: 'faq' },
  { title: 'Inspection avant achat', titleEn: 'Home inspection', description: "Inspection recommandée avant l'achat d'une propriété", descriptionEn: 'Inspection recommended before buying a property', path: '/faq', type: 'faq' },
  { title: 'Secteurs desservis', titleEn: 'Areas served', description: 'Montréal, Laval, Rive-Nord, Repentigny, Mandeville', descriptionEn: 'Montreal, Laval, North Shore, Repentigny, Mandeville', path: '/faq', type: 'faq' },
  { title: 'Évaluation propriété', titleEn: 'Property valuation', description: 'Obtenir une évaluation gratuite de votre propriété', descriptionEn: 'Get a free valuation of your property', path: '/faq', type: 'faq' },
  { title: 'Acheter et vendre en même temps', titleEn: 'Buy and sell simultaneously', description: 'Coordonner achat et vente de propriétés', descriptionEn: 'Coordinate buying and selling properties', path: '/faq', type: 'faq' },

  // Articles blogue
  { title: "10 tendances d'aménagement extérieur 2026", titleEn: '10 outdoor landscaping trends 2026', description: 'Astuces déco et aménagement extérieur', descriptionEn: 'Outdoor décor and landscaping tips', path: '/blogue', type: 'article' },
  { title: 'Rénovations écoénergétiques', titleEn: 'Eco-friendly renovations', description: 'Meilleures rénovations pour une maison plus verte', descriptionEn: 'Best renovations for a greener home', path: '/blogue', type: 'article' },
  { title: 'Marché immobilier Montréal', titleEn: 'Montreal real estate market', description: 'Analyse et tendances du marché immobilier', descriptionEn: 'Real estate market analysis and trends', path: '/blogue', type: 'article' },
]

export function searchSite(query: string): SearchItem[] {
  if (!query.trim()) return []
  const q = query.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  return searchIndex.filter((item) => {
    const fields = [item.title, item.titleEn, item.description, item.descriptionEn]
      .join(' ')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
    return fields.includes(q)
  })
}
