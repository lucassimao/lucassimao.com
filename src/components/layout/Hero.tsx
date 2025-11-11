'use client'

import Link from 'next/link'
import { Fragment } from 'react'
import { useTranslations } from '@/components/language/LanguageProvider'

export function Hero() {
  const { hero } = useTranslations()

  return (
    <section className="mb-16">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 lowercase">
          {hero.greeting}
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[hero.columnOne, hero.columnTwo].map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-3">
              {column.map((paragraph, index) => (
                <p key={index} className="text-foreground-secondary">
                  <ParagraphWithHighlight text={paragraph} />
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground-secondary transition-colors font-medium"
          >
            {hero.primaryCta}
          </Link>
          
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-color text-foreground hover:bg-background-secondary transition-colors font-medium rounded-lg"
          >
            {hero.secondaryCta}
          </Link>

          <a
            href="https://github.com/lucassimao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-link hover:underline"
          >
            {hero.tertiaryCta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function ParagraphWithHighlight({ text }: { text: string }) {
  const target = 'Bold.org'
  if (!text.includes(target)) {
    return text
  }

  const parts = text.split(target)
  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            <a
              href="https://bold.org/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              {target}
            </a>
          )}
        </Fragment>
      ))}
    </>
  )
}
