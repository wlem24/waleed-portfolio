# Waleed Albarakati — Portfolio

A production-ready personal portfolio for Waleed Albarakati, a Full-Stack Software Engineer focused on AI-powered applications, RAG pipelines, and semantic search. Built as a single-page React app with a custom dark, glassmorphic design system.

**Live demo:** _add your deployed URL here after publishing (see [Deployment](#deployment))_
**Repository:** https://github.com/wlem24/waleed-portfolio _(create this repo and push — see below)_

---

## Overview

The site presents Waleed's background, skills, professional experience, and two flagship AI projects (RFPilot and Haqooq AI) in a recruiter-friendly, ATS-conscious format. It's a fully static single-page app — no backend, no database, no auth — so it deploys anywhere that serves static files.

## Features

- Full personal profile — not a single-project showcase: hero, about, skills, experience timeline, three featured project deep-dives, a **live GitHub repositories feed**, certifications, awards, education, workflow, tech stack, goals, and a working contact form
- **Live GitHub integration**: `GitHubSection` calls the public GitHub REST API (`api.github.com/users/wlem24/repos`) directly from the browser at page load, so repo list, languages, stars, and forks always reflect the real profile — not a hardcoded snapshot. Falls back to a verified static list if the API is unreachable or rate-limited.
- Animated hero canvas visualizing a semantic vector/embedding space, tying the visual to the site owner's RAG/vector-search work
- Working contact form (client-side, opens a pre-filled email — no backend required) alongside direct email/phone/LinkedIn/GitHub links
- Scroll-reveal animations via `IntersectionObserver`, disabled automatically when the browser's `prefers-reduced-motion` is set
- SEO: descriptive meta tags, Open Graph + Twitter Card tags, canonical URL, and a JSON-LD `Person` schema
- Accessible by default: skip-to-content link, visible focus states, semantic landmarks, `aria-label`s on icon-only links
- Error boundary at the app root so a rendering failure shows a graceful fallback instead of a blank page
- Mobile-first responsive design down to small phones
- Zero runtime dependencies beyond React — no CSS framework, no UI kit

## Tech Stack

| Layer       | Choice                                   |
|-------------|-------------------------------------------|
| Framework   | React 18 + Vite 5                         |
| Styling     | Plain CSS with custom properties (design tokens) |
| Icons       | Font Awesome (CDN)                        |
| Fonts       | Space Grotesk, Inter, JetBrains Mono (Google Fonts, CDN) |
| Linting     | ESLint 9 (flat config)                    |
| CI/CD       | GitHub Actions → GitHub Pages             |

No server, database, or auth layer — the entire app is static and client-rendered.

## Installation

Requires Node.js 18+ and npm.

```bash
git clone https://github.com/wlem24/waleed-portfolio.git
cd waleed-portfolio
npm install
```

## Configuration

No environment variables or secrets are required. The only "configuration" points:

- `vite.config.js` — `base: './'` makes the production build relocatable (works at a domain root or a GitHub Pages subpath without edits).
- `public/Waleed_Albarakati_CV.pdf` — replace this file to update the "Download CV" button's content; the filename must stay the same, or update the reference in `src/components/Hero.jsx`.
- Contact details (email, phone, GitHub, LinkedIn) are set directly in `src/components/Hero.jsx`, `Contact` (in `src/components/GoalsContact.jsx`), and `src/components/Footer.jsx`.

## Usage

```bash
npm run dev       # start local dev server (http://localhost:5173)
npm run lint       # run ESLint
npm run build      # production build → dist/
npm run preview    # serve the production build locally to sanity-check it
```

## Folder Structure

```
waleed-portfolio/
├── .github/workflows/deploy.yml   # CI: build + deploy to GitHub Pages on push to main
├── public/
│   └── Waleed_Albarakati_CV.pdf   # served as-is, linked from the hero download button
├── src/
│   ├── components/
│   │   ├── Nav.jsx                # fixed nav bar + mobile menu
│   │   ├── Hero.jsx                # hero section, CTA buttons, stats
│   │   ├── VectorField.jsx         # animated canvas background (hero signature element)
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx          # timeline of professional roles
│   │   ├── Projects.jsx            # RFPilot, Haqooq AI, AI Resume Evaluator deep dives
│   │   ├── GitHubSection.jsx       # live GitHub API fetch + repo cards
│   │   ├── CertificationsAwards.jsx
│   │   ├── Education.jsx
│   │   ├── Process.jsx             # development workflow section
│   │   ├── Stack.jsx               # tech stack grid
│   │   ├── GoalsContact.jsx        # career goals + contact form/section
│   │   ├── Footer.jsx
│   │   └── ErrorBoundary.jsx       # app-root error boundary
│   ├── hooks/
│   │   └── useReveal.js            # IntersectionObserver scroll-reveal hook
│   ├── App.jsx                     # page composition
│   ├── main.jsx                    # React entry point
│   └── index.css                   # design tokens + all styling
├── index.html                      # Vite HTML entry
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

## Deployment

This repo ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the site and publishes it to **GitHub Pages** automatically on every push to `main`. One-time setup after you push the code:

1. Push this project to `https://github.com/wlem24/waleed-portfolio` (or your repo of choice — see commands below).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab). The workflow installs dependencies, lints, builds, and deploys.
4. Your live URL will be `https://wlem24.github.io/waleed-portfolio/`.

```bash
git init
git add .
git commit -m "feat: production-ready portfolio with CI/CD deployment"
git branch -M main
git remote add origin https://github.com/wlem24/waleed-portfolio.git
git push -u origin main
```

**Alternative hosts** (also zero-config with this setup, since `base: './'` makes the build relocatable):
- **Vercel**: import the repo, framework preset "Vite" — defaults work as-is.
- **Netlify**: build command `npm run build`, publish directory `dist`.

## Future Improvements

- Wire the contact form to a real backend (e.g., a serverless function + Resend/SendGrid) instead of the current `mailto:` fallback, so messages don't require the visitor's own email client
- Add a lightweight CMS or JSON data file for project/skill content so updates don't require code changes
- Add automated visual regression / Lighthouse CI checks to the GitHub Actions workflow
- Add real project screenshots/demo GIFs once RFPilot has a deployed preview environment
- Cache the GitHub API response (e.g., via a small edge function) to avoid the unauthenticated 60-requests/hour rate limit under heavy traffic
- Internationalization (Arabic/English toggle), given the site owner is bilingual
