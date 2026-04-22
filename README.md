# Frontend Intern Assessment

Next.js + Tailwind CSS implementation of the TOBAMS Group training and development landing page.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- `next/font`
- `next/image`

## Design source

The original Figma file was not accessible from this environment, so the page was built from the provided assessment screenshot(s) and the exported TOBAMS image assets.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Useful scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Live URL

Pending final deployment after review.

## Design decisions and assumptions

- Built as a single marketing landing page with reusable section components under `/components`.
- Updated branding to TOBAMS Group across metadata, header, footer, and section copy.
- Replaced stock imagery with provided exported assets under `/public/tobams`.
- Kept the overall section rhythm intact while swapping in the actual supplied visuals.
- Implemented a responsive structure for mobile, tablet, and desktop based on the visible desktop composition and inferred layout behavior.

## Known gaps

- Exact pixel matching against the inaccessible Figma still needs manual refinement if you open the live design on your side.
- Tablet and mobile layouts were inferred because only desktop-oriented assets were available here.
- Final public deployment still needs to be attached.

## Accessibility notes

- Semantic landmarks are used: `header`, `main`, `section`, and `footer`.
- Buttons and links are keyboard-focusable with visible focus treatment.
- Images include meaningful alt text.

