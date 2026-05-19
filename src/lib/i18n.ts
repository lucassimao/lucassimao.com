export type Language = 'en' | 'pt-BR'

export const DEFAULT_LANGUAGE: Language = 'en'
export const LANGUAGE_COOKIE = 'lang'

const translations = {
  en: {
    preferences: {
      language: 'language',
      theme: 'theme',
    },
    nav: {
      home: 'home',
      projects: 'projects',
      about: 'about',
    },
    hero: {
      greeting: 'hi,',
      nowLabel: 'Now',
      now: 'Shipping Aluga (private beta) after wrapping the DriftPosts move to Cloudflare.',
      columnOne: [
        "I'm a full-stack engineer who treats PostgreSQL like a personality trait and prefers code I won't have to write twice.",
        '10+ years shipping web products. Currently at Bold.org, fighting student debt one React component at a time.',
      ],
      columnTwo: [
        "More terminal than IDE. These days I orchestrate AI agents so I can stay focused on the work that actually matters.",
        "Outside the editor: two kids, a few side projects, math studies on Math Academy, and learning guitar — a healthy allergy to free time.",
      ],
      primaryCta: 'View projects',
      secondaryCta: 'About me',
      tertiaryCta: 'GitHub',
    },
    projects: {
      title: 'projects',
      subtitle: 'A mix of shipped products, side experiments, and work-in-progress.',
      ctas: {
        website: 'Website',
        playStore: 'Play Store',
        appStore: 'App Store',
      },
      statuses: {
        completed: 'shipped',
        'in-progress': 'in progress',
        planned: 'planned',
      },
    },
    about: {
      title: 'about',
      currentlyHeading: 'Currently',
      currently: [
        'Staff Software Engineer at Bold.org.',
        'Shipping Aluga (private beta) and migrating DriftPosts to Cloudflare.',
        'Studying math on Math Academy and learning guitar in the in-between.',
      ],
      toolsHeading: 'Daily toolkit',
      tools: [
        'TypeScript',
        'React',
        'Next.js',
        'React Native',
        'Expo',
        'Node.js',
        'Go',
        'PostgreSQL',
        'Redis',
        'AWS',
        'Cloudflare Workers',
        'D1 · R2',
        'Docker',
        'Terraform',
        'Sentry',
        'Datadog',
        'OpenAI',
        'Anthropic',
        'Claude Code',
      ],
      intro: [
        "I'm Lucas Simão, a full-stack engineer with 10+ years building large-scale web applications. Based in Teresina, Brazil, working remotely with teams around the world.",
      ],
      introWithLink: {
        before: "Currently a Staff Software Engineer at ",
        linkLabel: 'Bold.org',
        url: 'https://bold.org',
        after: ", where we use AWS, Node.js, and React to fight student debt at a platform serving hundreds of thousands of users daily. Before Bold I worked on AI-powered engineering marketplaces at Turing and performance platforms at Indeva by VTEX.",
      },
      techHeading: 'Tools I actually reach for',
      techSections: [
        {
          title: 'Frontend',
          body: "React and Next.js for product surfaces, TypeScript everywhere, Vitest/Jest to keep regressions honest.",
        },
        {
          title: 'Backend',
          body: "Started with Java, grew up on Node.js, and these days I lean on Go for performance-sensitive services. PostgreSQL for data, Redis for cache and queues.",
        },
        {
          title: 'Cloud & ops',
          body: "AWS is home base, with detours into GCP. Docker for everything, Terraform when infra needs to live in code, Datadog and Sentry to know what's actually happening.",
        },
        {
          title: 'AI',
          body: "Spending a lot of time on agent workflows lately — building copilots that plug into existing stacks instead of replacing them.",
        },
      ],
      experienceHeading: 'Experience',
      experiences: [
        {
          role: 'Staff Software Engineer',
          company: 'Bold.org',
          companyUrl: 'https://bold.org',
          timeline: 'Mar 2021 — Present',
          description: 'Building the scholarship platform that fights student debt for hundreds of thousands of users. AWS, Node.js, Express, PostgreSQL, React — fully remote.',
        },
        {
          role: 'Senior Software Engineer',
          company: 'Turing',
          timeline: 'Jul 2020 — Mar 2021',
          description: 'AI-powered talent marketplace matching pre-vetted engineers with Silicon Valley companies. Google Cloud, Node.js, NestJS, React.',
        },
        {
          role: 'Software Engineer',
          company: 'Indeva by VTEX',
          timeline: 'Feb 2019 — Jul 2020',
          description: 'Performance management SaaS for retail. Node.js, Ruby on Rails, React, GraphQL, PostgreSQL.',
        },
      ],
      connectHeading: 'Get in touch',
      connectDescription: "Always up for chatting about engineering, products, or interesting collaborations.",
      contactLinks: {
        email: 'Email',
        github: 'GitHub',
        twitter: 'Twitter',
      },
    },
    footer: {
      builtWith: 'Lucas Simão. Built with Next.js and Tailwind CSS.',
    },
  },
  'pt-BR': {
    preferences: {
      language: 'idioma',
      theme: 'tema',
    },
    nav: {
      home: 'início',
      projects: 'projetos',
      about: 'sobre',
    },
    hero: {
      greeting: 'oi,',
      nowLabel: 'Agora',
      now: 'Lançando o Aluga (beta fechado) depois de fechar a migração do DriftPosts para Cloudflare.',
      columnOne: [
        'Sou engenheiro full-stack que trata PostgreSQL como traço de personalidade e prefere código que não precisa escrever duas vezes.',
        'Há mais de 10 anos entregando produtos web. Atualmente na Bold.org, combatendo a dívida estudantil um componente React por vez.',
      ],
      columnTwo: [
        'Sou mais de terminal do que de IDE. Hoje oriento agentes de IA para manter o foco no que realmente importa.',
        'Fora do editor: dois filhos, alguns projetos paralelos, estudos de matemática no Math Academy e aprendendo violão — uma alergia saudável a tempo livre.',
      ],
      primaryCta: 'Ver projetos',
      secondaryCta: 'Sobre mim',
      tertiaryCta: 'GitHub',
    },
    projects: {
      title: 'projetos',
      subtitle: 'Uma mistura de produtos lançados, experimentos paralelos e trabalhos em andamento.',
      ctas: {
        website: 'Website',
        playStore: 'Play Store',
        appStore: 'App Store',
      },
      statuses: {
        completed: 'lançado',
        'in-progress': 'em andamento',
        planned: 'planejado',
      },
    },
    about: {
      title: 'sobre',
      currentlyHeading: 'Agora',
      currently: [
        'Staff Software Engineer na Bold.org.',
        'Lançando o Aluga (beta fechado) e tocando os próximos passos do DriftPosts já 100% em Cloudflare.',
        'Estudando matemática no Math Academy e aprendendo violão nas horas vagas.',
      ],
      toolsHeading: 'Stack do dia a dia',
      tools: [
        'TypeScript',
        'React',
        'Next.js',
        'React Native',
        'Expo',
        'Node.js',
        'Go',
        'PostgreSQL',
        'Redis',
        'AWS',
        'Cloudflare Workers',
        'D1 · R2',
        'Docker',
        'Terraform',
        'Sentry',
        'Datadog',
        'OpenAI',
        'Anthropic',
        'Claude Code',
      ],
      intro: [
        'Sou Lucas Simão, engenheiro full-stack com mais de 10 anos construindo aplicações web em larga escala. Moro em Teresina, Brasil, e trabalho remotamente com times do mundo todo.',
      ],
      introWithLink: {
        before: 'Hoje sou Staff Software Engineer na ',
        linkLabel: 'Bold.org',
        url: 'https://bold.org',
        after: ', onde usamos AWS, Node.js e React para combater a dívida estudantil em uma plataforma que atende centenas de milhares de usuários diariamente. Antes da Bold, trabalhei em marketplaces de engenharia com IA na Turing e em plataformas de performance na Indeva by VTEX.',
      },
      techHeading: 'Ferramentas que realmente uso',
      techSections: [
        {
          title: 'Frontend',
          body: 'React e Next.js para superfícies de produto, TypeScript em todo lugar e Vitest/Jest para evitar regressões.',
        },
        {
          title: 'Backend',
          body: 'Comecei com Java, cresci no Node.js e hoje uso bastante Go para serviços performáticos. PostgreSQL para dados, Redis para cache e filas.',
        },
        {
          title: 'Cloud e operações',
          body: 'AWS é a base, com passagens por GCP. Docker para tudo, Terraform quando a infra precisa virar código, Datadog e Sentry para enxergar o que está acontecendo.',
        },
        {
          title: 'IA',
          body: 'Tenho focado em workflows de agentes — copilotos que se integram ao stack existente em vez de substituí-lo.',
        },
      ],
      experienceHeading: 'Experiência',
      experiences: [
        {
          role: 'Staff Software Engineer',
          company: 'Bold.org',
          companyUrl: 'https://bold.org',
          timeline: 'Mar 2021 — Atual',
          description: 'Construindo a plataforma de bolsas que combate a dívida estudantil para centenas de milhares de usuários. AWS, Node.js, Express, PostgreSQL e React, 100% remoto.',
        },
        {
          role: 'Senior Software Engineer',
          company: 'Turing',
          timeline: 'Jul 2020 — Mar 2021',
          description: 'Marketplace de talentos com IA conectando engenheiros pré-selecionados a empresas do Vale do Silício. Google Cloud, Node.js, NestJS, React.',
        },
        {
          role: 'Software Engineer',
          company: 'Indeva by VTEX',
          timeline: 'Fev 2019 — Jul 2020',
          description: 'SaaS de gestão de performance para o varejo. Node.js, Ruby on Rails, React, GraphQL e PostgreSQL.',
        },
      ],
      connectHeading: 'Vamos conversar',
      connectDescription: 'Sempre aberto para conversar sobre engenharia, produtos ou colaborações interessantes.',
      contactLinks: {
        email: 'Email',
        github: 'GitHub',
        twitter: 'Twitter',
      },
    },
    footer: {
      builtWith: 'Lucas Simão. Construído com Next.js e Tailwind CSS.',
    },
  },
} as const

export type Translations = (typeof translations)[Language]

export function getDictionary(language: Language = DEFAULT_LANGUAGE): Translations {
  return translations[language] ?? translations[DEFAULT_LANGUAGE]
}

export function isLanguage(value: unknown): value is Language {
  return value === 'en' || value === 'pt-BR'
}

export function normalizeLanguage(value?: string | null): Language {
  if (isLanguage(value)) {
    return value
  }
  return DEFAULT_LANGUAGE
}
