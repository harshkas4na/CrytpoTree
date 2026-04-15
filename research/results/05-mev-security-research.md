# 05 — MEV & Security Research Results

> Research completed March 2026

---

## 1. MEV Extracted Per Year

### Historical MEV Data (Ethereum)
| Period | Estimated MEV Extracted | Source |
|--------|------------------------|--------|
| 2020 (pre-Flashbots) | ~$600M | Flashbots research |
| 2021 | ~$750M | Flashbots dashboard |
| 2022 (pre-Merge) | ~$680M | EigenPhi |
| 2022 (post-Merge) | ~$300M (partial year) | MEV-Boost dashboard |
| 2023 | ~$900M | MEV-Boost relay data |
| 2024 | ~$1.2B+ | mevboost.pics, EigenPhi |
| 2025 | ~$1.5B+ (estimated) | MEV-Boost + private order flow |

### Breakdown by MEV Type (2024-2025)
| Type | % of Total MEV | Typical Profit per Tx |
|------|---------------|----------------------|
| **Arbitrage** | ~55-60% | $10-$10,000+ |
| **Sandwich attacks** | ~25-30% | $1-$1,000+ |
| **Liquidations** | ~10-15% | $100-$100,000+ |
| **JIT Liquidity** | ~3-5% | $50-$5,000 |
| **Other (NFT, long-tail)** | ~2-5% | Varies widely |

### Key Insight
- MEV is growing with DeFi activity. The $1.5B+ figure captures only on-chain MEV — private order flow and off-chain MEV likely doubles this.
- **MEV-Boost payments to validators**: Validators earned $500M+ from MEV-Boost tips in 2024 (on top of base staking rewards).

---

## 2. PBS (Proposer-Builder Separation) Adoption

### MEV-Boost Usage on Ethereum (Q1 2026)
| Metric | Value |
|--------|-------|
| **% of blocks via MEV-Boost** | ~92-95% |
| **Active builders** | ~20-30 at any time |
| **Top builders by block share** | beaverbuild (~35%), Titan (~25%), rsync (~15%), Flashbots (~10%) |
| **Active relays** | Flashbots, bloXroute (max profit + regulated), Ultra Sound, Agnostic Gnosis, Aestus, Titan |

### Builder Centralization Concern
- Top 3 builders produce ~75% of all Ethereum blocks — significant centralization risk
- **beaverbuild** has been the dominant builder since mid-2024
- Flashbots' builder market share has declined as competitors grew

### Relay Market Share
| Relay | Block Share |
|-------|-----------|
| Flashbots | ~30% |
| bloXroute (max profit) | ~25% |
| Ultra Sound | ~20% |
| Agnostic Gnosis | ~10% |
| Titan | ~10% |
| Others | ~5% |

---

## 3. Sandwich Attack Data

### Frequency and Volume
| Metric | Value (2024-2025) |
|--------|-------------------|
| **Daily sandwich attacks** | ~10,000-30,000 transactions |
| **Monthly volume sandwiched** | ~$300M-$500M |
| **Average profit per sandwich** | $2-$50 |
| **Top sandwich operators** | jaredfromsubway.eth (historically), various MEV bots |
| **% of Uniswap V3 swaps sandwiched** | ~3-5% of all swaps |

### Notable Sandwich Bot History
- **jaredfromsubway.eth**: Most infamous sandwich bot. Spent $90M+ in gas fees over its lifetime, profited $60M+ (net after gas). Active 2023-2024.
- Gas costs of sandwiching have increased as competition intensified — margins shrinking.

### Protection Adoption
- **Flashbots Protect / MEV Blocker**: ~15-20% of Ethereum transactions now use private transaction submission
- **Intent-based DEXs** (CowSwap, UniswapX): Growing to ~10-15% of DEX volume, offering MEV protection by design

---

## 4. Major Crypto Hacks Timeline

