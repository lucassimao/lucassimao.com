'use client'

import type { Post } from '@/lib/posts'
import { useTranslations } from '@/components/language/LanguageProvider'
import { PostCard } from '@/components/blog/PostCard'

interface Props {
  posts: Post[]
}

export function BlogListing({ posts }: Props) {
  const { blog } = useTranslations()

  return (
    <div className="container">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4 lowercase">{blog.title}</h1>
        <p className="text-foreground-secondary text-lg">
          {blog.description}
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="space-y-6">
          <PostCard {...posts[0]} featured />

          {posts.length > 1 && (
            <div className="space-y-2">
              {posts.slice(1).map((post) => (
                <PostCard key={post.slug} {...post} featured={false} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-foreground-secondary">
            {blog.emptyState}
          </p>
        </div>
      )}
    </div>
  )
}
