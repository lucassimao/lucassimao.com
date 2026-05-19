'use client'

import { Language, isLanguage } from '@/lib/i18n'
import { useLanguage, useTranslations } from './LanguageProvider'

const OPTIONS: { label: string; value: Language }[] = [
  { label: 'EN', value: 'en' },
  { label: 'PT', value: 'pt-BR' },
]

interface Props {
  className?: string
}

export function LanguageToggle({ className = '' }: Props) {
  const { language, setLanguage } = useLanguage()
  const t = useTranslations()

  const handleChange = (value: string) => {
    if (isLanguage(value)) {
      setLanguage(value)
    }
  }

  return (
    <div className={`text-xs uppercase tracking-wide ${className}`}>
      <span className="sr-only">{t.preferences.language}</span>
      <div className="inline-flex rounded-full border border-border/70 overflow-hidden">
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => handleChange(option.value)}
            className={`px-2.5 py-1 font-semibold transition-colors ${
              option.value === language
                ? 'bg-foreground text-background'
                : 'text-foreground-secondary hover:text-foreground'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
