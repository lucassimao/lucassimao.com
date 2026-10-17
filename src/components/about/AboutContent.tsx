'use client'

import { useTranslations } from '@/components/language/LanguageProvider'

export function AboutContent() {
  const { about } = useTranslations()

  return (
    <div className="shell page-section about-page">
      <h1 className="display-title mb-8">{about.title}</h1>

      <div className="space-y-5 text-foreground-secondary leading-relaxed">
        {about.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <p>
          {about.introWithLink.before}
          <a
            href={about.introWithLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline"
          >
            {about.introWithLink.linkLabel}
          </a>
          {about.introWithLink.after}
        </p>
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-semibold mb-5">
          {about.currentlyHeading}
        </h2>
        <ul className="space-y-2 text-foreground-secondary leading-relaxed">
          {about.currently.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-muted mt-2 inline-block h-1 w-1 rounded-full bg-foreground-secondary shrink-0" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-5">
          {about.toolsHeading}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {about.tools.filter((tool) => ['TypeScript', 'React', 'Node.js', 'Go', 'PostgreSQL', 'AWS', 'Cloudflare Workers', 'Docker'].includes(tool)).map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-border/60 px-3 py-1 text-xs font-medium text-foreground-secondary"
            >
              {tool}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 pt-8 border-t border-border/60">
        <h2 className="text-xl font-semibold mb-3">{about.connectHeading}</h2>
        <p className="text-foreground-secondary mb-5 leading-relaxed">{about.connectDescription}</p>

        <div className="flex flex-wrap gap-5 text-sm">
          <a href="mailto:lucas@lucassimao.com" className="text-link hover:underline">
            {about.contactLinks.email}
          </a>
          <a
            href="https://github.com/lucassimao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline"
          >
            {about.contactLinks.github}
          </a>
          <a
            href="https://x.com/lsimaocosta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline"
          >
            {about.contactLinks.twitter}
          </a>
        </div>
      </section>
    </div>
  )
}
