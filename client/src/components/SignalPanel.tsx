// Design philosophy: Tactical Neo-Militarism for structural surfaces.
// This component makes panels feel energized through clipped geometry,
// reinforced rails, and visible accent channels instead of neutral cards.

import { ReactNode } from "react";
import { clsx } from "clsx";
import type { AccentTone } from "@/lib/designSystem";

type SignalPanelProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  tone?: AccentTone;
  className?: string;
  children?: ReactNode;
};

const toneMap: Record<AccentTone, string> = {
  critical: "signal-panel--critical",
  terminal: "signal-panel--terminal",
  telemetry: "signal-panel--telemetry",
  indigo: "signal-panel--indigo",
  warning: "signal-panel--warning",
  neutral: "signal-panel--neutral",
};

export function SignalPanel({
  eyebrow,
  title,
  body,
  tone = "neutral",
  className,
  children,
}: SignalPanelProps) {
  return (
    <section className={clsx("signal-panel", toneMap[tone], className)}>
      <div className="signal-panel__bevel" aria-hidden="true" />
      {(eyebrow || title) && (
        <header className="signal-panel__header">
          {eyebrow ? <p className="signal-panel__eyebrow">{eyebrow}</p> : null}
          {title ? <h3 className="signal-panel__title">{title}</h3> : null}
        </header>
      )}
      {body ? <p className="signal-panel__body">{body}</p> : null}
      {children ? <div className="signal-panel__content">{children}</div> : null}
    </section>
  );
}
