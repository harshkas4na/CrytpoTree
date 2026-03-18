# Comprehensive Blockchain Research: L2s, L1s, Modular Stack & VM Comparison
> Last updated: March 2026 | Sources linked throughout

---

## 1. Ethereum L2 Comparison Table

### Combined L2 TVL: ~$40–51B (fluctuates; peaked ~$51.5B)

| L2 Network | TVL (est.) | Actual TPS | Daily Txns | Tech Type | Sequencer | Notable Apps |
|---|---|---|---|---|---|---|
| **Arbitrum One** | ~$17–19B (44% share) | 40–60 TPS | ~1.2M | Optimistic Rollup | Centralized | GMX, Aave, Uniswap, Camelot, Radiant |
| **Base** | ~$13–15B (33% share) | ~100+ TPS | ~2–4M | Optimistic Rollup (OP Stack) | Centralized (Coinbase) | Aerodrome, Uniswap, friend.tech, Farcaster |
| **Optimism (OP Mainnet)** | ~$2.5–3B (6% share) | ~130 TPS | ~500K | Optimistic Rollup (OP Stack) | Centralized | Velodrome, Aave, Synthetix, Sonne |
| **zkSync Era** | ~$500–700M | 12–15 TPS | ~200K | ZK Rollup (zkEVM) | Centralized | SyncSwap, Maverick, ZeroLend |
| **StarkNet** | ~$800M | ~127 TPS | ~300K | ZK Rollup (STARK proofs) | Centralized | Ekubo, JediSwap, Nostra, dYdX v4 |
| **Scroll** | ~$500M–1B | ~15 TPS | ~100K | ZK Rollup (zkEVM Type 2) | Centralized | Ambient, Aave, Nuri |
| **Linea** | ~$900M–1.2B | ~15 TPS | ~200K | ZK Rollup (zkEVM, ConsenSys) | Centralized | SyncSwap, Nile, LineaBank |
| **Polygon zkEVM** | ~$50M (sunsetting) | ~7 TPS | ~30K | ZK Rollup (zkEVM Type 2) | Centralized | Being sunset in 2026; migrating to AggLayer |
| **Blast** | ~$55M (collapsed -97%) | ~20 TPS | ~15K | Optimistic Rollup | Centralized | TVL collapsed from $2.7B peak; ecosystem abandoned |
| **Mantle** | ~$1–1.15B | ~30 TPS | ~150K | Optimistic Rollup + DA (EigenDA) | Centralized | Agni Finance, Merchant Moe, Lendle, mETH |
| **Mode** | ~$100–200M | ~15 TPS | ~50K | Optimistic Rollup (OP Stack) | Centralized (via Conduit) | Kim, Ionic, SupSwap |
| **Taiko** | ~$80–140M | ~19 TPS (avg) | ~5M (peak) | ZK Rollup (Based, Type 1 zkEVM) | **Decentralized** (based sequencing) | Panko, TakoTako |
| **MegaETH** | ~$66M (just launched) | 35,000 TPS (tested) | New (Feb 2026 launch) | Optimistic (Streaming EVM) | Centralized | 10ms block time; real-time blockchain |

### Key Takeaway
Base and Arbitrum dominate ~77% of all L2 TVL. Power-law distribution is stark — most L2s saw TVL stagnate or decline after incentive cycles ended. MegaETH is the performance outlier with 100K TPS target and 10ms blocks.

---

## 2. Missing L1 Research

### Cardano (ADA)

| Metric | Value |
|---|---|
| **Consensus** | Ouroboros Praos (PoS); Leios upgrade coming 2026 |
| **Smart Contracts** | Plutus (Haskell-based); V11 hard fork March 2026 |
| **TVL** | ~$1.1B (up from $680M in late 2025) |
| **TPS (current)** | ~5–10 TPS |
| **TPS (Leios target)** | 300–1,000+ TPS, peaks of 10,000 TPS |
| **Hydra Status** | Live; facilitating near-instant micro-transactions for gaming/streaming |
| **Ecosystem** | MinSwap, SundaeSwap, Liqwid, JPG Store; growing DeFi |

