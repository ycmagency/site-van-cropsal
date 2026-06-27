import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Play, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang } from '../../i18n/LanguageContext'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useLang()

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.from(['.hero-overline', '.hero-headline', '.hero-cta'], {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power2.out',
      stagger: 0.2,
      delay: 0.3,
      clearProps: 'opacity,transform',
    })
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100lvh] flex items-end overflow-hidden bg-navy"
    >
      {/* Vidéo de fond */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      {/* Voile pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 to-navy/65" />

      <div className="relative z-10 px-8 pb-56 lg:px-16 lg:pb-64 max-w-[1200px]">
        <p className="hero-overline text-white/70 font-sans text-sm tracking-wider mb-4">
          {t.hero.overline}
          <span className="hidden sm:inline mx-2 text-white/30">·</span>
          <a href="tel:+14384029471" className="block sm:inline mt-1 sm:mt-0 text-white hover:text-teal transition-colors">
            438 402-9471
          </a>
        </p>
        <h1 className="hero-headline font-display text-5xl lg:text-7xl text-white mb-8">
          {t.hero.headline}
        </h1>
        <Link
          to="/contact"
          className="hero-cta nav-link-underline inline-flex items-center gap-2 text-teal font-sans text-base font-light tracking-wider hover:text-teal-dark transition-colors"
        >
          <Play size={15} fill="currentColor" />
          {t.hero.cta}
        </Link>
      </div>

      {/* Indicateur "glisser vers le bas" — mobile uniquement */}
      <div className="lg:hidden absolute bottom-6 inset-x-0 z-10 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/70 font-sans text-[11px] tracking-wider uppercase">Glisser vers le bas</span>
        <ChevronDown size={18} className="text-white/70" />
      </div>
    </section>
  )
}
