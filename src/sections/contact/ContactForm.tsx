import { useState } from 'react'
import ScrollReveal from '../../components/ScrollReveal'
import { useLang } from '../../i18n/LanguageContext'

export default function ContactForm() {
  const { t } = useLang()
  const sujetOptions = t.contact.sujets
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    courriel: '',
    telephone: '',
    sujet: '',
    message: '',
    consent: false,
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('success')
      setFormData({ prenom: '', nom: '', courriel: '', telephone: '', sujet: '', message: '', consent: false })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left column - Map */}
            <div className="lg:col-span-1">
              <div className="rounded-lg overflow-hidden bg-cream h-[320px] lg:h-full lg:min-h-[420px]">
                <iframe
                  src="https://maps.google.com/maps?q=4865%20rue%20Jarry%20Est%20Saint-L%C3%A9onard%20QC%20H1R%201Y1&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Van Cropsal – RE/MAX Alliance Jarry"
                />
              </div>
            </div>

            {/* Right column - Form */}
            <div className="lg:col-span-2">
              <h3 className="text-navy font-sans text-sm font-medium tracking-wider uppercase mb-2">
                {t.contact.formTitle}
              </h3>
              <p className="text-navy/60 font-sans text-sm mb-8">
                {t.contact.formIntro}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-navy font-sans text-sm mb-2">{t.contact.prenom} *</label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg text-navy font-sans text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-sans text-sm mb-2">{t.contact.nom} *</label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg text-navy font-sans text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-navy font-sans text-sm mb-2">{t.contact.courriel} *</label>
                    <input
                      type="email"
                      name="courriel"
                      value={formData.courriel}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg text-navy font-sans text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-sans text-sm mb-2">{t.contact.telephone} *</label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg text-navy font-sans text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-navy font-sans text-sm mb-2">{t.contact.sujet}</label>
                  <select
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg text-navy font-sans text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent bg-white"
                  >
                    {sujetOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt || '---'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-navy font-sans text-sm mb-2">{t.contact.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg text-navy font-sans text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="w-4 h-4 mt-1 rounded border-border text-teal focus:ring-teal"
                  />
                  <label className="text-navy/60 font-sans text-xs leading-relaxed">
                    {t.contact.consent}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-10 py-4 bg-teal text-white rounded-full font-sans text-sm font-medium tracking-wider hover:bg-teal-dark hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? '...' : t.contact.envoyer}
                </button>

                {status === 'success' && (
                  <p className="text-teal font-sans text-sm mt-2">{t.contact.sent}</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 font-sans text-sm mt-2">
                    Une erreur s'est produite. Réessayez ou appelez le 438 402-9471.
                  </p>
                )}
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
