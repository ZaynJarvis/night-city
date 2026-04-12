# Cyberpunk glitch refinement notes

## Source 1: Medium — How I Built a Cyberpunk 2077 Style Glitch Card using CSS & JS
- URL: https://medium.com/@musamalaysia379/cyberpunk-glitch-card-build-an-insane-3d-ui-free-code-332cc9e57b53
- Key usable takeaway: the text-glitch treatment works by duplicating the same text in layered pseudo-elements, offsetting them slightly, and animating clipping so the text appears to split and twitch only during the effect burst.
- Relevance to revision: keep a stable base layer, then add temporary offset layers for the jitter window instead of leaving the title permanently unstable.

## Source 2: Behance — Cyberpunk 2077 User Interface (Part 1)
- URL: https://www.behance.net/gallery/118663901/Cyberpunk-2077User-Interface-(Part-1)
- Key usable takeaway: the visual hierarchy relies on large uninterrupted word-shapes, bold neon accents against dark structure, and selective high-energy insertions rather than rainbow-per-line coloring.
- Relevance to revision: restore stronger cohesive title coloring, preserve the big word silhouette, and treat inversion as a focused local event inside the word rather than hiding the affected letters.

## Implementation direction derived from research
1. Keep the hero typography readable and stable at rest.
2. Use brief glitch bursts driven by layered text offsets, not permanent motion.
3. Replace linear stripe-only artifacts with edge-biased rectangular RGB blocks.
4. Let those blocks appear slightly after jitter begins and fade out in staggered steps, so the final resting state is clean.
5. Make the inversion effect a windowed overlay on the COMPONENT word, so the letters remain visible but locally color-inverted.

## Post-fix implementation check

The revised hero now keeps a cohesive off-white title treatment instead of assigning each line a separate dominant fill. Accent differentiation is handled through restrained glow rather than full line recoloring.

The `COMPONENT` line now uses a localized inversion window inside the word itself: the base glyph remains visible, while only a central slice flips to dark text on a bright panel. The previously mistaken red framed breach overlay has been removed.

The hover-glitch system has been rebuilt around irregular jitter plus edge-anchored rectangular color blocks, with per-interaction CSS variable seeding from JavaScript so repeated hovers do not replay the exact same pattern. The artifact overlays are transient and designed to disappear, leaving the resting state stable.
