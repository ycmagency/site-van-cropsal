import { Link } from 'react-router-dom'
import ScrollReveal from '../../components/ScrollReveal'
import { useLang } from '../../i18n/LanguageContext'

export default function AboutSection() {
  const { t } = useLang()
  return (
    <section id="a-propos" className="bg-cream py-24 lg:py-32 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/images/broker-phone.jpg"
                alt="Van Cropsal, courtier immobilier résidentiel"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <p className="text-teal font-sans text-xs tracking-[0.1em] uppercase mb-4">
                {t.about.label}
              </p>
              <h2 className="font-display text-2xl lg:text-3xl text-navy mb-6">
                {t.about.title}
              </h2>
              <p className="text-navy/80 font-sans text-lg leading-relaxed mb-8">
                {t.about.body}
              </p>
              <div className="flex items-center gap-6">
                <Link
                  to="/vendre"
                  className="text-teal font-sans text-sm font-medium hover:underline underline-offset-4"
                >
                  {t.about.vendre}
                </Link>
                <span className="text-navy/20">|</span>
                <Link
                  to="/acheter"
                  className="text-teal font-sans text-sm font-medium hover:underline underline-offset-4"
                >
                  {t.about.acheter}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
