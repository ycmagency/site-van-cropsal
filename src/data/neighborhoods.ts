export interface Neighborhood {
  slug: string
  name: string
  image: string
  /** Mots-clés pour associer les propriétés (comparés à property.city). */
  match: string[]
  fr: { tagline: string; description: string }
  en: { tagline: string; description: string }
}

export const neighborhoods: Neighborhood[] = [
  // ===== Secteurs où Van a des inscriptions actives =====
  {
    slug: 'laval',
    name: 'Laval',
    image: '/images/quartiers/laval.jpg',
    match: ['Laval'],
    fr: {
      tagline: 'Espace, familles et accès rapide',
      description:
        "Laval est l'un de mes secteurs les plus actifs. Des bungalows de Pont-Viau aux duplex de Sainte-Rose en passant par les condos de Laval-des-Rapides, la ville séduit les familles qui veulent plus d'espace et un accès rapide au centre-ville par les ponts et le métro. Un excellent rapport qualité-prix.",
    },
    en: {
      tagline: 'Space, families and quick access',
      description:
        'Laval is one of my most active areas. From Pont-Viau bungalows to Sainte-Rose duplexes and Laval-des-Rapides condos, the city appeals to families wanting more space and quick access to downtown via the bridges and metro. Excellent value for money.',
    },
  },
  {
    slug: 'repentigny',
    name: 'Repentigny',
    image: '/images/quartiers/repentigny.jpg',
    match: ['Repentigny'],
    fr: {
      tagline: 'La banlieue familiale par excellence',
      description:
        "Repentigny est un secteur familial très recherché de la couronne nord : maisons de plain-pied et cottages bien entretenus, parcs, écoles et bord de l'eau. Idéal pour les familles qui cherchent la tranquillité tout en restant à proximité de Montréal.",
    },
    en: {
      tagline: 'A top family suburb',
      description:
        'Repentigny is a highly sought-after family area on the North Shore: well-kept bungalows and cottages, parks, schools and waterfront. Ideal for families seeking calm while staying close to Montreal.',
    },
  },
  {
    slug: 'pierrefonds-roxboro',
    name: 'Pierrefonds-Roxboro',
    image: '/images/quartiers/pierrefonds-roxboro.jpg',
    match: ['Pierrefonds', 'Roxboro'],
    fr: {
      tagline: 'Nature et vie de famille dans l’Ouest-de-l’Île',
      description:
        "Dans l'Ouest-de-l'Île, Pierrefonds-Roxboro offre un cadre paisible et verdoyant au bord de la rivière des Prairies. Maisons à étages et unifamiliales spacieuses, parcs et écoles : un secteur de choix pour les familles qui veulent de l'espace sans quitter Montréal.",
    },
    en: {
      tagline: 'Nature and family life in the West Island',
      description:
        'In the West Island, Pierrefonds-Roxboro offers a peaceful, green setting along the Rivière des Prairies. Spacious two-storey and single-family homes, parks and schools — a prime area for families who want space without leaving Montreal.',
    },
  },
  {
    slug: 'beaconsfield',
    name: 'Beaconsfield',
    image: '/images/quartiers/beaconsfield.jpg',
    match: ['Beaconsfield'],
    fr: {
      tagline: 'Prestige et grands terrains',
      description:
        "Beaconsfield est l'une des banlieues les plus prisées de l'Ouest-de-l'Île : grandes propriétés cossues, terrains paysagers et environnement paisible au bord du lac Saint-Louis. Un secteur d'exception pour les familles en quête d'espace et de qualité de vie.",
    },
    en: {
      tagline: 'Prestige and large lots',
      description:
        'Beaconsfield is one of the most prized West Island suburbs: large, stately homes, landscaped lots and a peaceful setting by Lac Saint-Louis. An exceptional area for families seeking space and quality of life.',
    },
  },
  {
    slug: 'ile-des-soeurs',
    name: 'Île-des-Sœurs (Verdun)',
    image: '/images/quartiers/ile-des-soeurs.jpg',
    match: ['Île-des-Sœurs', 'Ile-des-Soeurs', 'Verdun'],
    fr: {
      tagline: 'Vie urbaine au bord du fleuve',
      description:
        "L'Île-des-Sœurs, dans Verdun, combine la nature et la ville : tours de condos modernes avec vue sur le fleuve, parcs, pistes cyclables et accès rapide au centre-ville. Un choix idéal pour les professionnels et les acheteurs en quête d'un mode de vie urbain et verdoyant.",
    },
    en: {
      tagline: 'Urban living by the river',
      description:
        'Nun’s Island, in Verdun, blends nature and city: modern condo towers with river views, parks, bike paths and quick downtown access. An ideal choice for professionals and buyers seeking a green, urban lifestyle.',
    },
  },
  {
    slug: 'saint-remi',
    name: 'Saint-Rémi',
    image: '/images/quartiers/saint-remi.jpg',
    match: ['Saint-Rémi', 'Saint-Remi'],
    fr: {
      tagline: 'Tranquillité champêtre en Montérégie',
      description:
        "Saint-Rémi, en Montérégie, offre un cadre champêtre et abordable à distance raisonnable de Montréal. Maisons de plain-pied avec grands terrains, idéales pour les familles qui rêvent d'espace et de nature sans sacrifier la proximité des services.",
    },
    en: {
      tagline: 'Country calm in the Montérégie',
      description:
        'Saint-Rémi, in the Montérégie, offers an affordable, countryside setting within reasonable distance of Montreal. Bungalows with large lots, ideal for families dreaming of space and nature without giving up access to services.',
    },
  },
  {
    slug: 'mercier-hochelaga-maisonneuve',
    name: 'Mercier–Hochelaga-Maisonneuve',
    image: '/images/quartiers/mercier-hochelaga-maisonneuve.jpg',
    match: ['Mercier', 'Hochelaga', 'Maisonneuve'],
    fr: {
      tagline: 'Le charme de l’est de Montréal',
      description:
        "Mercier–Hochelaga-Maisonneuve, dans l'est de Montréal, marie vie de quartier conviviale et marché accessible : maisons à étages, plex et condos pleins de cachet. Un secteur familial et en pleine effervescence, bien desservi par les transports et les commerces.",
    },
    en: {
      tagline: 'The charm of east Montreal',
      description:
        'Mercier–Hochelaga-Maisonneuve, in east Montreal, blends friendly neighbourhood life with an accessible market: two-storey homes, plexes and condos full of character. A thriving, family-friendly area well served by transit and shops.',
    },
  },
  {
    slug: 'lanaudiere',
    name: 'Lanaudière (Mandeville, Saint-Liguori)',
    image: '/images/quartiers/lanaudiere.jpg',
    match: ['Mandeville', 'Saint-Liguori', 'Saint-Liguois', 'Lanaudière'],
    fr: {
      tagline: 'Nature, lacs et villégiature',
      description:
        "La région de Lanaudière, avec Mandeville et Saint-Liguori, séduit ceux qui rêvent de nature et de villégiature : terrains à bâtir, chalets et maisons de campagne abordables, entourés de lacs et de forêts. Parfait pour un projet de construction ou une résidence secondaire.",
    },
    en: {
      tagline: 'Nature, lakes and getaways',
      description:
        'The Lanaudière region, with Mandeville and Saint-Liguori, appeals to those dreaming of nature and getaways: building lots, cottages and affordable country homes surrounded by lakes and forests. Perfect for a building project or a second home.',
    },
  },

  // ===== Quartiers centraux de Montréal =====
  {
    slug: 'outremont',
    name: 'Outremont',
    image: '/images/quartiers/outremont.jpg',
    match: ['Outremont'],
    fr: {
      tagline: 'Prestige et élégance francophone',
      description:
        "Quartier huppé et recherché, Outremont séduit par ses maisons cossues, ses cottages patrimoniaux et ses condos haut de gamme bordés d'arbres matures. Idéal pour les familles et professionnels en quête d'un cadre raffiné, à deux pas des meilleures écoles et du mont Royal.",
    },
    en: {
      tagline: 'Prestige and French-Canadian elegance',
      description:
        'An upscale, sought-after area, Outremont charms with its stately homes, heritage cottages and high-end condos lined with mature trees. Ideal for families and professionals seeking a refined setting, steps from top schools and Mount Royal.',
    },
  },
  {
    slug: 'ville-mont-royal',
    name: 'Ville Mont-Royal',
    image: '/images/quartiers/ville-mont-royal.jpg',
    match: ['Ville Mont-Royal', 'Mont-Royal (Ville'],
    fr: {
      tagline: 'Banlieue cossue et verdoyante',
      description:
        "Ville Mont-Royal (TMR) est reconnue pour ses grandes maisons unifamiliales, ses terrains spacieux et ses rues paisibles et arborées. Un secteur prisé des familles qui recherchent l'espace, la tranquillité et un accès rapide au centre-ville.",
    },
    en: {
      tagline: 'Affluent, leafy enclave',
      description:
        'Town of Mount Royal (TMR) is known for its large single-family homes, spacious lots and quiet tree-lined streets. A favourite among families seeking space, calm and quick access to downtown.',
    },
  },
  {
    slug: 'le-plateau-mont-royal',
    name: 'Le Plateau-Mont-Royal',
    image: '/images/quartiers/plateau.jpg',
    match: ['Plateau'],
    fr: {
      tagline: 'Vie de quartier vibrante',
      description:
        "Le Plateau, c'est le charme typiquement montréalais : plex colorés, escaliers extérieurs, condos rénovés et cafés à chaque coin de rue. Un secteur dynamique parfait pour les investisseurs en immeubles à revenus comme pour les premiers acheteurs.",
    },
    en: {
      tagline: 'Vibrant neighbourhood life',
      description:
        'The Plateau is quintessential Montreal: colourful plexes, outdoor staircases, renovated condos and cafés on every corner. A lively area perfect for income-property investors and first-time buyers alike.',
    },
  },
  {
    slug: 'ville-marie',
    name: 'Ville-Marie',
    image: '/images/quartiers/ville-marie.webp',
    match: ['Ville-Marie'],
    fr: {
      tagline: 'Le cœur urbain de Montréal',
      description:
        "Au centre-ville, Ville-Marie offre des condos en hauteur, des lofts et des tours de luxe avec vue imprenable. Un choix idéal pour ceux qui veulent vivre au rythme de la ville, près du travail, des restaurants et de la culture.",
    },
    en: {
      tagline: "Montreal's urban heart",
      description:
        'In the downtown core, Ville-Marie offers high-rise condos, lofts and luxury towers with stunning views. An ideal choice for those who want to live at the pace of the city, close to work, dining and culture.',
    },
  },
  {
    slug: 'westmount',
    name: 'Westmount',
    image: '/images/quartiers/westmount.webp',
    match: ['Westmount'],
    fr: {
      tagline: 'Le prestige intemporel',
      description:
        "Westmount incarne le luxe et l'histoire avec ses demeures victoriennes, ses résidences de prestige et ses condos haut de gamme nichés sur les flancs de la montagne. Un quartier d'exception pour une clientèle exigeante.",
    },
    en: {
      tagline: 'Timeless prestige',
      description:
        'Westmount embodies luxury and history with its Victorian mansions, prestigious residences and high-end condos nestled on the mountainside. An exceptional neighbourhood for discerning buyers.',
    },
  },
  {
    slug: 'ahuntsic-cartierville',
    name: 'Ahuntsic-Cartierville',
    image: '/images/quartiers/ahuntsic.jpg',
    match: ['Ahuntsic', 'Cartierville'],
    fr: {
      tagline: 'Familial et au bord de l’eau',
      description:
        "Bordé par la rivière des Prairies, Ahuntsic-Cartierville séduit les familles avec ses bungalows, ses cottages et ses condos abordables, ses parcs et ses écoles. Un excellent rapport qualité-prix pour s'établir durablement.",
    },
    en: {
      tagline: 'Family-friendly riverside living',
      description:
        'Bordered by the Rivière des Prairies, Ahuntsic-Cartierville appeals to families with its bungalows, cottages and affordable condos, parks and schools. Excellent value for putting down roots.',
    },
  },
  {
    slug: 'cote-des-neiges',
    name: 'Côte-des-Neiges',
    image: '/images/quartiers/cote-des-neiges.jpg',
    match: ['Côte-des-Neiges', 'Cote-des-Neiges'],
    fr: {
      tagline: 'Cosmopolite et central',
      description:
        "Quartier multiculturel et animé, Côte-des-Neiges offre une grande variété de condos, duplex et triplex à des prix accessibles, à proximité des universités et des hôpitaux. Un secteur de choix pour les investisseurs et les jeunes acheteurs.",
    },
    en: {
      tagline: 'Cosmopolitan and central',
      description:
        'A multicultural, lively district, Côte-des-Neiges offers a wide range of condos, duplexes and triplexes at accessible prices, near universities and hospitals. A prime area for investors and young buyers.',
    },
  },
  {
    slug: 'rosemont',
    name: 'Rosemont',
    image: '/images/quartiers/rosemont.jpg',
    match: ['Rosemont', 'Petite-Patrie'],
    fr: {
      tagline: 'Le charme familial abordable',
      description:
        "Rosemont–La Petite-Patrie marie la vie de quartier conviviale et un marché immobilier accessible : plex bien entretenus, condos neufs et duplex parfaits pour les familles et les investisseurs. Un secteur en pleine effervescence.",
    },
    en: {
      tagline: 'Affordable family charm',
      description:
        'Rosemont–La Petite-Patrie blends friendly neighbourhood life with an accessible market: well-kept plexes, new condos and duplexes perfect for families and investors. A thriving, up-and-coming area.',
    },
  },
]

export function getNeighborhood(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug)
}

function normalize(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}

/** Indique si une ville de propriété correspond à un quartier. */
export function cityMatchesNeighborhood(city: string, n: Neighborhood): boolean {
  const c = normalize(city)
  return n.match.some((m) => c.includes(normalize(m)))
}
