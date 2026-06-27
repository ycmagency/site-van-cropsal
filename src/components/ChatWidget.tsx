import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, X, Send, Phone } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

interface Msg {
  from: 'bot' | 'user'
  text: string
  cta?: boolean
}

type Lang = 'fr' | 'en'

const strings = {
  fr: {
    title: 'Assistant Van Cropsal',
    subtitle: 'Questions immobilières',
    greeting: "Bonjour 👋 Je suis l'assistant de Van Cropsal. Je réponds à vos questions sur l'achat, la vente, l'évaluation ou la location d'une propriété. Comment puis-je vous aider ?",
    placeholder: 'Écrivez votre question…',
    quick: ['Vendre ma propriété', 'Acheter une propriété', 'Évaluation gratuite', 'Prendre rendez-vous'],
    ctaContact: 'Contacter Van',
    ctaCall: 'Appeler maintenant',
    offtopic: "Je réponds seulement aux questions liées à l'immobilier 🙂 Mais Van se fera un plaisir de vous aider personnellement !",
    answers: {
      vendre: "Excellente décision ! Van élabore une mise en marché professionnelle (photos, visibilité maximale, négociation) pour vendre au meilleur prix. La première étape est une évaluation gratuite de votre propriété.",
      acheter: "Van vous accompagne à chaque étape : recherche ciblée, visites, point de vue objectif et négociation pour obtenir la propriété idéale aux meilleures conditions.",
      evaluation: "Van offre une évaluation de la juste valeur marchande de votre propriété, gratuitement et sans obligation. C'est la meilleure façon de bien démarrer votre projet.",
      visite: "Avec plaisir ! Van est disponible 7 jours sur 7 pour organiser une rencontre ou une visite. Réservez votre moment dès maintenant.",
      prix: "Le prix dépend de plusieurs facteurs (secteur, type, état du marché). Van connaît parfaitement le marché de Montréal et environs et peut vous donner une évaluation précise.",
      financement: "Van fait partie d'un réseau de partenaires de confiance et peut vous référer pour obtenir le meilleur taux hypothécaire. Parlez-en directement avec lui.",
      fallback: "Bonne question ! Van pourra vous répondre en détail selon votre situation. Le plus simple est de le contacter directement.",
    },
  },
  en: {
    title: 'Van Cropsal Assistant',
    subtitle: 'Real estate questions',
    greeting: "Hello 👋 I'm Van Cropsal's assistant. I answer your questions about buying, selling, valuation or renting a property. How can I help?",
    placeholder: 'Type your question…',
    quick: ['Sell my property', 'Buy a property', 'Free valuation', 'Book a meeting'],
    ctaContact: 'Contact Van',
    ctaCall: 'Call now',
    offtopic: "I only answer real-estate related questions 🙂 But Van would be glad to help you personally!",
    answers: {
      vendre: "Great decision! Van builds a professional marketing plan (photos, maximum visibility, negotiation) to sell at the best price. The first step is a free valuation of your property.",
      acheter: "Van guides you at every step: targeted search, viewings, objective advice and negotiation to get the ideal property at the best conditions.",
      evaluation: "Van offers a fair market value assessment of your property, free of charge and with no obligation. It's the best way to start your project right.",
      visite: "With pleasure! Van is available 7 days a week to arrange a meeting or viewing. Book your time now.",
      prix: "The price depends on several factors (area, type, market). Van knows the Montreal market inside out and can give you an accurate valuation.",
      financement: "Van has a network of trusted partners and can refer you for the best mortgage rate. Talk to him directly.",
      fallback: "Good question! Van can answer in detail based on your situation. The easiest is to contact him directly.",
    },
  },
} satisfies Record<Lang, unknown>

function normalize(s: string) {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}

