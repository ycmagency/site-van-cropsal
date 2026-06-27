import { useRef, useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'
import { useLang } from '../../i18n/LanguageContext'

interface StoryMedia {
  type: 'video' | 'image'
  src: string
  poster?: string
  /** Média horizontal : affiché en entier (object-contain) au lieu de remplir le cadre. */
  landscape?: boolean
}

interface StoryGroup {
  name: string
  cover: string
  media: StoryMedia[]
}

const groups: StoryGroup[] = [
  {
    name: 'Jean-Marie Corbeil',
    cover: '/videos/spotlight/jean-marie-1.jpg',
    media: [
      { type: 'video', src: '/videos/spotlight/jean-marie-1.mp4', poster: '/videos/spotlight/jean-marie-1.jpg', landscape: true },
      { type: 'video', src: '/videos/spotlight/jean-marie-2.mp4', poster: '/videos/spotlight/jean-marie-2.jpg', landscape: true },
      { type: 'video', src: '/videos/spotlight/jean-marie-3.mp4', poster: '/videos/spotlight/jean-marie-3.jpg', landscape: true },
    ],
  },
  {
    name: 'Matthew Guiffrida',
    cover: '/videos/spotlight/matthew.jpg',
    media: [
      { type: 'video', src: '/videos/spotlight/matthew.mp4', poster: '/videos/spotlight/matthew.jpg' },
    ],
  },
  {
    name: 'Tacu',
    cover: '/videos/spotlight/tacu.jpg',
    media: [
      { type: 'video', src: '/videos/spotlight/tacu.mp4', poster: '/videos/spotlight/tacu.jpg' },
      { type: 'image', src: '/videos/spotlight/tacu-photo.jpg' },
    ],
  },
  {
    name: 'Mario Parent',
    cover: '/videos/spotlight/mario.jpg',
    media: [
      { type: 'video', src: '/videos/spotlight/mario.mp4', poster: '/videos/spotlight/mario.jpg' },
    ],
  },
]

const IMAGE_DURATION = 5000 // ms

function StoryViewer({
  groupIndex,
  onClose,
}: {
  groupIndex: number
  onClose: () => void
}) {
  const group = groups[groupIndex]
  const [mediaIndex, setMediaIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const current = group.media[mediaIndex]

  const goNext = useCallback(() => {
    if (mediaIndex < group.media.length - 1) {
      setMediaIndex((i) => i + 1)
      setProgress(0)
    } else {
      onClose()
    }
  }, [mediaIndex, group.media.length, onClose])

  const goPrev = useCallback(() => {
    if (mediaIndex > 0) {
      setMediaIndex((i) => i - 1)
      setProgress(0)
    }
  }, [mediaIndex])

  // Reset when group changes
  useEffect(() => {
    setMediaIndex(0)
    setProgress(0)
  }, [groupIndex])

  // Image auto-advance
  useEffect(() => {
    if (current.type !== 'image') return
    const start = Date.now()
    const id = setInterval(() => {
      const pct = Math.min((Date.now() - start) / IMAGE_DURATION, 1)
      setProgress(pct)
      if (pct >= 1) {
        clearInterval(id)
        goNext()
      }
    }, 40)
    return () => clearInterval(id)
  }, [current, goNext])

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, goNext, goPrev])

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center">
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
      >
        <X size={22} />
      </button>

      {/* Story frame */}
      <div className="relative w-[calc(100%-2rem)] max-w-[420px] h-[85vh] max-h-[820px] rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-2xl">
        {/* Progress bars */}
        <div className="absolute top-3 left-3 right-3 z-20 flex gap-1.5">
          {group.media.map((_, i) => (
            <div key={i} className="flex-1 h-[3px] rounded-full bg-white/30 overflow-hidden">
              <div
                className="h-full bg-white"
                style={{ width: i < mediaIndex ? '100%' : i === mediaIndex ? `${progress * 100}%` : '0%' }}
              />
            </div>
          ))}
        </div>

        {/* Header name */}
        <div className="absolute top-7 left-3 right-3 z-20 flex items-center gap-3 pt-2">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-white/40">
            <img src={group.cover} alt={group.name} className="w-full h-full object-cover" />
          </div>
          <span className="text-white font-sans text-sm font-medium drop-shadow">{group.name}</span>
        </div>

        {/* Media */}
        {current.type === 'video' ? (
          <video
            key={current.src}
            ref={videoRef}
            src={current.src}
            poster={current.poster}
            autoPlay
            playsInline
            onTimeUpdate={() => {
              const v = videoRef.current
              if (v && v.duration) setProgress(v.currentTime / v.duration)
            }}
            onEnded={goNext}
            className={`w-full h-full ${current.landscape ? 'object-contain' : 'object-cover'}`}
          />
        ) : (
          <img src={current.src} alt={group.name} className="max-w-full max-h-full object-contain" />
        )}

        {/* Tap zones */}
        <button
          aria-label="Précédent"
          onClick={goPrev}
          className="absolute left-0 top-0 bottom-0 w-1/3 z-10"
        />
        <button
          aria-label="Suivant"
          onClick={goNext}
          className="absolute right-0 top-0 bottom-0 w-2/3 z-10"
        />
      </div>
    </div>
  )
}

export default function SpotlightSection() {
  const { t } = useLang()
  const [openGroup, setOpenGroup] = useState<number | null>(null)

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-teal font-sans text-xs tracking-[0.15em] uppercase mb-3">
              {t.spotlight.label}
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-navy mb-5">
              {t.spotlight.title}
            </h2>
            <p className="text-navy/60 font-sans leading-relaxed">
              {t.spotlight.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex gap-8 sm:gap-12 justify-center flex-wrap">
            {groups.map((g, i) => (
              <button
                key={g.name}
                onClick={() => setOpenGroup(i)}
                className="group flex flex-col items-center gap-3 w-28"
              >
                <span className="relative inline-block rounded-full p-[3px] bg-gradient-to-tr from-teal via-teal to-navy transition-transform group-hover:scale-105">
                  <span className="block rounded-full p-[3px] bg-white">
                    <span className="block w-24 h-24 rounded-full overflow-hidden">
                      <img src={g.cover} alt={g.name} className="w-full h-full object-cover" />
                    </span>
                  </span>
                  {g.media.length > 1 && (
                    <span className="absolute -bottom-1 -right-1 bg-navy text-white text-[10px] font-sans font-medium w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                      {g.media.length}
                    </span>
                  )}
                </span>
                <span className="font-sans text-sm text-navy/80 text-center leading-tight">{g.name}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {openGroup !== null && (
        <StoryViewer
          groupIndex={openGroup}
          onClose={() => setOpenGroup(null)}
        />
      )}
    </section>
  )
}
