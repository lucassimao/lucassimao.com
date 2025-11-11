import { getAllPosts } from '@/lib/posts'
import { BlogListing } from '@/components/blog/BlogListing'

export const metadata = {
  title: 'Blog - Lucas Simão',
  description: 'Thoughts on web development, React, TypeScript, and software engineering.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return <BlogListing posts={posts} />
}
