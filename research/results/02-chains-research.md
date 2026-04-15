# 02 — Chains Research Results

> Research completed March 2026

---

## 1. L2 TVL and TPS Comparison

### TVL Rankings (as of Q1 2026)

| L2 | TVL | Type | Stack | Native Token |
|----|-----|------|-------|--------------|
| **Arbitrum One** | ~$18B | Optimistic Rollup | Nitro (custom) | ARB |
| **Base** | ~$14B | Optimistic Rollup | OP Stack | None (ETH) |
| **Optimism** | ~$8B | Optimistic Rollup | OP Stack | OP |
| **Blast** | ~$2.5B | Optimistic Rollup | OP Stack (modified) | BLAST |
| **zkSync Era** | ~$1.5B | ZK Rollup | zkSync (custom) | ZK |
| **StarkNet** | ~$1.2B | ZK Rollup | Cairo/SHARP | STRK |
| **Mantle** | ~$1.5B | Optimistic Rollup | OP Stack (modified) | MNT |
| **Scroll** | ~$900M | ZK Rollup | zkEVM (bytecode-level) | SCR |
| **Linea** | ~$800M | ZK Rollup | ConsenSys zkEVM | None |
| **Polygon zkEVM** | ~$400M | ZK Rollup | Polygon CDK | POL |
| **MegaETH** | Testnet | Real-time Blockchain | Custom | None yet |
| **Taiko** | ~$200M | Based Rollup | Taiko (ZK) | TAIKO |

### TPS Comparison (Observed / Theoretical Max)

| L2 | Current Avg TPS | Theoretical Max | Block Time |
|----|----------------|-----------------|------------|
| Arbitrum One | 40-60 | 4,000+ | 250ms |
| Base | 30-80 | 2,000+ | 2s |
| Optimism | 15-30 | 2,000+ | 2s |
| zkSync Era | 10-30 | 2,000+ | 1-2s |
| StarkNet | 10-30 | 500+ (improving) | 30-60s |
| Scroll | 5-20 | 1,000+ | 3s |
| MegaETH | Claims 100K+ | 100,000 (real-time) | 10ms target |

### Key Insights
- **Arbitrum dominates** with ~$18B TVL, driven by DeFi (GMX, Camelot) and gaming.
- **Base grew explosively** in 2024-2025, powered by Coinbase onboarding, Farcaster ecosystem, and memecoin activity.
- **ZK rollups still lag** in TVL vs optimistic rollups, but are catching up technically.
- **Real TPS** is much lower than theoretical because demand hasn't reached capacity yet.

---

## 2. Modular Stack — Real Projects by Layer

