# OAEG Website

[![CI](https://github.com/OAEG-Student-Chapter/oaeg-website/actions/workflows/ci.yml/badge.svg)](https://github.com/OAEG-Student-Chapter/oaeg-website/actions/workflows/ci.yml)

The official website of the **Old Anandians Engineers Guild (OAEG)** — an alumni community of engineers from [Ananda College, Colombo 10](https://www.anandacollege.edu.lk/).

Built with ❤️ by Old Anandians, for Old Anandians.

---

## ✨ Features

- **Home** — Guild overview and announcements
- **Blog** — Articles and insights from the community
- **Events** — Upcoming and past OAEG events
- **News** — Latest news from the guild
- **Gallery** — Photo gallery from events
- **Projects** — Showcase of community projects
- **ExCo** — Executive committee members
- **Register** — Member registration form
- **Contact Us** — Get in touch with OAEG

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + [Sass](https://sass-lang.com/) |
| State | [Redux Toolkit](https://redux-toolkit.js.org/) |
| Email | [EmailJS](https://www.emailjs.com/) |
| Blog API | [Blogger API](https://developers.google.com/blogger) |
| Testing | [Jest](https://jestjs.io/) |
| CI | [GitHub Actions](https://github.com/features/actions) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### 1. Fork & Clone

```bash
# Fork the repo on GitHub first, then:
git clone https://github.com/<your-username>/oaeg-website.git
cd oaeg-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the project root:

```dotenv
# Blogger API
NEXT_PUBLIC_BLOGGER_API_KEY=<your-blogger-api-key>
NEXT_PUBLIC_BLOGGER_BLOG_ID=<your-blogger-blog-id>

# EmailJS
NEXT_PUBLIC_EMAIL_SERVICE_ID=<your-emailjs-service-id>
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=<your-emailjs-template-id>
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=<your-emailjs-public-key>
```

> **Note:** The app will work without these keys, but Blog and Contact Us features will be disabled. Ask a maintainer for development credentials if you need them.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Running Tests

```bash
npm test
```

---

## 🤝 Contributing

We'd love your help making this website better! Whether you're squashing a bug, adding a feature, or improving the docs — every contribution counts.

👉 **Read the [CONTRIBUTING.md](CONTRIBUTING.md) guide** to get started.

New to open source? No worries — we've written the guide with you in mind.

---

## 📋 Reporting Issues

- **Bugs** → [Open a Bug Report](https://github.com/OAEG-Student-Chapter/oaeg-website/issues/new?template=bug_report.md)
- **Feature ideas** → [Open a Feature Request](https://github.com/OAEG-Student-Chapter/oaeg-website/issues/new?template=feature_request.md)
- **Security vulnerabilities** → See [SECURITY.md](SECURITY.md) (please don't open a public issue)

---

## 📜 License

License TBD. See [LICENSE](LICENSE) for details.

---

## 🏫 About OAEG

The **Old Anandians Engineers Guild** is an alumni-driven community of engineers who share a common bond — Ananda College, Colombo 10. We connect, collaborate, and give back to the institution and the engineering community at large.
