import { type Node, type Edge, MarkerType } from '@xyflow/react';

// ─── Pillar canvas imports ────────────────────────────────────────────────────
import { foundationsNodes, foundationsEdges } from './canvases/foundations';
import { chainsNodes, chainsEdges } from './canvases/chains';
import { defiNodes, defiEdges } from './canvases/defi';
import { infrastructureNodes, infrastructureEdges } from './canvases/infrastructure';
import { mevSecurityNodes, mevSecurityEdges } from './canvases/mev-security';
import { governanceNodes, governanceEdges } from './canvases/governance';
import { tokenomicsNodes, tokenomicsEdges } from './canvases/tokenomics';
import { privacyNodes, privacyEdges } from './canvases/privacy';
import { interoperabilityNodes, interoperabilityEdges } from './canvases/interoperability';
import { applicationsNodes, applicationsEdges } from './canvases/applications';
import { frontierNodes, frontierEdges } from './canvases/frontier';
import { regulationNodes, regulationEdges } from './canvases/regulation';

// ─── Category system ──────────────────────────────────────────────────────────

export type NodeCategory =
  | 'l1' | 'l2' | 'defi' | 'infra' | 'nft'
  | 'staking' | 'restaking' | 'oracle' | 'indexer'
  | 'gaming' | 'social' | 'meme' | 'identity' | 'bridge'
  | 'rwa' | 'payments' | 'wallet' | 'dex' | 'lending'
  | 'derivatives' | 'stablecoin' | 'zk' | 'launchpad'
  | 'foundations' | 'mev' | 'governance' | 'tokenomics'
  | 'privacy' | 'interop' | 'applications' | 'frontier' | 'regulation';

export const CATEGORY_COLORS: Record<NodeCategory, string> = {
  l1:          '#627eea',
  l2:          '#7c3aed',
  defi:        '#10b981',
  infra:       '#f59e0b',
  nft:         '#ec4899',
  staking:     '#06b6d4',
  restaking:   '#0891b2',
  oracle:      '#84cc16',
  indexer:     '#64748b',
  gaming:      '#f97316',
  social:      '#8b5cf6',
  meme:        '#fbbf24',
  identity:    '#a78bfa',
  bridge:      '#d946ef',
  rwa:         '#22c55e',
  payments:    '#0ea5e9',
  wallet:      '#a78bfa',
  dex:         '#10b981',
  lending:     '#059669',
  derivatives: '#f97316',
  stablecoin:  '#fbbf24',
  zk:          '#a855f7',
  launchpad:   '#fb923c',
  foundations: '#f472b6',
  mev:         '#ef4444',
  governance:  '#8b5cf6',
  tokenomics:  '#eab308',
  privacy:     '#a855f7',
  interop:     '#d946ef',
  applications:'#ec4899',
  frontier:    '#06b6d4',
  regulation:  '#64748b',
};

export const CATEGORY_LABELS: Record<NodeCategory, string> = {
  l1:          'Layer 1',
  l2:          'Layer 2',
  defi:        'DeFi',
  infra:       'Infrastructure',
  nft:         'NFTs',
  staking:     'Liquid Staking',
  restaking:   'Restaking',
  oracle:      'Oracle',
  indexer:     'Indexer',
  gaming:      'Gaming',
  social:      'Social',
  meme:        'Meme / Culture',
  identity:    'Identity',
  bridge:      'Bridge',
  rwa:         'Real World Assets',
  payments:    'Payments',
  wallet:      'Wallets & Identity',
  dex:         'DEX',
  lending:     'Lending',
  derivatives: 'Derivatives',
  stablecoin:  'Stablecoins',
  zk:          'ZK Infrastructure',
  launchpad:   'Launchpad',
  foundations: 'Foundations',
  mev:         'MEV & Security',
  governance:  'Governance & DAOs',
  tokenomics:  'Token Economics',
  privacy:     'Privacy',
  interop:     'Interoperability',
  applications:'Applications',
  frontier:    'Frontier',
  regulation:  'Regulation',
};

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Resource {
  label: string;
  url: string;
}

// React Flow requires node data to extend Record<string, unknown>
export type CardData = {
  type: 'card';
  groupLabel?: string;
  title: string;
  subtitle?: string;
  content?: string;
  items?: string[];
  accentColor?: string;
  // Rich fields
  shortOverview?: string;
  deepInsight?: string;
  category?: NodeCategory;
  resources?: Resource[];
  articleId?: string;
} & Record<string, unknown>;

export type PageData = {
  type: 'page';
  groupLabel?: string;
  title: string;
  description?: string;
  canvasId: string;
  emoji?: string;
  accentColor?: string;
  tokenSymbol?: string;
  // Rich fields
  shortOverview?: string;
  deepInsight?: string;
  category?: NodeCategory;
  resources?: Resource[];
  articleId?: string;
} & Record<string, unknown>;

export type CanvasNodeData = CardData | PageData;

export interface CanvasDefinition {
  id: string;
  title: string;
  parentCanvasId?: string;
  nodes: Node<CanvasNodeData>[];
  edges: Edge[];
}

// ─── Shared edge defaults ─────────────────────────────────────────────────────

const E = {
  style: { stroke: '#585858', strokeWidth: 1.5 },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: '#585858',
    width: 10,
    height: 10,
  },
};

// ─── MAIN CANVAS ──────────────────────────────────────────────────────────────

const mainNodes: Node<CanvasNodeData>[] = [
  {
    id: 'overview',
    type: 'card',
    position: { x: 200, y: -320 },
    data: {
      type: 'card',
      title: 'Crypto Knowledge Map',
      content: 'An interactive mind map of the entire blockchain universe — 12 conceptual pillars from cryptographic foundations to frontier research. Click any pillar to explore its ecosystem. Connections show how everything fits together.',
      accentColor: '#6366f1',
      shortOverview: `A visual knowledge map organized into 12 conceptual pillars — from cryptographic foundations to cutting-edge AI x Crypto research.`,
      deepInsight: `The crypto ecosystem is not just a list of chains — it's a web of interconnected concepts. Foundations (cryptography, consensus) underpin Chains (L1s, L2s), which host DeFi (the financial layer) and Applications (NFTs, gaming, social). Infrastructure (oracles, RPCs, indexers) makes it all work. MEV & Security is the adversarial game played in every block. Governance & DAOs coordinate decisions. Token Economics designs incentives. Privacy adds confidentiality. Interoperability connects chains. The Frontier (AI, DePIN, identity) is where crypto meets the physical world. Regulation shapes the rules. Each pillar connects to many others — that's what makes this a knowledge MAP, not just a list.`,
    },
    style: { width: 380 },
  },
  // ── Row 1: Foundation + Technical Pillars ────────────────────────────────
  {
    id: 'foundations',
    type: 'page',
    position: { x: -600, y: 60 },
    data: {
      type: 'page',
      groupLabel: 'FOUNDATIONS',
      title: 'Cryptography & Consensus',
      description: 'How blockchains actually work — hashing, signatures, ZK proofs, consensus mechanisms, and architecture.',
      canvasId: 'foundations',
      emoji: '🔐',
      accentColor: '#f472b6',
      category: 'foundations',
      shortOverview: 'The foundational layer — cryptographic primitives and consensus mechanisms that make trustless systems possible.',
      deepInsight: 'Before you understand any chain, you need to understand why blockchains work. This pillar covers hashing (SHA-256, Keccak), signatures (ECDSA, BLS), zero-knowledge proofs (SNARKs, STARKs), advanced cryptography (FHE, MPC, TEE), consensus mechanisms (PoW, PoS, BFT), blockchain architecture (monolithic vs modular), and the life of a transaction from wallet to finality.',
    },
    style: { width: 280 },
  },
  {
    id: 'chains',
    type: 'page',
    position: { x: -200, y: 60 },
    data: {
      type: 'page',
      groupLabel: 'CHAINS',
      title: 'Chains & L2s',
      description: 'L1 blockchains, L2 rollups, the modular stack — Bitcoin, Ethereum, Solana, and 100+ more.',
      canvasId: 'chains',
      emoji: '⛓️',
      accentColor: '#627eea',
      category: 'l1',
      shortOverview: 'Layer 1 blockchains, Layer 2 scaling solutions, data availability layers, and the modular stack.',
      deepInsight: 'The infrastructure layer where code runs and value settles. Major L1s (Bitcoin, Ethereum, Solana, TON, Cosmos), Ethereum L2s (Arbitrum $18B TVL, Base $14B, Optimism $8B, zkSync, StarkNet), EVM-compatible chains (BNB, Avalanche, Polygon, Monad), Move chains (Sui, Aptos), and the modular stack (Celestia DA, EigenDA, shared sequencers). 500+ rollups now live. All existing chain canvases are here.',
    },
    style: { width: 280 },
  },
  {
    id: 'defi',
    type: 'page',
    position: { x: 200, y: 60 },
    data: {
      type: 'page',
      groupLabel: 'DEFI',
      title: 'DeFi',
      description: 'The financial layer — DEXs, lending, stablecoins, derivatives, yield, and real-world assets. $200B+ TVL.',
      canvasId: 'defi',
      emoji: '💰',
      accentColor: '#10b981',
      category: 'defi',
      shortOverview: 'Permissionless financial primitives: trade, lend, earn, insure — without intermediaries.',
      deepInsight: 'DeFi is what most people actually use in crypto. $200B+ TVL across DEXs (Uniswap, Jupiter), lending (Aave $25B+), stablecoins ($225B+ market cap, $46T annual volume), liquid staking (Lido $33B), restaking (EigenLayer $15B), derivatives (Hyperliquid, GMX), RWA ($10B+ tokenized), and payments. This pillar teaches DeFi as concepts first, then links to specific protocols.',
    },
    style: { width: 280 },
  },
  {
    id: 'infra',
    type: 'page',
    position: { x: 600, y: 60 },
    data: {
      type: 'page',
      groupLabel: 'INFRASTRUCTURE',
      title: 'Infrastructure',
      description: 'The builder stack — oracles, indexers, RPCs, dev tools, wallets, and decentralized storage.',
      canvasId: 'infrastructure',
      emoji: '🔧',
      accentColor: '#f59e0b',
      category: 'infra',
      shortOverview: 'The invisible layer — oracles, indexers, RPCs, developer frameworks, wallets, and storage.',
      deepInsight: 'Every DeFi protocol, every NFT marketplace, every wallet app is built on infrastructure. Oracles (Chainlink 50%+ share, Pyth), indexers (The Graph, Goldsky), RPCs (Alchemy 70% EVM share), dev tools (Foundry 45%+, Hardhat), wallets (30M+ smart accounts via ERC-4337), and decentralized storage (Arweave permanent, Filecoin 22+ EiB). This maps the entire builder stack.',
    },
    style: { width: 280 },
  },
  // ── Row 2: Economics & Security Pillars ─────────────────────────────────
  {
    id: 'mev-security',
    type: 'page',
    position: { x: -600, y: 480 },
    data: {
      type: 'page',
      groupLabel: 'MEV & SECURITY',
      title: 'MEV & Security',
      description: 'The dark forest of crypto — MEV extraction, sandwich attacks, smart contract vulnerabilities, and defense mechanisms.',
      canvasId: 'mev-security',
      emoji: '🛡️',
      accentColor: '#ef4444',
      category: 'mev',
      shortOverview: 'The adversarial game of block production ($1.5B+ MEV/year) and the security mechanisms protecting $200B+ in DeFi.',
      deepInsight: 'MEV (Maximal Extractable Value) is the hidden game in every block. 92-95% of Ethereum blocks go through MEV-Boost. Sandwich attacks hit ~3-5% of Uniswap swaps. $3.8B lost to hacks in 2022 alone. This pillar covers the MEV supply chain (searchers → builders → proposers), protection mechanisms (Flashbots Protect, intents), smart contract vulnerabilities, audit firms, bug bounties, and the timeline of major hacks from The DAO ($60M) to Ronin Bridge ($625M).',
    },
    style: { width: 280 },
  },
  {
    id: 'governance',
    type: 'page',
    position: { x: -200, y: 480 },
    data: {
      type: 'page',
      groupLabel: 'GOVERNANCE',
      title: 'Governance & DAOs',
      description: 'How crypto coordinates — DAOs, token voting, delegation, retroPGF, and the challenges of decentralized decision-making.',
      canvasId: 'governance',
      emoji: '🏛️',
      accentColor: '#8b5cf6',
      category: 'governance',
      shortOverview: 'Decentralized coordination — how protocols make decisions, allocate resources, and evolve.',
      deepInsight: 'Every major protocol has governance. Optimism Collective ($8B+ treasury) pioneered dual-house governance with retroactive public goods funding. Uniswap, Aave, and Arbitrum DAOs manage billions. Voter turnout averages 5-20%. Governance attacks (Beanstalk $182M flash loan attack) reveal the challenges. This pillar covers voting mechanisms, notable DAOs, governance tools (Snapshot, Tally, Governor), and the legal landscape for DAOs.',
    },
    style: { width: 280 },
  },
  {
    id: 'tokenomics',
    type: 'page',
    position: { x: 200, y: 480 },
    data: {
      type: 'page',
      groupLabel: 'TOKEN ECONOMICS',
      title: 'Token Economics',
      description: 'How tokens are designed to capture value — supply mechanics, ve-tokens, airdrops, FDV traps, and memecoin economics.',
      canvasId: 'tokenomics',
      emoji: '📊',
      accentColor: '#eab308',
      category: 'tokenomics',
      shortOverview: 'How tokens are designed, distributed, and engineered to create sustainable economic systems.',
      deepInsight: 'Understanding tokenomics is the difference between a beginner who buys based on price and an intermediate user who evaluates supply schedules, vesting cliffs, and value accrual. This pillar covers token types, distribution mechanics (ICOs → airdrops → points), supply mechanics (Bitcoin halving, EIP-1559 burns), value accrual models (fee distribution, ve-tokens, buy-and-burn), the Curve Wars, FDV vs market cap traps, and memecoin economics (Pump.fun created 10M+ tokens).',
    },
    style: { width: 280 },
  },
  {
    id: 'privacy',
    type: 'page',
    position: { x: 600, y: 480 },
    data: {
      type: 'page',
      groupLabel: 'PRIVACY',
      title: 'Privacy',
      description: 'ZK privacy, FHE, MPC, privacy chains (Zcash, Monero), private L2s (Aztec), and compliant privacy.',
      canvasId: 'privacy',
      emoji: '🕶️',
      accentColor: '#a855f7',
      category: 'privacy',
      shortOverview: 'Technologies enabling private transactions, computation, and identity on public blockchains.',
      deepInsight: 'Every Ethereum transaction is publicly visible forever. Privacy is a feature you have to build. Zcash (shielded pools via Halo2), Monero (ring signatures), Aztec (private L2 with Noir language), FHE (Zama — encrypted computation at 50ms per addition), MPC (Fireblocks wallets), and stealth addresses (EIP-5564). The Tornado Cash legal saga established that immutable code can\'t be sanctioned (5th Circuit ruling). Compliant privacy (selective disclosure, viewing keys) is the emerging middle ground.',
    },
    style: { width: 280 },
  },
  // ── Row 3: Ecosystem & Frontier Pillars ─────────────────────────────────
  {
    id: 'interoperability',
    type: 'page',
    position: { x: -600, y: 900 },
    data: {
      type: 'page',
      groupLabel: 'INTEROPERABILITY',
      title: 'Interoperability',
      description: 'Bridges, cross-chain messaging (LayerZero, CCIP), chain abstraction, and unified liquidity.',
      canvasId: 'interoperability',
      emoji: '🌐',
      accentColor: '#d946ef',
      category: 'interop',
      shortOverview: 'How blockchains communicate, transfer assets, and the quest for seamless multi-chain UX.',
      deepInsight: '100+ chains exist — interoperability decides whether that\'s fragmentation or a superpower. $3B+ lost to bridge hacks. LayerZero (50+ chains), CCIP (Chainlink), Axelar, Wormhole, and IBC (Cosmos) power cross-chain messaging. Chain abstraction (Particle Network, NEAR Chain Signatures) aims for one-account-all-chains UX. ERC-7683 standardizes cross-chain intents. Polygon AggLayer and Optimism Superchain compete to unify rollup liquidity.',
    },
    style: { width: 280 },
  },
  {
    id: 'applications',
    type: 'page',
    position: { x: -200, y: 900 },
    data: {
      type: 'page',
      groupLabel: 'APPLICATIONS',
      title: 'Applications',
      description: 'NFTs, gaming, SocialFi (Farcaster), memecoins (Pump.fun), and consumer crypto beyond finance.',
      canvasId: 'applications',
      emoji: '🎮',
      accentColor: '#ec4899',
      category: 'applications',
      shortOverview: 'Consumer-facing crypto: digital ownership, gaming, social networks, memecoins, and everyday payments.',
      deepInsight: 'DeFi is for finance people. Applications are for everyone. NFTs shifted from $25B/year speculation (2022) to utility-focused IP plays (Pudgy Penguins toys, Bored Ape games). Blockchain gaming has 2-3M daily active wallets across Ronin, Immutable X, and on-chain games (MUD, Dojo frameworks). Farcaster built crypto\'s social network (1M+ accounts, frames/mini-apps). Pump.fun created 10M+ memecoins, generating $500M+ in platform revenue. Fully on-chain games represent the frontier of composable autonomous worlds.',
    },
    style: { width: 280 },
  },
  {
    id: 'frontier',
    type: 'page',
    position: { x: 200, y: 900 },
    data: {
      type: 'page',
      groupLabel: 'FRONTIER',
      title: 'AI x Crypto, DePIN & Identity',
      description: 'The bleeding edge — decentralized compute, AI agents, DePIN ($32B+ market), and self-sovereign identity.',
      canvasId: 'frontier',
      emoji: '🚀',
      accentColor: '#06b6d4',
      category: 'frontier',
      shortOverview: 'Emerging sectors at the intersection of crypto with AI, physical infrastructure, and digital identity.',
      deepInsight: 'AI x Crypto is a $30-40B sector growing 300% in 2024-2025. Decentralized compute (Render 10K+ GPUs, Akash, io.net), AI agents (Virtuals $2B, Eliza framework 10K+ GitHub stars), AI infrastructure (Bittensor subnets, Ritual inference). DePIN ($32B+) builds real-world infrastructure with token incentives — Helium (1M+ hotspots), Filecoin (22+ EiB), Hivemapper (30%+ roads mapped). Identity: Worldcoin (10M+ verified humans), ENS (.eth names), ERC-4337 (30M+ smart accounts).',
    },
    style: { width: 280 },
  },
  {
    id: 'regulation',
    type: 'page',
    position: { x: 600, y: 900 },
    data: {
      type: 'page',
      groupLabel: 'REGULATION',
      title: 'Regulation',
      description: 'Global crypto regulation — MiCA (EU), GENIUS Act (US stablecoins), ETF approvals, and the path to clarity.',
      canvasId: 'regulation',
      emoji: '⚖️',
      accentColor: '#64748b',
      category: 'regulation',
      shortOverview: 'How governments worldwide are regulating crypto: stablecoin frameworks, securities law, and compliance infrastructure.',
      deepInsight: 'Regulation is the biggest external force acting on crypto. MiCA (EU) is the world\'s most comprehensive crypto law — full enforcement since Jan 2025, €540M+ in fines. The GENIUS Act (US) created the first stablecoin framework — signed July 2025. Bitcoin ETFs hold $120B+ AUM (BlackRock\'s IBIT at $55B). The SEC shifted from enforcement-first to rules-first in 2025. Country-by-country: US (evolving), EU (MiCA), Dubai (VARA, very friendly), Singapore (MAS, progressive), China (banned), El Salvador (BTC legal tender). Compliance costs $500K-$3M+ for year 1.',
    },
    style: { width: 280 },
  },
];



const mainEdges: Edge[] = [
  // overview → Row 1 pillars
  { id: 'ov-fnd',    source: 'overview',       target: 'foundations',     ...E },
  { id: 'ov-chains', source: 'overview',       target: 'chains',         ...E },
  { id: 'ov-defi',   source: 'overview',       target: 'defi',           ...E },
  { id: 'ov-infra',  source: 'overview',       target: 'infra',          ...E },
  // Row 1 → Row 2 (conceptual dependencies)
  { id: 'fnd-chains',source: 'foundations',     target: 'chains',         ...E },
  { id: 'chains-defi', source: 'chains',       target: 'defi',           ...E },
  { id: 'defi-infra', source: 'defi',          target: 'infra',          ...E },
  { id: 'fnd-mev',   source: 'foundations',     target: 'mev-security',   ...E },
  { id: 'chains-mev', source: 'chains',        target: 'mev-security',   ...E },
  { id: 'defi-mev',  source: 'defi',           target: 'mev-security',   ...E },
  { id: 'defi-gov',  source: 'defi',           target: 'governance',     ...E },
  { id: 'defi-tok',  source: 'defi',           target: 'tokenomics',     ...E },
  { id: 'fnd-priv',  source: 'foundations',     target: 'privacy',        ...E },
  { id: 'infra-priv',source: 'infra',          target: 'privacy',        ...E },
  // Row 2 → Row 3 (cross-cutting)
  { id: 'chains-iop',source: 'chains',         target: 'interoperability',...E },
  { id: 'mev-iop',   source: 'mev-security',   target: 'interoperability',...E },
  { id: 'defi-app',  source: 'defi',           target: 'applications',   ...E },
  { id: 'tok-app',   source: 'tokenomics',     target: 'applications',   ...E },
  { id: 'infra-ftr', source: 'infra',          target: 'frontier',       ...E },
  { id: 'priv-ftr',  source: 'privacy',        target: 'frontier',       ...E },
  { id: 'defi-reg',  source: 'defi',           target: 'regulation',     ...E },
  { id: 'gov-reg',   source: 'governance',     target: 'regulation',     ...E },
  { id: 'tok-reg',   source: 'tokenomics',     target: 'regulation',     ...E },
];

