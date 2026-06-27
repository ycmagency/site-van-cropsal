import type { Property } from '../../data/properties'

export interface Filters {
  q: string
  type: string
  region: string
  priceMax: string
  beds: string
  baths: string
  status: 'tous' | 'vente' | 'location'
}

export const defaultFilters: Filters = {
  q: '',
  type: '',
  region: '',
  priceMax: '',
  beds: '',
  baths: '',
  status: 'tous',
}

export const typeOptions = [
  { value: '', label: 'Tous les types' },
  { value: 'maison', label: 'Maison' },
  { value: 'condo', label: 'Condo / Appartement' },
  { value: 'plex', label: 'Duplex / Plex' },
  { value: 'terrain', label: 'Terrain' },
]

export const regionOptions = [
  { value: '', label: 'Tous les secteurs' },
  { value: 'montréal', label: 'Montréal' },
  { value: 'laval', label: 'Laval' },
  { value: 'repentigny', label: 'Repentigny' },
  { value: 'beaconsfield', label: 'Beaconsfield' },
  { value: 'saint-rémi', label: 'Saint-Rémi' },
  { value: 'mandeville', label: 'Mandeville' },
]

export const priceOptions = [
  { value: '', label: 'Aucun maximum' },
  { value: '500000', label: '500 000 $' },
  { value: '600000', label: '600 000 $' },
  { value: '700000', label: '700 000 $' },
  { value: '800000', label: '800 000 $' },
  { value: '1000000', label: '1 000 000 $' },
  { value: '1500000', label: '1 500 000 $' },
]

export const bedOptions = [
  { value: '', label: 'Indifférent' },
  { value: '1', label: '1+' },
  { value: '2', label: '2+' },
  { value: '3', label: '3+' },
  { value: '4', label: '4+' },
  { value: '5', label: '5+' },
]

export const bathOptions = [
  { value: '', label: 'Indifférent' },
  { value: '1', label: '1+' },
  { value: '2', label: '2+' },
  { value: '3', label: '3+' },
]

// "1 500 000 $" -> 1500000 ; "3 000 $ / mois" -> 3000
export function parsePrice(price: string): number {
  const digits = price.replace(/[^\d]/g, '')
  return digits ? parseInt(digits, 10) : 0
}

function matchType(property: Property, type: string): boolean {
  const t = property.type.toLowerCase()
  switch (type) {
    case 'maison':
      return /maison|plain-pied|étage|palier/.test(t)
    case 'condo':
      return /appartement|condo/.test(t)
    case 'plex':
      return /duplex|plex/.test(t)
    case 'terrain':
      return /terrain/.test(t)
    default:
      return true
  }
}

export function applyFilters(properties: Property[], f: Filters): Property[] {
  return properties.filter((p) => {
    if (f.q) {
      const hay = `${p.address} ${p.city}`.toLowerCase()
      if (!hay.includes(f.q.toLowerCase())) return false
    }
    if (f.type && !matchType(p, f.type)) return false
    if (f.region && !p.city.toLowerCase().includes(f.region)) return false
    if (f.priceMax && parsePrice(p.price) > parseInt(f.priceMax, 10)) return false
    if (f.beds && (p.beds ?? 0) < parseInt(f.beds, 10)) return false
    if (f.baths && (p.baths ?? 0) < parseInt(f.baths, 10)) return false
    if (f.status !== 'tous' && p.status !== f.status) return false
    return true
  })
}
