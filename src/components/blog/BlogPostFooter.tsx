'use client'

import Link from 'next/link'
import { useTranslations } from '@/components/language/LanguageProvider'

export function BlogPostFooter() {
  const { blog } = useTranslations()

  return (
    <footer className="mt-12 pt-8 border-t border-color">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Link
          href="/blog"
          className="text-link hover:underline flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {blog.backToAllPosts}
        </Link>

        <div className="text-sm text-muted">
          {blog.sharePost}
        </div>
      </div>
    </footer>
  )
}
