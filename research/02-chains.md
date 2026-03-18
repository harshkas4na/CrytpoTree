# 02 — Chains: L1s, L2s, and the Modular Stack

> "The infrastructure layer — where code runs and value settles."

## Why This Canvas Matters

This is what CryptoTree already does best. The goal is to **keep all existing chain canvases** but wrap them in a better conceptual framework. Instead of 15 chains on the main canvas, users first see "Chains" → then choose between L1s, L2s, alt-VMs, and modular components.

---

## Canvas Structure

### Main Node: "Chains"
*"Layer 1 blockchains, Layer 2 scaling solutions, and the modular stack"*

### Sub-Nodes (6 category nodes on this canvas):

#### 1. Major L1s
- **Existing canvases to nest here**: Bitcoin, Ethereum, Solana, BNB, Avalanche, Cosmos
- **Missing L1s to add**:
  - Cardano (research-driven, Ouroboros PoS, Plutus smart contracts, $10B+ market cap)
  - Polkadot (parachains, shared security, XCM messaging, JAM upgrade)
  - Near Protocol (sharding pioneer, chain abstraction, AI focus)
  - Tron (stablecoin payments king — 50%+ of USDT runs on Tron)
  - Algorand (pure PoS, State Proofs, institutional focus)
  - Kaspa (fastest PoW chain, BlockDAG architecture, GhostDAG protocol)
- **Organization**: Group by VM type
  - EVM-compatible: Ethereum, BNB, Avalanche C-Chain
  - Move-based: Sui, Aptos (existing canvas)
  - Rust/Wasm: Solana, Near, Polkadot
  - Custom: Bitcoin (Script), Cardano (Plutus), TON (FunC/Tact)
  - Cosmos SDK: Cosmos ecosystem chains

#### 2. Ethereum L2 Ecosystem
- **Existing**: Arbitrum, Optimism, Base, zkSync, StarkNet, Polygon zkEVM, MegaETH
- **Missing**:
  - Scroll (zkEVM, bytecode-level compatibility)
  - Linea (ConsenSys zkEVM)
  - Blast (native yield L2)
  - Mantle (modular L2, treasury-backed)
  - Mode (DeFi-optimized L2 on OP Stack)
  - Taiko (based rollup — decentralized sequencing)
- **Conceptual nodes**:
  - "How Rollups Work" (the core concept)
  - Optimistic vs ZK Rollups (comparison)
  - Rollup Economics (where the fees go)
  - L2 Wars: TVL comparison, TPS race, fee comparison

#### 3. Alt-L2s & Appchains
- **What**: L2s/L3s not on Ethereum, or app-specific chains
- **Nodes**:
  - Cosmos Appchains (Osmosis, dYdX chain, Injective, Sei)
  - Polkadot Parachains (Moonbeam, Acala, Astar)
  - Avalanche Subnets (DeFi Kingdoms, gaming chains)
  - Rollup-as-a-Service (Conduit, Caldera, AltLayer, Gelato)
  - L3s / App-specific rollups (gaming, social, DeFi-specific)

#### 4. Data Availability Layer
- **What**: Where rollup data is stored/proven available
- **Nodes**:
  - Celestia (first modular DA layer, DAS)
  - EigenDA (restaking-secured DA, 100MB/s in V2)
  - Avail (Polygon-origin DA layer)
  - Ethereum Blobs (EIP-4844 / proto-danksharding)
  - Near DA (Near as a DA layer)
  - Comparison: Cost, throughput, security assumptions

#### 5. Shared Sequencers & Execution
- **What**: The emerging layer between L1 and rollups
- **Nodes**:
  - Espresso Systems (shared sequencing)
  - Astria (shared sequencer network)
  - Radius (encrypted mempool sequencing)
  - Based Rollups (using L1 proposers as sequencers)
  - Execution environments (MoveVM, SVM, FuelVM, WASM)

#### 6. The Modular Stack (Conceptual)
- **What**: How all the layers fit together
- **Nodes**:
  - Execution (where txs run)
  - Settlement (where finality happens)
  - Data Availability (where data is stored)
  - Consensus (who orders)
  - Interoperability (how layers talk)
  - Diagram: show how a "modular chain" assembles from these pieces

---

## What Changes for Existing Data

**Keep everything.** Existing chain canvases (btc, eth, sol, etc.) become sub-canvases under this pillar. The only change is the main canvas now has "Chains" as one node instead of 15 chain nodes.

Navigation: Main → Chains → Major L1s → Ethereum → (existing eth sub-canvas)

---

## Cross-Links

| This Node | Links To | Why |
|-----------|----------|-----|
| L2 Rollups | Foundations > ZK Proofs (01) | ZK rollups use SNARKs/STARKs |
| DA Layers | Foundations > Architecture (01) | Part of the modular stack |
| Shared Sequencers | MEV (05) | Sequencer-extractable value |
| L1 Consensus | Foundations > Consensus (01) | Each L1 picks a mechanism |
| L2 Economics | Token Economics (07) | Sequencer revenue, token value |
| Cosmos/Polkadot | Interoperability (09) | IBC, XCM protocols |
| Chain Comparison | DeFi (03) | DeFi lives on these chains |

---

## Research Needed

- [ ] Complete L2 TVL and TPS comparison table (Arbitrum, Base, zkSync, StarkNet, etc.)
- [ ] Modular stack diagram — which real projects fill each layer
- [ ] Missing L1 research: Cardano (Ouroboros), Polkadot (JAM), Near (sharding), Tron (USDT dominance)
- [ ] Rollup-as-a-Service comparison (Conduit vs Caldera vs AltLayer)
- [ ] DA layer comparison with real numbers (cost per MB, throughput, security)
- [ ] Based rollup thesis and Taiko's approach
