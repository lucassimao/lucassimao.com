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
  stack: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    title: 'Aluga',
    description: {
      en: 'Rental management for small landlords in Brazil — track tenants, leases, payments, and overdue rents from your phone. Currently in private beta, shipping soon.',
      'pt-BR': 'Gestão de aluguéis para pequenos proprietários no Brasil — acompanhe inquilinos, contratos, pagamentos e atrasos pelo celular. Em beta fechado, lançamento em breve.',
    },
    technologies: ['Expo', 'React Native', 'Cloudflare Workers', 'Hono', 'D1', 'Drizzle', 'Clerk', 'TanStack Query'],
    status: 'in-progress',
    stack: [
      { label: 'Mobile', value: 'Expo 55, React Native, Expo Router, TanStack Query, Clerk' },
      { label: 'Backend', value: 'Cloudflare Workers, Hono, Drizzle ORM, D1 (SQLite at the edge)' },
      { label: 'Services', value: 'Clerk auth, Sentry, Expo IAP, Apple/Google Sign-in' },
    ],
  },
  {
    title: 'DriftPosts',
    description: {
      en: 'AI-powered travel content platform that publishes multilingual blog posts at scale, with SEO-optimized structure and rich image enrichment. Fully automated content pipeline — ingestion, generation, translation, and publishing. Originally ran on a Hetzner VPS with Coolify and Supabase; recently re-platformed end-to-end onto Cloudflare (Workers, D1, R2, Containers) for global edge delivery and lower ops overhead.',
      'pt-BR': 'Plataforma de conteúdo de viagem com IA que publica posts multilíngues em escala, com estrutura otimizada para SEO e enriquecimento de imagens. Pipeline totalmente automatizado — da ingestão à publicação. Originalmente rodava em VPS na Hetzner com Coolify e Supabase; recentemente migrei toda a stack para Cloudflare (Workers, D1, R2, Containers) para entrega global no edge e menor sobrecarga operacional.',
    },
    technologies: ['Astro', 'React', 'TypeScript', 'Cloudflare Workers', 'Hono', 'D1', 'R2', 'Vercel AI SDK', 'OpenAI', 'Anthropic'],
    link: 'https://driftposts.com',
    status: 'completed',
    stack: [
      { label: 'Frontend', value: 'Astro + React islands, Astro Content Layer, TypeScript' },
      { label: 'Backend', value: 'Cloudflare Workers + Hono, D1 (SQLite), R2 (object storage), Cloudflare Containers' },
      { label: 'AI & data', value: 'Vercel AI SDK, OpenAI, Anthropic, Google Places' },
    ],
  },
  {
    title: 'Decorebator',
    description: {
      en: 'AI-powered vocabulary app combining advanced LLMs with the Leitner spaced repetition system. AI-generated definitions, images, and audio across 7 languages, 8 quiz modes, and full analytics.',
      'pt-BR': 'App de vocabulário com IA que combina LLMs avançados com o sistema Leitner de repetição espaçada. Definições, imagens e áudios em 7 idiomas, 8 modos de quiz e análises completas.',
    },
    technologies: ['Go', 'React Native', 'Next.js', 'PostgreSQL', 'OpenAI API', 'Stripe', 'RevenueCat', 'Redis', 'Docker'],
    link: 'https://decorebator.com',
    playStore: 'https://play.google.com/store/apps/details?id=com.lsimaocosta.decorebator',
    appStore: 'https://apps.apple.com/app/decorebator/id6749329064',
    icon: '/decorebator-icon.png',
    status: 'completed',
    stack: [
      { label: 'Backend', value: 'Go with Gin, PostgreSQL (pgx/v5), River queue system' },
      { label: 'Mobile', value: 'Expo, React Hook Form + Zod, TanStack Query, i18next, RevenueCat, PostHog' },
      { label: 'Services', value: 'DigitalOcean, OpenAI, Stripe, RevenueCat, SendGrid, Redis, MinIO, Sentry, Datadog' },
    ],
  },
  {
    title: 'Calculadora Price & SAC',
    description: {
      en: 'A focused Brazilian-market mobile app for amortization tables — compare Price and SAC systems for any loan, export schedules, and run scenarios offline.',
      'pt-BR': 'App mobile focado no mercado brasileiro para tabelas de amortização — compare os sistemas Price e SAC, exporte cronogramas e simule cenários offline.',
    },
    technologies: ['Expo', 'React Native', 'Next.js', 'TypeScript', 'EAS'],
    link: 'https://www.calculadorapricesac.com.br/',
    appStore: 'https://apps.apple.com/app/calculadora-sac-price/id6757717537',
    status: 'completed',
    stack: [
      { label: 'Mobile', value: 'Expo 54, React Native, Expo Router, expo-iap, Sentry' },
      { label: 'Marketing', value: 'Next.js, TypeScript, Vercel Analytics' },
      { label: 'Distribution', value: 'EAS Build, EAS Update, Google Play, Maestro UI tests' },
    ],
  },
]
