import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/blog/PostCard'

export const metadata = {
  title: 'Blog - Lucas Simão',
  description: 'Thoughts on web development, React, TypeScript, and software engineering.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4 lowercase">all thoughts</h1>
        <p className="text-foreground-secondary text-lg">
          Ideas, learnings, and insights from my journey as a developer.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="space-y-6">
          {/* First post featured */}
          <PostCard
            {...posts[0]}
            featured={true}
          />
          
          {/* Remaining posts as simple links */}
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
            No posts yet. Check back soon for thoughts on development and technology.
          </p>
        </div>
      )}
    </div>
  )
}