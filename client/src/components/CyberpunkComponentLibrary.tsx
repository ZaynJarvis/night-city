/*
File-specific style reminder — Tactical Neo-Militarism, now with visible accent dominance:
Use black only as structural depth. The eye must read signal red, phosphor green, telemetry cyan, and indigo immediately.
The hero should feel like a widescreen terminal stack with cohesive title color, a localized inversion window inside COMPONENT, and restrained but visible accent-channel energy.
Hover states should suggest unstable signal routing through irregular jitter and edge-born rectangular artifact blocks that appear briefly, then collapse back to a stable resting frame.
*/

import { useEffect } from "react";
import { Cpu, LibraryBig, RadioTower, ShieldAlert, SquareTerminal, SwatchBook, Type } from "lucide-react";
import { SignalPanel } from "@/components/SignalPanel";
import { TerminalPreview } from "@/components/TerminalPreview";
import {
  assetUrls,
  commandStream,
  fontSystem,
  librarySections,
  palette,
  referenceLibraries,
  statusChips,
  type AccentTone,
} from "@/lib/designSystem";

const toneClass: Record<AccentTone, string> = {
  critical: "tone-critical",
  terminal: "tone-terminal",
  telemetry: "tone-telemetry",
  indigo: "tone-indigo",
  warning: "tone-warning",
  neutral: "tone-neutral",
};

const heroAccentChannels = [
  { label: "SIGNAL RED", value: "#F75049", tone: "critical" as AccentTone },
  { label: "PHOSPHOR", value: "#73F855", tone: "terminal" as AccentTone },
  { label: "FOCUS CYAN", value: "#5EF6FF", tone: "telemetry" as AccentTone },
  { label: "DEEP INDIGO", value: "#0E0EE7", tone: "indigo" as AccentTone },
];

