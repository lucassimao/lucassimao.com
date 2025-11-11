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
    { href: '/', label: t.nav.home },
    { href: '/consulting', label: t.nav.consulting },
    { href: '/projects', label: t.nav.projects },
    { href: '/blog', label: t.nav.blog },
    { href: '/about', label: t.nav.about },
  ]

  const desktopNav = (
    <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
      <div className="inline-flex items-center gap-1 rounded-full border border-color bg-background-secondary/80 px-2 py-1 shadow-sm">
        {navItems.map(({ href, label }) => {
          const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
          return (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                isActive
                  ? 'bg-background text-foreground shadow'
                  : 'text-foreground-secondary hover:text-foreground'
              }`}
            >
              {label}
            </Link>
          )
        })}
      </div>
    </div>
  )

  const desktopControls = (
    <div className="hidden md:flex items-center gap-3">
      <LanguageToggle />
      <ThemeToggle variant="ashley" />
    </div>
  )

  return (
    <header className="sticky top-0 z-30 bg-background/90 backdrop-blur border-b border-color/50">
      <div className="container flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between py-6">
        <div className="flex items-center justify-between gap-4 w-full lg:w-auto">
          <Link 
            href="/" 
            className="text-2xl font-black tracking-tight text-foreground hover:text-link transition-colors"
          >
            lucas simão
          </Link>

          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle variant="ashley" />
          </div>
        </div>

        {desktopNav}
        {desktopControls}

        <div className="md:hidden flex flex-wrap items-center gap-2 border-t border-color/40 pt-4">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 text-xs font-semibold tracking-wide rounded-full border ${
                  isActive
                    ? 'border-foreground text-foreground'
                    : 'border-color text-foreground-secondary'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}
