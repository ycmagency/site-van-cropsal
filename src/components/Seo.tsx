import { useEffect } from 'react'
import { SITE, realEstateAgentJsonLd, personJsonLd, websiteJsonLd } from '../data/siteConfig'

interface SeoProps {
  title: string
  description: string
  /** Chemin relatif, ex. "/blogue" */
  path?: string
  image?: string
  type?: 'website' | 'article'
  /** Données structurées additionnelles (objet ou tableau d'objets JSON-LD) */
  jsonLd?: object | object[]
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({ title, description, path = '/', image, type = 'website', jsonLd }: SeoProps) {
  useEffect(() => {
    const url = `${SITE.url}${path}`
    const img = `${SITE.url}${image ?? SITE.defaultImage}`
    const fullTitle = title.includes(SITE.shortName) ? title : `${title} | ${SITE.shortName}`

    document.title = fullTitle
    setMeta('name', 'description', description)
    setLink('canonical', url)

    // Open Graph
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', img)
    setMeta('property', 'og:locale', SITE.locale)
    setMeta('property', 'og:site_name', SITE.shortName)

    // Twitter
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', img)

    // JSON-LD : schémas globaux (agent, personne, site) + données spécifiques à la page
    const blocks: object[] = [realEstateAgentJsonLd, personJsonLd, websiteJsonLd]
    if (Array.isArray(jsonLd)) blocks.push(...jsonLd)
    else if (jsonLd) blocks.push(jsonLd)

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo', 'true')
    script.textContent = JSON.stringify(blocks)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [title, description, path, image, type, jsonLd])

  return null
}
