import type { Metadata } from 'next'
import { AboutContent } from '@/components/about/AboutContent'
import { aboutPageJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Lucas Simão — Staff Software Engineer at Bold.org. 10+ years building large-scale web and mobile products with React, Next.js, React Native, Node.js, Go, and PostgreSQL. Remote from Brazil.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About · Lucas Simão',
    description:
      'Staff Software Engineer with 10+ years building large-scale web and mobile products. Currently at Bold.org.',
    url: '/about',
    type: 'profile',
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <AboutContent />
    </>
  )
}
