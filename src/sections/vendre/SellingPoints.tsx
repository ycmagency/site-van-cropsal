import { Link } from 'react-router-dom'
import ScrollReveal from '../../components/ScrollReveal'
import { useLang } from '../../i18n/LanguageContext'

const icons = [
  (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#319795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 28l6-16 6 10 6-6 6 12" /><circle cx="20" cy="12" r="3" /></svg>),
  (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#319795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 32V16l12-8 12 8v16" /><rect x="16" y="22" width="8" height="10" /></svg>),
  (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#319795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6v28M12 12h12a4 4 0 0 1 0 8H16a4 4 0 0 0 0 8h12" /></svg>),
  (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#319795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="20" cy="20" r="16" /><path d="M20 10v10l7 4" /></svg>),
  (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#319795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 20h24M20 8v24" /><circle cx="20" cy="20" r="6" /></svg>),
  (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#319795" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="11" width="26" height="20" rx="3" /><circle cx="20" cy="21" r="5" /><path d="M14 11l2-3h8l2 3" /></svg>),
]

const content = {
  fr: {
    title: 'Avantages de vendre avec Van Cropsal',
    intro:
      "Vendre votre propriété au meilleur prix demande une stratégie, pas seulement une pancarte. Van Cropsal, courtier immobilier chez RE/MAX Alliance & Pro-Commercial, met en place une mise en marché professionnelle, évalue la juste valeur de votre propriété et négocie pour vous, du premier jour jusqu'à la signature chez le notaire.",
    button: 'Évaluation gratuite de votre propriété',
    advantages: [
      { title: "La meilleure mise en marché possible", description: "La manière dont votre propriété est présentée fait toute la différence. Ma mission est de la faire rayonner et de maximiser sa visibilité auprès des acheteurs." },
      { title: 'Une prise en charge complète', description: "Profitez d'un service personnalisé : un seul courtier responsable de votre dossier vous conseille à chaque étape et maximise votre temps. Je m'occupe de tout." },
      { title: 'La juste valeur marchande', description: "La vente débute par l'évaluation de la juste valeur. Je l'évalue sans frais et sans obligation, à partir des ventes comparables réelles de votre secteur." },
      { title: 'Accessibilité 7 jours sur 7', description: "Je ne refuse jamais une demande de visite. Un courtier est toujours disponible pour recevoir vos potentiels acheteurs au bon moment." },
      { title: 'Une connaissance approfondie du marché', description: "Maison, condo, duplex ou immeuble à revenus à Montréal, Laval ou sur la Rive-Nord : je connais les nuances de chaque type de propriété et de chaque quartier." },
      { title: 'Photos et home staging professionnels', description: "Photos de qualité, mise en valeur et diffusion sur Centris et les portails : tout est pensé pour vendre plus vite et au meilleur prix." },
    ],
  },
  en: {
    title: 'The advantages of selling with Van Cropsal',
    intro:
      'Selling your property at the best price takes a strategy, not just a sign. Van Cropsal, real estate broker at RE/MAX Alliance & Pro-Commercial, builds a professional marketing plan, assesses your property’s fair value and negotiates for you, from day one to closing at the notary.',
    button: 'Free home valuation',
    advantages: [
      { title: 'The best possible marketing', description: 'How your property is presented makes all the difference. My mission is to showcase it and maximize its visibility to buyers.' },
      { title: 'Complete handling of your file', description: 'Enjoy personalized service: a single broker responsible for your file advises you at every step and saves your time. I take care of everything.' },
      { title: 'Fair market value', description: 'Selling starts with assessing fair value. I evaluate it free of charge and with no obligation, based on real comparable sales in your area.' },
      { title: 'Available 7 days a week', description: 'I never turn down a viewing request. A broker is always available to welcome your potential buyers at the right time.' },
      { title: 'In-depth market knowledge', description: 'House, condo, duplex or income property in Montreal, Laval or the North Shore: I know the nuances of every property type and neighbourhood.' },
      { title: 'Professional photos and home staging', description: 'Quality photos, staging and distribution on Centris and the major portals: everything is designed to sell faster and at the best price.' },
    ],
  },
}

export default function SellingPoints() {
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
                src="/images/selling/house-1.jpg"
                alt="Propriété à vendre"
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
