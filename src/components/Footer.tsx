import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import Logo from './Logo'
import { useLang } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer>
      {/* Top Section */}
      <div className="bg-cream py-16 px-8">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Newsletter */}
            <div>
              <h3 className="font-display text-2xl text-navy mb-3">
                {t.footer.newsletterTitle}
              </h3>
              <p className="text-navy/70 font-sans text-sm leading-relaxed mb-6">
                {t.footer.newsletterDesc}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t.footer.emailPlaceholder}
                  className="flex-1 min-w-0 px-4 py-3 rounded-full border border-border bg-white text-navy text-sm font-sans focus:outline-none focus:ring-2 focus:ring-teal"
                />
                <button className="px-6 py-3 bg-teal text-white rounded-full font-sans text-sm font-medium hover:bg-teal-dark transition-all hover:scale-[1.02] shrink-0">
                  {t.footer.subscribe}
                </button>
              </div>
            </div>

            {/* Coordonnées */}
            <div>
              <h4 className="font-sans font-medium text-navy text-sm tracking-wider uppercase mb-4">{t.footer.coordonnees}</h4>
              <div className="flex flex-col gap-2 text-navy/70 font-sans text-sm leading-relaxed">
                <p className="text-navy font-medium">Van Cropsal</p>
                <p>{t.footer.jobTitle}</p>
                <p>4865, rue Jarry Est, Saint-Léonard<br />Québec, H1R 1Y1</p>
                <a href="tel:+14384029471" className="hover:text-teal transition-colors">438 402-9471 <span className="text-navy/40">{t.footer.cell}</span></a>
                <a href="tel:+15143290000" className="hover:text-teal transition-colors">514 329-0000 <span className="text-navy/40">{t.footer.bureau}</span></a>
                <a href="mailto:vanc@remax-quebec.com" className="text-teal hover:text-teal-dark transition-colors">vanc@remax-quebec.com</a>
              </div>

              {/* Sources / profils officiels */}
              <div className="mt-5 pt-4 border-t border-navy/10">
                <p className="font-sans text-xs uppercase tracking-wider text-navy/40 mb-2">{t.footer.profilsOfficiels}</p>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="https://remax-alliance.ca/fr/nos-courtiers/van-cropsal-126296.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-navy/70 font-sans text-sm hover:text-teal transition-colors"
                  >
                    {t.footer.ficheRemax}
                    <ExternalLink size={13} />
                  </a>
                  <a
                    href="https://www.facebook.com/Van-Cropsal-Courtier-Immobilier-103742778702855"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-navy/70 font-sans text-sm hover:text-teal transition-colors"
                  >
                    {t.footer.facebook}
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Nav Links 1 */}
            <div>
              <h4 className="font-sans font-medium text-navy text-sm tracking-wider uppercase mb-4">{t.footer.navigation}</h4>
              <div className="flex flex-col gap-3">
                <Link to="/vendre" className="text-navy/80 font-sans text-sm hover:text-teal transition-colors">{t.footer.vendre}</Link>
                <Link to="/acheter" className="text-navy/80 font-sans text-sm hover:text-teal transition-colors">{t.footer.acheter}</Link>
                <Link to="/proprietes" className="text-navy/80 font-sans text-sm hover:text-teal transition-colors">{t.footer.trouver}</Link>
                <Link to="/blogue" className="text-navy/80 font-sans text-sm hover:text-teal transition-colors">{t.footer.blogue}</Link>
                <Link to="/faq" className="text-navy/80 font-sans text-sm hover:text-teal transition-colors">{t.footer.faq}</Link>
                <Link to="/contact" className="text-navy/80 font-sans text-sm hover:text-teal transition-colors">{t.footer.nousJoindre}</Link>
              </div>
            </div>

            {/* Nav Links 2 */}
            <div>
              <h4 className="font-sans font-medium text-navy text-sm tracking-wider uppercase mb-4">{t.footer.services}</h4>
              <div className="flex flex-col gap-3">
                <span className="text-navy/80 font-sans text-sm">{t.footer.svcAchat}</span>
                <span className="text-navy/80 font-sans text-sm">{t.footer.svcVente}</span>
                <span className="text-navy/80 font-sans text-sm">{t.footer.svcLocation}</span>
                <span className="text-navy/80 font-sans text-sm">{t.footer.svcHypo}</span>
              </div>
            </div>
          </div>
        </div>

      {/* Bottom Section */}
      <div className="bg-navy py-6 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Logo variant="dark" size="sm" />

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/Van-Cropsal-Courtier-Immobilier-103742778702855" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/vancropsal/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-white/50 text-xs font-sans">
              © 2026 Van Cropsal – RE/MAX Alliance &amp; Pro-Commercial. {t.footer.rights}
            </p>
            <p className="text-white/30 text-[10px] font-sans mt-1">
              {t.footer.legal}
            </p>
          </div>
        </div>
      </div>

      {/* Powered by YCM */}
      <a
        href="https://www.ycmagency.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-navy border-t border-white/10 py-5 px-8 hover:bg-white/5 transition-colors"
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-3">
          <span className="text-white/40 group-hover:text-white/60 font-sans text-xs tracking-wider transition-colors">
            Site propulsé par
          </span>
          <img
            src="/images/ycm-logo.png"
            alt="YCM Agency"
            className="h-6 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </a>
    </footer>
  )
}
