# 05 — MEV & Security: The Dark Forest

> "The hidden game played in every block — and the defenders trying to make crypto safe."

## Why This Canvas Matters

MEV is the most "aha moment" topic for intermediate users. When someone realizes that every trade they make on Uniswap is visible in the mempool and can be sandwiched — their entire understanding of crypto changes.

Security is the other side: $3.8B lost to hacks in 2022, $1.7B in 2023. Understanding attack vectors and defense mechanisms is crucial.

---

## Canvas Structure

### Main Node: "MEV & Security"
*"The adversarial game of block production and the defense mechanisms protecting users and protocols"*

### Sub-Nodes (2 major sections):

---

### Section A: MEV (Maximal Extractable Value)

#### 1. What is MEV?
- **Concept**: The profit validators/sequencers can extract by reordering, inserting, or censoring transactions
- Originally "Miner Extractable Value" (PoW era), now "Maximal" (PoS era)
- The "Dark Forest" metaphor — Ethereum mempool as a hostile environment
- **Beginner**: "Imagine someone seeing your buy order before it executes and front-running you"

#### 2. Types of MEV
- **Nodes**:
  - Arbitrage (price differences across DEXs — the "good" MEV)
  - Sandwich Attacks (front-run + back-run a user's trade)
  - Liquidations (racing to liquidate undercollateralized positions)
  - JIT Liquidity (just-in-time LP provision around large trades)
  - NFT Sniping (front-running NFT mints/purchases)
  - Long-tail MEV (oracle updates, governance attacks)
  - Cross-domain MEV (between L1 and L2, or between chains)

#### 3. The MEV Supply Chain
- **Nodes** (this is the key diagram):
  - **Users** submit transactions
  - **Searchers** find MEV opportunities in the mempool
  - **Builders** construct optimal blocks from searcher bundles
  - **Relays** pass blocks from builders to proposers (Flashbots relay, bloXroute, Agnostic)
  - **Proposers** (validators) select the most valuable block
  - Proposer-Builder Separation (PBS) — the design that enables this
  - ePBS (enshrined PBS) — baked into the protocol itself
  - Inclusion Lists — proposer guarantees certain txs get included

#### 4. MEV Protection
- **Nodes**:
  - Flashbots Protect (private transaction submission)
  - MEV Blocker (CoW Protocol, Beaver Build)
  - Private mempools / encrypted mempools
  - Order Flow Auctions (OFA) — MEV-Share
  - Intent-based protocols (CowSwap, UniswapX — users express intent, solvers compete)
  - Threshold encryption (encrypt tx until block is committed)

#### 5. MEV on L2s
- Sequencer-extractable value
- Fair ordering protocols
- Shared sequencers (Espresso, Astria)
- Based rollups (L1 proposers sequence L2 txs)

---

### Section B: Security

#### 6. Smart Contract Vulnerabilities
- **Nodes**:
  - Reentrancy (The DAO hack, 2016 — $60M)
  - Access Control (75% of 2024 exploits)
  - Oracle Manipulation (price feed attacks)
  - Flash Loan Attacks (borrow → manipulate → profit → repay, all in one tx)
  - Integer overflow/underflow (less common post-Solidity 0.8)
  - Front-running and MEV-related exploits
  - Logic errors (incorrect state transitions)
  - Proxy upgrade vulnerabilities

#### 7. Auditing & Verification
- **Nodes**:
  - Major audit firms: Trail of Bits, OpenZeppelin, Cyfrin, Spearbit, Sherlock
  - Competitive audit platforms: Code4rena, Sherlock, Hats Finance
  - Formal verification: Certora, Halmos, K Framework
  - Symbolic execution and fuzzing (Foundry, Echidna, Medusa)
  - Static analysis (Slither, Mythril)

#### 8. Bug Bounties & Incident Response
- **Nodes**:
  - Immunefi ($100M+ paid in bounties, largest platform)
  - HackenProof, Bugcrowd
  - War rooms and incident response playbooks
  - On-chain monitoring (Forta, OpenZeppelin Defender)

#### 9. Major Hacks Timeline
- **Nodes** (notable case studies):
  - The DAO (2016, $60M, Ethereum fork)
  - Ronin Bridge (2022, $625M, Lazarus Group)
  - Wormhole (2022, $325M, bridge exploit)
  - Nomad (2022, $190M, copy-paste exploit)
  - Euler Finance (2023, $197M, flash loan)
  - Curve/Vyper (2023, $70M, compiler bug)
  - Lessons learned from each

---

## Cross-Links

| This Node | Links To | Why |
|-----------|----------|-----|
| Sandwich Attacks | DeFi > AMMs (03) | Happens on every AMM trade |
| Liquidations | DeFi > Lending (03) | Liquidation MEV |
| MEV Supply Chain | Foundations > Consensus (01) | Block production process |
| Sequencer MEV | Chains > L2s (02) | L2 sequencer centralization |
| Flash Loan Attacks | DeFi > Lending (03) | Aave/Compound flash loans |
| Oracle Manipulation | Infrastructure > Oracles (04) | Oracle as attack surface |
| Bridge Hacks | Interoperability (09) | Bridge security failures |
| Audit Firms | Infrastructure > Dev Tools (04) | Part of the builder stack |

---

## Article Brief

**Title**: "The Dark Forest: MEV, Hacks, and Crypto Security"

**Sections**:
1. The Dark Forest (why the mempool is adversarial)
2. How Your Trade Gets Sandwiched (step by step)
3. The MEV Supply Chain (searchers → builders → proposers)
4. Protecting Yourself (Flashbots, private mempools, intents)
5. The Biggest Hacks in Crypto History
6. How Protocols Defend Themselves (audits, bug bounties, monitoring)

---

## Research Needed

- [ ] MEV extracted per year (Flashbots dashboard data, MEV-Boost stats)
- [ ] Current PBS adoption (% of Ethereum blocks through MEV-Boost)
- [ ] Sandwich attack frequency and volume
- [ ] Complete major hacks timeline with $ amounts
- [ ] Audit firm comparison (specialties, notable audits, pricing)
- [ ] Flashbots Protect usage stats
- [ ] L2 sequencer MEV: is it happening? Evidence
- [ ] ePBS status in Ethereum roadmap (Glamsterdam upgrade)
