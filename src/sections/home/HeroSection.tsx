import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLang } from '../../i18n/LanguageContext'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useLang()

  // Vidéo différente selon l'écran : verticale sur mobile, horizontale sur desktop (breakpoint lg = 1024px)
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

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
      {/* Vidéo de fond — verticale sur mobile, horizontale sur desktop */}
      <video
        key={isMobile ? 'mobile' : 'desktop'}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={isMobile ? '/videos/hero-mobile-poster.jpg' : '/videos/hero-poster.jpg'}
      >
        <source src={isMobile ? '/videos/hero-mobile.mp4' : '/videos/hero.mp4'} type="video/mp4" />
      </video>
      {/* Voile pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 to-navy/65" />

      <div className="relative z-10 px-8 pb-52 lg:px-16 lg:pb-64 max-w-[1200px]">
        <p className="hero-overline text-white/70 font-sans text-xs lg:text-sm tracking-wider mb-3 lg:mb-4">
          {t.hero.overline}
          <span className="hidden sm:inline mx-2 text-white/30">·</span>
          <a href="tel:+14384029471" className="block sm:inline mt-1 sm:mt-0 text-white hover:text-teal transition-colors">
            438 402-9471
          </a>
        </p>
        <h1 className="hero-headline font-display text-4xl lg:text-7xl text-white mb-6 lg:mb-8">
          {t.hero.headline}
        </h1>
        <Link
          to="/contact"
          className="hero-cta group inline-flex items-center gap-2.5 font-sans tracking-wider transition-all duration-300 text-teal text-sm font-medium underline underline-offset-8 decoration-2 hover:text-teal-dark lg:no-underline lg:rounded-full lg:bg-teal lg:px-8 lg:py-4 lg:text-white lg:text-sm lg:shadow-lg lg:shadow-navy/40 lg:hover:bg-teal-dark lg:hover:text-white lg:hover:-translate-y-0.5 lg:hover:shadow-xl"
        >
          {t.hero.cta}
          <ArrowRight size={15} className="lg:w-[17px] lg:h-[17px] transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Indicateur "glisser vers le bas" — mobile uniquement */}
      <div className="lg:hidden absolute bottom-6 inset-x-0 z-10 flex flex-col items-center gap-1">
        <span className="text-white/70 font-sans text-[11px] tracking-wider uppercase">Glisser vers le bas</span>
        <ChevronDown size={18} className="text-white/70 animate-bounce-slow" />
      </div>
    </section>
  )
}
