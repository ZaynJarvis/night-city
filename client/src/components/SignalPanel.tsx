/*
Style reminder — Tactical Neo-Militarism:
Panels should feel mounted, clipped, and technical. Use thin cyan or white rails, near-black surfaces, compressed Rajdhani typography, and restrained red emphasis. Avoid soft cards and decorative roundness.
*/

import { ReactNode } from "react";

type SignalPanelProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  accent?: "red" | "cyan" | "green";
};

export default function SignalPanel({
  eyebrow,
  title,
  children,
  accent = "cyan",
}: SignalPanelProps) {
  return (
    <section className={`cp-panel cp-signal-panel accent-${accent}`}>
      <div className="flex items-center justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] px-5 py-4 sm:px-6">
        <div>
          <p className="cp-kicker">{eyebrow}</p>
          <h3 className="cp-section-title text-left">{title}</h3>
        </div>
        <div className="cp-corner-glyph" aria-hidden="true" />
      </div>
      <div className="px-5 py-5 sm:px-6 sm:py-6">{children}</div>
    </section>
  );
}
