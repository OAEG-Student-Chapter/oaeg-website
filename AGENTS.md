# AGENTS.md — AI Agent Guide for oaeg-website

This file gives AI coding agents (Copilot, Cursor, Antigravity, etc.) the context they need to work effectively in this codebase.

---

## Project Overview

This is the official website of the **Old Anandians Engineers Guild (OAEG)** — an alumni community of engineers from Ananda College, Colombo 10, Sri Lanka. The site is publicly accessible at [www.oaeg.lk](https://www.oaeg.lk).

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Sass (CSS Modules) · Redux Toolkit · EmailJS · Blogger API · Jest

---

## Repository Layout

```
src/
├── api/              # External API clients
│   ├── blogger/      # Blogger API integration (blog posts)
│   ├── graph_api/    # Meta Graph API (likely social feed)
│   └── newsletter/   # Newsletter subscription
├── app/              # Next.js App Router pages & layouts
│   ├── layout.tsx    # Root layout — AppHeader, AppBody, AppFooter
│   ├── page.tsx      # Home page
│   ├── blog/         # Blog listing & post pages
│   ├── contact-us/   # Contact form (EmailJS)
│   ├── events/       # Events page
│   ├── exco/         # Executive Committee page
│   ├── gallery/      # Photo gallery
│   ├── news/         # News page
│   ├── projects/     # Projects showcase
│   └── register/     # Member registration (links to Google Form)
├── components/       # Shared, reusable UI components
├── hooks/            # Custom React hooks
├── lib/              # App-wide constants, helpers, routes, fonts
│   ├── constants.ts  # OAEG name, mission, description strings
│   ├── routes.ts     # Typed route definitions — use routesMap for linking
│   ├── helpers.tsx   # Text rendering helpers (splitByNewLine, etc.)
│   ├── fonts.ts      # Google Font instances
│   └── social-media.ts # Social media links
└── styles/           # Global CSS (globals.css)
```

---

## Key Conventions

### TypeScript
- **Always use strict typing.** Avoid `any` — define interfaces or types instead.
- Component props must have explicit TypeScript interfaces.

### Routing
- All routes are defined in [`src/lib/routes.ts`](src/lib/routes.ts).
- **Always use `routesMap` or the `routes` array** when linking between pages — never hardcode path strings.

### Styling
- Per-component styles use **CSS Modules** (`.module.css` or `.module.scss`).
- Global styles live in `src/styles/globals.css`.
- Tailwind utility classes are available but prefer CSS Modules for component-specific styles.
- Do **not** use inline `style={{}}` props unless absolutely necessary.

### Components
- File names use **kebab-case** (e.g., `app-header.tsx`).
- Component names use **PascalCase** (e.g., `AppHeader`).
- Keep components small and focused. Split large components.
- Page-level components live inside `src/app/<route>/`. Shared components go in `src/components/` or `src/app/components/`.

### Organisation Strings
- The organisation's name, mission, and description are centralised in [`src/lib/constants.ts`](src/lib/constants.ts).
- **Never hardcode OAEG's name or description** elsewhere — always import from `constants.ts`.

### Images
- Images are **unoptimized** (`next.config.js` sets `images.unoptimized: true`).
- Use Next.js `<Image />` for all images regardless.

---

## Environment Variables

All client side env vars are prefixed with `NEXT_PUBLIC_`. They must be set in `.env.local` (never committed).

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_BLOGGER_API_KEY` | Blogger API key for blog posts |
| `NEXT_PUBLIC_BLOGGER_BLOG_ID` | The Blogger blog ID |
| `NEXT_PUBLIC_EMAIL_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAIL_TEMPLATE_ID` | EmailJS email template ID |
| `NEXT_PUBLIC_EMAIL_PUBLIC_KEY` | EmailJS public key |

If these are missing, Blog and Contact features will silently fail. Other pages work fine without them.

---

## Commands

```bash
npm run dev     # Start local dev server at http://localhost:3000
npm run lint    # Run ESLint — fix all errors before committing
npm test        # Run Jest test suite
npm run build   # Production build (only needed for deployment validation)
```

---

## Branching & Commits

| Branch | Purpose |
|---|---|
| `main` | Production — never commit directly |
| `develop` | Integration — all PRs target this branch |
| `feature/<name>` | New features |
| `fix/<name>` | Bug fixes |

Commit messages follow **Conventional Commits**:
```
feat(blog): add pagination to blog listing
fix(contact): validate email before sending
docs(readme): update env variable instructions
```

---

## What NOT to Do

- ❌ Do not commit `.env.local` or any file containing API keys or secrets.
- ❌ Do not hardcode route paths — use `routesMap` from `src/lib/routes.ts`.
- ❌ Do not hardcode the organisation name — use `organization` from `src/lib/constants.ts`.
- ❌ Do not open PRs targeting `main` — always target `develop`.
- ❌ Do not use `any` as a TypeScript type.
- ❌ Do not leave commented-out code in PRs without a `// TODO:` explanation.
- ❌ Do not bypass `npm run lint` — all lint errors must be resolved before submitting a PR.

---

## Running Tests

```bash
npm test
```

Tests live in the `tests/` directory and use **Jest**. When adding a new utility or API function, add a corresponding test.

---

## Getting Help

Open a [GitHub Issue](https://github.com/OAEG-Student-Chapter/oaeg-website/issues) with the `question` label if anything is unclear.
