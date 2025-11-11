'use client'

import Link from 'next/link'
import type { Post } from '@/lib/posts'
import { useTranslations } from '@/components/language/LanguageProvider'
import { PostCard } from '@/components/blog/PostCard'

interface Props {
  posts: Post[]
}

export function RecentPostsSection({ posts }: Props) {
  const { home } = useTranslations()

  return (
    <section className="container mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">{home.recentThoughts}</h2>
        <Link
          href="/blog"
          className="text-sm text-link hover:underline"
        >
          {home.viewAllPosts}
        </Link>
      </div>

      {posts.length > 0 ? (
        <div className="space-y-6">
          <PostCard {...posts[0]} featured />

          {posts.length > 1 && (
            <div className="space-y-2">
              {posts.slice(1).map((post) => (
                <PostCard
                  key={post.slug}
                  {...post}
                  featured={false}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-foreground-secondary">
            {home.emptyState}
          </p>
        </div>
      )}
    </section>
  )
}
