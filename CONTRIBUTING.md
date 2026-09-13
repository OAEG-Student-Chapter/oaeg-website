# Contributing to the OAEG Website

First off — thank you for taking the time to contribute! 🎉

Whether you're a seasoned engineer or this is your first open source contribution, we're glad you're here. This guide will walk you through everything you need to know to get your contribution merged.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Branching Strategy](#branching-strategy)
- [Making Changes](#making-changes)
- [Commit Messages](#commit-messages)
- [Opening a Pull Request](#opening-a-pull-request)
- [Review Process](#review-process)
- [Style Guide](#style-guide)

---

## Getting Started

### 1. Fork the repository

Click the **Fork** button at the top-right of the [repository page](https://github.com/OAEG-Student-Chapter/oaeg-website) to create your own copy.

### 2. Clone your fork

```bash
git clone https://github.com/<your-username>/oaeg-website.git
cd oaeg-website
```

### 3. Add the upstream remote

This lets you pull the latest changes from the main repo:

```bash
git remote add upstream https://github.com/OAEG-Student-Chapter/oaeg-website.git
```

### 4. Install dependencies

```bash
npm install
```

### 5. Set up environment variables

Copy the example below into a new `.env.local` file in the project root:

```dotenv
# Blogger API
NEXT_PUBLIC_BLOGGER_API_KEY=
NEXT_PUBLIC_BLOGGER_BLOG_ID=

# EmailJS
NEXT_PUBLIC_EMAIL_SERVICE_ID=
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=
```

You can leave values blank to run the app locally — Blog and Contact features won't load, but everything else will work.

### 6. Run the development server

```bash
npm run dev
```

---

## Branching Strategy

We use a **Gitflow-style** branching model:

| Branch | Purpose |
|---|---|
| `main` | Production — always stable |
| `develop` | Integration branch — all PRs target this |
| `feature/<name>` | New features |
| `fix/<name>` | Bug fixes |
| `docs/<name>` | Documentation-only changes |
| `chore/<name>` | Maintenance, dependency updates |

**Always branch off `develop`**, not `main`:

```bash
# First, sync develop with upstream
git fetch upstream
git checkout develop
git merge upstream/develop

# Then create your branch
git checkout -b feature/your-feature-name
```

---

## Making Changes

1. Write your code.
2. Run the linter to catch issues early:
   ```bash
   npm run lint
   ```
3. Run tests to make sure nothing is broken:
   ```bash
   npm test
   ```
4. Stage and commit your changes (see below for commit format).

---

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This makes the git history readable and enables automatic changelog generation.

### Format

```
<type>(<scope>): <short description>
```

### Types

| Type | When to use |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation changes only |
| `style` | Formatting, missing semicolons, etc. (no logic change) |
| `refactor` | Code restructure without fixing a bug or adding a feature |
| `test` | Adding or updating tests |
| `chore` | Build process, dependency updates, config changes |

### Examples

```bash
feat(events): add event detail page
fix(contact): prevent form submission without required fields
docs(readme): update environment variable instructions
chore(deps): bump next from 14.1.0 to 14.2.0
```

---

## Opening a Pull Request

1. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. Go to the [repository on GitHub](https://github.com/OAEG-Student-Chapter/oaeg-website).
3. Click **"Compare & pull request"**.
4. Make sure the **base branch is `develop`** (not `main`).
5. Fill in the PR template — describe what you changed and why.
6. Submit the PR and wait for a review! ✅

---

## Review Process

- A maintainer will review your PR, usually within a few days.
- They may leave comments or request changes — don't be discouraged, this is normal!
- Once approved, a maintainer will merge your PR into `develop`.
- Changes in `develop` are periodically merged into `main` for deployment.

---

## Style Guide

- **TypeScript** — use proper typing; avoid `any`.
- **Component files** — use PascalCase (e.g., `EventCard.tsx`).
- **CSS Modules / Sass** — scope styles using CSS Modules (`.module.css` / `.module.scss`).
- **Keep components small** — split large components into smaller, focused ones.
- **No commented-out code** in PRs unless accompanied by a `// TODO:` comment explaining why.

---

If you have any questions, open an [issue](https://github.com/OAEG-Student-Chapter/oaeg-website/issues) and tag it `question`. We're happy to help!

Once more — **thank you** for contributing to OAEG. Amitha! 🙏
