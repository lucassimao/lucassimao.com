import Link from 'next/link'

export function Hero() {
  return (
    <section className="mb-16">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 lowercase">
          Hi,
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-3">
            <p className="text-foreground-secondary">
              I am a full-stack engineer who thinks PostgreSQL is a personality trait and 
              believes the best code is the one you don&apos;t have to write twice.
            </p>
            
            <p className="text-foreground-secondary">
              10+ years turning caffeine into scalable applications. Currently at Bold.org, 
              fighting student debt one React component at a time.
            </p>
          </div>
          
          <div className="space-y-3">
            <p className="text-foreground-secondary">
              More of a terminal guy than an IDE person. These days, I&apos;m taming 
              Claude Code to write code for me while I focus on the important stuff.
            </p>
            
            <p className="text-foreground-secondary">
              When I&apos;m not writing code, I&apos;m juggling two kids and bootstrapping 
              side projects - because apparently I&apos;m allergic to free time.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground-secondary transition-colors font-medium"
          >
            Read my thoughts
          </Link>
          
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-color text-foreground hover:bg-background-secondary transition-colors font-medium rounded-lg"
          >
            View projects
          </Link>
        </div>
      </div>
    </section>
  )
}