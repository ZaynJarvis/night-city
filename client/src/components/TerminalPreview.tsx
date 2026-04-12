/*
Style reminder — Tactical Neo-Militarism:
Use near-black structural fields, clipped frames, phosphor selection for terminal contexts, cyan linework for technical edges, and Rajdhani-led hierarchy. Every decision should reinforce an embedded machine-shell aesthetic rather than soft consumer UI.
*/

import { useMemo, useState } from "react";

const mailboxMessages = [
  {
    id: "msg-1",
    subject: "URGENT INFORMATION (!)",
    from: "MOM",
    time: "006.02.19:48",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "msg-2",
    subject: "HEIST DATA SENT TO YOU",
    from: "B0S000451",
    time: "183.02.09:01",
    preview:
      "Packet relays stabilised. Network trace preserved. Asset chain uploaded to cold storage.",
  },
  {
    id: "msg-3",
    subject: "YOU'LL REGRET THAT",
    from: "JACKIE",
    time: "193.02.09:57",
    preview:
      "Operator signal logged. Reminder marker attached to the active route and mirrored to the local cache.",
  },
  {
    id: "msg-4",
    subject: "SPECIAL OFFER TO YOU!",
    from: "JINX JINX STORE",
    time: "123.02.07:56",
    preview:
      "Promotional payload isolated in the sandbox. No execution privileges granted.",
  },
];

const configRows = [
  "SYSTEM STATUS",
  "NETWORK TRAFFIC",
  "SECURITY LOCKOUT",
  "ENCRYPTION LEVEL",
  "REMOTE NODE",
  "PROCESS MAP",
  "RUNTIME FLAGS",
  "COOLANT PATH",
];

const codeGrid = [
  ["5V", "D4", "55", "1C", "E9", "F2", "B0", "A7"],
  ["78", "7A", "BD", "EE", "0A", "9C", "11", "F0"],
  ["E3", "2C", "4D", "0B", "B4", "9A", "72", "C1"],
  ["8F", "53", "60", "A2", "E7", "B8", "14", "FF"],
];

export default function TerminalPreview() {
  const [mode, setMode] = useState<"mailbox" | "config">("mailbox");
  const [selectedMessageId, setSelectedMessageId] = useState("msg-1");
  const selectedMessage = useMemo(
    () => mailboxMessages.find((item) => item.id === selectedMessageId) ?? mailboxMessages[0],
    [selectedMessageId],
  );

  return (
    <section className="cp-panel cp-terminal-surface overflow-hidden">
      <div className="cp-telemetry-strip border-b border-[rgba(94,246,255,0.26)] px-4 py-3 sm:px-6">
        <span>RIPPERDOC SURGICAL SOFTWARE V2</span>
        <span>STORE ACCESS SCREEN</span>
        <span>BUILD 6.47.48441.R15</span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(94,246,255,0.18)] px-4 py-4 sm:px-6">
        <div>
          <p className="cp-kicker">TERMINAL INTERFACE DESIGN</p>
          <h3 className="cp-section-title text-left">Configuration, chat, selection</h3>
        </div>
        <div className="flex gap-2">
          {[
            { key: "mailbox", label: "MAILBOX" },
            { key: "config", label: "CONFIG" },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              data-active={mode === tab.key}
              onClick={() => setMode(tab.key as "mailbox" | "config")}
              className="cp-tab"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {mode === "mailbox" ? (
        <div className="grid gap-4 p-4 sm:grid-cols-[0.92fr_1.38fr] sm:p-6">
          <div className="cp-pane">
            <div className="cp-pane-heading">A  MAIL BOX</div>
            <div className="mt-4 space-y-3">
              {mailboxMessages.map((message) => {
                const selected = message.id === selectedMessage.id;
                return (
                  <button
                    key={message.id}
                    type="button"
                    data-selected={selected}
                    onClick={() => setSelectedMessageId(message.id)}
                    className="cp-terminal-row w-full text-left"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="cp-row-title">{message.subject}</div>
                        <div className="cp-row-meta">FROM: {message.from}</div>
                      </div>
                      <div className="cp-time-stamp">{message.time}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="cp-pane">
            <div className="cp-pane-heading">B  MESSAGE</div>
            <div className="mt-5 border border-[rgba(221,247,215,0.35)] bg-[rgba(0,0,0,0.52)] p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(221,247,215,0.18)] pb-4">
                <div>
                  <p className="font-rajdhani text-3xl font-semibold uppercase tracking-[0.08em] text-[var(--cp-green-soft)]">
                    {selectedMessage.subject}
                  </p>
                  <p className="mt-2 cp-row-meta">FROM: {selectedMessage.from}</p>
                </div>
                <p className="cp-time-stamp">{selectedMessage.time}</p>
              </div>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[rgba(255,255,255,0.78)]">
                {selectedMessage.preview}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['REPLY', 'FORWARD', 'DELETE', 'REPORT SPAM'].map((label, index) => (
                  <button key={label} type="button" className={`cp-action-cell ${index === 0 ? 'is-green' : ''}`}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 p-4 sm:grid-cols-[0.7fr_1.2fr_0.55fr] sm:p-6">
          <div className="cp-pane">
            <div className="cp-pane-heading">SYSTEM STATUS</div>
            <div className="mt-4 space-y-2">
              {configRows.map((row, index) => (
                <button key={row} type="button" data-selected={index === 1} className="cp-terminal-row w-full text-left">
                  <div className="cp-row-title text-base">{row}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="cp-pane">
            <div className="cp-pane-heading">DATA STREAM</div>
            <div className="mt-4 border border-[rgba(221,247,215,0.24)] bg-[rgba(2,5,4,0.88)] p-4">
              <div className="cp-code-grid">
                {codeGrid.flat().map((cell, index) => (
                  <span key={`${cell}-${index}`} data-selected={index === 10 || index === 11}>
                    {cell}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="cp-mini-module">
                <div className="cp-row-meta">WARNING</div>
                <p className="mt-2 text-sm leading-6 text-[rgba(255,255,255,0.68)]">
                  Remote selection time unsynced. Any loud secret or process will trigger lockout.
                </p>
              </div>
              <div className="cp-mini-module">
                <div className="cp-row-meta">BUFFER STATUS</div>
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <span key={index} className={`h-2 flex-1 ${index < 5 ? 'bg-[var(--cp-green)]' : 'bg-[rgba(255,255,255,0.12)]'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="cp-pane">
            <div className="cp-pane-heading">SECURITY LOCKOUT</div>
            <div className="mt-4 space-y-4">
              <div className="cp-mini-module">
                <div className="cp-row-meta">ENCRYPTION LEVEL</div>
                <div className="mt-3 flex gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--cp-green-soft)]">
                  <span>T1</span>
                  <span>T2</span>
                  <span>T3</span>
                  <span className="text-[rgba(255,255,255,0.36)]">T4</span>
                </div>
              </div>
              <div className="cp-mini-module border-[rgba(247,80,73,0.35)]">
                <div className="cp-row-meta text-[var(--cp-red)]">WARNING</div>
                <p className="mt-2 text-sm leading-6 text-[rgba(255,255,255,0.68)]">
                  Security layer latency detected. Manual override requires decisive confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="cp-telemetry-strip border-t border-[rgba(94,246,255,0.18)] px-4 py-3 sm:px-6">
        <span>INTERFACE LOADED</span>
        <span>PROVIDED BY NEXUS NETWORK V10.8</span>
        <span>FLAIR TRS 5MMP</span>
      </div>
    </section>
  );
}
