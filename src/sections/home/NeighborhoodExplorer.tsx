import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'
import { neighborhoods } from '../../data/neighborhoods'
import { useLang } from '../../i18n/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

export default function NeighborhoodExplorer() {
  const gridRef = useRef<HTMLDivElement>(null)
  const { t } = useLang()

  useGSAP(() => {
    if (!gridRef.current) return
    const cells = gridRef.current.querySelectorAll('.neighborhood-cell')

    gsap.from(cells, {
      scale: 0.95,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 80%',
        once: true,
      },
    })
  }, { scope: gridRef })

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-4xl lg:text-5xl text-navy">
              {t.neighborhoods.title}
            </h2>
            <Link to="/quartiers" className="hidden lg:inline-flex items-center gap-2 text-teal font-sans text-xs tracking-wider hover:underline">
              {t.neighborhoods.voirTous}
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {neighborhoods.map((neighborhood, index) => (
            <Link
              to={`/quartiers/${neighborhood.slug}`}
              key={index}
              className="neighborhood-cell group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-105"
                />
              </div>
              <p className="font-sans text-sm text-navy mt-3 group-hover:text-teal transition-colors">
                {neighborhood.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