```
┌─────────────────────────────────────────────────────────────┐
│  APPLICATIONS                                                │
│  DeFi, NFTs, Gaming, Social, Payments                       │
├─────────────────────────────────────────────────────────────┤
│  EXECUTION (where transactions are processed)                │
│  • EVM: Arbitrum, Base, Optimism, zkSync, Scroll, Blast     │
│  • SVM: Eclipse (Solana VM on Ethereum DA)                   │
│  • MoveVM: Movement Labs (Move on Ethereum)                  │
│  • FuelVM: Fuel Network (custom UTXO-based VM)               │
│  • Cairo: StarkNet                                           │
├─────────────────────────────────────────────────────────────┤
│  SETTLEMENT (where finality is established)                  │
│  • Ethereum (the dominant settlement layer)                  │
│  • Bitcoin (emerging via BitVM)                               │
│  • Cosmos Hub (for Cosmos ecosystem)                         │
├─────────────────────────────────────────────────────────────┤
│  SEQUENCING (who orders transactions)                        │
│  • Centralized: Most L2s (single sequencer)                  │
│  • Shared: Espresso, Astria, Radius                          │
│  • Based: Taiko (Ethereum L1 proposers sequence)             │
├─────────────────────────────────────────────────────────────┤
│  DATA AVAILABILITY (where tx data is posted)                 │
│  • Ethereum Blobs (EIP-4844) — most secure                   │
│  • Celestia — first modular DA, DAS                          │
│  • EigenDA — restaking-secured, high throughput              │
│  • Avail — Polygon-origin, light client focus                │
│  • Near DA — leverages Near's sharding                       │
├─────────────────────────────────────────────────────────────┤
│  CONSENSUS (who agrees on ordering and validity)             │
│  • Ethereum PoS (Gasper = Casper FFG + LMD GHOST)           │
│  • Tendermint/CometBFT (Cosmos chains)                       │
│  • Narwhal/Bullshark (Sui, Aptos)                            │
│  • Solana Tower BFT                                          │
├─────────────────────────────────────────────────────────────┤
│  INTEROPERABILITY (how layers communicate)                   │
│  • LayerZero, CCIP, Axelar, Wormhole, Hyperlane            │
│  • IBC (Cosmos), XCM (Polkadot)                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Missing L1 Research

### Cardano
- **Consensus**: Ouroboros Praos — provably secure PoS, epoch-based leader selection
- **Smart Contracts**: Plutus (Haskell-based), Aiken (newer, Rust-like), Marlowe (financial contracts DSL)
- **Architecture**: Extended UTXO (eUTXO) model — combines UTXO predictability with smart contract capabilities
- **Scalability**: Hydra (L2 heads — isomorphic state channels, 1M TPS theoretical per head)
- **TVL**: ~$500M (growing with DeFi ecosystem — Minswap, SundaeSwap, Liqwid)
- **Market Cap**: ~$15-20B
- **Key Differentiator**: Research-first approach, peer-reviewed papers, formal verification emphasis
- **Governance**: Voltaire era — on-chain governance via CIP-1694, Project Catalyst ($1B+ treasury)

### Polkadot
- **Architecture**: Relay Chain + Parachains (up to 100 parallel chains sharing security)
- **Consensus**: GRANDPA (finality) + BABE (block production) — hybrid
- **Cross-chain**: XCM (Cross-Consensus Messaging) for parachain communication
- **JAM Upgrade (2025-2026)**: Join-Accumulate Machine — replaces relay chain with a more flexible, general-purpose machine. Enables "cores" that can run any workload (not just parachains). Designed by Gavin Wood.
- **Key Parachains**: Moonbeam (EVM), Acala (DeFi hub), Astar (multi-VM), Phala (privacy compute)
- **TVL**: ~$1B across ecosystem
- **Staking**: ~55% of DOT staked, NPoS (Nominated Proof of Stake)

### Near Protocol
- **Architecture**: Nightshade sharding — dynamically splits network into shards based on demand
- **Consensus**: Doomslug (block production) + Nightshade (finality)
- **Key Features**:
  - Chain Abstraction (chain signatures — sign txs on any chain from NEAR account)
  - Account model with human-readable names (alice.near)
  - Async sharding (true horizontal scaling)
- **AI Focus**: NEAR AI — building AI agents with on-chain coordination
- **TVL**: ~$500M
- **Developer Ecosystem**: Rust and JavaScript SDKs, ~1,000 monthly active devs
- **DA**: Near DA — offering data availability for L2s at low cost

### Tron
- **USDT Dominance**: Hosts 50%+ of all USDT (~$30B+). Tron processes more stablecoin transfers than any other chain.
- **Consensus**: DPoS with 27 Super Representatives
- **Architecture**: EVM-compatible (Solidity smart contracts)
- **Key Metrics**: 200M+ accounts, 8B+ total transactions, processes ~$15B+ daily in USDT transfers
- **Why It Matters**: Tron is the payment rail for emerging markets — cheap ($0.50 fee) and fast stablecoin transfers
- **Controversy**: Justin Sun's leadership, regulatory scrutiny, SEC lawsuit (settled)
- **TVL**: ~$8B (mostly USDT, JustLend, SunSwap)

---

## 4. Rollup-as-a-Service (RaaS) Comparison

| Provider | Stack Support | Key Customers | Pricing | Differentiator |
|----------|--------------|---------------|---------|----------------|
| **Conduit** | OP Stack, Arbitrum Orbit | Zora, Aevo, Proof of Play | $3K-$10K/month | Easiest UX, "Heroku for rollups", 1-click deploy |
| **Caldera** | OP Stack, Arbitrum Orbit, ZK Stack | Manta, RARI Chain, Treasure | Similar range | Metalayer (shared sequencing across their rollups), custom chains |
| **AltLayer** | OP Stack, Arbitrum Orbit, ZK Stack, Polygon CDK | Xai, Dodo, Cometh | Token-gated (ALT) | Restaked rollups (EigenLayer AVS), flash layers (ephemeral rollups) |
| **Gelato** | OP Stack, Arbitrum Orbit, Polygon CDK | Astar zkEVM, Lisk | $3K-$20K/month | Full-stack (RaaS + relay + functions + oracles) |
| **Stackr** | Custom micro-rollups | Various | Varies | App-specific micro-rollups, not general-purpose |

### Key Trends
- **RaaS commoditizes rollup deployment** — spinning up an L2/L3 now takes hours, not months
- **Hundreds of rollups** now live (500+ by early 2026), many using RaaS providers
- **Differentiation shifting** to sequencing (shared vs dedicated), DA choice, and interop features
- **Cost**: Running a rollup costs ~$3K-$20K/month in infrastructure + DA posting fees

---

## 5. Data Availability Layer Comparison

| DA Layer | Cost per MB | Throughput | Security Model | Chains Supported |
|----------|-----------|------------|----------------|------------------|
| **Ethereum Blobs** (EIP-4844) | ~$0.01-$1.00 (varies with demand) | ~0.75 MB/block (3 blobs × 128KB), 6 blobs target post-Pectra | Ethereum full security | Ethereum rollups |
| **Celestia** | ~$0.001-$0.01 per MB | 6.67 MB/s (2MB blocks, 12s) | Own validator set (100+), DAS | Any chain |
| **EigenDA** | ~$0.001 per MB | 10 MB/s (V1), 100 MB/s target (V2) | Restaked ETH ($15B+) | EVM rollups primarily |
| **Avail** | ~$0.001-$0.005 per MB | 4 MB/block target | Own validator set, DAS, KZG commitments | Any chain |
| **Near DA** | ~$0.0003-$0.001 per MB | 4MB/s+ | Near's 400+ validators | Any chain |

### Key Insights
- **Ethereum blobs** (EIP-4844) dropped L2 fees by 90%+ when launched in March 2024. Pectra upgrade (2025) increases blob count.
- **Celestia** pioneered modular DA. Its DAS (Data Availability Sampling) lets light nodes verify DA without downloading full blocks.
- **EigenDA** leverages $15B+ in restaked ETH for security — V2 targets 100 MB/s throughput.
- **Cost war**: Alt-DA layers are 10-100x cheaper than Ethereum blobs, but with weaker security assumptions.
- **The debate**: Should rollups post data to Ethereum (maximum security) or alt-DA (cheaper)? "Validiums" use off-chain DA, "rollups" use on-chain DA.

---

## 6. Based Rollups & Taiko's Approach

### What Are Based Rollups?
- A "based rollup" (coined by Justin Drake, Ethereum researcher) uses **Ethereum L1 proposers as its sequencer** instead of a centralized sequencer.
- L1 validators include L2 transactions in their blocks, inheriting Ethereum's decentralization and censorship resistance.

### Benefits
- **No centralized sequencer** — eliminates single point of failure and censorship risk
- **Atomic composability** with L1 — L1 and L2 transactions in the same block
- **Shared security** — inherits Ethereum's full validator set
- **Liveness guaranteed** — as long as Ethereum produces blocks, the rollup works
- **Simpler design** — no need for separate sequencer infrastructure

### Tradeoffs
- **Slower block times** — limited to Ethereum's 12s blocks (vs sub-second for centralized sequencers)
- **MEV leakage** — L1 proposers capture MEV from L2 transactions
- **Pre-confirmation latency** — users don't get fast soft confirmations
- **Revenue model** — no sequencer fees to capture (challenging for tokenomics)

### Taiko's Implementation
- **Type-1 zkEVM**: Aims for full Ethereum-equivalence (not just EVM-equivalence)
- **Based sequencing**: Uses Ethereum L1 validators to propose Taiko blocks
- **Contestable rollup**: Multiple provers can contest invalid proofs
- **Based contestable rollup (BCR)**: Combines based sequencing with a multi-proof system
- **Multi-proof**: Supports SGX (TEE), ZK, and optimistic proofs — if any disagree, a higher-tier proof resolves
- **Booster rollups**: Planned feature to let L2 execution access L1 state directly
- **TVL**: ~$200M, growing as the based rollup thesis gains traction
- **TAIKO token**: Launched 2024, used for bonding by proposers and provers