// ─── ETHEREUM CANVAS ──────────────────────────────────────────────────────────

const ethNodes: Node<CanvasNodeData>[] = [
  {
    id: 'eth-l1',
    type: 'card',
    position: { x: 0, y: 0 },
    data: {
      type: 'card',
      title: 'Ethereum L1',
      subtitle: 'The World Computer',
      content: 'Proof of Stake since The Merge (Sep 2022). ~15 TPS on L1 with massive scale via rollups.',
      items: ['~12s block times', 'EIP-1559 fee burning', '32 ETH validator minimum'],
      accentColor: '#627eea',
      category: 'l1',
      shortOverview: `The base settlement layer — a global, trust-minimized computer that runs Turing-complete smart contracts.`,
      deepInsight: `After The Merge in September 2022, Ethereum moved from Proof of Work to Proof of Stake, reducing energy use by ~99.95%. EIP-1559 introduced a base fee burn mechanism, making ETH deflationary during high-usage periods. Ethereum's roadmap (the Surge, Verge, Purge, Splurge) focuses on scaling via rollups (L2s) while making the L1 leaner and more verifiable. L1 is intentionally slow (~15 TPS) — security and decentralization are prioritized, with L2s handling execution at scale.`,
      resources: [
        { label: 'ethereum.org/en/upgrades', url: 'https://ethereum.org/en/roadmap/' },
        { label: 'Ethereum yellow paper', url: 'https://ethereum.github.io/yellowpaper/paper.pdf' },
        { label: 'Ultrasound.money (ETH supply)', url: 'https://ultrasound.money' },
      ],
    },
    style: { width: 300 },
  },
  {
    id: 'eth-arbitrum',
    type: 'card',
    position: { x: -760, y: 460 },
    data: {
      type: 'card',
      groupLabel: 'Optimistic Rollup',
      title: 'Arbitrum',
      content: 'Largest Ethereum L2 by TVL. Full EVM compatibility with Nitro tech stack.',
      items: ['Nitro tech stack', 'ARB governance token', '$2B+ TVL'],
      category: 'l2',
      shortOverview: `The largest Ethereum L2 by TVL, using an optimistic rollup with fraud proofs and full EVM compatibility.`,
      deepInsight: `Arbitrum One is the dominant Ethereum rollup by most metrics. Its Nitro upgrade brought near-EVM-equivalent execution by compiling Geth (Ethereum's execution client) to WASM. Fraud proofs allow anyone to challenge invalid state transitions during a 7-day window, providing strong security guarantees without requiring trust in the sequencer. Arbitrum Nova is a separate chain using AnyTrust (a data availability committee) for lower fees, targeting gaming and social apps. The ARB token governs both through the Arbitrum DAO.`,
      resources: [
        { label: 'arbitrum.io — Official site', url: 'https://arbitrum.io' },
        { label: 'Arbitrum docs', url: 'https://docs.arbitrum.io' },
        { label: 'L2Beat — Arbitrum stats', url: 'https://l2beat.com/scaling/projects/arbitrum' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'eth-optimism',
    type: 'card',
    position: { x: -440, y: 460 },
    data: {
      type: 'card',
      groupLabel: 'Optimistic Rollup',
      title: 'Optimism',
      content: 'OP Stack powers Base, Mode, Zora, and more. Building the interconnected "Superchain".',
      items: ['OP Stack (open source)', 'Retroactive public goods funding', 'OP token'],
      category: 'l2',
      shortOverview: `The creator of the OP Stack — an open-source rollup framework powering the Superchain (Base, Mode, Zora, etc.).`,
      deepInsight: `Optimism shifted strategy from competing as a single L2 to becoming the foundational infrastructure for many L2s via the OP Stack. The "Superchain" vision: dozens of OP Stack chains share security, a sequencer marketplace, and eventually cross-chain messaging. Retroactive Public Goods Funding (RPGF) is its most innovative governance feature — rewarding builders after the fact based on demonstrated impact rather than upfront grants. The OP token governs the Optimism Collective, which allocates RPGF rounds.`,
      resources: [
        { label: 'optimism.io — Official site', url: 'https://www.optimism.io' },
        { label: 'OP Stack docs', url: 'https://docs.optimism.io' },
        { label: 'Superchain explainer', url: 'https://app.optimism.io/superchain' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'eth-base',
    type: 'card',
    position: { x: -120, y: 460 },
    data: {
      type: 'card',
      groupLabel: 'OP Stack L2',
      title: 'Base',
      content: "Coinbase's L2. Fastest-growing chain, hub for Farcaster, onchain apps, and consumer crypto.",
      items: ['No native token (uses ETH)', 'Coinbase on/off-ramp', '$1B+ TVL'],
      category: 'l2',
      shortOverview: `Coinbase's Ethereum L2 — the fastest-growing rollup with no native token and a focus on consumer-grade onchain apps.`,
      deepInsight: `Base has grown faster than any previous L2, largely due to Coinbase's distribution: 100M+ Coinbase users can bridge seamlessly. Uniquely, Base has no native token — all fees are paid in ETH — which means Coinbase earns revenue from sequencer fees rather than token appreciation. The Smart Wallet feature enables passkey-based accounts without seed phrases, dramatically lowering onboarding friction. Farcaster frames (mini-apps in social posts) and x402 payment standard are making Base the hub for "consumer crypto".`,
      resources: [
        { label: 'base.org — Official site', url: 'https://base.org' },
        { label: 'Base docs', url: 'https://docs.base.org' },
        { label: 'Base ecosystem explorer', url: 'https://base.org/ecosystem' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'eth-zksync',
    type: 'card',
    position: { x: 200, y: 460 },
    data: {
      type: 'card',
      groupLabel: 'ZK Rollup',
      title: 'zkSync Era',
      content: 'ZK rollup with native account abstraction. LLVM-based zkEVM by Matter Labs.',
      items: ['Native account abstraction', 'ZK token (2024)', 'Hyperchains ecosystem'],
      category: 'zk',
      shortOverview: `A ZK rollup with native account abstraction and validity proofs — transactions are proven cryptographically, not via fraud proofs.`,
      deepInsight: `ZK rollups use zero-knowledge proofs to cryptographically verify every batch of transactions, enabling near-instant finality on L1 (no 7-day withdrawal window like optimistic rollups). zkSync Era's LLVM-based compiler allows Solidity/Vyper compilation to ZK circuits. Native account abstraction means every account can be a smart contract — enabling gasless transactions, batched txns, and social recovery by default. The Hyperchains vision (now called ZK Stack) mirrors Optimism's Superchain: many ZK rollups sharing prover infrastructure.`,
      resources: [
        { label: 'zksync.io — Official site', url: 'https://zksync.io' },
        { label: 'zkSync Era docs', url: 'https://era.zksync.io/docs/' },
        { label: 'L2Beat — zkSync stats', url: 'https://l2beat.com/scaling/projects/zksync-era' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'eth-starknet',
    type: 'card',
    position: { x: 520, y: 460 },
    data: {
      type: 'card',
      groupLabel: 'ZK Rollup',
      title: 'StarkNet',
      content: 'ZK rollup using the Cairo language. STARK proofs with no trusted setup.',
      items: ['Cairo smart contracts', 'STARK proofs (no trusted setup)', 'STRK token'],
      category: 'zk',
      shortOverview: `A ZK rollup using STARK proofs (no trusted setup required) and the Cairo language, built by StarkWare.`,
      deepInsight: `STARKs (Scalable Transparent Arguments of Knowledge) require no trusted setup — unlike SNARKs, there's no "toxic waste" ceremony. This makes StarkNet theoretically more trustless. The tradeoff: Cairo is a custom language that developers must learn (though Cairo 1.0 is much more Rust-like). StarkNet's recursive proving enables "proofs of proofs," allowing extremely efficient verification of large batches. StarkWare has also built StarkEx, a permissioned ZK rollup used by dYdX (perps) and Immutable (gaming NFTs).`,
      resources: [
        { label: 'starknet.io — Official site', url: 'https://www.starknet.io' },
        { label: 'StarkNet docs', url: 'https://docs.starknet.io' },
        { label: 'Cairo language docs', url: 'https://www.cairo-lang.org/docs/' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'eth-uniswap',
    type: 'card',
    position: { x: -760, y: 920 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · DEX',
      title: 'Uniswap',
      content: 'Dominant AMM DEX. $1T+ lifetime volume. v4 adds hooks for custom pool logic.',
      items: ['Concentrated liquidity (v3)', 'UNI governance token', 'Hooks system (v4)'],
      category: 'dex',
      shortOverview: `The foundational AMM DEX — invented the constant-product formula and processes billions daily across 20+ chains.`,
      deepInsight: `Uniswap v2 popularized the x*y=k constant-product AMM, enabling permissionless token swaps without an order book. V3 introduced concentrated liquidity, letting LPs specify price ranges — 10x more capital efficient. V4 introduces "hooks," smart contract callbacks that fire at key lifecycle events, enabling custom AMM logic (dynamic fees, TWAP oracles, limit orders) without forking the protocol. Uniswap processes more volume than most centralized exchanges and has become the canonical on-chain price oracle through its TWAP mechanism.`,
      resources: [
        { label: 'uniswap.org — Official site', url: 'https://uniswap.org' },
        { label: 'Uniswap docs', url: 'https://docs.uniswap.org' },
        { label: 'Uniswap v3 whitepaper', url: 'https://uniswap.org/whitepaper-v3.pdf' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'eth-aave',
    type: 'card',
    position: { x: -440, y: 920 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · Lending',
      title: 'Aave',
      content: 'Largest DeFi lending market. Flash loans, GHO stablecoin, cross-chain.',
      items: ['$10B+ TVL', 'GHO stablecoin', 'Flash loans (invented here)'],
      category: 'lending',
      shortOverview: `The largest decentralized lending protocol — users supply assets to earn interest, borrow against collateral, or take flash loans.`,
      deepInsight: `Aave pioneered several DeFi primitives: flash loans (uncollateralized loans that must be repaid in a single tx), aTokens (interest-bearing tokens that appreciate in your wallet), and rate switching (variable vs stable borrow rates). The protocol operates across 12+ chains and markets, with a "V3 Portal" feature enabling cross-chain asset movement. GHO is Aave's native overcollateralized stablecoin, minted by locking approved collateral. Aave's governance (AAVE token) controls risk parameters for each market — a model widely copied.`,
      resources: [
        { label: 'aave.com — Official site', url: 'https://aave.com' },
        { label: 'Aave docs', url: 'https://docs.aave.com' },
        { label: 'Aave V3 whitepaper', url: 'https://github.com/aave/aave-v3-core/blob/master/techpaper/Aave_V3_Technical_Paper.pdf' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'eth-lido',
    type: 'card',
    position: { x: -120, y: 920 },
    data: {
      type: 'card',
      groupLabel: 'Liquid Staking',
      title: 'Lido',
      content: 'Largest ETH liquid staking protocol. stETH is the most used DeFi collateral.',
      items: ['stETH = rebasing staked ETH', '$30B+ TVL', 'LDO governance'],
      category: 'staking',
      shortOverview: `The dominant ETH liquid staking protocol — stake ETH, receive stETH, and use it across DeFi while earning staking rewards.`,
      deepInsight: `Lido solved the main UX problem of ETH staking: validators are locked until withdrawals were enabled (post-Shanghai). Lido issues stETH — a rebasing token that represents staked ETH + accrued rewards. stETH became the most liquid "yield-bearing collateral" in DeFi, accepted by Aave, Curve, MakerDAO, and dozens more protocols. Lido's ~33% share of staked ETH has raised centralization concerns — if Lido validators collude, they could attack the network. The Lido DAO has set a self-limit of 22% target to address this.`,
      resources: [
        { label: 'lido.fi — Official site', url: 'https://lido.fi' },
        { label: 'Lido docs', url: 'https://docs.lido.fi' },
        { label: 'Ethereum staking stats', url: 'https://rated.network' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'eth-eigenlayer',
    type: 'card',
    position: { x: 200, y: 920 },
    data: {
      type: 'card',
      groupLabel: 'Restaking',
      title: 'EigenLayer',
      content: 'Restaking protocol. Use staked ETH to secure additional AVS services.',
      items: ['Restaked ETH security', 'AVS marketplace', 'EIGEN token'],
      category: 'restaking',
      shortOverview: `A restaking protocol that lets ETH stakers reuse their stake to secure additional services, creating a marketplace for decentralized trust.`,
      deepInsight: `EigenLayer introduces "restaking" — ETH validators opt in to extend their economic security to additional protocols (Actively Validated Services, or AVSs) like bridges, oracles, rollup sequencers, and data availability layers. Instead of each new protocol bootstrapping its own token and validator set, they can rent ETH's security via EigenLayer. EigenAVS operators earn additional yield; restakers earn additional yield but also take on additional slashing risk. EigenDA (a data availability layer) is the flagship AVS. This could make ETH the trust anchor for the entire crypto stack.`,
      resources: [
        { label: 'eigenlayer.xyz — Official site', url: 'https://eigenlayer.xyz' },
        { label: 'EigenLayer docs', url: 'https://docs.eigenlayer.xyz' },
        { label: 'EigenLayer whitepaper', url: 'https://docs.eigenlayer.xyz/overview/whitepaper' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'eth-chainlink',
    type: 'card',
    position: { x: -500, y: 1340 },
    data: {
      type: 'card',
      groupLabel: 'Infrastructure · Oracles',
      title: 'Chainlink',
      content: 'Decentralized oracle network. Price feeds, VRF, CCIP cross-chain messaging.',
      items: ['$20T+ secured (lifetime)', 'LINK token', 'CCIP — cross-chain standard'],
      category: 'oracle',
      shortOverview: `The leading decentralized oracle network — connecting smart contracts to real-world data, randomness, and cross-chain messaging.`,
      deepInsight: `Chainlink solves the "oracle problem": blockchains can't natively access off-chain data. Chainlink's DON (Decentralized Oracle Network) aggregates data from multiple sources and submits it on-chain, with economic penalties for bad data. Price feeds power virtually every DeFi protocol (Aave, Compound, MakerDAO). VRF (Verifiable Random Function) provides provably fair randomness for gaming. CCIP (Cross-Chain Interoperability Protocol) is Chainlink's new standard for cross-chain messaging, positioning Chainlink as the internet layer for blockchains.`,
      resources: [
        { label: 'chain.link — Official site', url: 'https://chain.link' },
        { label: 'Chainlink docs', url: 'https://docs.chain.link' },
        { label: 'Chainlink whitepaper', url: 'https://research.chain.link/whitepaper-v2.pdf' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'eth-graph',
    type: 'card',
    position: { x: -180, y: 1340 },
    data: {
      type: 'card',
      groupLabel: 'Infrastructure · Indexing',
      title: 'The Graph',
      content: 'Decentralized indexing protocol. Query blockchain data via GraphQL subgraphs.',
      items: ['Subgraph marketplace', 'GRT token', 'Multi-chain support'],
      category: 'indexer',
      shortOverview: "The decentralized indexing protocol — allows developers to query blockchain data via GraphQL, like a Google for on-chain events.",
      deepInsight: `Blockchains are great at writing immutable data but terrible at querying it efficiently. The Graph solves this by letting developers define "subgraphs" — data transformation schemas that index specific contract events into queryable APIs. Thousands of DeFi and NFT protocols use The Graph as their backend. GRT is staked by indexers (who run nodes) and curators (who signal on quality subgraphs). The Graph supports 40+ chains including Ethereum, Arbitrum, Solana, and Cosmos.`,
      resources: [
        { label: 'thegraph.com — Official site', url: 'https://thegraph.com' },
        { label: 'The Graph docs', url: 'https://thegraph.com/docs/en/' },
        { label: 'Subgraph Studio', url: 'https://thegraph.com/studio/' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'eth-megaeth',
    type: 'card',
    position: { x: 840, y: 460 },
    data: {
      type: 'card',
      groupLabel: 'Real-time EVM',
      title: 'MegaETH',
      content: 'Real-time Ethereum L2 targeting 100k TPS and sub-millisecond latency.',
      items: ['100k TPS target', 'Sub-ms latency', 'Mini-nodes architecture'],
      category: 'l2',
      accentColor: '#ef4444',
      shortOverview: `An Ethereum L2 designed for real-time performance — 100k TPS and <1ms latency via mini-nodes and a high-performance sequencer.`,
      deepInsight: `MegaETH separates execution from verification: a powerful sequencer handles real-time EVM execution, while lightweight mini-nodes verify state proofs. This enables sub-millisecond block confirmations suitable for trading, gaming, and social applications that need Ethereum security without Ethereum's latency. MegaETH is EVM-compatible and settles to Ethereum L1.`,
      resources: [
        { label: 'megaeth.com — Official site', url: 'https://megaeth.com' },
        { label: 'MegaETH docs', url: 'https://docs.megaeth.com' },
      ],
      articleId: 'eth-megaeth',
    },
    style: { width: 260 },
  },
];

const ethEdges: Edge[] = [
  // L1 → L2 rollups
  { id: 'e-arb',       source: 'eth-l1',       target: 'eth-arbitrum',  ...E },
  { id: 'e-opt',       source: 'eth-l1',       target: 'eth-optimism',  ...E },
  { id: 'e-opt-base',  source: 'eth-optimism', target: 'eth-base',      ...E }, // Base built on OP Stack
  { id: 'e-zk',        source: 'eth-l1',       target: 'eth-zksync',    ...E },
  { id: 'e-stark',     source: 'eth-l1',       target: 'eth-starknet',  ...E },
  // L1 → core DeFi
  { id: 'e-uni',       source: 'eth-l1',       target: 'eth-uniswap',   ...E },
  { id: 'e-aave',      source: 'eth-l1',       target: 'eth-aave',      ...E },
  { id: 'e-lido',      source: 'eth-l1',       target: 'eth-lido',      ...E },
  // restaking depends on lido's stETH
  { id: 'e-eigen',     source: 'eth-lido',     target: 'eth-eigenlayer',...E },
  // infra
  { id: 'e-chain',     source: 'eth-l1',       target: 'eth-chainlink', ...E },
  { id: 'e-graph',     source: 'eth-l1',       target: 'eth-graph',     ...E },
  // Chainlink powers DeFi protocols as oracle
  { id: 'e-chain-uni', source: 'eth-chainlink',target: 'eth-uniswap',   ...E },
  { id: 'e-chain-aave',source: 'eth-chainlink',target: 'eth-aave',      ...E },
  // MegaETH L2
  { id: 'e-mega',      source: 'eth-l1',       target: 'eth-megaeth',   ...E },
];

// ─── SOLANA CANVAS ────────────────────────────────────────────────────────────

const solNodes: Node<CanvasNodeData>[] = [
  {
    id: 'sol-l1',
    type: 'card',
    position: { x: 0, y: 0 },
    data: {
      type: 'card',
      title: 'Solana',
      subtitle: 'Built for Scale',
      content: 'Proof of History + Proof of Stake. 65k TPS, 400ms block times, sub-cent fees.',
      items: ['Gulf Stream mempool', 'Turbine block propagation', 'Sealevel parallel runtime'],
      accentColor: '#9945ff',
      category: 'l1',
      shortOverview: `A high-performance monolithic L1 with 65k TPS capacity and sub-cent fees, powered by Proof of History.`,
      deepInsight: `Proof of History (PoH) is Solana's core innovation: a cryptographic clock that timestamps events before they're included in a block, removing the need for validators to communicate about time ordering. This enables pipelining: while one block is being executed, the next is being propagated, and the one after is being ordered. Sealevel (parallel transaction execution) and Gulf Stream (mempool-less architecture) complete the picture. The tradeoff vs Ethereum: fewer validators (~2,000 vs ~1M), higher hardware requirements, and periodic network halts — but blazing speed and near-zero fees.`,
      resources: [
        { label: 'solana.com — Official site', url: 'https://solana.com' },
        { label: 'Solana docs', url: 'https://docs.solana.com' },
        { label: 'Helius blog — Solana deep dives', url: 'https://www.helius.dev/blog' },
      ],
    },
    style: { width: 300 },
  },
  {
    id: 'sol-jupiter',
    type: 'card',
    position: { x: -680, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · Aggregator',
      title: 'Jupiter',
      content: 'Dominant DEX aggregator on Solana. Perps, launchpad, and DAO governance.',
      items: ['JUP airdrop ($1B+ to community)', 'Jupiter Perpetuals', 'J.U.P DAO governance'],
      category: 'dex',
      shortOverview: `The dominant DEX aggregator on Solana — routes trades through all liquidity sources to find the best price.`,
      deepInsight: `Jupiter aggregates liquidity from every Solana DEX (Raydium, Orca, Meteora, etc.) and uses a smart routing algorithm to find the best swap path — splitting across multiple pools when advantageous. It handles ~70% of all Solana DEX volume. Beyond swapping, Jupiter has expanded to perpetual futures (competing with dYdX), a launchpad for new tokens, and limit/DCA orders. The JUP token ($1B+ market cap) was distributed via one of crypto's largest airdrops, cementing Jupiter's community-first positioning.`,
      resources: [
        { label: 'jup.ag — Official site', url: 'https://jup.ag' },
        { label: 'Jupiter docs', url: 'https://docs.jup.ag' },
        { label: 'Jupiter station (stats)', url: 'https://station.jup.ag' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'sol-raydium',
    type: 'card',
    position: { x: -360, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · AMM',
      title: 'Raydium',
      content: 'Leading AMM and liquidity hub on Solana. Powers token launches via LaunchLab.',
      items: ['RAY token', 'CLMM pools (concentrated)', 'LaunchLab token factory'],
      category: 'dex',
      shortOverview: "Solana's leading AMM, providing deep liquidity for hundreds of trading pairs and powering the majority of new token launches.",
      deepInsight: `Raydium was one of the first AMMs on Solana and remains the deepest liquidity source for most SOL-denominated pairs. Unlike Ethereum AMMs, Raydium originally integrated directly with Serum's central limit order book, giving LPs access to order book liquidity. Post-FTX/Serum collapse, Raydium pivoted to its own CLMM (concentrated liquidity) design. LaunchLab is Raydium's answer to pump.fun — a bonding curve-based token launch platform that became the primary venue for new token creation after pump.fun's dominance.`,
      resources: [
        { label: 'raydium.io — Official site', url: 'https://raydium.io' },
        { label: 'Raydium docs', url: 'https://docs.raydium.io' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'sol-marinade',
    type: 'card',
    position: { x: -40, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Liquid Staking',
      title: 'Marinade',
      content: 'Largest liquid staking protocol on Solana. mSOL is widely used as DeFi collateral.',
      items: ['mSOL liquid staking token', 'MNDE governance', 'Automated stake delegation'],
      category: 'staking',
      shortOverview: `The leading liquid staking protocol on Solana — stake SOL, receive mSOL, and use it as collateral across Solana DeFi.`,
      deepInsight: `Marinade automatically distributes staked SOL across hundreds of validators based on performance metrics (uptime, skip rate, commission), strengthening Solana's decentralization. mSOL is an interest-bearing token that appreciates vs SOL as staking rewards accumulate — making it ideal DeFi collateral. Marinade Native allows large holders to stake with specific validators while still benefiting from automation. The protocol also introduced "protected staking rewards" to buffer mSOL price from validator downtime events.`,
      resources: [
        { label: 'marinade.finance — Official site', url: 'https://marinade.finance' },
        { label: 'Marinade docs', url: 'https://docs.marinade.finance' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'sol-jito',
    type: 'card',
    position: { x: 280, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'MEV · Staking',
      title: 'Jito',
      content: 'MEV infrastructure + liquid staking. JitoSOL distributes MEV rewards to stakers.',
      items: ['JitoSOL liquid staking', 'JTO governance token', 'Block engine (MEV capture)'],
      category: 'staking',
      shortOverview: `An MEV infrastructure layer and liquid staking protocol that captures validator MEV and redistributes it to JitoSOL holders.`,
      deepInsight: `MEV (Maximal Extractable Value) on Solana is significant due to high transaction frequency. Jito built a modified Solana validator client with a "block engine" — a private mempool where searchers bid for transaction ordering priority. This MEV revenue is distributed to JitoSOL stakers, giving them ~0.5-1% additional yield vs other liquid staking tokens. Jito controls ~50% of Solana's stake by running the most profitable validator setup. The JTO airdrop rewarded early users of the protocol.`,
      resources: [
        { label: 'jito.network — Official site', url: 'https://www.jito.network' },
        { label: 'Jito docs', url: 'https://docs.jito.network' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'sol-pump',
    type: 'card',
    position: { x: -520, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Culture · Memecoins',
      title: 'Pump.fun',
      content: 'Token launch platform that drove the 2024 memecoin supercycle.',
      items: ['Bonding curve mechanism', '$500M+ in protocol fees', 'Millions of tokens launched'],
      category: 'launchpad',
      shortOverview: `The platform that democratized token launches via bonding curves, triggering the 2024 memecoin supercycle on Solana.`,
      deepInsight: `Pump.fun introduced a simple bonding curve model: anyone pays ~$2 SOL to launch a token, which graduates to Raydium once it hits a $69k market cap. This removed the friction of liquidity bootstrapping. The result: hundreds of thousands of tokens launched, peak Solana fee revenue exceeding Ethereum's, and a new cultural layer where memecoins became the primary mechanism for viral social coordination. Pump.fun earned $500M+ in fees in 2024, making it one of the most profitable applications in crypto. It also sparked ethical debates about gambling dynamics.`,
      resources: [
        { label: 'pump.fun — Official site', url: 'https://pump.fun' },
        { label: 'Dune analytics — pump.fun stats', url: 'https://dune.com/crypto_koryo/pumpfun' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'sol-tensor',
    type: 'card',
    position: { x: -180, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'NFTs',
      title: 'Tensor',
      content: 'Leading NFT marketplace on Solana. Advanced order books for power traders.',
      items: ['TNSR token airdrop', 'Portfolio analytics', 'Bid / sweep functionality'],
      category: 'nft',
      shortOverview: `The dominant NFT marketplace on Solana, built for power traders with advanced order book features and portfolio tools.`,
      deepInsight: `Tensor distinguished itself from Magic Eden (the previous Solana NFT leader) by targeting sophisticated traders. Features like collection-level bids (bid on any NFT in a collection, not just a specific one), live floor sweeps, and advanced portfolio analytics attracted traders who needed professional-grade tools. The TNSR airdrop rewarded active traders based on trading volume history. Tensor now also supports compressed NFTs (cNFTs), which mint at a fraction of the cost of regular NFTs — enabling use cases like on-chain gaming assets.`,
      resources: [
        { label: 'tensor.trade — Official site', url: 'https://www.tensor.trade' },
        { label: 'Tensor docs', url: 'https://docs.tensor.trade' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'sol-helius',
    type: 'card',
    position: { x: 160, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Infrastructure',
      title: 'Helius',
      content: 'Leading Solana RPC and developer infra. Enhanced APIs and real-time indexing.',
      items: ['High-performance RPC', 'DAS API (NFT & token data)', 'Webhooks & event streams'],
      category: 'infra',
      shortOverview: "The leading Solana RPC and developer infrastructure provider — enhanced APIs, webhooks, and real-time indexing for builders.",
      deepInsight: `Helius was built by Solana developers frustrated with the limitations of standard RPC providers. Their DAS (Digital Asset Standard) API provides a unified interface for querying NFTs, fungible tokens, and compressed NFTs across any Solana address — a notoriously difficult problem due to Solana's account model. Webhooks let developers subscribe to on-chain events (wallet activity, program calls, token transfers) without running polling loops. Helius has become the go-to infrastructure for Solana's most sophisticated applications.`,
      resources: [
        { label: 'helius.dev — Official site', url: 'https://helius.dev' },
        { label: 'Helius docs', url: 'https://docs.helius.dev' },
        { label: 'Helius blog — Solana deep dives', url: 'https://www.helius.dev/blog' },
      ],
    },
    style: { width: 260 },
  },
];

const solEdges: Edge[] = [
  // L1 → DeFi aggregator / DEX
  { id: 's-jup',      source: 'sol-l1',      target: 'sol-jupiter',  ...E },
  { id: 's-ray',      source: 'sol-l1',      target: 'sol-raydium',  ...E },
  // Jupiter routes through Raydium for deep liquidity
  { id: 's-jup-ray',  source: 'sol-jupiter', target: 'sol-raydium',  ...E },
  // liquid staking
  { id: 's-mar',      source: 'sol-l1',      target: 'sol-marinade', ...E },
  { id: 's-jit',      source: 'sol-l1',      target: 'sol-jito',     ...E },
  // Marinade and Jito compete in liquid staking
  { id: 's-mar-jit',  source: 'sol-marinade',target: 'sol-jito',     ...E },
  // Raydium is graduation target for pump.fun tokens
  { id: 's-pmp',      source: 'sol-raydium', target: 'sol-pump',     ...E },
  // NFT + infra
  { id: 's-ten',      source: 'sol-l1',      target: 'sol-tensor',   ...E },
  { id: 's-hel',      source: 'sol-l1',      target: 'sol-helius',   ...E },
  // Helius powers apps like Tensor
  { id: 's-hel-ten',  source: 'sol-helius',  target: 'sol-tensor',   ...E },
];

// ─── MONAD CANVAS ─────────────────────────────────────────────────────────────

const monadNodes: Node<CanvasNodeData>[] = [
  {
    id: 'monad-l1',
    type: 'card',
    position: { x: 0, y: 0 },
    data: {
      type: 'card',
      title: 'Monad',
      subtitle: '10,000 TPS EVM Chain',
      content: 'A Layer 1 achieving 10k TPS with full EVM bytecode compatibility through parallel execution.',
      items: ['Parallel EVM execution', 'MonadBFT consensus', 'Full EVM bytecode compatibility'],
      accentColor: '#836ef9',
      category: 'l1',
      shortOverview: `A new EVM-compatible L1 that achieves 10,000 TPS via parallel execution while remaining fully compatible with existing Ethereum tooling.`,
      deepInsight: `The EVM's sequential execution model is its core scaling bottleneck. Monad breaks this with optimistic parallel execution: transactions run in parallel speculatively, and state conflicts are detected and re-executed. MonadBFT pipelines consensus and execution — while validators are agreeing on block N, block N+1 is already being executed. MonadDB uses async I/O to pre-fetch state from disk while transactions execute. Together, these four innovations (parallel exec, pipelined BFT, custom DB, async I/O) are expected to achieve 10,000 TPS with 1-second finality on commodity hardware.`,
      resources: [
        { label: 'monad.xyz — Official site', url: 'https://monad.xyz' },
        { label: 'Monad docs', url: 'https://docs.monad.xyz' },
        { label: 'Monad technical blog', url: 'https://monad.xyz/blog' },
      ],
    },
    style: { width: 320 },
  },
  {
    id: 'monad-parallel',
    type: 'card',
    position: { x: -540, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Core Innovation',
      title: 'Parallel Execution',
      content: 'EVM transactions run speculatively in parallel. State conflicts are detected and re-run.',
      items: ['Optimistic concurrency control', 'Conflict detection & re-execution', '10,000 TPS target'],
      category: 'infra',
      shortOverview: `Monad executes EVM transactions in parallel using optimistic concurrency — like out-of-order CPU execution, but for the EVM.`,
      deepInsight: `Traditional EVM processes one tx at a time, strictly ordered. Monad's parallel executor runs transactions concurrently, tracking which storage slots each tx reads/writes. If two transactions access the same slot and the order matters (a "conflict"), the later one is re-executed with the correct state. For the majority of transactions (which touch different state), this achieves full parallelism. This is analogous to Solana's Sealevel but for the EVM — and unlike Solana, no developer changes are required.`,
      resources: [
        { label: 'Monad parallel execution blog', url: 'https://monad.xyz/blog/parallel-execution' },
      ],
    },
    style: { width: 280 },
  },
  {
    id: 'monad-bft',
    type: 'card',
    position: { x: -120, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Core Innovation',
      title: 'MonadBFT',
      content: 'Pipelined BFT consensus separates ordering from execution, running each at full speed.',
      items: ['Pipelined BFT consensus', 'Deferred execution', '~1s block times'],
      category: 'infra',
      shortOverview: `A pipelined BFT consensus that separates block ordering from transaction execution, eliminating idle time between steps.`,
      deepInsight: `In traditional BFT consensus, validators must fully execute a block before voting on the next one. MonadBFT pipelines these stages: block N's consensus happens while block N-1 is executing. This "asynchronous execution" means the consensus layer is never waiting on the execution layer. MonadBFT is based on HotStuff (the same protocol behind Aptos/Diem) but adapted for Monad's deferred execution model.`,
      resources: [
        { label: 'Monad BFT design doc', url: 'https://docs.monad.xyz/consensus/monadbft' },
      ],
    },
    style: { width: 280 },
  },
  {
    id: 'monad-db',
    type: 'card',
    position: { x: 300, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Core Innovation',
      title: 'MonadDB',
      content: "Custom state database optimized for async I/O and parallel reads — purpose-designed for Monad's execution model.",
      items: ['Async I/O pre-fetching', 'Parallel state reads', 'Patricia Merkle Trie optimized'],
      category: 'infra',
      shortOverview: "A custom-built state database that pre-fetches state asynchronously while transactions execute, eliminating disk I/O bottlenecks.",
      deepInsight: `Most EVM clients use LevelDB or RocksDB, which are synchronous and single-threaded for state reads. MonadDB is purpose-built for Monad's parallel execution: state reads are issued asynchronously and pre-fetched before execution begins. The database uses a modified Patricia Merkle Trie optimized for sequential reads (which are the common case in parallel execution). This removes disk I/O as a bottleneck for parallel execution.`,
      resources: [
        { label: 'MonadDB design doc', url: 'https://docs.monad.xyz/technical-discussion/monaddb' },
      ],
    },
    style: { width: 280 },
  },
  {
    id: 'monad-evm',
    type: 'card',
    position: { x: -260, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Developer Experience',
      title: 'EVM Compatibility',
      content: 'Full EVM bytecode compatibility — existing Solidity contracts deploy without changes.',
      items: ['All Solidity contracts work', 'Hardhat / Foundry support', 'MetaMask & wallets compatible'],
      category: 'infra',
      shortOverview: `Drop-in EVM compatibility means the entire Ethereum toolchain works on Monad without modification.`,
      deepInsight: `EVM compatibility at the bytecode level means that any contract deployed on Ethereum can be deployed on Monad without recompilation. This is a stronger compatibility guarantee than "EVM-equivalent" (which recompiles) or "EVM-inspired" (custom VM). For developers, this means the same Hardhat/Foundry workflows, Solidity compiler, and debugging tools. For users, MetaMask and other wallets connect with just a network switch. The main developer adjustment is understanding Monad's transaction ordering guarantees under parallel execution.`,
      resources: [
        { label: 'Monad EVM compatibility docs', url: 'https://docs.monad.xyz/developer/evm-compatibility' },
      ],
    },
    style: { width: 280 },
  },
  {
    id: 'monad-eco',
    type: 'card',
    position: { x: 160, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Ecosystem',
      title: 'Growing Ecosystem',
      content: 'Monad testnet is live in 2025. Strong developer and validator community forming.',
      items: ['Testnet live (2025)', '$225M raised (Paradigm-led)', 'Active developer community'],
      category: 'infra',
      shortOverview: `An early but rapidly growing ecosystem with $225M raised and an active developer community forming on testnet.`,
      deepInsight: `Monad raised $225M in a Paradigm-led round — one of the largest seed rounds in crypto history. The testnet launched in early 2025, attracting DeFi protocols, NFT projects, and gaming apps eager to be first movers on the highest-throughput EVM chain. Since Monad is fully EVM-compatible, protocols can deploy with minimal changes from their Ethereum codebase. The community has grown rapidly, with developer hackathons and ecosystem grants driving early adoption.`,
      resources: [
        { label: 'Monad ecosystem grants', url: 'https://monad.xyz/grants' },
        { label: 'Monad testnet faucet', url: 'https://docs.monad.xyz/developer/testnet/faucet' },
      ],
    },
    style: { width: 280 },
  },
];

const monadEdges: Edge[] = [
  { id: 'm-par', source: 'monad-l1', target: 'monad-parallel', ...E },
  { id: 'm-bft', source: 'monad-l1', target: 'monad-bft',      ...E },
  { id: 'm-db',  source: 'monad-l1', target: 'monad-db',       ...E },
  { id: 'm-evm', source: 'monad-parallel', target: 'monad-evm', ...E },
  { id: 'm-eco', source: 'monad-l1', target: 'monad-eco',      ...E },
];

// ─── BASE CANVAS ──────────────────────────────────────────────────────────────

const baseNodes: Node<CanvasNodeData>[] = [
  {
    id: 'base-chain',
    type: 'card',
    position: { x: 0, y: 0 },
    data: {
      type: 'card',
      title: 'Base',
      subtitle: "Coinbase's Ethereum L2",
      content: 'Built on the OP Stack, incubated by Coinbase. No native token — all fees in ETH.',
      items: ['No native token (uses ETH)', 'Backed by Coinbase', 'OP Stack rollup'],
      accentColor: '#0052ff',
      category: 'l2',
      shortOverview: "Coinbase's Ethereum L2 — the fastest-growing rollup by users, with a mandate to bring the next billion people onchain.",
      deepInsight: `Base launched in August 2023 as the first major L2 from a publicly traded company. Coinbase's decision to have no native token (all fees in ETH) signals their commitment to Ethereum's alignment vs extracting value via token inflation. The Smart Wallet feature (passkey-based, no seed phrase) lowers the barrier for non-crypto-native users. Base's thesis is that "consumer crypto" — apps that happen to use blockchain rather than apps explicitly about blockchain — will drive mass adoption. Farcaster, Zora, and friend.tech were early builders on this thesis.`,
      resources: [
        { label: 'base.org — Official site', url: 'https://base.org' },
        { label: 'Base docs', url: 'https://docs.base.org' },
        { label: 'Base blog', url: 'https://base.mirror.xyz' },
      ],
    },
    style: { width: 300 },
  },
  {
    id: 'base-opstack',
    type: 'card',
    position: { x: -540, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Technology',
      title: 'OP Stack',
      content: 'Base is built on the OP Stack — the same tech as Optimism. Part of the Superchain.',
      items: ['Optimistic rollup (fraud proofs)', '7-day withdrawal period', 'Superchain member'],
      category: 'infra',
      shortOverview: `The OP Stack is an open-source rollup framework — Base and Optimism share the same tech stack and are both Superchain members.`,
      deepInsight: `The OP Stack was open-sourced by Optimism as a strategic move: rather than competing as one L2, they aimed to become the infrastructure for many L2s, all sharing security and eventually a sequencer marketplace. "Superchain" chains (Base, Mode, Zora, Cyber, etc.) settle on Ethereum L1 and will eventually share cross-chain messaging via a native bridge. The Superchain's collective TVL and user base significantly exceeds any individual L2, making the OP Stack the most widely deployed rollup framework.`,
      resources: [
        { label: 'OP Stack docs', url: 'https://docs.optimism.io' },
        { label: 'Superchain overview', url: 'https://app.optimism.io/superchain' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'base-coinbase',
    type: 'card',
    position: { x: -160, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Integration',
      title: 'Coinbase Integration',
      content: "Seamless on/off-ramps, Smart Wallet (passkeys), and Coinbase Wallet support.",
      items: ['Easy fiat on/off-ramp', 'Smart Wallet (passkey accounts)', 'x402 HTTP payments'],
      category: 'infra',
      shortOverview: "Deep integration with Coinbase's 100M+ user base — fiat on/off-ramps, Smart Wallet, and Coinbase Pay are all native to Base.",
      deepInsight: `Coinbase's distribution advantage is Base's primary moat. Users can bridge from their Coinbase balance to Base in a single tap without leaving the Coinbase app. Smart Wallet eliminates seed phrases using device-native passkeys (Face ID, Touch ID) — any wallet action is authenticated biometrically, making it the most consumer-friendly crypto wallet. The x402 standard (an HTTP payment protocol) is Coinbase's bid to make micropayments as simple as HTTP requests.`,
      resources: [
        { label: 'Smart Wallet docs', url: 'https://docs.base.org/docs/tools/coinbase-smart-wallet' },
        { label: 'x402 payments', url: 'https://x402.org' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'base-consumer',
    type: 'card',
    position: { x: 220, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Vision',
      title: 'Consumer Crypto',
      content: 'Base bets on consumer apps, social, and gaming as the next frontier.',
      items: ['Farcaster social protocol', 'Gaming on Base', 'Mini-app ecosystem'],
      category: 'social',
      shortOverview: "Base's thesis: the next wave of adoption comes from consumer apps that happen to use crypto, not crypto-native apps.",
      deepInsight: `"Consumer crypto" is Base's guiding principle — building for users who don't care about blockchain but benefit from its properties (ownership, programmability, global access). Farcaster (decentralized social with Frames) is the highest-profile example: developers embed interactive mini-apps in social posts, enabling mints, swaps, and games without leaving the feed. Zora (creator monetization), friend.tech (social tokens), and Rally (fan tokens) all built on Base's thesis that social primitives + owned assets = consumer crypto.`,
      resources: [
        { label: 'Base consumer apps', url: 'https://base.org/ecosystem' },
        { label: 'Farcaster', url: 'https://farcaster.xyz' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'base-aerodrome',
    type: 'card',
    position: { x: -640, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · DEX',
      title: 'Aerodrome',
      content: 'Dominant DEX on Base. Vote-escrow tokenomics, $500M+ TVL.',
      items: ['AERO / veAERO tokens', '$500M+ TVL', 'Liquidity incentive flywheel'],
      category: 'dex',
      shortOverview: "Base's dominant DEX — a fork of Velodrome (Optimism) with ve(3,3) tokenomics that created a self-sustaining liquidity flywheel.",
      deepInsight: `Aerodrome uses vote-escrow tokenomics (ve(3,3)): lock AERO to get veAERO, use veAERO to vote on which pools receive AERO emissions. Protocols that need liquidity bribe veAERO holders to vote for their pools. This creates a sustainable incentive: protocols pay for liquidity without inflationary token dumps. Aerodrome became the dominant DEX on Base within months of Base's launch, accumulating $500M+ TVL and becoming the primary venue for new token liquidity on Base.`,
      resources: [
        { label: 'aerodrome.finance — Official site', url: 'https://aerodrome.finance' },
        { label: 'Aerodrome docs', url: 'https://aerodrome.finance/docs' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'base-moonwell',
    type: 'card',
    position: { x: -320, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · Lending',
      title: 'Moonwell',
      content: 'Leading lending protocol on Base. USDC-first with Morpho and Coinbase integration.',
      items: ['WELL governance token', 'USDC primary market', 'Morpho integration'],
      category: 'lending',
      shortOverview: "Base's leading lending protocol — supply and borrow assets with Coinbase-integrated risk parameters.",
      deepInsight: `Moonwell is a fork of Compound V2 deployed on Moonbeam (Polkadot) and Base. On Base, it has become the primary lending venue due to Coinbase's implicit endorsement and its USDC-first approach (Coinbase is a Circle shareholder). The Morpho integration adds a "Blue Chip" isolated lending market for more efficient capital utilization. WELL token holders govern risk parameters for each asset market.`,
      resources: [
        { label: 'moonwell.fi — Official site', url: 'https://moonwell.fi' },
        { label: 'Moonwell docs', url: 'https://docs.moonwell.fi' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'base-farcaster',
    type: 'card',
    position: { x: 0, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Social Protocol',
      title: 'Farcaster / Frames',
      content: 'Decentralized social with Frames v2 — interactive mini-apps in social posts.',
      items: ['Warpcast client app', 'Frames v2 mini-apps', 'On-chain social graph'],
      category: 'social',
      shortOverview: `A decentralized social protocol where developers can embed interactive mini-apps (Frames) directly in posts on Base.`,
      deepInsight: `Farcaster is a "sufficiently decentralized" social protocol: user identities and connections are stored on-chain (Ethereum + OP Stack), but posts are stored off-chain by "hubs" (servers that sync via gossip). This gives users ownership of their social graph without making every post expensive. Frames v2 is the killer feature: any cast (post) can contain a Frame — an interactive mini-app running in an iframe. Users can mint NFTs, swap tokens, play games, or vote in governance without leaving their social feed. Over 100k Frames have been deployed.`,
      resources: [
        { label: 'farcaster.xyz — Official site', url: 'https://www.farcaster.xyz' },
        { label: 'Farcaster docs', url: 'https://docs.farcaster.xyz' },
        { label: 'Warpcast app', url: 'https://warpcast.com' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'base-basename',
    type: 'card',
    position: { x: 320, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Identity',
      title: 'Basenames',
      content: 'ENS-compatible name service on Base. Get a .base.eth identity.',
      items: ['ENS-compatible subdomains', 'On-chain identity', 'Free for Coinbase Verified users'],
      category: 'identity',
      shortOverview: `An ENS-compatible name service on Base — get a human-readable .base.eth address for your wallet.`,
      deepInsight: `Basenames uses ENS's existing infrastructure but deploys the resolver on Base, making names cheaper (no L1 gas) while maintaining ENS compatibility. A .base.eth name resolves across all ENS-compatible wallets and apps. Coinbase Verified users (who completed identity verification) get a free Basename, tying digital identity to real-world verification for those who want it. Basenames can hold arbitrary text records — social handles, website URLs, avatar images — making them a rich on-chain identity primitive.`,
      resources: [
        { label: 'base.org/names — Basenames', url: 'https://www.base.org/names' },
        { label: 'Basenames docs', url: 'https://docs.base.org/docs/tools/basenames' },
      ],
    },
    style: { width: 260 },
  },
];

const baseEdges: Edge[] = [
  // tech stack
  { id: 'b-ops',     source: 'base-chain',    target: 'base-opstack',   ...E },
  { id: 'b-cb',      source: 'base-chain',    target: 'base-coinbase',  ...E },
  // thesis
  { id: 'b-con',     source: 'base-chain',    target: 'base-consumer',  ...E },
  // DeFi
  { id: 'b-aer',     source: 'base-chain',    target: 'base-aerodrome', ...E },
  { id: 'b-moo',     source: 'base-chain',    target: 'base-moonwell',  ...E },
  // Aerodrome and Moonwell interact — borrow then LP
  { id: 'b-aer-moo', source: 'base-aerodrome',target: 'base-moonwell',  ...E },
  // consumer apps
  { id: 'b-far',     source: 'base-consumer', target: 'base-farcaster', ...E },
  // identity
  { id: 'b-bn',      source: 'base-chain',    target: 'base-basename',  ...E },
  // Coinbase integration powers identity
  { id: 'b-cb-bn',   source: 'base-coinbase', target: 'base-basename',  ...E },
];

// ─── TON CANVAS ───────────────────────────────────────────────────────────────

const tonNodes: Node<CanvasNodeData>[] = [
  {
    id: 'ton-l1',
    type: 'card',
    position: { x: 0, y: 0 },
    data: {
      type: 'card',
      title: 'TON',
      subtitle: 'The Open Network',
      content: "Originally designed by Telegram founders. Unique sharded architecture for massive scale.",
      items: ['Telegram-native integration', 'TON Payments (Lightning-like)', 'TON DNS & TON Storage'],
      accentColor: '#0088cc',
      category: 'l1',
      shortOverview: "A Telegram-native blockchain with 900M potential users and a unique infinitely-shardable architecture designed for billions of transactions.",
      deepInsight: `TON was designed by Telegram's founders Nikolai and Pavel Durov as a blockchain for billions of users. After the SEC blocked Telegram's token sale in 2020, the community revived the codebase and launched the chain independently. TON's infinite sharding paradigm allows the chain to split into sub-chains dynamically as load increases — theoretically supporting millions of TPS. The Telegram integration is the defining feature: a built-in wallet, mini-apps, and the ability to send TON as easily as sending a message. This distribution moat has no parallel in crypto.`,
      resources: [
        { label: 'ton.org — Official site', url: 'https://ton.org' },
        { label: 'TON docs', url: 'https://docs.ton.org' },
        { label: 'TON whitepaper', url: 'https://docs.ton.org/ton.pdf' },
      ],
    },
    style: { width: 300 },
  },
  {
    id: 'ton-telegram',
    type: 'card',
    position: { x: -440, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Distribution',
      title: 'Telegram Mini-Apps',
      content: 'TON is deeply integrated with Telegram — mini-apps bring crypto directly into chats.',
      items: ['900M+ potential users', 'Notcoin, Hamster Kombat (100M+ players)', 'In-app TON payments'],
      category: 'gaming',
      shortOverview: "TON's killer feature: mini-apps run inside Telegram, giving crypto access to 900M+ users without app store downloads.",
      deepInsight: `Telegram Mini Apps (TMA) are web apps that run inside Telegram's chat interface — no App Store required. TON wallets are built into Telegram, so users can send TON to friends as easily as a message. The tap-to-earn phenomenon (Notcoin, Hamster Kombat) showed the scale possible: Hamster Kombat had 300M+ registered players and was the largest Telegram mini-app ever. These games rewarded tapping with tokens, but more importantly, they onboarded tens of millions of people to their first crypto wallet. The question is converting game users to DeFi users.`,
      resources: [
        { label: 'TON mini-apps docs', url: 'https://docs.ton.org/develop/dapps/telegram-apps/' },
        { label: 'Telegram TON wallet', url: 'https://ton.org/wallets' },
      ],
    },
    style: { width: 280 },
  },
  {
    id: 'ton-defi',
    type: 'card',
    position: { x: -40, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'DeFi',
      title: 'DeDust / STON.fi',
      content: 'Leading DEXes on TON. Growing DeFi ecosystem driven by Telegram user inflow.',
      items: ['STON.fi AMM (leading DEX)', 'DeDust liquidity pools', 'TON native DEX competition'],
      category: 'defi',
      shortOverview: "TON's DeFi ecosystem is young but growing rapidly — STON.fi and DeDust compete for DEX dominance.",
      deepInsight: `TON's DeFi landscape is still nascent compared to Ethereum or Solana, but growing quickly as Telegram users become curious about the tokens they earned in tap-to-earn games. STON.fi is the most established AMM, supporting major TON token pairs. DeDust uses a more sophisticated pool model with better capital efficiency. The unique challenge of TON DeFi is its account model: unlike EVM, TON uses asynchronous message passing between contracts, making composability (a single transaction touching multiple protocols) more complex to implement.`,
      resources: [
        { label: 'ston.fi — Official site', url: 'https://ston.fi' },
        { label: 'dedust.io — Official site', url: 'https://dedust.io' },
        { label: 'TON DeFi overview', url: 'https://ton.org/defi' },
      ],
    },
    style: { width: 280 },
  },
  {
    id: 'ton-games',
    type: 'card',
    position: { x: 360, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Gaming',
      title: 'Telegram Tap-to-Earn',
      content: 'Tap-to-earn games onboarded 100M+ users to crypto through Telegram.',
      items: ['Notcoin → NOT token (top-10 airdrop)', 'Hamster Kombat → HMSTR', '300M+ combined players'],
      category: 'gaming',
      shortOverview: `Tap-to-earn mini-games on Telegram onboarded 100M+ users to crypto in 2024 — the largest user acquisition event in crypto history.`,
      deepInsight: `The tap-to-earn model is deceptively simple: players tap a virtual coin to earn in-game currency, with the promise of a token airdrop. Notcoin proved the model in early 2024 — 35M players, a top-20 airdrop, and millions of first-time crypto users. Hamster Kombat pushed it further: 300M+ registered accounts (though many are bots), a $500M+ FDV token launch, and Coinbase as an exchange partner. While critics debate the long-term retention rate, tap-to-earn was the most effective mass user acquisition funnel crypto has ever seen.`,
      resources: [
        { label: 'Notcoin — not.com', url: 'https://not.com' },
        { label: 'Hamster Kombat', url: 'https://hamsterkombatgame.io' },
      ],
    },
    style: { width: 280 },
  },
];

const tonEdges: Edge[] = [
  { id: 't-tel', source: 'ton-l1', target: 'ton-telegram', ...E },
  { id: 't-def', source: 'ton-l1', target: 'ton-defi',     ...E },
  { id: 't-gam', source: 'ton-l1', target: 'ton-games',    ...E },
];

// ─── BITCOIN CANVAS ───────────────────────────────────────────────────────────

const btcNodes: Node<CanvasNodeData>[] = [
  {
    id: 'btc-l1',
    type: 'card',
    position: { x: 0, y: 0 },
    data: {
      type: 'card',
      title: 'Bitcoin',
      subtitle: 'Digital Gold',
      content: 'The original blockchain, launched in 2009. Fixed 21M supply, SHA-256 Proof of Work.',
      items: ['21M fixed supply (hard cap)', '~10 minute block times', 'SHA-256 Proof of Work'],
      accentColor: '#f7931a',
      category: 'l1',
      shortOverview: `The original blockchain — a fixed-supply, permissionless digital asset secured by Proof of Work, designed to be digital gold.`,
      deepInsight: `Bitcoin's design is deliberately conservative: 1MB blocks (with SegWit extension to ~4MB equivalent), 10-minute block times, and a scripting language intentionally limited to prevent complex smart contracts. These tradeoffs maximize decentralization and security at the expense of throughput. The 4-year halving cycle (next: 2028) reduces new BTC issuance by 50%, historically driving price cycles as supply shock meets growing demand. Bitcoin is increasingly held by institutional treasuries (MicroStrategy, ETFs) as inflation-resistant savings technology.`,
      resources: [
        { label: 'bitcoin.org — Official site', url: 'https://bitcoin.org' },
        { label: 'Bitcoin whitepaper', url: 'https://bitcoin.org/bitcoin.pdf' },
        { label: 'Bitcoin wiki', url: 'https://en.bitcoin.it/wiki/Main_Page' },
      ],
    },
    style: { width: 300 },
  },
  {
    id: 'btc-lightning',
    type: 'card',
    position: { x: -500, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Layer 2',
      title: 'Lightning Network',
      content: 'Bitcoin payment channels for instant, near-free transactions at scale.',
      items: ['Payment channel network', 'Sub-second settlement', 'Used by Strike, Cash App, River'],
      category: 'l2',
      shortOverview: `A payment channel network on top of Bitcoin enabling instant, near-free micropayments without touching L1 for every transaction.`,
      deepInsight: `Lightning works by opening a payment channel (a 2-of-2 multisig on Bitcoin L1) and routing payments through a network of these channels without touching the blockchain. Only channel opens/closes settle on-chain. This enables millions of transactions per second with sub-cent fees. The network has grown to 60,000+ channels and $500M+ in liquidity. El Salvador uses Lightning for national-scale BTC payments. The main UX challenges: users must manage channel liquidity, and large payments are hard to route. Strike and Cash App have abstracted this entirely for consumers.`,
      resources: [
        { label: 'lightning.network — Official site', url: 'https://lightning.network' },
        { label: 'Lightning whitepaper', url: 'https://lightning.network/lightning-network-paper.pdf' },
        { label: 'Amboss — Lightning explorer', url: 'https://amboss.space' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'btc-ordinals',
    type: 'card',
    position: { x: -160, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'L1 Innovation',
      title: 'Ordinals & Runes',
      content: 'Inscribe data on individual satoshis (NFTs). Runes enable fungible tokens on Bitcoin.',
      items: ['Ordinal inscriptions (Bitcoin NFTs)', 'Runes fungible token protocol', 'BRC-20 experiment'],
      category: 'nft',
      shortOverview: `Ordinals allow inscribing arbitrary data on individual satoshis — enabling NFTs and fungible tokens (Runes) natively on Bitcoin.`,
      deepInsight: `Ordinal Theory, introduced by Casey Rodarmor in 2023, assigns a serial number to each of Bitcoin's 100 trillion satoshis based on the order they were mined. This makes individual sats "unique" and allows arbitrary data to be inscribed in a transaction's witness data (enabled by SegWit + Taproot). Inscriptions became Bitcoin's NFT standard — over 70M inscriptions have been created. BRC-20 (a hack on top of Ordinals) tried to create fungible tokens; Runes was Rodarmor's cleaner protocol for fungible tokens on Bitcoin. These innovations drove Bitcoin L1 fees to 2017-era highs during peak demand.`,
      resources: [
        { label: 'ordinals.com — Official site', url: 'https://ordinals.com' },
        { label: 'Ordinals docs', url: 'https://docs.ordinals.com' },
        { label: 'Runes protocol', url: 'https://docs.ordinals.com/runes.html' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'btc-stacks',
    type: 'card',
    position: { x: 200, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Smart Contracts',
      title: 'Stacks',
      content: 'Bitcoin L2 bringing smart contracts anchored to BTC security via PoX.',
      items: ['Clarity smart contract language', 'Proof of Transfer (PoX)', 'STX token'],
      category: 'l2',
      shortOverview: "A Bitcoin L2 that adds smart contracts and DeFi to Bitcoin, with all blocks settling (via hashes) on Bitcoin's L1.",
      deepInsight: `Stacks uses Proof of Transfer (PoX): Stacks miners send BTC to STX holders (Stackers) to win the right to mine Stacks blocks. Every Stacks block is linked to a Bitcoin block via a hash, giving Stacks transactions Bitcoin-grade finality over time. Clarity is Stacks' smart contract language, designed to be decidable (you can statically analyze what a contract will do — no reentrancy bugs like Solidity). Stacks v3 (Nakamoto upgrade) dramatically improved throughput and enabled sBTC — a 1:1 Bitcoin-backed asset that can be used in Stacks DeFi.`,
      resources: [
        { label: 'stacks.co — Official site', url: 'https://www.stacks.co' },
        { label: 'Stacks docs', url: 'https://docs.stacks.co' },
        { label: 'Clarity language guide', url: 'https://docs.stacks.co/clarity/overview' },
      ],
    },
    style: { width: 260 },
  },
];

const btcEdges: Edge[] = [
  { id: 'b-ln',  source: 'btc-l1', target: 'btc-lightning', ...E },
  { id: 'b-ord', source: 'btc-l1', target: 'btc-ordinals',  ...E },
  { id: 'b-stx', source: 'btc-l1', target: 'btc-stacks',    ...E },
];

// ─── POLYGON CANVAS ───────────────────────────────────────────────────────────

const polygonNodes: Node<CanvasNodeData>[] = [
  {
    id: 'polygon-chain',
    type: 'card',
    position: { x: 0, y: 0 },
    data: {
      type: 'card',
      title: 'Polygon',
      subtitle: 'MATIC → POL',
      content: 'Ethereum scaling ecosystem with PoS sidechain, zkEVM rollup, and AggLayer interop.',
      items: ['2B+ historical transactions', 'POL token (multi-chain staking)', 'AggLayer unifies chains'],
      accentColor: '#8247e5',
      category: 'l2',
      shortOverview: `A leading Ethereum scaling ecosystem — from PoS sidechain to zkEVM rollup, with the AggLayer unifying multi-chain liquidity.`,
      deepInsight: `Polygon started as a Plasma chain, evolved into Polygon PoS (an EVM sidechain), and is pivoting to ZK technology. The AggLayer vision unifies multiple chains into one liquidity layer via ZK proofs. The POL token is designed to stake across multiple Polygon chains simultaneously. Polygon is a top-3 chain for gaming and enterprise use cases due to near-zero fees and deep tooling.`,
      resources: [
        { label: 'polygon.technology — Official site', url: 'https://polygon.technology' },
        { label: 'Polygon docs', url: 'https://docs.polygon.technology' },
      ],
      articleId: 'polygon-chain',
    },
    style: { width: 300 },
  },
  {
    id: 'polygon-pos',
    type: 'card',
    position: { x: -680, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Layer 2',
      title: 'Polygon PoS',
      content: 'EVM sidechain with 2B+ transactions. Proof of Stake with 100+ validators.',
      items: ['2B+ historical txns', '~2s block times', 'Low fees (~0.001 MATIC)'],
      category: 'l2',
      shortOverview: `Polygon PoS is an EVM-compatible sidechain with 100+ validators, 2B+ transactions, and near-zero fees.`,
      deepInsight: `Polygon PoS is a commit chain: validators checkpoint Polygon blocks to Ethereum regularly, giving periodic Ethereum-grade finality. It's not a true rollup (funds aren't protected by L1 fraud proofs), but the checkpoint mechanism provides periodic settlement. With 2B+ transactions and hundreds of dApps, it remains one of the most-used EVM chains. The transition from MATIC to POL token enables multi-chain validator staking across all Polygon chains.`,
      resources: [
        { label: 'Polygon PoS docs', url: 'https://docs.polygon.technology/pos/' },
      ],
      articleId: 'polygon-pos',
    },
    style: { width: 260 },
  },
  {
    id: 'polygon-zkevm',
    type: 'card',
    position: { x: -320, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'ZK Rollup',
      title: 'Polygon zkEVM',
      content: 'Type 2 ZK rollup with full EVM equivalence. Validity proofs for fast finality.',
      items: ['Type 2 zkEVM (EVM equivalent)', 'ZK validity proofs', 'Fast L1 finality'],
      category: 'zk',
      shortOverview: `A ZK rollup with full EVM equivalence — existing Solidity contracts deploy unchanged, with cryptographic validity proofs for fast finality.`,
      deepInsight: `Polygon zkEVM targets Type 2 EVM equivalence: it runs the same EVM opcodes as Ethereum, so contracts deploy without modification. ZK validity proofs allow withdrawals in minutes (vs 7 days for optimistic rollups). The prover generates SNARK proofs for batches of transactions, which are verified on Ethereum L1. As part of the AggLayer, zkEVM will share liquidity and messaging with all other Polygon chains.`,
      resources: [
        { label: 'Polygon zkEVM docs', url: 'https://docs.polygon.technology/zkEVM/' },
      ],
      articleId: 'polygon-zkevm',
    },
    style: { width: 260 },
  },
  {
    id: 'polygon-agglayer',
    type: 'card',
    position: { x: 80, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Interoperability',
      title: 'AggLayer',
      content: 'Aggregation layer unifying liquidity across all Polygon chains via ZK proofs.',
      items: ['Unified liquidity across chains', 'ZK validity proof aggregation', 'Near-instant cross-chain txns'],
      category: 'bridge',
      shortOverview: `The AggLayer aggregates ZK proofs from multiple chains into a single verification on Ethereum, unifying liquidity across the Polygon ecosystem.`,
      deepInsight: `The AggLayer is Polygon's answer to the fragmented multi-chain world: instead of each chain having separate bridges and liquidity pools, AggLayer proves all chains' state validity together and presents them to Ethereum as a unified system. Users can swap assets across AggLayer chains in a single atomic transaction, with no separate bridge steps. Third-party chains (not just Polygon chains) can plug into AggLayer.`,
      resources: [
        { label: 'AggLayer overview', url: 'https://polygon.technology/agglayer' },
      ],
      articleId: 'polygon-agglayer',
    },
    style: { width: 260 },
  },
  {
    id: 'polygon-id',
    type: 'card',
    position: { x: 440, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Identity',
      title: 'Polygon ID',
      content: 'ZK-based self-sovereign identity. Prove claims without revealing personal data.',
      items: ['ZK identity proofs', 'Verifiable credentials', 'Privacy-preserving KYC'],
      category: 'wallet',
      shortOverview: `A ZK-based identity system — prove credentials (age, KYC, membership) without revealing underlying personal data.`,
      deepInsight: `Polygon ID uses ZK proofs to enable privacy-preserving identity verification: a user can prove "I am over 18" or "I passed KYC" without revealing their actual age or identity documents. The system uses W3C Verifiable Credentials as the credential format, making it interoperable with existing identity standards. Polygon ID is built on the Iden3 protocol and uses Groth16 ZK-SNARKs for efficient on-chain proof verification.`,
      resources: [
        { label: 'Polygon ID docs', url: 'https://docs.polygon.technology/id/' },
      ],
      articleId: 'polygon-id',
    },
    style: { width: 260 },
  },
  {
    id: 'polygon-quickswap',
    type: 'card',
    position: { x: -680, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · DEX',
      title: 'QuickSwap',
      content: "Polygon's leading AMM DEX. Deep liquidity with QUICK token governance.",
      items: ['QUICK governance token', 'Dragon\'s Lair staking', 'Concentrated liquidity (v3)'],
      category: 'dex',
      shortOverview: `The dominant DEX on Polygon PoS — an Uniswap-style AMM with QUICK token governance and concentrated liquidity pools.`,
      deepInsight: `QuickSwap launched as a Uniswap v2 fork when Polygon PoS gained traction in 2021, quickly capturing the majority of Polygon DeFi volume due to its first-mover advantage. The Dragon's Lair staking mechanism lets QUICK holders earn protocol fees. V3 brought concentrated liquidity for more capital-efficient market making. QuickSwap also deployed on Polygon zkEVM, making it the go-to DEX across the Polygon ecosystem.`,
      resources: [
        { label: 'quickswap.exchange — Official site', url: 'https://quickswap.exchange' },
      ],
      articleId: 'polygon-quickswap',
    },
    style: { width: 260 },
  },
  {
    id: 'polygon-aave',
    type: 'card',
    position: { x: -320, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · Lending',
      title: 'Aave on Polygon',
      content: 'Aave deployed on Polygon PoS with $500M+ TVL. Low-fee lending and borrowing.',
      items: ['$500M+ TVL on Polygon', 'Same assets as Ethereum Aave', 'Low-cost flash loans'],
      category: 'lending',
      shortOverview: `Aave's Polygon deployment brings the leading lending protocol to Polygon PoS with low fees and fast transactions.`,
      deepInsight: `Aave V3 on Polygon was one of the most-used DeFi deployments outside Ethereum mainnet, benefiting from Polygon's near-zero fees making small borrowing positions economical. The Portal feature allows cross-chain asset movement between Aave deployments. GHO stablecoin can be minted on Polygon, making it accessible without high Ethereum gas. Aave Polygon has historically been one of the top 3 DeFi protocols on the chain by TVL.`,
      resources: [
        { label: 'Aave on Polygon', url: 'https://app.aave.com/?market=proto_polygon_v3' },
      ],
      articleId: 'polygon-aave',
    },
    style: { width: 260 },
  },
  {
    id: 'polygon-gaming',
    type: 'card',
    position: { x: 80, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Gaming',
      title: 'Gaming / Immutable',
      content: 'Polygon powers top blockchain games. Immutable X (StarkEx) built on Polygon ecosystem.',
      items: ['Immutable X — NFT gaming', 'Decentraland, Sandbox', 'Enterprise gaming partnerships'],
      category: 'gaming',
      shortOverview: `Polygon is the #1 blockchain for gaming — powering Immutable X, Decentraland, The Sandbox, and hundreds of enterprise game integrations.`,
      deepInsight: `Polygon became the de facto gaming blockchain due to low fees, EVM compatibility, and aggressive ecosystem building. Immutable X (using StarkEx ZK rollup) pioneered gasless NFT gaming on Polygon. The Sandbox and Decentraland (metaverse games) both use Polygon for land/asset NFTs. Polygon's enterprise team landed deals with Starbucks Odyssey (loyalty NFTs), Reddit (avatar NFTs), and numerous AAA game studios exploring web3 integration.`,
      resources: [
        { label: 'Polygon gaming ecosystem', url: 'https://polygon.technology/gaming' },
        { label: 'Immutable X', url: 'https://www.immutable.com' },
      ],
      articleId: 'polygon-gaming',
    },
    style: { width: 260 },
  },
];

const polygonEdges: Edge[] = [
  { id: 'pg-pos',    source: 'polygon-chain',   target: 'polygon-pos',      ...E },
  { id: 'pg-zkevm',  source: 'polygon-chain',   target: 'polygon-zkevm',    ...E },
  { id: 'pg-agg',    source: 'polygon-chain',   target: 'polygon-agglayer', ...E },
  { id: 'pg-id',     source: 'polygon-chain',   target: 'polygon-id',       ...E },
  { id: 'pg-agg-zk', source: 'polygon-agglayer',target: 'polygon-zkevm',    ...E },
  { id: 'pg-qs',     source: 'polygon-pos',     target: 'polygon-quickswap',...E },
  { id: 'pg-av',     source: 'polygon-pos',     target: 'polygon-aave',     ...E },
  { id: 'pg-gm',     source: 'polygon-pos',     target: 'polygon-gaming',   ...E },
];

// ─── AVALANCHE CANVAS ─────────────────────────────────────────────────────────

const avaxNodes: Node<CanvasNodeData>[] = [
  {
    id: 'avax-l1',
    type: 'card',
    position: { x: 0, y: 0 },
    data: {
      type: 'card',
      title: 'Avalanche',
      subtitle: 'AVAX',
      content: 'Multi-chain L1 with sub-second finality. X-Chain, P-Chain, C-Chain architecture.',
      items: ['3-chain architecture', 'Subnets / L1s appchains', 'Sub-second finality'],
      accentColor: '#e84142',
      category: 'l1',
      shortOverview: `A high-performance L1 with a unique 3-chain architecture and subnet model — each subnet is a custom blockchain sharing Avalanche consensus.`,
      deepInsight: `Avalanche uses three specialized chains: X-Chain for asset transfers (DAG-based), P-Chain for validator coordination and subnet management, and C-Chain for EVM execution. Subnets (renamed "Avalanche L1s") allow anyone to deploy a custom chain with their own rules, tokenomics, and validator set — similar to Cosmos appchains but secured by Avalanche consensus. The Avalanche Warp protocol enables native cross-subnet messaging without external bridges.`,
      resources: [
        { label: 'avax.network — Official site', url: 'https://avax.network' },
        { label: 'Avalanche docs', url: 'https://docs.avax.network' },
      ],
      articleId: 'avax-l1',
    },
    style: { width: 300 },
  },
  {
    id: 'avax-cchain',
    type: 'card',
    position: { x: -540, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'EVM Layer',
      title: 'C-Chain (EVM)',
      content: 'The EVM-compatible chain in Avalanche. Where DeFi, NFTs, and smart contracts live.',
      items: ['Full EVM compatibility', 'Sub-second finality', 'Low fees vs Ethereum'],
      category: 'l1',
      shortOverview: `The C-Chain is Avalanche's EVM execution layer — fully compatible with Ethereum tooling, with sub-second finality and low fees.`,
      deepInsight: `The C-Chain (Contract Chain) uses Snowman consensus (a linearized version of Avalanche consensus) for EVM execution. It has the same Ethereum API surface, so MetaMask, Hardhat, and all EVM tooling works natively. Sub-second finality (vs ~13 seconds on Ethereum) makes it well-suited for trading applications. Most AVAX DeFi (Trader Joe, Aave, GMX) runs on C-Chain. The Subnet model allows new chains to inherit C-Chain's security while customizing execution rules.`,
      resources: [
        { label: 'C-Chain docs', url: 'https://docs.avax.network/learn/primary-network' },
      ],
      articleId: 'avax-cchain',
    },
    style: { width: 260 },
  },
  {
    id: 'avax-subnets',
    type: 'card',
    position: { x: -120, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Architecture',
      title: 'Subnets / L1s',
      content: 'Custom appchains on Avalanche. Each subnet has its own rules, validators, and tokenomics.',
      items: ['Custom gas tokens', 'Permissioned or public validators', 'Shared security from AVAX validators'],
      category: 'infra',
      shortOverview: `Avalanche Subnets are custom blockchains with their own rules and tokenomics — each subnet is an "Avalanche L1" sharing consensus infrastructure.`,
      deepInsight: `Subnets let enterprises and games launch chains without bootstrapping a new validator set. Subnet validators must also stake AVAX and validate the Primary Network — this ties custom chain security to AVAX's economic security. Notable subnets include DFK Chain (DeFi Kingdoms gaming), Dexalot (perps DEX), and Lamina1 (metaverse). The 2024 upgrade renamed subnets to "Avalanche L1s" to clarify their position as first-class chains.`,
      resources: [
        { label: 'Subnet overview', url: 'https://docs.avax.network/subnets' },
        { label: 'Subnet explorer', url: 'https://subnets.avax.network' },
      ],
      articleId: 'avax-subnets',
    },
    style: { width: 260 },
  },
  {
    id: 'avax-teleporter',
    type: 'card',
    position: { x: 300, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Interoperability',
      title: 'Avalanche Warp',
      content: 'Native cross-subnet messaging protocol. Send assets and messages between Avalanche L1s.',
      items: ['Native cross-chain messaging', 'No external bridge required', 'BLS signature aggregation'],
      category: 'bridge',
      shortOverview: `Avalanche Warp Messaging enables native cross-subnet communication — subnets can send assets and arbitrary messages to each other without external bridges.`,
      deepInsight: `Avalanche Warp uses BLS multi-signatures from subnet validators to authenticate cross-chain messages. When enough validators sign a message, it can be verified on the destination chain by checking the aggregate signature against the known validator set. This is a native, trust-minimized messaging layer with no external oracle or relayer risk. Teleporter is the higher-level protocol built on Warp for easy cross-chain dApp development.`,
      resources: [
        { label: 'Avalanche Warp docs', url: 'https://docs.avax.network/build/cross-chain/awm/overview' },
      ],
      articleId: 'avax-teleporter',
    },
    style: { width: 260 },
  },
  {
    id: 'avax-traderjoe',
    type: 'card',
    position: { x: -540, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · DEX',
      title: 'Trader Joe',
      content: "Avalanche's leading DEX. Liquidity Book AMM with concentrated ranges and zero-slippage bins.",
      items: ['Liquidity Book AMM', 'JOE token governance', 'Multi-chain (AVAX, Arbitrum, BNB)'],
      category: 'dex',
      shortOverview: `The leading DEX on Avalanche — Trader Joe's Liquidity Book AMM uses discrete bins for zero-slippage trading within each price range.`,
      deepInsight: `Trader Joe innovated with the Liquidity Book (LB) AMM: instead of continuous curves, liquidity is organized into discrete price bins. Within each bin, the price is constant (zero slippage for trades that don't cross a bin boundary). LPs earn fees proportional to volume in their active bins. This is more capital-efficient than Uniswap V3 for many pairs. Trader Joe has expanded to Arbitrum and BNB Chain, making JOE a multi-chain DEX token.`,
      resources: [
        { label: 'traderjoexyz.com — Official site', url: 'https://traderjoexyz.com' },
        { label: 'Trader Joe docs', url: 'https://docs.traderjoexyz.com' },
      ],
      articleId: 'avax-traderjoe',
    },
    style: { width: 260 },
  },
  {
    id: 'avax-aave',
    type: 'card',
    position: { x: -120, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · Lending',
      title: 'Aave on Avalanche',
      content: 'Aave V3 on Avalanche C-Chain. $300M+ TVL with efficient cross-chain lending.',
      items: ['$300M+ TVL', 'V3 efficiency mode', 'AVAX and USDC markets'],
      category: 'lending',
      shortOverview: `Aave V3 on Avalanche brings the leading lending protocol with sub-second finality, enabling fast liquidations and efficient collateral management.`,
      deepInsight: `Aave's deployment on Avalanche benefits from sub-second finality — liquidations can happen faster than on Ethereum, reducing bad debt risk. Efficiency Mode (E-Mode) allows up to 97% LTV for correlated assets (e.g., USDC/USDT pairs), making capital much more efficient. The V3 Portal enables cross-chain liquidity between Aave deployments. Avalanche's large institutional user base makes AVAX one of the highest-TVL non-Ethereum Aave deployments.`,
      resources: [
        { label: 'Aave on Avalanche', url: 'https://app.aave.com/?market=proto_avalanche_v3' },
      ],
      articleId: 'avax-aave',
    },
    style: { width: 260 },
  },
  {
    id: 'avax-gmx',
    type: 'card',
    position: { x: 300, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · Derivatives',
      title: 'GMX',
      content: 'Leading perpetuals DEX on Avalanche and Arbitrum. GLP liquidity pool model.',
      items: ['GLP liquidity providers earn fees', 'Zero price impact trades', 'GMX + Arbitrum + AVAX'],
      category: 'derivatives',
      shortOverview: `The leading on-chain perpetuals DEX — GMX lets traders open leveraged positions against a multi-asset liquidity pool (GLP) rather than order books.`,
      deepInsight: `GMX's model is unique: instead of a traditional order book, trades are executed against the GLP pool (a basket of BTC, ETH, AVAX, stablecoins). GLP holders act as the counterparty to all traders — they earn 70% of trading fees but lose when traders profit. This creates a sustainable fee model (no token inflation). GMX V2 introduced isolated markets and Chainlink low-latency oracles for better price execution. GMX runs on both Avalanche and Arbitrum, with Arbitrum having higher volume.`,
      resources: [
        { label: 'gmx.io — Official site', url: 'https://gmx.io' },
        { label: 'GMX docs', url: 'https://docs.gmx.io' },
      ],
      articleId: 'avax-gmx',
    },
    style: { width: 260 },
  },
];

const avaxEdges: Edge[] = [
  { id: 'av-cc',   source: 'avax-l1',      target: 'avax-cchain',    ...E },
  { id: 'av-sub',  source: 'avax-l1',      target: 'avax-subnets',   ...E },
  { id: 'av-tel',  source: 'avax-l1',      target: 'avax-teleporter',...E },
  { id: 'av-sub-tel', source: 'avax-subnets', target: 'avax-teleporter', ...E },
  { id: 'av-joe',  source: 'avax-cchain',  target: 'avax-traderjoe', ...E },
  { id: 'av-av',   source: 'avax-cchain',  target: 'avax-aave',      ...E },
  { id: 'av-gmx',  source: 'avax-cchain',  target: 'avax-gmx',       ...E },
];

// ─── SUI / APTOS CANVAS ───────────────────────────────────────────────────────

const suiNodes: Node<CanvasNodeData>[] = [
  {
    id: 'sui-l1',
    type: 'card',
    position: { x: -340, y: 0 },
    data: {
      type: 'card',
      title: 'Sui',
      subtitle: 'Object-centric L1',
      content: 'Object model + parallel execution. Built by ex-Meta Diem engineers using Move.',
      items: ['Object-centric state model', '~300k TPS potential', 'Move language'],
      accentColor: '#4da2ff',
      category: 'l1',
      shortOverview: `An object-centric L1 from ex-Meta Diem engineers — Move language, parallel execution of independent transactions, and 300k TPS potential.`,
      deepInsight: `Sui's object model treats all on-chain state as "objects" with explicit ownership. Transactions that only touch non-overlapping objects can be processed in parallel without consensus, enabling massive throughput for gaming and DeFi. The Move language prevents asset duplication and accidental destruction. Sui's zkLogin feature lets users create wallets via OAuth (Google, Apple) — dramatically lowering the onboarding barrier. SUI token is used for gas and governance.`,
      resources: [
        { label: 'sui.io — Official site', url: 'https://sui.io' },
        { label: 'Sui docs', url: 'https://docs.sui.io' },
        { label: 'Sui Move by Example', url: 'https://examples.sui.io' },
      ],
      articleId: 'sui-l1',
    },
    style: { width: 280 },
  },
  {
    id: 'aptos-l1',
    type: 'card',
    position: { x: 340, y: 0 },
    data: {
      type: 'card',
      title: 'Aptos',
      subtitle: 'Block-STM L1',
      content: 'Parallel EVM-like execution via Block-STM. Also built by ex-Diem engineers.',
      items: ['Block-STM parallel execution', 'Move language', '160k TPS benchmark'],
      accentColor: '#00b4d8',
      category: 'l1',
      shortOverview: `An L1 from ex-Meta Diem engineers using Block-STM for parallel execution — high throughput with a developer-friendly account model.`,
      deepInsight: `Aptos uses Block-STM (Software Transactional Memory) for parallel execution: transactions are run optimistically in parallel, with conflicts detected and re-executed. Unlike Sui's object model, Aptos maintains a traditional account-based model — familiar to Ethereum developers but with Move's safety guarantees. Aptos has partnered with major enterprises (Microsoft, Google, Alibaba) for distribution. The APT airdrop in 2022 was notable for going to early Aptos testnet users.`,
      resources: [
        { label: 'aptos.dev — Official site', url: 'https://aptos.dev' },
        { label: 'Aptos docs', url: 'https://aptos.dev/en/build/get-started' },
      ],
      articleId: 'aptos-l1',
    },
    style: { width: 280 },
  },
  {
    id: 'sui-move',
    type: 'card',
    position: { x: 0, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Core Technology',
      title: 'Move Language',
      content: 'Resource-oriented language designed for safe asset management. No reentrancy, no accidental burns.',
      items: ['Resources can\'t be copied or lost', 'Linear type system', 'Formal verification friendly'],
      category: 'infra',
      shortOverview: `Move is a resource-oriented smart contract language where assets are first-class citizens — they can't be duplicated, accidentally destroyed, or stolen by reentrancy.`,
      deepInsight: `Move was designed at Meta's Diem project to solve smart contract safety. The core insight: digital assets should behave like physical assets — they can only be in one place at a time, can't be copied, and can only be destroyed intentionally. Move's type system enforces these properties at compile time. This eliminates entire categories of vulnerabilities: reentrancy, integer overflow, unauthorized asset access. Sui uses a customized version (Sui Move) with the object model; Aptos uses a version closer to the original Diem Move.`,
      resources: [
        { label: 'Move language book', url: 'https://move-language.github.io/move/' },
      ],
      articleId: 'sui-move',
    },
    style: { width: 280 },
  },
  {
    id: 'sui-cetus',
    type: 'card',
    position: { x: -680, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · DEX',
      title: 'Cetus',
      content: "Leading CLMM DEX on Sui. Concentrated liquidity with deep SUI/token pairs.",
      items: ['CLMM concentrated liquidity', 'CETUS token', 'Sui\'s highest-volume DEX'],
      category: 'dex',
      shortOverview: `The leading DEX on Sui — a concentrated liquidity AMM (CLMM) with deep liquidity for SUI pairs.`,
      deepInsight: `Cetus is the primary liquidity venue on Sui, implementing concentrated liquidity (CLMM) similar to Uniswap V3 but in Move. LPs can provide liquidity in specific price ranges, dramatically increasing capital efficiency vs traditional AMMs. Cetus has also deployed on Aptos, making it a cross-chain Move DEX. The CETUS token is used for governance and protocol fee sharing. Cetus serves as the backend liquidity layer for many other Sui DeFi protocols.`,
      resources: [
        { label: 'cetus.zone — Official site', url: 'https://www.cetus.zone' },
      ],
      articleId: 'sui-cetus',
    },
    style: { width: 260 },
  },
  {
    id: 'sui-navi',
    type: 'card',
    position: { x: -340, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · Lending',
      title: 'Navi Protocol',
      content: 'Leading lending and borrowing protocol on Sui. Supply assets to earn yield.',
      items: ['Multi-asset lending', 'NAVX token', 'Isolated and cross-collateral modes'],
      category: 'lending',
      shortOverview: `The leading lending protocol on Sui — supply assets to earn interest or borrow against collateral, with NAVX governance.`,
      deepInsight: `Navi Protocol is Sui's answer to Aave — a permissionless lending market for supply/borrow of Sui ecosystem assets. It supports isolated collateral mode (single-asset borrowing) and cross-collateral mode (borrow against a basket). Navi pioneered lending on Sui and has the highest TVL of any Sui lending protocol. The protocol integrates with Cetus for liquidation mechanics — undercollateralized positions are liquidated via the DEX.`,
      resources: [
        { label: 'naviprotocol.io — Official site', url: 'https://www.naviprotocol.io' },
      ],
      articleId: 'sui-navi',
    },
    style: { width: 260 },
  },
  {
    id: 'sui-scallop',
    type: 'card',
    position: { x: 20, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · Lending',
      title: 'Scallop',
      content: 'Institutional-grade lending protocol on Sui. Focus on safety and composability.',
      items: ['SCA token governance', 'Isolated pools per asset', 'Whitelist-based risk management'],
      category: 'lending',
      shortOverview: `An institutional-grade lending protocol on Sui with isolated pools per asset and conservative risk parameters.`,
      deepInsight: `Scallop differentiates from Navi by targeting institutional users with stricter risk parameters. Each asset has its own isolated lending pool, preventing systemic risk from a single bad collateral. The whitelist approach for new assets (community governance approves each addition) reflects a more conservative philosophy. Scallop also has a "borrow incentive" program that rewards borrowers with SCA tokens, bootstrapping liquidity.`,
      resources: [
        { label: 'scallop.io — Official site', url: 'https://scallop.io' },
      ],
      articleId: 'sui-scallop',
    },
    style: { width: 260 },
  },
  {
    id: 'aptos-liquidswap',
    type: 'card',
    position: { x: 360, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · DEX',
      title: 'Liquidswap',
      content: "Aptos' leading AMM DEX by Pontem Network. Stable and unstable pool types.",
      items: ['Stable pools (low slippage)', 'Uncorrelated AMM pools', 'PONT token'],
      category: 'dex',
      shortOverview: `The leading DEX on Aptos by Pontem Network — supports both stable (low-slippage) and uncorrelated pool types in Move.`,
      deepInsight: `Liquidswap was one of the first DEXes on Aptos and remains a top liquidity venue. It supports two pool types: stable pools (optimized for correlated assets like stablecoin pairs) and uncorrelated pools (standard x*y=k AMM). Pontem Network, the team behind Liquidswap, also built the Move language tooling for developers. As Aptos DeFi matures, Liquidswap faces competition from Panora (aggregator) and Thala Finance.`,
      resources: [
        { label: 'liquidswap.com — Official site', url: 'https://liquidswap.com' },
      ],
      articleId: 'aptos-liquidswap',
    },
    style: { width: 260 },
  },
  {
    id: 'aptos-thala',
    type: 'card',
    position: { x: 700, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · DEX',
      title: 'Thala Finance',
      content: 'Aptos DeFi hub: DEX + stablecoin (MOD) + liquid staking in one protocol.',
      items: ['MOD CDP stablecoin', 'ThalaSwap AMM', 'THL governance token'],
      category: 'dex',
      shortOverview: `Aptos' DeFi protocol hub — combining a CDP stablecoin (MOD), an AMM DEX (ThalaSwap), and liquid staking in one integrated protocol.`,
      deepInsight: `Thala is the most ambitious DeFi protocol on Aptos, combining three core primitives: ThalaSwap (AMM DEX with weighted and stable pools), MOD (a CDP stablecoin backed by Aptos-native collateral, similar to DAI), and Thala LSD (liquid staking for APT). The integrated design creates flywheels: MOD can be minted and used as LP liquidity in ThalaSwap, which generates fees that back MOD. THL token holders govern all three components and earn protocol revenue.`,
      resources: [
        { label: 'thala.fi — Official site', url: 'https://www.thala.fi' },
      ],
      articleId: 'aptos-thala',
    },
    style: { width: 260 },
  },
];

const suiEdges: Edge[] = [
  { id: 'su-mov',  source: 'sui-l1',   target: 'sui-move',          ...E },
  { id: 'ap-mov',  source: 'aptos-l1', target: 'sui-move',          ...E },
  { id: 'su-cet',  source: 'sui-l1',   target: 'sui-cetus',         ...E },
  { id: 'su-nav',  source: 'sui-l1',   target: 'sui-navi',          ...E },
  { id: 'su-sca',  source: 'sui-l1',   target: 'sui-scallop',       ...E },
  { id: 'ap-liq',  source: 'aptos-l1', target: 'aptos-liquidswap',  ...E },
  { id: 'ap-tha',  source: 'aptos-l1', target: 'aptos-thala',       ...E },
  { id: 'su-nav-cet', source: 'sui-navi', target: 'sui-cetus',      ...E },
];

// ─── BNB CANVAS ───────────────────────────────────────────────────────────────

const bnbNodes: Node<CanvasNodeData>[] = [
  {
    id: 'bnb-chain',
    type: 'card',
    position: { x: 0, y: 0 },
    data: {
      type: 'card',
      title: 'BNB Chain',
      subtitle: 'BNB',
      content: "Binance's EVM chain with 100M+ active addresses. Highest retail DeFi user count.",
      items: ['21 validators (PoSA)', 'Near-zero fees', '$2B+ TVL'],
      accentColor: '#f3ba2f',
      category: 'l1',
      shortOverview: "Binance's EVM chain — highest user count in crypto with near-zero fees, home to PancakeSwap and a thriving retail DeFi ecosystem.",
      deepInsight: `BNB Chain (BSC) launched in 2020 as Binance's response to Ethereum's high gas fees. It uses Proof of Staked Authority (PoSA) with 21 validators for fast, cheap transactions. The centralization tradeoff is explicit but accepted by its user base — near-zero fees and fast transactions matter more than decentralization for retail DeFi. BNB token earns Binance exchange revenue and is used for fee discounts. opBNB (Optimism-based L2) adds another scaling layer.`,
      resources: [
        { label: 'bnbchain.org — Official site', url: 'https://bnbchain.org' },
        { label: 'BNB Chain docs', url: 'https://docs.bnbchain.org' },
      ],
      articleId: 'bnb-chain',
    },
    style: { width: 300 },
  },
  {
    id: 'bnb-opbnb',
    type: 'card',
    position: { x: -540, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Layer 2',
      title: 'opBNB',
      content: 'Optimism-based L2 on BNB Chain. Ultra-low fees for gaming and social apps.',
      items: ['OP Stack based', '<$0.001 gas fees', 'Gaming and high-frequency use cases'],
      category: 'l2',
      shortOverview: `An Optimism-based L2 on BNB Chain offering ultra-low fees for high-frequency applications like gaming and social.`,
      deepInsight: `opBNB uses the OP Stack to scale BNB Chain further — transactions settle to BNB Chain (not Ethereum), making fees even lower than other OP Stack chains. This makes opBNB optimized for gaming (many small transactions), social apps, and micro-transactions. opBNB's position in the BNB ecosystem mirrors Base's position in the Ethereum/Coinbase ecosystem — a first-party L2 with the parent chain's full support and user distribution.`,
      resources: [
        { label: 'opbnb.bnbchain.org — Official site', url: 'https://opbnb.bnbchain.org' },
      ],
      articleId: 'bnb-opbnb',
    },
    style: { width: 260 },
  },
  {
    id: 'bnb-greenfield',
    type: 'card',
    position: { x: -120, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Infrastructure',
      title: 'BNB Greenfield',
      content: 'Decentralized storage network tightly integrated with BNB Chain smart contracts.',
      items: ['On-chain storage permissions', 'BNB Chain integration', 'Programmable storage'],
      category: 'infra',
      shortOverview: `BNB Greenfield is a decentralized storage blockchain that integrates with BNB Chain — storage permissions and access control are managed by smart contracts.`,
      deepInsight: `Greenfield is BNB Chain's answer to Filecoin/Arweave — decentralized storage where data is stored by validators. The key innovation is its programmable storage: smart contracts on BNB Chain can own Greenfield storage buckets, set access policies, and monetize data access. This enables use cases like decentralized content platforms, data marketplaces, and on-chain-governed storage. BNB is used to pay Greenfield storage fees, creating new utility for the token.`,
      resources: [
        { label: 'BNB Greenfield docs', url: 'https://docs.bnbchain.org/bnb-greenfield/' },
      ],
      articleId: 'bnb-greenfield',
    },
    style: { width: 260 },
  },
  {
    id: 'bnb-bscscan',
    type: 'card',
    position: { x: 300, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Infrastructure',
      title: 'BSCScan / Dev Tools',
      content: 'Block explorer and developer tooling for BNB Chain. Essential infrastructure.',
      items: ['BSCScan block explorer', 'Full Hardhat/Foundry support', 'Chainlink oracle feeds on BNB'],
      category: 'infra',
      shortOverview: `BSCScan and the BNB Chain developer tooling ecosystem — block explorer, analytics, and full EVM toolchain compatibility.`,
      deepInsight: `BSCScan (by the same team as Etherscan) provides the standard block explorer, token tracking, and smart contract verification for BNB Chain. BNB Chain's EVM compatibility means the entire Ethereum toolchain works: Hardhat, Foundry, OpenZeppelin contracts, Chainlink price feeds, and The Graph subgraphs. This made it easy for Ethereum developers to deploy on BNB Chain with minimal modifications, driving rapid ecosystem growth.`,
      resources: [
        { label: 'bscscan.com — BNB explorer', url: 'https://bscscan.com' },
        { label: 'BNB Chain developer portal', url: 'https://www.bnbchain.org/en/dev' },
      ],
      articleId: 'bnb-bscscan',
    },
    style: { width: 260 },
  },
  {
    id: 'bnb-pancakeswap',
    type: 'card',
    position: { x: -540, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · DEX',
      title: 'PancakeSwap',
      content: 'BNB Chain\'s dominant DEX. $1B+ TVL, multi-chain expansion, CAKE token.',
      items: ['CAKE token with veCAKE', '$1B+ TVL', 'Multi-chain (BSC, Base, Arbitrum, Aptos)'],
      category: 'dex',
      shortOverview: `The dominant DEX on BNB Chain — a comprehensive DeFi hub with AMM, perps, NFTs, and CAKE governance, now multi-chain.`,
      deepInsight: `PancakeSwap is the Uniswap of BNB Chain — it captured the majority of retail DeFi volume due to BNB Chain's low fees. The CAKE tokenomics have evolved from inflationary emissions to veCAKE (vote-escrow, similar to Curve's veCRV), letting lockers direct emissions to specific pools. PancakeSwap has expanded to Base, Arbitrum, zkSync, and Aptos, becoming one of the few DEXes to achieve genuine multi-chain presence. The platform also offers perpetual futures and an NFT marketplace.`,
      resources: [
        { label: 'pancakeswap.finance — Official site', url: 'https://pancakeswap.finance' },
        { label: 'PancakeSwap docs', url: 'https://docs.pancakeswap.finance' },
      ],
      articleId: 'bnb-pancakeswap',
    },
    style: { width: 260 },
  },
  {
    id: 'bnb-venus',
    type: 'card',
    position: { x: -120, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi · Lending',
      title: 'Venus Protocol',
      content: "BNB Chain's largest lending protocol. Supply, borrow, and mint VAI stablecoin.",
      items: ['XVS governance token', 'VAI stablecoin', '$1B+ TVL'],
      category: 'lending',
      shortOverview: `The leading lending protocol on BNB Chain — supply assets, borrow against collateral, and mint VAI stablecoin, with XVS governance.`,
      deepInsight: `Venus was the first major lending protocol on BNB Chain, modeled after Compound with additions. It mints VAI — an algorithmic stablecoin backed by crypto collateral, similar to MakerDAO's DAI. The XVS token governs risk parameters for each market and earns protocol fees. Venus has weathered multiple crises including a $150M oracle manipulation attack in 2021, which led to significant risk parameter improvements. V4 introduced isolated pools, preventing systemic risk from a single bad asset.`,
      resources: [
        { label: 'venus.io — Official site', url: 'https://venus.io' },
        { label: 'Venus docs', url: 'https://docs.venus.io' },
      ],
      articleId: 'bnb-venus',
    },
    style: { width: 260 },
  },
  {
    id: 'bnb-four',
    type: 'card',
    position: { x: 300, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Meme · Launchpad',
      title: 'Four.meme',
      content: 'BNB Chain\'s answer to pump.fun. Bonding curve token launches on BSC.',
      items: ['Bonding curve mechanism', 'Graduates to PancakeSwap', 'BNB-native memecoins'],
      category: 'launchpad',
      shortOverview: `BNB Chain's pump.fun equivalent — bonding curve token launches that graduate to PancakeSwap once they reach a market cap threshold.`,
      deepInsight: `Four.meme replicated pump.fun's bonding curve model on BNB Chain: users pay a small fee to create a token, which trades on a bonding curve until it reaches a market cap threshold, then graduates to PancakeSwap with seeded liquidity. The low fees on BNB Chain make this even cheaper than Solana. Four.meme drove a wave of BNB Chain meme activity in 2024, briefly making BSC competitive with Solana for memecoin culture. The name references the token address format (starting with "four").`,
      resources: [
        { label: 'four.meme — Official site', url: 'https://four.meme' },
      ],
      articleId: 'bnb-four',
    },
    style: { width: 260 },
  },
];

const bnbEdges: Edge[] = [
  { id: 'bn-opb',  source: 'bnb-chain', target: 'bnb-opbnb',       ...E },
  { id: 'bn-gr',   source: 'bnb-chain', target: 'bnb-greenfield',   ...E },
  { id: 'bn-dev',  source: 'bnb-chain', target: 'bnb-bscscan',      ...E },
  { id: 'bn-cake', source: 'bnb-chain', target: 'bnb-pancakeswap',  ...E },
  { id: 'bn-ven',  source: 'bnb-chain', target: 'bnb-venus',        ...E },
  { id: 'bn-four', source: 'bnb-chain', target: 'bnb-four',         ...E },
  { id: 'bn-cake-four', source: 'bnb-pancakeswap', target: 'bnb-four', ...E },
];

// ─── MEGAETH CANVAS ───────────────────────────────────────────────────────────

const megaethNodes: Node<CanvasNodeData>[] = [
  {
    id: 'megaeth-l1',
    type: 'card',
    position: { x: 0, y: 0 },
    data: {
      type: 'card',
      title: 'MegaETH',
      subtitle: 'Real-time EVM',
      content: 'Ethereum L2 designed for 100k TPS and sub-millisecond block confirmations.',
      items: ['100k TPS target', '<1ms block confirmations', 'Full EVM compatibility'],
      accentColor: '#ef4444',
      category: 'l2',
      shortOverview: `An Ethereum L2 targeting 100k TPS and sub-millisecond latency — designed for real-time applications that need Ethereum security without its latency.`,
      deepInsight: `MegaETH is built on the insight that current L2s are still too slow for real-time applications — trading, gaming, social media. Its architecture separates the sequencer (high-performance, handles execution) from mini-nodes (lightweight, verify state proofs). The sequencer can process transactions in real-time while mini-nodes ensure correctness. This design achieves sub-millisecond confirmations while maintaining decentralization guarantees. MegaETH settles to Ethereum L1 for final security.`,
      resources: [
        { label: 'megaeth.com — Official site', url: 'https://megaeth.com' },
        { label: 'MegaETH docs', url: 'https://docs.megaeth.com' },
      ],
      articleId: 'megaeth-l1',
    },
    style: { width: 320 },
  },
  {
    id: 'megaeth-realtime',
    type: 'card',
    position: { x: -500, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Core Innovation',
      title: 'Real-time EVM',
      content: 'Sub-millisecond transaction confirmations enable real-time on-chain applications.',
      items: ['<1ms confirmation time', 'Real-time trading possible', 'Gaming at blockchain speed'],
      category: 'infra',
      shortOverview: `MegaETH achieves sub-millisecond EVM execution — making on-chain real-time gaming, trading, and social applications technically feasible.`,
      deepInsight: `Current L2s confirm transactions in 250ms-2 seconds — fast enough for most DeFi but too slow for real-time games, order books, and social feeds. MegaETH targets <1ms by separating real-time confirmations (from the sequencer) from final settlement. Applications can trust sequencer confirmations for UX purposes, with the assumption that valid batches will be settled on Ethereum. This enables entirely new application categories previously impossible on-chain.`,
      resources: [],
      articleId: 'megaeth-realtime',
    },
    style: { width: 260 },
  },
  {
    id: 'megaeth-nodes',
    type: 'card',
    position: { x: -100, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Core Innovation',
      title: 'Mini-Nodes Architecture',
      content: 'Lightweight nodes verify state without running the full sequencer — decentralized verification at scale.',
      items: ['Lightweight state verification', 'Decentralized validation', 'Low hardware requirements'],
      category: 'infra',
      shortOverview: `Mini-nodes are lightweight verifiers that confirm MegaETH's sequencer is honest — enabling decentralization without sacrificing performance.`,
      deepInsight: `The key tension in high-performance blockchains: fast sequencers need powerful hardware, but decentralization requires many participants. MegaETH resolves this by separating execution (one powerful sequencer) from verification (many cheap mini-nodes). Mini-nodes receive state diffs from the sequencer and verify them using succinct proofs — they don't need to re-execute all transactions. This means anyone with a laptop can participate in network security, maintaining decentralization while the sequencer runs at full speed.`,
      resources: [],
      articleId: 'megaeth-nodes',
    },
    style: { width: 260 },
  },
  {
    id: 'megaeth-preconfirm',
    type: 'card',
    position: { x: 300, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Core Innovation',
      title: 'Pre-confirmations',
      content: 'Sequencer pre-confirms transactions instantly. Applications get UX-grade speed with L1 security.',
      items: ['Instant sequencer pre-confirms', 'Backed by sequencer stake', 'Final settlement to Ethereum'],
      category: 'infra',
      shortOverview: `Pre-confirmations give users immediate transaction acknowledgment from the sequencer, with Ethereum L1 as the final settlement layer.`,
      deepInsight: `Pre-confirmations are commitments from the sequencer to include a transaction in the next batch. The sequencer stakes bonds that are slashed if they break promises — creating economic guarantees without waiting for L1 finality. For most application UX, a pre-confirmation is sufficient: the sequencer is cryptoeconomically bound to follow through. This is analogous to credit card authorization vs settlement — users see "approved" instantly while actual settlement happens later.`,
      resources: [],
      articleId: 'megaeth-preconfirm',
    },
    style: { width: 260 },
  },
  {
    id: 'megaeth-evm',
    type: 'card',
    position: { x: -300, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Developer Experience',
      title: 'EVM Compatibility',
      content: 'Full EVM compatibility. Solidity contracts, Hardhat, MetaMask all work unchanged.',
      items: ['Full EVM bytecode compatibility', 'No code changes required', 'Standard Ethereum toolchain'],
      category: 'infra',
      shortOverview: `MegaETH is fully EVM compatible — existing Ethereum and L2 contracts deploy without modification, with the same tooling and wallets.`,
      deepInsight: `MegaETH maintains full EVM compatibility at the bytecode level, meaning any contract deployed on Ethereum or other EVM chains deploys unchanged on MegaETH. Developers use the same Hardhat/Foundry workflows, Solidity versions, and security tools. MetaMask and all standard wallets connect with just a network change. This lowers the barrier for existing Ethereum ecosystem projects to port to MegaETH and access its real-time performance capabilities.`,
      resources: [],
      articleId: 'megaeth-evm',
    },
    style: { width: 260 },
  },
  {
    id: 'megaeth-eco',
    type: 'card',
    position: { x: 100, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Ecosystem',
      title: 'Ecosystem',
      content: 'Growing ecosystem of real-time DeFi, gaming, and social applications on MegaETH.',
      items: ['Real-time on-chain order books', 'On-chain gaming', 'High-frequency DeFi'],
      category: 'infra',
      shortOverview: `The MegaETH ecosystem targets applications that need real-time performance — on-chain order books, real-time games, and high-frequency DeFi.`,
      deepInsight: `MegaETH's target applications are fundamentally different from existing L2 use cases. Real-time on-chain order books (previously only possible with off-chain matching engines) become feasible. On-chain games with real-time state (MMORPGs, real-time strategy) can run entirely on-chain. High-frequency trading strategies that require sub-millisecond execution are now possible with full on-chain transparency. The ecosystem is in early stages but attracting builders focused on these new categories.`,
      resources: [
        { label: 'MegaETH ecosystem', url: 'https://megaeth.com/ecosystem' },
      ],
      articleId: 'megaeth-eco',
    },
    style: { width: 260 },
  },
];

const megaethEdges: Edge[] = [
  { id: 'me-rt',   source: 'megaeth-l1',        target: 'megaeth-realtime',    ...E },
  { id: 'me-nd',   source: 'megaeth-l1',        target: 'megaeth-nodes',       ...E },
  { id: 'me-pc',   source: 'megaeth-l1',        target: 'megaeth-preconfirm',  ...E },
  { id: 'me-evm',  source: 'megaeth-realtime',  target: 'megaeth-evm',         ...E },
  { id: 'me-eco',  source: 'megaeth-l1',        target: 'megaeth-eco',         ...E },
];

// ─── RWA CANVAS ───────────────────────────────────────────────────────────────

const rwaNodes: Node<CanvasNodeData>[] = [
  {
    id: 'rwa-overview',
    type: 'card',
    position: { x: 0, y: 0 },
    data: {
      type: 'card',
      title: 'Real World Assets',
      subtitle: 'TradFi meets DeFi',
      content: 'Tokenization of traditional financial assets on public blockchains. $10B+ and growing fast.',
      items: ['Tokenized treasuries, equities, real estate', 'Permissioned + permissionless models', '$10B+ on-chain RWA market'],
      accentColor: '#22c55e',
      category: 'rwa',
      shortOverview: `Real World Assets (RWA) tokenization brings traditional financial assets on-chain — enabling 24/7 liquidity, global access, and programmable compliance.`,
      deepInsight: `RWA is crypto's bridge to the $700T traditional financial system. By representing real-world assets as blockchain tokens, they gain properties impossible in TradFi: instant settlement, programmable distributions, fractional ownership, and global 24/7 trading. The first wave focused on tokenized US Treasuries (risk-free yield on-chain), private credit (Centrifuge, Maple), and money market funds. BlackRock's BUIDL fund legitimized institutional RWA in 2024. The regulatory environment is the key variable — permissioned chains (private blockchains) are growing faster than permissionless.`,
      resources: [
        { label: 'rwa.xyz — RWA data dashboard', url: 'https://rwa.xyz' },
        { label: 'Centrifuge — RWA protocol', url: 'https://centrifuge.io' },
      ],
      articleId: 'rwa-overview',
    },
    style: { width: 320 },
  },
  {
    id: 'rwa-ondo',
    type: 'card',
    position: { x: -680, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'RWA Protocol',
      title: 'Ondo Finance',
      content: 'Tokenized US Treasuries and bonds. USDY (yield-bearing stablecoin) and OUSG.',
      items: ['OUSG — tokenized US Treasuries', 'USDY — yield-bearing stablecoin', 'Ondo Chain (dedicated RWA L1)'],
      category: 'rwa',
      shortOverview: `Ondo Finance tokenizes US Treasuries and creates yield-bearing stablecoins — bringing institutional-grade fixed income products on-chain.`,
      deepInsight: `Ondo Finance is the leading institutional RWA protocol. OUSG (Ondo Short-Term US Government Bond Fund) gives qualified investors on-chain exposure to US T-bills via BlackRock's BFAR ETF. USDY is a tokenized note backed by short-term US Treasuries — accessible to non-US investors as a yield-bearing "stablecoin" alternative. Ondo Chain is a purpose-built blockchain for institutional RWA with permissioned access and regulatory compliance built in. Ondo's growth reflects institutional demand for on-chain yield with familiar underlying assets.`,
      resources: [
        { label: 'ondo.finance — Official site', url: 'https://ondo.finance' },
        { label: 'Ondo docs', url: 'https://docs.ondo.finance' },
      ],
      articleId: 'rwa-ondo',
    },
    style: { width: 260 },
  },
  {
    id: 'rwa-centrifuge',
    type: 'card',
    position: { x: -320, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'RWA Protocol',
      title: 'Centrifuge',
      content: 'On-chain private credit protocol. Connect real-world borrowers to DeFi liquidity.',
      items: ['Real-world asset securitization', 'Tinlake pools for origination', 'MakerDAO / Aave integration'],
      category: 'rwa',
      shortOverview: `Centrifuge brings private credit on-chain — real-world businesses borrow against tokenized invoices, real estate, and other assets from DeFi liquidity providers.`,
      deepInsight: `Centrifuge is a marketplace where real-world asset originators (invoice financiers, trade finance companies, real estate funds) tokenize their assets as collateral and borrow DAI or USDC from DeFi. The protocol has integrated with MakerDAO (largest RWA backing for DAI) and Aave, creating a direct conduit between crypto liquidity and real-world credit. CFG token is used for governance. The "Tinlake" pools structure senior/junior tranches with different risk/return profiles, similar to traditional CDO structures.`,
      resources: [
        { label: 'centrifuge.io — Official site', url: 'https://centrifuge.io' },
        { label: 'Centrifuge docs', url: 'https://docs.centrifuge.io' },
      ],
      articleId: 'rwa-centrifuge',
    },
    style: { width: 260 },
  },
  {
    id: 'rwa-maple',
    type: 'card',
    position: { x: 80, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'RWA Protocol',
      title: 'Maple Finance',
      content: 'Institutional on-chain lending. Pool delegates manage credit to crypto institutions.',
      items: ['Institutional borrowers (market makers, funds)', 'Pool delegate model', 'MPL token'],
      category: 'rwa',
      shortOverview: `Maple Finance enables institutional on-chain lending — crypto institutions borrow from permissioned pools managed by credit underwriters.`,
      deepInsight: `Maple Finance is an under-collateralized lending protocol for institutions — unlike DeFi's typical overcollateralized lending, Maple lends based on creditworthiness assessed by "Pool Delegates" (professional credit managers). Borrowers include market makers (Alameda was a major borrower pre-collapse), trading firms, and crypto-native institutions. Post-FTX, Maple pivoted to focus on real-world asset backed lending with less reliance on uncollateralized crypto borrowing. The MPL token governs the protocol and earns fees from successful pools.`,
      resources: [
        { label: 'maple.finance — Official site', url: 'https://maple.finance' },
      ],
      articleId: 'rwa-maple',
    },
    style: { width: 260 },
  },
  {
    id: 'rwa-blackrock',
    type: 'card',
    position: { x: 440, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Institutional RWA',
      title: 'BlackRock BUIDL',
      content: "World's largest asset manager's tokenized fund on Ethereum. $500M+ in assets.",
      items: ['USD Institutional Digital Fund', 'Runs on Ethereum mainnet', 'Instant settlement 24/7'],
      category: 'rwa',
      shortOverview: `BlackRock BUIDL is the world's largest asset manager's tokenized money market fund — $500M+ on Ethereum, signaling mainstream institutional adoption.`,
      deepInsight: `BlackRock's BUIDL fund (BlackRock USD Institutional Digital Liquidity Fund) launched in March 2024 as a tokenized money market fund on Ethereum. It quickly became the largest tokenized fund, surpassing Franklin Templeton's BENJI. BUIDL tokens represent shares in a fund holding cash, US Treasuries, and repos — yielding ~5% in 2024. The significance: the world's largest asset manager chose public blockchain (Ethereum) over permissioned infrastructure, validating public blockchains as institutional-grade. Ondo Finance used BUIDL as collateral for OUSG, showing composability between institutional RWA products.`,
      resources: [
        { label: 'BlackRock BUIDL info', url: 'https://www.blackrock.com/us/individual/products/333374/blackrock-usd-institutional-digital-liquidity-fund' },
      ],
      articleId: 'rwa-blackrock',
    },
    style: { width: 260 },
  },
  {
    id: 'rwa-chainlink',
    type: 'card',
    position: { x: -400, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Infrastructure',
      title: 'Chainlink PoR',
      content: 'Proof of Reserve: verify on-chain that real-world asset backing is maintained.',
      items: ['Automated reserve verification', 'Cross-chain proof delivery', 'Used by major RWA protocols'],
      category: 'oracle',
      shortOverview: `Chainlink Proof of Reserve provides automated, on-chain verification that tokenized assets are fully backed by their claimed real-world collateral.`,
      deepInsight: `The "trust but verify" problem in RWA: how do DeFi protocols know that tokenized assets (USDC, tokenized gold, real estate) are actually backed? Chainlink PoR uses oracle networks to verify real-world reserves by connecting to off-chain data sources (custodian APIs, bank balances, vault audits) and publishing the verified data on-chain. Smart contracts can then automatically pause or liquidate if reserves fall below requirements. Major stablecoins and RWA protocols use PoR as a trust layer.`,
      resources: [
        { label: 'Chainlink Proof of Reserve', url: 'https://chain.link/proof-of-reserve' },
      ],
      articleId: 'rwa-chainlink',
    },
    style: { width: 260 },
  },
  {
    id: 'rwa-goldfinch',
    type: 'card',
    position: { x: 80, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'RWA Protocol',
      title: 'Goldfinch',
      content: 'Decentralized credit protocol for emerging market loans. Crypto capital → real world impact.',
      items: ['Emerging market lending', 'Backers + LPs model', 'GFI token'],
      category: 'rwa',
      shortOverview: `Goldfinch connects crypto capital to real-world borrowers in emerging markets — lending to fintechs in Africa, Latin America, and Asia.`,
      deepInsight: `Goldfinch's mission is to extend credit to the unbanked using crypto capital. Borrowers are fintechs in emerging markets (Kenya, India, Mexico, Nigeria) that lend to small businesses and consumers who lack access to traditional finance. "Backers" provide first-loss capital (junior tranche) after due diligence; "Liquidity Providers" provide senior capital into a diversified pool. The protocol has deployed $100M+ in real loans. Goldfinch differs from other RWA protocols by targeting social impact alongside yield.`,
      resources: [
        { label: 'goldfinch.finance — Official site', url: 'https://goldfinch.finance' },
        { label: 'Goldfinch docs', url: 'https://docs.goldfinch.finance' },
      ],
      articleId: 'rwa-goldfinch',
    },
    style: { width: 260 },
  },
];

const rwaEdges: Edge[] = [
  { id: 'rw-ond',  source: 'rwa-overview',  target: 'rwa-ondo',       ...E },
  { id: 'rw-cen',  source: 'rwa-overview',  target: 'rwa-centrifuge', ...E },
  { id: 'rw-map',  source: 'rwa-overview',  target: 'rwa-maple',      ...E },
  { id: 'rw-blk',  source: 'rwa-overview',  target: 'rwa-blackrock',  ...E },
  { id: 'rw-chn',  source: 'rwa-overview',  target: 'rwa-chainlink',  ...E },
  { id: 'rw-gf',   source: 'rwa-overview',  target: 'rwa-goldfinch',  ...E },
  { id: 'rw-ond-blk', source: 'rwa-ondo',   target: 'rwa-blackrock',  ...E },
];

// ─── PAYMENTS CANVAS ──────────────────────────────────────────────────────────

const paymentsNodes: Node<CanvasNodeData>[] = [
  {
    id: 'payments-overview',
    type: 'card',
    position: { x: 0, y: 0 },
    data: {
      type: 'card',
      title: 'Crypto Payments',
      subtitle: 'The New Payment Rail',
      content: 'Stablecoins settled $10T+ in 2024. Crypto is becoming a viable global payment infrastructure.',
      items: ['$10T+ stablecoin settlement volume', 'x402 HTTP payment standard', 'Stripe, Coinbase, Circle integration'],
      accentColor: '#0ea5e9',
      category: 'payments',
      shortOverview: `Crypto payments infrastructure — stablecoins, merchant acceptance, and new protocols making blockchain payments as easy as HTTP requests.`,
      deepInsight: `Crypto payments reached an inflection point in 2024: stablecoin settlement volume exceeded traditional payment rails. USDC and USDT combined settled more value than Visa. The x402 standard (HTTP 402 Payment Required) enables micropayment-gated APIs — making machine-to-machine payments trivial. Stripe's crypto payment support and Coinbase Commerce brought mainstream merchants to crypto. Solana and Base compete as the primary consumer payment rails due to near-zero fees and fast finality.`,
      resources: [
        { label: 'x402.org — HTTP payments standard', url: 'https://x402.org' },
      ],
      articleId: 'payments-overview',
    },
    style: { width: 320 },
  },
  {
    id: 'payments-stripe',
    type: 'card',
    position: { x: -680, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Payment Infrastructure',
      title: 'Stripe Crypto',
      content: "Stripe re-enabled crypto payments in 2024 with USDC support on Solana, Ethereum, and Base.",
      items: ['USDC payments via Stripe', 'Multi-chain support', 'Fiat conversion built-in'],
      category: 'payments',
      shortOverview: `Stripe's return to crypto — USDC-based payment processing on Solana, Ethereum, and Base, with automatic fiat conversion for merchants.`,
      deepInsight: `Stripe originally dropped Bitcoin payments in 2018 due to volatility and fees. In 2024, they re-entered with stablecoin (USDC) support on multiple chains. The model is hybrid: customers pay in crypto, Stripe optionally converts to fiat for merchants who prefer it. This removes the volatility concern entirely. Stripe's distribution (millions of businesses) makes this a significant legitimization of crypto payments. The Stripe acquisition of Bridge (stablecoin infrastructure) in 2024 showed their deep commitment to building crypto-native payment infrastructure.`,
      resources: [
        { label: 'Stripe crypto payments', url: 'https://stripe.com/use-cases/crypto' },
      ],
      articleId: 'payments-stripe',
    },
    style: { width: 260 },
  },
  {
    id: 'payments-circle',
    type: 'card',
    position: { x: -320, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Stablecoin',
      title: 'Circle / USDC',
      content: 'USDC is the regulated stablecoin backbone of crypto payments. $40B+ circulation.',
      items: ['$40B+ USDC in circulation', 'Cross-Chain Transfer Protocol (CCTP)', 'Regulated, audited reserves'],
      category: 'stablecoin',
      shortOverview: `Circle's USDC is the leading regulated stablecoin — fully backed by cash and US Treasuries, with $40B+ in circulation and instant cross-chain transfers via CCTP.`,
      deepInsight: `USDC is the most trusted stablecoin for institutional and regulated use cases. Unlike USDT (Tether), Circle publishes monthly attestations of its reserves (cash + US Treasuries). CCTP (Cross-Chain Transfer Protocol) enables native USDC burns and mints across chains — instead of locking USDC on one chain and minting wrapped versions elsewhere, CCTP burns on the source chain and mints natively on the destination, eliminating bridge risk. Circle's partnerships with Coinbase (Coinbase earns USDC interest) make it the backbone of Base's DeFi ecosystem.`,
      resources: [
        { label: 'circle.com — Official site', url: 'https://circle.com' },
        { label: 'USDC docs', url: 'https://developers.circle.com/stablecoins/docs' },
      ],
      articleId: 'payments-circle',
    },
    style: { width: 260 },
  },
  {
    id: 'payments-coinbase',
    type: 'card',
    position: { x: 80, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Payment Infrastructure',
      title: 'Coinbase Commerce',
      content: 'Merchant payment processing for crypto. Supports USDC, ETH, BTC via self-custody.',
      items: ['Self-custody payments', 'No intermediary risk', 'Shopify and WooCommerce plugins'],
      category: 'payments',
      shortOverview: `Coinbase Commerce lets merchants accept crypto payments directly into their own wallets — no intermediary holds funds.`,
      deepInsight: `Coinbase Commerce differs from Stripe's crypto offering by being non-custodial: payments go directly to the merchant's wallet with no Coinbase intermediary. This gives merchants full control but requires more technical setup. Commerce supports USDC on multiple chains, ETH, and BTC. Plugins for Shopify, WooCommerce, and Magento make integration accessible to non-technical merchants. Combined with Coinbase's Base network and Smart Wallet, Commerce is part of Coinbase's broader strategy to be the "crypto bank" for both consumers and businesses.`,
      resources: [
        { label: 'Coinbase Commerce', url: 'https://commerce.coinbase.com' },
      ],
      articleId: 'payments-coinbase',
    },
    style: { width: 260 },
  },
  {
    id: 'payments-request',
    type: 'card',
    position: { x: 440, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Payment Infrastructure',
      title: 'Request Network',
      content: 'Decentralized payment requests and invoicing. Open payment standard for Web3.',
      items: ['Payment request standard', 'Multi-currency invoicing', 'REQ token'],
      category: 'payments',
      shortOverview: `Request Network is an open payment request standard — anyone can create a payment request, denominated in any currency, payable in crypto.`,
      deepInsight: `Request Network creates a decentralized layer for payment requests: a JSON-based standard for invoices, payment requests, and receipts that any application can parse. This enables interoperable billing across Web3 apps — a payment request created in one app can be paid from another. The protocol handles currency conversion, tax calculations, and payment proof generation. REQ token is used for protocol fees and governance. Request has been used by crypto-native B2B companies for invoice financing and accounts receivable.`,
      resources: [
        { label: 'request.network — Official site', url: 'https://request.network' },
      ],
      articleId: 'payments-request',
    },
    style: { width: 260 },
  },
  {
    id: 'payments-x402',
    type: 'card',
    position: { x: -400, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Protocol Standard',
      title: 'x402 Standard',
      content: 'HTTP 402 Payment Required: a standard for machine-readable crypto micropayments.',
      items: ['HTTP 402 status code revival', 'AI agents pay APIs autonomously', 'Coinbase-developed standard'],
      category: 'payments',
      shortOverview: `x402 revives the HTTP 402 "Payment Required" status code as a standard for crypto micropayments — enabling AI agents and apps to pay for API access automatically.`,
      deepInsight: `HTTP 402 was reserved in the original HTTP spec for "payment required" but never standardized. x402 (developed by Coinbase) defines how a server should specify payment requirements (currency, amount, chain, wallet address) in a 402 response, and how a client (app or AI agent) should construct and send payment. The killer use case is AI agents: an agent that needs data or compute resources can pay for it autonomously, without human approval, using crypto micropayments. This enables a new economy of paid APIs that don't require accounts or subscriptions.`,
      resources: [
        { label: 'x402.org — Official site', url: 'https://x402.org' },
        { label: 'x402 specification', url: 'https://github.com/coinbase/x402' },
      ],
      articleId: 'payments-x402',
    },
    style: { width: 260 },
  },
  {
    id: 'payments-stellar',
    type: 'card',
    position: { x: 80, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Payment Network',
      title: 'Stellar / XLM',
      content: 'Blockchain built specifically for payments and remittances. USDC on Stellar for cross-border.',
      items: ['3-5 second settlement', '0.00001 XLM per tx', 'MoneyGram, Western Union integration'],
      category: 'payments',
      shortOverview: `Stellar is a blockchain purpose-built for payments and cross-border remittances — 3-second settlement, near-zero fees, and Circle's USDC as primary stablecoin.`,
      deepInsight: `Stellar was originally forked from Ripple but diverged significantly. It's optimized for payments: 3-5 second finality, 0.00001 XLM per transaction, and a built-in decentralized exchange for currency conversion. Circle chose Stellar as one of the first chains for USDC due to its payment focus. MoneyGram's on/off-ramp partnership made Stellar accessible for unbanked populations. IBM's World Wire (cross-border payment network) used Stellar. The Stellar Development Foundation (SDF) focuses on financial inclusion as its primary mission.`,
      resources: [
        { label: 'stellar.org — Official site', url: 'https://stellar.org' },
        { label: 'Stellar docs', url: 'https://developers.stellar.org' },
      ],
      articleId: 'payments-stellar',
    },
    style: { width: 260 },
  },
];

const paymentsEdges: Edge[] = [
  { id: 'py-str',  source: 'payments-overview', target: 'payments-stripe',   ...E },
  { id: 'py-cir',  source: 'payments-overview', target: 'payments-circle',   ...E },
  { id: 'py-cb',   source: 'payments-overview', target: 'payments-coinbase', ...E },
  { id: 'py-req',  source: 'payments-overview', target: 'payments-request',  ...E },
  { id: 'py-x402', source: 'payments-overview', target: 'payments-x402',     ...E },
  { id: 'py-xlm',  source: 'payments-overview', target: 'payments-stellar',  ...E },
  { id: 'py-cir-str', source: 'payments-circle', target: 'payments-stripe',  ...E },
];

// ─── WALLETS & IDENTITY CANVAS ────────────────────────────────────────────────

const walletsNodes: Node<CanvasNodeData>[] = [
  {
    id: 'wallets-overview',
    type: 'card',
    position: { x: 0, y: 0 },
    data: {
      type: 'card',
      title: 'Wallets & Identity',
      subtitle: 'The UX Frontier',
      content: 'The wallet layer is being rebuilt for mass adoption: embedded wallets, smart accounts, and passkeys.',
      items: ['Embedded wallets (no seed phrases)', 'ERC-4337 account abstraction', 'Passkey-based authentication'],
      accentColor: '#a78bfa',
      category: 'wallet',
      shortOverview: `The wallet and identity layer — embedded wallets, ERC-4337 account abstraction, and the infrastructure enabling the next billion crypto users.`,
      deepInsight: `Wallet UX has historically been crypto's biggest adoption blocker. Three converging trends are fixing this: (1) Embedded wallets — Privy, Dynamic, and Magic create wallets silently during social login, removing the seed phrase barrier entirely. (2) ERC-4337 (account abstraction) — smart contract wallets enable gasless transactions, spending limits, session keys, and social recovery. (3) Passkeys — biometric authentication (Face ID, Touch ID) replaces passwords and seed phrases. The convergence of these three trends is making crypto wallet UX competitive with traditional banking apps.`,
      resources: [
        { label: 'erc4337.io — AA resource hub', url: 'https://www.erc4337.io' },
      ],
      articleId: 'wallets-overview',
    },
    style: { width: 320 },
  },
  {
    id: 'wallets-privy',
    type: 'card',
    position: { x: -680, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Embedded Wallets',
      title: 'Privy',
      content: 'Embedded wallet SDK for apps. Users get crypto wallets via email/social login.',
      items: ['Email / social login → wallet', 'Non-custodial key management', 'Cross-app wallet portability'],
      category: 'wallet',
      shortOverview: `Privy provides embedded wallet infrastructure — users get crypto wallets through email or social login, with no seed phrases or wallet apps required.`,
      deepInsight: `Privy embeds wallets directly into applications: a user signs up with email or Google, and Privy creates a crypto wallet in the background. The private key is managed via Privy's secure key management (MPC-based — keys are never stored in one place). Users can later "export" their wallet to a full self-custody setup. Privy's model sits between fully custodial (exchange wallets) and fully self-custodial (MetaMask) — optimizing for UX without sacrificing user ownership. Farcaster's Warpcast uses Privy for wallet creation.`,
      resources: [
        { label: 'privy.io — Official site', url: 'https://privy.io' },
        { label: 'Privy docs', url: 'https://docs.privy.io' },
      ],
      articleId: 'wallets-privy',
    },
    style: { width: 260 },
  },
  {
    id: 'wallets-dynamic',
    type: 'card',
    position: { x: -320, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Embedded Wallets',
      title: 'Dynamic',
      content: 'Web3 authentication and embedded wallets. Enterprise-grade with advanced user management.',
      items: ['Multi-wallet authentication', 'Enterprise compliance tools', 'Fiat on-ramp integration'],
      category: 'wallet',
      shortOverview: `Dynamic provides enterprise-grade Web3 authentication — multi-wallet login, compliance tools, and embedded wallet creation for complex applications.`,
      deepInsight: `Dynamic targets enterprise and complex consumer applications that need more than basic wallet connection. Key differentiators: multi-wallet support (users can link multiple wallets to one profile), compliance tools (geo-blocking, KYC integration, token-gating), and advanced user management (email, social, wallet authentication in any combination). Dynamic is used by gaming companies, NFT platforms, and enterprise Web3 apps that need granular control over who can access what features.`,
      resources: [
        { label: 'dynamic.xyz — Official site', url: 'https://dynamic.xyz' },
        { label: 'Dynamic docs', url: 'https://docs.dynamic.xyz' },
      ],
      articleId: 'wallets-dynamic',
    },
    style: { width: 260 },
  },
  {
    id: 'wallets-magic',
    type: 'card',
    position: { x: 80, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Embedded Wallets',
      title: 'Magic Labs',
      content: 'Passwordless authentication with embedded crypto wallets. Magic Link email auth.',
      items: ['Magic Link (email OTP)', 'Non-custodial wallet per user', 'Simple SDK integration'],
      category: 'wallet',
      shortOverview: `Magic Labs provides passwordless authentication with embedded crypto wallets — users authenticate via email magic links and get a non-custodial wallet automatically.`,
      deepInsight: `Magic was one of the first "progressive decentralization" wallet providers. Users authenticate via a magic link sent to their email (no password) — no seed phrase, no extension. The private key is managed by Magic's HSM (Hardware Security Module) network. While this is technically custodial, Magic frames it as "social recovery" — the user's email is the recovery method. Magic has been used by gaming apps, DeFi protocols, and NFT marketplaces that want Web2-grade onboarding.`,
      resources: [
        { label: 'magic.link — Official site', url: 'https://magic.link' },
        { label: 'Magic docs', url: 'https://magic.link/docs' },
      ],
      articleId: 'wallets-magic',
    },
    style: { width: 260 },
  },
  {
    id: 'wallets-erc4337',
    type: 'card',
    position: { x: 440, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Account Abstraction',
      title: 'ERC-4337 / AA',
      content: 'Account Abstraction standard enabling smart contract wallets with superpowers.',
      items: ['Gasless transactions (paymasters)', 'Session keys for gaming/trading', 'Social recovery (no seed phrase loss'],
      category: 'wallet',
      shortOverview: `ERC-4337 is the account abstraction standard — enabling smart contract wallets with gasless transactions, session keys, spending limits, and social recovery.`,
      deepInsight: `ERC-4337 transforms wallets from simple key-pair accounts into programmable smart contracts. Key features: (1) Paymasters — third parties can pay gas fees, enabling gasless UX for users. (2) Session keys — time-limited, contract-limited signing keys for gaming (no need to approve every in-game action). (3) Batched transactions — multiple operations in one user signature. (4) Social recovery — lose your device, recover via a set of trusted contacts. ERC-4337 doesn't require any Ethereum L1 changes — it works as a smart contract on any EVM chain. Coinbase Smart Wallet and Safe 4337 module are leading implementations.`,
      resources: [
        { label: 'erc4337.io — Official resource', url: 'https://www.erc4337.io' },
        { label: 'EIP-4337 specification', url: 'https://eips.ethereum.org/EIPS/eip-4337' },
      ],
      articleId: 'wallets-erc4337',
    },
    style: { width: 260 },
  },
  {
    id: 'wallets-safe',
    type: 'card',
    position: { x: -400, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Multisig',
      title: 'Safe (Multisig)',
      content: '$100B+ in assets secured. The standard multisig for DAOs, protocols, and treasuries.',
      items: ['$100B+ secured', 'M-of-N multisig standard', 'Safe 4337 module (AA compatible)'],
      category: 'wallet',
      shortOverview: `Safe is the de facto standard for multisig wallets — securing $100B+ in assets for DAOs, protocols, and institutions with M-of-N signature requirements.`,
      deepInsight: `Safe (formerly Gnosis Safe) is trusted to hold more assets than any other smart contract wallet: $100B+ across Ethereum and 20+ chains. The M-of-N multisig model requires a threshold of signers to approve transactions — critical for DAO treasuries, protocol upgrade keys, and institutional custody. Safe Guard modules add additional transaction validation logic (spending limits, address allowlists). The Safe 4337 module makes Safe compatible with ERC-4337 Account Abstraction, combining multisig security with AA's UX improvements.`,
      resources: [
        { label: 'safe.global — Official site', url: 'https://safe.global' },
        { label: 'Safe docs', url: 'https://docs.safe.global' },
      ],
      articleId: 'wallets-safe',
    },
    style: { width: 260 },
  },
  {
    id: 'wallets-rainbow',
    type: 'card',
    position: { x: 0, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Consumer Wallets',
      title: 'Rainbow Wallet',
      content: 'User-friendly mobile wallet focused on NFTs and DeFi. The consumer-grade Ethereum wallet.',
      items: ['Beautiful NFT gallery', 'Multi-chain support', 'ENS name integration'],
      category: 'wallet',
      shortOverview: `Rainbow is the consumer-grade Ethereum wallet — beautiful NFT display, multi-chain support, and deep ENS integration in a mobile-first experience.`,
      deepInsight: `Rainbow made Ethereum wallets approachable for non-technical users. The emphasis on visual design (beautiful NFT galleries, token sparklines) attracted a different user profile than MetaMask. Rainbow's "smart transactions" feature simulates transactions before signing and warns about risks (suspicious contracts, approval drains). ENS names are displayed prominently throughout. Rainbow Kit (their open-source wallet connector) became a popular choice for dApp developers, further cementing their brand in the Ethereum ecosystem.`,
      resources: [
        { label: 'rainbow.me — Official site', url: 'https://rainbow.me' },
        { label: 'Rainbow Kit docs', url: 'https://www.rainbowkit.com' },
      ],
      articleId: 'wallets-rainbow',
    },
    style: { width: 260 },
  },
  {
    id: 'wallets-particle',
    type: 'card',
    position: { x: 400, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Account Abstraction',
      title: 'Particle Network',
      content: 'Chain abstraction + embedded wallets. Universal account across all chains.',
      items: ['Chain abstraction (one account, all chains)', 'Gasless cross-chain UX', 'Universal Smart Account'],
      category: 'wallet',
      shortOverview: `Particle Network provides chain abstraction — a Universal Smart Account that works across all chains, with one gas balance and one user identity.`,
      deepInsight: `Particle Network's chain abstraction goes beyond embedded wallets: a "Universal Smart Account" that works across all EVM and non-EVM chains from a single interface. The user has one account, one gas balance (denominated in any token), and one UX regardless of which chain an application runs on. The Particle Chain handles cross-chain intent execution. This solves the biggest UX problem in a multi-chain world: users shouldn't need to know which chain they're on or maintain separate gas balances on each.`,
      resources: [
        { label: 'particle.network — Official site', url: 'https://particle.network' },
        { label: 'Particle docs', url: 'https://developers.particle.network' },
      ],
      articleId: 'wallets-particle',
    },
    style: { width: 260 },
  },
];

const walletsEdges: Edge[] = [
  { id: 'wl-prv',  source: 'wallets-overview',  target: 'wallets-privy',    ...E },
  { id: 'wl-dyn',  source: 'wallets-overview',  target: 'wallets-dynamic',  ...E },
  { id: 'wl-mag',  source: 'wallets-overview',  target: 'wallets-magic',    ...E },
  { id: 'wl-aa',   source: 'wallets-overview',  target: 'wallets-erc4337',  ...E },
  { id: 'wl-saf',  source: 'wallets-erc4337',   target: 'wallets-safe',     ...E },
  { id: 'wl-rnb',  source: 'wallets-overview',  target: 'wallets-rainbow',  ...E },
  { id: 'wl-par',  source: 'wallets-erc4337',   target: 'wallets-particle', ...E },
  { id: 'wl-prv-aa', source: 'wallets-privy',   target: 'wallets-erc4337', ...E },
];

// ─── COSMOS CANVAS ────────────────────────────────────────────────────────────

const cosmosNodes: Node<CanvasNodeData>[] = [
  {
    id: 'cosmos-l1',
    type: 'card',
    position: { x: 0, y: 0 },
    data: {
      type: 'card',
      title: 'Cosmos Hub',
      subtitle: 'ATOM — Internet of Blockchains',
      content: 'The central hub of the Cosmos network. ATOM secures the Hub and enables Interchain Security for connected chains.',
      items: ['Tendermint BFT consensus', 'Interchain Security (shared validators)', 'ATOM staking & governance'],
      accentColor: '#6f4cff',
      category: 'l1',
      shortOverview: `The Cosmos Hub is the central coordinator of the Cosmos ecosystem — home to ATOM, Interchain Security, and the original IBC implementation.`,
      deepInsight: `The Cosmos Hub was the first chain launched on Cosmos, serving as the economic center of the ecosystem. ATOM stakers secure the Hub and vote on governance proposals that shape the entire Cosmos roadmap. Interchain Security (ICS) lets smaller "consumer chains" borrow the Hub's validator set for security — similar to Ethereum's shared security via rollups, but sovereign. The Hub itself is intentionally minimal: its value comes from being the trust anchor for the broader interchain, not from hosting applications directly.`,
      resources: [
        { label: 'cosmos.network — Official site', url: 'https://cosmos.network' },
        { label: 'Cosmos Hub docs', url: 'https://hub.cosmos.network' },
        { label: 'ATOM tokenomics', url: 'https://cosmos.network/atom' },
      ],
    },
    style: { width: 320 },
  },
  {
    id: 'cosmos-ibc',
    type: 'card',
    position: { x: -500, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Core Protocol',
      title: 'IBC Protocol',
      content: 'Inter-Blockchain Communication — trustless messaging between 100+ sovereign chains without bridges.',
      items: ['Trustless cross-chain token transfers', 'Arbitrary data packets (NFTs, calls)', 'Light-client based verification'],
      category: 'bridge',
      shortOverview: `IBC is the TCP/IP of blockchains — a trustless, permissionless protocol for transferring tokens and data between sovereign chains.`,
      deepInsight: `IBC (Inter-Blockchain Communication) works by having each chain maintain a light client of its counterpart — a minimal representation of the other chain's consensus state. When chain A sends a message to chain B, relayers (permissionless off-chain actors) carry the packet. Chain B's light client verifies the message against chain A's headers — no trusted bridge or multisig required. This is fundamentally different from most bridges: there's no wrapped token, no centralized custodian, and no validator set to bribe. IBC is now used by 100+ chains, processing billions in volume annually.`,
      resources: [
        { label: 'IBC Protocol docs', url: 'https://ibc.cosmos.network' },
        { label: 'IBC specification', url: 'https://github.com/cosmos/ibc' },
        { label: 'Map of Zones — IBC explorer', url: 'https://mapofzones.com' },
      ],
    },
    style: { width: 280 },
  },
  {
    id: 'cosmos-sdk',
    type: 'card',
    position: { x: -120, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Core Protocol',
      title: 'Cosmos SDK',
      content: 'Modular framework for building application-specific blockchains. Powers dYdX, Injective, Celestia, and 50+ chains.',
      items: ['Modular module system', 'Built-in staking, governance, bank', 'CosmWasm smart contracts'],
      category: 'infra',
      shortOverview: `The Cosmos SDK is a modular framework that lets teams build custom L1 blockchains in weeks — powering dYdX, Injective, Celestia, and dozens more.`,
      deepInsight: `The Cosmos SDK packages common blockchain functionality into composable modules: bank (token transfers), staking (PoS), governance (on-chain voting), slashing, and more. Teams building on the SDK inherit these battle-tested modules and focus on their application-specific logic. CosmWasm adds a WebAssembly smart contract layer for teams that want programmability without a full EVM. The SDK's architecture is what makes the "appchain" thesis work: you get a sovereign, customizable blockchain with the security and composability of a shared framework.`,
      resources: [
        { label: 'Cosmos SDK docs', url: 'https://docs.cosmos.network' },
        { label: 'CosmWasm docs', url: 'https://docs.cosmwasm.com' },
        { label: 'Ignite CLI (scaffold SDK chains)', url: 'https://ignite.com' },
      ],
    },
    style: { width: 280 },
  },
  {
    id: 'cosmos-stride',
    type: 'card',
    position: { x: 300, y: 440 },
    data: {
      type: 'card',
      groupLabel: 'Liquid Staking',
      title: 'Stride',
      content: 'Liquid staking protocol for the IBC ecosystem. Stake ATOM, OSMO, INJ and receive liquid stTokens.',
      items: ['stATOM, stOSMO, stINJ…', 'IBC-native liquid staking', 'Auto-compounding rewards'],
      category: 'staking',
      shortOverview: `Stride issues liquid staking tokens for IBC assets — stATOM, stOSMO, stINJ — unlocking staked capital for DeFi use.`,
      deepInsight: `Before Stride, staking ATOM meant locking it up for 21 days with no liquidity. Stride issues liquid staking tokens (e.g., stATOM) that represent staked ATOM plus accruing rewards. These stTokens can be used across IBC DeFi — as collateral on Umee, as LP tokens on Osmosis, etc. — while still earning staking yield. Stride is a consumer chain secured by the Cosmos Hub via Interchain Security, meaning ATOM validators also validate Stride. This aligns incentives: if Stride is valuable, it increases demand for ATOM staking (and thus the Hub's security budget).`,
      resources: [
        { label: 'stride.zone — Official site', url: 'https://stride.zone' },
        { label: 'Stride docs', url: 'https://docs.stride.zone' },
      ],
    },
    style: { width: 260 },
  },
  {
    id: 'cosmos-osmosis',
    type: 'card',
    position: { x: -560, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi Hub',
      title: 'Osmosis',
      content: 'The IBC DEX hub. Cross-chain AMM for IBC tokens — the most-used DeFi application in the Cosmos ecosystem.',
      items: ['IBC-native AMM & CLMM', 'OSMO governance token', 'Superfluid staking (LP + stake simultaneously)'],
      category: 'dex',
      shortOverview: `Osmosis is the primary DEX of the IBC ecosystem — an AMM that enables trustless swaps between any IBC-connected token.`,
      deepInsight: `Osmosis pioneered the concept of "sovereignty" in DeFi: rather than a DEX deployed on another chain, Osmosis is its own chain, with its own governance deciding fee parameters, new pool types, and tokenomics. Superfluid staking lets OSMO LPs simultaneously stake their position — you earn swap fees, LP incentives, and staking rewards at once. Osmosis has consistently been the highest-volume IBC chain, processing most of the cross-chain DEX volume in the Cosmos ecosystem.`,
      resources: [
        { label: 'osmosis.zone — Official site', url: 'https://osmosis.zone' },
        { label: 'Osmosis docs', url: 'https://docs.osmosis.zone' },
        { label: 'Osmosis governance', url: 'https://gov.osmosis.zone' },
      ],
    },
    style: { width: 280 },
  },
  {
    id: 'cosmos-celestia',
    type: 'card',
    position: { x: -140, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'Modular Infra',
      title: 'Celestia',
      content: 'Modular data availability layer. Rollups and appchains post data to Celestia instead of Ethereum for lower cost.',
      items: ['Data availability sampling (DAS)', 'TIA token for blob fees', 'Rollups post data cheaply'],
      category: 'infra',
      shortOverview: `Celestia pioneered modular blockchain design — a dedicated data availability layer that lets rollups post data without running a full execution environment.`,
      deepInsight: `The key insight of Celestia is that data availability (making sure data is published and retrievable) is separable from execution (running transactions) and consensus (ordering blocks). By building a chain solely for DA using data availability sampling, Celestia lets light nodes verify that data was published without downloading all of it. This makes it cheap for rollups and appchains to post their data to Celestia rather than Ethereum — at a fraction of the cost. Ethereum's EIP-4844 blobspace was partly inspired by Celestia's research.`,
      resources: [
        { label: 'celestia.org — Official site', url: 'https://celestia.org' },
        { label: 'Celestia docs', url: 'https://docs.celestia.org' },
        { label: 'Celestia research blog', url: 'https://blog.celestia.org' },
      ],
    },
    style: { width: 280 },
  },
  {
    id: 'cosmos-injective',
    type: 'card',
    position: { x: 220, y: 880 },
    data: {
      type: 'card',
      groupLabel: 'DeFi',
      title: 'Injective',
      content: 'Permissionless on-chain order book for perps, futures, and spot. EVM + CosmWasm compatible.',
      items: ['Fully on-chain order book', 'INJ token (deflationary burn)', 'EVM + CosmWasm compatibility'],
      category: 'derivatives',
      shortOverview: `Injective is a high-performance appchain built for on-chain derivatives — a fully on-chain order book for perps, futures, and spot markets.`,
      deepInsight: `Most DeFi uses AMMs (automated market makers) because on-chain order books were too slow and expensive on Ethereum. Injective's dedicated appchain removes those constraints — Injective runs at 10,000+ TPS with instant finality, making a CLOB (Central Limit Order Book) viable. This gives pro traders the UX of a CEX with the custody of a DEX. Injective is EVM-compatible (Ethereum devs can deploy Solidity contracts) and CosmWasm-compatible (Cosmos devs can deploy Rust contracts). The INJ token has weekly auctions where protocol revenue is used to buy back and burn INJ.`,
      resources: [
        { label: 'injective.com — Official site', url: 'https://injective.com' },
        { label: 'Injective docs', url: 'https://docs.injective.network' },
      ],
    },
    style: { width: 280 },
  },
];

const cosmosEdges: Edge[] = [
  { id: 'co-ibc',  source: 'cosmos-l1',  target: 'cosmos-ibc',      ...E },
  { id: 'co-sdk',  source: 'cosmos-l1',  target: 'cosmos-sdk',      ...E },
  { id: 'co-str',  source: 'cosmos-l1',  target: 'cosmos-stride',   ...E },
  { id: 'co-osm',  source: 'cosmos-ibc', target: 'cosmos-osmosis',  ...E },
  { id: 'co-sdk-osm', source: 'cosmos-sdk', target: 'cosmos-osmosis', ...E },
  { id: 'co-inj',  source: 'cosmos-sdk', target: 'cosmos-injective', ...E },
  { id: 'co-cel',  source: 'cosmos-sdk', target: 'cosmos-celestia', ...E },
];

// ─── Registry ─────────────────────────────────────────────────────────────────

export const CANVASES: Record<string, CanvasDefinition> = {
  // ── Main canvas ───────────────────────────────────────────────────────────
  main:    { id: 'main',    title: 'Crypto Knowledge Map',   nodes: mainNodes,     edges: mainEdges     },

  // ── New pillar canvases (parent = main) ───────────────────────────────────
  foundations:      { id: 'foundations',      title: 'Foundations',           parentCanvasId: 'main', nodes: foundationsNodes,      edges: foundationsEdges      },
  chains:           { id: 'chains',           title: 'Chains & L2s',         parentCanvasId: 'main', nodes: chainsNodes,           edges: chainsEdges           },
  defi:             { id: 'defi',             title: 'DeFi',                 parentCanvasId: 'main', nodes: defiNodes,             edges: defiEdges             },
  infrastructure:   { id: 'infrastructure',   title: 'Infrastructure',       parentCanvasId: 'main', nodes: infrastructureNodes,   edges: infrastructureEdges   },
  'mev-security':   { id: 'mev-security',     title: 'MEV & Security',       parentCanvasId: 'main', nodes: mevSecurityNodes,      edges: mevSecurityEdges      },
  governance:       { id: 'governance',        title: 'Governance & DAOs',    parentCanvasId: 'main', nodes: governanceNodes,       edges: governanceEdges       },
  tokenomics:       { id: 'tokenomics',        title: 'Token Economics',      parentCanvasId: 'main', nodes: tokenomicsNodes,       edges: tokenomicsEdges       },
  privacy:          { id: 'privacy',           title: 'Privacy',              parentCanvasId: 'main', nodes: privacyNodes,          edges: privacyEdges          },
  interoperability: { id: 'interoperability',  title: 'Interoperability',     parentCanvasId: 'main', nodes: interoperabilityNodes, edges: interoperabilityEdges },
  applications:     { id: 'applications',      title: 'Applications',         parentCanvasId: 'main', nodes: applicationsNodes,     edges: applicationsEdges     },
  frontier:         { id: 'frontier',          title: 'Frontier',             parentCanvasId: 'main', nodes: frontierNodes,         edges: frontierEdges         },
  regulation:       { id: 'regulation',        title: 'Regulation',           parentCanvasId: 'main', nodes: regulationNodes,       edges: regulationEdges       },

  // ── Existing chain canvases (now under pillar canvases) ───────────────────
  btc:     { id: 'btc',     title: 'Bitcoin',                parentCanvasId: 'chains', nodes: btcNodes,     edges: btcEdges     },
  eth:     { id: 'eth',     title: 'Ethereum Ecosystem',     parentCanvasId: 'chains', nodes: ethNodes,     edges: ethEdges     },
  sol:     { id: 'sol',     title: 'Solana Ecosystem',       parentCanvasId: 'chains', nodes: solNodes,     edges: solEdges     },
  monad:   { id: 'monad',   title: 'Monad',                  parentCanvasId: 'chains', nodes: monadNodes,   edges: monadEdges   },
  base:    { id: 'base',    title: 'Base Ecosystem',         parentCanvasId: 'chains', nodes: baseNodes,    edges: baseEdges    },
  ton:     { id: 'ton',     title: 'TON Ecosystem',          parentCanvasId: 'chains', nodes: tonNodes,     edges: tonEdges     },
  cosmos:  { id: 'cosmos',  title: 'Cosmos Ecosystem',       parentCanvasId: 'chains', nodes: cosmosNodes,  edges: cosmosEdges  },
  polygon: { id: 'polygon', title: 'Polygon Ecosystem',      parentCanvasId: 'chains', nodes: polygonNodes, edges: polygonEdges },
  avax:    { id: 'avax',    title: 'Avalanche Ecosystem',    parentCanvasId: 'chains', nodes: avaxNodes,    edges: avaxEdges    },
  sui:     { id: 'sui',     title: 'Sui & Aptos',            parentCanvasId: 'chains', nodes: suiNodes,     edges: suiEdges     },
  bnb:     { id: 'bnb',     title: 'BNB Chain Ecosystem',    parentCanvasId: 'chains', nodes: bnbNodes,     edges: bnbEdges     },
  megaeth: { id: 'megaeth', title: 'MegaETH',                parentCanvasId: 'chains', nodes: megaethNodes, edges: megaethEdges },
  rwa:     { id: 'rwa',     title: 'Real World Assets',      parentCanvasId: 'defi',   nodes: rwaNodes,     edges: rwaEdges     },
  payments:{ id: 'payments',title: 'Crypto Payments',        parentCanvasId: 'defi',   nodes: paymentsNodes,edges: paymentsEdges},
  wallets: { id: 'wallets', title: 'Wallets & Identity',     parentCanvasId: 'infrastructure', nodes: walletsNodes, edges: walletsEdges },
};

// ─── Node → Canvas lookup ──────────────────────────────────────────────────

/** Map from node id → { canvasId, nodeData } for all known nodes */
export const NODE_CANVAS_MAP: Record<string, { canvasId: string; data: CanvasNodeData }> = {};

for (const canvas of Object.values(CANVASES)) {
  for (const node of canvas.nodes) {
    NODE_CANVAS_MAP[node.id] = { canvasId: canvas.id, data: node.data as CanvasNodeData };
  }
}
