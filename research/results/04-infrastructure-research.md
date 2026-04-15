# 04 — Infrastructure Research Results

> Research completed March 2026

---

## 1. Oracle Comparison

| Feature | Chainlink | Pyth Network | API3 |
|---------|-----------|-------------|------|
| **Architecture** | Decentralized oracle network (DON) | Pull-based, first-party publishers | First-party oracles (dAPIs) |
| **Data Model** | Push-based (updates on-chain periodically or on deviation) | Pull-based (consumers pull latest price on-demand) | Hybrid (push + pull, Airnode) |
| **Update Frequency** | Heartbeat (e.g., every 1hr) + deviation threshold (e.g., 0.5%) | Sub-second (every 400ms on Pythnet) | Configurable per dAPI |
| **Data Sources** | Professional node operators aggregate from multiple sources | First-party: exchanges, market makers publish directly (Jane Street, CBOE, Binance) | API providers run their own Airnode |
| **Chains Supported** | 25+ chains (EVM, Solana, etc.) | 50+ chains | 15+ chains |
| **Price Feeds** | 1,000+ feeds | 500+ feeds | 200+ feeds |
| **Cost to Consumer** | Free to read (sponsors pay for updates) | ~$0.01 per pull (gas cost of updating on-chain) | Varies by dAPI plan |
| **Key Products** | Data Feeds, VRF, CCIP, Automation, Functions | Price feeds, benchmarks, entropy (VRF) | dAPIs, QRNG, OEV Network |
| **Market Share** | ~50%+ of all DeFi protocols | Growing fast, dominant on Solana | Niche but growing |
| **Unique Feature** | CCIP (cross-chain messaging), most battle-tested | Confidence intervals (price + uncertainty range) | OEV Network (captures oracle extractable value) |
| **Token** | LINK ($15B+ market cap) | PYTH ($3B+) | API3 ($500M+) |

### Key Insights
- **Chainlink** remains the default choice — most integrations, most battle-tested, broadest product suite
- **Pyth** disrupted with pull-based model — cheaper and faster, dominant on Solana, growing on EVM
- **Push vs Pull**: Push (Chainlink) costs more but data is always on-chain. Pull (Pyth) is cheaper but requires consumer to fetch.
- **OEV (Oracle Extractable Value)**: When oracle updates create arbitrage opportunities. API3's OEV Network and Chainlink's fair-value oracles aim to capture/reduce this.

---

## 2. Indexer Comparison

| Feature | The Graph | Goldsky | Envio |
|---------|-----------|---------|-------|
| **Architecture** | Decentralized protocol (Indexers, Curators, Delegators) | Centralized managed service | Centralized managed service |
| **Query Language** | GraphQL (subgraphs) | GraphQL (subgraphs + Mirror) | GraphQL (HyperIndex) |
| **Speed (Indexing)** | Minutes to hours for new data | Real-time (~seconds) | Real-time (~seconds) |
| **Speed (Queries)** | 100ms-2s (depends on indexer) | <100ms | <100ms |
| **Chains** | 60+ chains | 35+ chains | 40+ chains |
| **Pricing** | Pay per query (GRT token) or hosted free tier | $49-$999+/month | Free tier + usage-based |
| **Decentralization** | Yes (decentralized network of indexers) | No (managed infra) | No (managed infra) |
| **Unique Feature** | Decentralized, token-incentivized | Mirror (real-time streaming to any sink — Kafka, Postgres) | HyperIndex (codegen from contract ABI, fastest setup) |
| **Developer Experience** | Steeper learning curve (AssemblyScript, deploy to network) | Easy migration from hosted subgraphs | Fastest onboarding (auto-generates indexer) |
| **Use Cases** | DeFi dashboards, dApps, general indexing | Real-time analytics, high-throughput apps | Quick prototyping, multi-chain apps |

### Key Insights
- **The Graph** is the only decentralized option but is slower and more complex to use
- **Goldsky Mirror** is unique — streams blockchain data to any database in real-time (Postgres, ClickHouse, Kafka)
- **Envio HyperIndex** has the best DX — auto-generates indexer code from contract ABI
- **Trend**: Most teams use centralized indexers (Goldsky/Envio) for speed, The Graph for decentralization signaling

---

## 3. RPC Provider Comparison

| Provider | Chains | Free Tier | Paid Plans | Unique Feature |
|----------|--------|-----------|------------|----------------|
| **Alchemy** | 40+ chains | 300M compute units/month | $49-$399+/month | Account Abstraction SDK, NFT API, debug tools |
| **Infura** | 15+ chains | 100K req/day | $50-$1000+/month | Oldest provider, ConsenSys ecosystem |
| **QuickNode** | 70+ chains | 10M API credits/month | $49-$899+/month | Marketplace (add-ons), webhooks, custom streams |
| **Helius** | Solana only | 30K req/day | $49-$499+/month | Best Solana API (DAS, webhooks, priority fees) |
| **Ankr** | 40+ chains | Free (rate-limited) | $49+/month | Decentralized RPC network, premium endpoints |
| **dRPC** | 50+ chains | Free tier | Pay-per-request | Decentralized aggregator (routes to multiple providers) |