| Date | Protocol | Amount | Type | Chain | Details |
|------|----------|--------|------|-------|---------|
| Jun 2016 | The DAO | $60M | Reentrancy | Ethereum | Led to ETH/ETC fork |
| Jan 2018 | Coincheck | $530M | Hot wallet (NEM) | Centralized | Exchange hack |
| Feb 2022 | Wormhole | $325M | Bridge exploit | Solana/ETH | Signature verification bypass |
| Mar 2022 | Ronin Bridge | $625M | Private key compromise | Ronin | Lazarus Group (North Korea), 5/9 validators compromised |
| Apr 2022 | Beanstalk | $182M | Flash loan governance | Ethereum | Governance attack |
| Jun 2022 | Harmony Bridge | $100M | Private key compromise | Harmony | 2/5 multisig compromised |
| Aug 2022 | Nomad Bridge | $190M | Smart contract bug | Multi-chain | Copy-paste exploit (anyone could drain) |
| Oct 2022 | Mango Markets | $117M | Oracle manipulation | Solana | Avraham Eisenberg (convicted) |
| Mar 2023 | Euler Finance | $197M | Flash loan exploit | Ethereum | Funds returned after negotiation |
| Jul 2023 | Curve/Vyper | $70M | Compiler bug | Ethereum | Vyper reentrancy lock bug |
| Sep 2023 | Mixin Network | $200M | Cloud provider breach | Mixin | Database compromised |
| Jan 2024 | Orbit Chain | $82M | Private key compromise | Multi-chain | North Korea linked |
| Feb 2024 | PlayDapp | $290M | Private key compromise | Ethereum | Minting exploit |
| Jul 2024 | WazirX | $230M | Multisig exploit | Ethereum | North Korea linked |

### Aggregate Hack Statistics
| Year | Total Losses | # of Major Hacks | Top Vector |
|------|-------------|-----------------|------------|
| 2020 | ~$500M | 15+ | Flash loans, reentrancy |
| 2021 | ~$1.3B | 20+ | Bridge exploits, flash loans |
| 2022 | ~$3.8B | 30+ | Bridge exploits, private key compromise |
| 2023 | ~$1.7B | 25+ | Access control, flash loans |
| 2024 | ~$2.2B | 20+ | Private key compromise, access control |

### Key Patterns
- **Bridges** are the #1 target by dollar amount (~$2.5B+ total losses)
- **Private key compromise** overtook smart contract bugs as top vector in 2023-2024
- **North Korea (Lazarus Group)** responsible for ~$3B+ in crypto theft
- **Access control issues** were 75% of 2024 exploits by count

---

## 5. Audit Firm Comparison

| Firm | Specialty | Notable Audits | Pricing (est.) | Unique Feature |
|------|-----------|---------------|----------------|----------------|
| **Trail of Bits** | Deep protocol-level, formal verification | Ethereum 2.0, Uniswap, Compound | $200K-$1M+ | Slither (open-source static analysis), Echidna (fuzzer) |
| **OpenZeppelin** | Smart contract standards, upgrades | Coinbase, Aave, Compound, The Graph | $150K-$500K+ | OpenZeppelin Contracts (the standard library), Defender |
| **Cyfrin** | Smart contract, education-focused | Sushi, CodeHawks contests | $50K-$300K+ | Founded by Patrick Collins, strong educational content |
| **Spearbit** | Elite review network (top researchers) | Uniswap V4, Blast, LayerZero | $200K-$1M+ | Network of 100+ independent researchers, curated teams |
| **Sherlock** | Competitive audit platform | Aave, Optimism, Euler, LooksRare | Contest pool ($10K-$500K) | Hybrid: competition + insurance coverage |
| **Code4rena (C4)** | Competitive audit contests | ENS, Seaport, many DeFi protocols | Contest pool ($10K-$200K+) | 5,000+ auditors compete, pay-per-bug model |
| **Hats Finance** | On-chain bug bounties | Various mid-size protocols | Varies | Decentralized audit marketplace |
| **Certora** | Formal verification | Aave, Compound, MakerDAO | $200K-$500K+ | Prover (automated formal verification tool) |
| **Halmos** | Symbolic execution | Ethereum Foundation tool | Open-source | Symbolic testing for Foundry |

