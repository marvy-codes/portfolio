# Marvellous — Portfolio

Personal portfolio website for **Marvellous Olowookere**, a Full-Stack & Blockchain Engineer and Smart Contract Security Researcher.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Vanilla CSS with custom design tokens
- **Font:** [Inter](https://fonts.google.com/specimen/Inter) via `next/font`

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Design system & all styles
│   ├── layout.tsx       # Root layout, metadata, fonts
│   └── page.tsx         # Home page (assembles all sections)
├── components/
│   ├── Header.tsx       # Fixed header & mobile nav
│   ├── Hero.tsx         # Hero section with profile image
│   ├── ExpertiseTags.tsx
│   ├── About.tsx        # Bio, mindset cards, stats
│   ├── Experience.tsx   # Work timeline
│   ├── AuditFindings.tsx # Solidity & Move findings tables
│   ├── SecurityTools.tsx
│   ├── Writing.tsx      # Articles & threads
│   └── Footer.tsx       # Contact & social links
└── hooks/
    └── useScrollReveal.ts  # Intersection Observer scroll animations
```

## Build

```bash
npm run build
```
