// Design philosophy: Tactical Neo-Militarism for terminal surfaces.
// The terminal preview must feel powered, operational, and semantically color-coded:
// acid lime for live selection, red for decisive risk, cyan for telemetry, and bright rails over dark structure.

import { useMemo, useState } from "react";
import { commandStream, configMatrix, mailboxThreads, terminalRules } from "@/lib/designSystem";
import { ScanlineTear } from "@/components/ScanlineTear";

export function TerminalPreview() {
  const [mode, setMode] = useState<"mailbox" | "config" | "selection">("mailbox");
  const [selectedMessage, setSelectedMessage] = useState(mailboxThreads[0]?.subject ?? "");

  const activeMessage = useMemo(
    () => mailboxThreads.find((thread) => thread.subject === selectedMessage) ?? mailboxThreads[0],
    [selectedMessage],
  );

  return (
    <section className="terminal-shell">
      <header className="terminal-shell__rail">
        <span>RIPPERDOC SURGICAL SOFTWARE V2</span>
        <span>COMPONENT LIBRARY TERMINAL</span>
        <span>BUILD 6.47.48441.R15</span>
      </header>

      <div className="terminal-shell__toolbar">
        <div>
          <p className="signal-panel__eyebrow">TERMINAL INTERFACE DESIGN</p>
          <h3 className="terminal-shell__title">Configuration, chat, selection</h3>
        </div>
        <div className="terminal-tabs" role="tablist" aria-label="Terminal modes">
          {[
            { key: "mailbox", label: "MAILBOX" },
            { key: "config", label: "CONFIG" },
            { key: "selection", label: "SELECTION" },
          ].map((tab) => (
            <ScanlineTear key={tab.key} config={{ trigger: 'hover', minInterval: 1800, maxInterval: 4500, minSeverity: 0.3, maxSeverity: 0.8 }}>
              <button
                type="button"
                className="terminal-tabs__button"
                data-active={mode === tab.key}
                onClick={() => setMode(tab.key as "mailbox" | "config" | "selection")}
              >
                {tab.label}
              </button>
            </ScanlineTear>
          ))}
        </div>
      </div>

      {mode === "mailbox" ? (
        <div className="terminal-layout terminal-layout--mailbox">
          <div className="terminal-module terminal-module--green">
            <div className="terminal-module__title">A // MAIL BOX</div>
            <div className="terminal-message-list">
              {mailboxThreads.map((thread, index) => (
                <ScanlineTear key={thread.subject} config={{ trigger: 'hover', minInterval: 1800, maxInterval: 4500, minSeverity: 0.3, maxSeverity: 0.8 }}>
                  <button
                    type="button"
                    className="terminal-message-row"
                    data-tone={thread.accent}
                    data-selected={activeMessage?.subject === thread.subject}
                    onClick={() => setSelectedMessage(thread.subject)}
                  >
                    <div>
                      <div className="terminal-message-row__subject">{thread.subject}</div>
                      <div className="terminal-message-row__meta">FROM: {thread.sender}</div>
                    </div>
                    <div className="terminal-message-row__meta">0{index + 1}</div>
                  </button>
                </ScanlineTear>
              ))}
            </div>
          </div>

          <div className="terminal-module terminal-module--red">
            <div className="terminal-module__title">B // MESSAGE</div>
            <div className="terminal-readout">
              <div className="terminal-readout__banner">
                <div>
                  <div className="terminal-readout__heading">{activeMessage?.subject}</div>
                  <div className="terminal-message-row__meta">FROM: {activeMessage?.sender}</div>
                </div>
                <span className="terminal-chip" data-tone={activeMessage?.accent ?? "terminal"}>
                  {activeMessage?.state}
                </span>
              </div>
              <p>
                Route-level communication should use a high-contrast headline, clear ownership metadata, and wide action strips. The selected row must invert decisively rather than merely tinting, because ambiguity weakens the machine-like reading of the interface.
              </p>
              <div className="terminal-actions">
                <ScanlineTear config={{ trigger: 'hover', minInterval: 1800, maxInterval: 4500, minSeverity: 0.3, maxSeverity: 0.8 }}>
                  <button type="button" className="terminal-action" data-tone="terminal">REPLY</button>
                </ScanlineTear>
                <ScanlineTear config={{ trigger: 'hover', minInterval: 1800, maxInterval: 4500, minSeverity: 0.3, maxSeverity: 0.8 }}>
                  <button type="button" className="terminal-action" data-tone="telemetry">FORWARD</button>
                </ScanlineTear>
                <ScanlineTear config={{ trigger: 'hover', minInterval: 1800, maxInterval: 4500, minSeverity: 0.3, maxSeverity: 0.8 }}>
                  <button type="button" className="terminal-action" data-tone="critical">DELETE</button>
                </ScanlineTear>
                <ScanlineTear config={{ trigger: 'hover', minInterval: 1800, maxInterval: 4500, minSeverity: 0.3, maxSeverity: 0.8 }}>
                  <button type="button" className="terminal-action" data-tone="warning">REPORT SPAM</button>
                </ScanlineTear>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {mode === "config" ? (
        <div className="terminal-layout terminal-layout--config">
          <div className="terminal-module terminal-module--cyan">
            <div className="terminal-module__title">SYSTEM STATUS</div>
            <div className="config-grid">
              {configMatrix.map((item) => (
                <div key={item.label} className="config-grid__item" data-tone={item.accent}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="terminal-module terminal-module--indigo">
            <div className="terminal-module__title">COMMAND STREAM</div>
            <div className="command-stream">
              {commandStream.map((line) => (
                <div key={line} className="command-stream__line">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {mode === "selection" ? (
        <div className="terminal-layout terminal-layout--selection">
          <div className="terminal-module terminal-module--green">
            <div className="terminal-module__title">SELECTION MATRIX</div>
            <div className="selection-matrix">
              {Array.from({ length: 16 }).map((_, index) => {
                const tone = index === 5 || index === 10 ? "critical" : index % 3 === 0 ? "telemetry" : "terminal";
                return (
                  <ScanlineTear key={index} config={{ trigger: 'hover', minInterval: 1800, maxInterval: 4500, minSeverity: 0.3, maxSeverity: 0.8 }}>
                    <button
                      type="button"
                      className="selection-matrix__cell"
                      data-tone={tone}
                      data-selected={index === 6 || index === 7}
                    >
                      T{index + 1}
                    </button>
                  </ScanlineTear>
                );
              })}
            </div>
          </div>

          <div className="terminal-module terminal-module--red">
            <div className="terminal-module__title">SELECTION RULES</div>
            <div className="terminal-rule-list">
              {terminalRules.map((rule) => (
                <p key={rule}>{rule}</p>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <footer className="terminal-shell__rail terminal-shell__rail--footer">
        <span>INTERFACE LOADED</span>
        <span>NEXUS NETWORK V10.8</span>
        <span>ACCENT CHANNELS BOOSTED</span>
      </footer>
    </section>
  );
}
