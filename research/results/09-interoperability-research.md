# 09 — Interoperability Research Results

> Research completed March 2026

---

## 1. Bridge TVL and Volume Comparison

### Top Bridges by TVL (Q1 2026)

| Bridge | TVL | Monthly Volume | Type | Chains |
|--------|-----|---------------|------|--------|
| **Stargate (LayerZero)** | ~$500M | ~$3B/month | Liquidity network | 20+ chains |
| **Across Protocol** | ~$200M | ~$2B/month | Intent-based (UMA oracle) | 10+ chains |
| **Portal (Wormhole)** | ~$300M | ~$1.5B/month | Lock-and-mint + messaging | 30+ chains |
| **Synapse** | ~$200M | ~$500M/month | Liquidity network + messaging | 15+ chains |
| **Hop Protocol** | ~$100M | ~$300M/month | Liquidity network | Ethereum L2s |
| **Orbiter Finance** | ~$50M | ~$1B/month | Maker network (L2↔L2) | 20+ L2s |
| **Canonical Bridges** | ~$30B+ combined | Varies | Official L1↔L2 | Per-chain |

### Key Insights
- **Canonical bridges** (official L2 bridges) hold the most TVL by far — Arbitrum Bridge (~$15B), Optimism Bridge (~$7B), etc.
- **Third-party bridges** compete on speed and UX (canonical bridges have 7-day withdrawal delays for optimistic rollups)
- **Across** has grown fast via intent-based architecture — fills happen in seconds, not minutes
- **Volume ≠ TVL**: Orbiter does high volume with low TVL because of its maker model (individual relayers)

---

## 2. Bridge Hack Timeline and Total Losses

### Major Bridge Hacks

| Date | Bridge | Amount | Attack Vector | Details |
|------|--------|--------|--------------|---------|
| Aug 2021 | Poly Network | $611M | Access control | Returned all funds |
| Feb 2022 | Wormhole | $325M | Signature verification bypass | Jump Crypto covered losses |
| Mar 2022 | Ronin Bridge | $625M | Private key compromise (5/9 validators) | Lazarus Group. Largest DeFi hack ever. |
| Jun 2022 | Harmony Horizon | $100M | Private key compromise (2/5 multisig) | Never fully recovered |
| Aug 2022 | Nomad | $190M | Smart contract bug | "Copy-paste" exploit — anyone could replicate |
| Oct 2022 | BSC Token Hub | $570M | Proof forgery | BNB Chain halted to limit losses (actual loss ~$100M) |
| Jul 2023 | Multichain | $130M | CEO arrest, key compromise | Multichain effectively collapsed |
| Jan 2024 | Orbit Chain | $82M | Private key compromise | North Korea linked |

### Aggregate Bridge Losses
| Year | Total Bridge Losses | % of All Crypto Hacks |
|------|--------------------|-----------------------|
| 2021 | ~$600M | ~46% |
| 2022 | ~$2.0B | ~53% |
| 2023 | ~$250M | ~15% |
| 2024 | ~$200M | ~9% |

**Total bridge losses (all-time): ~$3B+**

### Why Bridges Are Vulnerable
1. **Honeypot**: Bridges hold large amounts of locked assets (attractive target)
2. **Multisig weakness**: Many bridges rely on small validator/multisig sets (3/5, 5/9)
3. **Cross-chain complexity**: Verifying state across chains is inherently complex
4. **Single point of failure**: Compromising the bridge compromises ALL chains it connects

---

## 3. Cross-Chain Messaging Protocol Comparison

