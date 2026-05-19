import type { Metadata } from 'next'
import { ProjectsContent } from '@/components/projects/ProjectsContent'
import { projects } from '@/data/projects'
import { projectsListJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects by Lucas Simão — DriftPosts (AI travel content), Decorebator (vocabulary app), Calculadora Price & SAC, Aluga, and more. Built with React, Next.js, React Native, Go, and Cloudflare.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects · Lucas Simão',
    description:
      'A mix of shipped products and side experiments — mobile apps, AI-powered platforms, and full-stack web products.',
    url: '/projects',
    type: 'website',
  },
}

const jsonLdString = JSON.stringify(
  projectsListJsonLd(
    projects.map((p) => ({
      name: p.title,
      description: p.description.en,
      url: p.link,
    }))
  )
)

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />
      <ProjectsContent />
    </>
  )
}
