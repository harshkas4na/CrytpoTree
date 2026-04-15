# 08 — Privacy Technologies Research Results

> Research completed March 2026

---

## 1. Zcash Shielded Pool Adoption

### Shielded vs Transparent Usage
| Metric | Value |
|--------|-------|
| **Total ZEC supply** | ~21M max, ~16M circulating |
| **ZEC in shielded pools** | ~1.5-2M ZEC (~10-12% of circulating) |
| **Shielded transaction %** | ~15-25% of all transactions |
| **Dominant pool** | Orchard (latest, uses Halo2 — no trusted setup) |
| **Legacy pools** | Sprout (deprecated), Sapling (still active but migrating to Orchard) |

### Price Surge Context
- Zcash saw an 820%+ price surge in late 2024 / early 2025 amid growing privacy narrative
- Driven by: Tornado Cash sanctions reversal, FHE hype, growing pro-privacy sentiment
- Privacy sector overall saw massive inflows as regulatory clarity improved

### Technical Evolution
- **Sprout** (2016): Original shielded pool, trusted setup ceremony, deprecated
- **Sapling** (2018): Faster proofs, lighter computation, trusted setup
- **Orchard** (2022): Uses Halo2 (no trusted setup), recursive proofs, most advanced
- **Zcash Shielded Assets (ZSA)**: In development — enables custom tokens in shielded pools (like private stablecoins)

---

## 2. FHE Performance Benchmarks

### Zama's TFHE Benchmarks (fhEVM)

| Operation | Latency | Relative to Plaintext |
|-----------|---------|----------------------|
| **Encrypted addition (euint32)** | ~50ms | ~1,000x slower |
| **Encrypted multiplication (euint32)** | ~150ms | ~10,000x slower |
| **Encrypted comparison (euint32)** | ~200ms | ~10,000x slower |
| **Encrypted conditional (cmux)** | ~100ms | ~5,000x slower |
| **Encrypted minimum/maximum** | ~250ms | ~15,000x slower |
| **Encrypted shift** | ~150ms | ~10,000x slower |
| **Boolean operations (encrypted)** | ~20-30ms | ~500x slower |

### Key Constraints
- **Key sizes**: FHE public keys are 50MB-200MB+ (depending on security level)
- **Ciphertext expansion**: Encrypted data is 100-1000x larger than plaintext
- **Bootstrapping**: The key bottleneck — refreshing noise in ciphertexts takes 1-10 seconds per operation (for TFHE)
- **RAM requirements**: FHE computations require 16-64GB+ RAM

### What's Practical Today (2026)
| Use Case | Feasible? | Notes |
|----------|----------|-------|
| Private ERC-20 balances | Yes | Fhenix, Inco Network running testnets |
| Sealed-bid auctions | Yes | Simple comparison operations |
| Private voting | Yes | Zama demonstrated this |
| Private DeFi (AMM) | Partially | Simple swaps possible, complex strategies too slow |
| Private ML inference (small models) | Partially | Linear regression, decision trees work. Neural nets limited. |
| Private LLM inference | No | Orders of magnitude too slow |
| General smart contracts on encrypted state | No | Arbitrary computation is too expensive |

### Improvement Trajectory
- Performance improving ~10x every 2-3 years through:
  - Hardware acceleration (GPU implementations — 10-50x speedup)
  - Better algorithms (CGGI scheme improvements)
  - Compiler optimizations (Sunscreen, Zama Concrete)
- **Prediction**: Practical private DeFi on FHE likely by 2027-2028

---

## 3. Aztec Architecture Deep Dive

### Overview
Aztec is building a **private L2 on Ethereum** — a ZK rollup where the state itself is encrypted.

### Core Architecture
- **Encrypted UTXO Model**: Unlike Ethereum's account model, Aztec uses "notes" (similar to Bitcoin UTXOs but encrypted)
  - Each note contains: owner, value, and metadata — all encrypted
  - Spending a note destroys it and creates new notes
  - ZK proofs prove the transaction is valid without revealing details
- **Private and Public State**: Contracts can have both private state (encrypted notes) and public state (visible)
- **Client-side proving**: Users generate ZK proofs on their own device before submitting to the network

