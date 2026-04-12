// Design philosophy: Tactical Neo-Militarism as a generated showcase.
// This component renders the library from structured design-system data so the user gets
// both a standalone page and reusable code that can scale with additional themed components.

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

export function CyberpunkComponentLibrary() {
  return (
    <div className="cyber-library">
      <section className="cyber-hero">
        <div className="cyber-hero__copy">
          <p className="cyber-hero__eyebrow">CYBERPUNK COMPONENT LIBRARY // STANDALONE PAGE</p>
          <h1 className="cyber-hero__title">Accent-heavy components for a Night City terminal stack.</h1>
          <p className="cyber-hero__body">
            This library shifts the bundle away from mostly black presentation and toward a more useful system: louder signal red, brighter phosphor green, cyan telemetry, and reusable clipped components rendered from structured design data.
          </p>
          <div className="cyber-hero__chips">
            {statusChips.map((chip) => (
              <span key={chip.label} className={`status-chip ${toneClass[chip.accent]}`}>
                {chip.label}
              </span>
            ))}
          </div>
          <div className="cyber-hero__actions">
            <a href="#component-library" className="action-button action-button--critical">
              OPEN LIBRARY
            </a>
            <a href="#open-source" className="action-button action-button--telemetry">
              VIEW OPEN-SOURCE REFERENCES
            </a>
          </div>
        </div>

        <div className="cyber-hero__visual">
          <div className="hero-card hero-card--image">
            <img src={assetUrls.hero} alt="Cyberpunk 2077 user interface reference cover" />
          </div>
          <div className="hero-card hero-card--overlay">
            <div className="hero-card__rail">
              <RadioTower size={18} />
              <span>ACCENT CHANNELS BOOSTED</span>
            </div>
            <div className="hero-stat-grid">
              <div>
                <span>PRIMARY</span>
                <strong>#F75049</strong>
              </div>
              <div>
                <span>TERMINAL</span>
                <strong>#73F855</strong>
              </div>
              <div>
                <span>FOCUS</span>
                <strong>#5EF6FF</strong>
              </div>
              <div>
                <span>DEPTH</span>
                <strong>#0E0EE7</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="component-library" className="library-grid">
        <SignalPanel
          eyebrow="PALETTE // SEMANTIC ROLES"
          title="Color system"
          body="Use black as substrate, not destination. Each panel below assigns a role to accent channels so the interface stays expressive and operational."
          tone="critical"
          className="span-7"
        >
          <div className="palette-grid">
            {palette.map((token) => (
              <article key={token.name} className="palette-card" data-tone={token.tone}>
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
          body="Rajdhani governs interaction, Orbitron brands spectacle, and Space Mono stabilizes machine-readable content."
          tone="telemetry"
          className="span-5"
        >
          <div className="font-stack-preview">
            {fontSystem.map((font) => (
              <article key={font.family} className="font-card">
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
          body="The component library includes a reusable terminal preview that demonstrates mailbox density, configuration surfaces, and selection behavior with explicit accent semantics."
          tone="terminal"
        >
          <TerminalPreview />
        </SignalPanel>
      </section>

      <section className="library-grid">
        <SignalPanel
          eyebrow="GENERATOR // COMPONENT SPECIFICATIONS"
          title="Generated component catalog"
          body="Each section is rendered from structured data so the library can scale into a larger theme package without rewriting page code."
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
                    <div key={component.name} className="component-card" data-tone={component.accent}>
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
          body="The page ships with reusable components, but the command block below shows the intent directly: louder accent channels and a standalone route for the library itself."
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
          body="The library retains direct image references for the original art direction while shifting actual UI composition toward a more accent-rich implementation."
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
          body="The closest publicly built match is CYBERCORE CSS. Arwes is the strongest polished React framework. The list below includes the repo and public build for each candidate."
          tone="critical"
        >
          <div className="reference-library-list">
            {referenceLibraries.map((library, index) => (
              <article key={library.name} className="reference-library-card" data-tone={index === 0 ? "critical" : "telemetry"}>
                <div className="reference-library-card__title">
                  {index === 0 ? <ShieldAlert size={18} /> : index === 1 ? <LibraryBig size={18} /> : index === 2 ? <SwatchBook size={18} /> : <SquareTerminal size={18} />}
                  <div>
                    <h3>{library.name}</h3>
                    <p>{library.type}</p>
                  </div>
                </div>
                <p className="reference-library-card__body">{library.note}</p>
                <div className="reference-library-card__links">
                  <a href={library.url} target="_blank" rel="noreferrer">
                    Live build
                  </a>
                  <a href={library.repo} target="_blank" rel="noreferrer">
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
