import { Hero } from '@/components/layout/Hero'
import { getRecentPosts } from '@/lib/posts'
import { RecentPostsSection } from '@/components/home/RecentPostsSection'

export default function Home() {
  const recentPosts = getRecentPosts(3)

  return (
    <>
      <Hero />
      <RecentPostsSection posts={recentPosts} />
    </>
  )
}
