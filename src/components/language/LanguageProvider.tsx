'use client'

import { createContext, useContext, useEffect, useMemo, useState, ReactNode, useCallback } from 'react'
import { DEFAULT_LANGUAGE, LANGUAGE_COOKIE, Language, Translations, getDictionary, isLanguage } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  translations: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const LANGUAGE_COOKIE_PREFIX = `${LANGUAGE_COOKIE}=`

const detectBrowserLanguage = (): Language | null => {
  if (typeof navigator === 'undefined') {
    return null
  }

  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const candidate of candidates) {
    if (!candidate) continue
    const lower = candidate.toLowerCase()
    if (lower.startsWith('pt')) {
      return 'pt-BR'
    }
    if (lower.startsWith('en')) {
      return 'en'
    }
  }

  return null
}

const hasLanguageCookie = () => {
  if (typeof document === 'undefined') {
    return false
  }
  return document.cookie.split('; ').some((cookie) => cookie.startsWith(LANGUAGE_COOKIE_PREFIX))
}

export function LanguageProvider({
  children,
  initialLanguage = DEFAULT_LANGUAGE,
}: {
  children: ReactNode
  initialLanguage?: Language
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage)

  const applyLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    try {
      localStorage.setItem('language', nextLanguage)
    } catch {
      // ignore storage failures
    }

    if (typeof document !== 'undefined') {
      document.cookie = `${LANGUAGE_COOKIE}=${nextLanguage}; path=/; max-age=${60 * 60 * 24 * 365}`
    }
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', language)
    }
  }, [language])

  const setLanguage = useCallback((nextLanguage: Language) => {
    applyLanguage(nextLanguage)
  }, [applyLanguage])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    try {
      const stored = localStorage.getItem('language')
      if (isLanguage(stored)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        applyLanguage(stored)
        return
      }
    } catch {
      // ignore storage access issues
    }

    if (!hasLanguageCookie()) {
      const browserLanguage = detectBrowserLanguage()
      if (browserLanguage) {
         
        applyLanguage(browserLanguage)
      }
    }
  }, [applyLanguage])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      translations: getDictionary(language),
    }),
    [language, setLanguage]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function useTranslations() {
  const { translations } = useLanguage()
  return translations
}