### Noir Programming Language
- **Domain-specific language** for writing ZK circuits (compiles to ACIR — Abstract Circuit Intermediate Representation)
- **Rust-like syntax**: Familiar to Rust developers
- **Features**: structs, generics, traits, modules, standard library
- **Purpose**: Abstracts the complexity of ZK circuit programming — developers write high-level code that compiles to efficient circuits
- **Not just for Aztec**: Noir can be used standalone for any ZK application

### Key Technical Details
| Feature | Detail |
|---------|--------|
| **Proof system** | Ultra-PLONK (custom variant) |
| **Privacy model** | Private function execution + public function execution |
| **State model** | Private: encrypted note tree. Public: standard state tree. |
| **Sequencing** | Centralized sequencer (initially), decentralizing over time |
| **Data availability** | Ethereum (calldata/blobs) |
| **Transaction flow** | User creates tx → proves locally → submits to sequencer → sequencer batches → posts to Ethereum |

### Status (March 2026)
- **Testnet**: Running (multiple iterations)
- **Mainnet**: Targeting 2026
- **Developer adoption**: Growing Noir ecosystem, 100+ developers building
- **Key use cases**: Private DeFi (trading without revealing positions), private payments, credential verification

---

## 4. Tornado Cash Legal Timeline

| Date | Event |
|------|-------|
| **Aug 8, 2022** | US Treasury's OFAC sanctions Tornado Cash smart contracts — first time open-source code was sanctioned |
| **Aug 10, 2022** | Alexey Pertsev (Tornado Cash developer) arrested in Netherlands |
| **Aug 2022** | GitHub removes Tornado Cash repositories. Circle freezes USDC in Tornado Cash addresses. |
| **Sep 2022** | Coin Center, Blockchain Association challenge sanctions as unconstitutional |
| **Mar 2023** | Roman Storm (Tornado Cash developer) arrested in US, charged with money laundering, sanctions violations |
| **May 2023** | Tornado Cash governance attack (unrelated to legal case) |
| **May 2024** | Alexey Pertsev convicted in Netherlands — 5 years, 4 months prison for money laundering |
| **Aug 2024** | Dutch court upholds Pertsev conviction on appeal |
| **Nov 2024** | US 5th Circuit Court of Appeals rules OFAC overstepped — immutable smart contracts are NOT "property" of a foreign national, so can't be sanctioned. Major legal victory. |
| **Jan 2025** | OFAC removes Tornado Cash from sanctions list following 5th Circuit ruling |
| **Mar 2025** | DOJ drops charges against Roman Storm |
| **2025** | TORN token surges 400%+ post-sanctions removal. Tornado Cash resumes operation. |

### Key Legal Precedents
- **5th Circuit ruling**: Immutable smart contracts are not "property" — code running autonomously cannot be sanctioned as a foreign national's property
- **Dutch ruling**: Developers CAN be held liable for building tools used for money laundering (different standard than US)
- **Impact**: Landmark case for open-source development, DeFi regulation, and code-as-speech debate

---

## 5. Privacy Technology Comparison

| Feature | ZK Proofs | FHE | MPC | TEE |
|---------|-----------|-----|-----|-----|
| **Trust Model** | Math (cryptographic assumptions) | Math (lattice-based assumptions) | Math (threshold trust) | Hardware manufacturer (Intel, AMD, ARM) |
| **What It Proves/Enables** | Statement is true without revealing inputs | Compute on encrypted data without decrypting | Multiple parties compute together without revealing their inputs | Isolated computation environment |
| **Performance** | Fast verification, slow proving | Very slow (1000x+ overhead) | Moderate (communication overhead) | Near-native speed |
| **Proof/Output Size** | Small (bytes to KB) | Large (ciphertext expansion 100-1000x) | Moderate | N/A (computation result) |
| **Post-Quantum** | STARKs: Yes. SNARKs: No. | Yes (lattice-based) | Depends on scheme | No (hardware-based) |
| **Composability** | Limited (proofs are standalone) | High (operate on encrypted data) | Limited (requires coordination) | High (standard computation) |
| **Maturity** | Production-ready (ZK rollups, Zcash) | Early production (Fhenix, Inco testnets) | Production (MPC wallets — Fireblocks) | Production (SGX, but trust issues) |
| **Key Weakness** | Prover costs, circuit complexity | Performance overhead, key management | Communication rounds, latency | Hardware trust, side-channel attacks |
| **Best Use Cases** | Scaling (rollups), private txs, identity | Private DeFi, sealed-bid auctions, private AI | Key management, wallets, multi-party signing | Confidential compute, MEV protection |
| **Notable Projects** | zkSync, StarkNet, Zcash, Aztec | Zama, Fhenix, Inco | Fireblocks, Zengo, Lit Protocol | Secret Network, Oasis, Phala |

