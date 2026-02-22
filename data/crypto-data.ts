// =============================================================================
// CRYPTO-DATA — AGGREGATOR
// =============================================================================
// This file is intentionally thin. All data lives in the domain files below.
// Everything is re-exported here so existing component imports still work
// without any changes (all components import from '@/data/crypto-data').
//
// ┌─────────────────────────────────────────────────────────────────────────┐
// │  HOW TO EDIT THE DATA                                                   │
// │                                                                         │
// │  To ADD or EDIT nodes → open the relevant domain file:                 │
// │    data/nodes/01-foundations.ts  — CS fundamentals, consensus,         │
// │                                    blockchain architecture              │
// │    data/nodes/02-chains.ts       — L1s, L2s, DA layers, app-chains     │
// │    data/nodes/03-infrastructure.ts — Wallets, oracles, RPCs,           │
// │                                      bridges, MEV, storage             │
// │    data/nodes/04-defi.ts         — DEX, lending, stablecoins,          │
// │                                    LSD, RWA, yield, perps              │
// │    data/nodes/05-applications.ts — Privacy, NFTs, gaming, social,      │
// │                                    AI, DePIN, memecoins, DAOs          │
// │                                                                         │
// │  To CHANGE COLORS / LABELS → open data/config.ts                       │
// │  To CHANGE NODE TYPES → open data/types.ts                             │
// └─────────────────────────────────────────────────────────────────────────┘
//
// RULES FOR ADDING A NODE (avoids broken graph edges):
//   1. Every `id` must be unique across all files.
//   2. `parentId` must match an existing node `id`, or be null (only root).
//   3. The first entry in `dependencies` must equal `parentId`.
//   4. All entries in `dependencies` must reference existing node `id`s.
//   5. Place the node in the file whose theme matches (chain → 02-chains.ts).
// =============================================================================

// ── TYPES & CONFIG ────────────────────────────────────────────────────────────
export type { CryptoNodeData } from './types';
export { categoryColors, categoryLabels } from './config';

// ── NODE FILES ────────────────────────────────────────────────────────────────
import { foundationNodes } from './nodes/01-foundations';
import { chainNodes } from './nodes/02-chains';
import { infrastructureNodes } from './nodes/03-infrastructure';
import { defiNodes } from './nodes/04-defi';
import { applicationNodes } from './nodes/05-applications';

// ── AGGREGATE ─────────────────────────────────────────────────────────────────
// Spread order matters for dagre layout: nodes are laid out top-to-bottom
// roughly in the order they appear in this array.
export const initialNodes = [
  ...foundationNodes,
  ...chainNodes,
  ...infrastructureNodes,
  ...defiNodes,
  ...applicationNodes,
];

// Kept for backward compatibility (was exported but unused internally).
export const initialEdgesData = [];

