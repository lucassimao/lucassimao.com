'use client'

import { projects } from '@/data/projects'
import { useTranslations } from '@/components/language/LanguageProvider'
import { ProjectCard } from './ProjectCard'

export function ProjectsContent() {
  const { projects: copy } = useTranslations()
  const groups = [
    { title: copy.live, items: projects.filter((p) => p.status === 'completed') },
    { title: copy.building, items: projects.filter((p) => p.status === 'in-progress' || p.status === 'planned') },
    { title: copy.archive, items: projects.filter((p) => p.status === 'retired'), note: copy.archiveNote },
  ]

  return (
    <div className="shell page-section">
      <header className="page-heading">
        <h1 className="display-title">{copy.title}</h1>
        <p>{copy.subtitle}</p>
      </header>
      {groups.filter((group) => group.items.length).map((group) => (
        <section key={group.title} className="project-group" aria-label={group.title}>
          <div className="section-heading"><h2>{group.title}</h2><span aria-hidden="true">{String(group.items.length).padStart(2, '0')}</span></div>
          {group.note && <p className="archive-note">{group.note}</p>}
          <div className="space-y-6">{group.items.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
        </section>
      ))}
    </div>
  )
}