### Combined Approaches (The Future)
- **ZK + FHE**: Use ZK proofs to verify FHE computations (Zama's approach)
- **ZK + MPC**: Distributed proof generation (multiple parties generate a ZK proof together)
- **MPC + TEE**: Use TEE for speed, MPC for trust (belt and suspenders)
- **FHE + MPC**: Threshold FHE — multiple parties hold key shares (no single point of failure)

---

## 6. Stealth Address Adoption (EIP-5564)

### What Are Stealth Addresses?
- **Concept**: Generate a one-time address for each transaction — sender and recipient are the only ones who know the connection
- **EIP-5564**: Standard for stealth addresses on Ethereum
- **EIP-6538**: Stealth meta-address registry (companion standard)

### Status (March 2026)
| Aspect | Status |
|--------|--------|
| **EIP-5564** | Final (accepted standard) |
| **EIP-6538** | Final (accepted standard) |
| **Implementations** | Umbra Protocol (live since 2021), Fluidkey, ScopeLift |
| **Wallet integration** | Limited — MetaMask exploring, not yet default |
| **Adoption** | Low — ~10-50K unique stealth addresses used |
| **Key challenge** | Gas costs for scanning/claiming, UX complexity |

### Umbra Protocol (First Implementation)
- Live on Ethereum, Polygon, Arbitrum, Optimism
- ~$80M+ transferred through stealth addresses
- Users can receive ETH and ERC-20s to stealth addresses
- **Problem**: Recipient needs gas to move funds from stealth address (chicken-and-egg)
- **Solution**: Sponsor/relayer pays gas, recipient reimburses from received funds

### Vitalik's Advocacy
- Vitalik Buterin published "An incomplete guide to stealth addresses" (2023)
- Proposed as a minimum-viable privacy layer for Ethereum
- Much simpler than full private transactions (Aztec/Tornado Cash)

---

## 7. Privacy Regulation Landscape

### Country-by-Country Privacy Coin Status

| Country/Region | Privacy Coin Status | Details |
|---------------|-------------------|---------|
| **Japan** | Delisted from exchanges | FSA pressured exchanges to delist XMR, ZEC, DASH (2018+) |
| **South Korea** | Delisted from exchanges | Upbit, Bithumb delisted privacy coins (2021+) |
| **Australia** | Exchange delisting trend | Major exchanges voluntarily delisted XMR, ZEC |
| **Dubai/UAE** | Restricted | VARA regulations restrict privacy tokens |
| **EU (MiCA)** | Restricted | "Anonymous crypto-assets" restricted at exchanges — privacy coins may face delisting |
| **US** | Legal (for now) | Privacy coins are legal to hold/trade. Exchanges can choose to list/delist. |
| **Switzerland** | Legal | Generally crypto-friendly, no specific privacy coin restrictions |
| **Singapore** | No explicit ban | MAS hasn't banned but exchanges are cautious |
| **India** | Unclear | 30% tax on all crypto, no specific privacy coin rules |
| **China** | All crypto banned | Privacy coins included in general ban |

### Key Trends
- **Exchange delisting**: The main threat — even where legal, exchanges proactively delist privacy coins for compliance
- **Monero**: Hardest hit — delisted from Binance (2024), most major exchanges. Still tradable on decentralized exchanges.
- **Zcash**: Better positioned because privacy is OPTIONAL (transparent addresses for compliance)
- **"Compliant privacy"** emerging as a category: Prove you're not sanctioned without revealing identity (Aztec, Aleo, Penumbra)
- **Tornado Cash ruling** (5th Circuit) was positive for privacy — established that code itself can't be sanctioned
