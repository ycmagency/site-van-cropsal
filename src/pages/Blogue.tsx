import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import Seo from '../components/Seo'
import { blogPosts } from '../data/blog'
import { useLang } from '../i18n/LanguageContext'

export default function Blogue() {
  const { t } = useLang()
  const [featured, ...rest] = blogPosts

  return (
    <>
      <Seo
        title="Blogue immobilier — Conseils de Van Cropsal | Montréal & Laval"
        description="Conseils, analyses de marché et guides immobiliers rédigés par Van Cropsal, courtier RE/MAX à Montréal, Laval et la Rive-Nord. Achat, vente, financement et plus."
        path="/blogue"
      />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 font-sans text-sm hover:text-white transition-colors mb-6">
            <ArrowLeft size={16} /> {t.blog.retourAccueil}
          </Link>
          <p className="text-teal font-sans text-xs tracking-[0.15em] uppercase mb-4">{t.blog.label}</p>
          <h1 className="font-display text-5xl lg:text-6xl text-white mb-4">
            {t.blog.title}
          </h1>
          <p className="text-white/70 font-sans text-lg max-w-[680px]">
            Conseils, analyses du marché et guides pratiques rédigés par Van Cropsal, courtier immobilier RE/MAX à Montréal, Laval et la Rive-Nord.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <Link
              to={`/blogue/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16"
            >
              <div className="rounded-xl overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-cream text-teal font-sans text-xs px-3 py-1 rounded-full">{featured.category}</span>
                  <span className="text-navy/40 font-sans text-xs">{featured.dateLabel} · {featured.readTime}</span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl text-navy mb-3 group-hover:text-teal transition-colors">
                  {featured.title}
                </h2>
                <p className="text-teal font-sans text-xs tracking-wider uppercase mb-4">Par Van Cropsal</p>
                <p className="text-navy/70 font-sans leading-relaxed mb-6">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-teal font-sans text-sm font-medium tracking-wider">
                  {t.blog.lire} <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((article, i) => (
                <ScrollReveal key={article.slug} delay={(i % 3) * 0.1}>
                  <Link
                    to={`/blogue/${article.slug}`}
                    className="group flex flex-col h-full"
                  >
                    <div className="rounded-xl overflow-hidden mb-4">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-navy/50 font-sans text-xs tracking-wider uppercase">{article.category}</span>
                      <span className="text-navy/30 font-sans text-xs">· {article.dateLabel}</span>
                    </div>
                    <h3 className="font-display text-xl text-navy group-hover:text-teal transition-colors mb-1">
                      {article.title}
                    </h3>
                    <p className="text-teal font-sans text-[11px] tracking-wider uppercase mb-2">Par Van Cropsal</p>
                    <p className="text-navy/60 font-sans text-sm leading-relaxed mb-4 flex-1">{article.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-teal font-sans text-xs tracking-wider">
                      {t.blog.lire} <ArrowRight size={13} />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
