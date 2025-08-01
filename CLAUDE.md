# lucassimao.com - Personal Portfolio Website

## Overview
This is Lucas Simão's personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS v4. The site features a minimalist design inspired by ashleyha.com and eddmann.com.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (using CSS variables)
- **Content**: MDX for blog posts
- **Font**: Inter
- **Theme**: Dark/Light mode with dark as default

## Project Structure
```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── blog/page.tsx      # Blog listing
│   ├── projects/page.tsx  # Projects showcase
│   └── globals.css        # Global styles and Tailwind
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Footer with social links
│   │   └── Hero.tsx       # Hero section
│   ├── theme/             # Theme management
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   └── blog/              # Blog components
│       ├── PostCard.tsx
│       └── PostLink.tsx
└── content/               # MDX content
    └── posts/            # Blog posts
```

## Key Features
1. **Minimalist Design**: Clean, focused design with limited color palette
2. **Theme System**: Dark/Light mode toggle (defaults to dark)
3. **Blog System**: MDX-based blog with syntax highlighting
4. **Responsive**: Mobile-first responsive design
5. **Typography**: Carefully chosen font sizes and spacing

## Design Principles
- **Color Palette**: Limited to essentials (background, foreground, muted, link)
- **Typography**: Inter font for clean, modern look
- **Spacing**: Consistent spacing using Tailwind utilities
- **Interactions**: Subtle hover states and transitions

## Important Files
- `/src/app/globals.css` - Core styling and CSS variables
- `/src/components/theme/ThemeProvider.tsx` - Theme management
- `/src/app/projects/page.tsx` - Showcases Decorebator project

## Custom Implementations
- Manual utility classes for Tailwind v4 compatibility
- CSS variables for theme switching without FOUC
- Server/Client component separation for optimal performance

## Content Notes
- About page reflects Lucas's 10+ years experience, current role at Bold.org
- Projects page features Decorebator with comprehensive technical details
- Blog has placeholder "Hello World" post
- Hero section includes personality-driven bio

## Deployment
The site is designed to be deployed on Vercel or similar Next.js-compatible platforms.

## Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Future Enhancements
- Blog pagination (todo item exists)
- More blog content
- Additional projects showcase

## Personal Context
- Lucas is a full-stack engineer at Bold.org
- Father of two kids
- Solopreneur with side projects
- Prefers terminal over IDEs
- Uses Claude Code for development
- Based in Teresina, Brazil

## Social Links
- GitHub: https://github.com/lucassimao
- Twitter/X: https://x.com/lsimaocosta
- Email: lucas@lucassimao.com