| Feature | LayerZero | Chainlink CCIP | Axelar | Wormhole | Hyperlane |
|---------|-----------|---------------|--------|----------|-----------|
| **Architecture** | Ultra Light Nodes (ULN) + DVNs (Decentralized Verifier Networks) | Chainlink oracle network + Risk Management Network | Cosmos-based hub chain + validators | Guardian network (19 guardians) | Permissionless (anyone can deploy) |
| **Security Model** | Configurable per-pathway (choose your DVNs) | Chainlink oracle consensus + separate risk layer | Proof of Stake (60+ validators) | PoA (19 guardians, 13/19 threshold) | Modular ISMs (Interchain Security Modules) |
| **Chains** | 50+ chains | 25+ chains | 60+ chains | 30+ chains | 100+ chains (permissionless) |
| **Speed** | 1-5 minutes (configurable) | 5-20 minutes (conservative) | 30-60 seconds | 1-20 minutes | Configurable per deployment |
| **Cost** | Low (~$0.05-$0.50 per message) | Medium (~$0.50-$5.00) | Low (~$0.10-$1.00) | Low (~$0.05-$0.50) | Varies by ISM |
| **Unique Feature** | Composable messaging + OApp framework | CCIP rate limits (safety), ARM (risk management) | General Message Passing with native Cosmos IBC | NTT (Native Token Transfers) | Permissionless deployment, modular security |
| **Token** | ZRO | LINK | AXL | W | None yet |
| **Market Position** | Most integrated, largest developer ecosystem | Most trusted brand, institutional focus | Strong in Cosmos ecosystem | Largest bridge by volume historically | Developer-friendly, permissionless |
| **Risk** | DVN collusion, configurable security means user must choose wisely | Reliance on Chainlink network, higher cost | Smaller validator set than some | Guardian centralization (19 entities) | No default security (must configure ISM) |

### Key Insights
- **LayerZero** has the most integrations by protocol count — its composability (build OApps) is a major draw
- **CCIP** is the institutional choice — Chainlink's reputation and conservative design (rate limits, risk management)
- **Hyperlane** is unique in being permissionless — anyone can deploy on any chain without permission
- **Wormhole** has pivoted from bridge-focused to general messaging (NTT standard for native token transfers)
- **IBC** (Cosmos) remains the most battle-tested cross-chain protocol with 100M+ packets transferred

---

## 4. Chain Abstraction Projects Comparison

