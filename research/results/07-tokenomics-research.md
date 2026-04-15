# 07 — Token Economics Research Results

> Research completed March 2026

---

## 1. Top Protocols by Revenue

### Annual Protocol Revenue (2024-2025 data)

| Protocol | Annual Revenue | Revenue Model | Chain | P/S Ratio |
|----------|---------------|---------------|-------|-----------|
| **Tether (USDT)** | ~$6B+ | Interest on reserves | Multi-chain | N/A (private) |
| **Circle (USDC)** | ~$1.5B+ | Interest on reserves | Multi-chain | N/A (private) |
| **Ethereum** | ~$2.5B+ | Gas fees (base fee burned + tips) | Ethereum | ~100x |
| **Lido** | ~$800M | 10% of staking rewards | Ethereum | ~10x |
| **MakerDAO/Sky** | ~$300M+ | Stability fees + RWA yield | Ethereum | ~25x |
| **Aave** | ~$250M+ | Lending spread (borrow rate - supply rate) | Multi-chain | ~20x |
| **Uniswap Labs** | ~$150M+ | Frontend fee (0.15-0.25%) | Multi-chain | N/A (separate from protocol) |
| **Hyperliquid** | ~$200M+ | Trading fees | Hyperliquid L1 | N/A (no token revenue share yet) |
| **PancakeSwap** | ~$150M+ | Trading fees | BSC, Multi-chain | ~8x |
| **dYdX** | ~$100M+ | Trading fees | dYdX Chain | ~20x |
| **GMX** | ~$100M+ | Trading + LP fees | Arbitrum, Avalanche | ~10x |
| **Jupiter** | ~$100M+ | Trading fees, launchpad | Solana | ~30x |
| **Raydium** | ~$80M+ | Trading fees | Solana | ~15x |
| **Jito** | ~$80M+ | MEV tips + staking commission | Solana | ~50x |

### Key Insights
- **Stablecoin issuers** are the most profitable entities in crypto by far
- **Real yield protocols** (GMX, Aave, MakerDAO) distribute protocol revenue to token holders
- **"Ponzi yield"** (token emissions as rewards) is declining in favor of sustainable revenue models
- **P/S ratios** in crypto remain high (10-100x) compared to TradFi stocks (1-5x)

---

## 2. ve-Token Model Deep Dive

### The Curve Wars
**Origin**: Curve Finance introduced veCRV (vote-escrowed CRV) in 2020:
1. Lock CRV tokens for 1-4 years → receive veCRV (non-transferable)
2. veCRV holders vote on which liquidity pools receive CRV emissions (gauge weights)
3. Higher emissions → higher APY → more liquidity → more trading volume
4. This creates a "war" to accumulate veCRV voting power

### The Players
| Protocol | Role | Mechanism | veCRV Controlled |
|----------|------|-----------|-----------------|
| **Convex Finance** | CRV yield optimizer | Aggregates CRV deposits, votes as a block | ~50% of all veCRV |
| **Votium** | Bribe marketplace | Protocols pay vlCVX holders to vote for their pools | Distributes $100M+/year in bribes |
| **Aura Finance** | Balancer's Convex | Same model for Balancer's veBAL | ~35% of veBAL |
| **Stake DAO** | Liquid locker alternative | Offers sdCRV (liquid wrapper) | ~3-5% of veCRV |

### How Bribing Works
1. Protocol X wants more CRV emissions for their pool (e.g., FRAX/USDC)
2. Protocol X pays $1 per veCRV vote on Votium
3. vlCVX holders (Convex depositors) direct their votes to Protocol X's gauge
4. Protocol X gets $3+ worth of CRV emissions per $1 spent on bribes
5. **ROI**: Bribing is 2-5x more capital efficient than buying CRV directly

### ve-Token Adoption
| Protocol | ve-Token | Lock Period | Key Benefit |
|----------|----------|------------|-------------|
| Curve | veCRV | 1-4 years | Gauge voting, boosted rewards |
| Balancer | veBAL | 1 year | Gauge voting, fee share |
| Velodrome (Optimism) | veVELO | 1-4 years | Gauge voting, bribe collection |
| Aerodrome (Base) | veAERO | 1-4 years | Gauge voting, bribe collection |
| Pendle | vePENDLE | 1-2 years | Yield voting, boosted rewards |

