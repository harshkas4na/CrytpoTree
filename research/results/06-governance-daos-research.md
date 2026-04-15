# 06 — Governance & DAOs Research Results

> Research completed March 2026

---

## 1. Top DAOs by Treasury Size

| DAO | Treasury Value | Primary Assets | Chain |
|-----|---------------|---------------|-------|
| **Optimism Collective** | ~$8B+ | OP tokens | Optimism |
| **Arbitrum DAO** | ~$5B+ | ARB tokens | Arbitrum |
| **Uniswap** | ~$4B+ | UNI tokens, USDC | Ethereum |
| **MakerDAO/Sky** | ~$3B+ | MKR, DAI, RWA | Ethereum |
| **Mantle** | ~$3B+ | MNT, ETH, mETH | Mantle |
| **Gnosis** | ~$2.5B+ | GNO, ETH, stablecoins | Gnosis Chain |
| **Lido** | ~$2B+ | LDO, stETH | Ethereum |
| **Aave** | ~$1.5B+ | AAVE, ETH, stablecoins | Multi-chain |
| **ENS** | ~$1.5B+ | ENS, ETH, USDC | Ethereum |
| **Compound** | ~$500M+ | COMP, USDC | Ethereum |
| **Gitcoin** | ~$400M+ | GTC, USDC | Ethereum |
| **Nouns** | ~$50M+ | ETH | Ethereum |

### Key Insights
- Most DAO treasuries are denominated in their own governance token — creating circular valuation
- **Diversified treasuries** (MakerDAO with RWA, Aave with multi-asset) are more sustainable
- **OP and ARB** have the largest treasuries due to large initial token allocations to DAOs
- MakerDAO's transition to "Sky" involved restructuring treasury through SubDAOs

---

## 2. Governance Participation Stats

| Protocol | Avg Voter Turnout | Avg Proposals/Month | Unique Voters (Last Year) | Delegation Rate |
|----------|------------------|--------------------|--------------------------|-----------------|
| **Uniswap** | ~5-10% of token supply | 2-4 | ~2,000-5,000 | ~30% delegated |
| **Aave** | ~7-15% of token supply | 4-8 | ~3,000-8,000 | ~25% delegated |
| **Arbitrum** | ~8-12% of token supply | 5-10 | ~10,000-30,000 | ~20% delegated |
| **Optimism** | ~10-20% (Token House) | 3-6 | ~5,000-15,000 | ~40% delegated |
| **MakerDAO** | ~10-20% of MKR supply | 3-5 | ~1,000-3,000 | Heavy delegation |
| **ENS** | ~5-10% of token supply | 1-3 | ~5,000-10,000 | ~35% delegated |
| **Compound** | ~3-8% of token supply | 1-3 | ~500-2,000 | ~40% delegated |
| **Nouns** | 30-50% of NFTs vote | 10-20+ | ~200-500 (small set) | N/A (NFT-based) |

### Key Problems
- **Voter apathy**: Average participation is 5-20% — most token holders never vote
- **Whale dominance**: Top 10 addresses often control 30-60% of voting power
- **Delegate concentration**: A handful of delegates (a16z, Blockchain Capital, Wintermute) vote across many DAOs
- **Governance fatigue**: Too many proposals leads to lower participation per proposal

### Trends Improving Participation
- **Delegation**: Making it easier to delegate to experts (Karma, Tally profiles)
- **Incentivized voting**: Some DAOs reward participation (ARB STIP, OP RetroPGF)
- **Optimistic governance**: Proposals pass unless vetoed — reduces governance overhead

---

## 3. Optimism's Citizens House & RetroPGF

### Two-House Governance Model

**Token House** (traditional):
- Votes with OP tokens
- Handles: protocol upgrades, network parameters, treasury allocation, grants
- Standard token-weighted voting with delegation

