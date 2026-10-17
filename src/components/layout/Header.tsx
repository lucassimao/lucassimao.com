'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '../theme/ThemeToggle'
import { useTranslations } from '@/components/language/LanguageProvider'
import { LanguageToggle } from '@/components/language/LanguageToggle'

export function Header() {
  const pathname = usePathname()
  const t = useTranslations()
  const navItems = [{ href: '/', label: t.nav.home }, { href: '/projects', label: t.nav.projects }, { href: '/about', label: t.nav.about }]

  if (pathname === '/') return null

  return (
    <>
      <a className="skip-link" href="#main-content">{t.preferences.skip}</a>
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="site-name">lucas simão<span aria-hidden="true">.</span></Link>
          <nav className="site-nav" aria-label={t.preferences.navigation}>
            {navItems.map(({ href, label }) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}
          </nav>
          <div className="header-preferences"><LanguageToggle /><ThemeToggle /></div>
        </div>
      </header>
    </>
  )
}
