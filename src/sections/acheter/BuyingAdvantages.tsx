import { Link } from 'react-router-dom'
import ScrollReveal from '../../components/ScrollReveal'
import { useLang } from '../../i18n/LanguageContext'

const icons = [
  (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#319795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="20" cy="20" r="16" /><path d="M20 10v10l7 4" /></svg>),
  (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#319795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 32V16l12-8 12 8v16" /><rect x="16" y="22" width="8" height="10" /></svg>),
  (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#319795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="20" cy="20" r="16" /><path d="M20 10v10l6 6" /></svg>),
  (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#319795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 28l6-16 6 10 6-6 6 12" /><circle cx="20" cy="12" r="3" /></svg>),
  (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#319795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 20h24M20 8v24" /><circle cx="20" cy="20" r="6" /></svg>),
  (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#319795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="20" cy="14" r="6" /><path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" /></svg>),
]

const content = {
  fr: {
    title: "Avantages d'acheter avec Van Cropsal",
    intro: "Van Cropsal, courtier immobilier chez RE/MAX Alliance & Pro-Commercial, vous aide dans les démarches de recherche, est à l'écoute de vos besoins, cible les propriétés susceptibles de répondre, vous accompagne lors des visites, apporte un point de vue objectif et négocie pour vous afin que vous deveniez acquéreur de la propriété idéale, aux meilleures conditions.",
    button: 'Consultation pour acheteur gratuite',
    advantages: [
      { title: 'Connaissance approfondie du marché montréalais et de ses quartiers', description: 'Recevez des conseils pertinents basés sur un savoir-faire éprouvé.' },
      { title: 'Accès à des propriétés exclusives', description: 'Choisissez parmi une large sélection de propriétés inscrites sur le marché.' },
      { title: 'Disponibilité 7 jours sur 7', description: 'Suivi méticuleux de la phase initiale jusqu’à la conclusion chez le notaire.' },
      { title: 'Accompagnement personnalisé et économie de temps', description: 'Visitez uniquement des propriétés rigoureusement sélectionnées selon vos critères, sans gérer les prises de rendez-vous.' },
      { title: 'Aide à la négociation', description: "Négocier quand vous êtes émotionnellement impliqué peut être stressant. Confiez cette tâche à un expert pour obtenir la propriété de vos rêves aux meilleures conditions." },
      { title: 'La force d’un réseau de partenaires de confiance', description: 'Besoin d’une référence pour des rénovations ou le meilleur taux hypothécaire ? Profitez d’un vaste réseau de professionnels à vous recommander.' },
    ],
  },
  en: {
    title: 'The advantages of buying with Van Cropsal',
    intro: 'Van Cropsal, real estate broker at RE/MAX Alliance & Pro-Commercial, helps you with your search, listens to your needs, targets the right properties, guides you during viewings, brings an objective viewpoint and negotiates for you so that you become the owner of the ideal property, at the best conditions.',
    button: 'Free buyer consultation',
    advantages: [
      { title: 'In-depth knowledge of the Montreal market and its neighbourhoods', description: 'Receive relevant advice based on proven expertise.' },
      { title: 'Access to exclusive properties', description: 'Choose from a wide selection of properties on the market.' },
      { title: 'Available 7 days a week', description: 'Meticulous follow-up from the very first step to closing at the notary.' },
      { title: 'Personalized guidance and time savings', description: 'Visit only carefully selected properties that match your criteria, without managing the appointments yourself.' },
      { title: 'Negotiation support', description: 'Negotiating when you are emotionally involved can be stressful. Entrust this task to an expert to get your dream property at the best conditions.' },
      { title: 'The strength of a trusted partner network', description: 'Need a referral for renovations or the best mortgage rate? Benefit from a vast network of professionals we can recommend.' },
    ],
  },
}

export default function BuyingAdvantages() {
  const { lang } = useLang()
  const c = content[lang]
  const advantages = c.advantages.map((a, i) => ({ ...a, icon: icons[i] }))
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Top intro */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/broker-phone.jpg"
                alt="Courtier immobilier"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl lg:text-4xl text-navy mb-6">
                {c.title}
              </h2>
              <p className="text-navy/70 font-sans leading-relaxed mb-6">
                {c.intro}
              </p>
              <Link to="/contact" className="inline-block px-8 py-4 bg-teal text-white rounded-full font-sans text-sm font-medium tracking-wider hover:bg-teal-dark hover:scale-[1.02] transition-all">
                {c.button}
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {advantages.map((adv, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream mb-4">
                  {adv.icon}
                </div>
                <h3 className="font-display text-lg text-navy mb-3">
                  {adv.title}
                </h3>
                <p className="text-navy/60 font-sans text-sm leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
