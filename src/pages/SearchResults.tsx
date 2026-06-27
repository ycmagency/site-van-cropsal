import { useSearchParams, Link } from 'react-router-dom'
import { searchSite } from '../data/searchIndex'
import { ArrowLeft, FileSearch } from 'lucide-react'
import Seo from '../components/Seo'

const typeLabel: Record<string, string> = {
  page: 'Page',
  faq: 'FAQ',
  article: 'Article',
}

export default function SearchResults() {
  const [params] = useSearchParams()
  const query = params.get('q') || ''
  const results = searchSite(query)

  return (
    <>
      <Seo title={`Recherche : ${query} | Van Cropsal`} description="" path="/recherche" />
      <section className="bg-navy min-h-screen pt-32 pb-20">
        <div className="max-w-[800px] mx-auto px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 font-sans text-sm hover:text-white transition-colors mb-10">
            <ArrowLeft size={16} /> Retour à l'accueil
          </Link>

          <p className="text-white/50 font-sans text-sm tracking-wider mb-2">
            Résultats pour
          </p>
          <h1 className="font-display text-4xl lg:text-5xl text-white mb-12">
            "{query}"
          </h1>

          {results.length === 0 ? (
            <div className="flex flex-col items-center text-center py-20">
              <FileSearch size={56} className="text-white/20 mb-6" />
              <h2 className="font-display text-3xl text-white mb-4">
                On n'a pas trouvé ce que vous cherchez
              </h2>
              <p className="text-white/50 font-sans leading-relaxed mb-10 max-w-[480px]">
                Aucun résultat pour « {query} ». Essayez un autre mot-clé ou explorez les pages ci-dessous.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { label: 'Propriétés', to: '/proprietes' },
                  { label: 'Vendre', to: '/vendre' },
                  { label: 'Acheter', to: '/acheter' },
                  { label: 'FAQ', to: '/faq' },
                  { label: 'Blogue', to: '/blogue' },
                  { label: 'Nous joindre', to: '/contact' },
                ].map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="px-5 py-2.5 rounded-full border border-white/20 text-white/70 font-sans text-sm hover:bg-white/10 hover:text-white transition-all"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {results.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="group flex items-start gap-4 p-5 rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all"
                  >
                    <span className="mt-0.5 px-2.5 py-1 rounded-full bg-white/10 text-white/50 font-sans text-xs shrink-0">
                      {typeLabel[item.type]}
                    </span>
                    <div>
                      <p className="text-white font-display text-xl group-hover:text-red-300 transition-colors mb-1">
                        {item.title}
                      </p>
                      <p className="text-white/50 font-sans text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
