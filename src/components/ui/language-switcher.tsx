import { ChevronDownIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const LANGS = [
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ar', label: 'العربية', short: 'AR' },
] as const

function normalizeLang(raw?: string) {
  const base = String(raw || 'fr').toLowerCase().split('-')[0]
  return LANGS.some((l) => l.code === base) ? base : 'fr'
}

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const current = normalizeLang(i18n.language)
  const currentMeta = LANGS.find((l) => l.code === current) || LANGS[0]

  useEffect(() => {
    const lang = normalizeLang(i18n.language)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [i18n.language])

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  function select(code: string) {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div ref={rootRef} className={`relative inline-flex ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        <img
          className="relative w-6 h-6"
          alt=""
          src="/language-circle.svg"
        />
        <span className="relative w-fit [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
          {currentMeta.short}
        </span>
        <ChevronDownIcon
          className={`relative w-[21px] h-[21px] transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[160px] overflow-hidden rounded-2xl border border-white/80 bg-[#DEEAFF]/backdrop-blur-xl shadow-lg py-1"
        >
          {LANGS.map((lang) => (
            <li key={lang.code} role="option" aria-selected={lang.code === current}>
              <button
                type="button"
                onClick={() => select(lang.code)}
                className={`w-full px-3 py-2 text-left text-sm font-medium font-['Quicksand'] ${
                  lang.code === current
                    ? 'bg-[#3879f0] text-indigo-100'
                    : 'text-[#323232] hover:bg-white/60'
                }`}
              >
                <span className="inline-flex w-full items-center justify-between gap-3">
                  <span>{lang.label}</span>
                  <span className="opacity-70">{lang.short}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
