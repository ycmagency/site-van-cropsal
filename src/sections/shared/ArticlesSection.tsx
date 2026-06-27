import ScrollReveal from '../../components/ScrollReveal'
import { ArrowRight } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'

const content = {
  fr: {
    heading: 'Articles qui pourraient vous intéresser',
    voirTous: 'VOIR TOUS LES ARTICLES',
    lire: 'LIRE LA SUITE',
    cat: 'Conseils et astuces',
    titles: [
      '5 bonnes raisons de travailler avec un courtier immobilier',
      '3 applications pour simplifier votre déménagement',
      'Tout savoir sur le certificat de localisation',
    ],
  },
  en: {
    heading: 'Articles you might like',
    voirTous: 'VIEW ALL ARTICLES',
    lire: 'READ MORE',
    cat: 'Tips & advice',
    titles: [
      '5 good reasons to work with a real estate broker',
      '3 apps to simplify your move',
      'Everything you need to know about the location certificate',
    ],
  },
}

const images = ['/images/neighborhood-outremont.jpg', '/images/property-3.jpg', '/images/property-4.jpg']

export default function ArticlesSection() {
  const { lang } = useLang()
  const c = content[lang]
  const articles = c.titles.map((title, i) => ({ title, image: images[i], category: c.cat }))
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-3xl lg:text-4xl text-navy">
              {c.heading}
            </h2>
            <a href="/blogue" className="hidden lg:inline-flex items-center gap-2 text-teal font-sans text-xs tracking-wider hover:underline">
              {c.voirTous}
              <ArrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <a href="/" className="group block">
                <div className="rounded-lg overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-navy/50 font-sans text-xs tracking-wider uppercase mb-2">
                  {article.category}
                </p>
                <h3 className="font-display text-lg text-navy group-hover:text-teal transition-colors">
                  {article.title}
                </h3>
                <span className="inline-block mt-3 text-teal font-sans text-xs tracking-wider group-hover:underline">
                  {c.lire}
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
