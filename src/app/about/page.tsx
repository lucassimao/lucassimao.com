export const metadata = {
  title: 'About - Lucas Simão',
  description: 'Full-stack software engineer with 10+ years creating large-scale software applications. Experienced with distributed systems, cloud infrastructure, and agile principles.',
}

export default function AboutPage() {
  return (
    <div className="container">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 lowercase">about me</h1>

        <div className="space-y-6 text-lg text-foreground-secondary">
          <p>
            I&apos;m Lucas Simão, a full-stack software engineer with over 10 years of experience creating large-scale 
            software applications. Based in Teresina, Brazil, I&apos;ve worked remotely with teams across the globe to 
            build impactful solutions.
          </p>

          <p>
            Currently, I&apos;m a Staff Software Engineer at <a href="https://bold.org" target="_blank" rel="noopener noreferrer" className="text-link hover:underline">Bold.org</a>, where our team leverages AWS, Node.js, and React 
            to fight student debt through a platform that serves hundreds of thousands of users daily. Previously, I&apos;ve 
            contributed to AI-powered engineering marketplaces at Turing and performance management platforms at Indeva.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">The tech I actually use</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Frontend vibes</h3>
              <p className="text-foreground-secondary mb-2">
                React is my bread and butter. Next.js for when I need the full toolkit. 
                Jest and Vitest keep me honest about my code. TypeScript because who doesn&apos;t 
                love knowing their types at 3am?
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Backend adventures</h3>
              <p className="text-foreground-secondary mb-2">
                Started with Java (those were the days), evolved through Node.js and Express, 
                and now I&apos;m having a love affair with Go. PostgreSQL for when I need things 
                to actually work, Redis for when I need them to work fast.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-foreground">Cloud shenanigans</h3>
              <p className="text-foreground-secondary mb-2">
                AWS is home base, though I&apos;ve spent quality time with Google Cloud too. 
                Docker containers everywhere, Kubernetes when things get serious. I automate 
                everything because I&apos;m too lazy to do it twice.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3 text-foreground">The truth about databases</h3>
              <p className="text-foreground-secondary">
                PostgreSQL is my ride or die. Tried MongoDB once when schemas felt 
                restrictive - turns out I actually like knowing where my data lives. 
                Redis for caching and queues. Have touched Oracle, still recovering 
                from that experience.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Professional experience</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-color pl-6">
              <h3 className="font-bold text-foreground">
                Staff Software Engineer - <a href="https://bold.org" target="_blank" rel="noopener noreferrer" className="text-link hover:underline">Bold.org</a>
              </h3>
              <p className="text-sm text-muted mb-2">March 2021 - Present</p>
              <p className="text-foreground-secondary">
                Building a platform to fight student debt, serving hundreds of thousands of users daily. 
                Working with AWS, Node.js, Express.js, PostgreSQL, and React in a fully remote environment.
              </p>
            </div>
            
            <div className="border-l-4 border-color pl-6">
              <h3 className="font-bold text-foreground">Senior Software Engineer - Turing</h3>
              <p className="text-sm text-muted mb-2">July 2020 - March 2021</p>
              <p className="text-foreground-secondary">
                Developed AI-powered labor marketplace connecting pre-vetted engineers with Silicon Valley companies. 
                Used Google Cloud, Node.js, NestJS, and React.
              </p>
            </div>
            
            <div className="border-l-4 border-color pl-6">
              <h3 className="font-bold text-foreground">Software Engineer - Indeva by VTEX</h3>
              <p className="text-sm text-muted mb-2">February 2019 - July 2020</p>
              <p className="text-foreground-secondary">
                Built performance management SaaS platform for retail professionals using Node.js, Ruby on Rails, 
                React, GraphQL, and PostgreSQL.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-background-secondary rounded-lg">
          <h2 className="text-xl font-bold mb-4">Let&apos;s connect</h2>
          <p className="text-foreground-secondary mb-6">
            I&apos;m always interested in connecting with fellow developers, discussing new ideas, 
            or collaborating on interesting projects.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:lucas@lucassimao.com"
              className="text-link hover:underline"
            >
              Email me
            </a>
            <a
              href="https://github.com/lucassimao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://x.com/lsimaocosta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}