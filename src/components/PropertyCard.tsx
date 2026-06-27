import { Link } from 'react-router-dom'

interface PropertyCardProps {
  id?: string
  image: string
  badge?: string
  status?: 'vente' | 'location'
  address: string
  location: string
  price: string
  details?: string
  size?: string
}

export default function PropertyCard({
  id,
  image,
  badge,
  status,
  address,
  location,
  price,
  details = 'DÉTAILS',
  size,
}: PropertyCardProps) {
  return (
    <Link to={id ? `/proprietes/${id}` : '/proprietes'} className="group flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
        <img
          src={image}
          alt={address}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {badge && (
          <span className={`absolute top-4 left-4 text-white text-xs font-sans px-3 py-1 rounded-sm ${status === 'location' ? 'bg-red-600' : badge === 'Terrain' || badge === 'Lot' ? 'bg-amber-500' : 'bg-teal'}`}>
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg text-navy mb-1">{address}</h3>
        <p className="text-navy/50 font-sans text-xs mb-3">{location}</p>
        {size && <p className="text-navy/60 font-sans text-xs mb-3">{size}</p>}
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-teal font-sans text-xs font-medium tracking-wider group-hover:underline">
            {details} →
          </span>
          <span className="text-navy/70 font-sans text-sm">{price}</span>
        </div>
      </div>
    </Link>
  )
}
