import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  stagger?: number
  className?: string
  threshold?: string
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 1,
  className = '',
  threshold = '80%',
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    const fromVars: gsap.TweenVars = { opacity: 0 }
    
    switch (direction) {
      case 'up':
        fromVars.y = 60
        break
      case 'down':
        fromVars.y = -60
        break
      case 'left':
        fromVars.x = -60
        break
      case 'right':
        fromVars.x = 60
        break
    }

    gsap.from(containerRef.current, {
      ...fromVars,
      duration,
      delay,
      ease: 'power2.out',
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: containerRef.current,
        start: `top ${threshold}`,
        once: true,
      },
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
