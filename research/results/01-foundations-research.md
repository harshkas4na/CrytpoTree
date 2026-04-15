# 01 — Foundations Research Results

> Research completed March 2026

---

## 1. Consensus Mechanism Comparison

| Mechanism | Finality Time | Throughput (TPS) | Energy Use | Decentralization | Examples |
|-----------|--------------|------------------|------------|-------------------|----------|
| **PoW** (Nakamoto) | ~60 min (6 blocks BTC) | 7 (BTC), 15 (pre-merge ETH) | Very High (~150 TWh/yr for BTC) | High (anyone can mine) | Bitcoin, Litecoin, Kaspa |
| **PoS** (Casper/Gasper) | ~15 min (2 epochs) | 15-30 (ETH L1) | Very Low (~0.01 TWh/yr) | High (900K+ validators on ETH) | Ethereum, Cardano |
| **DPoS** | 1-3 sec | 1,000-4,000 | Low | Low-Medium (21-100 delegates) | EOS, Tron, BNB Chain |
| **BFT** (Tendermint) | 1-7 sec (instant finality) | 1,000-10,000 | Low | Medium (100-175 validators) | Cosmos, Sei, dYdX Chain |
| **PoH + Tower BFT** | 400ms slots, ~12s confirmed | 4,000-65,000 | Low | Medium (1,900+ validators) | Solana |
| **Avalanche Consensus** | <2 sec | 4,500+ | Low | High (1,700+ validators) | Avalanche |
| **DAG-based** | 1-10 sec | 10,000+ theoretical | Low-Medium | Varies | Kaspa (GhostDAG), IOTA |
| **Proof of Space** | 30-60 sec | 20-50 | Medium (storage) | High | Chia, Filecoin |

### Key Insights
- **PoW** remains the gold standard for security and censorship resistance but at enormous energy cost. Bitcoin's hash rate hit 800+ EH/s in early 2026.
- **PoS** Ethereum's validator set grew to 900K+ validators staking ~34M ETH (~28% of supply). The Merge reduced energy consumption by 99.95%.
- **BFT variants** offer instant finality but typically with smaller validator sets (tradeoff).
- **Solana's PoH** is not a consensus mechanism per se — it's a clock that timestamps events, enabling parallel processing. Actual consensus is Tower BFT.

---

## 2. ZK Proof System Comparison

| System | Proof Size | Verification Time | Prover Time | Trusted Setup | Post-Quantum | Used By |
|--------|-----------|-------------------|-------------|---------------|--------------|---------|
| **Groth16** | ~200 bytes | ~4ms | Minutes-hours | Per-circuit (toxic waste) | No | Zcash, Tornado Cash |
| **PLONK** | ~400 bytes | ~6ms | Minutes-hours | Universal (1-time, updatable) | No | Aztec, zkSync Era |
| **SNARKs** (general) | Small (~hundreds of bytes) | Fast (~ms) | Slow | Usually yes | No | zkSync, Polygon zkEVM |
| **STARKs** | Large (~50-200 KB) | Fast (~ms, log scaling) | Fast (quasi-linear) | No (transparent) | Yes | StarkNet, StarkWare |
| **Halo2** | ~5-10 KB | ~10ms | Moderate | No (IPA-based) | No | Scroll, Zcash Orchard |
| **Nova/Folding** | Varies | Varies | Fast (incremental) | Varies | Varies | Research stage |

### Key Insights
- **SNARKs vs STARKs tradeoff**: SNARKs have tiny proofs (cheap to verify on-chain) but need trusted setups. STARKs are transparent and post-quantum but have 100-1000x larger proofs.
- **PLONK** became the workhorse — universal setup means one ceremony works for all circuits. Used by most zkEVMs.
- **Proof recursion/aggregation** is the frontier: prove a proof is valid, compressing many proofs into one. StarkNet uses SHARP (Shared Prover) to batch many transactions.
- **Folding schemes** (Nova, Sangria, HyperNova) are the bleeding edge — enable incremental verification without full re-proving. Could dramatically reduce prover costs.
- **Real-world prover costs**: generating a ZK proof for an Ethereum block costs $0.01-$0.10 in compute (as of 2025-2026), down from $1+ in 2023. Hardware acceleration (GPU/FPGA provers) is a major focus.

---

## 3. FHE Current State (2025-2026)