**Ouroboros Consensus**: Provably secure PoS protocol. Leios introduces a two-tier block system (input blocks + ranking blocks) to massively increase throughput without sacrificing decentralization.

**Hydra**: Layer 2 scaling solution creating isomorphic state channels. Each Hydra Head can process transactions independently, theoretically adding ~1,000 TPS per head.

---

### Polkadot (DOT)

| Metric | Value |
|---|---|
| **Architecture** | Relay Chain + Parachains (heterogeneous sharding) |
| **Active Parachains** | 65+ (up from 48 in 2023) |
| **Monthly Active Devs** | 450–500 |
| **Cross-chain Messaging** | XCM v4 (Cross-Consensus Messaging) |
| **JAM Upgrade** | Mainnet targeted 2026 |

**Parachains**: Application-specific blockchains that run in parallel, secured by the Relay Chain's shared security. Notable parachains:
- **Moonbeam** — EVM-compatible smart contracts
- **Acala** — DeFi hub (DEX, stablecoin, liquid staking)
- **Astar** — Multi-VM smart contracts (EVM + WASM)
- **Phala Network** — Confidential computing
- **Polkadex** — Orderbook DEX
- **Centrifuge** — Real-world asset tokenization

**XCM (Cross-Consensus Messaging)**: Protocol for cross-chain communication. V4 enables seamless asset transfers and cross-chain smart contract calls between parachains.

**JAM (Join-Accumulate Machine)**: Next-gen core protocol replacing the Relay Chain. Transforms Polkadot from a parachain host into a general-purpose decentralized computer. Represents Polkadot 3.0.

**Polkadot 2.0 (completed 2025)**: Asynchronous Backing, Agile Coretime (on-demand blockspace purchasing), and Elastic Scaling.

---

### Near Protocol (NEAR)

| Metric | Value |
|---|---|
| **Sharding** | Nightshade 3.0 |
| **TPS** | 1,000,000+ TPS (theoretical with sharding) |
| **Finality** | ~0.6 seconds |
| **Fees** | Sub-$0.01 |
| **Key Focus** | Chain Abstraction + AI agents |

**Nightshade Sharding**: Parallelizes the network into multiple shards. Each shard produces "chunks" that are aggregated into blocks. Nightshade 3.0 is the latest iteration, enabling massive parallelism.

**Chain Abstraction**: NEAR's flagship differentiator. The near.com super-app connects 35+ blockchains through a single account abstraction layer, enabling cross-chain swaps and settlement without manual bridging.

**AI Focus**: NEAR Intents ecosystem enables AI agents to perform complex cross-chain operations. NEARCON 2026 theme: "The Internet Wants to Think." Confidential computing stack for secure AI + DeFi.

**Ecosystem Apps**: Ref Finance, Burrow, Sweat Economy, Paras, Mintbase, Aurora (EVM compatibility layer)

---

### Tron (TRX)

| Metric | Value |
|---|---|
| **USDT on Tron** | $85.4B (~42% of total USDT supply) |
| **USDT Dominance on Tron** | 98.34% of Tron activity is USDT |
| **Daily USDT Transfers** | ~$27.5B |
| **2025 Annual USDT Volume** | $7.9 TRILLION |
| **TVL** | ~$23.4B |
| **Daily Revenue** | $1.01M (topped DeFiLlama rankings March 2026) |
| **Retail USDT Share** | ~56% of global retail USDT transfers (<$1K) |

**Key Insight**: Tron is essentially a USDT settlement rail. It processes more stablecoin transfer value than any other chain. The combination of zero/near-zero fees and fast confirmation makes it the de facto payment chain for emerging markets and P2P transfers.

**Ecosystem**: JustLend ($3.9B TVL), SunSwap, JustStable, SUN.io

---

### Kaspa (KAS)

| Metric | Value |
|---|---|
| **Architecture** | BlockDAG (not blockchain) |
| **Consensus** | GhostDAG (PoW) |
| **Block Time** | ~1 second |
| **Block Rate** | 100 blocks per second |
| **Smart Contracts** | Coming May 2026 hardfork (native assets, ZK verification, KRC20) |

