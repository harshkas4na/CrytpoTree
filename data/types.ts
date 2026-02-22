// =============================================================================
// CORE DATA TYPES
// =============================================================================
// This file contains the TypeScript interface for a node in the CryptoTree.
// Each node represents a concept, protocol, chain, or application in the
// crypto ecosystem. The `dependencies` array drives both the visual graph
// edges and the "Prerequisites" list in the knowledge sidebar.
//
// CATEGORIES (from coarsest to most specific):
//   core        → CS/crypto fundamentals (hashing, consensus, etc.)
//   chain-group → Architectural groupings (monolithic, modular, DeFi category, etc.)
//   chain       → Specific blockchains and rollups
//   infra       → Infrastructure protocols (wallets, oracles, bridges, etc.)
//   primitive   → DeFi and on-chain building blocks (AMMs, lending, stablecoins)
//   player      → Specific protocols, apps, and projects
// =============================================================================

export interface CryptoNodeData {
  [key: string]: any;
  /** Unique identifier - used as the node ID in the graph */
  id: string;
  /** ID of the primary parent node (used by the focus system for tree traversal) */
  parentId: string | null;
  /** Display name shown on the node card */
  label: string;
  /** Short technical description shown in the node card and sidebar Quick Summary */
  description: string;
  /** Visual category determining color and grouping */
  category: 'core' | 'chain-group' | 'chain' | 'infra' | 'primitive' | 'player';
  /**
   * IDs of prerequisite nodes. Drives two things:
   *   1. Graph edges: an edge is drawn from each dependency → this node
   *   2. Sidebar "Prerequisites" list
   * The first entry should match parentId for consistent tree layout.
   */
  dependencies: string[];
  /** 1-2 sentence plain-English summary for the sidebar header */
  shortOverview?: string;
  /** 3-6 sentence deep explanation for the "Deep Dive" tab */
  deepInsight?: string;
}