### What's Actually Possible Today
- **Zama (fhEVM)**: Can run basic smart contract operations on encrypted data — integer arithmetic, comparisons, conditional logic. Their `TFHE-rs` library is open-source.
  - **Latency**: Encrypted addition ~50ms, encrypted multiplication ~150ms, encrypted comparison ~200ms (on modern hardware).
  - **Throughput**: ~10-50 encrypted operations per second per core.
  - **Practical**: Feasible for simple DeFi operations (encrypted balances, private auctions, sealed-bid).

- **Fhenix**: FHE-powered L2 on Ethereum. Testnet launched 2024, mainnet targeting 2025-2026.
- **Inco Network**: Confidential computing chain using FHE. Running testnet with encrypted ERC-20s.
- **Concrete ML (Zama)**: Run ML models on encrypted data. Can do linear regression, decision trees, small neural networks.

### What's Still Theoretical / Not Practical
- **General-purpose FHE smart contracts**: Running arbitrary Solidity on encrypted state is still too slow (100-1000x overhead).
- **Large-scale FHE ML inference**: Running GPT-scale models on encrypted data is years away.
- **Bootstrapping costs**: The key FHE operation (refreshing ciphertexts to prevent noise accumulation) takes ~1-10 seconds per operation. This is the bottleneck.

### The Trajectory
- Performance improving ~10x every 2 years (analogous to early ZK trajectory).
- Hardware acceleration (GPU, ASIC, FPGA) is the near-term path to practical FHE.
- **Sunscreen**: Working on compiler optimizations to make FHE more developer-friendly.

---

## 4. Verkle Tree Timeline for Ethereum

### Background
Verkle trees replace Ethereum's current hexary Patricia Merkle tries with a structure that produces much smaller proofs (~150 bytes vs ~1KB+ for Merkle), enabling stateless clients.

### Timeline
| Milestone | Status (as of March 2026) |
|-----------|--------------------------|
| EIP-6800 (Verkle tree structure spec) | Final |
| EIP-4762 (Verkle gas cost changes) | Draft/Review |
| Kaustinen testnet (Verkle devnet) | Running (7+ iterations) |
| Verkle tree migration strategy | Decided — overlay approach (old MPT + new Verkle run in parallel during transition) |
| Target mainnet inclusion | Part of the "Purge" roadmap phase — estimated late 2026 / 2027 |

### Key Technical Details
- **Proof size reduction**: ~10x smaller proofs than Merkle Patricia tries
- **Uses polynomial commitments** (Pedersen/IPA) instead of hash-based commitments
- **State tree width**: 256 children per node (vs 16 for current hexary trie)
- **Migration**: Will use an "overlay" approach — new state goes to Verkle, old state remains in MPT until accessed, then migrates
- **Impact**: Enables truly stateless validators (don't need to store full state), which is crucial for decentralization

---

## 5. Beginner-Friendly Explanations

### Hashing
> "Imagine putting a document into a magic blender. No matter how big the document, the blender always produces a smoothie of exactly the same size. You can't un-blend the smoothie back into the document, and even changing one word in the document produces a completely different smoothie. That's hashing."

### Public-Key Cryptography
> "Imagine a special mailbox: anyone can drop a letter in (that's your public key), but only you have the key to open it (your private key). In crypto, your wallet address is the mailbox, and your seed phrase generates the private key."

### Zero-Knowledge Proofs
> "Imagine proving to a bouncer you're 21+ without showing your ID. You just show a green checkmark from a trusted authority that says 'over 21' — nothing else. The bouncer learns you're old enough but not your name, address, or exact age."

### Consensus
> "Imagine 1,000 strangers need to agree on what happened, in what order, without a leader. That's the consensus problem. PoW says 'whoever solves this puzzle first gets to write the next page.' PoS says 'we'll randomly pick someone, but they have to put up money as collateral — if they lie, they lose it.'"

### Blockchain Architecture (Modular vs Monolithic)
> "Think of a monolithic blockchain like a single restaurant that cooks, serves, and washes dishes. A modular blockchain is like a food court — one shop cooks (execution), another handles payments (settlement), another stores receipts (data availability). Each can specialize and scale independently."

### Merkle Trees
> "Imagine a tournament bracket, but instead of teams, each slot contains a hash of data. To prove any single piece of data is in the tree, you only need to show the path from that leaf to the root — not the entire tree. This is how blockchains verify thousands of transactions efficiently."

### Gas & Fees
> "Gas is the metering system for computation. Every operation (sending tokens, swapping on a DEX) costs a certain amount of gas. You pay for gas with the chain's native token (ETH, SOL). It's like paying for electricity — more complex operations use more power and cost more."
