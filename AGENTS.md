# Repository Guidelines

## Project Structure & Module Organization
Source lives under `src`. The App Router resides in `src/app`, with route segments such as `about`, `blog`, and `projects`, plus `layout.tsx` and `globals.css`. Shared UI is grouped in `src/components/{layout,blog,theme}` while MDX data helpers sit in `src/lib/posts.ts`, which reads front matter (`title`, `excerpt`, `date`, `tags`) from `content/posts/*.mdx` and sorts by recency. Static assets belong in `public/` for import via Next components.

## Build, Test, and Development Commands
- `npm run dev`: Start the Next.js dev server with Turbopack; hot reloads React and MDX content at `http://localhost:3000`.
- `npm run build`: Produce the optimized production bundle; run before shipping config changes or MDX restructures.
- `npm run start`: Serve the previously built output locally to smoke-test prod settings.
- `npm run lint`: Execute `next lint` (ESLint + TypeScript rules from `next/core-web-vitals`) and must be clean prior to opening a PR.

## Coding Style & Naming Conventions
Code is TypeScript-first with `strict` settings and the `@/*` alias from `tsconfig.json`. Follow the existing style: two-space indentation, single quotes, no trailing semicolons, Server Components by default, PascalCase component filenames, camelCase helpers. Keep Tailwind utilities readable and prefer the color tokens defined in `globals.css`.

## Testing Guidelines
There is no dedicated runner yet, so add targeted coverage alongside your feature. Co-locate component tests as `ComponentName.test.tsx` (Vitest or Jest + Testing Library are acceptable) and unit-test data helpers inside `src/lib`. Document manual verification steps in the PR, and attach before/after screenshots or clips for UI-facing work.

## Commit & Pull Request Guidelines
Commits in this repo are short, imperative sentences (`update hero`, `set app store link`). Keep the diff focused, explain notable architectural or content decisions in the body, and reference issues or MDX slugs when relevant. PRs should summarize scope, list testing evidence, call out schema/content migrations, and include screenshots for visual tweaks. Request review only after lint/build succeed locally.

## Content & Configuration Tips
When adding MDX posts, stick to kebab-case filenames, supply YYYY-MM-DD dates, and limit excerpts to ~160 characters for card layouts. The reader metadata (`reading-time`) is derived automatically—avoid manual overrides. Theme toggling relies on the `[data-theme]` attribute, so prefer CSS variables over hard-coded colors. Store downloadable assets or favicons under `public/` and import them via `next/image` for optimized bundling.
