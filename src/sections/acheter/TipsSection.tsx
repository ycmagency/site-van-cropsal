import { Link } from 'react-router-dom'
import ScrollReveal from '../../components/ScrollReveal'
import { useLang } from '../../i18n/LanguageContext'

const content = {
  fr: {
    title: "Les conseils avant d'acheter",
    tips: [
      'Consultez Van Cropsal, courtier immobilier résidentiel',
      "Déterminez combien vous pouvez investir avant de débuter le processus d'achat de votre propriété",
      'Utilisez nos outils de calcul',
      'Dressez la liste de vos besoins, de vos priorités et des secteurs convoités',
      "Demandez à votre courtier d'évaluer la valeur réelle des propriétés convoitées",
    ],
    button: 'Nous avons les outils, contactez-nous pour les obtenir',
  },
  en: {
    title: 'Tips before buying',
    tips: [
      'Consult Van Cropsal, residential real estate broker',
      'Determine how much you can invest before starting the buying process',
      'Use our calculation tools',
      'Make a list of your needs, priorities and target areas',
      'Ask your broker to assess the real value of the properties you are interested in',
    ],
    button: 'We have the tools — contact us to get them',
  },
}

export default function TipsSection() {
  const { lang } = useLang()
  const c = content[lang]
  return (
    <section className="bg-cream py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl text-navy">
                {c.title}
              </h2>
            </div>
            <div>
              <ul className="space-y-4 mb-8">
                {c.tips.map((tip) => (
                  <li key={tip} className="text-navy/70 font-sans leading-relaxed flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block px-8 py-4 bg-teal text-white rounded-full font-sans text-sm font-medium tracking-wider hover:bg-teal-dark hover:scale-[1.02] transition-all">
                {c.button}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
