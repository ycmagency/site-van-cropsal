import { useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from '../../components/ScrollReveal'
import PropertyCard from '../../components/PropertyCard'
import { properties as allProperties, localizeProperty } from '../../data/properties'
import { useLang } from '../../i18n/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

const properties = allProperties.filter((p) => p.featured)

export default function FeaturedProperties() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const { t, lang } = useLang()

  useGSAP(() => {
    if (!containerRef.current) return
    const cards = containerRef.current.querySelectorAll('.property-card')

    gsap.from(cards, {
      x: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      clearProps: 'opacity,transform',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true,
      },
    })
  }, { scope: containerRef })

  const handleScroll = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setProgress(max > 0 ? el.scrollLeft / max : 0)
  }, [])

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value)
    setProgress(val)
    const el = containerRef.current
    if (!el) return
    el.scrollLeft = val * (el.scrollWidth - el.clientWidth)
  }

  return (
    <section className="bg-navy py-24">
      <ScrollReveal>
        <div className="px-8 mb-10">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <h2 className="font-display text-4xl lg:text-5xl text-white">
              {t.featured.title}
            </h2>
            <Link
              to="/proprietes"
              aria-label="Voir toutes les propriétés"
              className="text-white/40 hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      <div ref={containerRef} onScroll={handleScroll} className="horizontal-scroll pb-4" style={{ scrollSnapType: 'none' }}>
        {properties.map((raw) => {
          const property = localizeProperty(raw, lang)
          return (
            <div key={property.id} className="property-card w-[380px] lg:w-[420px]">
              <PropertyCard
                id={property.id}
                image={property.image}
                badge={property.badge}
                status={property.status}
                address={property.address}
                location={`${property.city} – ${property.features.slice(0, 2).join(' · ')}`}
                price={property.price}
              />
            </div>
          )
        })}
      </div>

      {/* Slider bar — mobile uniquement */}
      <div className="px-8 mt-6 lg:hidden">
        <div className="max-w-[1200px] mx-auto">
          <input
            type="range"
            min={0}
            max={1}
            step={0.001}
            value={progress}
            onChange={handleSlider}
            className="w-full appearance-none outline-none cursor-pointer"
            style={{
              height: '3px',
              background: `linear-gradient(to right, #319795 ${progress * 100}%, rgba(255,255,255,0.15) ${progress * 100}%)`,
              borderRadius: '9999px',
            }}
          />
        </div>
      </div>
    </section>
  )
}
