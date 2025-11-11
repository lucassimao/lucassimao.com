'use client'

import Link from 'next/link'
import { useTranslations } from '@/components/language/LanguageProvider'

export function ConsultingContent() {
  const { consulting } = useTranslations()

  return (
    <div className="container">
      <div className="max-w-5xl">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-6 lowercase">{consulting.title}</h1>
          <div className="space-y-4 text-lg text-foreground-secondary">
            {consulting.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{consulting.servicesHeading}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {consulting.services.map((service) => (
              <article key={service.title} className="bg-card rounded-2xl p-6 shadow-card flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground-secondary flex-1">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{consulting.valueHeading}</h2>
          <div className="grid gap-4">
            {consulting.values.map((value) => (
              <div key={value} className="border border-color rounded-xl p-4 text-foreground-secondary">
                {value}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-4">{consulting.stackHeading}</h2>
          <p className="text-foreground-secondary mb-6">{consulting.stackIntro}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {consulting.stack.map((group) => (
              <article key={group.category} className="rounded-3xl border border-color bg-card/80 p-6 shadow-card backdrop-blur">
                <h3 className="text-lg font-semibold text-foreground mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-3 text-sm font-medium text-foreground-secondary">
                  {group.tools.map((tool) => (
                    <span key={tool} className="px-0 text-foreground">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 mb-24">
          <div className="rounded-[32px] border border-color/70 bg-gradient-to-r from-background-secondary/80 to-background p-8 shadow-card backdrop-blur flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-3 leading-tight">{consulting.cta.title}</h2>
              <p className="text-foreground-secondary text-lg leading-relaxed">{consulting.cta.description}</p>
            </div>
            <Link
              href="mailto:lucas@lucassimao.com"
              className="inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 py-3 font-semibold shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              {consulting.cta.secondaryLabel}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
