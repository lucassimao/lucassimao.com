'use client'

import { useTranslations } from '@/components/language/LanguageProvider'

export function AboutContent() {
  const { about } = useTranslations()

  return (
    <div className="shell py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 lowercase tracking-tight">{about.title}</h1>

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
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
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
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
          {about.toolsHeading}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {about.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-border/60 px-3 py-1 text-xs font-medium text-foreground-secondary"
            >
              {tool}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold mb-6">{about.techHeading}</h2>
        <div className="space-y-6">
          {about.techSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-1.5 text-foreground uppercase tracking-wide">{section.title}</h3>
              <p className="text-foreground-secondary leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold mb-6">{about.experienceHeading}</h2>
        <div className="space-y-7">
          {about.experiences.map((experience) => {
            const hasCompanyUrl = 'companyUrl' in experience && Boolean(experience.companyUrl)
            return (
              <div key={experience.role + experience.company} className="border-l-2 border-color pl-5">
                <h3 className="font-semibold text-foreground">
                  {experience.role}
                  {' · '}
                  {hasCompanyUrl ? (
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:underline"
                    >
                      {experience.company}
                    </a>
                  ) : (
                    experience.company
                  )}
                </h3>
                <p className="text-xs text-muted mt-1 mb-2 uppercase tracking-wide">{experience.timeline}</p>
                <p className="text-foreground-secondary leading-relaxed">{experience.description}</p>
              </div>
            )
          })}
        </div>
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
