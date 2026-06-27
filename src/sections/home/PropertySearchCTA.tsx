import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScrollReveal from '../../components/ScrollReveal'
import { ChevronDown } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'

const typeValues = ['maison', 'condo', 'plex', 'terrain']
const locations = ['Montréal', 'Laval', 'Repentigny', 'Beaconsfield', 'Saint-Rémi', 'Mandeville']

export default function PropertySearchCTA() {
  const navigate = useNavigate()
  const { t } = useLang()
  const [typeIndex, setTypeIndex] = useState(0)
  const [location, setLocation] = useState(locations[0])
  const [showTypeDropdown, setShowTypeDropdown] = useState(false)
  const [showLocDropdown, setShowLocDropdown] = useState(false)

  const handleSearch = () => {
    const params = new URLSearchParams()
    params.set('type', typeValues[typeIndex])
    if (location) params.set('region', location.toLowerCase())
    navigate(`/proprietes?${params.toString()}`)
  }

  return (
    <section className="bg-cream py-24 lg:py-32">
      <ScrollReveal className="max-w-[900px] mx-auto px-8 text-center">
        <p className="text-navy/50 font-sans text-xs tracking-[0.15em] uppercase mb-8">
          {t.search.overline}
        </p>

        <h2 className="font-display text-3xl lg:text-5xl text-navy mb-10">
          {t.search.jeRecherche}{' '}
          <span className="relative inline-block">
            <button
              onClick={() => { setShowTypeDropdown(!showTypeDropdown); setShowLocDropdown(false) }}
              className="text-teal border-b-2 border-teal pb-1 hover:text-teal-dark transition-colors inline-flex items-center gap-2"
            >
              {t.search.types[typeIndex]}
              <ChevronDown size={18} />
            </button>
            {showTypeDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg border border-border py-2 z-20 min-w-[280px] text-left">
                {t.search.types.map((type, i) => (
                  <button
                    key={type}
                    onClick={() => { setTypeIndex(i); setShowTypeDropdown(false) }}
                    className={`block w-full px-4 py-2.5 text-left font-sans text-sm hover:bg-cream transition-colors ${i === typeIndex ? 'text-teal font-medium' : 'text-navy/70'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </span>
          {' '}{t.search.a}{' '}
          <span className="relative inline-block">
            <button
              onClick={() => { setShowLocDropdown(!showLocDropdown); setShowTypeDropdown(false) }}
              className="text-teal border-b-2 border-teal pb-1 hover:text-teal-dark transition-colors inline-flex items-center gap-2"
            >
              {location}
              <ChevronDown size={18} />
            </button>
            {showLocDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg border border-border py-2 z-20 min-w-[180px] text-left">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => { setLocation(loc); setShowLocDropdown(false) }}
                    className={`block w-full px-4 py-2.5 text-left font-sans text-sm hover:bg-cream transition-colors ${loc === location ? 'text-teal font-medium' : 'text-navy/70'}`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </span>
        </h2>

        <button
          onClick={handleSearch}
          className="px-10 py-4 bg-teal text-white rounded-full font-sans text-sm font-medium tracking-wider hover:bg-teal-dark hover:scale-[1.03] transition-all"
        >
          {t.search.rechercher}
        </button>
      </ScrollReveal>
    </section>
  )
}
