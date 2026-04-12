# Night City

A Cyberpunk 2077-inspired design system and component library built with React, TypeScript, and Vite.

## Design System

### Philosophy: Tactical Neo-Militarism

Black is substrate, never destination. Every surface pushes accent energy forward through visible color channels, clipped geometry, scanline texture, and operational typography. The system avoids generic rounded cards, soft SaaS gradients, and dead black areas.

### Color Tokens

| Token | Hex | Role |
|-------|-----|------|
| Signal Red | `#F75049` | Commit actions, threat, critical state |
| Phosphor Green | `#73F855` | Active selection, terminal, confirmation |
| Focus Cyan | `#5EF6FF` | Telemetry, navigation, focus rings |
| Deep Indigo | `#0E0EE7` | System-state layers, depth staging |
| Amber | `#FFD84A` | Warnings, caution indicators |

### Accent Tones

Six semantic tones drive component theming: `critical`, `terminal`, `telemetry`, `indigo`, `warning`, `neutral`. Every interactive element, panel, and status chip is assigned a tone that controls border color, glow intensity, and background gradient.

### Typography

| Family | Role |
|--------|------|
| **Rajdhani** | Primary interaction text, UI labels, body copy |
| **Orbitron** | Display/spectacle type, hero headings, branding |
| **Space Mono** | Machine-readable content, code blocks, terminal output |

### Glitch Effects

Two distinct glitch systems from [glitch-city-transitions](https://github.com/ZaynJarvis/glitch-city-transitions):

**Scanline Tear** (buttons, chips, links) — Horizontal clip-path slice displacement with RGB channel separation. Creates a brief horizontal rip through the element on hover, with magenta/cyan edge coloring and screen-blended overlay.

**Hologram** (section containers, hero) — Subtle 3D perspective oscillation with cyan glow and animated scanline sweep. Fires automatically at random intervals, simulating an unstable holographic projection. Containers breathe with slight rotational jitter and opacity fluctuation.

Both effects are powered by a shared `useGlitch` hook that drives CSS custom properties (`--glitch-severity`, `--glitch-offset-x/y`, `--glitch-clip-top/bottom`, `--glitch-active`) through randomized burst timing.

### Component Architecture

- **SignalPanel** — Primary content container with tone-based theming, clipped bevel detail, and hologram glitch wrapping
- **ScanlineTear** — Hover-triggered horizontal displacement wrapper for interactive elements
- **Hologram** — Auto-firing 3D perspective glitch wrapper for section-level containers
- **TerminalPreview** — Tabbed terminal interface (mailbox, config, selection matrix) with phosphor green active states
- **Action buttons** — Clipped-corner buttons with critical/telemetry variants and scanline tear glitch
- **Status chips** — Inline accent badges with tone coloring

### Panel Tones

Each `SignalPanel` accepts a `tone` prop that sets its visual identity:

- `critical` — Red-shifted gradient, red border glow
- `terminal` — Green-shifted gradient, phosphor border
- `telemetry` — Cyan-shifted gradient, cyan glow halo
- `indigo` — Deep blue gradient, indigo shadows
- `warning` — Amber gradient, caution energy
- `neutral` — Minimal accent, structural only

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Radix UI primitives (via shadcn/ui)

## References

- **[glitch-city-transitions](https://github.com/ZaynJarvis/glitch-city-transitions)** — Open-source cyberpunk glitch effect library. The scanline tear and hologram effects in this project are adapted from this library's `02-scanline-tear` and `08-hologram` components.
- **[CYBERCORE CSS](https://github.com/nicholasgillespie/cybercore-css)** — Cyberpunk-themed CSS framework
- **[Arwes](https://arwes.dev)** — Futuristic sci-fi React UI framework
