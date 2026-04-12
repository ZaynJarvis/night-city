// Design philosophy: Tactical Neo-Militarism with louder accent density.
// This data file drives a component-library generator that favors signal red, acid green,
// cyan telemetry, clipped geometry, and operational hierarchy over black-only surfaces.

export type AccentTone = "critical" | "terminal" | "telemetry" | "indigo" | "warning" | "neutral";

export type PaletteToken = {
  name: string;
  value: string;
  usage: string;
  tone: AccentTone;
};

export type FontRole = {
  family: string;
  role: string;
  rationale: string;
  sample: string;
};

export type ComponentSpec = {
  name: string;
  description: string;
  usage: string;
  states: string[];
  accent: AccentTone;
};

export type LibrarySection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  components: ComponentSpec[];
};

export const assetUrls = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032193923/K536WyWrddEkbe4Jmc7LtT/part2-cover_18caee84.webp",
  terminal: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032193923/K536WyWrddEkbe4Jmc7LtT/ui-art-bible_66c016ad.webp",
  mailbox: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032193923/K536WyWrddEkbe4Jmc7LtT/mailbox-reference_5ab74018.webp",
  vocabulary: "https://d2xsxph8kpxj0f.cloudfront.net/310419663032193923/K536WyWrddEkbe4Jmc7LtT/cp2077-vocabulary-board-ZdPqAhoeKW84pyFnoFLAD9.webp",
};

export const palette: PaletteToken[] = [
  {
    name: "Void Black",
    value: "#050505",
    usage: "Use as the true background for app canvas, cinematic gutters, and inactive voids. It should never be the only visual event on screen.",
    tone: "neutral",
  },
  {
    name: "Signal Red",
    value: "#F75049",
    usage: "Use for primary actions, active tabs, dangerous prompts, section dividers, and hero statements when you need decisive visual pressure.",
    tone: "critical",
  },
  {
    name: "Hostile Crimson",
    value: "#BB4141",
    usage: "Use for error badges, blocked states, threat meters, and high-risk terminal warnings.",
    tone: "critical",
  },
  {
    name: "Acid Lime",
    value: "#73F855",
    usage: "Use in terminal modules, live connection indicators, command echoes, selected matrix cells, and phosphor-style status surfaces.",
    tone: "terminal",
  },
  {
    name: "Telemetry Cyan",
    value: "#5EF6FF",
    usage: "Use for information labels, secondary links, system graphs, focus rings, and cool-spectrum data overlays.",
    tone: "telemetry",
  },
  {
    name: "Electric Indigo",
    value: "#0E0EE7",
    usage: "Use sparingly behind cyan or white labels for depth, route mapping, scanner overlays, and layered glow transitions.",
    tone: "indigo",
  },
  {
    name: "Signal White",
    value: "#FFFFFF",
    usage: "Use for large display headlines, contrast-heavy numbers, and any copy that must remain readable over dense accents.",
    tone: "neutral",
  },
  {
    name: "Alert Amber",
    value: "#FFD84A",
    usage: "Use for warnings, transient badges, pending states, and caution ribbons between red critical and green operational states.",
    tone: "warning",
  },
];

export const fontSystem: FontRole[] = [
  {
    family: "Rajdhani",
    role: "Primary UI system face",
    rationale: "Use for controls, labels, input fields, stat blocks, and tight navigation because its square structure matches the in-game utilitarian interface language.",
    sample: "PRIMARY ACTION // SIGNAL ROUTING // ACCESS GRANTED",
  },
  {
    family: "Orbitron",
    role: "Display and decorative systems face",
    rationale: "Use for command headers, section IDs, large counters, and spectacle moments where the interface should feel synthetic and branded rather than neutral.",
    sample: "NETWATCH NODE // 84.7 TB // LIVE LOCK",
  },
  {
    family: "Space Mono",
    role: "Terminal and code face",
    rationale: "Use for command history, mailbox metadata, configuration payloads, and machine-readable values where line rhythm matters more than compression.",
    sample: "root@nightcity:~$ deploy --target /component-library",
  },
];

export const terminalRules = [
  "Use acid lime for active cursor, selected cells, and trusted terminal confirmations.",
  "Reserve signal red for actions that escalate state: overwrite, delete, broadcast, execute, or override.",
  "Pair cyan with white for telemetry and metadata, especially when the surface already contains green or red accents.",
  "Keep terminal panels brighter than the global background; the screen should look powered on, not swallowed by the page.",
  "When presenting lists, combine one dominant accent row with faint neighboring rows so selection is unmistakable.",
  "Use clipped corners, inset borders, and horizontal scan dividers to separate machine states without adding generic rounded cards.",
];

export const mailboxThreads = [
  {
    sender: "JACKIE",
    subject: "HEIST DATA SENT TO YOU",
    state: "encrypted",
    accent: "critical" as AccentTone,
  },
  {
    sender: "NETWATCH",
    subject: "URGENT PATCH AVAILABLE",
    state: "priority",
    accent: "telemetry" as AccentTone,
  },
  {
    sender: "MOM",
    subject: "URGENT INFORMATION",
    state: "unread",
    accent: "terminal" as AccentTone,
  },
  {
    sender: "RIPPERDOC",
    subject: "FIRMWARE RECONFIG WINDOW",
    state: "scheduled",
    accent: "warning" as AccentTone,
  },
];

export const configMatrix = [
  { label: "Neural Buffer", value: "92%", accent: "terminal" as AccentTone },
  { label: "Threat Rating", value: "HIGH", accent: "critical" as AccentTone },
  { label: "Trace Shield", value: "ACTIVE", accent: "telemetry" as AccentTone },
  { label: "Power Budget", value: "76 kW", accent: "warning" as AccentTone },
  { label: "Signal Route", value: "OMEGA-4", accent: "indigo" as AccentTone },
  { label: "Failsafe", value: "ARMED", accent: "critical" as AccentTone },
];

