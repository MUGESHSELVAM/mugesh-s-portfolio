# Mugesh Selvam K — Portfolio

A premium, production-ready portfolio for a cybersecurity engineer, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Every fact on the site is sourced from `lib/data.ts`, which was built directly from the resume — nothing is invented, and anything missing is marked `TODO`.

## Stack

- **Next.js 14** (App Router, static generation where possible)
- **TypeScript**
- **Tailwind CSS** — custom design tokens (see `tailwind.config.ts`)
- **Framer Motion** — scroll reveals, animated stat counters, micro-interactions
- **Geist Sans / Geist Mono** — Vercel's typeface, via the `geist` npm package (no external font fetch needed)
- **Lucide Icons**
- **MDX** (`next-mdx-remote`) — blog posts live as `.mdx` files in `content/blog/`
- **Route Handler** at `/api/contact` — currently logs submissions server-side; wire it to Resend/Postmark per the TODO in that file

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
app/
  page.tsx                 → home page (all sections)
  projects/page.tsx         → full projects grid
  projects/[slug]/page.tsx  → case study template (Problem → Future Improvements)
  blog/page.tsx              → blog index
  blog/[slug]/page.tsx        → MDX-rendered post
  certifications/page.tsx    → standalone cert wall
  api/contact/route.ts       → contact form handler
  sitemap.ts, robots.ts      → SEO
components/                  → all UI sections, each self-contained
content/blog/*.mdx           → blog posts (Markdown + frontmatter)
lib/data.ts                  → single source of truth for all resume-derived content
lib/mdx.ts                   → MDX loading utilities
public/resume.pdf            → the resume served by every "Download Resume" button
public/images/               → project cover placeholders (SVG)
```

## Updating content

Everything renders from `lib/data.ts` — update `profile`, `experience`, `projects`, `skills`, `certifications`, etc. there and every section (hero stats, timeline, case studies, cert wall) updates automatically. To add a blog post, drop a new `.mdx` file into `content/blog/` with the same frontmatter shape as the existing posts.

To replace the hero portrait placeholder, drop an image into `public/images/` and swap the placeholder block in `components/Hero.tsx` for a Next.js `<Image />`.

## Known placeholders (marked TODO in code)

- Cloud security skill category — awaiting hands-on cloud platform exposure
- Project screenshots on each case study page
- Hero portrait image
- Contact form email delivery (currently logs server-side only)

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required to build.
4. Click **Deploy** — Vercel will run `npm install && npm run build` automatically.
5. Once live, update `metadataBase` in `app/layout.tsx` and the URLs in `app/sitemap.ts` / `app/robots.ts` to your actual production domain.
6. (Optional) Add a `RESEND_API_KEY` environment variable in Vercel's project settings once you wire up the contact form per the TODO in `app/api/contact/route.ts`.

Alternatively, via CLI:

```bash
npm i -g vercel
vercel
```

## Lighthouse / performance notes

- Fonts are self-hosted via the `geist` package — no external font requests.
- All case study and blog pages are statically generated at build time (`generateStaticParams`).
- Images use `next/image`'s AVIF/WebP pipeline once real photos replace the SVG placeholders.
- Animations respect `prefers-reduced-motion`.

