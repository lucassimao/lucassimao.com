'use client'

import { useTranslations } from '@/components/language/LanguageProvider'

export function AboutContent() {
  const { about } = useTranslations()

  return (
    <div className="container">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 lowercase">{about.title}</h1>

        <div className="space-y-6 text-lg text-foreground-secondary">
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

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">{about.techHeading}</h2>
          <div className="space-y-8">
            {about.techSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-bold mb-3 text-foreground">{section.title}</h3>
                <p className="text-foreground-secondary mb-2">{section.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">{about.experienceHeading}</h2>
          <div className="space-y-6">
            {about.experiences.map((experience) => (
              <div key={experience.role + experience.company} className="border-l-4 border-color pl-6">
                <h3 className="font-bold text-foreground">
                  {experience.role}
                  {experience.companyUrl ? (
                    <>
                      {' - '}
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link hover:underline"
                      >
                        {experience.company}
                      </a>
                    </>
                  ) : (
                    <> - {experience.company}</>
                  )}
                </h3>
                <p className="text-sm text-muted mb-2">{experience.timeline}</p>
                <p className="text-foreground-secondary">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-background-secondary rounded-lg">
          <h2 className="text-xl font-bold mb-4">{about.connectHeading}</h2>
          <p className="text-foreground-secondary mb-6">{about.connectDescription}</p>

          <div className="flex flex-wrap gap-4">
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
        </div>
      </div>
    </div>
  )
}
