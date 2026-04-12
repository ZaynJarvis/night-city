/*
Style reminder — Tactical Neo-Militarism:
This page must feel like a mounted command surface, not a centered marketing template. Use near-black structure, red-led tactical emphasis, cyan technical linework, phosphor-green terminal moments, clipped geometry, and Rajdhani-forward hierarchy throughout.
*/

import SignalPanel from "@/components/SignalPanel";
import TerminalPreview from "@/components/TerminalPreview";
import {
  assetUrls,
  componentRules,
  cssSnippet,
  jsonTokenSnippet,
  palette,
  references,
  terminalBlueprint,
  typography,
} from "@/lib/designSystem";
import { ArrowRight, ShieldAlert, SquareTerminal, Type } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="cp-site-shell">
        <section className="cp-hero-grid">
          <div className="cp-panel cp-hero-copy">
            <p className="cp-kicker">RESEARCH-BACKED DESIGN BUNDLE</p>
            <h1 className="cp-hero-title">
              Cyberpunk 2077-inspired
              <span>design system extraction</span>
            </h1>
            <p className="cp-lead">
              A bundle built from wide research across the provided Behance references and supporting type and UX sources. The resulting system reproduces the vibe through disciplined color roles, Rajdhani-led typography, clipped geometry, terminal-grade selection, and diegetic screen framing.
            </p>
            <div className="cp-chip-row">
              <span className="cp-chip">TACTICAL NEO-MILITARISM</span>
              <span className="cp-chip">TERMINAL SURFACES</span>
              <span className="cp-chip">COMPONENT ECOLOGY</span>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="cp-stat-block">
                <span className="cp-stat-value">07</span>
                <span className="cp-stat-label">core palette tokens</span>
              </div>
              <div className="cp-stat-block">
                <span className="cp-stat-value">03</span>
                <span className="cp-stat-label">type roles</span>
              </div>
              <div className="cp-stat-block">
                <span className="cp-stat-value">04</span>
                <span className="cp-stat-label">primary source threads</span>
              </div>
            </div>
          </div>

          <div className="cp-panel cp-hero-visual">
            <img src={assetUrls.hero} alt="Cyberpunk-inspired neomilitarist hero artwork" className="cp-cover-image" />
            <div className="cp-overlay-card left-6 top-6">
              <span className="cp-kicker">PRIMARY SIGNAL</span>
              <strong>#F75049</strong>
              <p>Use for decisive actions, tactical tabs, and high-pressure system prompts.</p>
            </div>
            <div className="cp-overlay-card right-6 bottom-6 max-w-xs">
              <span className="cp-kicker">LAYOUT LOGIC</span>
              <strong>Mounted instrumentation</strong>
              <p>Panels dock to rails and corners instead of floating as soft cards.</p>
            </div>
          </div>
        </section>

        <section className="cp-section-grid">
          <SignalPanel eyebrow="SYSTEM MODEL" title="What actually creates the vibe" accent="red">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="cp-metric-tile">
                <ShieldAlert className="cp-icon" />
                <h4>Hostile signal hierarchy</h4>
                <p>
                  One accent dominates each surface. Red commands tactical screens, green owns phosphor terminals, and cyan clarifies machine edges.
                </p>
              </div>
              <div className="cp-metric-tile">
                <Type className="cp-icon" />
                <h4>Operational typography</h4>
                <p>
                  Rajdhani carries the workload, Orbitron injects display flavor, and monospaced text anchors code-grid credibility.
                </p>
              </div>
              <div className="cp-metric-tile">
                <SquareTerminal className="cp-icon" />
                <h4>Embedded shell logic</h4>
                <p>
                  The interface reads like mounted hardware through thin rails, clipped corners, dense metadata, and strict screen framing.
                </p>
              </div>
            </div>
          </SignalPanel>

          <SignalPanel eyebrow="PALETTE EXTRACTION" title="Where to use which color" accent="cyan">
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {palette.map((swatch) => (
                <article key={swatch.token} className="cp-swatch-card">
                  <div className="cp-swatch-bar" style={{ background: swatch.hex }} />
                  <div className="cp-swatch-copy">
                    <p className="cp-row-meta">{swatch.token}</p>
                    <h4>{swatch.hex}</h4>
                    <p className="cp-swatch-role">{swatch.role}</p>
                    <p>{swatch.use}</p>
                  </div>
                </article>
              ))}
            </div>
          </SignalPanel>
        </section>

        <section className="cp-section-grid three-up">
          <SignalPanel eyebrow="TYPOGRAPHY" title="Font system" accent="green">
            <div className="space-y-4">
              {typography.map((item, index) => (
                <article key={item.label} className="cp-type-card">
                  <p className="cp-row-meta">{item.label}</p>
                  <h4 className={index === 1 ? "font-orbitron" : index === 2 ? "font-mono" : "font-rajdhani"}>
                    {item.specimen}
                  </h4>
                  <p>
                    <strong>{item.family}</strong> should be used for {item.usage.toLowerCase()}
                  </p>
                </article>
              ))}
            </div>
          </SignalPanel>

          <SignalPanel eyebrow="COMPONENT ECOLOGY" title="Reusable building blocks" accent="red">
            <div className="space-y-4">
              {componentRules.map((rule) => (
                <article key={rule.name} className="cp-rule-card">
                  <h4>{rule.name}</h4>
                  <p>{rule.summary}</p>
                  <div className="cp-inline-rail" />
                  <p className="cp-row-meta">{rule.colorRule}</p>
                </article>
              ))}
            </div>
          </SignalPanel>

          <SignalPanel eyebrow="VISUAL VOCABULARY" title="Shape language atlas" accent="cyan">
            <div className="space-y-5">
              <img src={assetUrls.vocabulary} alt="Cyberpunk-inspired vocabulary board" className="cp-embedded-image" />
              <p className="text-[rgba(255,255,255,0.72)]">
                The recurring motifs are clipped frames, target brackets, telemetry strips, segmented bars, waveform rails, data ladders, and mini-map containers. The system feels coherent because these motifs recur with discipline.
              </p>
            </div>
          </SignalPanel>
        </section>

        <TerminalPreview />

        <section className="cp-section-grid two-up">
          <SignalPanel eyebrow="TERMINAL BLUEPRINT" title="Specific rules for configuration, chat, and selection" accent="green">
            <div className="space-y-4">
              {terminalBlueprint.map((item) => (
                <article key={item.title} className="cp-rule-card">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </SignalPanel>

          <SignalPanel eyebrow="REFERENCE PLATE" title="Mailbox surface mood" accent="cyan">
            <img src={assetUrls.mailbox} alt="Cyberpunk-inspired mailbox interface artwork" className="cp-embedded-image" />
          </SignalPanel>
        </section>

        <section className="cp-section-grid two-up">
          <SignalPanel eyebrow="IMPLEMENTATION" title="Starter code" accent="red">
            <div className="grid gap-4 xl:grid-cols-2">
              <article className="cp-code-panel">
                <p className="cp-row-meta">JSON TOKENS</p>
                <pre>{jsonTokenSnippet}</pre>
              </article>
              <article className="cp-code-panel">
                <p className="cp-row-meta">CSS STATE RULES</p>
                <pre>{cssSnippet}</pre>
              </article>
            </div>
          </SignalPanel>

          <SignalPanel eyebrow="SOURCES" title="Research references" accent="cyan">
            <div className="space-y-3">
              {references.map((reference) => (
                <a
                  key={reference.id}
                  href={reference.href}
                  target="_blank"
                  rel="noreferrer"
                  className="cp-reference-link"
                >
                  <span>{reference.id}</span>
                  <span>{reference.title}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </SignalPanel>
        </section>

        <section className="cp-panel cp-footer-banner">
          <img src={assetUrls.terminal} alt="Cyberpunk-inspired terminal schematic artwork" className="cp-cover-image opacity-45" />
          <div className="relative z-10 max-w-4xl">
            <p className="cp-kicker">BUNDLE SUMMARY</p>
            <h2 className="cp-section-title text-left">Deliver with the system, not only the colors</h2>
            <p className="cp-lead max-w-3xl text-[rgba(255,255,255,0.76)]">
              The vibe comes from disciplined interaction logic: dark chassis, decisive signal colors, Rajdhani-led control surfaces, clipped geometry, metadata rails, and hard-edged selection states. If any one of those is removed, the language quickly degrades into generic neon UI.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
