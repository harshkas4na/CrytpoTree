# 14 — Migration Plan: From Chain-Focused to Knowledge Map

> "How to restructure CryptoTree without losing any existing work."

---

## Current State

```
Main Canvas (15 chain nodes + 1 overview)
├── Bitcoin        → btc sub-canvas (4 nodes)
├── Ethereum       → eth sub-canvas (13 nodes)
├── Solana         → sol sub-canvas (8 nodes)
├── TON            → ton sub-canvas (4 nodes)
├── Cosmos         → cosmos sub-canvas (7 nodes)
├── Base           → base sub-canvas (8 nodes)
├── Monad          → monad sub-canvas (6 nodes)
├── Polygon        → polygon sub-canvas (8 nodes)
├── Avalanche      → avax sub-canvas (7 nodes)
├── Sui & Aptos    → sui sub-canvas (8 nodes)
├── BNB Chain      → bnb sub-canvas (7 nodes)
├── MegaETH        → megaeth sub-canvas (6 nodes)
├── RWA            → rwa sub-canvas (7 nodes)
├── Payments       → payments sub-canvas (7 nodes)
└── Wallets        → wallets sub-canvas (8 nodes)
```

**Total: 16 canvases, ~110 nodes, ~130 edges, 16 articles**

---

## Target State

```
Main Canvas (12 pillar nodes)
├── Foundations          → NEW canvas (7 concept nodes, each with sub-canvas)
├── Chains              → NEW canvas (6 category nodes)
│   ├── Major L1s       → Bitcoin, Ethereum, Solana, BNB, Avalanche, Cosmos, + NEW L1s
│   ├── Ethereum L2s    → Arbitrum, Optimism, Base, zkSync, StarkNet, + more
│   ├── Alt L2s/Appchains
│   ├── Data Availability
│   ├── Shared Sequencers
│   └── Modular Stack
├── DeFi                → NEW canvas (8 concept nodes, each with sub-canvas)
│   ├── DEXs & Trading
│   ├── Lending
│   ├── Derivatives
│   ├── Stablecoins
│   ├── Yield & Staking
│   ├── RWA             → EXISTING rwa canvas (enhanced)
│   ├── Insurance
│   └── Payments        → EXISTING payments canvas (enhanced)
├── Infrastructure      → NEW canvas (7 concept nodes)
│   └── Wallets         → EXISTING wallets canvas (enhanced)
├── MEV & Security      → NEW canvas (9 nodes)
├── Governance & DAOs   → NEW canvas (5 nodes)
├── Token Economics     → NEW canvas (6 nodes)
├── Privacy             → NEW canvas (5 nodes)
├── Interoperability    → NEW canvas (5 nodes)
├── Applications        → NEW canvas (5 nodes)
├── Frontier            → NEW canvas (3 sections, 9 nodes)
└── Regulation          → NEW canvas (5 nodes)
```

---

## Migration Steps

### Step 1: Add New Canvas IDs to CANVASES export
Add entries for: `foundations`, `chains`, `defi`, `infrastructure`, `mev-security`, `governance`, `tokenomics`, `privacy`, `interop`, `applications`, `frontier`, `regulation`

### Step 2: Create "Chains" Canvas
This becomes a GATEWAY canvas. It has 6 category nodes:
- "Major L1s" → page node with canvasId linking to a new `chains-l1s` canvas
- "Ethereum L2s" → page node linking to new `chains-l2s` canvas
- etc.

The existing btc, eth, sol, etc. canvases become accessible through chains-l1s.

### Step 3: Restructure Main Canvas
Replace 15 chain nodes with 12 pillar nodes. Each pillar node is type 'page' with a canvasId.

### Step 4: Create Pillar Canvases One by One
Following the phase order in 00-MASTER-PLAN.md:
- Phase 2: Foundations, DeFi, Frontier (AI)
- Phase 3: MEV, Tokenomics, Privacy
- Phase 4: Governance, Interop, Infrastructure, Regulation, Applications

### Step 5: Add Cross-Links
Add edges between pillar canvases based on 13-cross-links.md.

### Step 6: Write Articles
Each new canvas needs an article in articles-data.ts.

---

## Data Structure Changes

### New canvas data format needed:

```typescript
// New main canvas
const MAIN_NODES: NodeData[] = [
  {
    id: 'foundations',
    type: 'page',
    canvasId: 'foundations',
    groupLabel: 'FOUNDATIONS',
    title: 'Cryptography & Consensus',
    emoji: '🔐',
    description: 'How blockchains actually work — hashing, signatures, ZK proofs, consensus mechanisms',
    accentColor: '#...',
    category: 'infra',
    // ... etc
  },
  // ... 11 more pillar nodes
];
```

### Navigation depth increases by 1 level:
- Before: Main → Chain → Protocol
- After: Main → Pillar → Category → Chain/Protocol

This is fine because each click is meaningful and the user learns more at each level.

---

## What NOT to Change

- **Keep all existing node IDs** (btc, eth, sol, etc.) — don't break deep links
- **Keep all existing articles** — they're good content
- **Keep the canvas-stack navigation** — just gets deeper
- **Keep the ⌘K search** — it should index all nodes at all levels
- **Keep the category color system** — expand it for new categories

---

## Estimated Scope

| Item | Count | Effort |
|------|-------|--------|
| New main canvas | 1 | Small (replace 15 nodes with 12) |
| New pillar canvases | 12 | Medium each (define nodes, edges, positions) |
| New sub-canvases | ~20 | Medium each |
| New articles | 12+ | Large each (research + writing) |
| Cross-links | 50+ edges | Small each |
| Missing L1 canvases | 4-6 | Medium each |
| Enhanced existing canvases | 3 (RWA, Payments, Wallets) | Small each |

**Total: This is a big project. The research files break it into manageable pieces.**
