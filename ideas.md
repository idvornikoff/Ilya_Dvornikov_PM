# Design Brainstorm — Dvornikov Portfolio

## Three Approaches

### 1. Swiss Grid Modernism
**Probability: 0.04**
Rigid Swiss-style grid, heavy use of rule lines, stark black/white contrast, Neue Haas Grotesk-style typography. Cold, authoritative, editorial.

### 2. Architectural Blueprint
**Probability: 0.07**
Thin hairline grid overlays, coordinate-system aesthetics, monochrome with subtle off-white paper texture. Feels like technical documentation elevated to art.

### 3. Corporate Minimalism with Geometric Tension
**Probability: 0.03**
Clean white canvas, asymmetric layout with a strong left-anchored vertical rule, sparse geometric accents (thin lines, small squares), and a powerful typographic hierarchy. Sophisticated, trustworthy, direct.

---

## Chosen Approach: Corporate Minimalism with Geometric Tension

### Design Movement
Late-modernist corporate identity design — think McKinsey annual reports meets Pentagram editorial work.

### Core Principles
1. **Asymmetric anchoring** — a persistent left vertical rule creates structural tension and guides the eye
2. **Typographic hierarchy as the primary visual element** — size, weight, and tracking do all the heavy lifting
3. **Restraint over decoration** — every element must earn its place; no decorative flourishes
4. **Metric emphasis** — key numbers (70%, 1.5M, 30%) are treated as display elements, not inline text

### Color Philosophy
Pure monochrome: `#FFFFFF` (white canvas), `#111111` (near-black for primary text), `#6B6B6B` (mid-grey for secondary), `#E5E5E5` (light grey for dividers and backgrounds), `#F5F5F5` (off-white for section alternation). No color — the absence of color signals seriousness and confidence.

### Layout Paradigm
Left-anchored asymmetric layout. A thin 2px vertical rule runs along the left edge of content. Section headers are offset to the left margin. Case studies use a two-column structure: a narrow label column (left) and a wide content column (right). The hero is full-width with the name in large display type, role as a subtitle, and the credo in italic below.

### Signature Elements
1. **Thin horizontal rule with a small square accent** — used as section dividers
2. **Large metric callouts** — numbers like "70%" rendered at 4-5× body size in light weight
3. **Left-border accent on case study cards** — a 3px left border in dark grey

### Interaction Philosophy
Subtle scroll-triggered fade-in animations. Hover states on links and cards use a simple underline or background shift. No flashy transitions — the site should feel like a well-printed document that happens to be interactive.

### Animation
- Scroll-triggered fade-up (opacity 0→1, translateY 20px→0) at 400ms ease-out
- Stagger 60ms between list items
- Nav links: underline slides in from left on hover (200ms)
- Metric numbers: count-up animation on first viewport entry

### Typography System
- **Display / Name**: `Space Grotesk` 700, tracking -0.03em, 72-96px
- **Section Headers**: `Space Grotesk` 600, tracking -0.02em, 32-40px
- **Body**: `Inter` 400, 16px, line-height 1.7
- **Labels / Captions**: `Inter` 500, 11px, tracking 0.12em, uppercase
- **Metric Numbers**: `Space Grotesk` 300, 64-80px

### Brand Essence
Precision under pressure — for organisations that need a PM who delivers, not just manages. Adjectives: **rigorous, calm, decisive**.

### Brand Voice
Headlines are declarative and outcome-focused. CTAs are direct. No filler.
- Example headline: "Сдал в срок. Сохранил бюджет. Удержал клиента."
- Example CTA: "Связаться"

### Wordmark & Logo
A minimal geometric mark: two overlapping thin squares rotated 45°, forming a diamond grid — referencing project planning grids. Rendered in pure black.

### Signature Brand Color
`#111111` — absolute near-black. The brand's authority comes from its absence of colour.
