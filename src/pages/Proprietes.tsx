import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PropertiesHero from '../sections/proprietes/PropertiesHero'
import PropertyGrid from '../sections/proprietes/PropertyGrid'
import { properties } from '../data/properties'
import { type Filters, defaultFilters, applyFilters } from '../sections/proprietes/filters'
import Seo from '../components/Seo'

export default function Proprietes() {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState<Filters>(() => ({
    ...defaultFilters,
    type: searchParams.get('type') ?? '',
    region: searchParams.get('region') ?? '',
  }))

  const filtered = useMemo(() => applyFilters(properties, filters), [filters])

  const handleChange = (patch: Partial<Filters>) =>
    setFilters((prev) => ({ ...prev, ...patch }))

  return (
    <>
      <Seo
        title="Propriétés à vendre et à louer — Van Cropsal"
        description="Découvrez les propriétés à vendre et à louer de Van Cropsal, courtier immobilier RE/MAX, à Montréal, Laval, Repentigny et environs. Maisons, condos, plex et terrains."
        path="/proprietes"
      />
      <PropertiesHero
        filters={filters}
        onChange={handleChange}
        onReset={() => setFilters(defaultFilters)}
        resultCount={filtered.length}
      />
      <PropertyGrid items={filtered} />
    </>
  )
}
