import Link from 'next/link'
import { TagList } from './TagList'

interface PostCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
  tags?: string[]
  featured?: boolean
}

export function PostCard({ title, excerpt, date, slug, tags = [], featured = false }: PostCardProps) {
  if (featured) {
    // Edd style: Featured post with rounded corners and shadow
    return (
      <article className="bg-card rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow duration-200">
        <Link href={`/blog/${slug}`} className="block group">
          <time className="text-sm text-muted mb-2 block">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          
          <h2 className="text-xl font-bold mb-3 group-hover:text-link transition-colors">
            {title}
          </h2>
          
          <p className="text-foreground-secondary mb-4">
            {excerpt}
          </p>
          
          {tags.length > 0 && (
            <TagList tags={tags} />
          )}
        </Link>
      </article>
    )
  }

  // Ashley style: Simple post link with thin rules
  return (
    <article className="py-4 border-b border-color last:border-b-0">
      <Link href={`/blog/${slug}`} className="block group">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-medium group-hover:text-link transition-colors lowercase">
              {title}
            </h3>
            <p className="text-sm text-foreground-secondary mt-1">
              {excerpt}
            </p>
          </div>
          
          <time className="text-sm text-muted flex-shrink-0">
            {new Date(date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </time>
        </div>
        
        {tags.length > 0 && (
          <div className="mt-2">
            <TagList tags={tags} variant="ashley" />
          </div>
        )}
      </Link>
    </article>
  )
}