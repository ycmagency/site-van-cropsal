import { Search } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'
import { useLang } from '../../i18n/LanguageContext'
import {
  type Filters,
  typeOptions,
  regionOptions,
  priceOptions,
  bedOptions,
  bathOptions,
} from './filters'

interface PropertiesHeroProps {
  filters: Filters
  onChange: (patch: Partial<Filters>) => void
  onReset: () => void
  resultCount: number
}

export default function PropertiesHero({ filters, onChange, onReset, resultCount }: PropertiesHeroProps) {
  const { t } = useLang()

  const typeLabel = (value: string, fallback: string) => {
    const map: Record<string, string> = {
      '': t.properties.typeOptions.all,
      maison: t.properties.typeOptions.maison,
      condo: t.properties.typeOptions.condo,
      plex: t.properties.typeOptions.plex,
      terrain: t.properties.typeOptions.terrain,
    }
    return map[value] ?? fallback
  }
  const regionLabel = (value: string, fallback: string) => (value === '' ? t.properties.regionAll : fallback)
  const priceLabel = (value: string, fallback: string) => (value === '' ? t.properties.priceAll : fallback)
  const anyLabel = (value: string, fallback: string) => (value === '' ? t.properties.any : fallback)

  return (
    <section className="bg-navy pt-32 pb-12">
      <div className="max-w-[1200px] mx-auto px-8">
        <ScrollReveal>
          <h1 className="font-display text-5xl lg:text-6xl text-white mb-10">
            {t.properties.title}
          </h1>

          {/* Search input */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/50" size={20} />
            <input
              type="text"
              value={filters.q}
              onChange={(e) => onChange({ q: e.target.value })}
              placeholder={t.properties.searchPlaceholder}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-lg text-navy font-sans text-base placeholder-navy/40 focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          {/* Filter row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <div>
              <label className="block text-white/60 font-sans text-xs uppercase tracking-wider mb-2">{t.properties.type}</label>
              <select
                value={filters.type}
                onChange={(e) => onChange({ type: e.target.value })}
                className="w-full px-3 py-3 bg-transparent border-b border-white/30 text-white font-sans text-sm focus:outline-none focus:border-teal appearance-none cursor-pointer"
              >
                {typeOptions.map((o) => (
                  <option key={o.value} value={o.value} className="bg-navy text-white">{typeLabel(o.value, o.label)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-white/60 font-sans text-xs uppercase tracking-wider mb-2">{t.properties.secteur}</label>
              <select
                value={filters.region}
                onChange={(e) => onChange({ region: e.target.value })}
                className="w-full px-3 py-3 bg-transparent border-b border-white/30 text-white font-sans text-sm focus:outline-none focus:border-teal appearance-none cursor-pointer"
              >
                {regionOptions.map((o) => (
                  <option key={o.value} value={o.value} className="bg-navy text-white">{regionLabel(o.value, o.label)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-white/60 font-sans text-xs uppercase tracking-wider mb-2">{t.properties.prixMax}</label>
              <select
                value={filters.priceMax}
                onChange={(e) => onChange({ priceMax: e.target.value })}
                className="w-full px-3 py-3 bg-transparent border-b border-white/30 text-white font-sans text-sm focus:outline-none focus:border-teal appearance-none cursor-pointer"
              >
                {priceOptions.map((o) => (
                  <option key={o.value} value={o.value} className="bg-navy text-white">{priceLabel(o.value, o.label)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-white/60 font-sans text-xs uppercase tracking-wider mb-2">{t.properties.chambres}</label>
              <select
                value={filters.beds}
                onChange={(e) => onChange({ beds: e.target.value })}
                className="w-full px-3 py-3 bg-transparent border-b border-white/30 text-white font-sans text-sm focus:outline-none focus:border-teal appearance-none cursor-pointer"
              >
                {bedOptions.map((o) => (
                  <option key={o.value} value={o.value} className="bg-navy text-white">{anyLabel(o.value, o.label)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-white/60 font-sans text-xs uppercase tracking-wider mb-2">{t.properties.sdb}</label>
              <select
                value={filters.baths}
                onChange={(e) => onChange({ baths: e.target.value })}
                className="w-full px-3 py-3 bg-transparent border-b border-white/30 text-white font-sans text-sm focus:outline-none focus:border-teal appearance-none cursor-pointer"
              >
                {bathOptions.map((o) => (
                  <option key={o.value} value={o.value} className="bg-navy text-white">{anyLabel(o.value, o.label)}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Status segmented control */}
          <div className="flex flex-wrap gap-2 mb-8">
            {([
              { value: 'tous', label: t.properties.toutes },
              { value: 'vente', label: t.properties.aVendre },
              { value: 'location', label: t.properties.aLouer },
            ] as const).map((s) => (
              <button
                key={s.value}
                onClick={() => onChange({ status: s.value })}
                className={`px-5 py-2 rounded-full font-sans text-sm transition-all ${
                  filters.status === s.value
                    ? 'bg-teal text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Result count + reset */}
          <div className="flex items-center gap-4">
            <span className="text-white font-sans text-sm">
              {t.properties.found(resultCount)}
            </span>
            <button onClick={onReset} className="text-white/60 font-sans text-sm hover:text-white transition-colors underline underline-offset-4">
              {t.properties.reset}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
