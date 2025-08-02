import Image from 'next/image'

export const metadata = {
  title: 'Projects - Lucas Simão',
  description: 'A showcase of my personal and professional projects, from web applications to open-source contributions.',
}

interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  playStore?: string
  appStore?: string
  icon?: string
  status: 'completed' | 'in-progress' | 'planned'
}

const projects: Project[] = [
  {
    title: "Decorebator",
    description: "AI-powered vocabulary learning mobile app that combines advanced artificial intelligence with the scientifically-proven Leitner spaced repetition system. Features AI-generated definitions, images, and audio across 7 languages, with 8 interactive quiz modes and comprehensive analytics.",
    technologies: ["Go", "React Native", "Next.js", "PostgreSQL", "OpenAI API", "Stripe", "RevenueCat", "Redis", "Docker"],
    link: "https://decorebator.com",
    playStore: "https://play.google.com/store/apps/details?id=com.lsimaocosta.decorebator",
    appStore: "#", // Placeholder for now
    icon: "/decorebator-icon.png",
    status: "completed"
  }
]

function ProjectCard({ project }: { project: Project }) {
  const statusColors = {
    completed: 'text-green-600 bg-green-100',
    'in-progress': 'text-blue-600 bg-blue-100',
    planned: 'text-orange-600 bg-orange-100'
  }

  return (
    <article className="bg-card rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow duration-200">
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
          {project.status.replace('-', ' ')}
        </span>
      </div>
      
      <p className="text-foreground-secondary mb-4">
        {project.description}
      </p>

      <div className="mb-6">
        <div className="space-y-1 text-sm">
          <p className="text-foreground-secondary">
            <span className="font-medium text-foreground">Backend:</span> Go with Gin, PostgreSQL (pgx/v5), River queue system
          </p>
          <p className="text-foreground-secondary">
            <span className="font-medium text-foreground">Mobile:</span> Expo, React Hook Form + Zod, TanStack Query, i18next, RevenueCat, PostHog
          </p>
          <p className="text-foreground-secondary">
            <span className="font-medium text-foreground">APIs & Services:</span> Digital Ocean, OpenAI, Stripe, RevenueCat, SendGrid, Redis, MinIO, Sentry, Datadog
          </p>
        </div>
      </div>
      
      <div className="pt-6 mt-4 border-t border-color flex items-center gap-4">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline flex items-center gap-1 text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
            Website
          </a>
        )}

        {project.playStore && (
          <a
            href={project.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline flex items-center gap-1 text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5c0 .6.4 1 1 1s1-.5 1-1V3.5c0-.6-.5-1-1-1s-1 .5-1 1v17zM20.5 9.5L5 1v22l15.5-8.5c.5-.3.5-.8 0-1l-.5-.5z"/>
            </svg>
            Play Store
          </a>
        )}

        {project.appStore && (
          <div className="flex flex-col items-start">
            <span className={`flex items-center gap-1 text-sm ${project.appStore === '#' ? 'text-muted cursor-not-allowed' : ''}`}>
              {project.appStore === '#' ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </>
              ) : (
                <a
                  href={project.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:underline flex items-center gap-1"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </a>
              )}
            </span>
            {project.appStore === '#' && (
              <span className="text-xs text-muted ml-5">(approval pending)</span>
            )}
          </div>
        )}
        
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline flex items-center gap-1 text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}

export default function ProjectsPage() {
  return (
    <div className="container">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4 lowercase">projects</h1>
        <p className="text-foreground-secondary text-lg">
          my playground
        </p>
      </div>

      <div className="max-w-4xl">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}