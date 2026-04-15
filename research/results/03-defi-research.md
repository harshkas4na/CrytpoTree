# 03 — DeFi Research Results

> Research completed March 2026

---

## 1. DeFi TVL Breakdown by Category

### Total DeFi TVL: ~$200B+ (Q1 2026)

| Category | TVL | % of Total | Key Protocols |
|----------|-----|-----------|---------------|
| **Liquid Staking** | ~$65B | 32% | Lido ($33B), Rocket Pool, Jito, Marinade |
| **Lending** | ~$45B | 22% | Aave ($25B+), Compound, Morpho, Spark |
| **DEXs** | ~$25B | 12% | Uniswap, Curve, Aerodrome, Raydium |
| **Restaking** | ~$18B | 9% | EigenLayer ($15B), Symbiotic, Karak |
| **Bridges** | ~$12B | 6% | Stargate, Across, Wormhole |
| **CDP/Stablecoins** | ~$10B | 5% | MakerDAO/Sky, Liquity, Ethena |
| **Yield** | ~$8B | 4% | Pendle, Yearn, Beefy, Convex |
| **Derivatives** | ~$6B | 3% | GMX, Hyperliquid, dYdX, Synthetix |
| **RWA** | ~$8B | 4% | Ondo, BlackRock BUIDL, Centrifuge |
| **Other** | ~$5B | 3% | Insurance, options, misc |

### Chain Distribution of DeFi TVL
| Chain | TVL | % |
|-------|-----|---|
| Ethereum | ~$120B | 60% |
| Solana | ~$15B | 7.5% |
| Tron | ~$10B | 5% |
| BSC | ~$8B | 4% |
| Arbitrum | ~$18B | 9% |
| Base | ~$14B | 7% |
| Other | ~$15B | 7.5% |

---

## 2. AMM Deep Dive

### Constant Product Market Maker (x * y = k)
The foundation of Uniswap V2 and most DEXs:
- **Formula**: `x * y = k` where x = reserve of token A, y = reserve of token B, k = constant
- **Price**: `price_A = y / x` (the ratio of reserves)
- **Trade execution**: To buy `Δx` of token A, you pay `Δy = (y * Δx) / (x - Δx)` of token B
- **Slippage**: Larger trades move the price more. A trade of 1% of reserves causes ~2% price impact.

### Concentrated Liquidity (Uniswap V3/V4)
- LPs provide liquidity within a **specific price range** [p_low, p_high] instead of across all prices
- **Capital efficiency**: 100-4000x more efficient than V2 for the same capital
- **Math**: Within a range, uses `(√x + L/√p_high) * (√y + L*√p_low) = L²` where L = liquidity
- **Tradeoff**: LPs must actively manage positions; out-of-range positions earn 0 fees

### Impermanent Loss Formula
```
IL = 2 * √(price_ratio) / (1 + price_ratio) - 1

Where price_ratio = new_price / entry_price
```

| Price Change | Impermanent Loss |
|-------------|-----------------|
| ±25% | -0.6% |
| ±50% | -2.0% |
| ±75% | -3.8% |
| 2x (100%) | -5.7% |
| 3x (200%) | -13.4% |
| 5x (400%) | -25.5% |

### Stable AMM (Curve's StableSwap)
- **Formula**: `A * n^n * Σx + D = A * D * n^n + D^(n+1) / (n^n * Πx)` where A = amplification parameter
- **Effect**: Near-zero slippage for similarly-priced assets (stablecoins, ETH/stETH)
- **A parameter**: Higher A = flatter curve = less slippage for stable pairs. Too high = vulnerability to depegs.

### Uniswap V4 Hooks
- V4 introduces a **hooks system** — custom smart contracts that execute at key points in the swap lifecycle
- Hook points: beforeInitialize, afterInitialize, beforeSwap, afterSwap, beforeAddLiquidity, etc.
- Enables: dynamic fees, TWAMM (time-weighted AMM), limit orders, oracle integration, MEV protection
- **Singleton contract**: All pools in one contract (saves gas on multi-hop swaps)

---

## 3. Lending Protocol Comparison

