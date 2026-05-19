import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="shell py-24 text-center">
      <p className="text-xs font-medium uppercase tracking-wider text-muted mb-4">
        404
      </p>
      <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
        Nothing here.
      </h1>
      <p className="text-foreground-secondary mb-8">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center px-5 py-2.5 bg-foreground text-background rounded-lg hover:bg-foreground-secondary transition-colors text-sm font-medium"
        >
          Go home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center px-5 py-2.5 border border-border/60 text-foreground hover:bg-background-secondary transition-colors text-sm font-medium rounded-lg"
        >
          See projects
        </Link>
      </div>
    </div>
  )
}
