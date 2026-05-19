'use client'

import Link from 'next/link'
import { Fragment } from 'react'
import { useTranslations } from '@/components/language/LanguageProvider'

export function Hero() {
  const { hero } = useTranslations()

  return (
    <section className="shell py-16 md:py-24">
      <p className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-foreground-secondary">
        <span className="inline-flex items-center gap-2">
          <span className="relative inline-flex h-2 w-2" aria-hidden="true">
            <span className="absolute inset-0 inline-flex rounded-full bg-emerald-500 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-semibold uppercase tracking-wider text-xs text-foreground">
            {hero.nowLabel}
          </span>
        </span>
        <span>{hero.now}</span>
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mb-8 lowercase tracking-tight">
        {hero.greeting}
        <span className="sr-only"> Lucas Simão — Staff Software Engineer, remote from Brazil.</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 mb-10">
        {[hero.columnOne, hero.columnTwo].map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-4">
            {column.map((paragraph, index) => (
              <p key={index} className="text-foreground-secondary leading-relaxed">
                <ParagraphWithHighlight text={paragraph} />
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center px-5 py-2.5 bg-foreground text-background rounded-lg hover:bg-foreground-secondary transition-colors text-sm font-medium"
        >
          {hero.primaryCta}
        </Link>

        <Link
          href="/about"
          className="inline-flex items-center px-5 py-2.5 border border-color text-foreground hover:bg-background-secondary transition-colors text-sm font-medium rounded-lg"
        >
          {hero.secondaryCta}
        </Link>

        <a
          href="https://github.com/lucassimao"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-link hover:underline"
        >
          {hero.tertiaryCta}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </a>
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