function matchIntent(input: string): keyof typeof strings.fr.answers | 'offtopic' {
  const t = normalize(input)
  const has = (...words: string[]) => words.some((w) => t.includes(w))

  if (has('vend', 'vendre', 'sell', 'inscrire ma', 'mettre en vente')) return 'vendre'
  if (has('achet', 'buy', 'acquerir', 'trouver une mais', 'trouver un cond')) return 'acheter'
  if (has('evalu', 'valeur', 'valuation', 'estimation', 'combien vaut', 'worth')) return 'evaluation'
  if (has('rendez', 'rdv', 'visite', 'rencontr', 'meeting', 'appel', 'call', 'book', 'disponib')) return 'visite'
  if (has('prix', 'price', 'marche', 'market', 'cout', 'cher')) return 'prix'
  if (has('hypoth', 'financ', 'mortgage', 'taux', 'pret', 'loan', 'banque')) return 'financement'
  if (
    has(
      'mais', 'cond', 'propri', 'immeuble', 'duplex', 'triplex', 'plex', 'terrain', 'loyer',
      'louer', 'rent', 'real estate', 'immobil', 'courtier', 'broker', 'maison', 'appart',
      'quartier', 'montreal', 'laval', 'offre', 'notaire', 'inspection',
    )
  )
    return 'fallback'

  return 'offtopic'
}

export default function ChatWidget() {
  const { lang } = useLang()
  const s = strings[lang]
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Msg[]>([{ from: 'bot', text: strings[lang].greeting }])
  const [typing, setTyping] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, open, typing])

  const send = (raw: string) => {
    const text = raw.trim()
    if (!text) return
    const intent = matchIntent(text)
    const reply = intent === 'offtopic' ? s.offtopic : s.answers[intent]
    setMessages((m) => [...m, { from: 'user', text }])
    setInput('')
    setTyping(true)
    window.setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { from: 'bot', text: reply, cta: true }])
    }, 750)
  }

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Ouvrir le chat"
        className={`fixed bottom-5 right-5 z-[90] w-14 h-14 rounded-full bg-teal hover:bg-teal-dark text-white shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 ${open ? '' : 'chat-btn-pulse'}`}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Fenêtre du chat */}
      {open && (
        <div className="chat-panel-in fixed bottom-24 right-5 z-[90] w-[calc(100vw-2.5rem)] max-w-[370px] h-[520px] max-h-[70vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-navy/10">
          {/* Header */}
          <div className="bg-navy px-5 py-4 flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-teal flex items-center justify-center text-white shrink-0">
              <MessageCircle size={18} />
            </span>
            <div className="leading-tight">
              <p className="text-white font-sans text-sm font-medium">{s.title}</p>
              <p className="text-white/50 font-sans text-xs">{s.subtitle}</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={bodyRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-cream/40">
            {messages.map((m, i) => (
              <div key={i} className="chat-msg-in">
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 font-sans text-sm leading-relaxed ${
                    m.from === 'bot'
                      ? 'bg-white text-navy/80 shadow-sm'
                      : 'bg-teal text-white ml-auto'
                  }`}
                >
                  {m.text}
                </div>
                {m.cta && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Link
                      to="/contact"
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal text-white rounded-full font-sans text-xs font-medium hover:bg-teal-dark transition-colors"
                    >
                      {s.ctaContact}
                    </Link>
                    <a
                      href="tel:+14384029471"
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-navy/20 text-navy rounded-full font-sans text-xs font-medium hover:bg-navy hover:text-white transition-colors"
                    >
                      <Phone size={13} /> {s.ctaCall}
                    </a>
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="chat-msg-in">
                <div className="inline-flex items-center gap-1.5 bg-white shadow-sm rounded-2xl px-4 py-3">
                  <span className="chat-dot w-1.5 h-1.5 rounded-full bg-navy/40" style={{ animationDelay: '0s' }} />
                  <span className="chat-dot w-1.5 h-1.5 rounded-full bg-navy/40" style={{ animationDelay: '0.2s' }} />
                  <span className="chat-dot w-1.5 h-1.5 rounded-full bg-navy/40" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            )}
          </div>

          {/* Quick replies */}
          <div className="px-3 pt-2 flex flex-wrap gap-2 bg-white">
            {s.quick.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="px-3 py-1.5 rounded-full bg-cream text-navy/70 font-sans text-xs hover:bg-teal hover:text-white transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="flex items-center gap-2 p-3 bg-white border-t border-navy/10"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={s.placeholder}
              className="flex-1 min-w-0 px-3 py-2 rounded-full border border-navy/15 bg-cream/50 text-navy text-sm font-sans focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <button
              type="submit"
              aria-label="Envoyer"
              className="w-9 h-9 rounded-full bg-teal text-white flex items-center justify-center hover:bg-teal-dark transition-colors shrink-0"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
