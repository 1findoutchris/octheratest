# Octhera — B2B Gaming Technology Website

A premium marketing site for Octhera, a B2B gaming technology company, built with Next.js (App
Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app` — routes, layout, metadata, sitemap/robots, generated OG image.
- `src/components/layout` — header/navigation and footer.
- `src/components/sections` — one component per homepage section (hero, solutions, products,
  game aggregation, white label, operator platform, services, why Octhera, how it works,
  partners, global infrastructure, final CTA).
- `src/components/ui` — shared primitives (buttons, cards, section headings, reveal/animated
  number helpers).
- `src/data` — content configuration for each section (nav links, stats, solutions, products,
  services, process steps, partners, footer links). Editing copy or adding/removing cards
  generally only requires editing these files, not the components.
- `src/lib/site-config.ts` — site-wide constants (name, tagline, description, canonical URL,
  contact email, social links).

## Placeholder content

A few pieces of content are intentionally placeholders because no verified data was available
in the repository at build time. They are marked with comments at their source so they're easy
to find and replace:

- `src/data/stats.ts` — platform statistics.
- `src/data/partners.ts` — partner/provider logos.
- `src/lib/site-config.ts` — contact email and production `NEXT_PUBLIC_SITE_URL`.
- The operator platform dashboard mockup (`src/components/sections/platform`) uses illustrative
  data and blank metric values — it's a UI mockup, not a claim of real, shipped functionality.

## Scripts

- `npm run dev` — start the dev server.
- `npm run build` — production build.
- `npm run lint` — ESLint.
