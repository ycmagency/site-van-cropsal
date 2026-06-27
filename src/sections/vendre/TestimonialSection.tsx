import ScrollReveal from '../../components/ScrollReveal'
import { useLang } from '../../i18n/LanguageContext'

const quotes = {
  fr: "« Ça fait 1 an et demi que moi et mon mari on cherche une propriété, on avait perdu espoir. La rencontre de M. Cropsal a ajouté de la joie à notre petite famille : grâce à Van, en 1 mois on était acceptés. Vraiment un travail professionnel, un suivi toujours à l'écoute, toujours là pour répondre à nos questions. Un GRAND MERCI à toi : grâce à toi j'ai eu ce que je voulais avec toutes les conditions que je voulais. ❤️ »",
  en: '“For a year and a half my husband and I had been looking for a property and had lost hope. Meeting Mr. Cropsal brought joy to our little family: thanks to Van, within 1 month we were accepted. Truly professional work, attentive follow-up, always there to answer our questions. A BIG THANK YOU: thanks to you I got what I wanted, with all the conditions I wanted. ❤️”',
}

export default function TestimonialSection() {
  const { lang } = useLang()
  return (
    <section className="bg-cream py-20">
      <div className="max-w-[800px] mx-auto px-8 text-center">
        <ScrollReveal>
          <blockquote className="font-display text-2xl lg:text-3xl text-navy leading-relaxed mb-6">
            {quotes[lang]}
          </blockquote>
          <cite className="text-navy/60 font-sans text-sm not-italic">
            — Safa Talioua, Montréal
          </cite>
        </ScrollReveal>
      </div>
    </section>
  )
}
