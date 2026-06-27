import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { getPost, blogPosts } from '../data/blog'
import Seo from '../components/Seo'
import { SITE } from '../data/siteConfig'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  if (!post) {
    return (
      <section className="bg-navy min-h-[70vh] flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="font-display text-4xl text-white mb-4">Article introuvable</h1>
          <Link to="/blogue" className="text-teal font-sans hover:underline">← Retour au blogue</Link>
        </div>
      </section>
    )
  }

  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    image: `${SITE.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'fr-CA',
    articleSection: post.category,
    ...(post.keywords ? { keywords: post.keywords.join(', ') } : {}),
    author: { '@type': 'Person', '@id': `${SITE.url}/#person`, name: SITE.broker.name },
    publisher: { '@id': `${SITE.url}/#realestateagent` },
    mainEntityOfPage: `${SITE.url}/blogue/${post.slug}`,
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Blogue', item: `${SITE.url}/blogue` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE.url}/blogue/${post.slug}` },
    ],
  }

  return (
    <>
      <Seo
        title={post.metaTitle ?? post.title}
        description={post.metaDescription ?? post.excerpt}
        path={`/blogue/${post.slug}`}
        image={post.image}
        type="article"
        jsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end pt-24"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26,32,44,0.4), rgba(26,32,44,0.8)), url('${post.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 max-w-[820px] mx-auto px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-teal text-white font-sans text-xs px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-white/70 font-sans text-xs">{post.dateLabel} · {post.readTime} de lecture</span>
          </div>
          <h1 className="font-display text-3xl lg:text-5xl text-white mb-3">{post.title}</h1>
          <p className="text-white/80 font-sans text-sm">Par <span className="text-teal font-medium">Van Cropsal</span>, courtier immobilier RE/MAX</p>
        </div>
      </section>

      {/* Back */}
      <div className="bg-cream border-b border-border">
        <div className="max-w-[820px] mx-auto px-6 lg:px-8 py-4">
          <Link to="/blogue" className="inline-flex items-center gap-2 text-navy/70 font-sans text-sm hover:text-teal transition-colors">
            <ArrowLeft size={16} /> Retour au blogue
          </Link>
        </div>
      </div>

      {/* Article body */}
      <article className="bg-white py-12 lg:py-16">
        <div className="max-w-[820px] mx-auto px-6 lg:px-8">
          <p className="text-navy/70 font-sans text-lg leading-relaxed mb-10">{post.excerpt}</p>
          {post.content.map((section, i) => (
            <div key={i} className="mb-8">
              {section.heading && (
                <h2 className="font-display text-2xl lg:text-3xl text-navy mb-4">{section.heading}</h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-navy/70 font-sans leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          ))}

          {/* Sources */}
          {post.sources && post.sources.length > 0 && (
            <div className="mt-10 pt-6 border-t border-border">
              <h2 className="font-sans font-medium text-navy text-sm tracking-wider uppercase mb-3">Sources</h2>
              <ul className="space-y-2">
                {post.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-teal font-sans text-sm hover:underline break-words"
                    >
                      {s.label}
                      <ArrowRight size={13} className="shrink-0 -rotate-45" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="bg-cream rounded-xl p-8 mt-10 text-center">
            <h3 className="font-display text-2xl text-navy mb-3">Un projet immobilier ?</h3>
            <p className="text-navy/60 font-sans text-sm mb-6">
              Van Cropsal vous accompagne à chaque étape, de la première visite à la signature.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-teal text-white rounded-full font-sans text-sm font-medium tracking-wider hover:bg-teal-dark hover:scale-[1.03] transition-all"
            >
              Contacter Van Cropsal
            </Link>
          </div>
        </div>
      </article>

      {/* Other articles */}
      <section className="bg-cream py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl text-navy mb-8">À lire aussi</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {others.map((p) => (
              <Link key={p.slug} to={`/blogue/${p.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-navy/50 font-sans text-xs tracking-wider uppercase">{p.category}</span>
                  <h3 className="font-display text-xl text-navy group-hover:text-teal transition-colors mt-1 mb-2">{p.title}</h3>
                  <span className="inline-flex items-center gap-2 text-teal font-sans text-xs tracking-wider">
                    LIRE <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
