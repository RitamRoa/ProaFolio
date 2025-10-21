# Matrix Portfolio

Matrix-inspired personal portfolio built with Next.js, JetBrains Mono, and Framer Motion. The site layers a GPU-friendly code rain, glitch transitions, and cursor-trail effects to create an always-dark digital mainframe aesthetic.

## Highlights

- Fullscreen canvas-based Matrix rain with parallax glare and scroll-linked dimming
- Boot sequence overlay, glitch typography, and cursor particle trail powered by Framer Motion
- Modular sections (`Hero`, `Projects`, `Experience`, `Contact`) staged with cinematic reveal animations
- Ambient “digital hum” toggle driven by the Web Audio API
- Neon contact form with animated scan lines and command-style quick links
- Built with pnpm, App Router, Tailwind v4 utilities, and typed content data

## Getting Started

```bash
pnpm install
pnpm dev
```

Visits run at http://localhost:3000. Update copy and visuals in `src/data/content.ts` and the section components under `src/components/sections/`.

## Available Scripts

- `pnpm dev` – start the Next.js development server
- `pnpm build` – create a production build
- `pnpm start` – serve the production build
- `pnpm lint` – run ESLint with the Next.js config

## Key Files & Folders

- `src/app/page.tsx` – assembles the background, boot overlay, and all sections
- `src/components/background/MatrixBackground.tsx` – canvas Matrix rain with parallax & scroll dimming
- `src/components/effects/*` – boot loader, cursor trail, and ambient audio hook
- `src/components/sections/*` – hero, projects, experience, and contact blocks
- `src/data/content.ts` – single source of truth for project, experience, and contact copy

## Animation & Performance Notes

- Canvas animation throttled with `requestAnimationFrame` and DPR scaling for crisp glyphs
- Parallax layers and glitch effects rely on Framer Motion springs for smooth GPU-accelerated transforms
- Cursor trail is capped to 16 particles to balance responsiveness and motion clarity
- Ambient sound uses Web Audio oscillators/noise; browsers require a user gesture before playback

## Deployment

Create an optimized build with `pnpm build` and deploy the `.next` output to your preferred static host (Vercel recommended for Next.js).
