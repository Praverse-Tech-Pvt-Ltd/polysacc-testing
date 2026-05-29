# Polysaccharide Chemistry — Corporate Website

Corporate website for **Polysaccharide Chemistry Pvt Ltd**, a Mumbai-based pharmaceutical company specialising in polysaccharide-based therapies. The site presents the company's portfolio (Elmiron® and the Missed Bladder Disease initiative), clinical science, and a business enquiry form.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS custom properties
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend
- **Package manager:** pnpm
- **Deployment:** Vercel

## Getting Started

```bash
pnpm install
pnpm dev        # runs on http://localhost:3002
```

### Environment variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
```

## Project Structure

```
app/
  layout.tsx          # Root layout, fonts, nav, footer
  page.tsx            # Home page (all sections composed here)
  globals.css         # CSS custom properties and global styles

components/
  Hero.tsx            # Full-screen hero with molecular pattern
  StatsStrip.tsx      # Key clinical statistics bar
  CompanyStatement.tsx# Mission / about section
  ScienceSection.tsx  # Science pillars and clinical studies table
  PortfolioGrid.tsx   # Product and initiative cards
  ContactForm.tsx     # Enquiry form (sends email via Resend)
  Nav.tsx             # Top navigation
  Footer.tsx          # Site footer
  MolecularPattern.tsx# Decorative SVG background element
  AddressBlock.tsx    # Reusable address display

lib/
  data.ts             # All static content (company info, portfolio, stats, studies)
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server on port 3002 |
| `pnpm build` | Production build |
| `pnpm start` | Run production build locally |
| `pnpm lint` | ESLint |

## Content Updates

All site copy lives in [lib/data.ts](lib/data.ts). Edit that file to update company details, portfolio entries, statistics, or clinical study references without touching any component code.
