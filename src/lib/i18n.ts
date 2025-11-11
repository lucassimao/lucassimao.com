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
      consulting: 'consulting',
      blog: 'blog',
      projects: 'projects',
      about: 'about',
      cta: 'hire me',
    },
    hero: {
      greeting: 'Hi,',
      columnOne: [
        'I am a full-stack engineer who thinks PostgreSQL is a personality trait and believes the best code is the one you don\'t have to write twice.',
        '10+ years turning caffeine into scalable applications. Currently at Bold.org, fighting student debt one React component at a time.',
      ],
      columnTwo: [
        "More of a terminal guy than an IDE person. These days, I'm taming AI agents to accelerate delivery while I stay focused on the important stuff.",
        "When I'm not writing code, I'm enjoying time with my two kids and bootstrapping side projects — apparently I'm allergic to free time.",
      ],
      primaryCta: 'Read my thoughts',
      secondaryCta: 'View projects',
      tertiaryCta: 'GitHub',
    },
    home: {
      recentThoughts: 'Recent thoughts',
      viewAllPosts: 'View all posts →',
      emptyState: 'No posts yet. Check back soon for thoughts on development and technology.',
    },
    blog: {
      title: 'all thoughts',
      description: 'Ideas, learnings, and insights from my journey as a developer.',
      emptyState: 'No posts yet. Check back soon for thoughts on development and technology.',
      backToAllPosts: 'Back to all posts',
      sharePost: 'Share this post',
    },
    projects: {
      title: 'projects',
      subtitle: 'my playground',
      stackLabels: {
        backend: 'Backend',
        mobile: 'Mobile',
        services: 'APIs & Services',
      },
      ctas: {
        website: 'Website',
        playStore: 'Play Store',
        appStore: 'App Store',
      },
      statuses: {
        completed: 'completed',
        'in-progress': 'in progress',
        planned: 'planned',
      },
    },
    consulting: {
      title: 'consulting',
      intro: [
        'I partner with founders and CTOs to unblock roadmaps, modernize legacy stacks, and ship complex initiatives when you cannot wait to hire a full team.',
        'Whether you need a full-stack engineer embedded with your team, an architecture audit, or someone to lead AI initiatives, I bring a pragmatic playbook shaped by a decade of shipping at start-up speed.',
      ],
      servicesHeading: 'How I can help',
      services: [
        {
          title: 'Full-stack Engineer',
          description: 'Jump into your product squads to own shipping, unblock architecture decisions, and raise the quality bar through pairing and reviews.',
          outcomes: ['Hands-on delivery momentum', 'Stronger rituals and engineering standards'],
        },
        {
          title: 'Platform/Architecture',
          description: 'Deep dive into your backend, infra, and DX to surface bottlenecks, security gaps, and cost-saving opportunities.',
          outcomes: ['Architectural roadmap with prioritized fixes', 'Actionable guidance for the next 90 days'],
        },
        {
          title: 'AI Automation',
          description: 'Introduce AI into your business by turning repetitive workflows into copilots or automations that plug into your existing stack.',
          outcomes: ['Working prototype in 2-4 weeks', 'Clear path to production readiness'],
        },
      ],
      valueHeading: 'What you get',
      values: [
        '10+ years shipping worldwide products across Bold.org, Turing, VTEX, and startups.',
        'Opinionated but collaborative approach focused on measurable impact.',
        'Documentation, playbooks, and hiring support to keep momentum after engagement ends.',
      ],
      stackHeading: 'Expertise & stack',
      stackIntro: 'Here is the toolkit I reach for when building resilient products:',
      stack: [
        { category: 'Frontend', tools: ['React', 'Next.js', 'React Native', 'Expo', 'TypeScript', 'Tailwind'] },
        { category: 'Backend', tools: ['Go', 'Node.js', 'PostgreSQL', 'Redis', 'oRPC', 'MySQL'] },
        { category: 'Infra & Ops', tools: ['AWS', 'GCP', 'DigitalOcean', 'Docker', 'Terraform', 'Datadog', 'Sentry'] },
        { category: 'AI & Data', tools: ['OpenAI API', 'LangChain', 'Anthropic', 'LlamaIndex', 'Pinecone'] },
      ],
      cta: {
        title: 'Need an engineering force multiplier?',
        description: 'Tell me about your roadmap and we will design an engagement that fits your stage and budget.',
        primaryLabel: 'Book a call',
        secondaryLabel: 'Send an email',
      },
    },
    about: {
      title: 'about me',
      intro: [
        "I'm Lucas Simão, a full-stack software engineer with over 10 years of experience creating large-scale software applications. Based in Teresina, Brazil, I've worked remotely with teams across the globe to build impactful solutions.",
      ],
      introWithLink: {
        before: "Currently, I'm a Staff Software Engineer at ",
        linkLabel: 'Bold.org',
        url: 'https://bold.org',
        after: ', where our team leverages AWS, Node.js, and React to fight student debt through a platform that serves hundreds of thousands of users daily. Previously, I\'ve contributed to AI-powered engineering marketplaces at Turing and performance management platforms at Indeva.',
      },
      techHeading: 'The tech I actually use',
      techSections: [
        {
          title: 'Frontend vibes',
          body: "React is my bread and butter. Next.js for when I need the full toolkit. Jest and Vitest keep me honest about my code. TypeScript because who doesn't love knowing their types at 3am?",
        },
        {
          title: 'Backend adventures',
          body: "Started with Java (those were the days), evolved through Node.js and Express, and now I'm having a love affair with Go. PostgreSQL for when I need things to actually work, Redis for when I need them to work fast.",
        },
        {
          title: 'Cloud shenanigans',
          body: "AWS is home base, though I've spent quality time with Google Cloud too. Docker containers everywhere, Kubernetes when things get serious. I automate everything because I'm too lazy to do it twice.",
        },
        {
          title: 'The truth about databases',
          body: "PostgreSQL is my ride or die. Tried MongoDB once when schemas felt restrictive - turns out I actually like knowing where my data lives. Redis for caching and queues. Have touched Oracle, still recovering from that experience.",
        },
      ],
      experienceHeading: 'Professional experience',
      experiences: [
        {
          role: 'Staff Software Engineer',
          company: 'Bold.org',
          companyUrl: 'https://bold.org',
          timeline: 'March 2021 - Present',
          description: 'Building a platform to fight student debt, serving hundreds of thousands of users daily. Working with AWS, Node.js, Express.js, PostgreSQL, and React in a fully remote environment.',
        },
        {
          role: 'Senior Software Engineer',
          company: 'Turing',
          timeline: 'July 2020 - March 2021',
          description: 'Developed AI-powered labor marketplace connecting pre-vetted engineers with Silicon Valley companies. Used Google Cloud, Node.js, NestJS, and React.',
        },
        {
          role: 'Software Engineer',
          company: 'Indeva by VTEX',
          timeline: 'February 2019 - July 2020',
          description: 'Built performance management SaaS platform for retail professionals using Node.js, Ruby on Rails, React, GraphQL, and PostgreSQL.',
        },
      ],
      connectHeading: "Let's connect",
      connectDescription: "I'm always interested in connecting with fellow developers, discussing new ideas, or collaborating on interesting projects.",
      contactLinks: {
        email: 'Email me',
        github: 'GitHub',
        twitter: 'Twitter',
      },
    },
    footer: {
      builtWith: 'Lucas Simão. Built with Next.js, Tailwind CSS, and OpenAI Codex.',
    },
  },
  'pt-BR': {
    preferences: {
      language: 'idioma',
      theme: 'tema',
    },
    nav: {
      home: 'início',
      consulting: 'consultoria',
      blog: 'blog',
      projects: 'projetos',
      about: 'sobre',
      cta: 'vamos conversar',
    },
    hero: {
      greeting: 'Oi,',
      columnOne: [
        'Sou um engenheiro full-stack especializado em sistemas confiáveis e escaláveis, sempre em busca de soluções simples e duradouras.',
        'Há mais de 10 anos transformando cafeína em aplicações escaláveis. Atualmente na Bold.org, combatendo a dívida estudantil um componente React por vez.',
      ],
      columnTwo: [
        'Sou mais fã de terminal do que de IDE. Hoje utilizo agentes de IA para acelerar entregas e manter o foco nos resultados estratégicos.',
        'Quando não estou programando, estou curtindo meus dois filhos e tocando projetos paralelos — aparentemente sou alérgico a tempo livre.',
      ],
      primaryCta: 'Leia minhas ideias',
      secondaryCta: 'Veja os projetos',
      tertiaryCta: 'GitHub',
    },
    home: {
      recentThoughts: 'Últimos pensamentos',
      viewAllPosts: 'Ver todos os posts →',
      emptyState: 'Ainda não há posts. Volte em breve para novas ideias sobre desenvolvimento e tecnologia.',
    },
    blog: {
      title: 'todas as ideias',
      description: 'Ideias, aprendizados e insights da minha jornada como desenvolvedor.',
      emptyState: 'Ainda não há posts. Volte em breve para novas ideias sobre desenvolvimento e tecnologia.',
      backToAllPosts: 'Voltar para todos os posts',
      sharePost: 'Compartilhe este post',
    },
    projects: {
      title: 'projetos',
      subtitle: 'meu laboratório',
      stackLabels: {
        backend: 'Backend',
        mobile: 'Mobile',
        services: 'APIs e Serviços',
      },
      ctas: {
        website: 'Website',
        playStore: 'Play Store',
        appStore: 'App Store',
      },
      statuses: {
        completed: 'concluído',
        'in-progress': 'em andamento',
        planned: 'planejado',
      },
    },
    consulting: {
      title: 'consultoria',
      intro: [
        'Trabalho com fundadores e CTOs para destravar roadmaps, modernizar stacks legadas e entregar iniciativas complexas quando não dá para esperar montar um time inteiro.',
        'Seja atuando como engenheiro full-stack, revisando arquitetura ou liderando iniciativas de IA, aplico um playbook pragmático lapidado em mais de uma década construindo em ritmo de startup.',
      ],
      servicesHeading: 'Como posso ajudar',
      services: [
        {
          title: 'Engenheiro Full-stack',
          description: 'Atuo dentro do seu time para liderar decisões de arquitetura, codar trilhas críticas e elevar o nível com pairing e code review.',
          outcomes: ['Entrega prática e contínua', 'Processos e padrões de engenharia mais fortes'],
        },
        {
          title: 'Plataforma/Arquitetura',
          description: 'Mergulho em backend, infraestrutura e DX para identificar gargalos, riscos de segurança e oportunidades de redução de custos.',
          outcomes: ['Roadmap arquitetural com prioridades claras', 'Guia acionável para os próximos 90 dias'],
        },
        {
          title: 'Automação com IA',
          description: 'Introduzo IA no seu negócio transformando rotinas operacionais em copilotos e automações que se conectam ao stack atual.',
          outcomes: ['Protótipo funcional em 2-4 semanas', 'Plano para chegar em produção com segurança'],
        },
      ],
      valueHeading: 'O que você recebe',
      values: [
        'Mais de 10 anos entregando produtos globais em Bold.org, Turing, VTEX e startups.',
        'Abordagem opinativa porém colaborativa, focada em impacto mensurável.',
        'Documentação, playbooks e apoio em contratação para manter o ritmo após a parceria.',
      ],
      stackHeading: 'Especialidades e stack',
      stackIntro: 'Estas são as ferramentas que uso para construir produtos resilientes:',
      stack: [
        { category: 'Frontend', tools: ['React', 'Next.js', 'React Native', 'Expo', 'TypeScript', 'Tailwind'] },
        { category: 'Backend', tools: ['Go', 'Node.js', 'PostgreSQL', 'Redis', 'oRPC', 'MySQL'] },
        { category: 'Infra & Ops', tools: ['AWS', 'GCP', 'DigitalOcean', 'Docker', 'Terraform', 'Datadog', 'Sentry'] },
        { category: 'IA & Dados', tools: ['OpenAI API', 'LangChain', 'Anthropic', 'LlamaIndex', 'Pinecone'] },
      ],
      cta: {
        title: 'Precisa acelerar sua engenharia?',
        description: 'Conte sobre sua estratégia e montamos um formato de parceria adequado ao seu estágio e orçamento.',
        primaryLabel: 'Agendar conversa',
        secondaryLabel: 'Enviar e-mail',
      },
    },
    about: {
      title: 'sobre mim',
      intro: [
        'Sou Lucas Simão, engenheiro de software full-stack com mais de 10 anos criando aplicações em larga escala. Moro em Teresina, Brasil, e já colaborei remotamente com equipes no mundo todo para entregar soluções de impacto.',
      ],
      introWithLink: {
        before: 'Hoje atuo como Staff Software Engineer na ',
        linkLabel: 'Bold.org',
        url: 'https://bold.org',
        after: ', onde usamos AWS, Node.js e React para combater a dívida estudantil em uma plataforma que atende centenas de milhares de usuários diariamente. Antes disso, contribui com marketplaces de engenharia baseados em IA na Turing e com plataformas de gestão de performance na Indeva.',
      },
      techHeading: 'As tecnologias que realmente uso',
      techSections: [
        {
          title: 'Frontend',
          body: 'React e Next.js são minha base para experiências ricas no navegador. Combino TypeScript com Jest/Vitest para garantir previsibilidade e cobertura desde o primeiro commit.',
        },
        {
          title: 'Backend',
          body: 'Trabalhei com Java e Node.js, mas hoje priorizo Go para serviços performáticos. PostgreSQL sustenta os dados e Redis cobre cache e filas conforme a demanda.',
        },
        {
          title: 'Cloud e operações',
          body: 'AWS é meu ambiente principal, com passagens por GCP. Estruturo infraestrutura com Docker e Terraform, recorro a Kubernetes quando a escala pede e mantenho observabilidade com Datadog e Sentry.',
        },
        {
          title: 'Bancos de dados',
          body: 'PostgreSQL é o banco que mais utilizo, mas também já implementei Redis, MySQL, MongoDB e Oracle em diferentes contextos, sempre com foco em governança e confiabilidade.',
        },
      ],
      experienceHeading: 'Experiência profissional',
      experiences: [
        {
          role: 'Staff Software Engineer',
          company: 'Bold.org',
          companyUrl: 'https://bold.org',
          timeline: 'Março 2021 - Atual',
          description: 'Construindo uma plataforma que combate a dívida estudantil e atende centenas de milhares de usuários diariamente. Trabalho com AWS, Node.js, Express.js, PostgreSQL e React em um ambiente 100% remoto.',
        },
        {
          role: 'Senior Software Engineer',
          company: 'Turing',
          timeline: 'Julho 2020 - Março 2021',
          description: 'Desenvolvi marketplace de talentos com IA conectando engenheiros pré-selecionados a empresas do Vale do Silício. Usei Google Cloud, Node.js, NestJS e React.',
        },
        {
          role: 'Software Engineer',
          company: 'Indeva by VTEX',
          timeline: 'Fevereiro 2019 - Julho 2020',
          description: 'Construí plataforma SaaS de gestão de performance para varejo usando Node.js, Ruby on Rails, React, GraphQL e PostgreSQL.',
        },
      ],
      connectHeading: 'Vamos nos conectar',
      connectDescription: 'Estou sempre aberto para conversar com outros devs, discutir novas ideias ou colaborar em projetos interessantes.',
      contactLinks: {
        email: 'Envie um email',
        github: 'GitHub',
        twitter: 'Twitter',
      },
    },
    footer: {
      builtWith: 'Lucas Simão. Construído com Next.js, Tailwind CSS e OpenAI Codex.',
    },
  },
} as const

export type Translations = typeof translations.en

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
