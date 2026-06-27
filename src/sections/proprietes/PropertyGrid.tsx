import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PropertyCard from '../../components/PropertyCard'
import { properties as allProperties, type Property, localizeProperty } from '../../data/properties'
import { useLang } from '../../i18n/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

interface PropertyGridProps {
  items?: Property[]
}

export default function PropertyGrid({ items = allProperties }: PropertyGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const { t, lang } = useLang()

  useGSAP(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.prop-card')

    gsap.from(cards, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      clearProps: 'opacity,transform',
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 80%',
        once: true,
      },
    })
  }, { scope: gridRef })

  if (items.length === 0) {
    return (
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <p className="font-display text-2xl text-navy mb-2">{t.properties.noResultsTitle}</p>
          <p className="text-navy/60 font-sans text-sm">{t.properties.noResultsBody}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((raw) => {
            const property = localizeProperty(raw, lang)
            return (
              <div key={property.id} className="prop-card">
                <PropertyCard
                  id={property.id}
                  image={property.image}
                  badge={property.badge}
                  status={property.status}
                  address={property.address}
                  location={property.city}
                  price={property.price}
                  size={property.features.slice(0, 2).join(' · ')}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
