# Dr. Maya Reynolds, PsyD — Therapy Website

Front-end internship Stage 2 assignment for Grow My Therapy: a clone of
conejovalleycounseling.com/home, redesigned for a fictional therapist,
Dr. Maya Reynolds, using Next.js (App Router) + Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy (Vercel)

```bash
npm i -g vercel
vercel
```

Or just push this repo to GitHub and import it at vercel.com/new — zero config needed.

## What's here

- `app/` — root layout (fonts, metadata) and the single homepage (`page.tsx`)
- `components/` — one file per section: `Nav`, `Hero`, `WhoWeHelp`, `Services`,
  `About`, `OurOffice` (the new Part 3 section), `Faqs`, `Footer`
- `lib/content.ts` — all copy in one place, sourced from Maya's profile doc.
  Every FAQ, headline, and bio paragraph traces back to something in the
  profile — nothing invented beyond that.
- `tailwind.config.ts` — the new theme: deep pine green (`pine`), warm sand
  background (`sand`/`surface`), walnut and soft gold accents, paired with
  Fraunces (display serif) + Work Sans (body).

## Image placeholders — do this before submitting

Every photo slot is currently a gradient block with a small caption (its
suggested filename) instead of a real `<img>` — see `.img-slot` in
`app/globals.css`. That's deliberate: I can't pull images from the profile's
linked Google Drive folder or license stock photos on your behalf. Before you
submit:

1. Pull the real office photos from the Drive folder linked in Maya's
   profile doc for the three `office-*.jpg` slots in `OurOffice.tsx`.
2. Source (or shoot/generate) photos for the hero, About portrait, and the
   three "Who I Help" images — Unsplash/Pexels work well for a fictional
   brief like this. Match the warm, calm, natural-light feel of the palette.
3. Drop files into `public/images/...`, then swap each `<div className="img-slot" ...>`
   for a Next.js `<Image src="/images/..." alt="..." fill />` (the aspect-ratio
   wrapper divs are already sized correctly, so this is a drop-in swap).

## Content gaps to double check

`lib/content.ts` has a `TODO(Harsha)` comment at the top — the Drive doc only
rendered its meta description plus the bio paragraphs you had pasted in chat
when I read it. If the full doc includes a credentials list, specific
modalities (CBT/EMDR/etc.), session length, fees, or insurance info, add
those to the About and FAQ sections before recording the walkthrough.
