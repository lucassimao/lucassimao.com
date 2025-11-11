import { Language } from '@/lib/i18n'

export interface Project {
  title: string
  description: Record<Language, string>
  technologies: string[]
  link?: string
  github?: string
  playStore?: string
  appStore?: string
  icon?: string
  status: 'completed' | 'in-progress' | 'planned'
  stackDetails: {
    backend: string
    mobile: string
    services: string
  }
}

export const projects: Project[] = [
  {
    title: 'Decorebator',
    description: {
      en: 'AI-powered vocabulary learning mobile app that combines advanced artificial intelligence with the scientifically-proven Leitner spaced repetition system. Features AI-generated definitions, images, and audio across 7 languages, with 8 interactive quiz modes and comprehensive analytics.',
      'pt-BR': 'Aplicativo móvel de vocabulário com IA que combina inteligência artificial com o sistema Leitner de repetição espaçada. Traz definições, imagens e áudios gerados por IA em 7 idiomas, 8 modos de quiz e análises completas.',
    },
    technologies: ['Go', 'React Native', 'Next.js', 'PostgreSQL', 'OpenAI API', 'Stripe', 'RevenueCat', 'Redis', 'Docker'],
    link: 'https://decorebator.com',
    playStore: 'https://play.google.com/store/apps/details?id=com.lsimaocosta.decorebator',
    appStore: 'https://apps.apple.com/app/decorebator/id6749329064',
    icon: '/decorebator-icon.png',
    status: 'completed',
    stackDetails: {
      backend: 'Go with Gin, PostgreSQL (pgx/v5), River queue system',
      mobile: 'Expo, React Hook Form + Zod, TanStack Query, i18next, RevenueCat, PostHog',
      services: 'Digital Ocean, OpenAI, Stripe, RevenueCat, SendGrid, Redis, MinIO, Sentry, Datadog',
    },
  },
]
