# 08 — Privacy Technologies

> "Blockchains are transparent by default — privacy is a feature you have to build."

## Why This Canvas Matters

Most people don't realize that every Ethereum transaction is publicly visible forever. Privacy is a fundamental human right and a growing crypto sector. Zcash had an 820% run, FHE reached unicorn status (Zama), and Tornado Cash sanctions were lifted — privacy is having a moment.

---

## Canvas Structure

### Main Node: "Privacy"
*"Technologies that enable private transactions, computation, and identity on public blockchains"*

### Sub-Nodes (5 categories):

#### 1. The Privacy Problem
- **Nodes**:
  - Blockchain transparency (every tx is public forever)
  - Pseudonymity vs anonymity (addresses ≠ identity, but...)
  - Chain analysis (Chainalysis, Elliptic — deanonymization)
  - Why privacy matters (financial privacy, business confidentiality, safety)
  - Privacy spectrum (fully transparent → selective disclosure → fully private)

#### 2. Privacy Chains
- **Nodes**:
  - Zcash (zk-SNARKs, shielded pools, optional privacy, 820% price surge 2025)
  - Monero (ring signatures, stealth addresses, mandatory privacy)
  - Secret Network (encrypted smart contracts, TEE-based)
  - Oasis Network (confidential compute layer)
  - Iron Fish (privacy L1, compliant privacy)
  - Mina Protocol (22KB blockchain using recursive ZKPs)

#### 3. Privacy Layers & Protocols
- **Nodes**:
  - Aztec Network (private L2 on Ethereum, Noir language, encrypted state)
  - Penumbra (private DeFi on Cosmos, shielded staking + swaps)
  - Namada (multi-chain privacy via shielded actions)
  - Tornado Cash (Ethereum mixer, sanctioned then unsanctioned — landmark case)
  - Railgun (on-chain privacy for DeFi, shielded balances)
  - Nocturne (private accounts on Ethereum)

#### 4. Privacy Technologies
- **Nodes**:
  - ZK-based privacy (prove tx validity without revealing details)
  - FHE on-chain (Zama — compute on encrypted data without decrypting)
    - Fhenix (FHE-powered L2)
    - Inco Network (FHE for confidential DeFi)
  - MPC (Multi-Party Computation — split secrets across parties)
    - MPC wallets (Fireblocks, Zengo)
  - TEE (Trusted Execution Environments — hardware privacy)
    - Intel SGX, ARM TrustZone
    - Criticism: hardware trust assumptions
  - Ring Signatures (Monero — hide sender among group)
  - Stealth Addresses (one-time addresses, EIP-5564 on Ethereum)
  - Comparison matrix: ZK vs FHE vs MPC vs TEE (trust, performance, flexibility)

#### 5. Compliant Privacy
- **Nodes**:
  - Selective disclosure (prove you're not sanctioned without revealing identity)
  - Viewing keys (let auditors see your transactions)
  - ZK credential proofs (prove KYC without revealing personal data)
  - Regulatory stance (EU, US — privacy vs AML requirements)
  - Tornado Cash legal outcome and implications

---

## Cross-Links

| This Node | Links To | Why |
|-----------|----------|-----|
| ZK Privacy | Foundations > ZK Proofs (01) | Same cryptographic primitives |
| FHE | Foundations > Advanced Crypto (01) | FHE fundamentals |
| FHE | Frontier > AI (11) | Private AI inference |
| Aztec | Chains > L2s (02) | Privacy L2 |
| Privacy Chains | Chains > L1s (02) | Zcash, Monero as L1s |
| Tornado Cash | Regulation (12) | Sanctions and legal precedent |
| Stealth Addresses | Identity (11) | Privacy-preserving identity |
| Compliant Privacy | Regulation (12) | Balancing privacy and compliance |
| MPC Wallets | Infrastructure > Wallets (04) | Key management approach |

---

## Research Needed

- [ ] Zcash shielded pool adoption stats
- [ ] FHE performance benchmarks (Zama's concrete numbers — latency, throughput)
- [ ] Aztec's architecture deep dive (Noir programming language, encrypted UTXO model)
- [ ] Tornado Cash legal timeline and outcome
- [ ] Comparison: ZK vs FHE vs MPC vs TEE (table with trust assumptions, performance, use cases)
- [ ] Stealth address adoption on Ethereum (EIP-5564 status)
- [ ] Privacy regulation landscape (which countries allow/ban privacy coins)