**Citizens House** (innovative):
- Membership via non-transferable "Citizen" NFTs (soulbound)
- Initially ~150-300 citizens, growing gradually
- Handles: Retroactive Public Goods Funding (RetroPGF)
- One citizen = one vote (not plutocratic)

### Retroactive Public Goods Funding (RetroPGF)
- **Concept**: "It's easier to agree on what was useful than what will be useful"
- Rewards projects AFTER they've demonstrated impact, not before
- Citizens vote on which public goods deserve funding

### RetroPGF Rounds
| Round | Date | Amount | Recipients | Focus |
|-------|------|--------|-----------|-------|
| Round 1 | Q4 2022 | $1M | 58 projects | Initial experiment |
| Round 2 | Q1 2023 | $10M | 195 projects | OP Stack, education, tooling |
| Round 3 | Q4 2023 | $30M | 501 projects | Broader impact categories |
| Round 4 | Q2 2024 | $10M | 207 projects | Onchain builders |
| Round 5 | Q4 2024 | $8M | ~200 projects | Refined categories |

### How It Works
1. **Nomination**: Anyone can nominate projects for funding
2. **Badgeholder voting**: Citizens (badgeholders) allocate a pool of OP tokens across nominated projects
3. **Distribution**: Projects receive OP proportional to votes received
4. **Impact metrics**: Increasingly using quantitative impact metrics (onchain activity, usage data)

