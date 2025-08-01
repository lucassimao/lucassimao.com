import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { TagList } from '@/components/blog/TagList'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Lucas Simão`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const mdxComponents = {
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => <h1 className="text-3xl font-bold mb-6 mt-8 first:mt-0" {...props} />,
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => <h2 className="text-2xl font-bold mb-4 mt-8" {...props} />,
    h3: (props: React.HTMLProps<HTMLHeadingElement>) => <h3 className="text-xl font-bold mb-3 mt-6" {...props} />,
    p: (props: React.HTMLProps<HTMLParagraphElement>) => <p className="mb-4 text-foreground leading-relaxed" {...props} />,
    ul: (props: React.HTMLProps<HTMLUListElement>) => <ul className="mb-4 pl-6 space-y-2 list-disc" {...props} />,
    ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => <ol className="mb-4 pl-6 space-y-2 list-decimal" {...props} />,
    li: (props: React.HTMLProps<HTMLLIElement>) => <li className="text-foreground" {...props} />,
    blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
      <blockquote className="border-l-4 border-link pl-6 my-6 italic text-foreground-secondary" {...props} />
    ),
    code: (props: React.HTMLProps<HTMLElement>) => (
      <code className="bg-background-secondary px-2 py-1 rounded text-sm font-mono" {...props} />
    ),
    pre: (props: React.HTMLProps<HTMLPreElement>) => (
      <pre className="bg-background-secondary p-4 rounded-lg overflow-x-auto mb-6 text-sm" {...props} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a className="text-link hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
    ),
  }

  return (
    <div className="container">
      <article className="max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-6">
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          
          {post.tags.length > 0 && (
            <TagList tags={post.tags} variant="ashley" />
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        <footer className="mt-12 pt-8 border-t border-color">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="text-link hover:underline flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to all posts
            </Link>
            
            <div className="text-sm text-muted">
              Share this post
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}