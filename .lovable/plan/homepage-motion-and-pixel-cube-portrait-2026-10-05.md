# Homepage Motion and Pixel-Cube Portrait

Add polished motion to the existing advocate homepage without changing its content, layout, colors, or contact behavior.

## Changes

- Add Framer Motion as the animation library.
- Fade and slightly scale the full-screen Lady Justice into view over 1 second when the page loads.
- Animate the visible balance pans in a gentle opposing sway loop, with a subtle moving metallic glint. If the photographed scales cannot be isolated cleanly, overlay a precisely positioned, restrained balance treatment rather than altering the source image.
- Replace the current reveal wrapper with Framer Motion so every homepage section, heading, card, and button fades upward as it enters view.
- Stagger repeated groups such as practice areas, trust points, reviews, and contact details.
- Preserve reduced-motion accessibility: visitors who request reduced motion see content immediately without movement.

## Advocate portrait assembly

- Create a focused portrait component for the existing advocate photo in the About section.
- On desktop, divide the photo into a deterministic 20 × 15 grid (300 tiles).
- Give each tile the correct background position so the assembled grid recreates the original portrait.
- Add a very faint gavel mark to each tile without obscuring the photograph.
- Animate tiles from deterministic scattered directions and rotations using only transform and opacity, then snap them into place with stagger.
- Once assembled, fade the gavel marks, reveal the clear portrait, and briefly show a soft glow.
- On mobile, use a lighter pixel-grid reveal with fewer moving pieces and no heavy 3D rotation.

## Technical details

- Keep animation offsets deterministic to prevent hydration mismatch.
- Maintain the existing monochrome palette, transparent rounded blocks, content, links, chatbot, and contact behavior.
- Motion uses transform and opacity only; the glow is an opacity transition on an overlay.

## Verification

- Check desktop load, balance movement, scroll sequencing, portrait assembly, and final locked image.
- Check mobile fallback and reduced-motion behavior.
- Confirm no horizontal overflow, no console errors, and a clean build.
