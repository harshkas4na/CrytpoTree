// =============================================================================
// CATEGORY CONFIGURATION
// =============================================================================
// Edit this file to change node colors or category display labels.
// Colors use hex strings. They appear in:
//   - Node card borders and backgrounds
//   - MiniMap node colors
//   - Sidebar category badge
//   - CategoryNav progress bars
// =============================================================================

import { CryptoNodeData } from './types';

export const categoryColors: Record<CryptoNodeData['category'], string> = {
  core:        '#94a3b8', // slate-400  — CS foundations
  'chain-group': '#64748b', // slate-500  — architectural groupings
  chain:       '#3b82f6', // blue-500   — specific chains
  infra:       '#8b5cf6', // violet-500 — infrastructure & tooling
  primitive:   '#f59e0b', // amber-500  — DeFi / on-chain primitives
  player:      '#10b981', // emerald-500 — specific protocols/apps
};

export const categoryLabels: Record<CryptoNodeData['category'], string> = {
  core:        'Core Tech',
  'chain-group': 'Architecture',
  chain:       'Chain',
  infra:       'Infrastructure',
  primitive:   'Primitive',
  player:      'Protocol / App',
};