| Feature | Particle Network | NEAR Chain Signatures | Socket Protocol | Across Protocol |
|---------|-----------------|---------------------|----------------|----------------|
| **Approach** | Universal Accounts — one account, all chains | MPC-based chain signatures from NEAR account | Chain abstraction middleware for apps | Intent-based bridging + chain abstraction |
| **How It Works** | Aggregates accounts across chains into single identity via BTC-anchored coordination | NEAR nodes collectively sign transactions for other chains (BTC, ETH, etc.) using threshold MPC | SDK for dApps to abstract chain from user — handles routing, bridging, execution | Users express intent ("send 1 ETH from Arbitrum to Base"), relayers fill |
| **Chains Supported** | EVM, Solana, Bitcoin, Cosmos | Any chain (Bitcoin, Ethereum, Solana, etc.) | EVM chains primarily | Ethereum + major L2s |
| **User Experience** | One login → interact with any chain, gas abstracted | One NEAR account → sign txs on any chain | App-level abstraction (user doesn't see chains) | Fast cross-chain transfers (intent-filled in seconds) |
| **Token** | PARTI | NEAR | SOCKET | ACX |
| **Status** | Live (V2) | Live (mainnet) | Live (DeFi integrations) | Live (top bridge by speed) |
| **Key Differentiator** | Broadest scope (accounts + gas + liquidity) | Leverages NEAR's existing infrastructure | Developer SDK focus (embed in any app) | Speed (intent fills in 1-5 seconds) |

### ERC-7683 (Cross-Chain Intent Standard)
- **What**: A standard interface for expressing cross-chain intents (proposed by Across + Uniswap)
- **Status**: Draft EIP, growing adoption
- **How it works**: User signs an "intent" message (I want X outcome across chains) → solvers/fillers compete to fulfill it
- **Adopted by**: Across, UniswapX, potentially other intent-based protocols
- **Impact**: Could unify the fragmented bridge/intent landscape into a common interface

---

## 5. ERC-7683 Standard Details

### Specification
```
struct CrossChainOrder {
    address settlementContract;  // Contract that verifies fulfillment
    address swapper;             // User's address
    uint256 nonce;               // Anti-replay
    uint32 originChainId;        // Source chain
    uint32 initiateDeadline;     // When the order expires
    uint32 fillDeadline;         // When filling must complete
    bytes orderData;             // Protocol-specific order details
}
```

### Status (March 2026)
- **EIP Status**: Draft (moving toward review)
- **Implementations**: Across (primary), UniswapX exploring
- **Solver/Filler ecosystem**: 10+ active fillers competing on Across
- **Challenges**: Standardizing verification across different settlement mechanisms, solver incentive alignment

---

## 6. Polygon AggLayer Progress

### What is AggLayer?
- **Vision**: A unified bridge that aggregates ZK proofs from multiple chains into a single proof submitted to Ethereum
- **Result**: All AggLayer-connected chains share liquidity and can interoperate seamlessly
- **Architecture**: ZK-powered aggregation layer — chains submit proofs to AggLayer, which aggregates and settles on Ethereum

### Status (March 2026)
| Milestone | Status |
|-----------|--------|
| **AggLayer V1** (pessimistic proofs) | Live — basic cross-chain claims with safety guarantees |
| **AggLayer V2** (optimistic + ZK proofs) | In development — real ZK proof aggregation |
| **Connected chains** | Polygon PoS, Polygon zkEVM, OKX X Layer, Astar zkEVM + others |
| **Unified bridge** | Deployed — single bridge contract for all connected chains |

### How It Compares to Superchain
| Feature | AggLayer (Polygon) | Superchain (Optimism) |
|---------|-------------------|----------------------|
| **Proof type** | ZK proofs | Optimistic (fraud proofs) |
| **Interop mechanism** | Aggregated ZK proofs | Shared sequencer + message passing |
| **Chain sovereignty** | High (any chain can connect) | Medium (must use OP Stack) |
| **Shared liquidity** | Via unified bridge | Via shared bridge (in progress) |
| **Status** | V1 live, V2 in dev | Interop testnet |

---

## 7. Superchain Interop Status (OP Stack)

### What is the Superchain?
- Optimism's vision for a network of OP Stack chains that share a bridge, sequencer, and interop layer
- **Goal**: All OP Stack chains (Base, OP Mainnet, Zora, Mode, etc.) behave like one unified network

### Current OP Stack Chains in Superchain
| Chain | Operator | TVL | Focus |
|-------|----------|-----|-------|
| **OP Mainnet** | Optimism Foundation | ~$8B | General purpose |
| **Base** | Coinbase | ~$14B | Consumer apps, Farcaster |
| **Zora** | Zora | ~$50M | NFTs, creator economy |
| **Mode** | Mode Network | ~$500M | DeFi optimized |
| **Mint** | NFTScan | ~$20M | NFT minting |
| **Cyber** | Cyber | ~$30M | Social |
| **Redstone** | Lattice | ~$100M | On-chain gaming (MUD) |
| **World Chain** | Worldcoin | ~$200M | Identity |

### Interop Progress (March 2026)
| Feature | Status |
|---------|--------|
| **Shared bridge** | Live (unified bridge contract on Ethereum) |
| **Cross-chain messaging** | Testnet (direct L2↔L2 messaging without going through L1) |
| **Shared sequencer** | Not yet — currently each chain has its own sequencer |
| **Instant cross-chain transfers** | Testnet (targeting <1 minute L2↔L2) |
| **Revenue sharing** | Active — OP Stack chains contribute % of sequencer revenue to Optimism Collective |

### Key Technical Components
- **Shared bridge**: One Ethereum bridge contract for all Superchain members — reduces fragmentation
- **Cross-chain message passing**: L2↔L2 messages via shared bridge, not through Ethereum L1 (much faster)
- **Dependency set**: Each chain declares which other chains it depends on for ordering guarantees
- **Superchain Registry**: On-chain registry of all participating chains and their configurations