export function CyberpunkComponentLibrary() {
  useEffect(() => {
    const glitchTargets = Array.from(document.querySelectorAll<HTMLElement>(".glitch-hover"));

    const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;
    const randomSigned = (distance: number) => `${randomBetween(-distance, distance).toFixed(2)}px`;
    const randomPercent = (min: number, max: number) => `${randomBetween(min, max).toFixed(1)}%`;
    const randomLength = (min: number, max: number) => `${randomBetween(min, max).toFixed(2)}rem`;
    const applyGlitchSeed = (element: HTMLElement) => {
      element.style.setProperty("--glitch-x-1", randomSigned(1.8));
      element.style.setProperty("--glitch-y-1", randomSigned(1.2));
      element.style.setProperty("--glitch-x-2", randomSigned(2.8));
      element.style.setProperty("--glitch-y-2", randomSigned(1.5));
      element.style.setProperty("--glitch-x-3", randomSigned(1.6));
      element.style.setProperty("--glitch-y-3", randomSigned(1.1));
      element.style.setProperty("--glitch-skew-1", `${randomBetween(-1.2, 1.2).toFixed(2)}deg`);
      element.style.setProperty("--glitch-skew-2", `${randomBetween(-1.4, 1.4).toFixed(2)}deg`);
      element.style.setProperty("--artifact-a-y", randomPercent(6, 32));
      element.style.setProperty("--artifact-b-y", randomPercent(18, 54));
      element.style.setProperty("--artifact-c-y", randomPercent(10, 28));
      element.style.setProperty("--artifact-d-y", randomPercent(8, 26));
      element.style.setProperty("--artifact-a-w", randomPercent(12, 26));
      element.style.setProperty("--artifact-b-w", randomPercent(14, 28));
      element.style.setProperty("--artifact-c-w", randomPercent(10, 22));
      element.style.setProperty("--artifact-d-w", randomPercent(12, 24));
      element.style.setProperty("--artifact-a-h", randomLength(0.25, 0.75));
      element.style.setProperty("--artifact-b-h", randomLength(0.3, 0.9));
      element.style.setProperty("--artifact-c-h", randomLength(0.25, 0.85));
      element.style.setProperty("--artifact-d-h", randomLength(0.35, 1));
      element.style.setProperty("--artifact-shift", `${randomBetween(-8, 8).toFixed(1)}%`);
      element.style.setProperty("--artifact-drift", `${randomBetween(-5, 5).toFixed(1)}%`);
    };

    const listeners = glitchTargets.map((element) => {
      const handleActivate = () => applyGlitchSeed(element);
      element.addEventListener("pointerenter", handleActivate);
      element.addEventListener("focus", handleActivate);
      handleActivate();
      return { element, handleActivate };
    });

    return () => {
      listeners.forEach(({ element, handleActivate }) => {
        element.removeEventListener("pointerenter", handleActivate);
        element.removeEventListener("focus", handleActivate);
      });
    };
  }, []);

  return (
    <div className="cyber-library">
      <section className="cyber-hero">
        <div className="cyber-hero__copy">
          <p className="cyber-hero__eyebrow">CYBERPUNK COMPONENT LIBRARY // STANDALONE PAGE</p>
          <h1 className="cyber-hero__title" aria-label="Accent-heavy component library for a Night City terminal stack.">
            <span className="cyber-hero__title-line" data-tone="neutral">
              ACCENT-
            </span>
            <span className="cyber-hero__title-line" data-tone="critical">
              HEAVY
            </span>
            <span className="cyber-hero__title-line" data-tone="terminal">
              <span className="cyber-hero__title-word cyber-hero__title-word--inverted" data-text="COMPONENT">
                COMPONENT
              </span>
            </span>
            <span className="cyber-hero__title-line" data-tone="telemetry">
              LIBRARY
            </span>
            <span className="cyber-hero__title-line" data-tone="indigo">
              STACK.
            </span>
          </h1>
          <p className="cyber-hero__body">
            The page now pushes accent channels into the foreground instead of leaving them trapped inside dark substrate. Signal red drives decisive interaction, phosphor green owns terminal selection, cyan marks telemetry and navigation, and indigo deepens system-state layers.
          </p>

          <div className="cyber-hero__accent-rail" aria-label="Accent color channels">
            {heroAccentChannels.map((channel) => (
              <div key={channel.label} className={`accent-rail-card tone-${channel.tone}`}>
                <span>{channel.label}</span>
                <strong>{channel.value}</strong>
              </div>
            ))}
          </div>

          <div className="cyber-hero__chips">
            {statusChips.map((chip) => (
              <span key={chip.label} className={`status-chip glitch-hover ${toneClass[chip.accent]}`}>
                {chip.label}
              </span>
            ))}
          </div>
          <div className="cyber-hero__actions">
            <a href="#component-library" className="action-button action-button--critical glitch-hover">
              OPEN LIBRARY
            </a>
            <a href="#open-source" className="action-button action-button--telemetry glitch-hover">
              VIEW OPEN-SOURCE REFERENCES
            </a>
          </div>
        </div>

        <div className="cyber-hero__visual">
          <div className="hero-card hero-card--image hero-card--glow">
            <img src={assetUrls.hero} alt="Cyberpunk 2077 user interface reference cover" />
          </div>


          <div className="hero-card hero-card--overlay hero-card--telemetry">
            <div className="hero-card__rail">
              <RadioTower size={18} />
              <span>ACCENT CHANNELS BOOSTED</span>
            </div>
            <div className="hero-stat-grid">
              {heroAccentChannels.map((channel) => (
                <div key={channel.label} data-tone={channel.tone} className="glitch-hover">
                  <span>{channel.label}</span>
                  <strong>{channel.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="component-library" className="library-grid">
        <SignalPanel
          eyebrow="PALETTE // SEMANTIC ROLES"
          title="Color system"
          body="Use black as substrate, not destination. The accent channels below should be seen immediately and assigned clearly: red for commit and threat, lime for active selection, cyan for focus and telemetry, indigo for deep-system staging."
          tone="critical"
          className="span-7"
        >
          <div className="palette-grid">
            {palette.map((token) => (
              <article key={token.name} className="palette-card glitch-hover" data-tone={token.tone}>
                <div className="palette-card__swatch" style={{ background: token.value }} />
                <div>
                  <p className="palette-card__title">{token.name}</p>
                  <p className="palette-card__value">{token.value}</p>
                  <p className="palette-card__body">{token.usage}</p>
                </div>
              </article>
            ))}
          </div>
        </SignalPanel>

        <SignalPanel
          eyebrow="TYPE // HIERARCHY"
          title="Font system"
          body="Rajdhani governs interaction, Orbitron brands spectacle, and Space Mono stabilizes machine-readable content. Hover states deliberately fracture color, but typography must remain disciplined and legible."
          tone="telemetry"
          className="span-5"
        >
          <div className="font-stack-preview">
            {fontSystem.map((font) => (
              <article key={font.family} className="font-card glitch-hover">
                <p className="font-card__family">{font.family}</p>
                <p className="font-card__role">{font.role}</p>
                <p className="font-card__sample" data-font={font.family}>
                  {font.sample}
                </p>
                <p className="font-card__body">{font.rationale}</p>
              </article>
            ))}
          </div>
        </SignalPanel>
      </section>

      <section className="library-grid library-grid--single">
        <SignalPanel
          eyebrow="TERMINAL // MAILBOX, CONFIG, SELECTION"
          title="Terminal interface patterns"
          body="The component library includes a reusable terminal preview that now carries louder active-state color, harsher contrast jumps, and more explicit machine-selection behavior."
          tone="terminal"
        >
          <TerminalPreview />
        </SignalPanel>
      </section>

      <section className="library-grid">
        <SignalPanel
          eyebrow="GENERATOR // COMPONENT SPECIFICATIONS"
          title="Generated component catalog"
          body="Each section is rendered from structured data so the library can scale into a larger theme package without rewriting page code. The hover treatment simulates unstable routing instead of soft opacity-only motion."
          tone="warning"
          className="span-12"
        >
          <div className="generated-library">
            {librarySections.map((section) => (
              <article key={section.id} className="generated-library__section">
                <div className="generated-library__intro">
                  <p>{section.eyebrow}</p>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>
                <div className="generated-library__cards">
                  {section.components.map((component) => (
                    <div key={component.name} className="component-card glitch-hover" data-tone={component.accent}>
                      <div className="component-card__header">
                        <span className={`status-chip ${toneClass[component.accent]}`}>{component.accent}</span>
                        <strong>{component.name}</strong>
                      </div>
                      <p className="component-card__body">{component.description}</p>
                      <p className="component-card__usage">{component.usage}</p>
                      <div className="component-card__states">
                        {component.states.map((state) => (
                          <span key={state}>{state}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SignalPanel>
      </section>

      <section className="library-grid">
        <SignalPanel
          eyebrow="CODE // EMBEDDED EXAMPLE"
          title="Implementation starter"
          body="The route ships with reusable components, but the command block below keeps the implementation intent explicit: standalone library routing, louder accent channels, and overtly unstable hover behavior."
          tone="indigo"
          className="span-6"
        >
          <div className="command-block">
            {commandStream.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
        </SignalPanel>

        <SignalPanel
          eyebrow="ASSETS // REFERENCE PANELS"
          title="Visual reference surfaces"
          body="The original art references remain visible, but the live library no longer buries its accents beneath neutral darkness. The right column acts as a bright signal field, not a passive screenshot holder."
          tone="telemetry"
          className="span-6"
        >
          <div className="reference-surface-grid">
            <img src={assetUrls.terminal} alt="Cyberpunk 2077 UI art bible reference" />
            <img src={assetUrls.mailbox} alt="Cyberpunk 2077 mailbox interface reference" />
            <img src={assetUrls.vocabulary} alt="Cyberpunk 2077 vocabulary reference board" />
          </div>
        </SignalPanel>
      </section>

      <section id="open-source" className="library-grid library-grid--single">
        <SignalPanel
          eyebrow="OPEN SOURCE // BUILT REFERENCES"
          title="Already-built libraries worth using"
          body="The closest publicly built match is CYBERCORE CSS. Arwes is the strongest polished React framework. The list below keeps both the live build and source repository visible so you can adopt or fork immediately."
          tone="critical"
        >
          <div className="reference-library-list">
            {referenceLibraries.map((library, index) => (
              <article key={library.name} className="reference-library-card glitch-hover" data-tone={index === 0 ? "critical" : "telemetry"}>
                <div className="reference-library-card__title">
                  {index === 0 ? <ShieldAlert size={18} /> : index === 1 ? <LibraryBig size={18} /> : index === 2 ? <SwatchBook size={18} /> : <SquareTerminal size={18} />}
                  <div>
                    <h3>{library.name}</h3>
                    <p>{library.type}</p>
                  </div>
                </div>
                <p className="reference-library-card__body">{library.note}</p>
                <div className="reference-library-card__links">
                  <a href={library.url} target="_blank" rel="noreferrer" className="glitch-hover">
                    Live build
                  </a>
                  <a href={library.repo} target="_blank" rel="noreferrer" className="glitch-hover">
                    Source repo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </SignalPanel>
      </section>

      <section className="footer-rails">
        <div className="footer-rail"><Cpu size={16} /> Generated from structured design tokens</div>
        <div className="footer-rail"><Type size={16} /> Rajdhani + Orbitron + Space Mono</div>
        <div className="footer-rail"><SwatchBook size={16} /> Red, lime, cyan, and indigo accent strategy</div>
      </section>
    </div>
  );
}
