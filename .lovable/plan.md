# Homepage Motion and Pixel-Cube Portrait

Add polished motion to the existing advocate homepage without changing its content, layout, colors, or contact behavior.

## Changes

- Add Framer Motion as the animation library.
- Fade the full-screen Lady Justice background into view over 1 second when the page loads.
- Replace the current reveal wrapper with a Framer Motion implementation so sections, headings, cards, and primary actions animate upward and fade in as they enter view.
- Stagger repeated groups such as practice areas, trust points, reviews, and contact details rather than triggering every item simultaneously.
- Preserve reduced-motion accessibility: visitors who request reduced motion will see content immediately without movement.

## Advocate portrait assembly

- Create a focused portrait component for the existing advocate photo in the About section.
- On desktop, divide the photo into a deterministic 20 × 15 grid (300 tiles).
- Give each tile the correct background-position so the assembled grid recreates the original portrait.
- Add a very faint gavel mark to each tile without obscuring the photograph.
- Animate tiles from deterministic scattered directions using only transform and opacity, then snap them into their final positions with a staggered spring sequence.
- After assembly, settle the portrait with a brief soft glow and reveal the existing caption/details.
- On mobile and reduced-motion devices, skip the 300-tile effect and use a lightweight one-second image fade instead.

## Technical details

- New component: desktop/mobile portrait animation with hydration-safe, deterministic offsets.
- Existing homepage sections remain semantically and visually unchanged.
- Animation properties are limited to transform and opacity; the final glow is a short CSS pseudo-element opacity transition so layout and paint remain stable.
- Keep all existing monochrome tokens and transparent curved cards.

## Verification

- Check desktop load, section scrolling, complete portrait assembly, and final locked image.
- Check mobile to confirm the standard portrait appears without the heavy cube scene.
- Confirm reduced-motion behavior, no horizontal overflow, no console errors, and a clean build.
