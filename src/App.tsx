import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HamburgerOverlay from './components/HamburgerOverlay'
import ChatWidget from './components/ChatWidget'
import Home from './pages/Home'
import Vendre from './pages/Vendre'
import Acheter from './pages/Acheter'
import Proprietes from './pages/Proprietes'
import Quartiers from './pages/Quartiers'
import QuartierDetail from './pages/QuartierDetail'
import PropertyDetail from './pages/PropertyDetail'
import Blogue from './pages/Blogue'
import BlogPost from './pages/BlogPost'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import SearchResults from './pages/SearchResults'
import { useState } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <ScrollToTop />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HamburgerOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendre" element={<Vendre />} />
          <Route path="/acheter" element={<Acheter />} />
          <Route path="/proprietes" element={<Proprietes />} />
          <Route path="/quartiers" element={<Quartiers />} />
          <Route path="/quartiers/:slug" element={<QuartierDetail />} />
          <Route path="/proprietes/:id" element={<PropertyDetail />} />
          <Route path="/blogue" element={<Blogue />} />
          <Route path="/blogue/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recherche" element={<SearchResults />} />
        </Routes>
      </main>
      <Footer />
      {!menuOpen && <ChatWidget />}
    </div>
  )
}

export default App
