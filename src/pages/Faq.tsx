import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Minus } from 'lucide-react'
import Seo from '../components/Seo'
import { useLang } from '../i18n/LanguageContext'

interface QA {
  q: string
  a: string
}

const faqsByLang: Record<'fr' | 'en', QA[]> = {
  fr: [
    { q: "Combien coûtent les services d'un courtier pour un acheteur ?", a: "Dans la grande majorité des transactions, les services du courtier sont sans frais pour l'acheteur : la rétribution est généralement assumée par le vendeur. Vous bénéficiez donc d'un accompagnement professionnel complet sans coût supplémentaire." },
    { q: 'Quelle est la mise de fonds minimale pour acheter au Québec ?', a: "La mise de fonds minimale est de 5 % pour la tranche d'un prix d'achat jusqu'à 500 000 $, puis 10 % sur la portion entre 500 000 $ et 1 000 000 $. Au-delà de 1 000 000 $, un minimum de 20 % est exigé." },
    { q: "Qu'est-ce que la taxe de bienvenue ?", a: "Il s'agit des droits de mutation immobilière, un montant payé à la municipalité après l'achat d'une propriété. Elle est calculée par tranches sur la base d'imposition (prix d'achat ou évaluation municipale, le plus élevé des deux)." },
    { q: 'Combien de temps faut-il pour vendre une propriété ?', a: "Le délai dépend du secteur, du type de propriété, du prix et de l'état du marché. Une propriété bien préparée et correctement évaluée se vend généralement plus rapidement." },
    { q: "Dois-je faire inspecter la propriété avant de l'acheter ?", a: "C'est fortement recommandé. Une inspection par un professionnel permet de connaître l'état réel du bâtiment et d'éviter les mauvaises surprises. Cette condition peut être intégrée à votre promesse d'achat." },
    { q: 'Dans quels secteurs Van Cropsal est-il actif ?', a: "Van Cropsal accompagne ses clients dans la grande région de Montréal, à Laval, sur la Rive-Nord (Repentigny, Mandeville) et les environs, pour des propriétés résidentielles, des plex et des terrains." },
    { q: 'Comment obtenir une évaluation de la valeur de ma propriété ?', a: "Communiquez avec moi pour une évaluation gratuite et sans engagement. Je réalise une analyse comparative du marché basée sur les ventes récentes de propriétés similaires dans votre secteur." },
    { q: 'Peut-on acheter et vendre en même temps ?', a: "Oui, c'est très fréquent. Je vous aide à coordonner les deux transactions et les dates de possession afin de faciliter la transition entre votre propriété actuelle et la nouvelle." },
  ],
  en: [
    { q: 'How much do a broker’s services cost for a buyer?', a: 'In the vast majority of transactions, the broker’s services are free for the buyer: the compensation is generally paid by the seller. You therefore benefit from complete professional support at no additional cost.' },
    { q: 'What is the minimum down payment to buy in Quebec?', a: 'The minimum down payment is 5% on the portion of the purchase price up to $500,000, then 10% on the portion between $500,000 and $1,000,000. Above $1,000,000, a minimum of 20% is required.' },
    { q: 'What is the welcome tax?', a: 'These are the property transfer duties, an amount paid to the municipality after buying a property. It is calculated in brackets on the tax base (purchase price or municipal assessment, whichever is higher).' },
    { q: 'How long does it take to sell a property?', a: 'The timeline depends on the area, the property type, the price and market conditions. A well-prepared and properly priced property generally sells faster.' },
    { q: 'Should I have the property inspected before buying it?', a: 'It is strongly recommended. A professional inspection reveals the real condition of the building and helps avoid bad surprises. This condition can be included in your promise to purchase.' },
    { q: 'Which areas does Van Cropsal serve?', a: 'Van Cropsal assists clients across Greater Montreal, in Laval, on the North Shore (Repentigny, Mandeville) and surrounding areas, for residential properties, plexes and lots.' },
    { q: 'How can I get a valuation of my property?', a: 'Contact me for a free, no-obligation valuation. I carry out a comparative market analysis based on recent sales of similar properties in your area.' },
    { q: 'Can I buy and sell at the same time?', a: 'Yes, it is very common. I help you coordinate both transactions and the possession dates to make the transition between your current and new property easier.' },
  ],
}

export default function Faq() {
  const { t, lang } = useLang()
  const faqs = faqsByLang[lang]
  const [open, setOpen] = useState<number | null>(0)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <Seo
        title="FAQ — Questions fréquentes | Van Cropsal"
        description="Réponses aux questions fréquentes sur l'achat et la vente immobilière au Québec : frais de courtier, mise de fonds, taxe de bienvenue, inspection et plus."
        path="/faq"
        jsonLd={faqJsonLd}
      />
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-[820px] mx-auto px-8">
          <p className="text-teal font-sans text-xs tracking-[0.15em] uppercase mb-4">{t.faq.label}</p>
          <h1 className="font-display text-5xl lg:text-6xl text-white mb-4">{t.faq.title}</h1>
          <p className="text-white/70 font-sans text-lg">
            {t.faq.intro}
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-white py-16">
        <div className="max-w-[820px] mx-auto px-8">
          <div className="flex flex-col divide-y divide-border border-t border-b border-border">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-display text-lg lg:text-xl transition-colors ${isOpen ? 'text-teal' : 'text-navy group-hover:text-teal'}`}>
                      {item.q}
                    </span>
                    <span className="shrink-0 text-teal">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? '320px' : '0' }}
                  >
                    <p className="text-navy/70 font-sans leading-relaxed pb-6 pr-8">{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="bg-cream rounded-xl p-8 mt-12 text-center">
            <h3 className="font-display text-2xl text-navy mb-3">{t.faq.ctaTitle}</h3>
            <p className="text-navy/60 font-sans text-sm mb-6">
              {t.faq.ctaBody}
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-teal text-white rounded-full font-sans text-sm font-medium tracking-wider hover:bg-teal-dark hover:scale-[1.03] transition-all"
            >
              {t.faq.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
