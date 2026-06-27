import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLang } from '../i18n/LanguageContext'
import { Phone, Mail, Facebook, Instagram } from 'lucide-react'

interface HamburgerOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function HamburgerOverlay({ isOpen, onClose }: HamburgerOverlayProps) {
  const { t, lang, toggle } = useLang()

  const leftNavItems = [
    { label: t.menu.trouver, to: '/proprietes', subItems: [t.menu.visiteLibre, t.menu.collection, t.menu.commercial] },
    { label: t.menu.vendre, to: '/vendre' },
    { label: t.menu.acheter, to: '/acheter' },
  ]

  const rightNavItems = [
    { label: t.menu.blogue, to: '/blogue' },
    { label: t.menu.faq, to: '/faq' },
    { label: t.menu.quartiers, to: '/quartiers' },
    { label: t.menu.apropos, to: '/' },
    { label: t.menu.nousJoindre, to: '/contact' },
  ]

  const overlayRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!overlayRef.current || !panelRef.current || !backdropRef.current) return

    const navItems = panelRef.current.querySelectorAll('.nav-item')

    if (isOpen) {
      gsap.set(overlayRef.current, { display: 'flex' })
      const tl = gsap.timeline()
      tl.set(navItems, { y: 40, opacity: 0 })
        .to(backdropRef.current, { opacity: 1, duration: 0.5, ease: 'power2.out' })
        .to(panelRef.current, { x: 0, duration: 0.5, ease: 'power3.inOut' }, 0)
        .to(navItems, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'power2.out' }, 0.2)
    } else {
      const tl = gsap.timeline({
        onComplete: () => gsap.set(overlayRef.current, { display: 'none' })
      })
      tl.to(navItems, { y: 20, opacity: 0, duration: 0.3, stagger: 0.03, ease: 'power2.in' })
        .to(panelRef.current, { x: '100%', duration: 0.5, ease: 'power3.inOut' }, 0.1)
        .to(backdropRef.current, { opacity: 0, duration: 0.5, ease: 'power2.out' }, 0.2)
    }
  }, { dependencies: [isOpen] })

  useEffect(() => {
    if (overlayRef.current && panelRef.current && backdropRef.current) {
      gsap.set(overlayRef.current, { display: 'none' })
      gsap.set(panelRef.current, { x: '100%' })
      gsap.set(backdropRef.current, { opacity: 0 })
    }
  }, [])

  return (
    <div ref={overlayRef} className="fixed inset-0 z-40 flex justify-end" style={{ display: 'none' }}>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-navy/70 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="relative w-full lg:w-[55%] h-full bg-blue-950 overflow-y-auto flex flex-col"
        style={{ transform: 'translateX(100%)' }}
      >
        {/* Ligne décorative top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal to-transparent opacity-60" />

        <div className="flex-1 px-10 pt-24 pb-10 lg:px-14 lg:pt-28 lg:pb-12">
          {/* Nav Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-14">
            {/* Left Column */}
            <div className="flex flex-col gap-2">
              {leftNavItems.map((item) => (
                <div key={item.label} className="nav-item group">
                  <Link
                    to={item.to}
                    onClick={onClose}
                    className="font-display text-3xl lg:text-4xl text-white hover:text-teal transition-colors duration-300 leading-tight"
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className="mt-2 mb-4 flex flex-col gap-1.5 ml-1">
                      {item.subItems.map((sub) => (
                        <span key={sub} className="text-white/40 font-sans text-xs flex items-center gap-2 hover:text-white/70 transition-colors cursor-pointer">
                          <span className="w-3 h-px bg-teal/50" />
                          {sub}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-2 pt-1">
              {rightNavItems.map((item) => (
                <div key={item.label} className="nav-item">
                  <Link
                    to={item.to}
                    onClick={onClose}
                    className="font-display text-3xl lg:text-4xl text-white/70 hover:text-white transition-colors duration-300 leading-tight"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Séparateur décoratif */}
          <div className="nav-item flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-white/10" />
            <span className="w-1.5 h-1.5 rounded-full bg-teal/60" />
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Footer infos */}
          <div className="nav-item grid grid-cols-2 gap-8">
            {/* Contact */}
            <div className="flex flex-col gap-4">
              <p className="text-white/30 font-sans text-[10px] tracking-[0.2em] uppercase mb-1">Contact</p>
              <a href="tel:+14384029471" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Phone size={14} />
                <span className="font-sans text-sm">438 402-9471 <span className="text-white/30 text-xs">{t.menu.cell}</span></span>
              </a>
              <a href="tel:+15143290000" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Phone size={14} />
                <span className="font-sans text-sm">514 329-0000 <span className="text-white/30 text-xs">{t.menu.bureau}</span></span>
              </a>
              <a href="mailto:vanc@remax-quebec.com" className="flex items-center gap-3 text-teal hover:text-white transition-colors">
                <Mail size={14} />
                <span className="font-sans text-sm">vanc@remax-quebec.com</span>
              </a>
            </div>

            {/* Langue + Social */}
            <div className="flex flex-col gap-4">
              <p className="text-white/30 font-sans text-[10px] tracking-[0.2em] uppercase mb-1">Autres</p>
              <button
                onClick={() => { toggle(); onClose() }}
                className="self-start text-white/60 font-sans text-sm hover:text-white transition-all"
              >
                {lang === 'fr' ? 'English' : 'Français'}
              </button>
              <a
                href="https://www.facebook.com/Van-Cropsal-Courtier-Immobilier-103742778702855"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <Facebook size={14} />
                <span className="font-sans text-sm">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/vancropsal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Instagram size={14} />
                <span className="font-sans text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="px-10 lg:px-14 py-5 border-t border-white/10 flex items-center justify-between gap-4">
          <p className="text-white/20 font-sans text-xs">RE/MAX Alliance &amp; Pro-Commercial</p>
          <a
            href="https://www.ycmagency.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 shrink-0"
          >
            <span className="text-white/30 group-hover:text-white/60 font-sans text-[11px] tracking-wider transition-colors">
              Site propulsé par
            </span>
            <img
              src="/images/ycm-logo.png"
              alt="YCM Agency"
              className="h-5 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
