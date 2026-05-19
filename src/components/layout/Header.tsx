'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '../theme/ThemeToggle'
import { useTranslations } from '@/components/language/LanguageProvider'
import { LanguageToggle } from '@/components/language/LanguageToggle'

export function Header() {
  const pathname = usePathname()
  const t = useTranslations()

  const navItems = [
    { href: '/', label: t.nav.home, hideOnMobile: true },
    { href: '/projects', label: t.nav.projects, hideOnMobile: false },
    { href: '/about', label: t.nav.about, hideOnMobile: false },
  ]

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b border-border/60">
      <div className="shell flex items-center justify-between gap-3 sm:gap-6 py-5">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground hover:text-link transition-colors whitespace-nowrap"
        >
          lucas simão
        </Link>

        <nav className="flex items-center gap-3 sm:gap-5 text-sm">
          {navItems.map(({ href, label, hideOnMobile }) => (
            <Link
              key={href}
              href={href}
              className={`${hideOnMobile ? 'hidden sm:inline' : ''} transition-colors ${
                isActive(href)
                  ? 'text-foreground font-medium'
                  : 'text-foreground-secondary hover:text-foreground'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle variant="ashley" />
        </div>
      </div>
    </header>
  )
}
