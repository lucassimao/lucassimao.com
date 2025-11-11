'use client'

import Image from 'next/image'
import { projects } from '@/data/projects'
import { useLanguage, useTranslations } from '@/components/language/LanguageProvider'

const statusColors = {
  completed: 'text-green-600 bg-green-100',
  'in-progress': 'text-blue-600 bg-blue-100',
  planned: 'text-orange-600 bg-orange-100',
}

export function ProjectsContent() {
  const { projects: projectCopy } = useTranslations()
  const { language } = useLanguage()

  return (
    <div className="container">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4 lowercase">{projectCopy.title}</h1>
        <p className="text-foreground-secondary text-lg">
          {projectCopy.subtitle}
        </p>
      </div>

      <div className="max-w-4xl space-y-6">
        {projects.map((project) => (
          <article key={project.title} className="bg-card rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                {project.icon && (
                  <Image
                    src={project.icon}
                    alt={`${project.title} icon`}
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                )}
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                {projectCopy.statuses[project.status]}
              </span>
            </div>

            <p className="text-foreground-secondary mb-4">
              {project.description[language]}
            </p>

            <div className="mb-6 space-y-1 text-sm">
              <p className="text-foreground-secondary">
                <span className="font-medium text-foreground">{projectCopy.stackLabels.backend}:</span> {project.stackDetails.backend}
              </p>
              <p className="text-foreground-secondary">
                <span className="font-medium text-foreground">{projectCopy.stackLabels.mobile}:</span> {project.stackDetails.mobile}
              </p>
              <p className="text-foreground-secondary">
                <span className="font-medium text-foreground">{projectCopy.stackLabels.services}:</span> {project.stackDetails.services}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-color flex flex-wrap items-center gap-4 text-sm">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:underline flex items-center gap-1"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  {projectCopy.ctas.website}
                </a>
              )}

              {project.playStore && (
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:underline flex items-center gap-1"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5c0 .6.4 1 1 1s1-.5 1-1V3.5c0-.6-.5-1-1-1s-1 .5-1 1v17zM20.5 9.5L5 1v22l15.5-8.5c.5-.3.5-.8 0-1l-.5-.5z" />
                  </svg>
                  {projectCopy.ctas.playStore}
                </a>
              )}

              {project.appStore && (
                <a
                  href={project.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:underline flex items-center gap-1"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  {projectCopy.ctas.appStore}
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:underline flex items-center gap-1"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
