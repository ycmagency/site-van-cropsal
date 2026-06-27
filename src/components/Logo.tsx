interface LogoProps {
  /** 'dark' = fond sombre (navbar) → texte clair ; 'light' = fond clair → texte navy */
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md'
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const divider = variant === 'dark' ? 'bg-white/25' : 'bg-navy/20'

  return (
    <div className="flex items-center gap-3 shrink-0">
      {/* Monogramme VC */}
      <img
        src="/images/vc-monogram.png"
        alt="Van Cropsal"
        className={`${size === 'sm' ? 'h-7' : 'h-9'} w-auto ${variant === 'light' ? 'invert' : ''}`}
      />

      {/* Filet de séparation */}
      <span className={`w-px self-stretch ${divider}`} />

      {/* Logo signature Van Cropsal */}
      <img
        src="/images/logo-signature.png"
        alt="Van Cropsal — Courtier immobilier RE/MAX Alliance"
        className={`${size === 'sm' ? 'h-10' : 'h-12'} w-auto ${variant === 'light' ? 'invert' : ''}`}
      />
    </div>
  )
}
