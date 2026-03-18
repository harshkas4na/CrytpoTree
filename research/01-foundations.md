# 01 — Foundations: Cryptography & Consensus

> "Before you understand any chain, you need to understand WHY blockchains work."

## Why This Canvas Matters

This is the **#1 missing piece** for beginners. Every "What is blockchain?" question leads here. Without this, the entire map is just a list of projects — with it, users understand the *principles* that make everything else possible.

---

## Canvas Structure

### Main Node: "Foundations"
*"The cryptographic and game-theoretic primitives that make trustless systems possible"*

### Sub-Nodes (7 nodes on this canvas):

#### 1. Hashing & Data Structures
- **What**: One-way functions that fingerprint data (SHA-256, Keccak-256, Poseidon)
- **Sub-canvas nodes**:
  - SHA-256 (Bitcoin's hash function)
  - Keccak-256 (Ethereum's hash function)
  - Poseidon (ZK-friendly hash, used in Zcash, StarkNet)
  - Merkle Trees (how blockchains verify data efficiently)
  - Patricia Tries (Ethereum's state storage)
  - Verkle Trees (Ethereum's next upgrade — smaller proofs)
- **Beginner angle**: "How does a blockchain know data hasn't been tampered with?"
- **Advanced angle**: Poseidon vs Pedersen for ZK circuits, Verkle tree migration in Ethereum

#### 2. Public-Key Cryptography & Signatures
- **What**: How you prove ownership without revealing secrets
- **Sub-canvas nodes**:
  - ECDSA (Bitcoin, Ethereum signatures)
  - EdDSA / Ed25519 (Solana, Cosmos signatures)
  - BLS Signatures (Ethereum validator aggregation)
  - Schnorr Signatures (Bitcoin Taproot)
  - Multisig (multiple keys required)
  - Threshold Signatures (TSS — distributed key generation)
- **Beginner angle**: "How does your wallet prove you own your crypto?"
- **Advanced angle**: BLS aggregation enabling 100k+ validators, MPC-TSS vs multisig tradeoffs

#### 3. Zero-Knowledge Proofs
- **What**: Prove something is true without revealing the underlying data
- **Sub-canvas nodes**:
  - What is a ZKP? (Prover/Verifier model)
  - SNARKs (small proofs, trusted setup — Zcash, zkSync)
  - STARKs (no trusted setup, larger proofs — StarkNet, StarkWare)
  - PLONK (universal setup — used by many modern ZK systems)
  - Groth16 (most efficient but per-circuit setup)
  - ZK-EVMs (applying ZK to Ethereum execution — Scroll, Polygon zkEVM)
  - ZKML (ZK proofs for machine learning inference)
- **Beginner angle**: "Imagine proving you're over 21 without showing your ID"
- **Advanced angle**: Prover costs, recursion, folding schemes (Nova, Sangria)

#### 4. Advanced Cryptography (FHE, MPC, TEE)
- **What**: Next-gen privacy and computation techniques
- **Sub-canvas nodes**:
  - Fully Homomorphic Encryption (FHE) — compute on encrypted data (Zama, Fhenix)
  - Multi-Party Computation (MPC) — joint computation, no single party sees all data
  - Trusted Execution Environments (TEE) — hardware-isolated computation (Intel SGX)
  - Comparison: ZK vs FHE vs MPC vs TEE (tradeoffs matrix)
- **Intermediate angle**: "FHE lets you run DeFi where nobody sees your trades"
- **Advanced angle**: FHE bootstrapping costs, lattice-based assumptions, Zama's concrete benchmarks

#### 5. Consensus Mechanisms
- **What**: How decentralized networks agree on truth
- **Sub-canvas nodes**:
  - Proof of Work (PoW) — Bitcoin, energy-intensive, Nakamoto consensus
  - Proof of Stake (PoS) — Ethereum, capital-at-risk, slashing
  - Delegated PoS (DPoS) — EOS, Tron, elected validators
  - BFT Variants — Tendermint (Cosmos), HotStuff (Meta's Diem legacy)
  - Proof of History (PoH) — Solana's time-ordering trick
  - DAG-based — IOTA, Fantom (no blocks, parallel processing)
  - Proof of Space — Chia, Filecoin (storage-based)
  - Proof of Authority (PoA) — permissioned chains
  - Hybrid consensus — Avalanche's Snowball/Snowflake
- **Beginner angle**: "Why does Bitcoin use energy? Why did Ethereum stop?"
- **Advanced angle**: Safety vs liveness tradeoffs, finality gadgets, Avalanche consensus family

#### 6. Blockchain Architecture
- **What**: How the pieces fit together into a working chain
- **Sub-canvas nodes**:
  - Monolithic vs Modular (the great debate)
  - Execution layer (where transactions run)
  - Settlement layer (where finality happens)
  - Data Availability layer (where data is stored/proven)
  - Consensus layer (who agrees)
  - The Blockchain Trilemma (security, scalability, decentralization)
  - State management (accounts vs UTXOs)
- **Beginner angle**: "A blockchain is actually several layers working together"
- **Advanced angle**: Danksharding, enshrined PBS, statelessness

#### 7. How Transactions Work
- **What**: End-to-end life of a transaction
- **Sub-canvas nodes**:
  - Wallet signs transaction
  - Broadcast to mempool
  - Validator/miner selects transactions
  - Block proposal and propagation
  - Consensus and finality
  - State update
  - Gas and fee markets (EIP-1559)
- **Beginner angle**: "What actually happens when you click 'Send'?"
- **Advanced angle**: Priority fees, blob transactions (EIP-4844), inclusion lists

---

## Cross-Links to Other Pillars

| This Node | Links To | Why |
|-----------|----------|-----|
| ZK Proofs | Privacy (08) | ZKPs power private transactions |
| ZK Proofs | Chains > L2s (02) | ZK rollups use SNARKs/STARKs for scaling |
| ZK Proofs | Identity (11) | ZK credentials for privacy-preserving identity |
| FHE | Privacy (08) | FHE enables encrypted on-chain computation |
| FHE | Frontier > AI (11) | Private AI inference |
| Consensus | Chains (02) | Each L1 uses a different consensus |
| Consensus | MEV (05) | Block proposers extract MEV |
| Gas/Fees | Token Economics (07) | Fee burns, validator revenue |
| Blockchain Architecture | Chains (02) | Modular vs monolithic framing |
| Tx Lifecycle | MEV (05) | Mempool → searcher → builder → proposer |

---

## Article Brief

**Title**: "How Blockchains Actually Work: The Foundations"

**Sections**:
1. The Trust Problem (why we need blockchains)
2. Cryptographic Building Blocks (hashing, signatures)
3. Consensus: Agreeing Without a Leader
4. ZK Proofs: The Magic of Proving Without Showing
5. The Next Wave: FHE, MPC, and Private Computation
6. Monolithic vs Modular: How Modern Chains Are Designed
7. Life of a Transaction: From Click to Finality

---

## Research Needed

- [ ] Accurate comparison table: PoW vs PoS vs DPoS vs BFT (finality time, throughput, energy, decentralization)
- [ ] ZK proof system comparison (SNARKs vs STARKs vs PLONK — proof size, verification time, trusted setup)
- [ ] FHE current state — what's actually possible today vs theoretical
- [ ] Verkle tree timeline for Ethereum
- [ ] Best beginner explanations of each concept (borrow metaphors from quality educational content)