### Key Learnings
- **Works well for**: Developer tooling, education, infrastructure (clear impact)
- **Challenges**: Popularity contest dynamics, gaming/Sybil concerns, impact measurement is hard
- **Evolution**: Moving toward more data-driven evaluation (Optimism's "impact = profit" thesis)

---

## 4. DAO Legal Landscape

### Jurisdiction Comparison

| Jurisdiction | Framework | Entity Type | Key Features |
|-------------|-----------|-------------|--------------|
| **Wyoming (US)** | DAO LLC Act (2021) | LLC with DAO governance | First US DAO law. Limited liability for members. Smart contract as operating agreement. Amended 2024 to improve. |
| **Marshall Islands** | DAO Act (2022) | Non-profit DAO LLC | Allows DAOs to register as legal entities. Used by Shipyard Software (Admiralty). |
| **Vermont (US)** | BBLLC (2018) | Blockchain-Based LLC | Early framework, less specific than Wyoming. |
| **Tennessee (US)** | DAO Act (2022) | Supplements existing LLC law | DAO-specific provisions for Tennessee LLCs. |
| **Utah (US)** | DAO Amendment (2023) | LLC supplement | Added DAO provisions to LLC framework. |
| **Switzerland** | Association law | Verein (Association) | Popular for DeFi DAOs. Ethereum Foundation, Lido are Swiss associations. |
| **Cayman Islands** | Foundation Company | Foundation | Used by many DeFi protocols (Uniswap Foundation, Aave). No taxation. |
| **Singapore** | Foundation Ltd | Foundation | Popular for Asian crypto projects. MAS provides regulatory clarity. |
| **Panama** | Foundation | Private Interest Foundation | Used by some DAOs for privacy + legal structure. |

### Key Legal Challenges
- **Liability**: Without a wrapper, DAO members may have unlimited personal liability (CFTC v. Ooki DAO precedent)
- **Ooki DAO case (2023)**: CFTC successfully sued a DAO, holding token holders liable as an "unincorporated association"
- **Tax**: DAO treasury transactions may be taxable events. No clear guidance in most jurisdictions.
- **Securities law**: Governance tokens may be securities (depends on Howey test analysis)
- **KYC/AML**: DAOs operating DeFi protocols face increasing pressure to implement compliance

---

## 5. Governance Attack Case Studies

### Beanstalk (April 2022) — $182M
- **Attack**: Flash loan governance exploitation
- **Mechanism**:
  1. Attacker borrowed $1B via Aave flash loan
  2. Acquired enough BEAN3CRV and BEAN tokens for governance quorum
  3. Proposed and passed BIP-18 (malicious governance proposal) in a single transaction
  4. BIP-18 transferred all Beanstalk assets to the attacker
  5. Repaid flash loan, profited ~$80M (after Tornado Cash laundering)
- **Root cause**: No timelock between proposal and execution. Emergency governance function allowed instant execution.
- **Lesson**: Always implement timelocks. Never allow same-block proposal + execution. Snapshot voting as alternative.

### Build Finance (February 2022) — $470K
- **Attack**: Hostile governance takeover
- **Mechanism**:
  1. Attacker accumulated BUILD tokens on open market over time (not flash loan)
  2. Gained majority voting power
  3. Passed proposal granting themselves minting authority
  4. Minted unlimited BUILD tokens, dumped on DEXs
- **Root cause**: Low participation meant a small holding could achieve majority. No guardian/veto mechanism.
- **Lesson**: Need veto mechanisms, minimum participation thresholds, and guardian councils for emergency situations.

### Tornado Cash Governance (May 2023)
- **Attack**: Malicious proposal smuggled in extra code
- **Mechanism**:
  1. Attacker submitted a seemingly innocuous proposal (updating relayer registry)
  2. Proposal contained hidden code that granted 1.2M fake TORN votes to attacker
  3. With majority voting power, attacker could control governance
  4. Community organized counter-attack, eventually regained control
- **Lesson**: All governance proposals need thorough code review. Automated detection of suspicious proposals.

### Common Attack Patterns
1. **Flash loan voting**: Borrow tokens, vote, repay (prevented by snapshot-at-proposal-time)
2. **Low-quorum exploitation**: Gain majority when participation is low
3. **Hidden malicious code**: Obfuscate true intent of proposals
4. **Economic attacks**: Accumulate tokens cheaply, pass self-serving proposals

---

## 6. Governance Tool Comparison

| Feature | Snapshot | Tally | Governor (OpenZeppelin) |
|---------|---------|-------|------------------------|
| **Type** | Off-chain voting | On-chain governance UI | Smart contract framework |
| **Execution** | Off-chain (gasless) — multisig executes | On-chain (automatic execution via timelock) | On-chain (automatic execution) |
| **Cost to Vote** | Free (signed messages, no gas) | Gas cost per vote | Gas cost per vote |
| **Voting Strategies** | Highly flexible (token-weighted, quadratic, NFT, whitelist, etc.) | Token-weighted (standard Governor) | Token-weighted (ERC-20Votes) |
| **Delegation** | Not native (plugin-based) | Full delegation support | Full delegation support |
| **Timelock** | No (off-chain) | Yes (OpenZeppelin TimelockController) | Yes (built-in) |
| **Usage** | ~35,000+ DAOs | ~500+ DAOs | Base framework for most on-chain governance |
| **Strengths** | Zero cost, flexible, huge adoption | Trustless execution, on-chain record | Audited, standard, composable |
| **Weaknesses** | Requires multisig trust for execution | Gas costs deter small holders | Needs frontend (Tally provides this) |
| **Notable Users** | Aave (temp checks), Uniswap (temp checks), ENS | Uniswap (on-chain), Compound, ENS | Uniswap, Compound, many others |

### Typical Governance Flow
1. **Forum discussion** (Discourse/Commonwealth) — informal
2. **Temperature check** (Snapshot) — gasless signal vote
3. **On-chain vote** (Tally/Governor) — binding, with timelock
4. **Execution** — automatic after timelock delay (24-48 hours typical)

### Emerging Tools
- **Karma**: Delegate reputation and analytics
- **Boardroom**: Multi-DAO governance aggregator
- **Agora**: On-chain governance with delegation profiles
- **Hats Protocol**: Role-based permissions for DAOs (hat = role)
- **Safe (Gnosis Safe)**: Multisig execution for off-chain votes, $100B+ secured
