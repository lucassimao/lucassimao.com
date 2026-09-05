'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/data/projects'
import { useLanguage, useTranslations } from '@/components/language/LanguageProvider'

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const { language } = useLanguage()
  const { projects: copy } = useTranslations()
  const retired = project.status === 'retired'
  const links = [
    { href: project.link, label: copy.ctas.website },
    { href: project.github, label: copy.source },
    { href: project.playStore, label: copy.ctas.playStore },
    { href: project.appStore, label: copy.ctas.appStore },
  ].filter((link) => link.href)

  return (
    <article id={compact ? undefined : project.id} className={`project-card ${retired ? 'project-archive' : ''} ${compact ? 'project-compact' : ''}`}>
      <div className="project-copy">
        <span className={`project-status status-${project.status}`}>{copy.statuses[project.status]}</span>
        <h3 className="project-name">
          {retired && project.icon && <Image src={project.icon} width={28} height={28} alt="" className="rounded-md" />}
          {project.title}
        </h3>
        <p className="project-description">{project.description[language]}</p>
        <div className="project-actions">
          {links.map(({ href, label }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="action-link">
              {label}<span aria-hidden="true">↗</span>
            </a>
          ))}
          {compact && <Link href={`/projects#${project.id}`} className="action-link">{copy.view}<span aria-hidden="true">→</span></Link>}
        </div>
        {!retired && <ul className="project-tags" aria-label={language === 'pt-BR' ? 'Tecnologias' : 'Technologies'}>
          {project.technologies.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}
        </ul>}
      </div>

      {!retired && <div className="project-visual">
        {project.id === 'driftposts' ? (
          <Image src="/projects/driftposts.png" alt={copy.screenshot} width={1280} height={800} sizes="(max-width: 639px) 90vw, 450px" className="project-screenshot" />
        ) : (
          <div className="mcp-preview">
            <span className="eyebrow">{copy.preview}</span>
            <ol>{copy.flow.map((step, index) => <li key={step}><span className="flow-number" aria-hidden="true">0{index + 1}</span>{step}</li>)}</ol>
            <span className="mcp-signature">decorebator <span>mcp</span></span>
          </div>
        )}
      </div>}

      {!compact && <details className="project-details">
        <summary>{project.status === 'in-progress' ? copy.proposed : copy.details}</summary>
        <div className="details-body">
          {project.details && <p>{project.details[language]}</p>}
          <dl>{project.stack.map((row) => <div key={row.label}>
            <dt>{copy.stackLabels[row.label as keyof typeof copy.stackLabels] ?? row.label}</dt>
            <dd>{row.value}</dd>
          </div>)}</dl>
        </div>
      </details>}
    </article>
  )
}
