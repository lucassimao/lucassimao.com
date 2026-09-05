export type Language = 'en' | 'pt-BR'

export const DEFAULT_LANGUAGE: Language = 'en'
export const LANGUAGE_COOKIE = 'lang'

const translations = {
  en: {
    preferences: {
      language: 'language',
      theme: 'Toggle dark theme',
      navigation: 'Main navigation',
      skip: 'Skip to content',
    },
    nav: {
      home: 'home',
      projects: 'projects',
      about: 'about',
    },
    hero: {
      location: 'Teresina, Brazil / Remote',
      greeting: 'Hi, I’m Lucas.',
      role: 'Staff Software Engineer. Product builder.',
      intro: '10+ years turning complex problems into web and mobile products. Currently at Bold.org, working remotely from Brazil.',
      selected: 'Selected work',
      selectedNote: 'Things I build, explore and keep improving.',
      personal: 'Away from the keyboard: two kids, Math Academy and a guitar. Still treating PostgreSQL as a personality trait.',
      nowLabel: 'Now',
      now: 'Building DriftPosts and Decorebator MCP.',
      primaryCta: 'View projects',
      secondaryCta: 'About me',
      tertiaryCta: 'GitHub',
    },
    projects: {
      title: 'projects',
      subtitle: 'From an idea to something you can use. A selection of my independent work.',
      live: 'Available now',
      building: 'In development',
      archive: 'From the archive',
      archiveNote: 'Retired products, preserved through their code.',
      details: 'Technical details',
      proposed: 'Scope & architecture',
      view: 'Explore project',
      source: 'Source code',
      preview: 'Proposed learning flow',
      flow: ['Save words', 'Practice in chat', 'Review over time'],
      screenshot: 'DriftPosts homepage with a travel story and destination discovery',
      stackLabels: { Frontend: 'Frontend', Backend: 'Backend', Mobile: 'Mobile', Services: 'Services', Core: 'Core', MCP: 'MCP', 'AI & data': 'AI & data' },
      ctas: {
        website: 'Visit site',
        playStore: 'Play Store',
        appStore: 'App Store',
      },
      statuses: {
        completed: 'shipped',
        'in-progress': 'in progress',
        planned: 'planned',
        retired: 'retired',
      },
    },
    about: {
      title: 'about',
      currentlyHeading: 'Currently',
      currently: [
        'Staff Software Engineer at Bold.org.',
        'Building DriftPosts and Decorebator MCP.',
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
      experienceHeading: 'Experience',
      experiences: [
        {
          role: 'Staff Software Engineer',
          company: 'Bold.org',
          companyUrl: 'https://bold.org',
          timeline: 'Mar 2021 — Present',
          description: 'Building the scholarship platform that fights student debt for hundreds of thousands of users. Full-stack engineering across the web platform.',
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
      theme: 'Alternar tema escuro',
      navigation: 'Navegação principal',
      skip: 'Pular para o conteúdo',
    },
    nav: {
      home: 'início',
      projects: 'projetos',
      about: 'sobre',
    },
    hero: {
      location: 'Teresina, Brasil / Remoto',
      greeting: 'Oi, sou Lucas.',
      role: 'Staff Software Engineer. Criador de produtos.',
      intro: 'Há mais de 10 anos transformando problemas complexos em produtos web e mobile. Hoje na Bold.org, trabalhando remotamente do Brasil.',
      selected: 'Projetos selecionados',
      selectedNote: 'Coisas que construo, exploro e continuo melhorando.',
      personal: 'Fora do teclado: dois filhos, Math Academy e um violão. Ainda tratando PostgreSQL como traço de personalidade.',
      nowLabel: 'Agora',
      now: 'Desenvolvendo DriftPosts e Decorebator MCP.',
      primaryCta: 'Ver projetos',
      secondaryCta: 'Sobre mim',
      tertiaryCta: 'GitHub',
    },
    projects: {
      title: 'projetos',
      subtitle: 'Da ideia a algo que você pode usar. Uma seleção dos meus projetos independentes.',
      live: 'Disponíveis',
      building: 'Em desenvolvimento',
      archive: 'Do arquivo',
      archiveNote: 'Produtos encerrados, preservados pelo código.',
      details: 'Detalhes técnicos',
      proposed: 'Escopo e arquitetura',
      view: 'Conhecer projeto',
      source: 'Código-fonte',
      preview: 'Fluxo de aprendizado proposto',
      flow: ['Salvar palavras', 'Praticar no chat', 'Revisar com o tempo'],
      screenshot: 'Página inicial do DriftPosts com uma história de viagem e descoberta de destinos',
      stackLabels: { Frontend: 'Frontend', Backend: 'Backend', Mobile: 'Mobile', Services: 'Serviços', Core: 'Núcleo', MCP: 'MCP', 'AI & data': 'IA e dados' },
      ctas: {
        website: 'Visitar site',
        playStore: 'Play Store',
        appStore: 'App Store',
      },
      statuses: {
        completed: 'lançado',
        'in-progress': 'em andamento',
        planned: 'planejado',
        retired: 'encerrado',
      },
    },
    about: {
      title: 'sobre',
      currentlyHeading: 'Agora',
      currently: [
        'Staff Software Engineer na Bold.org.',
        'Desenvolvendo DriftPosts e Decorebator MCP.',
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
      experienceHeading: 'Experiência',
      experiences: [
        {
          role: 'Staff Software Engineer',
          company: 'Bold.org',
          companyUrl: 'https://bold.org',
          timeline: 'Mar 2021 — Atual',
          description: 'Construindo a plataforma de bolsas que combate a dívida estudantil para centenas de milhares de usuários. Engenharia full-stack na plataforma web.',
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
