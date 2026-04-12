export const assetUrls = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032193923/K536WyWrddEkbe4Jmc7LtT/part2-cover_18caee84.webp",
  terminal: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032193923/K536WyWrddEkbe4Jmc7LtT/ui-art-bible_66c016ad.webp",
  mailbox: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032193923/K536WyWrddEkbe4Jmc7LtT/mailbox-reference_5ab74018.webp",
  vocabulary: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032193923/K536WyWrddEkbe4Jmc7LtT/cp2077-vocabulary-board-ZdPqAhoeKW84pyFnoFLAD9.webp",
};

export const palette = [
  {
    token: "base.black.950",
    hex: "#050505",
    role: "Structural substrate",
    use: "App background, inactive panels, modal underlays, letterbox framing.",
  },
  {
    token: "signal.green.500",
    hex: "#73F855",
    role: "Terminal-positive accent",
    use: "Phosphor selection, telemetry, encryption tiers, healthy system feedback.",
  },
  {
    token: "alert.red.600",
    hex: "#BB4141",
    role: "Muted warning rail",
    use: "Persistent danger modules, subdued critical rails, stressed states.",
  },
  {
    token: "alert.red.500",
    hex: "#F75049",
    role: "Primary hostile signal",
    use: "Primary CTA, tactical tabs, alerts, combat-grade focus surfaces.",
  },
  {
    token: "signal.cyan.400",
    hex: "#5EF6FF",
    role: "Technical highlight",
    use: "Borders, hover, focus rings, diagrams, machine linework.",
  },
  {
    token: "system.blue.700",
    hex: "#0E0EE7",
    role: "Deep subsystem marker",
    use: "Network overlays, waveform traces, low-frequency technical data.",
  },
  {
    token: "text.white.000",
    hex: "#FFFFFF",
    role: "Critical foreground",
    use: "Headings, labels, statistics, high-contrast copy on dark surfaces.",
  },
];

export const typography = [
  {
    label: "Operational UI",
    family: "Rajdhani",
    usage: "Most interface text, panel headings, tabs, buttons, metadata.",
    specimen: "SCANNING SIGNAL ROUTE / ACCESS PERMITTED",
  },
  {
    label: "Decorative machine display",
    family: "Orbitron",
    usage: "Subsystem stamps, ornamental titles, low-frequency display accents.",
    specimen: "NEXUS NETWORK // TACTICAL RELAY",
  },
  {
    label: "Code-grid / terminal",
    family: "Share Tech Mono",
    usage: "Hacking matrices, logs, diagnostics, fixed-width telemetry.",
    specimen: "SEQ_04 > BUFFER LINK // 5F-A3-C9-11",
  },
];

export const componentRules = [
  {
    name: "Tactical Tabs",
    summary: "Segmented, clipped, rail-attached controls with hard-latched active states.",
    colorRule: "Use red for decisive active state, cyan for technical focus.",
  },
  {
    name: "System Panels",
    summary: "Thin borders, telemetry headers, and dense metadata crumbs that imply machine ownership.",
    colorRule: "Black field, white copy, cyan linework, selective red alerts.",
  },
  {
    name: "Selection Lists",
    summary: "Vertical list structures where the selected row inverts strongly instead of softly tinting.",
    colorRule: "Use green fill in terminal contexts and red fill in tactical contexts.",
  },
  {
    name: "Telemetry Strips",
    summary: "Long rails used for build codes, source tags, encryption level, and system provenance.",
    colorRule: "Predominantly white or cyan, with red only for exceptions.",
  },
];

export const terminalBlueprint = [
  {
    title: "Configuration surfaces",
    body: "Build them as framed shells with explicit top and bottom rails, a narrow navigation list, and one or two detail panes. The shell should read as secure infrastructure rather than a floating dashboard.",
  },
  {
    title: "Mailbox and chat",
    body: "Use a left-column ownership pane and a right-column reading pane. The selected row should become a phosphor slab, not a polite hover tint.",
  },
  {
    title: "Code-grid and hacking",
    body: "Keep the matrix monospaced and rhythmically strict. Selection should use block inversion or bracket overlays, not soft shadow.",
  },
];

export const references = [
  {
    id: "[1]",
    title: "Cyberpunk 2077 User Interface (Part 1)",
    href: "https://www.behance.net/gallery/118663901/Cyberpunk-2077User-Interface-(Part-1)",
  },
  {
    id: "[2]",
    title: "Cyberpunk 2077 User Interface (Part 2)",
    href: "https://www.behance.net/gallery/133185623/Cyberpunk-2077User-Interface-(Part-2)",
  },
  {
    id: "[3]",
    title: "Cyberpunk 2077 Video Game — Fonts In Use",
    href: "https://fontsinuse.com/uses/60926/cyberpunk-2077-video-game",
  },
  {
    id: "[4]",
    title: "A UX Analysis of Cyberpunk 2077's HUD",
    href: "https://medium.com/super-jump/a-ux-analysis-of-cyberpunk-2077s-hud-f74afe6b9961",
  },
];

export const jsonTokenSnippet = `{
  "screen": { "background": "#050505", "foreground": "#FFFFFF" },
  "tactical": {
    "primaryAction": "#F75049",
    "warning": "#BB4141",
    "focus": "#5EF6FF"
  },
  "terminal": {
    "selection": "#73F855",
    "network": "#0E0EE7"
  }
}`;

export const cssSnippet = `:root {
  --cp-bg: #050505;
  --cp-fg: #ffffff;
  --cp-red: #f75049;
  --cp-cyan: #5ef6ff;
  --cp-green: #73f855;
  --cp-blue: #0e0ee7;
}

.cp-terminal-row[data-selected=\"true\"] {
  background: color-mix(in srgb, var(--cp-green) 28%, black);
  color: var(--cp-fg);
}

.cp-tactical-tab[data-active=\"true\"] {
  background: linear-gradient(90deg, rgba(247, 80, 73, 0.18), rgba(247, 80, 73, 0.42));
  border-color: var(--cp-red);
}`;
