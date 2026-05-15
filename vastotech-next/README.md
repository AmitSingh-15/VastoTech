# Vastotech — Next.js Marketing Site

Premium enterprise IoT / Smart Infrastructure marketing site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Configured for **static export** so it can be hosted on GitHub Pages at `vastotech.in`.

## Tech Stack

- **Next.js 14** — App Router, static export (`output: 'export'`)
- **TypeScript** — strict mode
- **Tailwind CSS** — utility-first, custom navy + orange theme
- **Framer Motion** — entrance and scroll animations
- **Lucide React** — icon set

## Folder Structure

```
vastotech-next/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   ├── page.tsx            # Home page composition
│   └── globals.css         # Tailwind directives + base styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with mobile menu
│   │   └── Footer.tsx      # Multi-column footer
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── TrustedClients.tsx
│   │   ├── Solutions.tsx
│   │   ├── About.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── Stats.tsx       # Animated counters
│   │   └── CTA.tsx
│   └── ui/
│       ├── Button.tsx      # Reusable polymorphic Link/button
│       ├── Card.tsx
│       ├── Container.tsx
│       └── SectionHeading.tsx
├── constants/
│   └── data.ts             # All dummy content arrays
├── types/
│   └── index.ts            # Shared TS interfaces
├── lib/
│   └── utils.ts            # cn() classname helper
├── public/
│   ├── CNAME               # Custom domain for GitHub Pages
│   └── .nojekyll           # Tells Pages not to run Jekyll
├── next.config.js          # output: 'export', images.unoptimized
├── tailwind.config.ts      # Navy + orange palette
└── tsconfig.json
```

## Local Development

```bash
cd vastotech-next
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build (Static Export)

```bash
npm run build
```

The static site is generated into `out/`. Open `out/index.html` directly or serve it:

```bash
npx serve out
```

## Deployment — GitHub Pages

A workflow is already wired up at [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) (at the repo root). On every push to `main`, it:

1. Installs dependencies in `vastotech-next/`
2. Runs `npm run build` (generates `out/`)
3. Publishes `out/` to GitHub Pages

**One-time GitHub setup:**

1. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. The `public/CNAME` file (containing `vastotech.in`) will be copied into `out/` automatically by Next.js, preserving your custom domain.
3. Push to `main` and watch the **Actions** tab.

> **Note:** The existing static HTML site at the repo root will be *replaced* by the Next.js build once the workflow runs. If you want to keep both, move the legacy files into a `legacy/` folder before merging.

## Customization

- **Colors / spacing / shadows:** `tailwind.config.ts`
- **All copy, links, stats, logos:** `constants/data.ts`
- **SEO metadata:** `app/layout.tsx` (`metadata` export)
- **Images:** swap the Unsplash URLs in `constants/data.ts` for your own. For local images, drop them into `public/images/` and reference as `/images/your-file.jpg`.

## Notes on Static Export

- No server components fetching at request time, no API routes, no middleware, no ISR.
- `next/image` works with `unoptimized: true` — images are served as-is.
- All links use `<Link>` from `next/link` and resolve to static HTML files.
