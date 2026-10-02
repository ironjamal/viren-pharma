# VIREN Pharma website concept

A fictional, multi-page pharmaceutical company website built with Next.js App Router, TypeScript, Tailwind CSS, and Motion for React. It is a design demonstration only. VIREN Pharma and all products, statistics, articles, process descriptions, and job listings are fictional. The site does not provide medical guidance.

## Run locally

From this directory:

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production-mode local preview:

```powershell
npm run build
npm run start
```

## Routes

- `/` — corporate home
- `/about` — purpose and principles
- `/products` and `/products/[slug]` — searchable, filterable portfolio and product details
- `/science-innovation` — research and development approach
- `/manufacturing` — six-stage process concept
- `/quality` — quality framework concept
- `/healthcare-professionals` — professional product path and resource download
- `/news-insights` and `/news-insights/[slug]` — fictional editorial examples
- `/careers` and `/careers/[slug]` — filterable illustrative roles and detail views
- `/contact` — inquiry paths and a local-only demo form

## Configuration

Set `NEXT_PUBLIC_SITE_URL` to the verified production origin before release. Canonical URLs and absolute sitemap/social URLs are withheld until that domain is known. With no value, `robots.txt` remains crawlable and `sitemap.xml` contains no placeholder URLs.

No external analytics, cookies, form service, authentication, CMS, or third-party runtime assets are configured. The contact form never sends or stores its fields; the confirmation is a local UI demonstration.

## Project notes

- [Facts, assumptions, page map, and design rationale](docs/PROJECT-NOTES.md)
- [Content that needs confirmation before a real launch](CONTENT-TODO.md)
- [Image candidate review and local artwork credits](IMAGE-CREDITS.md)
- [Website design and build standard](AGENTS.md)
