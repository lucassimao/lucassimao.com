'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '../theme/ThemeToggle'

export function Header() {
  const pathname = usePathname()
  
  const navItems = [
    { href: '/', label: 'home' },
    { href: '/blog', label: 'blog' },
    { href: '/projects', label: 'projects' },
    { href: '/about', label: 'about' },
  ]

  return (
    <header className="py-8 mb-12">
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="text-xl font-bold text-foreground hover:text-link transition-colors"
            >
              lucas simão
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm transition-colors hover:text-link ${
                    pathname === href 
                      ? 'text-foreground font-medium' 
                      : 'text-foreground-secondary'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <ThemeToggle variant="ashley" />
        </nav>

        {/* Mobile navigation */}
        <div className="md:hidden mt-6 flex items-center gap-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors hover:text-link ${
                pathname === href 
                  ? 'text-foreground font-medium' 
                  : 'text-foreground-secondary'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}