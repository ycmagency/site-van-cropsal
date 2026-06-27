import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLang } from '../../i18n/LanguageContext'

export default function VendreHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useLang()

  useGSAP(() => {
    if (!containerRef.current) return
    
    gsap.from('.vendre-hero-overline', { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out', delay: 0.2 })
    gsap.from('.vendre-hero-headline', { opacity: 0, y: 40, duration: 1, ease: 'power2.out', delay: 0.4 })
    gsap.from('.vendre-hero-subtitle', { opacity: 0, y: 30, duration: 0.8, ease: 'power2.out', delay: 0.6 })
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-end"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(26, 32, 44, 0.3), rgba(26, 32, 44, 0.6)), url('/images/hero-vendre.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 px-8 pb-20 lg:px-16 lg:pb-24 max-w-[1200px]">
        <p className="vendre-hero-overline text-white/70 font-sans text-sm tracking-wider mb-4">
          {t.vendre.overline}
        </p>
        <h1 className="vendre-hero-headline font-display text-5xl lg:text-7xl text-white mb-6">
          {t.vendre.headline}
        </h1>
        <p className="vendre-hero-subtitle text-white/80 font-sans text-lg leading-relaxed max-w-[600px]">
          {t.vendre.subtitle}
        </p>
      </div>
    </section>
  )
}