### Pricing Insights
- **Traditional audit**: $50K-$500K+ depending on codebase size and complexity. 2-8 weeks timeline.
- **Competitive audit**: $10K-$500K contest pool. 1-4 weeks. Potentially more bugs found (more eyes).
- **Formal verification**: $200K-$1M+. Most expensive but highest assurance level.
- **Trend**: Many protocols now do multiple audits + competitive audit + bug bounty (belt and suspenders approach)

---

## 6. Flashbots Protect Usage

### Stats (Q1 2026)
| Metric | Value |
|--------|-------|
| **Transactions via Flashbots Protect** | ~500K-1M+ per month |
| **% of all Ethereum transactions** | ~5-8% |
| **MEV-Share (Order Flow Auction)** | Growing, ~2-3% of Ethereum tx volume |
| **Flashbots Protect RPC users** | Integrated into MetaMask (optional), many wallets |

### MEV-Share Mechanism
- Users submit transactions to Flashbots Protect
- Searchers bid for the right to backrun (not sandwich) those transactions
- Users receive a portion of the MEV their transaction generates ("MEV refund")
- **Refund rates**: Users typically receive 50-90% of backrun MEV value

### Alternatives
- **MEV Blocker** (CoW Protocol + Beaver Build): Similar concept, ~1-2% of Ethereum transactions
- **Private RPCs**: Various builders offer private submission (Titan, rsync-builder)

---

## 7. L2 Sequencer MEV

### Is It Happening?
**Yes, but mostly by the sequencer operator itself (not external searchers).**

### Evidence
- **Arbitrum**: Offchain Labs operates the sole sequencer. FCFS ordering (first-come-first-served) reduces MEV but doesn't eliminate it. Latency games: traders colocate with the sequencer for speed advantage.
- **Base/Optimism**: Coinbase/Optimism Foundation operate sequencers. Priority fee ordering (similar to Ethereum). Some MEV opportunities exist via priority fees.
- **Sequencer revenue**: L2 sequencers earn $5-20M+/month from transaction fees — part of this is implicit MEV.

### The Problem
- **Centralized sequencers** can reorder transactions for profit. No evidence of active exploitation by major L2 operators, but the capability exists.
- **No transparency**: Unlike Ethereum (where MEV-Boost data is public), L2 sequencer ordering is opaque.

### Solutions in Progress
- **Shared sequencing** (Espresso, Astria): Decentralize sequencing across multiple operators
- **Based rollups** (Taiko): Use Ethereum L1 for sequencing — inherits PBS/MEV infrastructure
- **Fair ordering**: Chainlink's Fair Sequencing Services (FSS), threshold encryption
- **Encrypted mempools**: Radius, Shutter — encrypt transactions until ordering is committed

---

## 8. ePBS (Enshrined Proposer-Builder Separation) Status

### Current State (March 2026)
- **Status**: Active research and specification phase. Not yet included in any confirmed Ethereum upgrade.
- **EIP-7732**: The primary ePBS proposal. Under review by Ethereum core devs.

### What is ePBS?
Currently, PBS is implemented via MEV-Boost (an out-of-protocol sidecar). ePBS would bake PBS directly into the Ethereum protocol:
- Builders submit blocks via an in-protocol auction (not through relays)
- Removes trust in relays (currently a centralization/censorship point)
- Enables more sophisticated block structures (e.g., inclusion lists)

### Timeline
- **Pectra upgrade (2025)**: Did NOT include ePBS. Focused on blob scaling, AA improvements.
- **Fusaka upgrade (expected 2026)**: May include early ePBS components, but full ePBS likely pushed to a later upgrade.
- **Realistic estimate**: Full ePBS likely 2027+ given the complexity and coordination required.

### Related Proposals
- **Inclusion Lists (IL)**: Proposers can guarantee certain transactions are included in a block (even if built by a builder). Addresses censorship concerns. EIP-7547.
- **FOCIL (Fork-choice enforced Inclusion Lists)**: Stronger version — the fork choice rule enforces inclusion.
- **Execution Tickets**: Alternative to ePBS — validators sell "execution tickets" that grant the right to build a block. Separates the economic incentive from the validation duty.