**What Makes Kaspa Unique**:
- **BlockDAG vs Blockchain**: Traditional blockchains are linear chains of blocks. Kaspa uses a Directed Acyclic Graph where multiple blocks can coexist and reference each other simultaneously.
- **GhostDAG Protocol**: Finds a "k-cluster" — a set of blocks where almost all blocks are "aware" of each other. Sorts the DAG into a consensus ordering without discarding any blocks.
- **No Orphaned Blocks**: Unlike Bitcoin, parallel blocks are incorporated into the ledger. Miners waste zero energy on orphans. Users get near-instant confirmations.
- **PoW + Speed**: Kaspa is the fastest Proof-of-Work cryptocurrency, challenging the assumption that PoW = slow.

---

### Algorand (ALGO)

| Metric | Value |
|---|---|
| **Consensus** | Pure Proof-of-Stake (PPoS) |
| **TVL** | ~$188M (170%+ increase from ~$70M) |
| **Block Finality** | ~3.3 seconds |
| **No-Rollback** | Immediate, irreversible finality |
| **Institutional** | Visa partnership (Quantoz EURD debit cards) |

**Pure PoS**: Unlike delegated PoS, users do NOT need to lock/stake tokens. All ALGO holders automatically participate in consensus proportional to their balance. Requires 2/3+ supermajority of honest stake.

**State Proofs**: Post-quantum secure cryptographic proofs that attest to blockchain state at different points in time. Enable trustless cross-chain communication without running a full node. Critical for light client verification.

**Institutional Focus**: Quantoz (Visa Principal Member) uses Algorand for EURD stablecoin debit cards accepted at 150M+ merchants. Focus on no-rollback finality and compliance makes it attractive for enterprise/TradFi.

---

## 3. Data Availability Layer Comparison

### Overview Table

| DA Layer | Throughput | Cost per MB | Mechanism | Trust Model | Status |
|---|---|---|---|---|---|
| **Celestia** | 1.33 MB/s (mainnet); 21.33 MB/s (testnet); 128 MB blocks | ~$0.07–$7.31/MB | DAS + Namespaced Merkle Trees | Own validator set | Market leader (~50% share) |
| **EigenDA** | 100 MB/s (V2) | Lower than Celestia (Ethereum-secured) | DAC (Data Availability Committee) | Restaked ETH validators | V2 live on mainnet |
| **Avail** | Scaling to 10+ MB/s | Competitive | DAS + KZG commitments + erasure coding | Own validator set | Universal DA (multichain) |
| **Ethereum Blobs (EIP-4844)** | ~0.08 MB/s (3 blobs/block × 128KB) | ~$3.83–$20.56/MB | Blob transactions + KZG commitments | Ethereum L1 security | Live since March 2024 |
| **Near DA** | Leverages Nightshade sharding | ~8,000x cheaper than Ethereum calldata | Consensus-integrated | NEAR validator set | Live; supports OP Stack, Arbitrum Nitro, Polygon CDK |

### Celestia Deep Dive
- **Current mainnet**: 8 MB blocks every 6 seconds = 1.33 MB/s
- **Matcha Upgrade (Jan 2026)**: 128 MB blocks, 77% reduction in node storage requirements
- **Testnet (mamo-1)**: 128 MB blocks with 6s block time = 21.33 MB/s sustained
- **Future (Fibre Blockspace)**: Targeting 1 Tbit/s throughput (1,500x current roadmap target)
- **DAS**: Light nodes verify data availability by randomly sampling small portions of block data. More light nodes = safely larger blocks. No need to download entire blocks.
- **Market share**: ~50% of DA market, processed 160+ GB of rollup data

### EigenDA Deep Dive
- **V2 Mainnet**: Launched with 100 MB/s write throughput
- **Restaking Model**: Ethereum validators restake their ETH via EigenLayer to secure DA. $18B+ in restaked TVL across 1,900+ operators and 1.1M+ ETH delegated.
- **Architecture**: Operates as a DAC, NOT a blockchain. This means higher raw throughput but with trust assumptions that committee members honestly attest to data availability.
- **Best for**: Ethereum-aligned projects that want DA secured by ETH economic security