| Feature | Aave V3 | Morpho | Euler V2 |
|---------|---------|--------|----------|
| **Architecture** | Pool-based (shared pools) | Peer-to-peer matching + pool fallback | Modular vault system |
| **Risk Model** | Shared risk across all assets in pool | Isolated by design (per-market) | Customizable via vault curators |
| **Isolation Mode** | Yes (for riskier assets) | Every market is isolated | Core architecture |
| **Efficiency** | Good (E-Mode for correlated assets) | Better (P2P matching gets better rates) | Flexible (curator-defined) |
| **Governance** | DAO-governed risk params | Immutable markets + DAO curators | Permissionless vault creation |
| **Multi-chain** | 10+ chains | Ethereum, Base (expanding) | Ethereum (expanding) |
| **TVL** | ~$25B+ | ~$5B+ | ~$1B+ |
| **Key Innovation** | E-Mode, cross-chain portals | MetaMorpho vaults (curated lending) | EVC (Ethereum Vault Connector) |
| **Flash Loans** | Yes (0.05% fee) | Via underlying pool | Yes |

### Key Insights
- **Aave V3** remains the king by TVL but faces criticism for shared pool risk and governance overhead
- **Morpho** pioneered the "unbundled lending" thesis — separate rate optimization from risk management
- **Euler V2** is the most modular — anyone can create a lending vault with custom parameters via EVC
- **Trend**: Market moving from "one pool to rule them all" to "curated, isolated markets"

---

## 4. Stablecoin Market Data

### Market Cap (Q1 2026)

| Stablecoin | Market Cap | Market Share | Chain Distribution |
|-----------|-----------|--------------|-------------------|
| **USDT** (Tether) | ~$140B | 62% | Tron 50%, Ethereum 30%, BSC 8%, Others 12% |
| **USDC** (Circle) | ~$55B | 24% | Ethereum 55%, Solana 15%, Base 10%, Arbitrum 8% |
| **USDe** (Ethena) | ~$6B | 2.7% | Ethereum primarily |
| **DAI/USDS** (Sky) | ~$5B | 2.2% | Ethereum |
| **FDUSD** (First Digital) | ~$3B | 1.3% | BSC, Ethereum |
| **PYUSD** (PayPal) | ~$1.5B | 0.7% | Ethereum, Solana |
| **GHO** (Aave) | ~$500M | 0.2% | Ethereum |
| **LUSD** (Liquity) | ~$300M | 0.1% | Ethereum |

### Volume Data
- **Annual stablecoin transfer volume**: $46T+ (2025 data)
- Exceeds Visa ($14T) and Mastercard ($9T) combined
- USDT on Tron processes ~$15B+ daily
- USDC growing faster due to regulatory compliance (MiCA-approved)

---

## 5. Ethena (USDe) Mechanism

### How the Basis Trade Works
1. **User deposits**: stETH (liquid staked ETH) or other collateral
2. **Ethena hedges**: Opens an equal short perpetual futures position on the deposited ETH
3. **Result**: Delta-neutral position — doesn't matter if ETH goes up or down
4. **Revenue sources**:
   - Staking yield from stETH (~3-4% APY)
   - Funding rate from short perp position (usually positive — longs pay shorts — ~5-25% APY historically)
5. **USDe**: Minted against this delta-neutral position. ~$1 value backed by hedged collateral.
6. **sUSDe**: Staked USDe that earns the yield. APY has ranged from 5-30%+.

### Risk Factors
- **Negative funding rates**: If funding flips negative (shorts pay longs), the strategy loses money. Has happened during bear markets.
- **Exchange risk**: Positions held on centralized exchanges (Binance, OKX, Bybit). If exchange fails, collateral at risk.
- **Custodian risk**: Uses Copper, Ceffu, Fireblocks for off-exchange settlement
- **stETH depeg risk**: If stETH depegs from ETH, the hedge becomes imperfect
- **Liquidity risk**: In a crisis, unwinding large positions could be costly

### Insurance Fund
- Ethena maintains a reserve fund ($50M+) to cover periods of negative funding
- ~5-10% of yield is redirected to the insurance fund during high-yield periods

---

## 6. Restaking Landscape

### EigenLayer (Dominant Player)
- **TVL**: ~$15B in restaked ETH/LSTs
- **Concept**: ETH stakers "restake" their staked ETH to secure additional services (Actively Validated Services — AVS)
- **Revenue**: Restakers earn fees from AVS in addition to ETH staking rewards
- **Key AVS**: EigenDA (data availability), Omni (cross-rollup interop), AltLayer (restaked rollups), Lagrange, Brevis
- **Risk**: Slashing risk from multiple services simultaneously. Systemic risk if many AVS fail.
- **EIGEN token**: Launched 2024, governance + intersubjective staking

