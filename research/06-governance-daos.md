# 06 — Governance & DAOs

> "How do thousands of strangers coordinate without a CEO? DAOs are crypto's experiment in collective decision-making."

## Why This Canvas Matters

Every major protocol has governance. Users who hold tokens are (technically) part of a DAO whether they know it or not. This pillar explains how crypto projects make decisions and evolve.

---

## Canvas Structure

### Main Node: "Governance & DAOs"
*"Decentralized coordination: how crypto protocols make decisions, allocate resources, and evolve"*

### Sub-Nodes (5 categories):

#### 1. What is a DAO?
- **Concept**: A Decentralized Autonomous Organization — code-enforced rules, token-based membership
- **Nodes**:
  - DAO definition and history (The DAO, 2016)
  - Types: Protocol DAOs, Investment DAOs, Social DAOs, Service DAOs
  - DAO tooling: Snapshot (off-chain voting), Tally (on-chain), Governor (OpenZeppelin)
  - Treasury management (how DAOs manage billions)
  - DAO legal wrappers (LLC, foundation, unincorporated association)

#### 2. Voting Mechanisms
- **Nodes**:
  - Token-weighted voting (1 token = 1 vote — simple but plutocratic)
  - Quadratic voting (diminishing returns, more egalitarian)
  - Conviction voting (time-weighted, Gitcoin style)
  - Optimistic governance (passes unless vetoed — Optimism)
  - Dual-house governance (Token House + Citizens House — Optimism)
  - Delegation (delegate your votes to an expert)
  - Rage quit (exit with your share if you disagree — Moloch DAOs)
  - Participation rates: 17-25% average turnout

#### 3. Notable DAOs
- **Nodes**:
  - MakerDAO / Sky (oldest DeFi DAO, SubDAOs, $8B+ managed)
  - Uniswap Governance (UNI token, protocol fee switch debate)
  - Aave DAO (risk parameters, new market deployments)
  - Arbitrum DAO (ARB token, grants program)
  - Optimism Collective (Token House + Citizens House, retroPGF)
  - Nouns DAO (daily auctions, cultural experiment)
  - Gitcoin (quadratic funding, public goods)
  - ENS DAO (domain governance)

#### 4. DAO Challenges
- **Nodes**:
  - Voter apathy (most token holders don't vote)
  - Plutocracy (whales dominate)
  - Governance attacks (flash loan governance)
  - Coordination costs (slow decision-making)
  - Legal uncertainty
  - Progressive decentralization (starting centralized, gradually decentralizing)

#### 5. On-Chain Execution
- **Nodes**:
  - Timelocks (delay between vote and execution)
  - Multisigs (Safe/Gnosis — interim governance)
  - Governor contracts (OpenZeppelin standard)
  - Veto mechanisms (security council override)

---

## Cross-Links

| This Node | Links To | Why |
|-----------|----------|-----|
| Token Voting | Token Economics (07) | Governance tokens and value |
| Delegation | Identity (11) | Reputation-based delegation |
| DAO Treasuries | DeFi (03) | Where treasury yield comes from |
| Governance Attacks | Security (05) | Flash loan governance attacks |
| Legal Wrappers | Regulation (12) | DAO legal status |
| Optimism Governance | Chains > L2s (02) | Optimism's innovative model |

---

## Research Needed

- [ ] Top DAOs by treasury size
- [ ] Governance participation stats across major protocols
- [ ] Optimism's Citizens House and retroPGF — how it works in practice
- [ ] DAO legal landscape (Wyoming DAO LLC, Marshall Islands, etc.)
- [ ] Governance attack case studies (Beanstalk, Build Finance)
- [ ] Snapshot vs Tally vs Governor comparison