### Avail Deep Dive
- **Universal DA**: Unlike Celestia (Cosmos-aligned) or EigenDA (Ethereum-aligned), Avail targets multichain compatibility
- **Tech**: Combines DAS + KZG polynomial commitments + erasure coding
- **Differentiator**: Designed to work across EVM, Cosmos, and other ecosystems, not just Ethereum rollups

### Ethereum Blobs (EIP-4844) — Before/After Comparison

| Metric | Before (Calldata) | After (Blobs) | Improvement |
|---|---|---|---|
| **L2 data posting cost** | ~$34M/month (Dec 2023) | ~90–99% reduction | 10–100x cheaper |
| **Avg L2 user fee** | ~$2.00 | ~$0.05 | ~40x cheaper |
| **StarkNet L1 costs** | Baseline | 95–100x lower | ~95–100x |
| **Base txn volume** | Baseline | +224% increase | Enabled by lower costs |
| **Blob lifecycle** | N/A (permanent calldata) | Pruned after ~18 days | Reduces L1 bloat |

### Near DA
- Integrates with Polygon CDK, OP Stack, and Arbitrum Nitro
- Data stored across shards, available for ~60 hours (5 NEAR epochs × 12h each)
- 8,000x cheaper than Ethereum calldata
- Leverages existing NEAR validator security

---

## 4. Rollup-as-a-Service (RaaS) Comparison

| Provider | Supported Frameworks | Pricing | Notable Chains Deployed | Key Differentiator |
|---|---|---|---|---|
| **Conduit** | OP Stack, Arbitrum Orbit | Usage/SLA-based tiers; testnet ~$50/mo | Zora, Aevo, Gitcoin PGN, Ancient8 | No-code 3-step deployment; "push-button" launches |
| **Caldera** | OP Stack, Arbitrum Orbit, Polygon CDK | Custom pricing per deployment | Manta, ApeChain, RARI Chain, dozens more | "Caldera Chains" with 40+ infra integrations |
| **AltLayer** | OP Stack, Arbitrum Orbit, Polygon CDK | Custom; restaked rollup model | Various via EigenLayer integration | "Restaked Rollups" with decentralized sequencing, verification, and fast finality via AVS. Flash Layers (ephemeral rollups) |
| **Gelato** | OP Stack, Arbitrum Orbit, Polygon CDK, zkSync ZKStack | Managed infrastructure pricing | Astar, Lisk, Playnance, Re.al, Reya | Full managed infra with auto-scaling RPC, block explorer |

### Key Differences
- **Conduit**: Simplest UX; 3-step no-code deployment in <30 minutes
- **Caldera**: Broadest infra ecosystem (40+ integrations); specializes in customization
- **AltLayer**: Most innovative architecture with "restaked rollups" (uses EigenLayer AVSes) and ephemeral "Flash Layers" for demand spikes
- **Gelato**: Most comprehensive managed service; bundles RPC, relayers, oracles, bridges in one package

### Market Context
Deploying a rollup has gone from months of engineering to minutes of configuration. Testnet rollups start at ~$50–99/month. Enterprise/mainnet deployments are custom-priced based on throughput, DA choice, and SLA requirements.

---

## 5. Based Rollup Thesis

### What is a Based Rollup?
A **based rollup** (also called an "L1-sequenced rollup") delegates transaction sequencing to Ethereum L1 validators instead of using a centralized or decentralized L2 sequencer.

### How It Differs from Standard Rollups

| Aspect | Standard Rollup | Based Rollup |
|---|---|---|
| **Sequencer** | Centralized entity (e.g., Coinbase for Base) | Ethereum L1 validators |
| **Block ordering** | L2 sequencer determines order | L1 proposers include L2 txns |
| **MEV** | Captured by L2 sequencer | Flows to Ethereum L1 |
| **Liveness** | Depends on sequencer uptime | Inherits Ethereum's liveness |
| **Censorship resistance** | Only as good as the sequencer | Inherits Ethereum's CR |
| **Composability with L1** | Async (bridge delays) | Synchronous (atomic L1↔L2) |

