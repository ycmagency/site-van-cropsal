import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { useLang } from '../i18n/LanguageContext'

interface NavbarProps {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { t, toggle } = useLang()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      style={{ height: '80px' }}
    >
      <div className="flex items-center justify-between h-full px-8 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Logo variant="dark" />
        </Link>

        {/* Center Nav Links - Desktop */}
        <div className={`items-center gap-10 ${menuOpen ? 'hidden' : 'hidden lg:flex'}`}>
          <Link to="/vendre" className="nav-link-underline text-white/90 font-sans font-light text-[15px] tracking-wider hover:text-white transition-colors">
            {t.nav.vendre}
          </Link>
          <Link to="/acheter" className="nav-link-underline text-white/90 font-sans font-light text-[15px] tracking-wider hover:text-white transition-colors">
            {t.nav.acheter}
          </Link>
          <Link to="/proprietes" className="nav-link-underline text-white/90 font-sans font-light text-[15px] tracking-wider hover:text-white transition-colors">
            {t.nav.trouver}
          </Link>
        </div>

        {/* Right Cluster */}
        <div className="flex items-center gap-6">
          <button
            onClick={toggle}
            className={`text-white/70 font-sans text-[13px] tracking-wider cursor-pointer hover:text-white transition-colors ${menuOpen ? 'hidden' : 'hidden lg:block'}`}
          >
            {t.nav.langLabel}
          </button>
          <Link to="/contact" className={`nav-link-underline text-white/90 font-sans font-light text-[15px] tracking-wider hover:text-white transition-colors ${menuOpen ? 'hidden' : 'hidden lg:block'}`}>
            {t.nav.nousJoindre}
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex flex-col justify-center w-8 h-8 text-white ${menuOpen ? 'hamburger-open' : ''}`}
            aria-label="Menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>
    </nav>
  )
}