### Key Insights
- **Alchemy** dominates EVM chains (~70% market share for premium APIs)
- **Helius** is the clear winner for Solana-specific development
- **QuickNode** has the most chains but less depth per chain
- **Decentralized RPCs** (Ankr, dRPC) are growing but still have higher latency than centralized options
- **Cost**: A production dApp typically spends $100-$500/month on RPC, scaling to $1000s+ for high-traffic apps

---

## 4. ERC-4337 (Account Abstraction) Adoption Stats

### Deployment Numbers (Q1 2026)
| Metric | Value |
|--------|-------|
| **Total smart accounts deployed** | 30M+ |
| **Monthly active smart accounts** | 5M+ |
| **Total UserOperations processed** | 300M+ |
| **Top chains by AA usage** | Polygon, Base, Arbitrum, Optimism |

### Bundler Market Share
| Bundler | Market Share |
|---------|-------------|
| Pimlico (Alto) | ~35% |
| Alchemy (Rundler) | ~25% |
| Biconomy | ~15% |
| StackUp | ~10% |
| Others | ~15% |

### Paymaster Usage
- **Gas sponsorship**: 80%+ of UserOps use a paymaster (someone else pays gas)
- **ERC-20 gas payment**: Growing — pay gas in USDC instead of ETH
- **Top paymaster providers**: Pimlico, Alchemy, Biconomy, ZeroDev

### Key Trends
- **Embedded wallets** driving adoption: Privy, Dynamic, Turnkey — apps create wallets invisibly
- **Passkey wallets**: Login with fingerprint/Face ID, no seed phrase — Safe, Coinbase Smart Wallet
- **Native AA chains**: zkSync, StarkNet have built-in account abstraction (no ERC-4337 needed)
- **ERC-7579**: Modular smart accounts standard — pluggable modules for different functionality

---

## 5. Developer Tool Usage

### Framework Market Share (EVM)

| Tool | Estimated Market Share | Language | Key Users |
|------|----------------------|----------|-----------|
| **Foundry** (Forge) | ~45-50% (and growing) | Rust CLI, Solidity tests | Most new projects, advanced devs |
| **Hardhat** | ~40-45% (declining) | JavaScript/TypeScript | Legacy projects, JS-first teams |
| **Remix** | ~10% | Browser IDE | Beginners, quick prototyping |
| **Brownie** | <5% (deprecated) | Python | Being replaced by Ape/Foundry |
| **Ape** | ~3% | Python | Python-native developers |

### Foundry vs Hardhat

| Feature | Foundry | Hardhat |
|---------|---------|---------|
| **Speed** | 10-100x faster (Rust) | Slower (Node.js) |
| **Test language** | Solidity (same language as contracts) | JavaScript/TypeScript |
| **Fuzzing** | Built-in (forge fuzz) | Requires plugins |
| **Gas reports** | Built-in | Requires hardhat-gas-reporter plugin |
| **Debugging** | `forge debug` (step-through) | console.log (print-based) |
| **Learning curve** | Steeper (CLI-first) | Easier (JS ecosystem) |
| **Ecosystem** | Growing fast | Mature, many plugins |

### Frontend Libraries
| Library | Usage |
|---------|-------|
| **Wagmi + Viem** | ~60% of new EVM dApps (React hooks) |
| **Ethers.js** | ~30% (still widely used, but declining) |
| **Web3.js** | ~10% (legacy) |
| **thirdweb SDK** | Growing (full-stack, AA built-in) |

---

## 6. Decentralized Storage Comparison

| Feature | Arweave | IPFS | Filecoin |
|---------|---------|------|----------|
| **Storage Model** | Permanent (pay once, store forever) | Content-addressed (pin/unpin) | Incentivized storage deals |
| **Permanence** | Guaranteed by protocol (endowment model) | Not guaranteed (must pin or use pinning service) | Time-limited deals (6-18 months, renewable) |
| **Cost** | ~$5-8 per GB (one-time, permanent) | Free to upload, ~$0.10-$0.50/GB/month to pin | ~$0.0001-$0.001/GB/month (very cheap) |
| **Speed (Upload)** | Seconds-minutes | Seconds | Hours (deal-making process) |
| **Speed (Retrieval)** | 1-5 seconds (gateway) | Variable (depends on pinners) | Slow (minutes-hours for unsealed data) |
| **Capacity** | ~150TB+ stored | Unmeasured (distributed) | 22+ EiB committed storage |
| **Use Cases** | NFT media, permanent records, archives | dApp data, NFTs, general files | Large datasets, archival, CDN |
| **Token** | AR | None (Filecoin for incentivized pinning) | FIL |
| **Architecture** | Blockweave (block = data bundle) | DHT-based P2P network | Proof of Replication + Proof of Spacetime |

### Key Insights
- **Arweave** is the gold standard for permanence — most NFT collections (Solana especially) store media on Arweave
- **IPFS** is the most widely used for dApp assets but requires pinning services (Pinata, Filebase) for reliability
- **Filecoin** has massive capacity (22+ EiB) but retrieval speed is a pain point. Saturn CDN improves this.
- **Bundlr/Irys**: A layer on top of Arweave that makes uploads faster and cheaper via bundling
- **Trend**: Arweave for permanent data (NFTs, legal docs), IPFS/Filecoin for temporary/large data
