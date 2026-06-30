import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { useLang } from '../i18n/LanguageContext'

type Choice = 'accepted' | 'refused'
const STORAGE_KEY = 'cookie-consent'

const copy = {
  fr: {
    title: 'Témoins de navigation',
    text: "Nous utilisons des témoins (cookies) pour mesurer l'achalandage du site et améliorer votre expérience. Vous pouvez accepter ou refuser à tout moment.",
    accept: 'Accepter',
    refuse: 'Refuser',
  },
  en: {
    title: 'Cookie preferences',
    text: 'We use cookies to measure site traffic and improve your experience. You can accept or decline at any time.',
    accept: 'Accept',
    refuse: 'Decline',
  },
}

export default function CookieConsent() {
  const { lang } = useLang()
  const c = copy[lang]
  const [choice, setChoice] = useState<Choice | null>(null)
  const [visible, setVisible] = useState(false)

  // Lire le choix existant au montage
  useEffect(() => {
    const saved = (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) as Choice | null
    if (saved === 'accepted' || saved === 'refused') {
      setChoice(saved)
    } else {
      // Petit délai avant l'apparition de la bannière
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const decide = (value: Choice) => {
    localStorage.setItem(STORAGE_KEY, value)
    setChoice(value)
    setVisible(false)
  }

  return (
    <>
      {/* Analytics chargé uniquement si l'utilisateur a accepté */}
      {choice === 'accepted' && <Analytics />}

      {choice === null && (
        <div
          className={`fixed inset-x-0 bottom-0 z-[60] transition-all duration-500 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
          role="dialog"
          aria-live="polite"
          aria-label={c.title}
        >
          <div className="bg-navy/95 backdrop-blur-md border-t border-white/10 shadow-2xl">
            <div className="max-w-[1200px] mx-auto px-6 py-5 lg:px-8 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
              <div className="flex-1">
                <h2 className="font-display text-lg text-white mb-1">{c.title}</h2>
                <p className="text-white/70 font-sans text-sm leading-relaxed max-w-2xl">
                  {c.text}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => decide('refused')}
                  className="px-6 py-3 rounded-full border border-white/30 text-white/80 font-sans text-sm font-medium tracking-wider hover:bg-white/10 hover:text-white transition-all"
                >
                  {c.refuse}
                </button>
                <button
                  onClick={() => decide('accepted')}
                  className="px-7 py-3 rounded-full bg-teal text-white font-sans text-sm font-medium tracking-wider hover:bg-teal-dark hover:scale-[1.02] transition-all"
                >
                  {c.accept}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
