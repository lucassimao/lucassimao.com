import { ThemeToggle } from '../theme/ThemeToggle'

export function Footer() {
  const socialLinks = [
    { href: 'https://github.com/lucassimao', label: 'github', icon: 'github' },
    { href: 'https://x.com/lsimaocosta', label: 'twitter', icon: 'twitter' },
    { href: 'mailto:lucas@lucassimao.com', label: 'email', icon: 'email' },
  ]

  const SocialIcon = ({ icon }: { icon: string }) => {
    switch (icon) {
      case 'github':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        )
      case 'linkedin':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        )
      case 'twitter':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
          </svg>
        )
      case 'email':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <footer className="mt-24 py-12 border-t border-color">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-link transition-colors"
                aria-label={label}
              >
                <SocialIcon icon={icon} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted">theme</span>
            <ThemeToggle variant="edd" />
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-color text-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Lucas Simão. Built with Next.js, Tailwind CSS, and Claude Code.
          </p>
        </div>
      </div>
    </footer>
  )
}