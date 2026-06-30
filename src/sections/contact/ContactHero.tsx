import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLang } from '../../i18n/LanguageContext'

export default function ContactHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { t } = useLang()

  useGSAP(() => {
    if (!containerRef.current) return
    
    gsap.from('.contact-hero-title', { opacity: 0, y: 40, duration: 1, ease: 'power2.out', delay: 0.3 })
    gsap.from('.contact-hero-info', { opacity: 0, y: 30, duration: 0.8, ease: 'power2.out', delay: 0.5 })
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative min-h-[60vh] flex items-start pt-28 pb-8 lg:items-end lg:pt-0 lg:pb-0"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(26, 32, 44, 0.3), rgba(26, 32, 44, 0.7)), url('/images/hero-contact.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 px-8 pb-16 lg:px-16 lg:pb-20 max-w-[1200px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="contact-hero-title hidden lg:block font-display text-5xl lg:text-6xl text-white mb-6">
              Van Cropsal
            </h1>
            <p className="text-white/70 font-sans text-lg">{t.contact.brokerTitle}</p>
          </div>
          <div className="contact-hero-info">
            <p className="text-white/80 font-sans leading-relaxed mb-2">
              {t.contact.office}<br />
              4865, rue Jarry Est, Saint-Léonard<br />
              Québec, H1R 1Y1
            </p>
            <p className="text-white font-sans text-lg mb-1">438 402-9471 <span className="text-white/50 text-sm">{t.contact.cell}</span></p>
            <p className="text-white font-sans text-lg mb-1">514 329-0000 <span className="text-white/50 text-sm">{t.contact.bureau}</span></p>
            <p className="text-teal font-sans">vanc@remax-quebec.com</p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.facebook.com/Van-Cropsal-Courtier-Immobilier-103742778702855" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/vancropsal/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
