# CryptoTree - Complete Knowledge Map Research Plan

## The Vision

CryptoTree should be **the** visual knowledge map of crypto — not just a chain directory, but a living mind map where:
- **Beginners** land and think: "Oh, so THIS is how crypto fits together"
- **Intermediate users** think: "I knew about DeFi and L2s, but I didn't realize MEV, DA layers, and governance are all connected like this"
- **Advanced users** think: "Finally a map I can show someone. Let me check how they've mapped the MEV supply chain"

## What We Have Now (v1)

Currently: **15 chain-focused canvases** + 3 verticals (RWA, Payments, Wallets)
- ~110 nodes, ~130 edges, 16 articles
- Great depth on individual chains (BTC, ETH, SOL, etc.)
- Missing: conceptual foundations, cross-cutting topics, emerging sectors

## What We Need (v2)

A **restructured main canvas** with 11 conceptual pillars instead of 15 chain nodes:

```
MAIN CANVAS: "Crypto Knowledge Map"
├── 01. Foundations         → How blockchains actually work
├── 02. Chains              → L1s, L2s, the modular stack
├── 03. DeFi                → The financial layer
├── 04. Infrastructure      → Builder tools, oracles, indexers
├── 05. MEV & Security      → The dark forest + defense
├── 06. Governance & DAOs   → How crypto coordinates
├── 07. Token Economics      → How tokens capture value
├── 08. Privacy             → ZK, FHE, MPC, privacy chains
├── 09. Interoperability    → Bridges, messaging, chain abstraction
├── 10. Applications        → NFTs, Gaming, Social, Payments
├── 11. Frontier            → AI x Crypto, DePIN, Identity
├── 12. Regulation          → Global legal landscape
```

## User Personas & Their Journeys

### Beginner ("What is all this?")
- Entry: Main canvas → sees 12 clear categories, not 15 chain logos
- First click: "Foundations" → learns blockchain basics, consensus, wallets
- Second click: "Chains" → NOW sees Bitcoin, Ethereum, etc. with context
- Aha moment: "Oh, Ethereum isn't just a coin, it's a platform for DeFi, NFTs, L2s..."
- Key need: **Clear hierarchy, simple language, guided path**

### Intermediate ("I trade on Uniswap but want to go deeper")
- Entry: Main canvas → immediately spots "DeFi" or "MEV"
- Clicks "DeFi" → sees AMMs, lending, yield as CONCEPTS not just protocols
- Follows link from DeFi → MEV → "wait, every trade I make has MEV implications?"
- Explores Token Economics → "so THAT's why ve-tokens and inflation schedules matter"
- Key need: **Conceptual connections between things they already use**

### Advanced ("Show me the MEV supply chain")
- Entry: ⌘K search → jumps directly to "Proposer-Builder Separation"
- Follows cross-links: PBS → Block Builders → Relays → Searchers → Cross-domain MEV
- Checks Privacy → FHE section → sees connections to private DeFi and AI
- Key need: **Depth, accuracy, cross-references, up-to-date info**

## Research File Index

Each file below contains the complete research brief for one knowledge pillar:

| # | File | Pillar | Status |
|---|------|--------|--------|
| 01 | `01-foundations.md` | Cryptography & Consensus | TODO |
| 02 | `02-chains.md` | L1s, L2s, Modular Stack | TODO |
| 03 | `03-defi.md` | DeFi Primitives & Protocols | TODO |
| 04 | `04-infrastructure.md` | Dev Tools, Oracles, RPCs | TODO |
| 05 | `05-mev-security.md` | MEV Supply Chain & Security | TODO |
| 06 | `06-governance-daos.md` | Governance & DAOs | TODO |
| 07 | `07-tokenomics.md` | Token Economics | TODO |
| 08 | `08-privacy.md` | Privacy Technologies | TODO |
| 09 | `09-interoperability.md` | Bridges & Chain Abstraction | TODO |
| 10 | `10-applications.md` | NFTs, Gaming, Social, Payments | TODO |
| 11 | `11-frontier.md` | AI x Crypto, DePIN, Identity | TODO |
| 12 | `12-regulation.md` | Global Regulation & Legal | TODO |
| 13 | `13-cross-links.md` | Cross-pillar relationships | TODO |
| 14 | `14-migration-plan.md` | How to restructure existing data | TODO |

## How These Files Work

Each research `.md` contains:
1. **Canvas Structure** — What nodes and edges this canvas should have
2. **Sub-canvases** — What you'd see when clicking into a node
3. **Key Relationships** — How this pillar connects to others (cross-links)
4. **Beginner / Intermediate / Advanced** — What each level cares about
5. **Protocols & Projects** — Real-world examples to include
6. **Article Brief** — What the long-form article should cover

## Implementation Order (Suggested)

**Phase 1 — Restructure Main Canvas** (biggest impact)
- New 12-pillar main canvas layout
- Migrate existing chain canvases under "Chains" pillar
- Keep all existing data, just reorganize navigation

**Phase 2 — High-Impact New Canvases**
- 01 Foundations (beginners need this most)
- 03 DeFi Primitives (everyone uses DeFi)
- 11 Frontier: AI x Crypto (hottest sector)

**Phase 3 — Depth Canvases**
- 05 MEV & Security (intermediate/advanced love this)
- 07 Token Economics
- 08 Privacy

**Phase 4 — Complete Coverage**
- 06 Governance & DAOs
- 09 Interoperability
- 04 Infrastructure
- 12 Regulation
- 10 Applications (NFTs, Gaming, Social)

**Phase 5 — Cross-Links & Polish**
- Add cross-canvas links (13-cross-links.md)
- Article writing for all new canvases
- Search index for ⌘K palette