### Symbiotic
- **TVL**: ~$2B+
- **Differentiator**: More permissionless and modular than EigenLayer. Any asset can be used as collateral (not just ETH/LSTs)
- **Architecture**: Vaults (collateral management) → Networks (what gets secured) → Operators (who runs infra)
- **Backed by**: Lido DAO, Paradigm
- **Position**: "The flexible alternative" — supports arbitrary collateral types

### Karak
- **TVL**: ~$1B+
- **Differentiator**: Multi-asset restaking (ETH, stablecoins, LSTs) with focus on Distributed Secure Services (DSS)
- **Architecture**: Similar to EigenLayer but supports restaking on multiple chains natively
- **Backed by**: Lightspeed, Pantera

### LRT (Liquid Restaking Token) Landscape
| LRT | Underlying | TVL | Protocol |
|-----|-----------|-----|----------|
| eETH (ether.fi) | Restaked ETH | ~$6B | ether.fi |
| pufETH (Puffer) | Restaked ETH | ~$2B | Puffer Finance |
| ezETH (Renzo) | Restaked ETH | ~$3B | Renzo |
| rsETH (Kelp) | Restaked ETH | ~$1.5B | Kelp DAO |

---

## 7. Flash Loan Attack Case Studies

### Euler Finance (March 2023) — $197M
- **Vector**: Donated collateral to self, exploited liquidation logic to extract more than deposited
- **Mechanism**: Borrowed via flash loan → deposited → donated to bad debt address → triggered liquidation at favorable price → profit
- **Outcome**: Hacker returned all funds after 3 weeks of negotiation. Euler resumed operations.

### Beanstalk (April 2022) — $182M
- **Vector**: Flash loan governance attack
- **Mechanism**: Borrowed $1B via Aave flash loan → acquired enough BEAN tokens → passed malicious governance proposal in one transaction → drained treasury
- **Key lesson**: On-chain governance with no timelock is vulnerable to flash-loan-funded voting

### Pancake Bunny (May 2021) — $45M
- **Vector**: Flash loan price manipulation
- **Mechanism**: Flash-borrowed BNB → manipulated PancakeSwap pool price → Bunny's pricing oracle read manipulated price → minted excess BUNNY tokens → dumped tokens

### Cream Finance (October 2021) — $130M
- **Vector**: Flash loan + oracle manipulation + reentrancy combo
- **Multiple attacks**: Cream was exploited 3 separate times in 2021, losing a total of ~$190M

### Common Patterns
1. **Price oracle manipulation**: Flash loan → pump/dump on DEX → oracle reads manipulated price → exploit
2. **Governance attacks**: Flash loan → acquire voting tokens → pass malicious proposal → drain
3. **Reentrancy + flash loans**: Use flash-loaned funds to trigger reentrancy in lending protocols
4. **Self-liquidation**: Flash loan → create undercollateralized position → liquidate yourself at profit

---

## 8. Prediction Markets — Polymarket

### Architecture
- **Chain**: Polygon (PoS) — chosen for low fees and speed
- **Order book**: Hybrid on-chain/off-chain. Orders matched off-chain (CLOB), settled on-chain.
- **Conditional Tokens Framework** (CTF): Uses Gnosis CTF standard — each outcome is a separate ERC-1155 token
- **Resolution**: UMA's Optimistic Oracle — anyone can propose an outcome, disputed if wrong
- **Trading**: Binary outcomes (Yes/No tokens). Each market resolves to $1 (yes) or $0 (no). Current price = market probability.

### Volume and Metrics (Q1 2026)
- **Cumulative volume**: $15B+ all-time
- **2024 volume**: ~$9B (driven by US Presidential election — single largest event market ever)
- **Monthly active traders**: 100K+ during peak periods
- **Open interest**: $500M-$1B+ during major events
- **Markets**: 500+ active markets (politics, crypto, sports, culture, science)

### Key Moments
- **2024 US Election**: Polymarket's most famous moment. $3.5B+ traded on the presidential race alone. Predicted Trump victory more accurately than most polls.
- **Post-election growth**: Expanded beyond politics into sports, finance, and cultural events
- **Regulatory status**: Blocked in US (offshore), but significant US user base via VPNs. CFTC granted Kalshi (competitor) approval for event contracts.

### Revenue Model
- No trading fees (Polymarket takes 0%)
- Revenue from interest earned on USDC deposits and potential future fee introduction
- Funded by investors (Founders Fund, Vitalik Buterin)
