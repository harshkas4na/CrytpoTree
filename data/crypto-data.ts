export interface CryptoNodeData {
  [key: string]: any;
  id: string;
  parentId: string | null;
  label: string;
  description: string;
  category: 'core' | 'chain-group' | 'chain' | 'infra' | 'primitive' | 'player';
  dependencies: string[];
}

export const initialNodes: CryptoNodeData[] = [
  {
    "id": "root",
    "parentId": null,
    "label": "Computer Science Foundations",
    "description": "Core CS concepts that underpin all blockchain systems",
    "category": "core",
    "dependencies": []
  },
  {
    "id": "cryptography",
    "parentId": "root",
    "label": "Cryptography",
    "description": "Mathematical primitives for securing and verifying blockchain data",
    "category": "core",
    "dependencies": [
      "root"
    ]
  },
  {
    "id": "hash-functions",
    "parentId": "cryptography",
    "label": "Hash Functions",
    "description": "One-way functions (SHA-256, Keccak) used for content addressing and mining",
    "category": "core",
    "dependencies": [
      "cryptography"
    ]
  },
  {
    "id": "public-key-crypto",
    "parentId": "cryptography",
    "label": "Public Key Cryptography",
    "description": "Asymmetric encryption (ECDSA, EdDSA) enabling wallet ownership and signatures",
    "category": "core",
    "dependencies": [
      "cryptography"
    ]
  },
  {
    "id": "merkle-trees",
    "parentId": "cryptography",
    "label": "Merkle Trees",
    "description": "Hash tree structures for efficient state verification and light clients",
    "category": "core",
    "dependencies": [
      "cryptography"
    ]
  },
  {
    "id": "zk-cryptography",
    "parentId": "cryptography",
    "label": "Zero-Knowledge Proofs",
    "description": "Cryptographic protocols (SNARKs, STARKs) for proving computation without revealing data",
    "category": "core",
    "dependencies": [
      "cryptography"
    ]
  },
  {
    "id": "distributed-systems",
    "parentId": "root",
    "label": "Distributed Systems",
    "description": "Network architectures and state management across untrusted nodes",
    "category": "core",
    "dependencies": [
      "root"
    ]
  },
  {
    "id": "p2p-networks",
    "parentId": "distributed-systems",
    "label": "Peer-to-Peer Networks",
    "description": "Decentralized network topology with gossip protocols for transaction propagation",
    "category": "core",
    "dependencies": [
      "distributed-systems"
    ]
  },
  {
    "id": "state-machines",
    "parentId": "distributed-systems",
    "label": "State Machines",
    "description": "Deterministic transition functions mapping transactions to new blockchain states",
    "category": "core",
    "dependencies": [
      "distributed-systems"
    ]
  },
  {
    "id": "consensus-mechanisms",
    "parentId": "distributed-systems",
    "label": "Consensus Mechanisms",
    "description": "Protocols for achieving agreement on transaction ordering in adversarial environments",
    "category": "core",
    "dependencies": [
      "distributed-systems"
    ]
  },
  {
    "id": "pow",
    "parentId": "consensus-mechanisms",
    "label": "Proof of Work (PoW)",
    "description": "Nakamoto consensus using computational puzzles for Sybil resistance",
    "category": "core",
    "dependencies": [
      "consensus-mechanisms"
    ]
  },
  {
    "id": "pos",
    "parentId": "consensus-mechanisms",
    "label": "Proof of Stake (PoS)",
    "description": "Economic security through staked capital and slashing conditions",
    "category": "core",
    "dependencies": [
      "consensus-mechanisms"
    ]
  },
  {
    "id": "bft",
    "parentId": "consensus-mechanisms",
    "label": "Byzantine Fault Tolerance",
    "description": "Classical consensus (PBFT, Tendermint) with finality guarantees",
    "category": "core",
    "dependencies": [
      "consensus-mechanisms"
    ]
  },
  {
    "id": "blockchain-architecture",
    "parentId": "root",
    "label": "Blockchain Architecture",
    "description": "Structural design patterns for scaling and modularity",
    "category": "chain-group",
    "dependencies": [
      "root"
    ]
  },
  {
    "id": "monolithic",
    "parentId": "blockchain-architecture",
    "label": "Monolithic Chains",
    "description": "Single-layer architectures handling execution, consensus, and data availability together",
    "category": "chain-group",
    "dependencies": [
      "blockchain-architecture"
    ]
  },
  {
    "id": "modular",
    "parentId": "blockchain-architecture",
    "label": "Modular Chains",
    "description": "Separation of execution, consensus, and DA into specialized layers",
    "category": "chain-group",
    "dependencies": [
      "blockchain-architecture"
    ]
  },
  {
    "id": "layer1",
    "parentId": "modular",
    "label": "Layer 1 (Settlement)",
    "description": "Base layer providing security and final settlement guarantees",
    "category": "chain-group",
    "dependencies": [
      "modular"
    ]
  },
  {
    "id": "layer2",
    "parentId": "modular",
    "label": "Layer 2 (Execution)",
    "description": "Off-chain execution layers that inherit L1 security through proofs or fraud detection",
    "category": "chain-group",
    "dependencies": [
      "modular"
    ]
  },
  {
    "id": "optimistic-rollups",
    "parentId": "layer2",
    "label": "Optimistic Rollups",
    "description": "L2s assuming valid execution with fraud proof challenge periods (7-day withdrawal)",
    "category": "chain-group",
    "dependencies": [
      "layer2"
    ]
  },
  {
    "id": "zk-rollups",
    "parentId": "layer2",
    "label": "ZK Rollups",
    "description": "L2s using validity proofs for instant finality and cryptographic execution guarantees",
    "category": "chain-group",
    "dependencies": [
      "layer2"
    ]
  },
  {
    "id": "da-layer-concept",
    "parentId": "modular",
    "label": "Data Availability Layer",
    "description": "Specialized networks ensuring transaction data is published and retrievable",
    "category": "chain-group",
    "dependencies": [
      "modular"
    ]
  },
  {
    "id": "bitcoin",
    "parentId": "monolithic",
    "label": "Bitcoin",
    "description": "First PoW blockchain with UTXO model and limited scripting (Script)",
    "category": "chain",
    "dependencies": [
      "monolithic"
    ]
  },
  {
    "id": "ethereum-l1",
    "parentId": "layer1",
    "label": "Ethereum",
    "description": "PoS L1 with EVM execution, account model, and smart contract programmability",
    "category": "chain",
    "dependencies": [
      "layer1"
    ]
  },
  {
    "id": "bnb-chain",
    "parentId": "layer1",
    "label": "BNB Chain",
    "description": "EVM-compatible chain with PoSA consensus optimized for high throughput",
    "category": "chain",
    "dependencies": [
      "layer1"
    ]
  },
  {
    "id": "polygon-pos",
    "parentId": "layer1",
    "label": "Polygon PoS",
    "description": "EVM sidechain with Ethereum checkpointing for periodic finality",
    "category": "chain",
    "dependencies": [
      "layer1"
    ]
  },
  {
    "id": "avalanche",
    "parentId": "layer1",
    "label": "Avalanche",
    "description": "Subnet architecture with DAG-based Snowman consensus for sub-second finality",
    "category": "chain",
    "dependencies": [
      "layer1"
    ]
  },
  {
    "id": "solana",
    "parentId": "monolithic",
    "label": "Solana",
    "description": "High-throughput PoS chain with Proof of History and parallel execution (Sealevel)",
    "category": "chain",
    "dependencies": [
      "monolithic"
    ]
  },
  {
    "id": "cosmos",
    "parentId": "monolithic",
    "label": "Cosmos Hub",
    "description": "Tendermint BFT chain with IBC for cross-chain communication",
    "category": "chain",
    "dependencies": [
      "monolithic"
    ]
  },
  {
    "id": "polkadot",
    "parentId": "monolithic",
    "label": "Polkadot",
    "description": "Relay chain coordinating heterogeneous parachains with shared security",
    "category": "chain",
    "dependencies": [
      "monolithic"
    ]
  },
  {
    "id": "sui",
    "parentId": "monolithic",
    "label": "Sui",
    "description": "Object-centric blockchain using Move language with parallel transaction execution",
    "category": "chain",
    "dependencies": [
      "monolithic"
    ]
  },
  {
    "id": "aptos",
    "parentId": "monolithic",
    "label": "Aptos",
    "description": "Move-based L1 with Block-STM for parallel execution and low latency",
    "category": "chain",
    "dependencies": [
      "monolithic"
    ]
  },
  {
    "id": "near",
    "parentId": "monolithic",
    "label": "NEAR Protocol",
    "description": "Sharded PoS chain with Nightshade consensus and account-based model",
    "category": "chain",
    "dependencies": [
      "monolithic"
    ]
  },
  {
    "id": "arbitrum",
    "parentId": "optimistic-rollups",
    "label": "Arbitrum One",
    "description": "EVM-compatible optimistic rollup with interactive fraud proofs",
    "category": "chain",
    "dependencies": [
      "optimistic-rollups"
    ]
  },
  {
    "id": "arbitrum-nova",
    "parentId": "optimistic-rollups",
    "label": "Arbitrum Nova",
    "description": "AnyTrust chain using data availability committee for gaming and social apps",
    "category": "chain",
    "dependencies": [
      "optimistic-rollups"
    ]
  },
  {
    "id": "optimism",
    "parentId": "optimistic-rollups",
    "label": "Optimism",
    "description": "EVM-equivalent optimistic rollup with single-round fraud proofs (OP Stack)",
    "category": "chain",
    "dependencies": [
      "optimistic-rollups"
    ]
  },
  {
    "id": "base",
    "parentId": "optimistic-rollups",
    "label": "Base",
    "description": "Coinbase-incubated OP Stack rollup focusing on consumer apps",
    "category": "chain",
    "dependencies": [
      "optimistic-rollups"
    ]
  },
  {
    "id": "blast",
    "parentId": "optimistic-rollups",
    "label": "Blast",
    "description": "OP Stack rollup with native yield for ETH and stablecoins",
    "category": "chain",
    "dependencies": [
      "optimistic-rollups"
    ]
  },
  {
    "id": "zksync",
    "parentId": "zk-rollups",
    "label": "zkSync Era",
    "description": "ZK rollup with PLONK proofs and custom zkEVM implementation",
    "category": "chain",
    "dependencies": [
      "zk-rollups"
    ]
  },
  {
    "id": "starknet",
    "parentId": "zk-rollups",
    "label": "StarkNet",
    "description": "STARK-based rollup using Cairo language for provable computation",
    "category": "chain",
    "dependencies": [
      "zk-rollups"
    ]
  },
  {
    "id": "polygon-zkevm",
    "parentId": "zk-rollups",
    "label": "Polygon zkEVM",
    "description": "EVM-equivalent ZK rollup using cryptographic EVM emulation",
    "category": "chain",
    "dependencies": [
      "zk-rollups"
    ]
  },
  {
    "id": "linea",
    "parentId": "zk-rollups",
    "label": "Linea",
    "description": "ConsenSys zkEVM rollup with lattice-based proofs",
    "category": "chain",
    "dependencies": [
      "zk-rollups"
    ]
  },
  {
    "id": "scroll",
    "parentId": "zk-rollups",
    "label": "Scroll",
    "description": "Bytecode-level zkEVM with GPU-accelerated proof generation",
    "category": "chain",
    "dependencies": [
      "zk-rollups"
    ]
  },
  {
    "id": "celestia",
    "parentId": "da-layer-concept",
    "label": "Celestia",
    "description": "Modular DA layer using data availability sampling for scalable storage",
    "category": "chain",
    "dependencies": [
      "da-layer-concept"
    ]
  },
  {
    "id": "eigenda",
    "parentId": "da-layer-concept",
    "label": "EigenDA",
    "description": "Restaking-based DA service built on EigenLayer with erasure coding",
    "category": "chain",
    "dependencies": [
      "da-layer-concept"
    ]
  },
  {
    "id": "avail",
    "parentId": "da-layer-concept",
    "label": "Avail",
    "description": "Modular DA layer with validity proofs and KZG commitments",
    "category": "chain",
    "dependencies": [
      "da-layer-concept"
    ]
  },
  {
    "id": "infrastructure",
    "parentId": "root",
    "label": "Infrastructure & Tooling",
    "description": "Developer tools and services for building and interacting with blockchains",
    "category": "infra",
    "dependencies": [
      "root"
    ]
  },
  {
    "id": "wallets",
    "parentId": "infrastructure",
    "label": "Wallets",
    "description": "Key management and transaction signing interfaces",
    "category": "infra",
    "dependencies": [
      "infrastructure"
    ]
  },
  {
    "id": "eoa-wallets",
    "parentId": "wallets",
    "label": "EOA Wallets",
    "description": "Externally Owned Accounts controlled by private keys",
    "category": "infra",
    "dependencies": [
      "wallets"
    ]
  },
  {
    "id": "metamask",
    "parentId": "eoa-wallets",
    "label": "MetaMask",
    "description": "Browser extension wallet supporting EVM chains with Snaps extensibility",
    "category": "player",
    "dependencies": [
      "eoa-wallets"
    ]
  },
  {
    "id": "phantom",
    "parentId": "eoa-wallets",
    "label": "Phantom",
    "description": "Multi-chain wallet with native Solana and EVM support",
    "category": "player",
    "dependencies": [
      "eoa-wallets"
    ]
  },
  {
    "id": "rabby",
    "parentId": "eoa-wallets",
    "label": "Rabby",
    "description": "Multi-chain wallet with pre-transaction simulation and risk detection",
    "category": "player",
    "dependencies": [
      "eoa-wallets"
    ]
  },
  {
    "id": "smart-contract-wallets",
    "parentId": "wallets",
    "label": "Smart Contract Wallets",
    "description": "Programmable accounts with social recovery and session keys (ERC-4337)",
    "category": "infra",
    "dependencies": [
      "wallets"
    ]
  },
  {
    "id": "safe",
    "parentId": "smart-contract-wallets",
    "label": "Safe (Gnosis Safe)",
    "description": "Multi-signature smart contract wallet with modular architecture",
    "category": "player",
    "dependencies": [
      "smart-contract-wallets"
    ]
  },
  {
    "id": "argent",
    "parentId": "smart-contract-wallets",
    "label": "Argent",
    "description": "Mobile-first smart wallet with guardians and gasless transactions",
    "category": "player",
    "dependencies": [
      "smart-contract-wallets"
    ]
  },
  {
    "id": "embedded-wallets",
    "parentId": "wallets",
    "label": "Embedded Wallets",
    "description": "Application-embedded wallets abstracting key management for users",
    "category": "infra",
    "dependencies": [
      "wallets"
    ]
  },
  {
    "id": "privy",
    "parentId": "embedded-wallets",
    "label": "Privy",
    "description": "Embedded wallet SDK with social login and progressive custody",
    "category": "player",
    "dependencies": [
      "embedded-wallets"
    ]
  },
  {
    "id": "dynamic",
    "parentId": "embedded-wallets",
    "label": "Dynamic",
    "description": "Wallet connection and embedded wallet solution with smart wallet support",
    "category": "player",
    "dependencies": [
      "embedded-wallets"
    ]
  },
  {
    "id": "oracles",
    "parentId": "infrastructure",
    "label": "Oracles",
    "description": "Off-chain data feeds bringing real-world information on-chain",
    "category": "infra",
    "dependencies": [
      "infrastructure"
    ]
  },
  {
    "id": "push-oracles",
    "parentId": "oracles",
    "label": "Push Oracles",
    "description": "Oracles that actively push data updates to smart contracts on-chain",
    "category": "infra",
    "dependencies": [
      "oracles"
    ]
  },
  {
    "id": "chainlink",
    "parentId": "push-oracles",
    "label": "Chainlink",
    "description": "Decentralized oracle network for price feeds, VRF, and off-chain computation (CCIP)",
    "category": "player",
    "dependencies": [
      "push-oracles"
    ]
  },
  {
    "id": "api3",
    "parentId": "push-oracles",
    "label": "API3",
    "description": "First-party oracle solution with dAPIs signed directly by data providers",
    "category": "player",
    "dependencies": [
      "push-oracles"
    ]
  },
  {
    "id": "pull-oracles",
    "parentId": "oracles",
    "label": "Pull Oracles",
    "description": "Oracles where contracts pull signed data on-demand from off-chain sources",
    "category": "infra",
    "dependencies": [
      "oracles"
    ]
  },
  {
    "id": "pyth",
    "parentId": "pull-oracles",
    "label": "Pyth Network",
    "description": "Low-latency oracle publishing continuous price updates from market makers",
    "category": "player",
    "dependencies": [
      "pull-oracles"
    ]
  },
  {
    "id": "chronicle",
    "parentId": "pull-oracles",
    "label": "Chronicle Protocol",
    "description": "Pull-based oracle with validator signatures for price data",
    "category": "player",
    "dependencies": [
      "pull-oracles"
    ]
  },
  {
    "id": "rpc-providers",
    "parentId": "infrastructure",
    "label": "RPC Providers",
    "description": "JSON-RPC endpoints for reading chain state and broadcasting transactions",
    "category": "infra",
    "dependencies": [
      "infrastructure"
    ]
  },
  {
    "id": "alchemy",
    "parentId": "rpc-providers",
    "label": "Alchemy",
    "description": "Enhanced RPC with webhooks, trace APIs, and NFT indexing",
    "category": "player",
    "dependencies": [
      "rpc-providers"
    ]
  },
  {
    "id": "infura",
    "parentId": "rpc-providers",
    "label": "Infura",
    "description": "Managed Ethereum nodes with IPFS and layer-2 support",
    "category": "player",
    "dependencies": [
      "rpc-providers"
    ]
  },
  {
    "id": "quicknode",
    "parentId": "rpc-providers",
    "label": "QuickNode",
    "description": "Multi-chain RPC provider with marketplace add-ons and dedicated nodes",
    "category": "player",
    "dependencies": [
      "rpc-providers"
    ]
  },
  {
    "id": "indexers",
    "parentId": "infrastructure",
    "label": "Indexers & Subgraphs",
    "description": "Services for querying and transforming blockchain data efficiently",
    "category": "infra",
    "dependencies": [
      "infrastructure"
    ]
  },
  {
    "id": "the-graph",
    "parentId": "indexers",
    "label": "The Graph",
    "description": "Decentralized protocol for indexing and GraphQL querying of blockchain data",
    "category": "player",
    "dependencies": [
      "indexers"
    ]
  },
  {
    "id": "dune",
    "parentId": "indexers",
    "label": "Dune Analytics",
    "description": "SQL-based blockchain analytics with community-built dashboards",
    "category": "player",
    "dependencies": [
      "indexers"
    ]
  },
  {
    "id": "goldsky",
    "parentId": "indexers",
    "label": "Goldsky",
    "description": "Real-time subgraph indexing with mirror and pipeline features",
    "category": "player",
    "dependencies": [
      "indexers"
    ]
  },
  {
    "id": "interoperability",
    "parentId": "infrastructure",
    "label": "Interoperability & Bridges",
    "description": "Protocols for moving assets and messages across different blockchains",
    "category": "infra",
    "dependencies": [
      "infrastructure"
    ]
  },
  {
    "id": "layerzero",
    "parentId": "interoperability",
    "label": "LayerZero",
    "description": "Omnichain messaging protocol using ultra-light nodes and decentralized verification",
    "category": "player",
    "dependencies": [
      "interoperability"
    ]
  },
  {
    "id": "wormhole",
    "parentId": "interoperability",
    "label": "Wormhole",
    "description": "Generic message passing with Guardian network for cross-chain communication",
    "category": "player",
    "dependencies": [
      "interoperability"
    ]
  },
  {
    "id": "axelar",
    "parentId": "interoperability",
    "label": "Axelar",
    "description": "Cross-chain communication using Cosmos SDK and proof-of-stake validators",
    "category": "player",
    "dependencies": [
      "interoperability"
    ]
  },
  {
    "id": "ccip",
    "parentId": "interoperability",
    "label": "Chainlink CCIP",
    "description": "Cross-chain messaging with programmable token transfers and risk management",
    "category": "player",
    "dependencies": [
      "interoperability"
    ]
  },
  {
    "id": "hyperlane",
    "parentId": "interoperability",
    "label": "Hyperlane",
    "description": "Permissionless interoperability with modular security via ISMs",
    "category": "player",
    "dependencies": [
      "interoperability"
    ]
  },
  {
    "id": "canonical-bridges",
    "parentId": "interoperability",
    "label": "Canonical Bridges",
    "description": "Native bridges operated by the chain team with same security as L1",
    "category": "infra",
    "dependencies": [
      "interoperability"
    ]
  },
  {
    "id": "third-party-bridges",
    "parentId": "interoperability",
    "label": "Third-Party Bridges",
    "description": "External bridges using liquidity pools or validator sets",
    "category": "infra",
    "dependencies": [
      "interoperability"
    ]
  },
  {
    "id": "hop-protocol",
    "parentId": "third-party-bridges",
    "label": "Hop Protocol",
    "description": "Rollup-to-rollup bridge using AMM-based bonders for fast withdrawals",
    "category": "player",
    "dependencies": [
      "third-party-bridges"
    ]
  },
  {
    "id": "stargate",
    "parentId": "third-party-bridges",
    "label": "Stargate Finance",
    "description": "Omnichain liquidity transport built on LayerZero with unified pools",
    "category": "player",
    "dependencies": [
      "third-party-bridges"
    ]
  },
  {
    "id": "restaking-infra",
    "parentId": "ethereum-l1",
    "label": "Restaking Infrastructure",
    "description": "Protocols enabling reuse of staked ETH to secure additional services",
    "category": "infra",
    "dependencies": [
      "ethereum-l1"
    ]
  },
  {
    "id": "eigenlayer",
    "parentId": "restaking-infra",
    "label": "EigenLayer",
    "description": "Restaking protocol allowing validators to opt-in to securing AVS middleware",
    "category": "player",
    "dependencies": [
      "restaking-infra"
    ]
  },
  {
    "id": "symbiotic",
    "parentId": "restaking-infra",
    "label": "Symbiotic",
    "description": "Modular restaking protocol with customizable slashing and reward mechanisms",
    "category": "player",
    "dependencies": [
      "restaking-infra"
    ]
  },
  {
    "id": "defi-primitives",
    "parentId": "ethereum-l1",
    "label": "DeFi Primitives",
    "description": "Foundational financial protocols built on programmable blockchains",
    "category": "primitive",
    "dependencies": [
      "ethereum-l1"
    ]
  },
  {
    "id": "dex",
    "parentId": "defi-primitives",
    "label": "Decentralized Exchanges",
    "description": "Non-custodial trading protocols for token swaps",
    "category": "primitive",
    "dependencies": [
      "defi-primitives"
    ]
  },
  {
    "id": "amm",
    "parentId": "dex",
    "label": "Automated Market Makers",
    "description": "Liquidity pool-based DEXs using bonding curves (x*y=k)",
    "category": "primitive",
    "dependencies": [
      "dex"
    ]
  },
  {
    "id": "orderbook-dex",
    "parentId": "dex",
    "label": "Orderbook DEXs",
    "description": "On-chain limit order matching with maker-taker model",
    "category": "primitive",
    "dependencies": [
      "dex"
    ]
  },
  {
    "id": "dex-aggregators",
    "parentId": "dex",
    "label": "DEX Aggregators",
    "description": "Routing protocols that split trades across multiple DEXs for best execution",
    "category": "primitive",
    "dependencies": [
      "dex"
    ]
  },
  {
    "id": "uniswap",
    "parentId": "amm",
    "label": "Uniswap",
    "description": "Leading AMM with concentrated liquidity (v3) and multi-chain deployment",
    "category": "player",
    "dependencies": [
      "amm"
    ]
  },
  {
    "id": "curve",
    "parentId": "amm",
    "label": "Curve Finance",
    "description": "Stableswap AMM optimized for low-slippage trades between pegged assets",
    "category": "player",
    "dependencies": [
      "amm"
    ]
  },
  {
    "id": "balancer",
    "parentId": "amm",
    "label": "Balancer",
    "description": "Multi-token AMM pools with customizable weights and fee structures",
    "category": "player",
    "dependencies": [
      "amm"
    ]
  },
  {
    "id": "pancakeswap",
    "parentId": "amm",
    "label": "PancakeSwap",
    "description": "BNB Chain AMM with v3 concentrated liquidity and gamified features",
    "category": "player",
    "dependencies": [
      "amm"
    ]
  },
  {
    "id": "dydx",
    "parentId": "orderbook-dex",
    "label": "dYdX",
    "description": "Decentralized perps exchange with off-chain orderbook and on-chain settlement",
    "category": "player",
    "dependencies": [
      "orderbook-dex"
    ]
  },
  {
    "id": "1inch",
    "parentId": "dex-aggregators",
    "label": "1inch",
    "description": "DEX aggregator with Pathfinder algorithm and limit order protocol",
    "category": "player",
    "dependencies": [
      "dex-aggregators"
    ]
  },
  {
    "id": "cowswap",
    "parentId": "dex-aggregators",
    "label": "CoW Swap",
    "description": "MEV-protected DEX using batch auctions and coincidence of wants",
    "category": "player",
    "dependencies": [
      "dex-aggregators"
    ]
  },
  {
    "id": "lending",
    "parentId": "defi-primitives",
    "label": "Lending Protocols",
    "description": "Protocols for borrowing and lending crypto assets",
    "category": "primitive",
    "dependencies": [
      "defi-primitives"
    ]
  },
  {
    "id": "overcollateralized-lending",
    "parentId": "lending",
    "label": "Over-Collateralized Lending",
    "description": "Lending requiring collateral exceeding loan value to prevent defaults",
    "category": "primitive",
    "dependencies": [
      "lending"
    ]
  },
  {
    "id": "undercollateralized-lending",
    "parentId": "lending",
    "label": "Under-Collateralized Lending",
    "description": "Credit-based lending using reputation, delegation, or real-world assets",
    "category": "primitive",
    "dependencies": [
      "lending"
    ]
  },
  {
    "id": "aave",
    "parentId": "overcollateralized-lending",
    "label": "Aave",
    "description": "Multi-chain lending with flash loans, e-modes, and isolated risk pools",
    "category": "player",
    "dependencies": [
      "overcollateralized-lending"
    ]
  },
  {
    "id": "compound",
    "parentId": "overcollateralized-lending",
    "label": "Compound",
    "description": "Algorithmic money market with pooled liquidity and cToken representation",
    "category": "player",
    "dependencies": [
      "overcollateralized-lending"
    ]
  },
  {
    "id": "morpho",
    "parentId": "overcollateralized-lending",
    "label": "Morpho",
    "description": "Lending optimizer matching peer-to-peer before pooled liquidity",
    "category": "player",
    "dependencies": [
      "overcollateralized-lending"
    ]
  },
  {
    "id": "spark",
    "parentId": "overcollateralized-lending",
    "label": "Spark Protocol",
    "description": "MakerDAO lending protocol with DAI-native liquidity provision",
    "category": "player",
    "dependencies": [
      "overcollateralized-lending"
    ]
  },
  {
    "id": "maple",
    "parentId": "undercollateralized-lending",
    "label": "Maple Finance",
    "description": "Institutional credit protocol with pool delegates managing underwriting",
    "category": "player",
    "dependencies": [
      "undercollateralized-lending"
    ]
  },
  {
    "id": "goldfinch",
    "parentId": "undercollateralized-lending",
    "label": "Goldfinch",
    "description": "Decentralized credit protocol for real-world lending without crypto collateral",
    "category": "player",
    "dependencies": [
      "undercollateralized-lending"
    ]
  },
  {
    "id": "stablecoins",
    "parentId": "defi-primitives",
    "label": "Stablecoins",
    "description": "Cryptocurrencies designed to maintain stable value against fiat or other assets",
    "category": "primitive",
    "dependencies": [
      "defi-primitives"
    ]
  },
  {
    "id": "fiat-backed-stables",
    "parentId": "stablecoins",
    "label": "Fiat-Backed Stablecoins",
    "description": "Stablecoins backed 1:1 by reserves of fiat currency in bank accounts",
    "category": "primitive",
    "dependencies": [
      "stablecoins"
    ]
  },
  {
    "id": "usdc",
    "parentId": "fiat-backed-stables",
    "label": "USDC",
    "description": "Circle-issued dollar stablecoin with monthly attestations and regulated reserves",
    "category": "player",
    "dependencies": [
      "fiat-backed-stables"
    ]
  },
  {
    "id": "usdt",
    "parentId": "fiat-backed-stables",
    "label": "Tether (USDT)",
    "description": "Largest stablecoin by market cap with multi-chain deployment",
    "category": "player",
    "dependencies": [
      "fiat-backed-stables"
    ]
  },
  {
    "id": "decentralized-stables",
    "parentId": "stablecoins",
    "label": "Decentralized Stablecoins",
    "description": "Algorithmic or crypto-collateralized stables without central custodian",
    "category": "primitive",
    "dependencies": [
      "stablecoins"
    ]
  },
  {
    "id": "dai",
    "parentId": "decentralized-stables",
    "label": "DAI",
    "description": "MakerDAO stablecoin backed by over-collateralized crypto assets in vaults",
    "category": "player",
    "dependencies": [
      "decentralized-stables"
    ]
  },
  {
    "id": "frax",
    "parentId": "decentralized-stables",
    "label": "FRAX",
    "description": "Fractional-algorithmic stablecoin with dynamic collateralization ratio",
    "category": "player",
    "dependencies": [
      "decentralized-stables"
    ]
  },
  {
    "id": "lusd",
    "parentId": "decentralized-stables",
    "label": "LUSD",
    "description": "Liquity stablecoin with 110% collateral ratio and one-time borrowing fee",
    "category": "player",
    "dependencies": [
      "decentralized-stables"
    ]
  },
  {
    "id": "yield-bearing-stables",
    "parentId": "stablecoins",
    "label": "Yield-Bearing Stablecoins",
    "description": "Stablecoins that accrue yield through backing assets or protocol revenue",
    "category": "primitive",
    "dependencies": [
      "stablecoins"
    ]
  },
  {
    "id": "usde",
    "parentId": "yield-bearing-stables",
    "label": "USDe (Ethena)",
    "description": "Synthetic dollar using delta-neutral positions with staked ETH collateral",
    "category": "player",
    "dependencies": [
      "yield-bearing-stables"
    ]
  },
  {
    "id": "mountain-usdm",
    "parentId": "yield-bearing-stables",
    "label": "USDM",
    "description": "Regulated yield-bearing stablecoin backed by short-term Treasuries",
    "category": "player",
    "dependencies": [
      "yield-bearing-stables"
    ]
  },
  {
    "id": "rwa",
    "parentId": "defi-primitives",
    "label": "Real-World Assets (RWA)",
    "description": "Tokenization of off-chain assets like bonds, real estate, and commodities",
    "category": "primitive",
    "dependencies": [
      "defi-primitives"
    ]
  },
  {
    "id": "ondo",
    "parentId": "rwa",
    "label": "Ondo Finance",
    "description": "Institutional-grade tokenized securities and short-term bond products",
    "category": "player",
    "dependencies": [
      "rwa"
    ]
  },
  {
    "id": "blackrock-buidl",
    "parentId": "rwa",
    "label": "BlackRock BUIDL",
    "description": "Tokenized money market fund providing yield from US Treasuries",
    "category": "player",
    "dependencies": [
      "rwa"
    ]
  },
  {
    "id": "centrifuge",
    "parentId": "rwa",
    "label": "Centrifuge",
    "description": "Protocol for financing real-world assets through tokenized asset pools",
    "category": "player",
    "dependencies": [
      "rwa"
    ]
  },
  {
    "id": "staking-derivatives",
    "parentId": "defi-primitives",
    "label": "Liquid Staking",
    "description": "Tokenized staking positions allowing DeFi composability while earning yield",
    "category": "primitive",
    "dependencies": [
      "defi-primitives"
    ]
  },
  {
    "id": "lido",
    "parentId": "staking-derivatives",
    "label": "Lido",
    "description": "Largest liquid staking provider issuing stETH for staked ETH",
    "category": "player",
    "dependencies": [
      "staking-derivatives"
    ]
  },
  {
    "id": "rocket-pool",
    "parentId": "staking-derivatives",
    "label": "Rocket Pool",
    "description": "Decentralized staking with permissionless node operators and rETH token",
    "category": "player",
    "dependencies": [
      "staking-derivatives"
    ]
  },
  {
    "id": "frax-ether",
    "parentId": "staking-derivatives",
    "label": "Frax Ether (frxETH)",
    "description": "Dual-token liquid staking with sfrxETH accumulating validator rewards",
    "category": "player",
    "dependencies": [
      "staking-derivatives"
    ]
  },
  {
    "id": "derivatives",
    "parentId": "defi-primitives",
    "label": "Derivatives & Perps",
    "description": "Leveraged trading and synthetic exposure without holding underlying assets",
    "category": "primitive",
    "dependencies": [
      "defi-primitives"
    ]
  },
  {
    "id": "perpetuals",
    "parentId": "derivatives",
    "label": "Perpetual Futures",
    "description": "Contracts with no expiry using funding rates to track spot price",
    "category": "primitive",
    "dependencies": [
      "derivatives"
    ]
  },
  {
    "id": "options",
    "parentId": "derivatives",
    "label": "Options Protocols",
    "description": "On-chain options for hedging and speculation with defined risk",
    "category": "primitive",
    "dependencies": [
      "derivatives"
    ]
  },
  {
    "id": "gmx",
    "parentId": "perpetuals",
    "label": "GMX",
    "description": "Decentralized perps using multi-asset liquidity pool (GLP) as counterparty",
    "category": "player",
    "dependencies": [
      "perpetuals"
    ]
  },
  {
    "id": "synthetix",
    "parentId": "perpetuals",
    "label": "Synthetix",
    "description": "Derivatives protocol with debt pool model and atomic swaps",
    "category": "player",
    "dependencies": [
      "perpetuals"
    ]
  },
  {
    "id": "gains-network",
    "parentId": "perpetuals",
    "label": "Gains Network (gTrade)",
    "description": "Synthetic leverage trading with DAI vault and oracle-based execution",
    "category": "player",
    "dependencies": [
      "perpetuals"
    ]
  },
  {
    "id": "vertex",
    "parentId": "perpetuals",
    "label": "Vertex Protocol",
    "description": "Hybrid DEX combining spot AMM and perps orderbook on Arbitrum",
    "category": "player",
    "dependencies": [
      "perpetuals"
    ]
  },
  {
    "id": "ribbon",
    "parentId": "options",
    "label": "Ribbon Finance",
    "description": "Structured products protocol automating options strategies in vaults",
    "category": "player",
    "dependencies": [
      "options"
    ]
  },
  {
    "id": "dopex",
    "parentId": "options",
    "label": "Dopex",
    "description": "Decentralized options exchange with single-staking option vaults (SSOVs)",
    "category": "player",
    "dependencies": [
      "options"
    ]
  },
  {
    "id": "solana-defi",
    "parentId": "solana",
    "label": "Solana DeFi Ecosystem",
    "description": "High-speed DeFi primitives leveraging Solana's parallel execution",
    "category": "primitive",
    "dependencies": [
      "solana"
    ]
  },
  {
    "id": "jupiter",
    "parentId": "solana-defi",
    "label": "Jupiter",
    "description": "Solana DEX aggregator with limit orders and perpetuals",
    "category": "player",
    "dependencies": [
      "solana-defi"
    ]
  },
  {
    "id": "raydium",
    "parentId": "solana-defi",
    "label": "Raydium",
    "description": "AMM on Solana with integrated Serum orderbook liquidity",
    "category": "player",
    "dependencies": [
      "solana-defi"
    ]
  },
  {
    "id": "marinade",
    "parentId": "solana-defi",
    "label": "Marinade Finance",
    "description": "Liquid staking on Solana issuing mSOL with validator delegation",
    "category": "player",
    "dependencies": [
      "solana-defi"
    ]
  },
  {
    "id": "kamino",
    "parentId": "solana-defi",
    "label": "Kamino Finance",
    "description": "Automated liquidity management and leveraged yield strategies on Solana",
    "category": "player",
    "dependencies": [
      "solana-defi"
    ]
  },
  {
    "id": "drift",
    "parentId": "solana-defi",
    "label": "Drift Protocol",
    "description": "Decentralized perpetuals and spot DEX with dynamic AMM on Solana",
    "category": "player",
    "dependencies": [
      "solana-defi"
    ]
  },
  {
    "id": "new-sectors",
    "parentId": "root",
    "label": "Emerging Sectors",
    "description": "Next-generation blockchain use cases beyond traditional DeFi",
    "category": "primitive",
    "dependencies": [
      "root"
    ]
  },
  {
    "id": "depin",
    "parentId": "new-sectors",
    "label": "DePIN (Decentralized Physical Infrastructure)",
    "description": "Crypto-incentivized networks for real-world infrastructure deployment",
    "category": "primitive",
    "dependencies": [
      "new-sectors"
    ]
  },
  {
    "id": "wireless-networks",
    "parentId": "depin",
    "label": "Wireless Networks",
    "description": "Decentralized wireless connectivity using token incentives for coverage",
    "category": "primitive",
    "dependencies": [
      "depin"
    ]
  },
  {
    "id": "helium",
    "parentId": "wireless-networks",
    "label": "Helium",
    "description": "Decentralized wireless network with LoRaWAN and 5G hotspot infrastructure",
    "category": "player",
    "dependencies": [
      "wireless-networks"
    ]
  },
  {
    "id": "mapping-networks",
    "parentId": "depin",
    "label": "Mapping Networks",
    "description": "Crowdsourced mapping data collection using crypto rewards",
    "category": "primitive",
    "dependencies": [
      "depin"
    ]
  },
  {
    "id": "hivemapper",
    "parentId": "mapping-networks",
    "label": "Hivemapper",
    "description": "Decentralized mapping network using dashcams to create street-level imagery",
    "category": "player",
    "dependencies": [
      "mapping-networks"
    ]
  },
  {
    "id": "compute-networks",
    "parentId": "depin",
    "label": "Decentralized Compute",
    "description": "Distributed GPU and compute resource sharing for rendering and AI",
    "category": "primitive",
    "dependencies": [
      "depin"
    ]
  },
  {
    "id": "render",
    "parentId": "compute-networks",
    "label": "Render Network",
    "description": "Decentralized GPU rendering marketplace for 3D graphics and AI workloads",
    "category": "player",
    "dependencies": [
      "compute-networks"
    ]
  },
  {
    "id": "io-net",
    "parentId": "compute-networks",
    "label": "io.net",
    "description": "Decentralized GPU network aggregating underutilized compute for AI training",
    "category": "player",
    "dependencies": [
      "compute-networks"
    ]
  },
  {
    "id": "storage-networks",
    "parentId": "depin",
    "label": "Decentralized Storage",
    "description": "Distributed file storage networks with cryptographic proofs",
    "category": "primitive",
    "dependencies": [
      "depin"
    ]
  },
  {
    "id": "filecoin",
    "parentId": "storage-networks",
    "label": "Filecoin",
    "description": "Decentralized storage with proof-of-spacetime and retrieval markets",
    "category": "player",
    "dependencies": [
      "storage-networks"
    ]
  },
  {
    "id": "arweave",
    "parentId": "storage-networks",
    "label": "Arweave",
    "description": "Permanent storage blockchain using endowment model for perpetual data hosting",
    "category": "player",
    "dependencies": [
      "storage-networks"
    ]
  },
  {
    "id": "ai-crypto",
    "parentId": "new-sectors",
    "label": "AI x Crypto",
    "description": "Intersection of artificial intelligence and blockchain technology",
    "category": "primitive",
    "dependencies": [
      "new-sectors"
    ]
  },
  {
    "id": "decentralized-ai",
    "parentId": "ai-crypto",
    "label": "Decentralized AI Networks",
    "description": "Token-incentivized networks for distributed AI inference and training",
    "category": "primitive",
    "dependencies": [
      "ai-crypto"
    ]
  },
  {
    "id": "bittensor",
    "parentId": "decentralized-ai",
    "label": "Bittensor",
    "description": "Decentralized machine learning network with subnet architecture and consensus",
    "category": "player",
    "dependencies": [
      "decentralized-ai"
    ]
  },
  {
    "id": "akash",
    "parentId": "decentralized-ai",
    "label": "Akash Network",
    "description": "Decentralized cloud compute marketplace for containerized applications",
    "category": "player",
    "dependencies": [
      "decentralized-ai"
    ]
  },
  {
    "id": "fetch-ai",
    "parentId": "decentralized-ai",
    "label": "Fetch.ai",
    "description": "Autonomous economic agents framework for decentralized machine learning",
    "category": "player",
    "dependencies": [
      "decentralized-ai"
    ]
  },
  {
    "id": "ai-agents",
    "parentId": "ai-crypto",
    "label": "AI Agent Frameworks",
    "description": "On-chain AI agents with autonomous decision-making and wallet control",
    "category": "primitive",
    "dependencies": [
      "ai-crypto"
    ]
  },
  {
    "id": "virtuals",
    "parentId": "ai-agents",
    "label": "Virtuals Protocol",
    "description": "Framework for creating and monetizing AI agents with token economies",
    "category": "player",
    "dependencies": [
      "ai-agents"
    ]
  },
  {
    "id": "nfts-gaming",
    "parentId": "new-sectors",
    "label": "NFTs & Gaming",
    "description": "Digital ownership and blockchain-based gaming economies",
    "category": "primitive",
    "dependencies": [
      "new-sectors"
    ]
  },
  {
    "id": "nft-marketplaces",
    "parentId": "nfts-gaming",
    "label": "NFT Marketplaces",
    "description": "Platforms for trading non-fungible tokens and digital collectibles",
    "category": "primitive",
    "dependencies": [
      "nfts-gaming"
    ]
  },
  {
    "id": "opensea",
    "parentId": "nft-marketplaces",
    "label": "OpenSea",
    "description": "Largest NFT marketplace supporting multiple chains and standards",
    "category": "player",
    "dependencies": [
      "nft-marketplaces"
    ]
  },
  {
    "id": "blur",
    "parentId": "nft-marketplaces",
    "label": "Blur",
    "description": "Pro-trader NFT marketplace with aggregated liquidity and zero fees",
    "category": "player",
    "dependencies": [
      "nft-marketplaces"
    ]
  },
  {
    "id": "magic-eden",
    "parentId": "nft-marketplaces",
    "label": "Magic Eden",
    "description": "Multi-chain NFT marketplace with Solana, Bitcoin, and EVM support",
    "category": "player",
    "dependencies": [
      "nft-marketplaces"
    ]
  },
  {
    "id": "gamefi",
    "parentId": "nfts-gaming",
    "label": "GameFi Protocols",
    "description": "Blockchain games with play-to-earn mechanics and NFT assets",
    "category": "primitive",
    "dependencies": [
      "nfts-gaming"
    ]
  },
  {
    "id": "axie-infinity",
    "parentId": "gamefi",
    "label": "Axie Infinity",
    "description": "NFT battler game with breeding mechanics and Ronin L2 sidechain",
    "category": "player",
    "dependencies": [
      "gamefi"
    ]
  },
  {
    "id": "immutable",
    "parentId": "gamefi",
    "label": "Immutable X",
    "description": "ZK rollup purpose-built for NFT and gaming applications with no gas fees",
    "category": "player",
    "dependencies": [
      "gamefi"
    ]
  },
  {
    "id": "socialfi",
    "parentId": "new-sectors",
    "label": "SocialFi",
    "description": "Social networks with tokenized engagement and on-chain identity",
    "category": "primitive",
    "dependencies": [
      "new-sectors"
    ]
  },
  {
    "id": "farcaster",
    "parentId": "socialfi",
    "label": "Farcaster",
    "description": "Decentralized social protocol with client diversity and on-chain identity",
    "category": "player",
    "dependencies": [
      "socialfi"
    ]
  },
  {
    "id": "lens",
    "parentId": "socialfi",
    "label": "Lens Protocol",
    "description": "Composable social graph on Polygon with NFT-based profiles",
    "category": "player",
    "dependencies": [
      "socialfi"
    ]
  },
  {
    "id": "friend-tech",
    "parentId": "socialfi",
    "label": "Friend.tech",
    "description": "Social trading app with tokenized access to creator chatrooms",
    "category": "player",
    "dependencies": [
      "socialfi"
    ]
  }
];

export const initialEdgesData = [];

// Matches the categories in your data (lowercase)
export const categoryColors: Record<CryptoNodeData['category'], string> = {
  'core': '#94a3b8',
  'chain-group': '#64748b',
  'chain': '#3b82f6',
  'infra': '#8b5cf6',
  'primitive': '#f59e0b',
  'player': '#10b981',
};

// Matches the categories in your data (lowercase)
export const categoryLabels: Record<CryptoNodeData['category'], string> = {
  'core': 'Core Tech',
  'chain-group': 'Architecture',
  'chain': 'Chain',
  'infra': 'Infrastructure',
  'primitive': 'Primitive',
  'player': 'Protocol/App',
};
