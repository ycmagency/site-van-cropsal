import { Star } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'
import { useLang } from '../../i18n/LanguageContext'

// --- Avis ---
interface Review {
  name: string
  city: string
  quote: string
}

const reviewsByLang: Record<'fr' | 'en', Review[]> = {
  fr: [
    { name: 'Safa Talioua', city: 'Montréal', quote: "Ça fait 1 an et demi qu'on cherchait une propriété, on avait perdu espoir. Grâce à Van, en 1 mois on était acceptés. Un travail professionnel, un suivi toujours à l'écoute. Un GRAND MERCI : j'ai eu ce que je voulais avec toutes les conditions souhaitées. ❤️" },
    { name: 'Moulay Alaoui', city: 'Montréal', quote: "M. Cropsal, une référence dans son domaine. Toujours souriant, il conseille bien ses clients et reste disponible pour les accompagner dans leur projet. Merci beaucoup, ça a été un plaisir. Je le recommande à 100 %." },
    { name: 'Li-Anne Jacques', city: 'Montréal', quote: "Incroyable première expérience avec Van. Nous avons eu droit à un excellent service de sa part, même après notre achat. Van est très professionnel, à l'écoute et super sympathique. Nous vous le recommandons grandement." },
  ],
  en: [
    { name: 'Safa Talioua', city: 'Montreal', quote: 'We had been searching for a property for a year and a half and had lost hope. Thanks to Van, within a month we were accepted. Professional work and attentive follow-up. A BIG THANK YOU: I got exactly what I wanted, with all the conditions I hoped for. ❤️' },
    { name: 'Moulay Alaoui', city: 'Montreal', quote: 'Mr. Cropsal is a reference in his field. Always smiling, he advises his clients well and stays available to support them in their project. Thank you so much, it was a pleasure. I recommend him 100%.' },
    { name: 'Li-Anne Jacques', city: 'Montreal', quote: 'Incredible first experience with Van. We received excellent service from him, even after our purchase. Van is very professional, attentive and super friendly. We highly recommend him.' },
  ],
}

export default function Testimonials() {
  const { t, lang } = useLang()
  const reviews = reviewsByLang[lang]

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-8">
        <ScrollReveal>
          <p className="text-teal font-sans text-xs tracking-[0.15em] uppercase mb-3">
            {t.testimonials.label}
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-navy mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-navy/60 font-sans leading-relaxed max-w-2xl mb-12">
            {t.testimonials.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className="font-sans font-medium text-navy text-sm tracking-wider uppercase mb-8">
            {t.testimonials.avisClients}
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ScrollReveal key={r.name} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-6 shadow-sm h-full flex flex-col">
                <div className="flex gap-1 mb-3 text-teal">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="text-navy/70 font-sans text-sm leading-relaxed mb-5 flex-1">
                  « {r.quote} »
                </p>
                <div>
                  <p className="font-sans font-medium text-navy text-sm">{r.name}</p>
                  <p className="text-navy/50 font-sans text-xs">{r.city}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
