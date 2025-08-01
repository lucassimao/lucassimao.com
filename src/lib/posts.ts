import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  content: string
  readingTime: string
}

export function getAllPosts(): Post[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((name) => {
        const slug = name.replace(/\.mdx$/, '')
        return getPostBySlug(slug)
      })
      .filter((post): post is Post => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return posts
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      tags: data.tags || [],
      content,
      readingTime: stats.text,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getRecentPosts(limit: number = 3): Post[] {
  const allPosts = getAllPosts()
  return allPosts.slice(0, limit)
}

export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => 
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  )
}