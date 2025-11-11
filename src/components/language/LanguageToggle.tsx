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
    <div className={`flex flex-col gap-1 text-xs uppercase tracking-wide text-muted ${className}`}>
      <span className="sr-only">{t.preferences.language}</span>
      <div className="inline-flex rounded-full border border-color overflow-hidden">
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => handleChange(option.value)}
            className={`px-3 py-1 font-semibold transition-colors ${
              option.value === language
                ? 'bg-foreground text-background'
                : 'text-foreground hover:bg-background-secondary'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
