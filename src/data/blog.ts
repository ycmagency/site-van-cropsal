export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string // ISO
  dateLabel: string
  readTime: string
  image: string
  /** Titre optimisé pour la balise <title> (SEO). Défaut : title. */
  metaTitle?: string
  /** Meta description SEO (~155 car.). Défaut : excerpt. */
  metaDescription?: string
  /** Mots-clés ciblés (référence interne / SEO). */
  keywords?: string[]
  /** Sources citées (affichées en bas de l'article, cliquables). */
  sources?: { label: string; url: string }[]
  /** Slugs de quartiers liés (pour afficher l'article sur les pages de quartier). */
  areas?: string[]
  // Contenu structuré en sections (titre + paragraphes)
  content: { heading?: string; paragraphs: string[] }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'marche-immobilier-grand-montreal-ete-2026',
    title: "Marché immobilier du Grand Montréal : où en est-on à l'été 2026 ?",
    metaTitle: 'Marché immobilier Montréal & Laval — État du marché été 2026 | Van Cropsal',
    metaDescription:
      "Prix médians, ventes, délais et inventaire : mon analyse du marché immobilier du Grand Montréal et de Laval à l'été 2026, données APCIQ à l'appui. Par Van Cropsal, courtier RE/MAX.",
    keywords: ['marché immobilier Montréal 2026', 'prix maison Laval 2026', 'prix médian unifamiliale Montréal', 'acheter vendre Montréal été 2026', 'marché immobilier Grand Montréal'],
    excerpt:
      "Prix médians, volume de ventes, délais et retour de l'inventaire : mon tour d'horizon du marché immobilier du Grand Montréal et de Laval à l'été 2026, chiffres APCIQ à l'appui.",
    category: 'Marché',
    date: '2026-06-23',
    dateLabel: '23 juin 2026',
    readTime: '6 min',
    image: '/images/neighborhood-villedowntown.jpg',
    content: [
      {
        paragraphs: [
          "On me demande souvent, ces temps-ci : « Van, est-ce le bon moment pour acheter ou vendre ? » Plutôt que de répondre au feeling, regardons ensemble ce que disent les chiffres les plus récents. Les données de mai 2026 publiées par l'Association professionnelle des courtiers immobiliers du Québec (APCIQ), à partir de la base de données Centris, dressent un portrait clair du marché du Grand Montréal — et il est plus équilibré qu'on pourrait le croire.",
        ],
      },
      {
        heading: 'Les chiffres clés du Grand Montréal (mai 2026)',
        paragraphs: [
          "En mai 2026, la région métropolitaine de Montréal a enregistré 4 623 transactions résidentielles, un recul d'environ 7 % sur un an. Mais attention : cette baisse du volume s'explique surtout par le retour de l'inventaire, pas par un effondrement de la demande.",
          "Côté prix, le marché reste solide. Le prix médian d'une maison unifamiliale a atteint 645 000 $ (+3 % sur 12 mois), celui d'une copropriété 430 000 $ (+1 %), et les plex se sont démarqués à 875 000 $ (+6 %). Le délai de vente moyen s'établit autour de 30 jours.",
          "L'élément le plus important pour comprendre 2026 : avec 21 073 propriétés en inscription active, l'inventaire est enfin revenu à ses niveaux d'avant la pandémie. Concrètement, les acheteurs ont plus de choix et un peu plus de marge de manœuvre qu'au cours des dernières années.",
        ],
      },
      {
        heading: 'Et à Laval ?',
        paragraphs: [
          "Laval confirme sa résilience avec 435 ventes résidentielles en mai 2026, un volume stable par rapport au mois précédent. La ville demeure très recherchée par les familles qui veulent plus d'espace et un bon accès au centre-ville — une dynamique que je constate sur le terrain à Pont-Viau, Sainte-Rose et Vimont.",
        ],
      },
      {
        heading: "Ce que ça signifie si vous voulez acheter",
        paragraphs: [
          "Le retour de l'inventaire est une bonne nouvelle pour vous. Vous avez davantage de propriétés à comparer et un peu plus de temps pour décider, sans la pression des surenchères systématiques. Cela dit, les prix continuent de progresser : attendre « la baisse » comporte un risque. Ma recommandation : faites valider votre préapprobation hypothécaire dès maintenant et soyez prêt à agir vite sur la bonne propriété.",
        ],
      },
      {
        heading: "Ce que ça signifie si vous voulez vendre",
        paragraphs: [
          "Avec plus d'inscriptions sur le marché, votre propriété doit se démarquer. Le prix de départ et la qualité de la présentation (home staging, photos professionnelles, diffusion) font toute la différence pour vendre dans le délai moyen de 30 jours — ou plus vite. Les propriétés bien évaluées et bien préparées continuent de se vendre rapidement, parfois au-dessus du prix demandé.",
          "Si vous hésitez, la première étape est simple : une évaluation gratuite et sans engagement de la juste valeur marchande de votre propriété, basée sur les ventes comparables réelles de votre secteur.",
        ],
      },
      {
        heading: "Mon conseil",
        paragraphs: [
          "Le marché de l'été 2026 récompense les gens préparés. Que vous achetiez ou vendiez à Montréal, Laval ou sur la Rive-Nord, une stratégie claire et appuyée sur des données locales vaut mieux que tenter de « deviner » le marché. C'est exactement le rôle d'un courtier : transformer ces statistiques en décisions concrètes adaptées à votre situation.",
          "Vous avez un projet pour 2026 ? Contactez-moi : on en discute, sans pression, autour d'un café ou d'un appel.",
        ],
      },
    ],
    sources: [
      { label: 'APCIQ — Statistiques mensuelles du marché immobilier (base Centris)', url: 'https://apciq.ca/en/residential-barometer/monthly-statistics/' },
      { label: 'Marché immobilier du Grand Montréal — Mai 2026 (Journal Métro)', url: 'https://journalmetro.com/inspiration/habitation-et-immobilier/3217853/marche-immobilier-du-grand-montreal-mai-2026/' },
    ],
    areas: ['laval', 'repentigny', 'pierrefonds-roxboro', 'beaconsfield', 'ile-des-soeurs', 'saint-remi', 'mercier-hochelaga-maisonneuve', 'lanaudiere', 'ville-marie', 'rosemont', 'outremont', 'le-plateau-mont-royal'],
  },
  {
    slug: 'acheter-a-laval-2026',
    title: 'Acheter à Laval en 2026 : Pont-Viau, Sainte-Rose et Laval-des-Rapides',
    metaTitle: 'Acheter à Laval en 2026 — Guide des secteurs | Van Cropsal RE/MAX',
    metaDescription:
      "Pont-Viau, Sainte-Rose, Laval-des-Rapides : quel secteur de Laval choisir en 2026 ? Prix, types de propriétés et conseils de Van Cropsal, courtier RE/MAX à Laval.",
    keywords: ['acheter à Laval', 'maison à vendre Laval', 'Pont-Viau immobilier', 'Sainte-Rose Laval', 'condo Laval-des-Rapides', 'courtier immobilier Laval'],
    excerpt:
      "Pont-Viau, Sainte-Rose ou Laval-des-Rapides ? Mon guide des secteurs de Laval pour acheter au bon endroit en 2026, selon votre budget et votre style de vie.",
    category: 'Quartiers',
    date: '2026-06-18',
    dateLabel: '18 juin 2026',
    readTime: '5 min',
    image: '/images/listings/st-andre-vente.jpg',
    areas: ['laval'],
    content: [
      {
        paragraphs: [
          "Laval est l'une de mes régions de prédilection, et pour cause : la ville offre une variété de secteurs capables de répondre à presque tous les besoins et tous les budgets. Voici mon tour d'horizon des principaux secteurs où j'accompagne régulièrement mes clients.",
        ],
      },
      {
        heading: 'Pont-Viau : central et pratique',
        paragraphs: [
          "Collé sur la rivière des Prairies et à quelques minutes des ponts vers Montréal, Pont-Viau est parfait pour ceux qui veulent rester proches du centre-ville. On y trouve surtout des maisons de plain-pied et des bungalows familiaux, bien établis, dans des rues tranquilles. C'est un secteur de choix pour une première maison ou pour une famille qui veut du concret sans exploser son budget.",
        ],
      },
      {
        heading: 'Sainte-Rose : charme et nature',
        paragraphs: [
          "Sainte-Rose séduit par son cachet villageois, ses berges et son ambiance plus paisible. On y trouve un beau mélange de maisons unifamiliales et de duplex — d'excellentes occasions autant pour les familles que pour les investisseurs en quête d'un immeuble à revenus dans un secteur recherché.",
        ],
      },
      {
        heading: 'Laval-des-Rapides : la vie de condo',
        paragraphs: [
          "Pour ceux qui préfèrent la simplicité d'un condo avec services, Laval-des-Rapides est en pleine transformation : tours modernes près du métro Cartier et de la Concorde, idéales pour les jeunes professionnels, les retraités ou comme propriété à revenus en location. L'accès au métro en fait un secteur très liquide à la revente.",
        ],
      },
      {
        heading: 'Mon conseil',
        paragraphs: [
          "Le bon secteur dépend de votre style de vie : proximité du travail, espace pour les enfants, ou facilité d'entretien. Je connais ces secteurs en profondeur et je peux vous aider à cibler les propriétés qui correspondent vraiment à vos critères.",
          "Vous pensez à acheter à Laval ? Contactez-moi pour une consultation gratuite — on trouvera ensemble le secteur et la propriété qui vous conviennent.",
        ],
      },
    ],
  },
  {
    slug: 'acheter-premiere-maison-montreal',
    title: "Acheter une première maison à Montréal : le guide complet 2026",
    metaTitle: "Acheter une première maison à Montréal et Laval — Guide 2026 | Van Cropsal",
    metaDescription:
      "Mise de fonds, préapprobation, taxe de bienvenue, quartiers : le guide complet du premier acheteur à Montréal, Laval et la Rive-Nord, par Van Cropsal, courtier RE/MAX.",
    keywords: ['acheter première maison Montréal', 'premier acheteur Québec', 'mise de fonds maison', 'préapprobation hypothécaire Laval', 'courtier immobilier Montréal'],
    excerpt:
      "Budget, mise de fonds, préapprobation, quartiers : tout ce qu'un premier acheteur doit savoir pour réussir son achat à Montréal, Laval et la Rive-Nord.",
    category: 'Acheter',
    date: '2026-05-12',
    dateLabel: '12 mai 2026',
    readTime: '7 min',
    image: '/images/listings/rotonde.jpg',
    content: [
      {
        paragraphs: [
          "Acheter sa première propriété est l'une des décisions financières les plus importantes d'une vie. Après six ans à accompagner des acheteurs à Montréal, Laval et sur la Rive-Nord, j'ai vu une chose se confirmer encore et encore : c'est la préparation qui fait la différence entre une transaction stressante et un achat réussi. Voici, étape par étape, ce que tout premier acheteur devrait savoir avant de se lancer.",
        ],
      },
      {
        heading: '1. Établir un budget réaliste et votre mise de fonds',
        paragraphs: [
          "Avant même de visiter une propriété, déterminez combien vous pouvez réellement investir. Au Québec, la mise de fonds minimale est de 5 % sur la tranche d'un prix d'achat jusqu'à 500 000 $, puis 10 % sur la portion qui dépasse ce montant. Pour une propriété de 450 000 $ — un prix courant pour un condo ou une petite maison dans plusieurs quartiers de Montréal et de Laval — cela représente environ 22 500 $.",
          "N'oubliez pas les frais annexes, souvent sous-estimés par les premiers acheteurs : la taxe de bienvenue (droits de mutation), les honoraires du notaire, l'inspection préachat, l'assurance habitation et les frais de déménagement. Prévoyez de 2 à 4 % du prix d'achat pour ces coûts.",
        ],
      },
      {
        heading: '2. Obtenir une préapprobation hypothécaire',
        paragraphs: [
          "La préapprobation hypothécaire est votre meilleur atout. Elle vous donne un budget clair, fixe votre taux pour une période donnée et, surtout, vous rend crédible aux yeux des vendeurs. Dans un marché compétitif comme celui du Grand Montréal, une offre appuyée par une préapprobation se démarque nettement d'une offre conditionnelle au financement.",
          "Je travaille avec un réseau de courtiers hypothécaires de confiance et je peux vous orienter vers le bon partenaire pour obtenir les meilleures conditions selon votre situation.",
        ],
      },
      {
        heading: '3. Profiter des programmes pour premiers acheteurs',
        paragraphs: [
          "Plusieurs incitatifs existent et peuvent alléger votre achat : le Régime d'accession à la propriété (RAP) qui permet de retirer jusqu'à 60 000 $ de votre REER, le Compte d'épargne libre d'impôt pour l'achat d'une première propriété (CELIAPP) et le crédit d'impôt pour l'achat d'une première habitation. Bien combinés, ces programmes peuvent représenter plusieurs milliers de dollars d'économies.",
        ],
      },
      {
        heading: '4. Choisir le bon quartier',
        paragraphs: [
          "Montréal, Laval, Repentigny, Saint-Léonard, la Rive-Nord ou la Rive-Sud : chaque secteur a sa personnalité, son type de propriétés et sa fourchette de prix. Un jeune couple cherchant un condo près du centre-ville n'aura pas les mêmes priorités qu'une famille visant un cottage avec cour à Laval ou à Repentigny.",
          "Définissez vos priorités avant de cibler vos recherches : proximité du travail et du transport en commun, qualité des écoles, services, et potentiel de revente. Je publie justement des guides de quartier détaillés pour vous aider à comparer les secteurs qui correspondent à votre style de vie.",
        ],
      },
      {
        heading: "5. Se faire accompagner par un courtier immobilier",
        paragraphs: [
          "Un courtier immobilier vous accompagne à chaque étape : recherche ciblée, organisation des visites, évaluation de la juste valeur marchande, rédaction et négociation de la promesse d'achat, puis coordination jusqu'à la signature chez le notaire. Pour l'acheteur, ce service est généralement sans frais — c'est habituellement le vendeur qui assume la rétribution.",
          "Vous songez à acheter une première propriété à Montréal ou en banlieue ? Contactez-moi pour une consultation gratuite et sans engagement : nous établirons ensemble un plan clair adapté à votre budget et à vos objectifs.",
        ],
      },
    ],
  },
  {
    slug: 'preparer-sa-maison-pour-la-vente',
    title: 'Vendre sa propriété à Montréal : 7 étapes pour vendre vite et au bon prix',
    metaTitle: 'Vendre sa maison à Montréal et Laval — 7 conseils d\'expert | Van Cropsal',
    metaDescription:
      "Home staging, photos, juste prix : 7 étapes éprouvées pour vendre votre propriété rapidement et au meilleur prix à Montréal, Laval et la Rive-Nord. Conseils de Van Cropsal.",
    keywords: ['vendre sa maison Montréal', 'vendre propriété Laval', 'home staging Québec', 'évaluation gratuite maison', 'courtier vendeur Rive-Nord'],
    excerpt:
      "Du désencombrement au home staging, découvrez comment maximiser la valeur perçue de votre propriété et la vendre plus vite, au meilleur prix, dans le Grand Montréal.",
    category: 'Vendre',
    date: '2026-04-28',
    dateLabel: '28 avril 2026',
    readTime: '6 min',
    image: '/images/listings/alice-carriere.jpg',
    content: [
      {
        paragraphs: [
          "La première impression est décisive, et elle se joue souvent en quelques secondes — devant l'écran d'un acheteur qui parcourt les annonces. Une propriété bien préparée se vend généralement plus rapidement et à un meilleur prix. Voici les sept étapes que je recommande à mes clients vendeurs à Montréal, Laval et sur la Rive-Nord avant chaque mise en marché.",
        ],
      },
      {
        heading: '1. Désencombrer et dépersonnaliser',
        paragraphs: [
          "Rangez les objets personnels, libérez les surfaces et videz les placards trop pleins. L'acheteur doit pouvoir s'imaginer vivre chez lui, pas visiter votre maison. Des espaces dégagés paraissent immédiatement plus grands et plus lumineux — un avantage déterminant pour les condos et les plex où chaque mètre carré compte.",
        ],
      },
      {
        heading: '2. Réparer les petits défauts',
        paragraphs: [
          "Une poignée qui bouge, un robinet qui fuit, une peinture écaillée ou une tuile fissurée : ces petits détails envoient le message que la maison a été négligée, et donnent à l'acheteur des arguments pour négocier à la baisse. Corrigez-les avant les visites. C'est un investissement minime au rendement souvent surprenant.",
        ],
      },
      {
        heading: '3. Soigner la lumière et la propreté',
        paragraphs: [
          "Nettoyez en profondeur, ouvrez grand les rideaux et ajoutez de l'éclairage chaleureux là où c'est sombre. Une maison propre, lumineuse et qui sent bon inspire confiance et accélère la décision d'achat.",
        ],
      },
      {
        heading: '4. Miser sur le home staging et des photos professionnelles',
        paragraphs: [
          "Plus de 90 % des acheteurs débutent leur recherche en ligne. Vos photos sont votre véritable vitrine : elles font la différence entre une annonce qu'on ignore et une qu'on s'empresse de visiter. Un home staging léger combiné à un photographe professionnel est l'un des meilleurs retours sur investissement à la vente — c'est un service que j'inclus dans ma mise en marché.",
        ],
      },
      {
        heading: '5. Fixer le bon prix dès le départ',
        paragraphs: [
          "C'est l'étape la plus stratégique. Un prix trop élevé fait fuir les acheteurs et fait stagner l'annonce ; un prix trop bas vous fait perdre de l'argent. La clé est une analyse comparative de marché rigoureuse, basée sur les ventes récentes de propriétés semblables dans votre secteur. Une propriété correctement évaluée dès le départ attire plus d'acheteurs et se vend souvent plus près — voire au-dessus — du prix demandé.",
        ],
      },
      {
        heading: "6. Valoriser l'extérieur",
        paragraphs: [
          "L'apparence extérieure crée la toute première impression, autant en photo qu'en personne : pelouse tondue, haies taillées, entrée dégagée, façade propre et porte d'entrée accueillante. Pour les visites d'automne et d'hiver à Montréal, pensez à déneiger et à bien éclairer.",
        ],
      },
      {
        heading: "7. Confier la vente à un courtier immobilier",
        paragraphs: [
          "Un courtier coordonne l'ensemble du processus : évaluation, mise en marché, diffusion sur Centris et les portails, visites, négociation et sécurisation de la transaction jusqu'au notaire. Mon rôle est de faire rayonner votre propriété, d'attirer les bons acheteurs et de défendre vos intérêts à chaque étape.",
          "Vous pensez à vendre à Montréal, Laval ou sur la Rive-Nord ? Contactez-moi pour une évaluation gratuite et sans obligation de votre propriété.",
        ],
      },
    ],
  },
  {
    slug: 'comprendre-la-taxe-de-bienvenue',
    title: 'Taxe de bienvenue au Québec : calcul, montants et exemptions en 2026',
    metaTitle: 'Taxe de bienvenue 2026 : calcul et exemptions à Montréal et Laval | Van Cropsal',
    metaDescription:
      "Comment se calcule la taxe de bienvenue (droits de mutation) à Montréal, Laval et au Québec ? Tranches, exemples de montants et exonérations expliqués par Van Cropsal.",
    keywords: ['taxe de bienvenue Québec', 'droits de mutation Montréal', 'calcul taxe de bienvenue Laval', 'exemption taxe de bienvenue', 'frais achat maison Québec'],
    excerpt:
      "Droits de mutation, calcul par tranches, montants à prévoir et exonérations : tout comprendre sur la taxe de bienvenue à Montréal, Laval et partout au Québec.",
    category: 'Conseils',
    date: '2026-04-09',
    dateLabel: '9 avril 2026',
    readTime: '5 min',
    image: '/images/listings/eglise.jpg',
    content: [
      {
        paragraphs: [
          "La « taxe de bienvenue », officiellement appelée droits de mutation immobilière, est l'un des frais d'achat les plus souvent sous-estimés par les acheteurs. C'est un montant que toute personne qui acquiert une propriété doit verser à sa municipalité, quelques mois après la transaction. Voici comment elle fonctionne et combien prévoir selon votre achat à Montréal, à Laval ou ailleurs au Québec.",
        ],
      },
      {
        heading: "Qu'est-ce que la taxe de bienvenue ?",
        paragraphs: [
          "Malgré son nom, elle n'a rien d'un cadeau de bienvenue : le terme vient du ministre Jean Bienvenue, à l'origine de la loi dans les années 1970. Il s'agit d'une taxe municipale unique, perçue sur le transfert de propriété d'un immeuble. Chaque ville l'applique, mais certaines — dont Montréal — ajoutent leurs propres tranches pour les propriétés de plus grande valeur.",
        ],
      },
      {
        heading: 'Comment se calcule-t-elle ?',
        paragraphs: [
          "La taxe est calculée par tranches sur la « base d'imposition », soit le plus élevé entre le prix d'achat et l'évaluation municipale. Les taux de base au Québec sont : 0,5 % sur la première tranche (jusqu'à environ 58 900 $ en 2026), 1 % sur la tranche suivante (jusqu'à environ 294 600 $), puis 1,5 % au-delà. Montréal applique des taux additionnels pouvant atteindre 3 % et plus sur les portions supérieures à 1 M$.",
          "Concrètement, pour une propriété de 450 000 $ à Laval, prévoyez environ 5 000 $ de taxe de bienvenue. À Montréal, pour le même prix, le montant est comparable, mais grimpe plus vite sur les propriétés haut de gamme.",
        ],
      },
      {
        heading: 'Quand faut-il la payer ?',
        paragraphs: [
          "Vous recevez la facture de votre municipalité de quelques semaines à quelques mois après la signature chez le notaire. C'est un paiement unique, parfois considérable, qu'il faut absolument prévoir dans votre budget d'achat pour éviter une mauvaise surprise. Mon conseil : mettez ce montant de côté dès la promesse d'achat acceptée.",
        ],
      },
      {
        heading: 'Existe-t-il des exemptions ?',
        paragraphs: [
          "Oui. Certaines situations donnent droit à une exonération : transfert entre conjoints (mariés, unis civilement ou conjoints de fait sous conditions), transfert en ligne directe (parents-enfants), ou certains transferts entre une personne et une société qu'elle contrôle. Les conditions sont précises — un notaire confirmera votre admissibilité.",
          "Vous préparez un achat à Montréal, Laval ou sur la Rive-Nord et vous voulez une estimation claire de tous vos frais ? Contactez-moi : je vous aide à planifier votre budget du début à la fin.",
        ],
      },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

/** Articles liés à un quartier (par slug). À défaut, retourne les plus récents. */
export function postsForArea(areaSlug: string, limit = 3): BlogPost[] {
  const tagged = blogPosts.filter((p) => p.areas?.includes(areaSlug))
  return (tagged.length > 0 ? tagged : blogPosts).slice(0, limit)
}
