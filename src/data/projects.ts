import { Language } from '@/lib/i18n'

export interface Project {
  id: string
  title: string
  description: Record<Language, string>
  details?: Record<Language, string>
  technologies: string[]
  link?: string
  github?: string
  playStore?: string
  appStore?: string
  icon?: string
  status: 'completed' | 'in-progress' | 'planned' | 'retired'
  stack: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    id: 'decorebator-mcp',
    title: 'Decorebator MCP',
    description: {
      en: 'Vocabulary practice inside ChatGPT, with exercises and progress across conversations. A new tutor in development, built around a remote MCP server.',
      'pt-BR': 'Vocabulário no ChatGPT, com exercícios e progresso entre conversas. Um novo tutor em desenvolvimento, conectado por um servidor MCP remoto.',
    },
    details: {
      en: 'The scope includes shared progress across lists, varied exercises and persistent learning history. FSRS is proposed for scheduling reviews by skill, initially for personal use.',
      'pt-BR': 'O escopo inclui progresso compartilhado entre listas, exercícios variados e histórico persistente. A proposta usa FSRS para agendar revisões por habilidade, inicialmente para uso pessoal.',
    },
    technologies: ['MCP', 'TypeScript', 'Cloudflare', 'FSRS'],
    link: 'https://decorebator.com',
    status: 'in-progress',
    stack: [
      { label: 'MCP', value: 'ChatGPT, Streamable HTTP, OAuth' },
      { label: 'Backend', value: 'TypeScript, Cloudflare Workers, D1' },
      { label: 'Core', value: 'FSRS, pnpm workspaces, Vitest' },
    ],
  },
  {
    id: 'driftposts',
    title: 'DriftPosts',
    description: {
      en: 'Discover places through multilingual travel stories and an interactive map. An AI content pipeline connects video sources, destinations and travel guides.',
      'pt-BR': 'Descubra lugares por histórias de viagem em vários idiomas e um mapa interativo. Um pipeline de IA conecta vídeos, destinos e guias de viagem.',
    },
    details: {
      en: 'Astro and React on Vercel serve the public site. Cloudflare Workers, D1, R2, Queues and Containers power the backend, from ingestion and translation to publishing.',
      'pt-BR': 'Astro e React na Vercel servem o site público. Cloudflare Workers, D1, R2, Queues e Containers sustentam o backend, da ingestão e tradução à publicação.',
    },
    technologies: ['Astro', 'React', 'Cloudflare', 'AI SDK'],
    link: 'https://driftposts.com',
    status: 'completed',
    stack: [
      { label: 'Frontend', value: 'Astro, React, TypeScript, Vercel' },
      { label: 'Backend', value: 'Cloudflare Workers + Hono, D1 (SQLite), R2 (object storage), Cloudflare Containers' },
      { label: 'AI & data', value: 'Vercel AI SDK, OpenAI, Anthropic, Google Places' },
    ],
  },
  {
    id: 'decorebator',
    title: 'Decorebator',
    description: {
      en: 'The original vocabulary app: AI content and spaced repetition in 7 languages. Retired, with public source code preserving its history.',
      'pt-BR': 'O app original de vocabulário: conteúdo com IA e repetição espaçada em 7 idiomas. Encerrado, com código público preservando sua história.',
    },
    technologies: ['Go', 'React Native', 'Next.js', 'PostgreSQL', 'OpenAI API', 'Stripe', 'RevenueCat', 'Redis', 'Docker'],
    github: 'https://github.com/lucassimao/decorebator.com',
    icon: '/decorebator-icon.png',
    status: 'retired',
    stack: [
      { label: 'Backend', value: 'Go with Gin, PostgreSQL (pgx/v5), River queue system' },
      { label: 'Mobile', value: 'Expo, React Hook Form + Zod, TanStack Query, i18next, RevenueCat, PostHog' },
      { label: 'Services', value: 'DigitalOcean, OpenAI, Stripe, RevenueCat, SendGrid, Redis, MinIO, Sentry, Datadog' },
    ],
  },
]
