'use client'

import { TagList } from '@/components/blog/TagList'
import { useLanguage } from '@/components/language/LanguageProvider'

interface Props {
  title: string
  date: string
  readingTime: string
  tags: string[]
}

export function BlogPostHeader({ title, date, readingTime, tags }: Props) {
  const { language } = useLanguage()

  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-6">
        <time>
          {new Date(date).toLocaleDateString(language, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <span>•</span>
        <span>{readingTime}</span>
      </div>

      {tags.length > 0 && (
        <TagList tags={tags} variant="ashley" />
      )}
    </header>
  )
}
