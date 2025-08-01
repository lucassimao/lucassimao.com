import Link from 'next/link'

interface PostLinkProps {
  title: string
  date: string
  slug: string
}

export function PostLink({ title, date, slug }: PostLinkProps) {
  return (
    <article className="py-3">
      <Link href={`/blog/${slug}`} className="flex items-center justify-between hover:text-link transition-colors group">
        <h3 className="font-medium">
          {title}
        </h3>
        <time className="text-sm text-muted flex-shrink-0 ml-4">
          {new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
        </time>
      </Link>
    </article>
  )
}