### Criticisms
- **Illiquidity**: Locking tokens for 4 years is a huge commitment
- **Governance capture**: Convex controls majority of veCRV — concentrated power
- **Complexity**: Multi-layer (CRV → veCRV → Convex → vlCVX → Votium) is confusing
- **Alternatives**: ve(3,3) model (André Cronje's Solidly/Velodrome) tried to fix some issues

---

## 3. Airdrop History and Outcomes

### Major Airdrops and User Retention

| Airdrop | Date | Value at Drop | Recipients | 6-Month Retention | Outcome |
|---------|------|--------------|-----------|-------------------|---------|
| **Uniswap (UNI)** | Sep 2020 | $1,200 (400 UNI) | 250K+ | ~20% still hold | Gold standard. 400 UNI to every user. Most successful ever. |
| **ENS** | Nov 2021 | $2,000-$50,000+ | 137K | ~40% still hold | Time-weighted, rewarded long-term users |
| **Optimism (OP)** Round 1 | Jun 2022 | $300-$5,000+ | 250K+ | ~15% | Multi-criteria, many Sybil farmers |
| **Arbitrum (ARB)** | Mar 2023 | $500-$10,000+ | 625K+ | ~12% | Huge distribution, massive sell pressure |
| **Celestia (TIA)** | Oct 2023 | $500-$5,000+ | 576K | ~10% | Ecosystem participants, developers |
| **Jito (JTO)** | Dec 2023 | $1,000-$10,000+ | 10K | ~25% | Small, targeted to Jito stakers |
| **Jupiter (JUP)** | Jan 2024 | $200-$10,000+ | 955K | ~15% | Largest Solana airdrop |
| **EigenLayer (EIGEN)** | May 2024 | $100-$5,000+ | 1.1M | ~8% | Controversial — low allocation, high FDV |
| **LayerZero (ZRO)** | Jun 2024 | $50-$2,000 | 1.3M | ~5% | Required $0.10 "proof of donation", many farmed |
| **Starknet (STRK)** | Feb 2024 | $200-$5,000+ | 1.3M | ~8% | Large but many Sybil accounts |
| **ZKsync (ZK)** | Jun 2024 | $100-$3,000+ | 695K | ~5% | Heavily farmed, poor retention |

### Key Insights
- **Retention is terrible**: Most airdrops see 70-90% of tokens sold within 6 months
- **Best retention**: ENS (strong utility — domain names) and Jito (small, targeted)
- **Worst retention**: LayerZero, ZKsync (heavily farmed, low engagement)
- **Sybil farming** has become an industry: Thousands of wallets controlled by farming operations
- **Trend**: Protocols moving toward points systems and criteria-based distribution to improve targeting

---

## 4. Token Unlock Calendar — Notable Upcoming Events

### Major Unlocks (Q2-Q4 2026 — Illustrative)

| Token | Unlock Date | Amount | % of Circulating Supply | Type |
|-------|-----------|--------|------------------------|------|
| **ARB** | Monthly | ~90M ARB/month | ~2-3% | Investor/team vesting |
| **OP** | Monthly | ~30M OP/month | ~2% | Team/investor vesting |
| **APT** | Monthly | ~10M APT/month | ~2% | Ecosystem/community |
| **SUI** | Monthly | ~70M SUI/month | ~2-3% | Treasury/ecosystem |
| **SEI** | Various | Varies | ~3-5% | Team/investor cliff |
| **STRK** | Monthly | ~65M STRK/month | ~3% | Various categories |
| **TIA** | Oct 2026 | ~175M TIA | ~80%+ | Massive cliff unlock |
| **ENA** | Various | ~300M ENA in 2026 | ~15%+ | Team/investor |

### Key Insights
- **TIA (Celestia)** has one of the most dramatic cliff unlocks in crypto history — ~80% of supply unlocking in late 2026
- **Rule of thumb**: >5% of circulating supply unlocking per month creates significant sell pressure
- **Best practice**: Check TokenUnlocks.app or CryptoRank before any major position
- **FDV trap**: Token trading at $10B FDV with only 10% circulating means $9B of future sell pressure

---

## 5. FDV vs Market Cap Controversies

### The Problem
Many 2024-2025 token launches had:
- **High FDV**: $5-20B fully diluted valuation at launch
- **Low float**: Only 5-15% of tokens in circulation
- **Result**: Price declines as tokens unlock (constant sell pressure from team/investors)

### Notable Examples
| Token | Launch FDV | Float at Launch | Price Change (6mo) | Problem |
|-------|-----------|----------------|-------------------|---------|
| **W (Wormhole)** | $13B | ~6% | -70% | Massive FDV, tiny float |
| **STRK (StarkNet)** | $20B+ | ~7% | -80% | High FDV, poor tokenomics |
| **ZK (zkSync)** | $3.5B | ~17% | -60% | Airdrop dump + unlocks |
| **ZRO (LayerZero)** | $5B | ~11% | -65% | Low utility, heavy farming |
| **ENA (Ethena)** | $14B | ~6% | -50% | Seasonal yield concerns |

### The Debate
**Bears argue**: High FDV / low float is extractive — insiders dump on retail at inflated valuations
**Bulls argue**: Need high FDV to attract talent, fund development, maintain competitive market cap ranking

### Market Response
- Memecoin meta partially driven by reaction to VC high-FDV launches — memecoins launch at low FDV with 100% float
- Binance launched "fair launch" initiatives, community pushback on high-FDV listings
- Some protocols now opting for lower FDV launches or higher initial float

---

## 6. Points Meta Analysis

### How Points Systems Work
1. Protocol announces future token airdrop
2. Users earn "points" by using the protocol (deposits, trading, referrals)
3. Points convert to tokens at TGE (Token Generation Event)
4. Conversion rate unknown until launch — creates speculative farming

### Results by Protocol

| Protocol | Points Duration | TVL Impact | Token Launch | Did It Work? |
|----------|----------------|-----------|-------------|--------------|
| **Blast** | 5 months | $0 → $2.3B TVL | Jun 2024, BLAST | Mixed. TVL surged but retention poor. Many farmed and left. |
| **EigenLayer** | 12+ months | $0 → $15B TVL | May 2024, EIGEN | Yes for TVL. But airdrop disappointment (low allocations). |
| **LayerZero** | 8 months | N/A (messaging) | Jun 2024, ZRO | Poor. Heavy farming, low retention, "proof of donation" backlash. |
| **Ethena** | 3 months ("Season 1") | $0 → $2B TVL | Apr 2024, ENA | Yes. High TVL, strong initial token performance. |
| **Hyperliquid** | 12+ months | Grew to $2B+ TVL | Nov 2024, HYPE | Huge success. No VC, 31% airdrop, massive community support. |
| **Jupiter** | Ongoing (multiple seasons) | N/A (DEX aggregator) | Jan 2024, JUP | Mixed. Good initial launch, but multiple seasons diluted excitement. |

### Key Insights
- **Points inflate TVL artificially** — when farming ends, TVL often drops 30-60%
- **Mercenary capital**: Most point farmers move capital to next opportunity immediately
- **Hyperliquid was the exception**: Succeeded because of genuine product-market fit + generous airdrop + no VC allocation
- **Fatigue**: Users are increasingly skeptical of points programs — "point farming" feels like unpaid labor
- **Sybil problem**: Points systems are heavily Sybil-farmed. Detection is cat-and-mouse game.

---

## 7. Memecoin Economics

### Pump.fun Mechanics
- **Platform**: Solana-based memecoin launchpad (launched Jan 2024)
- **How it works**:
  1. Anyone creates a token with a name, ticker, and image (cost: ~$2)
  2. Token launches on a **bonding curve** — price rises as more people buy
  3. When market cap reaches ~$69K, liquidity is automatically migrated to Raydium (DEX)
  4. Creator receives no allocation — pure "fair launch"

### Pump.fun Stats (through Q1 2026)
| Metric | Value |
|--------|-------|
| **Total tokens created** | 10M+ |
| **Tokens that reached Raydium** | ~2-3% (~200-300K) |
| **Tokens with >$1M market cap** | <0.1% |
| **Platform revenue** | $500M+ (1% creation fee + trading fees) |
| **Peak daily tokens created** | 100,000+ |
| **Total volume facilitated** | $50B+ |

### Bonding Curve Math
- Pump.fun uses a **linear bonding curve**: `price = a * supply + b`
- As people buy tokens, price increases linearly
- Total cost to buy all tokens to migration threshold (~$69K market cap): ~$69K in SOL
- At migration: ~80% of SOL in the bonding curve goes to Raydium liquidity pool

### Memecoin Market Overview
| Memecoin | Market Cap | Chain | Origin |
|----------|-----------|-------|--------|
| **DOGE** | ~$30B | Dogecoin (own chain) | 2013, OG memecoin |
| **SHIB** | ~$10B | Ethereum | 2020, "Dogecoin killer" |
| **PEPE** | ~$5B | Ethereum | 2023, Pepe the Frog meme |
| **WIF** | ~$2B | Solana | 2023, dog with hat |
| **BONK** | ~$1.5B | Solana | 2022, Solana community coin |
| **FLOKI** | ~$1B | Multi-chain | 2021, Elon's dog |
| **TRUMP** | ~$3B | Solana | 2025, political memecoin |

### The Economics
- **No utility**: Memecoins have no revenue, no product, no utility — pure speculation + community
- **100% circulating**: Unlike VC tokens, most memecoins launch with 100% supply available (no unlocks)
- **Winner-take-most**: Of 10M+ memecoins created on Pump.fun, <100 achieved sustained $1M+ market cap
- **Revenue model**: Some memecoins add tax (1-5% per trade) that goes to treasury/marketing
- **Cultural value**: The argument FOR memecoins — they're the most honest tokens (no fake utility promises)
