export const SITE_URL = 'https://lucassimao.com'

export const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${SITE_URL}/about`,
  name: 'About · Lucas Simão',
  mainEntity: {
    '@type': 'Person',
    name: 'Lucas Simão',
    url: SITE_URL,
    jobTitle: 'Staff Software Engineer',
    worksFor: { '@type': 'Organization', name: 'Bold.org', url: 'https://bold.org' },
  },
}

export function projectsListJsonLd(
  items: { name: string; description: string; url?: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    url: `${SITE_URL}/projects`,
    name: 'Projects by Lucas Simão',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: item.name,
        description: item.description,
        ...(item.url ? { url: item.url } : {}),
        author: { '@type': 'Person', name: 'Lucas Simão', url: SITE_URL },
      },
    })),
  }
}

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lucas Simão',
  alternateName: 'Lucas Simão Costa',
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  jobTitle: 'Staff Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Bold.org',
    url: 'https://bold.org',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Teresina',
    addressRegion: 'PI',
    addressCountry: 'BR',
  },
  email: 'mailto:lucas@lucassimao.com',
  sameAs: [
    'https://github.com/lucassimao',
    'https://x.com/lsimaocosta',
  ],
  knowsAbout: [
    'Full-stack web development',
    'React',
    'Next.js',
    'React Native',
    'TypeScript',
    'Node.js',
    'Go',
    'PostgreSQL',
    'AWS',
    'Cloudflare Workers',
    'AI agents',
    'Large language models',
    'Distributed systems',
  ],
  description:
    'Full-stack engineer with 10+ years of experience building large-scale web and mobile applications. Currently Staff Software Engineer at Bold.org.',
}
