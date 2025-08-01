import Link from 'next/link'
import { Hero } from '@/components/layout/Hero'
import { PostCard } from '@/components/blog/PostCard'
import { getRecentPosts } from '@/lib/posts'

export default function Home() {
  const recentPosts = getRecentPosts(3)

  return (
    <>
      <Hero />
      
      <section className="container mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Recent thoughts</h2>
          <Link 
            href="/blog" 
            className="text-sm text-link hover:underline"
          >
            View all posts →
          </Link>
        </div>

        {recentPosts.length > 0 ? (
          <div className="space-y-6">
            {/* Featured post */}
            <PostCard
              {...recentPosts[0]}
              featured={true}
            />
            
            {/* Other recent posts */}
            {recentPosts.length > 1 && (
              <div className="space-y-2">
                {recentPosts.slice(1).map((post) => (
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
              No posts yet. Check back soon for thoughts on development and technology.
            </p>
          </div>
        )}
      </section>
    </>
  )
}
