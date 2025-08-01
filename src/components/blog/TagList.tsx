interface TagListProps {
  tags: string[]
  variant?: 'ashley' | 'edd'
}

export function TagList({ tags, variant = 'edd' }: TagListProps) {
  if (variant === 'ashley') {
    // Ashley style: Italic tags with # prefix
    return (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-sm text-muted italic">
            #{tag}
          </span>
        ))}
      </div>
    )
  }

  // Edd style: Regular tags
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span 
          key={tag} 
          className="text-xs px-2 py-1 bg-background-secondary text-foreground-secondary rounded-md"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}