'use client'

import { useTheme } from './ThemeProvider'

interface ThemeToggleProps {
  variant?: 'ashley' | 'edd'
}

export function ThemeToggle({ variant = 'ashley' }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    } else {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  if (variant === 'ashley') {
    return (
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-background-secondary transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {/* Sun icon for light mode */}
        {resolvedTheme === 'light' ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        ) : (
          /* Moon icon for dark mode */
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>
    )
  }

  // Edd variant - circular toggle
  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors duration-200 hover:bg-foreground-secondary"
      aria-label="Toggle theme"
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-foreground transition-transform duration-200 ${
          resolvedTheme === 'dark' ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}