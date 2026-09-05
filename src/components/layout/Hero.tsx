'use client'

import Link from 'next/link'
import { useTranslations } from '@/components/language/LanguageProvider'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/projects/ProjectCard'

export function Hero() {
  const { hero } = useTranslations()
  const selected = ['driftposts', 'decorebator-mcp'].flatMap((id) => projects.filter((p) => p.id === id))

  return (
    <div className="shell">
      <section className="hero-section">
        <p className="eyebrow">{hero.location}</p>
        <h1 className="hero-title">{hero.greeting}</h1>
        <p className="hero-role">{hero.role}</p>
        <p className="hero-intro">{hero.intro}</p>
        <div className="hero-actions">
          <Link href="/projects" className="primary-button">{hero.primaryCta}<span aria-hidden="true">↗</span></Link>
          <Link href="/about" className="action-link">{hero.secondaryCta}<span aria-hidden="true">→</span></Link>
          <a href="https://github.com/lucassimao" target="_blank" rel="noopener noreferrer" className="action-link">GitHub<span aria-hidden="true">↗</span></a>
        </div>
        <p className="now-note"><span className="now-dot" aria-hidden="true" /><span><strong>{hero.nowLabel}</strong> {hero.now}</span></p>
      </section>
      <section className="selected-work" aria-labelledby="selected-work-title">
        <div className="section-heading"><h2 id="selected-work-title">{hero.selected}</h2><span aria-hidden="true">01 — 02</span></div>
        <p className="section-description">{hero.selectedNote}</p>
        <div className="selected-grid">{selected.map((project) => <ProjectCard key={project.id} project={project} compact />)}</div>
      </section>
      <p className="personal-note">{hero.personal}</p>
    </div>
  )
}