export const statusChips = [
  { label: "LIVE", accent: "terminal" as AccentTone },
  { label: "DANGER", accent: "critical" as AccentTone },
  { label: "TRACE", accent: "telemetry" as AccentTone },
  { label: "PENDING", accent: "warning" as AccentTone },
];

export const librarySections: LibrarySection[] = [
  {
    id: "actions",
    eyebrow: "01 // HIGH-PRESSURE ACTIONS",
    title: "Buttons and command triggers",
    description: "Primary actions should feel like tactical switches rather than soft web buttons. The strongest actions get red fills, cyan trims, and clipped shadows.",
    components: [
      {
        name: "Primary Signal Button",
        description: "High-emphasis action for deploy, confirm, execute, and breach tasks.",
        usage: "Use signal red fill with white label and a small cyan locator tick when the action changes state immediately.",
        states: ["default", "hover", "armed", "disabled"],
        accent: "critical",
      },
      {
        name: "Ghost Utility Button",
        description: "Secondary control for cancel, inspect, expand, or branch actions.",
        usage: "Use transparent near-black fill with a colored outline to preserve density without flattening the composition.",
        states: ["default", "hover", "focus", "disabled"],
        accent: "telemetry",
      },
    ],
  },
  {
    id: "signals",
    eyebrow: "02 // STATE COMMUNICATION",
    title: "Badges, ribbons, and inline alerts",
    description: "Cyberpunk interfaces are operational. State markers need immediate semantic meaning even when the screen is crowded.",
    components: [
      {
        name: "Threat Badge",
        description: "Compact inline status unit for danger, blocked routes, or combat-ready alerts.",
        usage: "Use hostile crimson with uppercase Rajdhani text and a clipped right edge.",
        states: ["warning", "critical", "expired"],
        accent: "critical",
      },
      {
        name: "Sync Ribbon",
        description: "Wide strip for broadcast updates, transfer progress, and route synchronization.",
        usage: "Use cyan-to-indigo striping or acid lime fill depending on whether the message is informational or operational.",
        states: ["live", "processing", "complete"],
        accent: "terminal",
      },
    ],
  },
  {
    id: "forms",
    eyebrow: "03 // INPUT SYSTEMS",
    title: "Fields, toggles, and selectors",
    description: "Inputs should read like surveillance hardware. The active field gains an illuminated edge, a locator notch, and a machine-readable caption.",
    components: [
      {
        name: "Access Field",
        description: "Text or password field for handles, access keys, or route labels.",
        usage: "Use dark fill, cyan or green inset border, and a monospace subline for validation feedback.",
        states: ["idle", "focused", "valid", "invalid"],
        accent: "telemetry",
      },
      {
        name: "Selection Tile",
        description: "Square or rectangular tile for options, terminal code cells, and configuration toggles.",
        usage: "Inactive tiles stay dark with faint lines; selected tiles should invert to acid lime or red with black text.",
        states: ["idle", "hover", "selected", "locked"],
        accent: "terminal",
      },
    ],
  },
  {
    id: "panels",
    eyebrow: "04 // STRUCTURAL SURFACES",
    title: "Cards, modules, and full-screen frames",
    description: "Panels define rhythm. They should use clipped geometry, reinforced top rails, and accent seams so the page never devolves into generic rectangular cards.",
    components: [
      {
        name: "Signal Panel",
        description: "Primary structural module for tokens, previews, and system readouts.",
        usage: "Use layered borders, tinted overlays, and one accent-heavy corner block to keep each panel visually charged.",
        states: ["resting", "highlighted", "stacked"],
        accent: "critical",
      },
      {
        name: "Telemetry Rail",
        description: "Horizontal strip used for timelines, tabs, or command summaries.",
        usage: "Alternate red, cyan, and green separators across a near-black field to maintain scanning rhythm.",
        states: ["default", "active", "muted"],
        accent: "telemetry",
      },
    ],
  },
];

export const referenceLibraries = [
  {
    name: "CYBERCORE CSS",
    type: "Pure CSS design system",
    url: "https://sebyx07.github.io/cybercore-css/",
    repo: "https://github.com/sebyx07/cybercore-css",
    note: "Closest open-source built match for a Cyberpunk 2077-adjacent interface language. It includes public docs, a live catalog, and ready-made components.",
  },
  {
    name: "Arwes",
    type: "React sci-fi UI framework",
    url: "https://arwes.dev/",
    repo: "https://github.com/arwes/arwes",
    note: "Best polished React-oriented open-source reference when you want a broader sci-fi component framework with docs, samples, and playground support.",
  },
  {
    name: "augmented-ui",
    type: "CSS geometry and frame toolkit",
    url: "http://augmented-ui.com/",
    repo: "https://github.com/propjockey/augmented-ui",
    note: "Useful as a low-level structural layer for clipped corners and futuristic panel geometry rather than a full visual design system.",
  },
  {
    name: "scificn-ui",
    type: "React sci-fi terminal component library",
    url: "https://www.scificn.dev/",
    repo: "https://github.com/baxy5/scificn-ui",
    note: "Most relevant reference for phosphor-style terminal surfaces, green-screen states, and shadcn-compatible sci-fi components.",
  },
];

export const commandStream = [
  "root@nightcity:~$ compile --route /component-library",
  "[ok] accent channels boosted: red cyan lime",
  "[ok] tactical panels regenerated",
  "[warn] surface density exceeds civilian comfort threshold",
  "root@nightcity:~$ preview --standalone",
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
