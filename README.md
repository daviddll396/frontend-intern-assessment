# Frontend Intern Assessment

Next.js + Tailwind CSS implementation of the EduNOW training and development landing page.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- `next/font`
- `next/image`

## Figma / design source

The original assessment referenced a Figma file. Direct access to the Figma link was blocked in this environment, so the page was implemented from the provided desktop design screenshot and the assessment PDF requirements.

## Setup

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Useful scripts

```bash
pnpm dev
pnpm lint
pnpm build
pnpm start
```

## Live URL

Pending final deployment after review.

## Design decisions and assumptions

- Built as a single marketing landing page with reusable section components under `/components`.
- Used a plum / blush brand palette to stay close to the provided screenshot.
- Used remote photography through `next/image` because the original image assets were not provided.
- Implemented a responsive structure for mobile, tablet, and desktop based on the visible desktop composition and inferred layout behavior.
- Preserved the major desktop section rhythm from the reference:
  - header
  - hero
  - alternating services sections
  - featured dark program block
  - transformation hub section
  - consultant training block
  - testimonials
  - CTA + footer

## Known gaps

- The original Figma file was not directly accessible from this environment, so exact pixel matching may still need manual refinement against the live design file.
- Tablet and mobile layouts were inferred because only the desktop screenshot was available.
- Final public deployment still needs to be attached.

## Accessibility notes

- Semantic landmarks are used: `header`, `main`, `section`, and `footer`.
- Buttons and links are keyboard-focusable with visible focus treatment.
- Images include meaningful alt text.

## AI disclosure

AI assistance was used during implementation. The final code was reviewed, edited, and validated locally with:

```bash
pnpm lint
pnpm build
```
