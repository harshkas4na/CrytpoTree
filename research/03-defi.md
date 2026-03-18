# 03 — DeFi: The Financial Layer

> "The killer app of crypto — permissionless finance that anyone can use, compose, and build on."

## Why This Canvas Matters

DeFi is what most people actually *use* in crypto. Currently, DeFi protocols appear scattered across chain canvases (Uniswap under ETH, Jupiter under SOL). This pillar teaches DeFi as **concepts first**, then links to specific protocols.

An intermediate user who trades on Uniswap should click here and realize: "Oh, Uniswap is an AMM, and AMMs are just one type of DEX, and DEXs are just one piece of DeFi."

---

## Canvas Structure

### Main Node: "DeFi"
*"Permissionless financial primitives: trade, lend, earn, insure — without intermediaries"*

### Sub-Nodes (8 categories):

#### 1. DEXs & Trading
- **Concept**: Decentralized exchanges — how to swap tokens without a middleman
- **Sub-canvas nodes**:
  - AMMs (Automated Market Makers)
    - Constant Product (x*y=k) — Uniswap V2
    - Concentrated Liquidity — Uniswap V3/V4, Orca
    - Stable AMMs (Curve's stableswap invariant)
    - How LPs work, impermanent loss explained
  - Order Book DEXs
    - On-chain orderbooks (dYdX, Hyperliquid, Serum)
    - Central limit order books vs AMMs (tradeoffs)
  - DEX Aggregators
    - 1inch, Jupiter, Paraswap, CowSwap
    - How routing optimization works
  - Intent-Based Trading
    - UniswapX, CowSwap (off-chain matching, on-chain settlement)
    - Solvers and fillers
- **Protocols by chain**: Uniswap (ETH), Jupiter (SOL), PancakeSwap (BNB), TraderJoe (AVAX), Aerodrome (Base)
- **Beginner angle**: "How can you swap tokens without Coinbase?"
- **Advanced angle**: Hook system in Uniswap V4, MEV-aware AMM design, solver competition

#### 2. Lending & Borrowing
- **Concept**: Supply assets to earn interest, borrow against collateral
- **Sub-canvas nodes**:
  - Pool-based lending (Aave, Compound — overcollateralized)
  - Isolated lending markets (Morpho, Euler V2, Silo)
  - How liquidations work
  - Flash loans (uncollateralized, atomic, single-tx loans)
  - Interest rate models (utilization curves)
  - Credit protocols (undercollateralized — Maple, Goldfinch, Centrifuge)
- **Protocols**: Aave (multi-chain king), Compound, Morpho, Spark (MakerDAO), MakerDAO/Sky
- **Beginner angle**: "It's like a bank savings account but you control the rules"
- **Advanced angle**: Isolated markets, bad debt risk, e-mode, recursive leverage

#### 3. Derivatives & Perpetuals
- **Concept**: Trade price exposure without owning the asset
- **Sub-canvas nodes**:
  - Perpetual futures (no expiry, funding rates)
  - Options (calls, puts, vaults)
  - Structured products (yield through options strategies)
  - Synthetic assets (mirror real-world asset prices)
  - Prediction markets (Polymarket, Kalshi)
- **Protocols**: GMX, Hyperliquid, dYdX, Synthetix, Lyra, Hegic, Polymarket
- **Beginner angle**: "Betting on price without buying the coin"
- **Advanced angle**: Funding rate arbitrage, delta-neutral strategies, oracle dependency

#### 4. Stablecoins
- **Concept**: Crypto tokens pegged to fiat currencies (usually $1)
- **Sub-canvas nodes**:
  - Fiat-backed: USDT (Tether), USDC (Circle)
  - CDP-backed: DAI (MakerDAO), LUSD (Liquity), GHO (Aave)
  - Algorithmic (and why most failed — UST/Luna collapse)
  - RWA-backed stablecoins (USDY by Ondo)
  - Yield-bearing stablecoins (sDAI, USDe by Ethena)
  - Stablecoin market share and dominance
  - $46T annual stablecoin transfer volume (2025)
- **Beginner angle**: "Why do we need a crypto dollar?"
- **Advanced angle**: Ethena's basis trade, depeg risk, MakerDAO's RWA exposure, regulatory classification

#### 5. Yield & Staking
- **Concept**: Earn returns on crypto assets
- **Sub-canvas nodes**:
  - Native staking (validator rewards — ETH, SOL, ATOM)
  - Liquid staking (Lido stETH, Rocket Pool rETH, Jito jitoSOL, Marinade mSOL)
  - Restaking (EigenLayer — restake ETH to secure other protocols)
  - Liquid restaking tokens (LRTs — Renzo, Puffer, Ether.fi)
  - Yield farming (providing liquidity for rewards)
  - Yield aggregators (Yearn, Beefy — auto-compound strategies)
  - Points and airdrops meta (farming future tokens)
- **Beginner angle**: "How to earn interest on your crypto"
- **Advanced angle**: Restaking security model, LRT depegging risks, sustainable vs mercenary yield

#### 6. Real World Assets (RWA)
- **Existing canvas** — enhance with conceptual framing
- **What's tokenized**:
  - US Treasuries ($30B+ tokenized — Ondo, BlackRock BUIDL, Franklin Templeton)
  - Private credit (Centrifuge, Maple, Goldfinch)
  - Real estate (RealT, Propy)
  - Commodities (gold — PAXG, Tether Gold)
  - Securities and equities (Securitize, Backed Finance)
- **Why it matters**: Bridges TradFi and DeFi, largest TAM in crypto ($100T+ addressable)

#### 7. Insurance & Risk
- **Concept**: Protecting against smart contract failures and hacks
- **Sub-canvas nodes**:
  - Nexus Mutual (mutual insurance for smart contracts)
  - InsurAce (cross-chain coverage)
  - Risk assessment protocols
  - Hack insurance and coverage payouts
- **Beginner angle**: "What happens if a protocol gets hacked and you lose funds?"
- **Advanced angle**: Actuarial models on-chain, parametric insurance

#### 8. Payments
- **Existing canvas** — keep and link here
- Enhanced with: stablecoin payments volume data, merchant adoption, x402 standard

---

## The DeFi Stack (Conceptual Diagram)

```
┌──────────────────────────────────┐
│         Applications             │  ← Yield aggregators, structured products
├──────────────────────────────────┤
│      Derivatives & Options       │  ← Perps, options, prediction markets
├──────────────────────────────────┤
│      Lending & Borrowing         │  ← Aave, Compound, flash loans
├──────────────────────────────────┤
│      DEXs & Liquidity            │  ← Uniswap, Curve, AMMs, orderbooks
├──────────────────────────────────┤
│        Stablecoins               │  ← USDT, USDC, DAI — the unit of account
├──────────────────────────────────┤
│      Oracles & Price Feeds       │  ← Chainlink, Pyth — the data layer
├──────────────────────────────────┤
│    Blockchain Settlement Layer   │  ← Ethereum, Solana, L2s
└──────────────────────────────────┘
```

---

## Cross-Links

| This Node | Links To | Why |
|-----------|----------|-----|
| AMMs | MEV (05) | Sandwich attacks, arbitrage on AMMs |
| Lending | Security (05) | Oracle manipulation → bad liquidations |
| Stablecoins | Regulation (12) | MiCA, GENIUS Act target stablecoins |
| Stablecoins | Payments (10) | Stablecoins ARE the payment rail |
| Yield/Staking | Token Economics (07) | Staking rewards = inflation |
| Restaking | Infrastructure (04) | EigenLayer secures middleware |
| Flash Loans | Security (05) | Flash loan attack vectors |
| RWA | Regulation (12) | Securities law implications |
| DeFi Stack | Chains (02) | DeFi runs on L1s and L2s |
| Oracles | Infrastructure (04) | Chainlink, Pyth |

---

## Research Needed

- [ ] DeFi TVL breakdown by category (DEX, lending, staking, bridges, etc.)
- [ ] AMM deep dive — x*y=k math, concentrated liquidity, impermanent loss formulas
- [ ] Lending protocol comparison (Aave V3 vs Morpho vs Euler V2 — architecture differences)
- [ ] Stablecoin market cap and volume data (USDT vs USDC vs DAI vs USDe)
- [ ] Ethena (USDe) mechanism — basis trade yield explained
- [ ] Restaking landscape — EigenLayer, Symbiotic, Karak
- [ ] Flash loan attack case studies (for security cross-link)
- [ ] Prediction markets: Polymarket architecture and volume