### Taiko's Implementation
- **First based rollup** on Ethereum mainnet
- **Based Contestable Rollup (BCR)**: Combines based sequencing with multi-proof validation
- **Permissionless**: Anyone can sequence Taiko blocks and generate proofs
- **Type 1 zkEVM**: Maximum EVM compatibility (bytecode-level equivalent)
- **Preconfirmations**: Working on decentralized preconfirmations for faster UX

### Advantages
1. **Decentralized sequencing** — No single point of failure or censorship
2. **L1 composability** — Atomic transactions between L1 and L2
3. **Ethereum alignment** — MEV flows back to ETH stakers, strengthening L1 security
4. **Inherited liveness** — Rollup is live as long as Ethereum is live
5. **No token needed** — No separate sequencer token required

### Disadvantages
1. **MEV exposure** — L2 transactions exposed to L1 MEV searchers/builders
2. **Higher latency** — Block times limited by Ethereum's ~12s slot time (vs. <1s for centralized sequencers)
3. **Limited MEV mitigation** — Harder to implement MEV protection strategies
4. **Revenue loss** — L2 operator can't capture sequencing revenue
5. **Throughput constraints** — Bounded by L1 block space availability

---

## 6. Modular Stack Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    USER / APPLICATION                     │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│  SEQUENCING LAYER                                        │
│  Orders transactions before execution                    │
│                                                          │
│  • Espresso Systems — Shared sequencer with HotShot      │
│    consensus + Tiramisu DA                               │
│  • Astria — Shared sequencer network, 2s blocks,         │
│    single-slot finality                                  │
│  • Radius — Encrypted mempool via PVDE (Practical        │
│    Verifiable Delayed Encryption)                        │
│  • Centralized sequencers (most L2s today)               │
│  • Based sequencing (Taiko — uses L1 validators)         │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│  EXECUTION LAYER                                         │
│  Processes transactions and state transitions            │
│                                                          │
│  • Ethereum (EVM) — Sequential, most tooling             │
│  • Solana (SVM/Sealevel) — Parallel execution            │
│  • Fuel (FuelVM) — UTXO-based parallel execution         │
│  • Sui / Aptos (MoveVM) — Object-model parallel exec     │
│  • Arbitrum Stylus (EVM + WASM) — Multi-language         │
│  • StarkNet (CairoVM) — ZK-native execution              │
│  • MegaETH (Streaming EVM) — 100K TPS, 10ms blocks      │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│  SETTLEMENT LAYER                                        │
│  Verifies execution proofs and resolves disputes         │
│                                                          │
│  • Ethereum — Primary settlement for all major rollups   │
│  • Celestia — Exploring sovereign rollup settlement      │
│  • Cosmos Hub — IBC-based settlement for Cosmos chains   │
│  • Custom settlement (app-specific rollups)              │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│  DATA AVAILABILITY LAYER                                 │
│  Ensures transaction data is published and retrievable   │
│                                                          │
│  • Celestia — 128 MB blocks, DAS, market leader          │
│  • EigenDA — 100 MB/s, restaked ETH security             │
│  • Avail — Universal DA, KZG + erasure coding            │
│  • Ethereum Blobs (EIP-4844) — Native, highest security  │
│  • Near DA — 8000x cheaper than ETH calldata             │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│  CONSENSUS LAYER                                         │
│  Achieves agreement on data ordering and validity        │
│                                                          │
│  • Ethereum PoS — Gasper (Casper FFG + LMD-GHOST)        │
│  • Tendermint/CometBFT — Cosmos ecosystem                │
│  • Narwhal & Bullshark — Sui/Aptos family                │
│  • HotShot — Espresso's consensus for shared sequencing  │
│  • Nightshade — NEAR's shard-based consensus             │
│  • GhostDAG — Kaspa's DAG-based PoW consensus            │
└─────────────────────────────────────────────────────────┘
```

### Mix-and-Match Examples (Real Deployments)

| Rollup | Execution | DA | Settlement | Sequencing |
|---|---|---|---|---|
| **Arbitrum One** | Nitro (EVM) | Ethereum blobs | Ethereum | Centralized (Offchain Labs) |
| **Base** | OP Stack (EVM) | Ethereum blobs | Ethereum | Centralized (Coinbase) |
| **Mantle** | OP Stack (EVM) | EigenDA | Ethereum | Centralized |
| **Eclipse** | SVM (Solana VM) | Celestia | Ethereum | Centralized |
| **Taiko** | Type 1 zkEVM | Ethereum blobs | Ethereum | Based (L1 validators) |
| **Fuel Ignition** | FuelVM | Ethereum blobs | Ethereum | Centralized |
| **Manta Pacific** | OP Stack (EVM) | Celestia | Ethereum | Centralized (Caldera) |

---

## 7. L1 Comparison by VM Type

### EVM (Ethereum Virtual Machine)

| Chain | EVM Compatibility | Consensus | Notable Difference |
|---|---|---|---|
| **Ethereum** | Native | PoS (Gasper) | The reference implementation |
| **BNB Chain** | Full EVM compatible | PoSA (21 validators) | Faster/cheaper, less decentralized |
| **Avalanche** | Full EVM (C-Chain) | Avalanche Consensus (Snowball) | Sub-second finality, subnet architecture |
| **Polygon PoS** | Full EVM | PoS + Heimdall | Cheapest EVM transactions |

**What EVM Compatibility Means**: Smart contracts written in Solidity/Vyper for Ethereum can deploy without modification. Same tooling (Hardhat, Foundry, MetaMask), same opcodes, same developer experience. This is why EVM chains have the largest ecosystem — developers write once, deploy everywhere.

**Limitation**: EVM processes transactions **sequentially**. One transaction at a time, one after another. This is the fundamental bottleneck that alternative VMs try to solve.

---

### SVM (Solana Virtual Machine)

| Aspect | Detail |
|---|---|
| **Runtime** | Register-based, built on eBPF bytecode |
| **Parallel Engine** | Sealevel — processes thousands of transactions concurrently |
| **Languages** | Rust, C, C++ (compiled to BPF) |
| **State Model** | Account-based with explicit state declarations |
| **Key Innovation** | Transactions must declare all state dependencies upfront |

**How Parallel Execution Works**:
1. Every transaction declares which accounts it will read/write
2. Sealevel builds a dependency graph
3. Independent transactions (touching different accounts) execute in parallel across all CPU cores
4. Dependent transactions (same account) execute sequentially
5. Result: scales with hardware — more cores = more throughput

**SVM vs EVM**: EVM is single-threaded; SVM is multi-threaded. EVM processes 15–30 TPS natively; Solana achieves 3,000–5,000+ TPS in practice. The tradeoff is complexity — SVM programs must be explicit about state access, making development harder but execution faster.

---

### MoveVM (Move Virtual Machine)

| Chain | Variant | Object Model | Parallel Strategy | TPS |
|---|---|---|---|---|
| **Sui** | Sui Move | Object-centric | Object-based tx sorting | ~10,000+ TPS |
| **Aptos** | Core Move | Address-centric | Block-STM (optimistic) | ~10,000+ TPS; sub-50ms blocks |

**The Move Language**: Originally developed at Meta (for Diem/Libra). Key safety guarantees:
- **Resource Safety**: Assets cannot be accidentally duplicated or destroyed
- **Access Control**: Only authorized modules can modify specific resources
- **Linear Type System**: Every resource must be used exactly once (moved, not copied)
- **No Re-entrancy**: The most common smart contract attack vector is eliminated by design

**Sui's Object Model**: Everything is an object with a unique ID. Transactions specify which objects they touch. Non-conflicting transactions execute in parallel without needing re-execution. This is deterministic parallelism.

**Aptos Block-STM**: Optimistically assumes all transactions can be parallel. Executes them all simultaneously, then detects conflicts and re-executes only the conflicting ones. Works well under low-conflict workloads.

**Combined TVL**: Sui + Aptos collectively serve $2.7B+ TVL on MoveVM.

---

### CosmWasm (Cosmos WebAssembly)

| Aspect | Detail |
|---|---|
| **Runtime** | WebAssembly (WASM) |
| **Languages** | Rust (primary), Go, AssemblyScript |
| **Ecosystem** | Cosmos SDK chains (Osmosis, Neutron, Injective, etc.) |
| **Interoperability** | IBC (Inter-Blockchain Communication) native |
| **Key Innovation** | Actor model; each contract is isolated with message-passing |

**How CosmWasm Differs**:
- Contracts communicate via messages (not shared state), reducing attack surface
- WASM compilation means near-native performance
- Each Cosmos chain can choose to include CosmWasm or not (modular)
- IBC enables seamless cross-chain contract calls and token transfers

**Notable CosmWasm Chains**: Osmosis (top DEX), Neutron (smart contract hub), Injective (orderbook DeFi), Stargaze (NFTs), Secret Network (privacy)

---

### FuelVM

| Aspect | Detail |
|---|---|
| **Architecture** | Register-based + UTXO model |
| **Language** | Sway (Rust-inspired, purpose-built) |
| **Parallel Strategy** | UTXO state access lists enable parallel execution |
| **TPS** | 600+ TPS live; 21,000 TPS per core (tested) |
| **Fees** | ~$0.0002 per transaction |
| **Block Time** | 1 second |

**What Makes FuelVM Unique**:
- **UTXO Model** (like Bitcoin, unlike Ethereum's account model): Each transaction consumes specific unspent outputs and creates new ones. This makes dependencies explicit and parallelism natural.
- **Predicates**: Stateless scripts that enable account abstraction natively, without smart contract overhead
- **State Rehydration**: Minimizes state growth; validators can discard old state and reconstruct on demand
- **Multi-core Scaling**: Full nodes identify touched accounts before execution, using all available CPU cores (vs. single-threaded EVM)

**Position**: Fuel is an Ethereum L2 (rollup) that chose to build a completely new VM rather than be EVM-compatible. The bet is that a purpose-built execution layer can outperform any EVM-based solution.

---

## Summary: The State of Crypto Infrastructure (March 2026)

1. **L2s are consolidating**: Base and Arbitrum hold 77% of TVL. Most smaller L2s struggle after incentives end.
2. **ZK rollups still trailing optimistic**: Despite theoretical advantages, ZK rollups (zkSync, StarkNet, Scroll) have lower TVL/usage than optimistic rollups.
3. **DA wars are real**: Celestia leads with 50% market share, EigenDA offers 100 MB/s, and Ethereum blobs remain the gold standard for security.
4. **Based rollups are the decentralization play**: Taiko proves it works, but latency tradeoffs remain.
5. **The modular thesis won**: Every layer (execution, DA, settlement, sequencing) now has specialized providers.
6. **VM innovation is accelerating**: MoveVM, SVM, and FuelVM all prove that EVM's sequential execution is a bottleneck worth solving.
7. **MegaETH is the wildcard**: 100K TPS with 10ms blocks challenges assumptions about what an L2 can be.

---

## Sources

- [Coin Bureau — Best Ethereum Layer 2 Projects 2026](https://coinbureau.com/analysis/what-is-the-best-layer-2)
- [L2BEAT — Total Value Secured](https://l2beat.com/scaling/tvs)
- [DefiLlama — Chain Rankings by TVL](https://defillama.com/chains)
- [CoinGecko — Layer 2 Chains by TVL](https://www.coingecko.com/en/chains/layer-2)
- [The Block — 2026 Layer 2 Outlook](https://www.theblock.co/post/383329/2026-layer-2-outlook)
- [Yahoo Finance — Ethereum L2 Networks Surpass $51.5B TVL](https://finance.yahoo.com/news/ethereum-layer-2-networks-surpass-082653687.html)
- [Cardano 2026 Roadmap — Protocol Upgrades](https://www.ad-hoc-news.de/boerse/news/ueberblick/cardano-s-2026-roadmap-protocol-upgrades-and-privacy-expansion-take/68536609)
- [Disruption Banking — Cardano in 2026](https://www.disruptionbanking.com/2026/02/09/how-strong-will-cardano-ada-be-in-2026/)
- [Bitget — Polkadot 2026 JAM Upgrade](https://www.bitget.com/academy/12560603872461)
- [Polkadot Forum — JAM Upgrade](https://forum.polkadot.network/t/polkadot-3-0-the-jam-upgrade/13834)
- [NEAR Protocol Review 2026](https://cryptoadventure.com/near-protocol-review-2026-sharding-finality-speed-accounts-and-ecosystem-risks/)
- [LBank — NEAR Nightshade Sharding](https://www.lbank.com/explore/near-protocol-nightshade-sharding-ai-integration-scalability)
- [CCN — Tron USDT Dominance](https://www.ccn.com/education/crypto/tron-vs-ethereum-usdt-dominance-explained/)
- [Cryptopolitan — TRON $7.9T USDT Volume 2025](https://www.cryptopolitan.com/tron-records-7-9-trillion-in-usdt-transfer-volume-in-2025-new-research-from-messari-rwa-io-and-stablecoin-insider/)
- [Kaspa Features](https://kaspa.org/features/)
- [Gate.io — What is Kaspa](https://web3.gate.com/crypto-wiki/article/what-is-kaspa-kas-complete-guide-to-the-revolutionary-blockdag-cryptocurrency-20260108)
- [Algorand — Pure Proof-of-Stake](https://algorand.co/technology/pure-proof-of-stake)
- [Algorand — State Proofs](https://developer.algorand.org/docs/get-details/stateproofs/)
- [BlockEden — 2026 Data Availability Race](https://blockeden.xyz/blog/2026/02/24/modular-blockchain-wars-data-availability/)
- [Conduit — DA Costs: Ethereum vs Celestia](https://www.conduit.xyz/blog/data-availability-costs-ethereum-blobs-celestia/)
- [BlockEden — Celestia Blob Economics](https://blockeden.xyz/blog/2026/01/16/celestia-blob-economics-data-availability-rollup-costs/)
- [EigenDA Docs](https://docs.eigencloud.xyz/eigenda/core-concepts/overview)
- [Ainvest — EigenDA V2 Launch](https://www.ainvest.com/news/ethereum-news-today-eigenda-v2-launches-ethereum-mainnet-100-mb-2507/)
- [Eclipse Labs — DA Layer Comparison](https://www.eclipselabs.io/blogs/choosing-your-data-availability-layer-celestia-avail-eigenda-compared)
- [NEAR DA Docs](https://docs.near.org/chain-abstraction/data-availability)
- [Hacken — EIP-4844 Impact](https://hacken.io/discover/eip-4844-explained/)
- [Transak — RaaS Guide](https://transak.com/blog/what-is-rollup-as-a-service-a-guide-to-raas-tech-stacks-and-top-5-raas-providers)
- [Taiko — Based Rollup Economics](https://taiko.mirror.xyz/PhlvGdIaY3-ZQ1DqI9uM5LxrWGWLAzLI84rkxhvPKmM)
- [Taiko Docs — Based Rollups](https://docs.taiko.xyz/taiko-alethia-protocol/protocol-design/based-rollups/)
- [Espresso — Modular Stack](https://medium.com/@espressosys/espresso-in-the-modular-stack-1445cafb41e1)
- [CoinDesk — Astria Mainnet](https://www.coindesk.com/tech/2024/10/28/astria-project-to-decentralize-crucial-blockchain-sequencers-goes-live-with-main-network)
- [DAIC Capital — VM Comparison](https://daic.capital/blog/blockchain-virtual-machines)
- [Squads — SVM Explained](https://squads.xyz/blog/solana-svm-sealevel-virtual-machine)
- [BlockEden — MoveVM Wars 2026](https://blockeden.xyz/blog/2026/02/08/movevm-blockchain-comparison-sui-aptos-initia/)
- [The Block — Fuel Ignition Launch](https://www.theblock.co/post/321365/fuel-labs-debuts-ignition-rollup-network-with-focus-on-parallellization-utxo-based-model)
- [MegaETH — Real-Time Blockchain](https://www.megaeth.com/)
- [MEXC — MegaETH Mainnet 35K TPS](https://www.mexc.co/news/583975)
- [BanklessTimes — Mantle Crosses $1B TVL](https://www.banklesstimes.com/articles/2026/03/11/the-aave-effect-mantle-crosses-1b-tvl-in-under-two-weeks/)
- [Brave New Coin — Blast TVL Collapse](https://bravenewcoin.com/insights/blast-chain-in-2025-from-2-7b-tvl-to-near-collapse-in-under-two-years)
