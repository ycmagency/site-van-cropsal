import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'
import { useLang } from '../i18n/LanguageContext'

interface CTABannerProps {
  imageSrc: string
  overline?: string
  headline?: string
  buttonText?: string
  buttonLink?: string
  square?: boolean
}

export default function CTABanner({
  imageSrc,
  overline = 'Van Cropsal – RE/MAX Alliance & Pro-Commercial',
  headline,
  buttonText,
  buttonLink = '/contact',
  square = false,
}: CTABannerProps) {
  const { t } = useLang()
  const finalHeadline = headline ?? t.cta.headline
  const finalButton = buttonText ?? t.cta.button
  return (
    <section className="bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image */}
        {square ? (
          <ScrollReveal direction="left" className="flex items-center justify-center p-8 lg:p-12">
            <img
              src={imageSrc}
              alt="Van Cropsal"
              className="w-full max-w-[520px] h-auto rounded-2xl shadow-md"
            />
          </ScrollReveal>
        ) : (
          <ScrollReveal direction="left" className="h-[400px] lg:h-auto lg:min-h-[500px]">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${imageSrc})` }}
            />
          </ScrollReveal>
        )}

        {/* Right Content */}
        <ScrollReveal direction="right" className="flex items-center justify-center p-12 lg:p-20">
          <div className="max-w-md">
            <p className="text-teal font-sans text-xs tracking-[0.1em] uppercase mb-4">
              {overline}
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-navy mb-8">
              {finalHeadline}
            </h2>
            <Link
              to={buttonLink}
              className="inline-block px-8 py-4 bg-teal text-white rounded-full font-sans text-sm font-medium tracking-wider hover:bg-teal-dark hover:scale-[1.03] transition-all"
            >
              {finalButton}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
