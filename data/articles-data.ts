// ─── Article System ───────────────────────────────────────────────────────────
// Pre-written markdown articles for all nodes in the CryptoTree canvas.
// Each article uses ## headings, bullet lists, and [[nodeId]] wiki links.

export interface Article {
  id: string;
  title: string;
  content: string;
}

export const ARTICLES: Record<string, Article> = {

  // ═══════════════════════════════════════════════════════════════════════════
  // MAIN CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  overview: {
    id: 'overview',
    title: 'Crypto Ecosystem Map',
    content: `# Crypto Ecosystem Map

## What Is This?

The Crypto Ecosystem Map is an interactive knowledge graph of the blockchain universe. It organizes the major Layer 1 chains, Layer 2 networks, DeFi protocols, and infrastructure projects into a navigable canvas — letting you explore relationships, understand tradeoffs, and build intuition for how the whole space fits together.

## How to Navigate

- **Click any node** to open the detail panel and read a summary
- **Double-click a page node** to dive into its sub-canvas (e.g., open the Ethereum ecosystem)
- **Click "Open Article"** to read a full deep-dive article like this one
- **[[nodeId]] links** in articles take you to related nodes

## The Layers of the Stack

The crypto stack is built in layers:

- **Layer 1** — The base settlement chains: [[btc]], [[eth]], [[sol]], [[ton]], and others. These are the foundations.
- **Layer 2** — Scaling networks built on top of L1s. [[base]], Arbitrum, Optimism, zkSync all settle to [[eth]].
- **DeFi** — Decentralized financial protocols built on L1s and L2s.
- **Infrastructure** — Oracles, indexers, bridges, and tooling that make everything work.

## Relationships Between Chains

The graph edges show meaningful relationships:
- **Inspiration**: [[btc]] inspired [[eth]]'s trustless ledger model
- **Technical lineage**: [[base]] is built on [[eth]]'s OP Stack
- **Competition**: [[sol]] and [[eth]] compete for DeFi and NFT activity
- **Integration**: [[ton]] is deeply integrated with Telegram's 900M users

## Reading the Map

The major chains each have their own sub-canvas with deeper ecosystem detail:
- [[btc]] → Lightning, Ordinals, Stacks
- [[eth]] → Arbitrum, Optimism, Base, zkSync, Uniswap, Aave, and more
- [[sol]] → Jupiter, Raydium, Pump.fun, Tensor, Helius
- [[ton]] → Telegram integration, DeFi, gaming
- [[base]] → OP Stack, consumer crypto, Farcaster, Aerodrome
- [[monad]] → Parallel EVM, MonadBFT, MonadDB

## Why This Matters

Understanding the crypto ecosystem as a whole — not just individual coins — is the key to understanding where value flows, where innovation is happening, and what the future might look like. The map is designed to make that understanding accessible and interactive.
`,
  },

  btc: {
    id: 'btc',
    title: 'Bitcoin',
    content: `# Bitcoin (BTC)

## Overview

Bitcoin is the original blockchain — launched by Satoshi Nakamoto in January 2009. It introduced the concept of a trustless, permissionless, peer-to-peer digital cash system that operates without central authority. Today it's widely viewed as "digital gold": the hardest, most decentralized, and most censorship-resistant form of money ever created.

## The Core Design

Bitcoin's rules are deliberately conservative:

- **21 million supply cap** — enforced by consensus, never changeable without breaking the network
- **10-minute block times** — slow by design, prioritizing security over speed
- **Proof of Work** — miners expend real energy to secure the chain; it cannot be attacked cheaply
- **Script language** — minimal but surprisingly capable, enabling multisig, timelocks, and atomic swaps

The design philosophy: **don't change what works**. Bitcoin's "boring" stability is a feature, not a bug.

## The Lightning Network

For small, fast payments, [[btc-lightning]] adds a payment channel network on top of Bitcoin. Transactions settle instantly at near-zero fees off-chain, with final settlement to the Bitcoin blockchain.

## Ordinals & Inscriptions

[[btc-ordinals]] brought NFTs to Bitcoin in 2023 — without a soft fork. By attaching arbitrary data to individual satoshis, developers enabled on-chain images, text, and even programs on Bitcoin. This ignited a cultural moment and brought new users to the Bitcoin blockchain.

## Smart Contracts via Stacks

[[btc-stacks]] enables smart contracts and DeFi that settle to Bitcoin without modifying Bitcoin itself. The sBTC bridge lets DeFi protocols use BTC as collateral.

## Why Bitcoin Still Matters

In a world of thousands of blockchain experiments, Bitcoin remains unique:

- **No pre-mine, no ICO** — the fairest distribution in crypto
- **No single point of control** — Satoshi disappeared, there's no CEO to arrest
- **Maximum security** — more hash rate than any other PoW chain
- **Store of value narrative** — institutional adoption via ETFs, corporate balance sheets

## Ecosystem Connections

Bitcoin inspired [[eth]] — Vitalik Buterin was a Bitcoin developer before creating Ethereum. The entire crypto ecosystem owes its existence to Satoshi's 2009 breakthrough.
`,
  },

  eth: {
    id: 'eth',
    title: 'Ethereum',
    content: `# Ethereum (ETH)

## Overview

Ethereum is the programmable blockchain — the platform that made blockchains useful for more than just money. Launched in 2015 by Vitalik Buterin and a team of co-founders, Ethereum introduced the Ethereum Virtual Machine (EVM): a Turing-complete computer that anyone can deploy code to.

## The EVM Standard

The EVM became the dominant standard for smart contract execution. Every major competing chain — [[base]], [[monad]], Arbitrum, BNB Chain, [[polygon]], [[avax]] — either runs the EVM directly or is EVM-compatible. This means the same Solidity code deployed on Ethereum runs on all of them.

## The Merge

In September 2022, Ethereum transitioned from Proof of Work to Proof of Stake ("The Merge"), reducing its energy consumption by ~99.95%. Validators stake 32 ETH as collateral and earn rewards for honest behavior. This also combined with EIP-1559 to make ETH deflationary during high-usage periods.

## The Rollup-Centric Roadmap

Ethereum's scaling strategy is deliberate: keep the L1 secure and decentralized (~15 TPS), and scale execution via Layer 2 rollups:

- **Optimistic rollups**: [[eth-arbitrum]], [[eth-optimism]], [[eth-base]]
- **ZK rollups**: [[eth-zksync]], [[eth-starknet]]

L2s execute transactions, post data to L1, and inherit Ethereum's security. Proto-Danksharding (EIP-4844) reduced L2 data costs by ~10x.

## DeFi Foundation

Ethereum is home to the most battle-tested DeFi protocols:

- [[eth-uniswap]] — the dominant DEX and AMM standard
- [[eth-aave]] — the leading lending/borrowing protocol
- [[eth-lido]] — liquid staking for ETH
- [[eth-eigenlayer]] — restaking and shared security

## Infrastructure Layer

- [[eth-chainlink]] — the dominant oracle network, securing $20B+ in DeFi
- [[eth-graph]] — the decentralized indexer for on-chain data

## ETH as an Asset

Post-Merge, ETH serves three roles: gas token, collateral, and yield-bearing asset. Staked ETH earns ~4% APY from validator rewards. During high activity, base fee burns exceed new issuance, making ETH deflationary.
`,
  },

  sol: {
    id: 'sol',
    title: 'Solana',
    content: `# Solana (SOL)

## Overview

Solana is a high-performance, monolithic Layer 1 blockchain designed from the ground up for speed and low cost. Founded by Anatoly Yakovenko and launched in 2020, Solana processes over 65,000 transactions per second at sub-cent fees — orders of magnitude faster and cheaper than Ethereum L1.

## Proof of History

Solana's key innovation is **Proof of History (PoH)** — a verifiable delay function that creates a historical record of time. By cryptographically timestamping events before ordering them, Solana's validators can agree on transaction ordering without expensive communication rounds, enabling dramatically higher throughput.

## The Monolithic Choice

Unlike [[eth]]'s modular rollup strategy, Solana is monolithic: there are no L2s. Everything runs on one chain. This means:

- **Lower latency** — no bridging or cross-chain complexity
- **Shared liquidity** — all protocols share the same state
- **Tradeoffs** — higher validator hardware requirements, occasional network instability

## The 2024 Memecoin Supercycle

In 2024, [[sol-pump]] (pump.fun) enabled anyone to launch a memecoin in 10 seconds for ~$2. This drove Solana's fee revenue above Ethereum's on peak days. The memecoin culture attracted new users but also attracted criticism about signal-to-noise ratio.

## DeFi Ecosystem

Solana hosts a mature DeFi stack:

- [[sol-jupiter]] — the dominant DEX aggregator and swap interface
- [[sol-raydium]] — concentrated liquidity AMM and launchpad
- [[sol-marinade]] — liquid staking for SOL (mSOL)
- [[sol-jito]] — MEV-aware liquid staking and block building

## NFTs & Infrastructure

- [[sol-tensor]] — the dominant NFT marketplace and trading platform
- [[sol-helius]] — the leading RPC/API provider and developer platform

## Why Solana Competes

Solana proves the monolithic thesis: one highly optimized chain can outperform modular systems for most use cases. Its developer experience — fast transactions, predictable fees, no bridges — appeals to consumer app builders.
`,
  },

  ton: {
    id: 'ton',
    title: 'TON (The Open Network)',
    content: `# TON — The Open Network

## Overview

TON is a blockchain designed for mass adoption via Telegram integration. Originally built by Telegram's founders (the Durov brothers) and released as the "TON blockchain" in 2018, the SEC blocked Telegram's token sale in 2020. The community revived the codebase and relaunched TON as an open-source project.

## The Telegram Distribution Advantage

TON's killer feature isn't technical — it's **distribution**. Telegram has 900M+ monthly active users. TON wallets are built directly into Telegram, and mini-apps (Telegram WebApps) can accept TON payments with zero friction. This makes TON the closest thing crypto has to a true consumer distribution channel.

## Technical Architecture

TON uses a unique **sharded architecture** with three types of chains:
- **Masterchain** — coordinates validators and smart contract addresses
- **Workchains** — up to 2^32 parallel chains for different applications
- **Shardchains** — dynamically split workchains based on load

This design theoretically scales to millions of TPS as traffic grows.

## The 2024 Tap-to-Earn Wave

Games like Notcoin and Hamster Kombat onboarded **100M+ users** to crypto through Telegram in 2024. Players tapped screens to earn TON-based tokens. While critics called it "pointless clicking," it was the largest crypto onboarding event in history.

## DeFi & Ecosystem

- [[ton-defi]] — DeDust, STON.fi, and growing DeFi protocols
- [[ton-telegram]] — deep wallet and payment integration
- [[ton-games]] — tap-to-earn and gaming ecosystem

## Strengths and Risks

**Strengths**: Telegram distribution, low fees, fast finality, mini-app ecosystem

**Risks**: Regulatory risk from Durov's arrest in 2024, Telegram business risk, validator centralization
`,
  },

  base: {
    id: 'base',
    title: 'Base',
    content: `# Base

## Overview

Base is Coinbase's Ethereum Layer 2 chain, built on the OP Stack and launched in 2023. It's the fastest-growing L2 by almost every metric and serves as Coinbase's public blockchain infrastructure — with no native token.

## Built on OP Stack

Base uses [[eth-optimism]]'s open-source OP Stack framework. This makes it part of the "Superchain" — a network of interconnected OP Stack chains that share sequencing infrastructure and cross-chain messaging. Base's sequencer fees contribute to Optimism's Retroactive Public Goods Funding.

## Coinbase Distribution

Coinbase's 100M+ users can bridge ETH to Base in one tap. This distribution advantage drove Base's rapid TVL growth — it surpassed competitors that had years of head start within months of launch.

## No Native Token

Base deliberately has no native token. All fees are paid in ETH. Coinbase earns revenue from sequencer fees rather than token appreciation. This clean model aligns incentives: Base wins when ETH usage grows.

## Consumer Crypto Hub

Base has become the home of "consumer crypto":

- [[base-farcaster]] — decentralized social network with frame mini-apps
- [[base-basename]] — ENS-style human-readable addresses for Base
- Smart Wallet — passkey-based accounts without seed phrases
- x402 payment standard — HTTP payments for the open web

## DeFi Ecosystem

- [[base-aerodrome]] — the dominant DEX and liquidity hub on Base
- [[base-moonwell]] — the leading lending protocol

## Why Base Matters

Base demonstrates that a chain without a token can succeed. The focus on user experience — cheap fees, Coinbase onboarding, passkey wallets — makes it the most accessible L2 for mainstream users.
`,
  },

  monad: {
    id: 'monad',
    title: 'Monad',
    content: `# Monad

## Overview

Monad is a new Layer 1 blockchain that achieves 10,000 transactions per second while remaining fully EVM-compatible. It solves the EVM's fundamental performance bottleneck — sequential execution — by running transactions in parallel.

## The Parallelization Innovation

The EVM was designed to run transactions one-at-a-time in a strict sequence. Monad breaks this constraint with **optimistic parallel execution**: run all transactions simultaneously, then detect and re-execute the small subset that touch the same state. This is the same technique modern CPUs use (out-of-order execution).

## The Technical Stack

Four innovations combine to enable 10,000 TPS:

- [[monad-parallel]] — parallel EVM execution engine
- [[monad-bft]] — pipelined BFT consensus (decoupled from execution)
- [[monad-db]] — async I/O state storage optimized for SSDs
- [[monad-evm]] — full EVM bytecode compatibility (no recompilation needed)

## Drop-In EVM Compatibility

Any Solidity contract deployed on Ethereum works on Monad without changes. All Ethereum developer tools — Hardhat, Foundry, MetaMask, ethers.js — work out of the box. Monad can run Uniswap v3, Aave, Compound with zero modifications.

## The Performance Gap

Monad targets:
- **10,000 TPS** (vs ~15 on Ethereum L1, ~2,000 on Arbitrum)
- **1-second block times** (vs ~12s on Ethereum)
- **Sub-cent fees** even at full capacity

## Ecosystem Building

[[monad-eco]] tracks the growing ecosystem of DeFi, gaming, and infrastructure projects deploying to Monad ahead of mainnet.

## Why Monad Matters

If Monad delivers on its technical promises, it proves that EVM-compatible chains can achieve Solana-level performance without sacrificing the EVM ecosystem. Every Ethereum developer is a potential Monad developer.
`,
  },

  cosmos: {
    id: 'cosmos',
    title: 'Cosmos / IBC',
    content: `# Cosmos / IBC

## Overview

Cosmos is a modular blockchain SDK and inter-chain communication protocol. Rather than one monolithic chain, Cosmos pioneered the "appchain thesis": build many specialized sovereign blockchains connected by IBC (Inter-Blockchain Communication) for trustless cross-chain messaging.

## The IBC Protocol

IBC is Cosmos's crown jewel — a trustless messaging protocol that lets chains exchange arbitrary data (tokens, NFTs, smart contract calls) without bridges or centralized custodians. It's the TCP/IP of blockchains.

Over 100 chains are connected via IBC, forming a growing internet of sovereign blockchains.

## The Cosmos SDK

The Cosmos SDK lets developers build application-specific blockchains in weeks. Notable SDK chains:

- **Osmosis** — the IBC DEX hub (~$500M TVL)
- **Injective** — permissionless perps and derivatives
- **Celestia** — modular data availability layer
- **Stride** — liquid staking for IBC assets
- **dYdX** — the leading perp DEX (migrated from Ethereum)

## The Appchain Thesis

Cosmos argued: rather than competing for blockspace on one chain, build your own chain tailored to your app. This gives you:
- Full control over fee economics
- Custom consensus rules
- Sovereignty — no dependence on another chain's governance

[[eth]] adopted a version of this idea via rollups — rollups are Ethereum's appchains.

## ATOM and Interchain Security

The ATOM token coordinates the hub and enables Interchain Security: smaller chains can rent security from the Cosmos Hub's validator set instead of bootstrapping their own.

## Influence on the Broader Ecosystem

Cosmos proved the modular blockchain thesis years before Ethereum's rollup-centric roadmap. Its ideas — appchains, sovereign execution, shared security — now dominate blockchain architecture thinking.
`,
  },

  polygon: {
    id: 'polygon',
    title: 'Polygon',
    content: `# Polygon (POL)

## Overview

Polygon is Ethereum's most mature scaling ecosystem — evolving from a sidechain (Polygon PoS) to a ZK rollup (Polygon zkEVM) to its current "AggLayer" vision: a unified liquidity layer for hundreds of chains connected by ZK proofs.

## The Evolution

Polygon's journey reflects how quickly blockchain architecture has evolved:

1. **2019: Plasma** — Plasma-based Ethereum child chain (abandoned)
2. **2020: Polygon PoS** — EVM sidechain with 21 validators; 2B+ historical transactions
3. **2023: Polygon zkEVM** — ZK rollup with full EVM equivalence
4. **2024: AggLayer** — multi-chain interoperability via ZK validity proofs

## Polygon PoS

The sidechain has 100M+ unique addresses, making it one of the most-used blockchains in history. Major brands (Reddit, Starbucks, Nike) deployed NFT projects on Polygon PoS due to its near-zero fees.

## The AggLayer Vision

The AggLayer is Polygon's boldest bet: use ZK proofs to connect any blockchain (not just Polygon chains) into a shared liquidity layer. Chains using the AggLayer share a global bridge state — moving assets between them is instant and trustless.

## POL Token

MATIC was upgraded to POL. POL is designed to be staked across multiple Polygon chains simultaneously, accruing fees from the entire AggLayer network. This "multi-chain staking" model is novel in the ecosystem.

## Gaming and Enterprise

Polygon remains the dominant chain for gaming (Immutable X partnership) and enterprise blockchain deployments (Mastercard, JPMorgan pilots). Near-zero fees and EVM compatibility drive corporate adoption.
`,
  },

  avax: {
    id: 'avax',
    title: 'Avalanche',
    content: `# Avalanche (AVAX)

## Overview

Avalanche is a high-performance EVM-compatible blockchain with a unique 3-chain architecture and sub-second finality. Its "Avalanche Consensus" mechanism — based on repeated random subsampling — achieves fast finality without requiring all validators to communicate with each other.

## The 3-Chain Architecture

Avalanche splits functionality across three specialized chains:

- **X-Chain** — DAG-based chain for fast asset transfers (AVAX, NFTs)
- **P-Chain** — manages validators, staking, and subnet creation
- **C-Chain** — EVM-compatible smart contract execution (where DeFi lives)

Most users interact with the C-Chain, which is EVM-identical.

## Subnets

Subnets are Avalanche's answer to the appchain thesis. Anyone can launch a custom blockchain with:
- Custom virtual machines (EVM, Solidity VM, or custom)
- Custom fee tokens
- Custom validator sets (validators must also validate the primary network)
- Custom consensus parameters

Notable subnets: DFK Chain (gaming), Dexalot (DEX), and enterprise chains for financial institutions.

## Avalanche Consensus

Unlike traditional BFT (which requires O(n²) messages), Avalanche Consensus uses probabilistic random sampling. Validators repeatedly poll random small subsets of other validators until achieving high-confidence consensus. This scales to thousands of validators with low communication overhead.

## DeFi Ecosystem

- **Trader Joe** — the dominant DEX on Avalanche
- **Aave v3** — deployed on Avalanche C-Chain
- **GMX** — the leading perps DEX (launched on Avalanche, now also on Arbitrum)

## Strengths

Sub-second finality, EVM compatibility, and the subnet model make Avalanche compelling for both DeFi and enterprise use cases.
`,
  },

  sui: {
    id: 'sui',
    title: 'Sui & Aptos (Move L1s)',
    content: `# Sui & Aptos — The Move L1s

## Overview

Sui and Aptos are two next-generation Layer 1 blockchains built by ex-Meta engineers who worked on the Diem blockchain project. Both use the **Move programming language**, designed specifically to solve the safety and performance problems of Solidity.

## The Move Language

Move was created at Meta's Diem project with one goal: make it impossible to accidentally create insecure smart contracts. Key innovations:

- **Linear type system** — assets can't be duplicated or accidentally destroyed
- **Resource-oriented** — tokens are "resources" that must be explicitly moved, not copied
- **No reentrancy attacks** — the type system prevents the #1 DeFi exploit vector
- **Module system** — code reuse without inheritance complexity

## Sui

Sui (built by Mysten Labs) models the blockchain as a collection of **objects** rather than accounts:

- Every asset is an object with a unique ID
- Transactions that touch different objects can be processed in parallel
- Simple transactions (token transfers) don't need global consensus — just owner signatures
- Targeting 300,000+ TPS for parallelizable workloads

Sui has a thriving DeFi ecosystem with Cetus (DEX), Navi (lending), and Scallop.

## Aptos

Aptos (built by Aptos Labs) keeps the traditional account model but adds:

- **Block-STM** — parallel execution using software transactional memory
- **More conservative language** — closer to Diem's original design
- Higher institutional backing (A16Z, Multicoin Capital)

## Why Move Matters

The EVM's Solidity has caused billions in losses from reentrancy attacks, integer overflows, and unsafe type casting. Move eliminates most of these at the language level. As DeFi security becomes more critical, Move's safety guarantees become more attractive.

## Connection to [[eth]]

Both Sui and Aptos compete with [[eth]] and [[sol]] for developer mindshare. Their thesis: better developer tools + safer language = better protocols = more users.
`,
  },

  bnb: {
    id: 'bnb',
    title: 'BNB Chain',
    content: `# BNB Chain

## Overview

BNB Chain (formerly Binance Smart Chain) is Binance's EVM-compatible blockchain, launched in 2020. It has more active addresses than any other blockchain in crypto — making it the most-used chain by user count, even if not by developer activity or TVL-per-user.

## Origins and Design

BNB Chain launched as a direct response to Ethereum's 2020 gas fee crisis. Binance forked Ethereum's codebase and made three key changes:
- **21 validators** instead of thousands (Proof of Staked Authority)
- **3-second block times** vs Ethereum's 12 seconds
- **Near-zero fees** — typically <$0.01 per transaction

The tradeoff: radical centralization. 21 validators is small enough that Binance effectively controls the network.

## Retail DeFi Dominance

BNB Chain captured the retail DeFi market in 2020–2021:

- **PancakeSwap** — the dominant DEX with $1B+ TVL, CAKE token farming
- **Venus Protocol** — lending and synthetic asset protocol
- **Alpaca Finance**, **Beefy Finance** — yield optimization
- **100M+ unique addresses** by 2022

## The BNB Token

BNB earns revenue from Binance's centralized exchange via quarterly burns (using 20% of exchange profits to buy and burn BNB). This makes BNB partially equity-like in the Binance business — unusual for a blockchain token.

## opBNB

opBNB is Binance's Optimism-based L2 on top of BNB Chain, targeting gaming and social apps with even lower fees.

## Risks and Centralization

BNB Chain's 21-validator design is its biggest weakness. The network was halted by Binance in 2022 after a $570M bridge hack — a centralized kill switch no truly decentralized chain should have.
`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ETHEREUM SUB-CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  'eth-l1': {
    id: 'eth-l1',
    title: 'Ethereum L1 — The World Computer',
    content: `# Ethereum L1 — The World Computer

## Overview

Ethereum L1 is the base settlement and security layer for the world's largest programmable blockchain. It's intentionally slow (~15 TPS) and expensive during peak usage — because those are the costs of true decentralization and security.

## The EVM

The Ethereum Virtual Machine executes Turing-complete smart contracts. Every node in the network runs the same code and agrees on the result — this is the "world computer" metaphor. Any state transition that can be expressed in code can be executed trustlessly on the EVM.

## Post-Merge Architecture

After The Merge (September 2022):
- **Execution Layer** — processes transactions and state (formerly PoW miners)
- **Consensus Layer** — finalizes blocks via Proof of Stake (Beacon Chain validators)
- **~500,000 validators** each staking 32 ETH as collateral

## EIP-1559 and ETH Burn

EIP-1559 introduced the base fee — a per-block fee that's burned rather than paid to validators. During high activity, ETH becomes deflationary. Since The Merge, over 1 million ETH has been burned.

## The Rollup-Centric Roadmap

L1 is designed to be the secure data availability and settlement layer:
- [[eth-arbitrum]] and [[eth-optimism]] post transaction data to L1
- [[eth-zksync]] and [[eth-starknet]] post validity proofs to L1
- EIP-4844 (Proto-Danksharding) added "blobs" — cheap storage for rollup data

## Security Model

Ethereum L1 security is its most important property:
- 32M+ ETH staked (~$100B at current prices)
- 51% attack requires controlling 51% of stake — prohibitively expensive
- Client diversity (Geth, Nethermind, Besu, Erigon) prevents single points of failure

## The Roadmap Ahead

- **Danksharding** — full sharding of data availability for ~1M TPS in rollups
- **Verkle Trees** — smaller state proofs for lighter clients
- **Single-Slot Finality** — true instant finality (currently 12-minute finality window)
`,
  },

  'eth-arbitrum': {
    id: 'eth-arbitrum',
    title: 'Arbitrum',
    content: `# Arbitrum

## Overview

Arbitrum is the largest Ethereum Layer 2 by TVL, built by Offchain Labs. It's an optimistic rollup that achieves near-EVM-equivalent execution at dramatically lower cost by moving computation off [[eth-l1]] while inheriting its security.

## How Optimistic Rollups Work

Arbitrum "optimistically" assumes transactions are valid and only runs fraud proofs when challenged:

1. Users submit transactions to the Arbitrum sequencer
2. The sequencer batches transactions and posts them to Ethereum as calldata/blobs
3. A 7-day challenge window allows anyone to submit a fraud proof if the state is wrong
4. If no valid challenge appears, the state is finalized

## The Nitro Stack

Arbitrum's Nitro upgrade was transformative: it compiles Ethereum's Geth execution client to WASM. This means:
- **True EVM equivalence** — not just compatibility; the same code runs identically
- **Lower fraud proof costs** — WASM is cheaper to execute than EVM in dispute resolution
- **Full Ethereum toolchain support** — MetaMask, Foundry, Hardhat all work natively

## ARB Token and Governance

The ARB token governs the Arbitrum DAO, which controls:
- Protocol upgrades
- Security Council (emergency multisig)
- Treasury allocation (including grants)

## Arbitrum Nova

Arbitrum Nova is a separate chain using **AnyTrust** — a data availability committee (DAC) that stores data off-chain with a trust assumption. Nova achieves even lower fees for gaming and social apps that can tolerate the DAC assumption.

## Ecosystem

Arbitrum hosts GMX (perps), Camelot (DEX), Pendle (yield trading), Radiant (lending), and hundreds of other protocols. Its TVL typically ranges between $2B–$4B.

## Why Arbitrum Leads

Arbitrum's technical rigor — interactive fraud proofs, WASM compilation, mature codebase — gives it a security edge over competitors. Most serious DeFi protocols deployed on Arbitrum before other L2s.
`,
  },

  'eth-optimism': {
    id: 'eth-optimism',
    title: 'Optimism & OP Stack',
    content: `# Optimism & the OP Stack

## Overview

Optimism is both an Ethereum L2 and the creator of the **OP Stack** — the open-source framework that powers [[eth-base]], Mode, Zora, Worldchain, and dozens of other chains. Optimism shifted its strategy from being the best single L2 to being the best platform for building L2s.

## The Superchain Vision

The Superchain is Optimism's architectural goal: a network of OP Stack chains that:
- Share a common sequencer marketplace
- Can send messages between each other instantly
- Contribute sequencer fees to the Optimism Collective
- Eventually share a unified proof system

[[eth-base]] (Coinbase) is the largest Superchain member.

## Retroactive Public Goods Funding

RPGF is Optimism's most innovative governance experiment. Rather than upfront grants, RPGF rewards builders *after the fact* based on demonstrated impact. The premise: "it's easier to agree that something was useful than to predict it in advance."

Optimism has distributed $100M+ across multiple RPGF rounds to open-source developers, Ethereum infrastructure projects, and public goods.

## The OP Stack

OP Stack components:
- **Rollup node** — derives chain state from L1 data
- **Execution engine** — runs EVM (op-geth)
- **Batcher** — posts transaction data to L1
- **Proposer** — submits state roots to L1

Any team can deploy a chain from this stack in days.

## OP Token

OP governs the Optimism Collective, which splits into:
- **Token House** — OP token holders vote on technical upgrades
- **Citizens' House** — non-transferable governance for RPGF allocation

## Fault Proofs

Optimism shipped permissionless fault proofs in 2024 — a major security milestone. Anyone can challenge invalid state roots, removing the need to trust Optimism's team.
`,
  },

  'eth-base': {
    id: 'eth-base',
    title: 'Base (Ethereum L2)',
    content: `# Base (Ethereum L2)

## Overview

Base is [[base]] — Coinbase's Ethereum Layer 2 built on the OP Stack. See the [[base]] main canvas article for the full overview. This node covers Base as part of the Ethereum ecosystem specifically.

## How Base Fits in the Ethereum Stack

Base settles to [[eth-l1]] via the OP Stack's optimistic rollup mechanism:

1. Transactions are batched by Base's sequencer
2. Batches are posted to Ethereum as blobs (EIP-4844)
3. A 7-day fraud proof window secures the chain
4. ETH on Base is bridged ETH — fully backed by L1 ETH

## Base in the Superchain

Base is the largest member of [[eth-optimism]]'s Superchain. It contributes sequencer fees to Optimism's public goods funding and participates in shared sequencing experiments.

## Ethereum's Consumer Crypto Layer

Base is positioning itself as Ethereum's consumer-facing layer:
- [[base-farcaster]] and social apps
- Smart Wallet (passkey accounts)
- x402 payment standard
- Coinbase merchant integrations

## TVL and Activity

Base grew to $3B+ TVL within its first year — faster than any previous L2. Its daily active users rival Arbitrum despite launching years later.

## The No-Token Model

By having no native token, Base aligns perfectly with Ethereum's ETH-as-money narrative. Every fee is paid in ETH, every bridge deposit is ETH, and Coinbase earns from sequencing rather than token appreciation.
`,
  },

  'eth-zksync': {
    id: 'eth-zksync',
    title: 'zkSync',
    content: `# zkSync (ZK Rollup)

## Overview

zkSync is a ZK rollup built by Matter Labs. Unlike optimistic rollups ([[eth-arbitrum]], [[eth-optimism]]), zkSync uses zero-knowledge proofs to mathematically verify the correctness of every state transition — no 7-day challenge period needed.

## ZK vs Optimistic Rollups

The key difference:

| | Optimistic | ZK |
|---|---|---|
| Security model | Fraud proofs (7-day window) | Validity proofs (instant) |
| Withdrawal time | 7 days | Minutes |
| Proof cost | Low (no proof needed) | High (ZK proof generation) |
| EVM compatibility | Easy | Harder |

ZK rollups have stronger security guarantees but historically lagged on EVM compatibility.

## zkEVM Breakthrough

zkSync Era achieved "EVM compatibility" — most Solidity contracts work with minor changes. Matter Labs spent years building a custom compiler (zksolc) that translates Solidity to ZK-provable circuits.

## ZK Stack and Hyperchains

Similar to Optimism's OP Stack, Matter Labs released the **ZK Stack** — an open-source framework for building ZK rollups ("Hyperchains"). These chains can interoperate via ZK proofs without trust assumptions.

## ZK Token

The ZK token launched in 2024 with a large airdrop. It governs the zkSync network and is used for fee discounts and governance.

## zkSync Lite

zkSync Lite (v1) was a payment-focused ZK rollup focused on transfers, not smart contracts. It proved ZK rollup security in production before the more complex Era launched.

## The Long-Term ZK Advantage

As ZK proof generation becomes faster and cheaper (a few years out), ZK rollups will dominate: instant finality, no trust assumptions, and full programmability.
`,
  },

  'eth-starknet': {
    id: 'eth-starknet',
    title: 'StarkNet',
    content: `# StarkNet

## Overview

StarkNet is a ZK rollup built by StarkWare using **STARK proofs** — a different ZK proof system than SNARKs. STARKs are post-quantum secure, require no trusted setup, and produce proofs that are fast to verify (though larger than SNARKs).

## STARK vs SNARK

Two dominant ZK proof systems:

- **STARKs** (StarkWare): No trusted setup, quantum-resistant, larger proofs, fast verification
- **SNARKs** (zkSync, Polygon): Smaller proofs, faster generation, require trusted setup

StarkWare pioneered STARKs for blockchain use, and StarkNet is the full smart contract platform built on this foundation.

## Cairo Language

StarkNet uses **Cairo** — a custom programming language designed specifically for ZK-provable computation. Cairo is not EVM-compatible; Solidity doesn't compile to it.

This was controversial: developers must learn a new language. But Cairo programs are more efficient to prove than EVM bytecode.

## Kakarot zkEVM

To address EVM compatibility, the Kakarot project builds a zkEVM *inside* Cairo — an EVM interpreter written in Cairo. This lets Solidity code run on StarkNet while still using STARK proofs.

## STRK Token

STRK launched in 2024 for governance and fee payment. StarkNet was initially criticized for its large investor allocations; subsequent distributions to developers and users aimed to improve this.

## Notable Applications

- **dYdX v3** — the leading perp DEX ran on StarkWare's StarkEx for years
- **Immutable X** — NFT platform for gaming
- **Ekubo** — concentrated liquidity DEX native to StarkNet

## StarkEx

StarkEx is StarkWare's permissioned product (separate from StarkNet) used by dYdX and Immutable X — a hosted ZK rollup service for enterprise clients.
`,
  },

  'eth-uniswap': {
    id: 'eth-uniswap',
    title: 'Uniswap',
    content: `# Uniswap

## Overview

Uniswap is the dominant decentralized exchange (DEX) on Ethereum and the inventor of the **Automated Market Maker (AMM)** model that DeFi is built on. Launched in 2018 by Hayden Adams, Uniswap replaced order books with a simple mathematical formula.

## The AMM Innovation

Traditional DEXes used order books — buyers and sellers must be matched. Uniswap replaced this with a constant product formula:

**x * y = k**

Where x and y are the reserves of two tokens and k is a constant. This allows:
- Instant trades at any size with no counterparty needed
- Passive liquidity provision — LPs deposit tokens and earn fees
- Permissionless pool creation — anyone can list any token

## Version History

- **v1 (2018)** — ETH/token pairs only, proof of concept
- **v2 (2020)** — ERC20/ERC20 pairs, flash loans, price oracles
- **v3 (2021)** — Concentrated liquidity — LPs specify price ranges for 10x capital efficiency
- **v4 (2024)** — "Hooks" system — custom logic can trigger on swaps, enabling limitless AMM designs

## UNI Token

UNI governance token launched via the most famous airdrop in crypto history: 400 UNI ($1,200–$16,000 at various prices) to every past user. UNI governs the Uniswap protocol but fee switch (turning on protocol fees) has been contentious.

## Market Share

Uniswap processes $1B–$5B in daily volume on [[eth-l1]] alone, plus significant volume on [[eth-arbitrum]], [[eth-optimism]], [[eth-base]], and Polygon. It's the most forked protocol in crypto — nearly every DEX is a Uniswap fork.

## Uniswap's Moat

Two moats: **liquidity network effects** (LPs go where traders go, traders go where LPs are) and **brand trust** (never been hacked in 6 years of mainnet).
`,
  },

  'eth-aave': {
    id: 'eth-aave',
    title: 'Aave',
    content: `# Aave

## Overview

Aave is the leading decentralized lending protocol on Ethereum, with $10B+ in total value locked across multiple chains. Users deposit assets to earn yield; borrowers deposit collateral and take undercollateralized loans.

## How Aave Works

Aave uses **overcollateralized lending**: borrowers must deposit more collateral than they borrow. This eliminates credit risk at the expense of capital efficiency.

1. **Lenders** deposit ETH, USDC, DAI, etc. and receive aTokens that accrue interest
2. **Borrowers** deposit collateral and borrow up to a % of its value (LTV ratio)
3. **Liquidators** earn fees by liquidating undercollateralized positions
4. **Interest rates** adjust algorithmically based on utilization

## Flash Loans

Aave invented **flash loans** — uncollateralized loans that must be borrowed and repaid within a single transaction. They enable:
- Arbitrage between DEXes
- Collateral swaps (swap your ETH collateral for WBTC without closing the loan)
- Self-liquidation
- Protocol exploits (flash loans are a common attack vector)

## Aave v3

v3 brought "Portal" — cross-chain liquidity — and risk-isolated "eMode" for correlated assets. Borrowing efficiency improved dramatically: borrowing ETH against stETH now has 95% LTV.

## GHO Stablecoin

Aave launched **GHO**, a decentralized stablecoin minted by over-collateralizing Aave deposits. AAVE stakers get a discount on GHO borrowing rates.

## AAVE Token

AAVE governs the protocol and backs the Safety Module — a staking pool that covers shortfall events (bad debt). Stakers earn AAVE rewards for assuming this risk.

## Multi-Chain Presence

Aave v3 is live on [[eth-l1]], [[eth-arbitrum]], [[eth-optimism]], [[eth-base]], Polygon, Avalanche, and more — making it the most widely deployed lending protocol.
`,
  },

  'eth-lido': {
    id: 'eth-lido',
    title: 'Lido Finance',
    content: `# Lido Finance

## Overview

Lido is the largest liquid staking protocol for Ethereum, controlling ~30% of all staked ETH. It solves the liquidity problem of PoS staking: instead of locking up 32 ETH for months, stake any amount and receive stETH — a liquid token that earns staking rewards while remaining usable in DeFi.

## The Liquid Staking Model

Ethereum staking requires:
- Minimum 32 ETH (~$80,000 at current prices)
- Waiting for withdrawals (up to 2 weeks in peak queues)
- Technical validator operation

Lido removes all three barriers:
1. Deposit any amount of ETH
2. Receive stETH immediately (rebase token — balance grows with rewards)
3. Use stETH in DeFi while earning ~4% APY

## stETH in DeFi

stETH became a primitive DeFi building block:
- **Aave** accepts stETH as collateral (borrow ETH against stETH at 95% LTV)
- **Curve** stETH/ETH pool provides deep liquidity
- **EigenLayer** accepts stETH for restaking ([[eth-eigenlayer]])
- **DeFi strategies** use stETH as the base yield layer

## Centralization Concerns

Lido's ~30% of staked ETH raises centralization concerns. If Lido controls >33% of validators, it could theoretically delay finality. The Ethereum community has actively debated whether Lido's dominance is a systemic risk.

Lido's response: the DAO governs a set of ~30 professional node operators with insurance, diversifying actual validator operation even if governance is concentrated.

## LDO Token

LDO governs the Lido DAO — fee parameters, node operator selection, protocol upgrades. Lido earns 10% of staking rewards as a protocol fee, split between the DAO treasury and node operators.

## Competitors

[[eth-eigenlayer]] offers restaking. Rocket Pool offers more decentralized liquid staking (rETH) with permissionless node operators. Frax Finance offers sfrxETH.
`,
  },

  'eth-eigenlayer': {
    id: 'eth-eigenlayer',
    title: 'EigenLayer',
    content: `# EigenLayer

## Overview

EigenLayer is a restaking protocol that lets Ethereum stakers "rehypothecate" their staked ETH to provide security for additional services beyond Ethereum itself — earning extra yield for taking on extra slashing risk.

## The Restaking Concept

When you stake ETH (directly or via [[eth-lido]]), your ETH secures Ethereum. EigenLayer lets you extend that security to other protocols — called **Actively Validated Services (AVS)** — without unstaking.

A restaker can say: "Slash my ETH if I misbehave on EigenLayer AND if I misbehave on these other services."

## What AVSes Enable

AVSes are the "why" of EigenLayer. Services that historically needed their own token/staking for security can now rent Ethereum's security:

- **Data availability layers** (EigenDA — EigenLayer's own DA layer)
- **Oracle networks** that need slashing for incorrect data
- **Cross-chain bridges** secured by ETH restakers
- **Decentralized sequencers** for rollups
- **Keeper networks** for DeFi automation

## EigenDA

EigenDA is EigenLayer's own data availability service — an AVS that lets rollups post data more cheaply than posting directly to [[eth-l1]]. [[eth-base]] is exploring EigenDA as an alternative to L1 blob posting.

## The Economic Model

Restakers earn yield from two sources:
1. Ethereum validator rewards (~4%)
2. AVS rewards (variable, paid in AVS tokens or ETH)

The risk: slashing from multiple services simultaneously.

## EIGEN Token

EIGEN is a "universal intersubjective work token" — a novel token design for services that can't use on-chain slashing (e.g., data withholding, where the fault is detectable by humans but not smart contracts).

## Risks

EigenLayer introduces **systemic risk**: if a major AVS slash event occurs, it could cascade across restakers. Ethereum developers have expressed concern about how EigenLayer risks interact with Ethereum consensus.
`,
  },

  'eth-chainlink': {
    id: 'eth-chainlink',
    title: 'Chainlink',
    content: `# Chainlink

## Overview

Chainlink is the dominant oracle network in crypto, providing tamper-proof price feeds, random number generation, and cross-chain communication to $20B+ in DeFi protocols. It solves the "oracle problem": smart contracts need off-chain data, but they can't trust single data sources.

## The Oracle Problem

Smart contracts can only access on-chain data. To know ETH's price, they need an oracle. A single oracle source is a centralization risk — the operator could manipulate data for profit.

Chainlink solves this with **decentralized oracle networks (DONs)**: multiple independent node operators each fetch data from multiple sources, aggregate with outlier removal, and stake LINK as collateral against manipulation.

## Price Feeds

Chainlink's primary product: aggregated price feeds for 1,000+ asset pairs. Every major DeFi protocol ([[eth-aave]], [[eth-uniswap]] v3 TWAP comparison, Compound) uses Chainlink price feeds as the source of truth.

Price manipulation attacks — where an attacker manipulates a DEX price to trick a lending protocol — are only possible if the protocol uses a spot DEX price instead of a Chainlink aggregated feed.

## VRF (Verifiable Random Function)

Chainlink VRF provides **provably random numbers** on-chain — cryptographically verifiable and manipulation-resistant. Used by:
- NFT minting (fair random distribution)
- Blockchain games (random loot, battles)
- Lottery contracts

## CCIP (Cross-Chain Interoperability Protocol)

CCIP is Chainlink's cross-chain messaging and token bridging protocol — designed for enterprise-grade security. It competes with LayerZero, Wormhole, and Axelar.

## LINK Token

LINK pays node operators for providing data. As DeFi grows, LINK demand grows proportionally — every oracle query costs LINK.

## Chainlink Staking

Chainlink v0.2 staking lets community members stake LINK alongside node operators to back price feed security, earning yield in return.
`,
  },

  'eth-graph': {
    id: 'eth-graph',
    title: 'The Graph',
    content: `# The Graph

## Overview

The Graph is the decentralized indexing protocol for blockchain data — often called "the Google of blockchain." It indexes on-chain events and makes them queryable via GraphQL APIs called "subgraphs," enabling DeFi, NFT, and social applications to display real-time on-chain data.

## The Indexing Problem

Smart contracts emit events (a swap happened, a loan was created, an NFT was transferred), but:
- Event history isn't directly accessible from smart contracts
- Running your own archive node costs $5,000+/month
- Real-time queries need specialized infrastructure

The Graph solves this: developers define a subgraph (what to index), and a network of indexers runs nodes that process and serve this data.

## How Subgraphs Work

1. Developer writes a **subgraph manifest** — defines which contracts and events to index
2. Developer writes **mapping handlers** (AssemblyScript) — transforms raw events into structured data
3. Subgraph is deployed to The Graph Network
4. **Indexers** index the subgraph and serve queries
5. **Curators** stake GRT on subgraphs to signal which are worth indexing
6. **Delegators** stake GRT to indexers they trust

## GRT Token

GRT coordinates the network's economics:
- Indexers stake GRT as collateral (slashable for serving wrong data)
- Curators stake GRT to signal subgraph quality (earn indexing rewards)
- Consumers pay GRT for queries (or use free-tier hosted service)

## Usage

Nearly every major DeFi protocol uses The Graph:
- [[eth-uniswap]] subgraph for historical swap data
- [[eth-aave]] subgraph for loan positions
- OpenSea, Blur for NFT history
- Farcaster for social graph data

## The Hosted Service vs. Decentralized Network

The Graph started with a free hosted service (centralized). The migration to the decentralized network is ongoing — requiring subgraph developers to pay in GRT for guaranteed uptime.
`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SOLANA SUB-CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  'sol-l1': {
    id: 'sol-l1',
    title: 'Solana L1',
    content: `# Solana L1

## Overview

Solana is a monolithic Layer 1 blockchain that makes different architectural tradeoffs than [[eth]]: instead of decentralizing execution via rollups, Solana optimizes the single chain to achieve high performance. The result: 65,000 TPS at sub-cent fees on one shared ledger.

## Proof of History

Solana's core innovation is **Proof of History (PoH)** — a Verifiable Delay Function that creates a cryptographic timestamp sequence. By proving that time has passed between events, validators can agree on ordering without round-trip communication, enabling much higher throughput than traditional BFT.

## Tower BFT

PoH is combined with **Tower BFT** — a PoH-optimized version of Practical Byzantine Fault Tolerance. Validators vote on blocks built on the PoH chain, with each confirmation adding an exponential lockout time, creating economic finality.

## Gulf Stream

**Gulf Stream** is Solana's mempool-less transaction forwarding protocol. Clients forward transactions directly to the next expected leader validator, eliminating the mempool bottleneck and reducing confirmation times.

## Turbine

**Turbine** is Solana's block propagation protocol — inspired by BitTorrent. Blocks are broken into small shreds and propagated through a tree of validators, reducing bandwidth requirements.

## Hardware Requirements

The tradeoff for Solana's performance: high hardware requirements. Recommended validator specs include 12-core CPU, 256GB RAM, and high-speed NVMe SSDs. This limits validator count (~2,000 active validators) compared to Ethereum (~500,000).

## Network Stability

Solana had several notable outages in 2021–2022 (caused by spam transactions, QUIC implementation issues, etc.). The network has been significantly more stable since 2023 with improved QUIC implementation and priority fees.

## Developer Ecosystem

Solana programs are written in Rust (native) or Anchor (a framework that reduces boilerplate). The different programming model — account model vs. EVM's contract model — has a learning curve but enables the parallelism that makes Solana fast.
`,
  },

  'sol-jupiter': {
    id: 'sol-jupiter',
    title: 'Jupiter',
    content: `# Jupiter

## Overview

Jupiter is the dominant DEX aggregator on [[sol-l1]], routing swaps through the best available liquidity across Solana's AMMs and order books. It's the primary swap interface for Solana users — similar to 1inch on Ethereum but more dominant in its ecosystem.

## How Jupiter Works

When you swap on Jupiter:
1. Jupiter queries all DEXes on Solana (Raydium, Orca, Phoenix, etc.)
2. It finds the optimal route — possibly splitting across multiple pools
3. It executes the swap atomically in a single transaction

This "smart order routing" gets users better prices than any single DEX.

## JUP Token and Airdrop

Jupiter airdropped 1B JUP tokens to users in January 2024 — one of the largest airdrops in crypto history. A second airdrop distributed additional tokens to active users. JUP governs Jupiter's protocol parameters, fee structure, and treasury.

## Jupiter Perpetuals

Jupiter Perpetuals is a spot-backed perpetual futures exchange on Solana. Unlike synthetic perps, it uses real token liquidity as collateral. It processes billions in monthly volume and has become a top venue for Solana leverage trading.

## DCA and Limit Orders

Jupiter offers:
- **DCA (Dollar Cost Averaging)** — automatically buy/sell over time
- **Limit orders** — execute swaps at specific prices
- **Value averaging** — more sophisticated automated strategies

## Launchpad

Jupiter Start is a token launchpad with a LFG (Let's Fucking Go) voting mechanism where JUP holders vote on which projects get access to the Jupiter launchpad community.

## Dominance

Jupiter handles 60–70% of all Solana DEX volume. Its position is similar to Uniswap on Ethereum — not just the biggest, but the default interface for the entire ecosystem.
`,
  },

  'sol-raydium': {
    id: 'sol-raydium',
    title: 'Raydium',
    content: `# Raydium

## Overview

Raydium is a concentrated liquidity AMM and token launchpad on [[sol-l1]]. It serves two markets: serious traders who want capital-efficient liquidity provision, and meme coin launchers who want to seed liquidity after a pump.fun launch.

## The AMM

Raydium v3 (CLMM — Concentrated Liquidity Market Maker) lets LPs provide liquidity in specific price ranges, similar to Uniswap v3. This dramatically improves capital efficiency: LPs earn the same fees with 10x less capital if the price stays in range.

## Integration with OpenBook

Historically, Raydium was notable for connecting its AMM liquidity to Serum's (then OpenBook's) central limit order book (CLOB). This hybrid model let market makers use both. Most major DEXes have since moved away from CLOB integration.

## LaunchPad and Meme Coins

Raydium became the de facto liquidity layer for Solana meme coins. When tokens launch on [[sol-pump]], they graduate to Raydium once they hit a bonding curve threshold. The LaunchPad allows projects to create initial liquidity pools.

## RAY Token

RAY provides governance and fee discounts. Stakers receive reduced trading fees and a share of protocol revenue. Buybacks from protocol fees support RAY price.

## Ecosystem Position

Raydium sits at the intersection of:
- Deep DeFi liquidity (for major pairs like SOL/USDC)
- New token discovery (post-pump.fun graduation)
- Yield farming (concentrated liquidity positions)

## Competition

Raydium faces competition from Orca (also a CLMM AMM with a more polished UX), Phoenix (pure order book), and [[sol-jupiter]] (which aggregates all of them). Its meme coin graduation pipeline from pump.fun is a unique moat.
`,
  },

  'sol-marinade': {
    id: 'sol-marinade',
    title: 'Marinade Finance',
    content: `# Marinade Finance

## Overview

Marinade Finance is Solana's leading liquid staking protocol. Users deposit SOL and receive mSOL — a liquid token that appreciates against SOL as staking rewards accrue. This lets users earn Solana's ~7% staking yield while keeping their SOL usable in DeFi.

## The Liquid Staking Model

Native SOL staking requires:
- Selecting a validator and bonding SOL
- Waiting 2–3 days for the next epoch to activate
- Waiting 2–3 days to unstake (or selling on secondary markets at a discount)

Marinade removes these constraints:
- Deposit any amount of SOL
- Receive mSOL immediately
- Unstake via the DEX market or wait the epoch delay

## Validator Diversification

Marinade distributes stake across 400+ validators using an algorithmic scoring system that rewards:
- Reliability (uptime)
- Decentralization (not already large validators)
- Performance (voting efficiency)

This improves Solana's decentralization vs. users staking with large validators directly.

## Native Staking

Marinade Native is a separate product: users keep native staked SOL (not liquid) but Marinade handles validator selection and rebalancing. No fees on unstaking, full staking rewards.

## MNDE Token

MNDE governs the Marinade DAO — protocol parameters, fee structure, treasury. MNDE holders vote on validator criteria and business decisions.

## mSOL in DeFi

mSOL is integrated across Solana DeFi:
- Collateral on lending protocols
- Liquidity pool token (mSOL/SOL pairs)
- Yield strategies that stack Marinade rewards with DeFi yield

## Competition

Marinade competes with Jito (jitoSOL) and BlazeStake (bSOL). Jito's MEV-sharing model makes jitoSOL yield higher but concentrates stake among MEV-maximizing validators.
`,
  },

  'sol-jito': {
    id: 'sol-jito',
    title: 'Jito',
    content: `# Jito

## Overview

Jito provides MEV-aware infrastructure for [[sol-l1]]: a liquid staking token (jitoSOL) that distributes MEV (Maximal Extractable Value) rewards to stakers, and a block building system that allows validators to maximize transaction ordering revenue.

## MEV on Solana

MEV (Maximal Extractable Value) refers to profit extracted by reordering, inserting, or censoring transactions in a block. On Solana, MEV includes:

- **Arbitrage** — exploiting price differences across DEXes
- **Liquidations** — front-running liquidation bots
- **Sandwich attacks** — sandwiching user swaps for profit (controversial)

## Jito Block Engine

Jito's Block Engine runs alongside validators. Searchers submit transaction bundles (groups of ordered transactions) with tips. The Block Engine creates the optimal block that maximizes both validator rewards and searcher profits, then sends it to validators running Jito's software.

~70% of Solana stake runs Jito's validator client, giving it enormous influence over Solana's transaction ordering.

## jitoSOL

jitoSOL is Jito's liquid staking token. The yield is higher than competitors (like [[sol-marinade]]'s mSOL) because jitoSOL distributes MEV tips to stakers on top of base staking rewards.

**jitoSOL yield = base staking rewards + MEV tips**

## JTO Token

JTO governs the Jito DAO and controls:
- Jito Network operator selection
- Fee parameters
- Protocol treasury (received 1.5% of SOL staked as initial distribution)

## Controversies

Jito's sandwich bundle system enabled sandwich attacks on Solana users. After community backlash, Jito removed sandwich attack bundles from the official block engine. However, independent block engines that allow sandwiching remain.

## Infrastructure Dominance

Jito's validator client has become de facto Solana infrastructure. Its MEV infrastructure has generated hundreds of millions in cumulative tips.
`,
  },

  'sol-pump': {
    id: 'sol-pump',
    title: 'Pump.fun',
    content: `# Pump.fun

## Overview

Pump.fun is a meme coin launchpad on [[sol-l1]] that allows anyone to create and launch a tradeable token in under 30 seconds for ~$2. It triggered the 2024 memecoin supercycle that temporarily put Solana's fee revenue above Ethereum's.

## How Pump.fun Works

1. **Create**: Pay ~0.02 SOL, name your token, upload image, write description → token is live
2. **Bonding Curve**: Token launches on a deterministic bonding curve — price increases as more SOL is deposited
3. **Graduation**: Once $69,000 in SOL is raised, the token "graduates" to [[sol-raydium]] with a seeded liquidity pool
4. **Speculation**: Traders buy early hoping to sell to later buyers before the bonding curve peaks

## The Cultural Impact

Pump.fun created a 24/7 casino for degenerate speculation:
- Thousands of new tokens launched per day
- Famous people (politicians, celebrities, athletes) had tokens launched about them (and sometimes by them)
- AI-generated tokens, meme tokens, "narrative" tokens
- Many were rug pulls; few had staying power

The platform generated more on-chain activity than most DeFi protocols and drove Solana's fee revenue to record levels.

## Revenue Model

Pump.fun earns 1% of trading volume. At peak, this generated millions per day. The platform reportedly earned $500M+ in total fees in its first year.

## Controversies

- **Rug pulls** — creators dump on buyers
- **Celebrity tokens** — launched without consent or coordination
- **Political tokens** — launched by politicians with potential insider trading implications
- **Scams** — pump.fun's open creation enabled coordinated manipulation

## Pump.fun v2 / PumpSwap

PumpSwap is Pump.fun's native AMM, replacing the Raydium graduation. Graduated tokens now create pools on PumpSwap, capturing more revenue for the platform.

## Legacy

Love it or hate it, Pump.fun demonstrated that ultra-low friction token creation drives massive activity. It onboarded millions to Solana and influenced how the broader ecosystem thinks about permissionless asset creation.
`,
  },

  'sol-tensor': {
    id: 'sol-tensor',
    title: 'Tensor',
    content: `# Tensor

## Overview

Tensor is the dominant NFT marketplace and trading platform on [[sol-l1]], capturing 60–80% of Solana NFT trading volume. It's designed for professional traders — with advanced order types, portfolio analytics, and rarity tools — rather than casual collectors.

## The Trader-Focused Approach

Tensor differentiated from Magic Eden (the previous dominant marketplace) by targeting NFT traders:

- **Real-time orderbook** — see all listings and bids live
- **Bulk operations** — list, bid on, or transfer multiple NFTs simultaneously
- **Advanced charts** — floor price history, volume, wash trading filters
- **Compressed NFTs (cNFTs)** — Tensor was early to support Solana's ultra-cheap cNFT standard

## TNSR Token and Airdrop

Tensor airdropped TNSR tokens to active traders in 2024 — one of Solana's largest airdrops. The airdrop rewarded volume, loyalty (using Tensor over competitors), and referrals.

TNSR governs the Tensor DAO and provides fee rebates to active traders.

## TensorSwap AMM

TensorSwap is Tensor's NFT AMM — allowing automated buying and selling of NFTs from specific collections at algorithmically determined prices. This enables:
- Instant liquidity (sell NFTs without waiting for a buyer)
- Yield farming (provide NFT liquidity and earn fees)
- Floor price support (AMMs buy off the floor automatically)

## Compressed NFTs

Solana's cNFT standard (via Metaplex Bubblegum) allows minting millions of NFTs for fractions of a cent — by storing NFT state in off-chain Merkle trees with roots posted on-chain. Tensor was among the first marketplaces to support cNFTs at scale.

## Market Position

Tensor has displaced Magic Eden as Solana's primary NFT venue for volume traders. Magic Eden responded by going multi-chain (Ethereum, Bitcoin Ordinals), while Tensor remains Solana-focused.
`,
  },

  'sol-helius': {
    id: 'sol-helius',
    title: 'Helius',
    content: `# Helius

## Overview

Helius is the leading developer platform and RPC provider for [[sol-l1]], offering high-performance APIs, real-time webhooks, and Solana-specific developer tools. It's the "Alchemy for Solana" — infrastructure that powers hundreds of Solana applications.

## What Helius Provides

### RPC Nodes
High-performance RPC endpoints for:
- Transaction submission (sendTransaction)
- Account queries
- Historical data
- WebSocket subscriptions

Standard Solana RPC is slow and unreliable for production apps. Helius provides enterprise-grade RPC with 99.9% uptime SLAs.

### Enhanced APIs
Helius extends Solana's basic RPC with higher-level APIs:

- **Digital Asset Standard (DAS) API** — query NFTs, tokens, and compressed NFTs with human-readable metadata
- **Transaction parsing** — raw Solana transactions are complex; Helius parses them into readable events
- **Balance changes** — track token balance changes across accounts
- **Token metadata** — fetch token images, names, decimals in one call

### Webhooks
Real-time event streaming:
- Watch any account for changes
- Filter by transaction type (NFT sale, token transfer, etc.)
- Push notifications to backend servers

## Why Helius Matters

Solana's performance creates developer complexity: fast finality means apps need real-time data; high throughput means large data volumes; the account model means multiple accounts per user. Helius abstracts this complexity.

## Business Model

Helius offers a freemium model: free tier for developers, paid tiers for production apps. Revenue comes from API call volume.

## The Developer Ecosystem

Helius is deeply integrated in the Solana developer community — sponsoring hackathons, publishing technical content, and building open-source tooling like the Solana web3.js helper library.
`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MONAD SUB-CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  'monad-l1': {
    id: 'monad-l1',
    title: 'Monad L1',
    content: `# Monad L1

## Overview

Monad is a new Layer 1 blockchain targeting 10,000 transactions per second while maintaining full EVM bytecode compatibility. It's designed to solve the EVM performance problem without sacrificing the developer ecosystem that makes Ethereum so dominant.

## The Core Problem

The EVM processes transactions sequentially: transaction 1 must complete before transaction 2 starts. This is a hard throughput limit — no matter how fast the hardware, sequential execution can only scale so far. Most "fast EVM chains" (Polygon, BSC, Avalanche C-Chain) just run this sequential EVM faster, hitting a ceiling around 200–500 TPS.

## Monad's Solution: Parallel EVM

Monad runs transactions optimistically in parallel:

1. **Speculative execution** — run all transactions simultaneously, assuming no conflicts
2. **Conflict detection** — detect which transactions touched the same state
3. **Re-execution** — re-run only conflicting transactions in the correct order

In practice, most transactions (DeFi swaps, token transfers) don't conflict. Parallelism is efficient.

## The Technical Stack

Four innovations combine:

- [[monad-parallel]] — the parallel execution engine
- [[monad-bft]] — pipelined consensus (consensus and execution on separate timelines)
- [[monad-db]] — async I/O state storage eliminating disk bottlenecks
- [[monad-evm]] — full bytecode compatibility layer

## Performance Targets

- **10,000 TPS** (vs ~2,000 for Arbitrum, ~15 for Ethereum L1)
- **1-second block times** (vs 12s for Ethereum, 400ms for Solana)
- **Single-slot finality** (blocks are final immediately)

## EVM Drop-In Compatibility

This is Monad's key competitive advantage. When you deploy on Monad:
- No code changes required
- MetaMask, Foundry, Hardhat, ethers.js all work
- Existing Solidity audited code works identically
- Ethereum state can be migrated

Monad targets every Ethereum developer simultaneously.

## Ecosystem

[[monad-eco]] tracks DeFi, gaming, and infrastructure projects building on Monad ahead of mainnet. Major DeFi protocols have committed to deploying.
`,
  },

  'monad-parallel': {
    id: 'monad-parallel',
    title: 'Parallel Execution',
    content: `# Monad Parallel Execution

## Overview

Parallel execution is [[monad-l1]]'s core performance innovation. By running EVM transactions simultaneously rather than sequentially, Monad achieves dramatically higher throughput without sacrificing EVM compatibility.

## The Sequential EVM Problem

The standard EVM processes transactions one at a time:

\`\`\`
Tx1 → Read state → Execute → Write state → Done
Tx2 → Read state → Execute → Write state → Done  (waits for Tx1)
Tx3 → ...
\`\`\`

Each transaction must wait for the previous one to complete. This serialization is the fundamental throughput bottleneck.

## Optimistic Parallel Execution

Monad uses optimistic parallelism:

\`\`\`
[Tx1, Tx2, Tx3, Tx4] → Execute all simultaneously
→ Detect conflicts (which txs touched same storage slots?)
→ Re-execute conflicted txs in correct order
\`\`\`

The key insight: **most transactions don't conflict**. A Uniswap swap and an Aave repayment touch completely different storage. Both can run simultaneously with no coordination.

## Conflict Detection

Monad tracks exactly which storage slots each transaction reads and writes during execution. Two transactions conflict if:
- Both write to the same slot
- One reads a slot the other writes

Conflict rates in practice are low — typically 5–10% of transactions need re-execution.

## Block-STM Inspiration

Monad's approach is inspired by Block-STM (used in Aptos), which uses software transactional memory for parallel execution. Monad's implementation is specifically optimized for EVM semantics and storage patterns.

## Real-World Throughput

The practical throughput depends on the conflict rate of actual transactions. For simple payments and DeFi swaps (low conflict), parallelism is highly effective. For complex interdependent operations, sequential fallback ensures correctness.

At 10,000 TPS, even 10% re-execution overhead means 9,000 effective TPS — still 600x better than Ethereum L1.
`,
  },

  'monad-bft': {
    id: 'monad-bft',
    title: 'MonadBFT',
    content: `# MonadBFT

## Overview

MonadBFT is [[monad-l1]]'s consensus algorithm — a pipelined version of HotStuff BFT that decouples consensus from execution, allowing both to proceed simultaneously and eliminating the execution bottleneck from the critical path.

## The Consensus-Execution Bottleneck

In standard blockchains, the block pipeline is sequential:

\`\`\`
Propose block → Vote → Execute txs → Commit → Propose next block
\`\`\`

Execution is on the critical path. If execution takes 500ms, blocks can never be faster than 500ms.

## Pipelining the Pipeline

MonadBFT pipelines consensus and execution:

\`\`\`
Block N:   [Propose] → [Vote] → [Execute] → [Commit]
Block N+1:            [Propose] → [Vote] → [Execute] → [Commit]
Block N+2:                       [Propose] → [Vote] → [Execute] → [Commit]
\`\`\`

While block N's transactions are executing, block N+1's consensus is already running. This amortizes execution cost across block times.

## HotStuff Foundation

MonadBFT is based on HotStuff BFT, the same consensus algorithm used by:
- **LibraBFT** (Meta's Diem)
- **Jolteon** (Aptos)
- **DiemBFT**

HotStuff achieves O(n) communication complexity (linear in validator count) — much better than PBFT's O(n²). This allows more validators without proportional communication cost.

## Properties

- **1-second block time** — consensus round trips in ~500ms, leaving time for execution
- **Deterministic finality** — no probabilistic confirmation; a block is final or not
- **2/3 honest majority** — requires >67% of stake to be honest (standard BFT assumption)
- **Leader rotation** — block proposers rotate via a deterministic schedule

## Integration with Parallel Execution

MonadBFT hands off the ordered transaction list to [[monad-parallel]] for execution. The parallel executor has the full block time to complete execution before the next consensus round finalizes.
`,
  },

  'monad-db': {
    id: 'monad-db',
    title: 'MonadDB',
    content: `# MonadDB

## Overview

MonadDB is [[monad-l1]]'s custom database designed for high-throughput EVM state access. It solves the I/O bottleneck that limits state-heavy blockchain workloads: parallel execution is only as fast as the slowest storage read.

## The I/O Problem

EVM transactions are I/O-intensive:
- Every SLOAD opcode reads from contract storage
- Every SSTORE opcode writes to storage
- Account balance reads/writes happen constantly

With sequential execution, I/O is already a bottleneck. With parallel execution reading many accounts simultaneously, I/O becomes the primary constraint.

## MonadDB Design

MonadDB is built around three principles:

### 1. Async I/O
MonadDB uses asynchronous I/O throughout. While one read is waiting for the disk, other reads can be initiated. This is similar to how Node.js handles concurrency — non-blocking operations maximize disk utilization.

### 2. SSD-Optimized Layout
Modern NVMe SSDs support 1M+ random read IOPS. MonadDB's storage layout minimizes random access amplification by:
- Keeping related state (same contract) physically close
- Using prefix-compressed storage (common key prefixes stored once)
- Separating hot and cold state on different storage tiers

### 3. State Merkleization Pipeline
Ethereum requires computing a Merkle Patricia Trie root after every block. This is expensive. MonadDB separates:
- **Execution state** — fast, non-Merkleized storage for the execution engine
- **Commitment state** — Merkleized state for validity proofs, computed asynchronously

## Result

MonadDB reduces state access latency by 5–10x compared to standard LevelDB (used by Ethereum clients), enabling [[monad-parallel]] to execute thousands of transactions per second without waiting for storage.
`,
  },

  'monad-evm': {
    id: 'monad-evm',
    title: 'Monad EVM Compatibility',
    content: `# Monad EVM Compatibility

## Overview

[[monad-l1]]'s most important property for adoption is its EVM bytecode compatibility. Monad runs the exact same EVM bytecode as Ethereum, meaning any contract deployed on Ethereum works on Monad with zero changes.

## What "EVM Compatible" Means

EVM compatibility exists on a spectrum:

1. **EVM equivalent** — same bytecode, same opcodes, same behavior. Monad targets this.
2. **EVM compatible** — same high-level language (Solidity/Vyper), may have different bytecode behavior
3. **EVM inspired** — similar programming model but different VM

Monad targets full EVM equivalence: the same compiled bytecode behaves identically.

## What Works Out of the Box

Because Monad uses the same EVM:

- **Solidity** — all Solidity contracts compile and deploy identically
- **Vyper** — same story for Vyper contracts
- **Tooling** — Foundry, Hardhat, Truffle all work without changes
- **Wallets** — MetaMask, Rabby, Rainbow connect to Monad like any EVM chain
- **Libraries** — ethers.js, viem, web3.js work unchanged
- **Explorers** — Etherscan-compatible explorers
- **Security tools** — Slither, Echidna, Certora work for Monad contracts

## The Developer Implications

For a protocol considering deploying to Monad:
1. No code audit necessary for the Monad deployment (same audited code)
2. Same team can maintain both Ethereum and Monad deployments
3. No new security surface area from the migration
4. Users keep the same UX (same wallet, same transaction format)

## Precompiles

Monad supports all standard Ethereum precompiles (SHA3, ECRECOVER, etc.) at the same addresses with the same interfaces. No compatibility issues for contracts that use precompiles.

## The 10x Throughput Advantage

EVM compatibility + 10,000 TPS is the core value proposition: all Ethereum's DeFi, at 600x the throughput, at comparable security.
`,
  },

  'monad-eco': {
    id: 'monad-eco',
    title: 'Monad Ecosystem',
    content: `# Monad Ecosystem

## Overview

The Monad ecosystem is growing rapidly ahead of mainnet, with DeFi protocols, gaming projects, and infrastructure providers committing to deploy on [[monad-l1]]. Given Monad's full EVM compatibility, many Ethereum protocols can deploy with minimal effort.

## DeFi

Monad's 10,000 TPS and sub-cent fees make it ideal for DeFi:

- **AMMs** — Concentrated liquidity DEXes benefit from high throughput for rebalancing and arbitrage
- **Perp DEXes** — On-chain order books become viable at Monad throughput
- **Lending protocols** — Liquidations are faster and cheaper, improving protocol safety
- **Yield aggregators** — More complex strategies become economical at low fees

Several unnamed Ethereum DeFi protocols have confirmed Monad deployments.

## Gaming

On-chain gaming requires the throughput Monad provides:

- Real-time item transfers during gameplay
- On-chain randomness for game mechanics
- Verifiable game state without client trust
- Microtransactions at sub-cent fees

## Infrastructure

- **Oracles** — High-frequency price feeds every block (1s) instead of every ~30s on Ethereum
- **Bridges** — Cross-chain messaging with Wormhole, LayerZero
- **Indexers** — [[eth-graph]]-style subgraphs for Monad
- **RPC providers** — Alchemy, Infura, QuickNode all targeting Monad RPC

## The Ecosystem Flywheel

Monad's ecosystem strategy:
1. EVM compatibility → every Ethereum protocol can deploy immediately
2. 10,000 TPS → enables use cases impossible on Ethereum
3. Low fees → retail users onboard naturally
4. High activity → more fees attract more developers

## Testnet Activity

Monad's testnet has processed billions of transactions, stress-testing the parallel execution system with real DeFi workloads before mainnet.
`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BASE SUB-CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  'base-chain': {
    id: 'base-chain',
    title: 'Base Chain',
    content: `# Base Chain

## Overview

Base is Coinbase's Ethereum Layer 2, built on the OP Stack and launched on mainnet in August 2023. It's the fastest-growing L2 by TVL growth rate, user count, and transaction volume, and serves as Coinbase's public blockchain infrastructure layer.

## Architecture

Base is an optimistic rollup that settles to [[eth-l1]]:

1. Users transact on Base — fast (2s) and cheap (<$0.01)
2. Transactions are batched by Base's sequencer
3. Batches are posted to Ethereum as blobs (EIP-4844)
4. A 7-day fraud proof window secures state transitions
5. ETH on Base is bridged ETH — fully backed 1:1

## No Native Token

Base deliberately has no native token. This is unusual but intentional:
- All fees are paid in ETH (strong ETH monetary premium)
- Coinbase earns sequencer revenue rather than token appreciation
- No token = no securities regulation risk for Coinbase
- Aligns with ETH holders: Base growth = ETH demand growth

## Performance

- **~2 second block times** (target, 2-second average)
- **<$0.01 per transaction** — orders of magnitude cheaper than Ethereum L1
- **EIP-4844 blobs** — further reduced L1 data costs by 10x in March 2024
- **Shared sequencing** — part of Optimism's Superchain sequencer network (in development)

## TVL and Usage

Base grew from $0 to $3B+ TVL in its first year — faster than any previous L2. Daily active addresses frequently exceed 500,000.

## Ecosystem

The full [[base]] ecosystem includes:
- [[base-aerodrome]] — the dominant DEX
- [[base-moonwell]] — the leading lending protocol
- [[base-farcaster]] — decentralized social
- [[base-basename]] — human-readable addresses
- [[base-opstack]] — the underlying infrastructure
- [[base-coinbase]] — the Coinbase integration story
- [[base-consumer]] — consumer crypto apps
`,
  },

  'base-opstack': {
    id: 'base-opstack',
    title: 'OP Stack',
    content: `# OP Stack on Base

## Overview

The OP Stack is the open-source rollup framework developed by [[eth-optimism]] that powers [[base-chain]]. It's the infrastructure layer that transforms Ethereum security into a fast, cheap execution environment.

## OP Stack Components (Base's Usage)

### Execution Engine: op-geth
Base runs a fork of Geth (Ethereum's execution client) with OP Stack modifications. This ensures:
- Full EVM compatibility
- Identical Solidity behavior
- Same gas mechanics (with Base fee reductions)

### Rollup Node: op-node
The op-node derives Base's chain state from Ethereum. It reads the batches posted to L1 and reconstructs the canonical chain state. This means Base's history can always be reconstructed from Ethereum's data.

### Batcher
The batcher compresses transaction data and posts it to Ethereum as EIP-4844 blobs. After EIP-4844, the cost of a Base transaction dropped ~10x because blobs are much cheaper than calldata.

### Proposer
The proposer posts state roots (the hash of Base's current state) to an Ethereum smart contract. This is what the fault proof system checks against.

## The Superchain Vision

Base is part of [[eth-optimism]]'s Superchain — a network of OP Stack chains that will:
- Share cross-chain messaging via \`op-supervisor\`
- Use shared sequencing (atomic cross-chain transactions)
- Contribute sequencer fees to Optimism's public goods fund
- Be verified by a shared fault proof system

Base contributes 15% of its sequencer revenue to Optimism's treasury.

## Security

OP Stack's fault proof system (enabled on Base in 2024) allows anyone to challenge invalid state transitions during the 7-day window. This removed the trust assumption on Base's operator team.
`,
  },

  'base-coinbase': {
    id: 'base-coinbase',
    title: 'Coinbase & Base',
    content: `# Coinbase's Role in Base

## Overview

Base is Coinbase's public L2 — the public infrastructure layer for Coinbase's products and a bet that on-chain activity will replace Coinbase's exchange revenue over time. Understanding the Coinbase-Base relationship explains Base's distribution advantage and strategic direction.

## Why Coinbase Built Base

Coinbase's core business — trading fees — is under pressure from:
- Zero-fee competitors (Robinhood, ETFs)
- On-chain DEX alternatives ([[eth-uniswap]], [[sol-jupiter]])
- Regulatory pressure on centralized exchanges

Base is Coinbase's on-chain answer: capture the on-chain fee market (sequencer revenue) rather than fighting the off-chain fee war.

## Distribution Advantages

Coinbase provides Base with unique distribution:

- **100M+ registered users** can bridge to Base in one tap
- **Coinbase Wallet** (50M downloads) defaults to Base
- **Coinbase Card** — spend crypto on-chain transactions route through Base
- **Coinbase Pay** — merchant payments using Base
- **Institutional on-ramp** — institutional clients can go from fiat to Base DeFi with Coinbase custody

## Smart Wallet

Coinbase's Smart Wallet is a passkey-based account without seed phrases. Users create a wallet with Face ID or Touch ID — no 12-word phrase needed. This dramatically lowers the barrier to on-chain activity.

Smart Wallet is the interface for Base's consumer crypto vision: onboarding mainstream users who would never write down a seed phrase.

## Revenue Model

Coinbase earns ~50% of Base's sequencer revenue (after contributing 15% to Optimism). At $1M+ daily transaction fees, this is becoming a meaningful revenue line for Coinbase.

## The "On-Chain Coinbase" Vision

Coinbase CEO Brian Armstrong has stated the goal: "Coinbase on-chain" — where all Coinbase products eventually run on Base. Trading, lending, payments, identity — all on-chain.
`,
  },

  'base-consumer': {
    id: 'base-consumer',
    title: 'Consumer Crypto on Base',
    content: `# Consumer Crypto on Base

## Overview

Base is positioning itself as the home of "consumer crypto" — applications that make blockchain technology accessible and useful for everyday people, not just crypto-native DeFi traders. This includes social, payments, gaming, and creator monetization.

## What Is Consumer Crypto?

Consumer crypto is on-chain applications with:
- **Non-financial primary utility** — social, gaming, identity, communication
- **Mainstream UX** — no seed phrases, no gas fee awareness
- **App-level abstraction** — users don't know they're using a blockchain

This contrasts with DeFi, which is primarily financial and requires crypto-native knowledge.

## Key Consumer Apps on Base

### Farcaster / Warpcast
[[base-farcaster]] is the leading decentralized social protocol on Base. "Frames" enable interactive mini-apps inside social posts — buy NFTs, vote in polls, play games, all without leaving the feed.

### Friend.tech and Social Tokens
Friend.tech pioneered "social shares" — buy shares of friends to access their chat. While the original app faded, it established the "tokenized social" design space.

### Zora
Zora is a creator monetization platform on Base: mint any content as an NFT, earn when others collect it, and build on-chain creative portfolios.

### onchain.xyz / Paragraph
Publishing platforms where content is minted on-chain, enabling creator monetization without traditional platforms.

## The x402 Payment Standard

x402 is a proposed HTTP payment standard using Base. Instead of subscribing to APIs with credit cards, developers pay per-request using on-chain transactions. This enables micropayment business models impossible with traditional payment rails.

## Smart Wallet's Role

Consumer crypto requires removing crypto UX friction. [[base-coinbase]]'s Smart Wallet — passkey-based, no seed phrases — is the enabling technology. Users can interact with on-chain apps the same way they use regular apps.
`,
  },

  'base-aerodrome': {
    id: 'base-aerodrome',
    title: 'Aerodrome Finance',
    content: `# Aerodrome Finance

## Overview

Aerodrome is the dominant DEX and liquidity hub on [[base-chain]], processing 60–70% of all Base DEX volume. It's a fork of Velodrome (the dominant DEX on Optimism), itself a fork of Solidly — Andre Cronje's "vote-escrow" AMM design.

## The Velodrome / Solidly Model

Aerodrome uses the **ve(3,3)** (vote-escrow) model:

1. **AERO token** — the governance/reward token
2. **veAERO** — lock AERO for 1 week to 4 years to get voting power
3. **Gauge voting** — veAERO holders vote weekly to direct AERO emissions to liquidity pools
4. **Bribe market** — protocols pay veAERO holders to vote for their pool
5. **Flywheel** — protocols that want deep liquidity compete to bribe voters

This aligns the DEX's incentive structure with protocols that want liquidity on Base.

## Liquidity Depth

By controlling AERO emissions via governance, Aerodrome has achieved remarkable liquidity concentration:
- Deep liquidity for Base's major pairs (ETH/USDC, cbBTC/ETH)
- Protocol-owned liquidity via POL strategies
- Attracts new protocols building on Base to seed liquidity via bribes

## AERO Token

AERO is the central coordination token:
- Emitted to liquidity providers in voted pools
- Locked as veAERO for governance and fee revenue
- Fees from trading go to veAERO holders (not LPs)

## Integration with Coinbase

Aerodrome has deep integration with [[base-coinbase]]'s ecosystem:
- Default DEX routing for Base's bridge
- Listed on Coinbase exchange
- Institutional liquidity providers using Coinbase Prime

## Position in Base DeFi

Aerodrome → [[base-moonwell]] → lending → DeFi strategies — the Base DeFi stack flows through Aerodrome's deep liquidity. It's the foundation everything else builds on.
`,
  },

  'base-moonwell': {
    id: 'base-moonwell',
    title: 'Moonwell',
    content: `# Moonwell

## Overview

Moonwell is the leading lending and borrowing protocol on [[base-chain]], with $500M+ in TVL. Users deposit assets as collateral to earn yield, and borrow against them — the core DeFi money market model pioneered by Aave and Compound.

## How Moonwell Works

### Supply
- Deposit ETH, USDC, cbBTC, etc.
- Receive mTokens (mETH, mUSDC) representing your deposit + accrued interest
- Earn supply APY from borrower interest

### Borrow
- Deposit collateral above the required collateral ratio
- Borrow up to the LTV limit
- Pay interest on borrowed amounts
- If collateral falls below liquidation threshold, position is liquidated

### Liquidations
Liquidators repay a portion of undercollateralized debt and receive a discount on the collateral. This keeps the protocol solvent and incentivizes liquidator bots.

## Moonwell Apollo (Base) vs Artemis (Moonbeam)

Moonwell originally launched on Moonbeam (Polkadot parachain) as "Moonwell Artemis." The Base deployment (Moonwell Apollo) grew to dwarf the original and is now the primary focus.

## WELL Token

WELL governs the Moonwell DAO — setting interest rate parameters, adding new collateral assets, managing risk. WELL stakers receive protocol fees and participate in Safety Module decisions.

## Base-Specific Integrations

- **cbBTC** (Coinbase's wrapped Bitcoin) — Moonwell was the primary DeFi lending market for cbBTC on Base
- **USDC** — deep integration with Circle's native USDC on Base
- [[base-aerodrome]] — integrated for optimal liquidation routing

## Risk Management

Moonwell uses conservative risk parameters: lower LTVs, larger liquidation thresholds, and circuit breakers that pause borrowing during extreme volatility. This conservative approach has prevented the bad debt incidents that hit other lending protocols.
`,
  },

  'base-farcaster': {
    id: 'base-farcaster',
    title: 'Farcaster',
    content: `# Farcaster

## Overview

Farcaster is a decentralized social protocol where the social graph is stored on-chain. Warpcast is the dominant client. Together they've created a small but high-quality crypto-native social network on [[base-chain]] that has pioneered "Frames" — interactive mini-apps inside social posts.

## The Protocol Architecture

Farcaster separates:

- **On-chain** (Ethereum/Base) — identity (FIDs), key management, storage rent
- **Off-chain** (Hubs) — messages, follows, likes, casts (posts)

This hybrid design achieves:
- Ownership of identity and relationships (on-chain, can't be deleted)
- Scalable message throughput (off-chain hubs, not every action costs gas)
- Open ecosystem (any client can build on Farcaster)

## Frames

Frames turned social posts into interactive mini-apps:
- **Mint NFTs** directly from a Warpcast post
- **Vote in polls** with on-chain results
- **Claim airdrops** without leaving the feed
- **Play games**, buy tokens, subscribe to newsletters

Frames created a new content format that blends social and on-chain action. Thousands of Frame apps were built within months of launch.

## Warpcast

Warpcast is the primary Farcaster client, built by the Farcaster team. It's a polished iOS/Android app with a Twitter-like feed, but with crypto-native features like wallet integration and Frames.

## The User Base

Farcaster has a small (~300,000 registered) but highly engaged user base of crypto builders, investors, and researchers. The quality of discourse is notably higher than crypto Twitter due to the paid account model (a small ETH fee reduces spam).

## DEGEN Token

DEGEN is an unofficial meme token that became the tipping currency of Farcaster. Users tip DEGEN to creators they like, creating a social monetization layer.

## Connection to Base

Farcaster chose Base as its on-chain settlement layer, making it deeply integrated with the Base ecosystem. [[base-coinbase]]'s Smart Wallet is a natural wallet for Farcaster users.
`,
  },

  'base-basename': {
    id: 'base-basename',
    title: 'Basenames',
    content: `# Basenames

## Overview

Basenames is Base's native naming system — like ENS (Ethereum Name Service) but for Base. Users register human-readable names ending in \`.base.eth\` (e.g., \`alice.base.eth\`) that resolve to their wallet address, making it easy to send and receive crypto without copying hex addresses.

## How Basenames Work

1. **Register**: Pay a small ETH fee (price based on name length) to register a name for 1 year
2. **Configure**: Set your wallet address, avatar, bio, links
3. **Use**: Share \`yourname.base.eth\` instead of \`0x742d35...\`
4. **Resolve**: Any app that supports ENS resolution will also resolve Basenames

## Name Pricing

Base uses a tiered naming fee structure:
- **3-character names**: Premium (rare)
- **4-character names**: Higher fee
- **5+ character names**: Standard fee (~$3–5/year)

Revenue from name registrations goes to the Base protocol and public goods.

## Integration with ENS

Basenames are subdomains of \`.base.eth\` — fully integrated with the ENS standard. Any wallet or dApp that resolves ENS names automatically resolves Basenames.

## Profile System

Basenames includes an on-chain profile:
- **Avatar** — NFT or image
- **Bio** — text description
- **Links** — Twitter, GitHub, Farcaster
- **Verified addresses** — connect your name to multiple chains

## The Identity Layer

Basenames is part of [[base-consumer]]'s broader identity vision. Combined with [[base-farcaster]] and [[base-coinbase]]'s Smart Wallet, Basenames creates a human-readable, portable identity for on-chain activity.

A Base user's identity: \`alice.base.eth\` resolves their wallet, their Farcaster profile links their social, and their Smart Wallet enables seamless transactions.
`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TON SUB-CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  'ton-l1': {
    id: 'ton-l1',
    title: 'TON L1',
    content: `# TON L1 — The Open Network

## Overview

TON (The Open Network) is a blockchain designed from the ground up for massive scale. Its architecture uses dynamic sharding — automatically splitting the chain into parallel shards as load increases — targeting millions of TPS as adoption grows.

## Origins

TON was designed by Nikolai and Pavel Durov (Telegram's founders) as a blockchain for Telegram's 900M users. After the SEC blocked Telegram's 2020 token sale and forced Telegram to return $1.2B to investors, the community continued development independently, relaunching TON as a fully open-source project.

## Technical Architecture

TON's architecture is uniquely sophisticated:

### Masterchain
The masterchain coordinates validators, holds smart contract addresses, and finalizes shardchain blocks. It's the root of the system.

### Workchains
TON supports up to 2^32 workchains — parallel chains with different rules and virtual machines. Currently only Workchain 0 (basic) and Workchain -1 (masterchain) are active.

### Shardchains
Each workchain is automatically split into shards based on load. If a shard becomes congested, it splits. If multiple shards are underutilized, they merge. This **infinite sharding** model theoretically scales to any load.

## TVM (TON Virtual Machine)

TON uses the TVM — a register-based virtual machine with a unique cell-based data model. Smart contracts are written in FunC or Tact (higher-level language). TON's programming model is different from the EVM, requiring Solidity developers to learn new concepts.

## Validator Economics

TON uses Proof of Stake with ~400 validators. Validators stake TON and earn block rewards. The relatively small validator set (vs Ethereum's 500,000) makes TON faster but more centralized.
`,
  },

  'ton-telegram': {
    id: 'ton-telegram',
    title: 'TON × Telegram Integration',
    content: `# TON × Telegram Integration

## Overview

TON's defining advantage over every other blockchain is its native integration with Telegram — the messaging app with 900M+ monthly active users. This integration makes TON the closest thing crypto has ever had to a "built-in" distribution channel at scale.

## The Wallet Integration

TON Wallet is built directly into Telegram:

- **No app download required** — users access the wallet inside Telegram
- **Phone-number based** — send TON to a phone number instead of an address
- **One-tap payments** — pay merchants or tip friends within chats
- **Hardware-level security** — Telegram's account security protects the wallet

This removes every friction point in crypto onboarding. A user doesn't need MetaMask, doesn't need a seed phrase, doesn't need to understand gas fees. They just open Telegram.

## Telegram Mini-Apps (TON Connect)

Telegram's WebApp API lets developers build full applications inside Telegram chats. With TON Connect, these mini-apps can:

- Accept TON/Jetton payments
- Read user's wallet address (with permission)
- Submit transactions on behalf of users
- Create immersive games with crypto rewards

## The 2024 Tap-to-Earn Phenomenon

Games like Notcoin, Hamster Kombat, and Tapswap distributed tokens to users who tapped their phone screens. The mechanics were simple, but the scale was unprecedented:

- **35M users** played Hamster Kombat
- **Notcoin** was the largest Telegram game before it
- Hundreds of millions of people received their first crypto wallet
- TON transaction volume set records during these launches

## Fragment and Username Marketplace

Fragment is TON's marketplace for Telegram usernames and phone numbers — sold as NFTs. Premium Telegram usernames (e.g., \`@crypto\`) sell for thousands of dollars.

## The Distribution Moat

No other blockchain has Telegram's 900M users as a potential user base. Whether TON capitalizes on this distribution advantage is the central question of its future.
`,
  },

  'ton-defi': {
    id: 'ton-defi',
    title: 'TON DeFi',
    content: `# TON DeFi Ecosystem

## Overview

TON's DeFi ecosystem is smaller than Ethereum's or Solana's but growing rapidly, driven by the influx of new users from [[ton-telegram]] integrations. TON DeFi faces unique challenges from TON's programming model but also unique opportunities from Telegram distribution.

## Core Protocols

### DeDust
DeDust is TON's leading AMM DEX, inspired by Uniswap's constant product model but rebuilt for TON's account and cell model. It supports:
- TON/USDT swaps (primary pair)
- Jetton (TON's token standard) trading
- Liquidity provision and yield farming

### STON.fi
STON.fi is a competing AMM with a more developer-friendly API and growing liquidity. It's often used as the default swap route by TON wallets.

### Evaa Protocol
Evaa is TON's leading lending protocol — lend and borrow TON, USDT, and major Jettons. Still in early stages compared to [[eth-aave]] or Solana's lending protocols.

## Jetton Standard

TON's fungible token standard (Jetton) is different from ERC-20. Each Jetton is a set of smart contracts with a master contract and wallet contracts per user. This complicates DeFi integrations but enables some parallelism advantages.

## USDT on TON

Tether deployed USDT on TON — a major milestone. USDT is the lifeblood of DeFi, and having native USDT (rather than bridged) enables proper DeFi activity. TON USDT volume surged after launch.

## Challenges

TON DeFi faces real challenges:
- **Programming model** — FunC/Tact are not Solidity; few DeFi developers know them
- **Small ecosystem** — fewer auditors, fewer composable protocols
- **MEV** — immature MEV infrastructure compared to Ethereum/Solana
- **Bridges** — cross-chain bridges to Ethereum DeFi are newer and less trusted

## The Opportunity

If even 1% of Telegram's 900M users becomes active DeFi users, TON's DeFi ecosystem would be enormous. The gap between current usage and potential is larger than any other chain.
`,
  },

  'ton-games': {
    id: 'ton-games',
    title: 'TON Gaming',
    content: `# TON Gaming

## Overview

TON became the dominant blockchain for crypto gaming in 2024 — not through high-quality AAA games, but through the "tap-to-earn" phenomenon on Telegram. Hundreds of millions of people played TON games, making gaming the primary on-ramp for new crypto users in 2024.

## The Tap-to-Earn Wave

### Notcoin (2023)
Notcoin was the first major Telegram tap-to-earn game. Users tapped a coin on screen to earn "Notcoins." The mechanics were deliberately simple — accessible to anyone. When NOT token launched on Binance in May 2024, it distributed to 35M players.

### Hamster Kombat (2024)
Hamster Kombat iterated on Notcoin's model with a hamster CEO character and "business management" mechanics. It reached:
- **300M+ players** at peak
- **Most subscribed Telegram channel** in history
- $HMSTR token launch distributed to 100M+ eligible wallets

### Tapswap, Rocky Rabbit, and others
Dozens of copycat games launched, each attracting millions of players. A generation of Telegram users got their first crypto wallet, first token, first on-chain transaction through these games.

## Why Games Drive Adoption

Games are powerful crypto on-ramps because:
- Fun is a better motivator than financial return
- Simple mechanics work for non-crypto users
- Social aspects (friend referrals) create viral growth
- Low stakes → safe first experience

## Beyond Tap-to-Earn

The Telegram gaming ecosystem is evolving:
- **Puzzle games** with token rewards
- **Battle games** with PvP mechanics
- **Strategy games** with on-chain asset ownership
- **Casino games** — high-volume, controversial

## The Infrastructure Layer

Games drove demand for TON infrastructure:
- Mass token distribution via smart contracts
- NFT minting at scale (game items, characters)
- Jetton (token) creation tools
- Analytics for tracking game economics

## Long-Term Questions

Will tap-to-earn users become real crypto users, or will they sell their tokens and never return? The data suggests retention is low — but the scale of initial exposure is unprecedented.
`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BITCOIN SUB-CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  'btc-l1': {
    id: 'btc-l1',
    title: 'Bitcoin L1',
    content: `# Bitcoin L1

## Overview

Bitcoin's Layer 1 is the most secure, most decentralized, and most battle-tested blockchain in existence. It processes ~7 transactions per second with 10-minute block finality — deliberately slow by design.

## The Security Model

Bitcoin L1's security comes from Proof of Work:

- **Hash rate** — miners expend real energy to propose blocks
- **51% attack cost** — attacking Bitcoin requires controlling more hash rate than all legitimate miners combined; prohibitively expensive
- **Hash rate growth** — as Bitcoin's price grows, more miners join, increasing security
- **ASIC manufacturing** — specialized mining hardware raises the bar for attacks

No other blockchain has Bitcoin's security budget (miner revenue) or its proven track record (15+ years without a consensus failure).

## The Script Language

Bitcoin transactions are validated by a simple scripting language (Bitcoin Script):
- **P2PKH** — pay to public key hash (standard transactions)
- **P2SH** — pay to script hash (multisig, time locks)
- **P2WPKH** — SegWit native transactions (lower fees)
- **P2TR** — Taproot transactions (Schnorr signatures, MAST)

Script is intentionally limited — no loops, no Turing completeness. This simplicity is a security feature.

## Taproot (2021)

The Taproot soft fork added:
- **Schnorr signatures** — more efficient than ECDSA, enables signature aggregation
- **MAST** (Merklized Abstract Syntax Trees) — hide unused spending conditions
- **Tapscript** — upgraded script version for future improvements

Taproot enabled [[btc-ordinals]] by allowing arbitrary data inscription to Taproot outputs.

## Block Size and SegWit

Bitcoin's block size limit (~1MB, effectively ~4MB with SegWit) caps throughput to prevent centralization pressure on nodes. The 2017 block size war was Bitcoin's most contentious governance event — the community rejected larger blocks, leading to the Bitcoin Cash fork.

## The Fee Market

As block rewards decrease (halving every 4 years), transaction fees become Bitcoin L1's primary security budget. The 2024 bull market showed fees can sustain miner revenue even without block subsidy.
`,
  },

  'btc-lightning': {
    id: 'btc-lightning',
    title: 'Lightning Network',
    content: `# Lightning Network

## Overview

The Lightning Network is a Layer 2 payment protocol on [[btc-l1]] that enables instant, near-zero-fee Bitcoin payments by routing them through a network of payment channels — without recording every transaction on the blockchain.

## How Lightning Works

### Payment Channels
A payment channel is a 2-of-2 multisig Bitcoin transaction:
1. Alice and Bob both lock funds in a channel (on-chain transaction)
2. They can send instant payments back and forth (off-chain, just signing messages)
3. When done, they broadcast the final balance to the Bitcoin blockchain (one on-chain transaction)

### Channel Networks
The real power comes from routing:
- Alice wants to pay Carol but has no direct channel
- Alice → Bob → Carol (if Bob has channels with both)
- Payments route through the network without trust — cryptographic Hash Time Lock Contracts (HTLCs) guarantee the payment reaches Carol or Alice gets a refund

## Properties

- **Instant** — no waiting for block confirmations (milliseconds)
- **Near-zero fees** — routing fees are tiny fractions of a cent
- **Private** — payments don't appear on the blockchain
- **Scalable** — theoretically millions of TPS (limited by network topology)

## Adoption

Lightning has grown significantly:
- **100,000+ channels** active
- **$500M+ capacity** locked in channels
- **Strike, Cash App, River** — major apps supporting Lightning
- **El Salvador** — national Bitcoin wallet uses Lightning
- **Alby** — browser extension for Lightning micropayments

## Limitations

- **Channel liquidity** — channels can run out of capacity in one direction
- **Online requirement** — nodes must be online to receive payments
- **Routing failures** — large payments sometimes fail to find routes
- **Capital lockup** — funds locked in channels can't be used elsewhere

## Lightning as a Payment Network

For small, frequent payments (content tips, streaming payments, micropayments), Lightning enables use cases impossible on any other network. It's the most compelling payment technology built on crypto infrastructure.
`,
  },

  'btc-ordinals': {
    id: 'btc-ordinals',
    title: 'Ordinals & Inscriptions',
    content: `# Ordinals & Bitcoin Inscriptions

## Overview

Ordinals is a protocol for creating Bitcoin NFTs — attaching arbitrary data to individual satoshis (the smallest Bitcoin unit) to create unique, immutable on-chain artifacts. Launched in January 2023 by Casey Rodarmor, Ordinals ignited a cultural moment on Bitcoin.

## The Ordinal Theory

Every satoshi is unique and can be tracked through Bitcoin's history. The ordinal protocol assigns each satoshi an ordinal number based on mining order (first sat from first block = ordinal 0). This makes sats individually identifiable — the basis for "rare sats" and NFTs.

## Inscriptions

**Inscriptions** are arbitrary data (images, text, HTML, JavaScript) attached to specific satoshis using Bitcoin's SegWit and Taproot capabilities:

1. Data is embedded in a Taproot transaction's witness data
2. The satoshi carrying the inscription is tracked by ordinal number
3. The inscription is stored permanently on the Bitcoin blockchain
4. Wallets and explorers can display the inscription

## What Gets Inscribed

- **Images** — PNG, JPEG, WebP (Bitcoin PFPs, digital art)
- **Text** — JSON, plain text, even entire websites
- **Code** — JavaScript games running on Bitcoin
- **BRC-20 tokens** — fungible tokens via JSON inscriptions
- **Recursive inscriptions** — inscriptions that reference other inscriptions

## Cultural Impact

Ordinals brought a new community to Bitcoin:
- Artists and NFT collectors who previously used Ethereum
- Controversy among "Bitcoin maximalists" who objected to "spam"
- New fee revenue for Bitcoin miners
- The "digital artifact" narrative — immutable art on the most secure chain

## BRC-20 Tokens

BRC-20 is an experimental token standard using text inscriptions to track fungible token balances. While technically limited (not actual smart contracts), BRC-20 created speculative markets and drove enormous on-chain activity.

## Runes Protocol

Casey Rodarmor also created **Runes** — a more efficient fungible token protocol for Bitcoin. Runes launched at the April 2024 halving and immediately dominated Bitcoin block space.
`,
  },

  'btc-stacks': {
    id: 'btc-stacks',
    title: 'Stacks',
    content: `# Stacks

## Overview

Stacks is a Layer 2 for [[btc-l1]] that brings smart contracts and DeFi to Bitcoin without modifying Bitcoin itself. Stacks transactions are settled to Bitcoin — using Bitcoin as the ultimate security and finality layer.

## Proof of Transfer (PoX)

Stacks uses a novel consensus mechanism called **Proof of Transfer**:
- Stacks miners spend Bitcoin (BTC) to win the right to mine Stacks blocks
- Bitcoin is transferred to Stacks holders who lock their STX ("Stackers")
- This creates a direct economic link between Bitcoin and Stacks

Stackers earn Bitcoin yield (~6–10% BTC yield on locked STX) — a unique property: earning BTC by holding a separate chain's token.

## Clarity Smart Contracts

Stacks uses **Clarity** — a decidable, interpreted smart contract language:
- **Decidable** — you can always analyze exactly what a Clarity program will do
- **Interpreted** — contract code is stored on-chain and executed at runtime
- **No reentrancy** — Clarity prevents reentrancy bugs by design
- **Predictable costs** — all costs are computable before execution

Clarity is different from Solidity and has a smaller developer pool, but the security properties are genuinely superior.

## sBTC — Bitcoin DeFi

**sBTC** is Stacks's trust-minimized Bitcoin bridge:
- Lock BTC on Bitcoin L1 to receive sBTC on Stacks
- Use sBTC as collateral in Stacks DeFi protocols
- Unlock original BTC via the sBTC protocol

This enables BTC-collateralized lending, AMM liquidity, and other DeFi using real Bitcoin.

## Nakamoto Upgrade

The Nakamoto upgrade (2024) transformed Stacks:
- **Fast blocks** — 5-second Stacks blocks (not waiting for Bitcoin's 10-minute blocks)
- **Bitcoin finality** — Stacks state is finalized when buried under Bitcoin blocks
- **Improved sBTC security** — more decentralized BTC custody

## The Bitcoin DeFi Thesis

Stacks argues that Bitcoin's $1T+ market cap of "idle" BTC should be put to work in DeFi. Users want to hold Bitcoin's security but still earn yield. Stacks provides the infrastructure for Bitcoin-native DeFi.
`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MAIN CANVAS — NEW NODES
  // ═══════════════════════════════════════════════════════════════════════════

  megaeth: {
    id: 'megaeth',
    title: 'MegaETH',
    content: `# MegaETH

## Overview

MegaETH is an Ethereum L2 designed for real-time performance. While most L2s optimize for throughput in batches, MegaETH targets sub-millisecond transaction confirmations — making on-chain real-time applications technically feasible for the first time.

## The Real-time Problem

Current blockchains are too slow for many applications:
- Trading: 250ms-2s is too slow for high-frequency strategies
- Gaming: Real-time games need <50ms response times
- Social: Live feeds require instant state updates

MegaETH targets <1ms confirmations through architectural innovation.

## Core Architecture

- **High-performance sequencer** — handles EVM execution at extreme speed
- **Mini-nodes** — lightweight verifiers that check sequencer honesty without re-executing all transactions
- **Pre-confirmations** — sequencer commits to include transactions, backed by slashable stake

## EVM Compatibility

MegaETH is fully EVM-compatible: existing Ethereum contracts deploy unchanged, and standard tooling (Hardhat, Foundry, MetaMask) works natively.

## Relationship to Ethereum

MegaETH settles to Ethereum L1 for final security. It's part of the Ethereum L2 ecosystem: [[eth]] → [[megaeth]].

## Use Cases

- Real-time on-chain order books
- On-chain multiplayer games
- High-frequency DeFi strategies
- Real-time AI agent interactions
`,
  },

  rwa: {
    id: 'rwa',
    title: 'Real World Assets',
    content: `# Real World Assets (RWA)

## Overview

Real World Assets (RWA) is the tokenization of traditional financial assets on public blockchains. By 2024, $10B+ in RWA was on-chain, including US Treasuries, private credit, real estate, and commodities.

## Why Tokenize?

Tokenization gives traditional assets blockchain properties:
- **24/7 liquidity** — trade at any time, not just market hours
- **Programmable distributions** — yield paid automatically in smart contracts
- **Fractional ownership** — $100 of tokenized real estate instead of $1M minimum
- **Global access** — anyone with a wallet can access institutional products
- **Instant settlement** — T+0 settlement vs T+2 in TradFi

## Categories

- **Tokenized treasuries** — [[rwa-ondo]], [[rwa-blackrock]] (BUIDL fund)
- **Private credit** — [[rwa-centrifuge]], [[rwa-maple]], [[rwa-goldfinch]]
- **Infrastructure** — [[rwa-chainlink]] Proof of Reserve

## Institutional Adoption

BlackRock's BUIDL fund on [[eth]] was a watershed moment: the world's largest asset manager chose a public blockchain for a regulated financial product.

## The Regulatory Frontier

RWA exists at the intersection of crypto and regulated finance. Most large RWA products use permissioned access (KYC required). The question is whether truly permissionless RWA can achieve regulatory acceptance.
`,
  },

  payments: {
    id: 'payments',
    title: 'Crypto Payments',
    content: `# Crypto Payments

## Overview

Crypto payments reached an inflection point in 2024: stablecoins settled $10T+ in volume — more than Visa and Mastercard combined. The infrastructure for crypto-native payments is maturing rapidly.

## The Stablecoin Foundation

Modern crypto payments are built on stablecoins, not volatile tokens:
- [[payments-circle]] USDC: $40B+ circulation, regulated, widely integrated
- USDT (Tether): largest by volume
- Regional stablecoins: EURC, PYUSD (PayPal)

## Payment Infrastructure

- [[payments-stripe]] — Stripe's USDC payment processing
- [[payments-coinbase]] — Coinbase Commerce for merchants
- [[payments-request]] — Decentralized payment request standard

## The x402 Standard

[[payments-x402]] revives HTTP 402 for crypto micropayments. AI agents can pay APIs autonomously — no accounts, no subscriptions, just micropayments per request.

## Cross-border Payments

[[payments-stellar]] was purpose-built for this. With 3-second settlement and near-zero fees, Stellar powers remittances at scale. Circle's USDC on Stellar enables programmable cross-border transfers.

## Network Competition

- [[sol]] leads on speed and fees for consumer payments
- [[base]] has Coinbase's distribution and x402 integration
- [[eth]] L2s provide the regulatory clarity preferred by institutions
`,
  },

  wallets: {
    id: 'wallets',
    title: 'Wallets & Identity',
    content: `# Wallets & Identity

## Overview

The wallet UX problem has been crypto's biggest adoption blocker. Three converging technologies are fixing this: embedded wallets, account abstraction, and passkeys.

## Embedded Wallets

Instead of requiring users to install MetaMask and write down seed phrases, embedded wallet SDKs create wallets silently during app onboarding:

- [[wallets-privy]] — wallet creation via email/social login
- [[wallets-dynamic]] — enterprise-grade, multi-wallet auth
- [[wallets-magic]] — Magic Link email authentication

## Account Abstraction (ERC-4337)

[[wallets-erc4337]] transforms wallets from simple key pairs into programmable smart contracts:

- **Gasless transactions** — paymasters pay gas fees for users
- **Session keys** — time-limited keys for gaming without constant approvals
- **Social recovery** — recover via trusted contacts, not seed phrases
- **Batched transactions** — multiple operations in one signature

## Institutional Security

[[wallets-safe]] is the $100B+ multisig standard used by DAOs, protocols, and institutions. M-of-N signing ensures no single point of failure.

## Consumer Wallets

[[wallets-rainbow]] — beautiful mobile wallet for consumers
[[wallets-particle]] — chain abstraction for seamless multi-chain UX

## The Passkey Revolution

Hardware-native passkeys (Face ID, Touch ID) eliminate passwords and seed phrases entirely. Coinbase Smart Wallet uses passkeys as the primary authentication method — making crypto wallets as easy as Face ID for iCloud.
`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // POLYGON CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  'polygon-chain': {
    id: 'polygon-chain',
    title: 'Polygon',
    content: `# Polygon (POL)

## Overview

Polygon is one of the most widely used Ethereum scaling ecosystems — starting as a simple sidechain and evolving into a comprehensive ZK-powered multi-chain network. The transition from MATIC to POL token reflects this architectural maturity.

## The Polygon Stack

- **[[polygon-pos]]** — The original PoS sidechain with 2B+ transactions
- **[[polygon-zkevm]]** — ZK rollup with full EVM equivalence
- **[[polygon-agglayer]]** — Unifies all Polygon chains into one liquidity layer

## Enterprise & Gaming

Polygon became the go-to chain for enterprise and gaming due to near-zero fees:
- Starbucks Odyssey (loyalty NFTs)
- Reddit collectible avatars (millions minted)
- Immutable X gaming NFTs
- [[polygon-gaming]]

## The POL Token

POL (previously MATIC) is designed for multi-chain staking: validators can simultaneously stake to secure Polygon PoS, zkEVM, and any AggLayer-connected chain, earning fees from multiple networks.

## The ZK Pivot

Polygon bet early on ZK technology when most L2s chose optimistic rollups. The [[polygon-agglayer]] vision — ZK proofs aggregated across chains — is the most ambitious interoperability project in the space.

## Developer Ecosystem

- [[polygon-quickswap]] — leading DEX
- [[polygon-aave]] — major lending market
- [[polygon-id]] — ZK identity
`,
  },

  'polygon-pos': {
    id: 'polygon-pos',
    title: 'Polygon PoS',
    content: `# Polygon PoS

## Overview

Polygon PoS is the original Polygon sidechain — an EVM-compatible chain that runs parallel to Ethereum, periodically checkpointing state to Ethereum mainnet. With 2B+ transactions and hundreds of deployed applications, it remains one of the most-used EVM chains.

## Architecture

Polygon PoS uses Proof of Stake with ~100 validators:
- Validators stake POL (previously MATIC) to propose and validate blocks
- Checkpoints are submitted to Ethereum L1 ~every 30 minutes
- The checkpoint mechanism provides periodic Ethereum-grade finality

## Why "Sidechain" Not "Rollup"

Unlike true rollups, Polygon PoS doesn't submit all transaction data to Ethereum:
- Cheaper (less data on L1) but less secure
- Funds rely on validator honesty, not L1 fraud/validity proofs
- Still more secure than most alternatives due to checkpoint frequency

## Ecosystem

Polygon PoS has one of the deepest DeFi ecosystems outside Ethereum mainnet:
- [[polygon-quickswap]] (leading DEX)
- [[polygon-aave]] (lending)
- [[polygon-gaming]] (Immutable, gaming NFTs)

## Migration Path

As [[polygon-zkevm]] and [[polygon-agglayer]] mature, applications will migrate to the ZK-secured system while PoS continues operating.
`,
  },

  'polygon-zkevm': {
    id: 'polygon-zkevm',
    title: 'Polygon zkEVM',
    content: `# Polygon zkEVM

## Overview

Polygon zkEVM is a ZK rollup targeting Type 2 EVM equivalence — the strongest form of EVM compatibility. This means existing Ethereum smart contracts, tools, and wallets work on zkEVM without any modifications.

## ZK Proofs

Every batch of transactions is cryptographically proven valid:
- SNARK proofs verified on Ethereum L1
- No 7-day withdrawal window (unlike optimistic rollups)
- Withdrawals finalize in minutes after proof verification

## EVM Equivalence Levels

- **Type 1**: Identical to Ethereum (slow, expensive proving)
- **Type 2**: Same opcodes, different state structure (Polygon zkEVM's target)
- **Type 3**: Mostly compatible, some differences
- **Type 4**: Compiled to different bytecode

## Integration with AggLayer

[[polygon-agglayer]] aggregates zkEVM proofs along with other Polygon chains into a single Ethereum verification. This dramatically reduces per-chain proving costs and unifies liquidity.

## Technical Components

- **zkProver**: Generates validity proofs for transaction batches
- **Sequencer**: Orders and executes transactions
- **Aggregator**: Submits proofs to Ethereum L1
`,
  },

  'polygon-agglayer': {
    id: 'polygon-agglayer',
    title: 'AggLayer',
    content: `# AggLayer

## Overview

The AggLayer (Aggregation Layer) is Polygon's most ambitious infrastructure project — a protocol that aggregates ZK validity proofs from multiple chains and presents them to Ethereum as a unified proof, enabling trustless cross-chain interoperability.

## The Problem It Solves

Multi-chain fragmentation: liquidity, users, and applications are siloed across different chains. Traditional bridges are trust-heavy and expensive. AggLayer creates a shared security and liquidity layer.

## How It Works

1. Each connected chain generates ZK validity proofs for its state transitions
2. AggLayer aggregates these proofs recursively (proof of proofs)
3. A single aggregated proof is verified on Ethereum L1
4. Cross-chain transactions can be atomic across all AggLayer chains

## Compared to Competitors

- **Optimism Superchain**: Uses optimistic proofs, requires 7-day challenge period
- **Arbitrum Orbit**: Separate chains with separate bridges
- **AggLayer**: ZK-based, near-instant cross-chain finality, open to third-party chains

## Open Protocol

Unlike the OP Stack and Arbitrum Orbit (which only serve their own ecosystems), AggLayer is designed for any chain to plug in — Ethereum L2s, other L1s, or even non-EVM chains with ZK proof capability.
`,
  },

  'polygon-id': {
    id: 'polygon-id',
    title: 'Polygon ID',
    content: `# Polygon ID

## Overview

Polygon ID is a ZK-based self-sovereign identity system — users can prove claims (age, KYC status, membership) without revealing the underlying personal data. It represents crypto's most mature approach to privacy-preserving digital identity.

## The Core Insight

Traditional digital identity requires sharing personal data to prove attributes. ZK proofs make it possible to prove properties without sharing data: "I am over 18" without revealing your age, or "I passed KYC" without revealing which country or what documents.

## Technical Stack

- **W3C Verifiable Credentials** — standardized credential format
- **Iden3 protocol** — credential issuance and verification
- **Groth16 ZK-SNARKs** — efficient on-chain proof verification
- **Polygon blockchain** — for credential anchoring and verification

## Use Cases

- **KYC without data sharing** — prove compliance status to DeFi protocols
- **Age verification** — access age-gated content without ID documents on file
- **Membership proofs** — prove DAO membership, NFT ownership, or reputation
- **Credential chains** — build on existing credentials to prove complex claims

## Integration with [[polygon-agglayer]]

As AggLayer matures, Polygon ID credentials become portable across all AggLayer chains — one identity that works everywhere in the Polygon ecosystem.
`,
  },

  'polygon-quickswap': {
    id: 'polygon-quickswap',
    title: 'QuickSwap',
    content: `# QuickSwap

## Overview

QuickSwap is the dominant DEX on Polygon PoS — the Uniswap of the Polygon ecosystem. Launched in 2020 as Polygon gained traction, it has processed billions in trading volume and serves as the primary liquidity hub for Polygon DeFi.

## Token Model

- **QUICK** — governance token for original QuickSwap
- **dQUICK (Dragon's Lair)** — stake QUICK to receive protocol fees as dQUICK
- **veQUICK** — vote-escrow model for directing liquidity emissions

## Liquidity Book (V3)

QuickSwap V3 introduced concentrated liquidity (similar to Uniswap V3):
- LPs provide liquidity in specific price ranges
- Higher capital efficiency vs V2 AMMs
- Active LPs earn more fees per dollar of capital

## Cross-Polygon Presence

QuickSwap deployed on both Polygon PoS and [[polygon-zkevm]], making it the DEX that spans the entire Polygon ecosystem. This gives QuickSwap first-mover advantage on zkEVM as it grows.

## Integration with Polygon ID

QuickSwap explored [[polygon-id]] integration for institutional trading features — allowing compliant trading without KYC document exposure.
`,
  },

  'polygon-aave': {
    id: 'polygon-aave',
    title: 'Aave on Polygon',
    content: `# Aave on Polygon

## Overview

Aave V3 on Polygon PoS is one of the most-used DeFi deployments on Polygon, enabling supply/borrow/lending with near-zero gas fees. It brings Ethereum's leading lending protocol to a chain accessible to retail users with small capital.

## Why Polygon Aave Matters

On Ethereum mainnet, Aave gas costs make small positions uneconomical:
- A $100 borrow might cost $50 in gas
- On Polygon, the same transaction costs $0.01

This democratizes lending: small holders can use DeFi lending without being priced out.

## V3 Features on Polygon

- **Efficiency Mode (E-Mode)**: Up to 97% LTV for correlated assets (e.g., USDC/USDT)
- **Isolation Mode**: New assets can be listed with isolated borrowing limits
- **Portal**: Cross-chain liquidity between Aave deployments via native bridges

## GHO on Polygon

Aave's native stablecoin GHO can be minted on Polygon, creating a low-fee stablecoin generation mechanism. GHO minted on Polygon is backed by Polygon-native collateral.

## TVL and Market

Polygon Aave has maintained $300M-$500M TVL, making it consistently one of the top DeFi protocols on Polygon. USDC, USDT, WETH, and WMATIC are the primary markets.
`,
  },

  'polygon-gaming': {
    id: 'polygon-gaming',
    title: 'Gaming / Immutable',
    content: `# Gaming on Polygon

## Overview

Polygon became the leading blockchain for gaming infrastructure due to its combination of low fees, EVM compatibility, and aggressive ecosystem development. Immutable X (built on Polygon) is the leading gaming-specific NFT platform.

## Immutable X

Immutable X uses a StarkEx ZK rollup on Polygon for gasless gaming NFT transactions:
- Zero gas fees for trades and mints
- 9,000+ TPS for gaming assets
- Used by Gods Unchained, Illuvium, GameStop NFTs

## Major Gaming Deployments

- **The Sandbox** — virtual world with $SAND token, land NFTs on Polygon
- **Decentraland** — metaverse with $MANA, LAND NFTs on Polygon
- **Aavegotchi** — DeFi + gaming hybrid, GHST token
- **Benji Bananas** — Animoca Brands mobile game

## Enterprise Integration

Polygon's enterprise business development team landed notable deals:
- Starbucks Odyssey (loyalty program NFTs)
- Reddit collectible avatars (millions minted by non-crypto users)
- Nike .SWOOSH virtual wearables
- Various sports team partnerships

## Why Gaming Chose Polygon

Low fees allow micro-transactions (in-game item sales, crafting costs). EVM compatibility means games use standard Solidity smart contracts. Polygon's scalability handles game activity spikes without congestion.
`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // AVALANCHE CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  'avax-l1': {
    id: 'avax-l1',
    title: 'Avalanche',
    content: `# Avalanche (AVAX)

## Overview

Avalanche is a high-performance Layer 1 blockchain with a unique 3-chain architecture and subnet model. It achieves sub-second finality through the Snowman consensus protocol — a derivative of the original Avalanche consensus.

## The 3-Chain Architecture

- **X-Chain** (Exchange Chain): DAG-based asset transfers, optimized for high-throughput token swaps
- **P-Chain** (Platform Chain): Validator coordination, staking, and subnet management
- **C-Chain** (Contract Chain): EVM-compatible execution — where DeFi lives ([[avax-cchain]])

## Subnets / L1s

[[avax-subnets]] allow anyone to deploy custom blockchains with their own rules, validators, and tokenomics. Subnet validators must also stake AVAX and validate the primary network.

## Avalanche Warp

[[avax-teleporter]] is the native cross-subnet messaging protocol. BLS multi-signatures from validators authenticate cross-chain messages without external bridges.

## DeFi Ecosystem

- [[avax-traderjoe]] — leading DEX with Liquidity Book AMM
- [[avax-aave]] — Aave V3 with sub-second liquidation finality
- [[avax-gmx]] — GMX perpetuals (shared with Arbitrum)

## AVAX Token

AVAX is used for gas fees on all three primary chains, staking (to become a validator), and subnet participation fees.
`,
  },

  'avax-cchain': {
    id: 'avax-cchain',
    title: 'C-Chain (EVM)',
    content: `# Avalanche C-Chain

## Overview

The C-Chain (Contract Chain) is Avalanche's EVM-compatible execution layer. It's where all Avalanche DeFi, NFTs, and smart contracts run — fully compatible with Ethereum tooling but with sub-second finality.

## Snowman Consensus

C-Chain uses Snowman consensus (a linearized version of Avalanche's DAG consensus):
- Sub-second finality: typically 1-2 seconds
- ~4,500 TPS capacity
- No MEV-based finality games (unlike Ethereum's proposer/builder separation)

## EVM Equivalence

Full compatibility means:
- MetaMask adds Avalanche with one click
- Hardhat/Foundry deployments work unchanged
- OpenZeppelin contracts deploy as-is
- Chainlink price feeds available

## C-Chain vs Ethereum

| Metric | C-Chain | Ethereum |
|--------|---------|----------|
| Finality | ~1s | ~13s |
| Fees | ~$0.10 | $2-50 |
| TPS | 4,500 | 15 |
| Validators | ~1,200 | ~1M |

## Primary DeFi

[[avax-traderjoe]], [[avax-aave]], and [[avax-gmx]] are the core DeFi protocols on C-Chain, collectively holding $500M+ TVL.
`,
  },

  'avax-subnets': {
    id: 'avax-subnets',
    title: 'Subnets / L1s',
    content: `# Avalanche Subnets (L1s)

## Overview

Avalanche Subnets (now called "Avalanche L1s") allow anyone to deploy a custom blockchain with its own rules, tokenomics, validator set, and VM. They share Avalanche's consensus infrastructure while being fully customizable.

## How Subnets Work

1. Subnet operators define the chain parameters (VM, gas token, validators)
2. Validators opt-in to validate the subnet (must also validate the Primary Network)
3. The subnet runs independently but can communicate with other subnets via [[avax-teleporter]]

## Custom VMs

Subnets aren't limited to EVM:
- **SubnetEVM**: Standard EVM, most commonly used
- **SpacesVM**: Key-value store for data applications
- **TimestampVM**: Simple timestamp chain for demos
- Custom VMs can be written in any language

## Notable Subnets

- **DFK Chain** (DeFi Kingdoms gaming)
- **Dexalot** (perps DEX)
- **Lamina1** (metaverse infrastructure)
- **UPTN** (Chainmonsters gaming)
- Enterprise chains for financial institutions

## The Subnet Value Proposition

Instead of competing for block space on C-Chain, apps can have dedicated throughput. Gaming apps especially benefit from dedicated chain resources and custom gas tokens (players pay gas in the game's token, not AVAX).
`,
  },

  'avax-teleporter': {
    id: 'avax-teleporter',
    title: 'Avalanche Warp',
    content: `# Avalanche Warp Messaging

## Overview

Avalanche Warp Messaging (AWM) is a native cross-subnet communication protocol that allows Avalanche L1s to send assets and arbitrary messages to each other without external bridges or oracle networks.

## How It Works

1. A contract on Subnet A emits a Warp message
2. Subnet B validators sign the message with their BLS keys
3. Signature aggregation creates a compact multi-signature
4. A relayer delivers the aggregated signature to Subnet B
5. Subnet B verifies the signature against its known validator set

## Security Properties

- **No external trust**: Only Avalanche validators are in the trust path
- **BLS aggregation**: Compact proofs regardless of validator count
- **Slashing protection**: Validators who sign invalid messages can be slashed

## Teleporter Protocol

Teleporter is the higher-level SDK built on top of Warp:
- Simplified API for cross-chain calls
- Automatic gas handling
- Built-in message ordering

## Vs External Bridges

Traditional bridges (LayerZero, Wormhole) require a separate oracle/validator network. AWM uses the existing Avalanche validator set — no additional trust assumptions. This is similar to how Ethereum's native bridges don't require external validators.
`,
  },

  'avax-traderjoe': {
    id: 'avax-traderjoe',
    title: 'Trader Joe',
    content: `# Trader Joe

## Overview

Trader Joe is the leading DEX on Avalanche, known for innovating with the Liquidity Book (LB) AMM — a novel design that uses discrete price bins instead of continuous curves for improved capital efficiency.

## Liquidity Book AMM

Traditional AMMs (Uniswap v2): continuous x*y=k curve
Concentrated liquidity (Uniswap v3): LP picks a price range
**Liquidity Book**: LP provides liquidity in discrete bins

Within each bin, the price is constant — creating zero slippage for trades that don't cross a bin boundary. This is more intuitive for LPs and more efficient for traders in stable range.

## JOE Token

- Governance over protocol parameters
- sJOE: stake JOE to earn USDC from protocol fees
- rJOE: stake to earn JOE emissions (launchpad allocation)

## Multi-chain Expansion

Trader Joe has deployed on Avalanche C-Chain, Arbitrum, and BNB Chain. This makes JOE a multi-chain DEX token — a relatively rare achievement where the same brand/product is genuinely competitive on multiple chains.

## Integration with Avalanche Ecosystem

As [[avax-subnets]] grow, Trader Joe is positioned to deploy on gaming and DeFi subnets as the go-to DEX, similar to how Uniswap became the default DEX across EVM chains.
`,
  },

  'avax-aave': {
    id: 'avax-aave',
    title: 'Aave on Avalanche',
    content: `# Aave on Avalanche

## Overview

Aave V3 on Avalanche C-Chain benefits from sub-second finality — faster liquidations mean less bad debt, enabling more efficient capital utilization than on slower chains.

## The Finality Advantage

On Ethereum mainnet, a position approaching liquidation has ~13 seconds before the next block. On Avalanche, it's 1-2 seconds — leaving almost no window for price gaps to cause bad debt. This allows Aave Avalanche to use more aggressive LTV ratios.

## Efficiency Mode (E-Mode)

V3's E-Mode allows up to 97% LTV for correlated asset pairs:
- USDC/USDT/DAI: borrow 97% of deposited stablecoin value
- AVAX/WAVAX/sAVAX: borrow 90% of deposited AVAX value

## Primary Markets

- AVAX and sAVAX (liquid staked AVAX)
- USDC, USDT, DAI
- WETH, WBTC (bridged assets)
- WETHe, WBTCe (Avalanche Bridge versions)

## Cross-chain Arbitrage

The V3 Portal feature enables cross-chain liquidity: suppliers on one Aave deployment can bridge assets to another. Avalanche's fast finality makes it a key hub in Aave's multi-chain strategy.
`,
  },

  'avax-gmx': {
    id: 'avax-gmx',
    title: 'GMX',
    content: `# GMX

## Overview

GMX is the leading on-chain perpetuals DEX operating on both Avalanche and Arbitrum. Its GLP liquidity model — where a multi-asset pool acts as counterparty to all traders — created a sustainable fee model widely copied across DeFi.

## The GLP Model

Traditional perps DEX: traders vs order book
GMX: traders vs GLP pool

**GLP** is a basket of BTC, ETH, AVAX (on AVAX), USDC, and USDT. When traders win, GLP loses; when traders lose, GLP wins. GLP holders earn 70% of all trading fees.

## Why This Works

- GLP holders earn yield whether markets go up or down (via fees)
- No token inflation: yield comes from real trading fees
- Oracle-based pricing: no price impact for large trades (uses Chainlink feeds)
- No funding rates: open interest is balanced differently

## GMX V2

V2 introduced isolated markets (separate collateral pools per asset), GM tokens (isolated market LP tokens), and Chainlink low-latency oracles for faster price updates and better execution quality.

## Avalanche vs Arbitrum

Most GMX volume is on Arbitrum, but Avalanche provides a meaningful alternative:
- AVAX as collateral asset
- Lower competition for arbitrage strategies
- Sub-second finality means faster liquidation protection
`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SUI / APTOS CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  'sui-l1': {
    id: 'sui-l1',
    title: 'Sui',
    content: `# Sui

## Overview

Sui is a next-generation Layer 1 blockchain built by ex-Meta Diem engineers at Mysten Labs. Its object-centric state model and [[sui-move]] language enable unprecedented throughput by allowing independent transactions to process in parallel without consensus.

## The Object Model

Unlike Ethereum's account model (global state), Sui models everything as "objects":
- Objects have explicit owners (addresses, other objects, or shared)
- Objects can only be modified by their owners (or shared objects' consensus)
- Transactions that only touch unshared objects skip consensus entirely

## Parallel Execution

- **Owned object transactions**: Near-instant, no consensus needed
- **Shared object transactions**: Requires consensus, like other blockchains

Most gaming and many DeFi operations only touch owned objects — enabling massive throughput for those use cases.

## zkLogin

Users can create Sui wallets via OAuth (Google, Apple, Twitch):
- No seed phrase, no extension download
- Private key managed via ZK proofs linked to OAuth credentials
- Dramatically lowers onboarding barrier

## SUI Token

Used for gas fees and network governance. Validators stake SUI to participate in consensus.

## Key Protocols

- [[sui-cetus]] — leading CLMM DEX
- [[sui-navi]] — primary lending protocol
- [[sui-scallop]] — institutional lending
`,
  },

  'aptos-l1': {
    id: 'aptos-l1',
    title: 'Aptos',
    content: `# Aptos

## Overview

Aptos is a Layer 1 blockchain built by ex-Meta Diem engineers at Aptos Labs. Using the Block-STM parallel execution engine and the [[sui-move]] language, Aptos benchmarks at 160k TPS while maintaining a familiar account-based model.

## Block-STM Execution

Software Transactional Memory for parallel execution:
1. Transactions are executed optimistically in parallel
2. Conflicts are detected (transactions that read/write the same state)
3. Conflicting transactions are re-executed in the correct order

Unlike [[sui-l1]]'s object model, Aptos maintains global accounts like Ethereum. Block-STM can parallelize any transactions that don't conflict — which in practice is a majority.

## APT Token

- Gas fees paid in APT
- Staking for validator participation
- Governance over protocol parameters

## Enterprise Partnerships

Aptos has formed notable enterprise partnerships:
- **Microsoft**: Azure-based node hosting and developer tools
- **Google Cloud**: Validator node hosting, data analytics
- **Alibaba Cloud**: Asian market expansion
- **Coinbase Cloud**: Node infrastructure

## DeFi Ecosystem

- [[aptos-liquidswap]] — leading AMM DEX by Pontem Network
- [[aptos-thala]] — DEX + CDP stablecoin + liquid staking hub

## The Move Advantage

Both Sui and Aptos use [[sui-move]] — the resource-oriented language from Meta's Diem project that prevents reentrancy, asset duplication, and common smart contract vulnerabilities.
`,
  },

  'sui-move': {
    id: 'sui-move',
    title: 'Move Language',
    content: `# Move Language

## Overview

Move is a resource-oriented smart contract language originally designed at Meta's Diem project. It's the shared technical foundation of both [[sui-l1]] and [[aptos-l1]], designed to make smart contracts provably safe by design.

## The Core Insight

Traditional languages (Solidity) model assets as numbers in mappings. Move models assets as first-class "resources":
- Resources can't be copied (no duplication)
- Resources can't be dropped accidentally (no loss)
- Resources can only be consumed by functions that explicitly handle them

This eliminates entire vulnerability classes that have cost DeFi hundreds of millions.

## Linear Type System

Move uses a linear type system: every resource must be used exactly once. This is enforced at compile time, not runtime — vulnerabilities are caught before deployment.

## Solidity vs Move

| Vulnerability | Solidity | Move |
|--------------|----------|------|
| Reentrancy | Possible | Impossible |
| Integer overflow | Possible (pre-SafeMath) | Impossible |
| Asset duplication | Possible | Impossible |
| Accidental loss | Possible | Impossible |

## Formal Verification

Move's design makes it amenable to formal verification — mathematical proofs that code is correct. Meta used formal verification extensively in Diem, and Move Prover is available for Aptos development.

## Ecosystem Split

- **Sui Move**: Object-centric extensions for Sui's object model
- **Aptos Move**: Closer to original Diem Move with account model
`,
  },

  'sui-cetus': {
    id: 'sui-cetus',
    title: 'Cetus',
    content: `# Cetus Protocol

## Overview

Cetus is the leading DEX on Sui — a concentrated liquidity AMM (CLMM) similar to Uniswap V3 but implemented in Move. It's also deployed on Aptos, making it a cross-chain Move-native DEX.

## Concentrated Liquidity Market Maker

LPs define price ranges rather than providing across the entire curve:
- Capital earns fees only when price is in the LP's range
- More efficient than V2 AMMs (10-100x more capital efficient for same liquidity)
- LPs take on "range management" responsibility — positions must be rebalanced

## CETUS Token

- Protocol governance
- Fee sharing for staked CETUS (xCETUS)
- Liquidity mining rewards for key pools

## Backend Protocol

Many Sui DeFi protocols use Cetus as their liquidity backend:
- [[sui-navi]] uses Cetus for liquidations
- [[sui-scallop]] integrates Cetus for asset pricing
- Aggregators route through Cetus for deep liquidity

## Trading Volume

Cetus typically processes 50-70% of all Sui DEX volume — comparable to Uniswap's dominance on Ethereum. Deep SUI/USDC, SUI/USDT, and major token pairs.

## Cross-chain

Cetus on Aptos is a separate deployment competing with [[aptos-liquidswap]] for the top Aptos DEX position.
`,
  },

  'sui-navi': {
    id: 'sui-navi',
    title: 'Navi Protocol',
    content: `# Navi Protocol

## Overview

Navi is the leading lending protocol on Sui — the "Aave of Sui." Users supply assets to earn interest or borrow against collateral, with NAVX token governance.

## Lending Architecture

Similar to Aave V3 with Sui-native features:
- **Isolated mode**: Each asset has its own isolated borrow limit
- **Cross-collateral mode**: Borrow against a basket of assets
- **Auto-compound**: Earned interest auto-reinvested (unique Sui feature)

## NAVX Token

- Governance over risk parameters (LTV ratios, liquidation thresholds)
- Staking rewards from protocol fees
- Boosted yields for suppliers who also hold NAVX

## Liquidation via Cetus

When positions become undercollateralized:
1. Liquidator calls Navi's liquidation function
2. Navi routes collateral to [[sui-cetus]] for immediate swap
3. Liquidator receives a bonus (typically 5-10%)

This tight integration with the ecosystem's primary DEX enables efficient liquidations.

## TVL and Markets

Navi consistently has the highest TVL of any Sui DeFi protocol, with primary markets in SUI, USDC, USDT, and major bridged assets (WETH, WBTC via Wormhole).
`,
  },

  'sui-scallop': {
    id: 'sui-scallop',
    title: 'Scallop',
    content: `# Scallop

## Overview

Scallop is an institutional-grade lending protocol on Sui that differentiates from [[sui-navi]] through stricter risk management: isolated pools per asset, whitelist-based asset addition, and conservative LTV ratios.

## Risk Architecture

Each supported asset has its own isolated lending pool:
- A problem in one asset market can't cascade to others
- Liquidation risk is contained per pool
- New assets require governance approval

This contrasts with cross-collateral protocols where a single bad asset can cause cascading liquidations.

## SCA Token

- Vote-escrow model (veSCA): lock SCA for governance power and boosted yields
- Holders direct SCA emissions to specific markets via "borrow incentives"
- Protocol fees distributed to veSCA holders

## Borrow Incentive Program

Scallop pays users to borrow through SCA incentives:
- Borrowers receive SCA rewards
- Effectively subsidizes borrowing rates
- Goal: bootstrap liquidity by attracting borrowers first

## Institutional Appeal

Scallop's conservative approach attracts larger depositors who prefer safety over yield maximization. The isolated pool model provides institutional-grade risk management on-chain.
`,
  },

  'aptos-liquidswap': {
    id: 'aptos-liquidswap',
    title: 'Liquidswap',
    content: `# Liquidswap

## Overview

Liquidswap is the leading AMM DEX on Aptos, built by Pontem Network — a Move language specialist team. It supports both stable (low-slippage) and uncorrelated (standard AMM) pool types.

## Pool Types

**Stable pools**: Optimized for correlated asset pairs
- Uses the Curve stableswap invariant
- Very low slippage for swaps within the "peg zone"
- Ideal for USDC/USDT, APT/stAPT pairs

**Uncorrelated pools**: Standard x*y=k AMM
- For volatile pairs (APT/USDC)
- Same mechanics as Uniswap V2

## PONT Token

- Pontem Network's governance token
- Earns fees from Liquidswap pools
- Used for protocol upgrade decisions

## Developer Ecosystem

Pontem Network is also responsible for Move language tooling:
- VS Code Move extension
- Move Playground (browser-based IDE)
- Move CLI improvements

This makes Pontem/Liquidswap uniquely positioned in the Aptos ecosystem — not just a DEX but a core developer infrastructure provider.

## Competition

[[aptos-thala]] has emerged as the primary DeFi hub on Aptos, with deeper liquidity in some pools. Liquidswap remains competitive through its developer relationships and stable pool efficiency.
`,
  },

  'aptos-thala': {
    id: 'aptos-thala',
    title: 'Thala Finance',
    content: `# Thala Finance

## Overview

Thala Finance is the most comprehensive DeFi protocol on Aptos — combining a DEX (ThalaSwap), a CDP stablecoin (MOD), and liquid staking (Thala LSD) into an integrated ecosystem. THL token governs all three components.

## ThalaSwap

A multi-pool AMM DEX with:
- **Weighted pools**: Any asset ratio (not just 50/50)
- **Stable pools**: Low-slippage for correlated assets
- **Boosted pools**: LP positions that also earn lending yield

## MOD Stablecoin

MOD is a CDP (Collateralized Debt Position) stablecoin backed by Aptos-native assets:
- Similar to MakerDAO's DAI or Liquity's LUSD
- Mint MOD by locking APT, stAPT, or LP tokens as collateral
- Automatic liquidation if collateral ratio falls below threshold

## Thala LSD (Liquid Staking)

- Stake APT → receive sthAPT (liquid staked APT)
- sthAPT earns staking rewards while remaining usable as DeFi collateral
- Used as collateral for MOD minting, creating a capital efficiency flywheel

## The THL Flywheel

1. Lock collateral → mint MOD
2. Use MOD as LP in ThalaSwap → earn THL emissions
3. Lock THL as veTHL → vote on which pools get emissions
4. Protocols bribe veTHL holders to direct emissions to their pools

This Curve Wars-style model creates sustainable protocol revenue.
`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BNB CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  'bnb-chain': {
    id: 'bnb-chain',
    title: 'BNB Chain',
    content: `# BNB Chain

## Overview

BNB Chain (formerly Binance Smart Chain / BSC) is an EVM-compatible blockchain operated by Binance, the world's largest crypto exchange. With 100M+ active addresses and near-zero fees, it has the highest retail DeFi user count of any blockchain.

## Architecture

BNB Chain uses Proof of Staked Authority (PoSA):
- **21 active validators** (vs ~1M on Ethereum)
- Selected by BNB token staking
- 3-second block times
- <$0.01 per transaction

The centralization tradeoff is explicit: fewer validators mean faster finality and lower fees, at the cost of decentralization.

## BNB Token

- Gas fees on BNB Chain
- Binance exchange fee discounts (BNB holds reduce fees)
- Quarterly token burns (using Binance revenue)
- Staking for validator participation

## Ecosystem

- [[bnb-pancakeswap]] — dominant DEX
- [[bnb-venus]] — leading lending protocol
- [[bnb-four]] — pump.fun equivalent for memecoins
- [[bnb-opbnb]] — Optimism-based L2 for higher throughput
- [[bnb-greenfield]] — decentralized storage

## The Binance Moat

BNB Chain's advantage is Binance's distribution: 100M+ registered users can bridge directly from their exchange balance. Every Binance user is a potential BNB Chain user — an unparalleled acquisition funnel.
`,
  },

  'bnb-opbnb': {
    id: 'bnb-opbnb',
    title: 'opBNB',
    content: `# opBNB

## Overview

opBNB is an Optimism-based L2 that settles to BNB Chain (not Ethereum), providing an additional scaling layer for applications that need even lower fees and higher throughput than BNB Chain's mainnet.

## Architecture

Built on the OP Stack:
- Transactions batch and settle to BNB Chain
- Inherits BNB Chain's security (not Ethereum's)
- EVM-compatible — same Solidity contracts work

## Fee Structure

opBNB achieves extremely low fees by:
1. Batching many transactions together (L2 efficiency)
2. Settling to BNB Chain (cheaper than Ethereum settlement)
3. Result: often <$0.001 per transaction

## Target Use Cases

The fee level makes previously uneconomical use cases viable:
- **GameFi**: micro-transactions for in-game actions
- **Social apps**: likes, comments, shares on-chain
- **DeFi bots**: high-frequency arbitrage strategies

## Relationship to BNB Chain

opBNB is the BNB Chain equivalent of Base (for Ethereum). Binance is building a layered architecture: BNB Chain for primary DeFi activity + opBNB for high-throughput applications + [[bnb-greenfield]] for decentralized storage.
`,
  },

  'bnb-greenfield': {
    id: 'bnb-greenfield',
    title: 'BNB Greenfield',
    content: `# BNB Greenfield

## Overview

BNB Greenfield is a decentralized storage blockchain that's tightly integrated with BNB Chain smart contracts. Unlike Filecoin or Arweave, Greenfield storage is programmable — smart contracts can own and manage storage directly.

## Architecture

- Separate blockchain for storage coordination
- Storage providers (SPs) store the actual data
- BNB Chain smart contracts control access permissions
- BNB token pays for storage fees

## Programmable Storage

The key innovation: smart contracts on BNB Chain can:
- Own storage buckets (data containers)
- Set access permissions (who can read/write)
- Monetize data access (charge for downloads)
- Automatically trigger storage operations

## Use Cases

- **Decentralized content platforms**: Creators store content, set paywalls via smart contracts
- **Data marketplaces**: Buy/sell access to datasets on-chain
- **Backup solutions**: On-chain-governed backup with automatic payment
- **NFT metadata storage**: Store images/metadata with guaranteed persistence

## Comparison

| Feature | Greenfield | Filecoin | Arweave |
|---------|-----------|----------|---------|
| Smart contract integration | Native | Limited | None |
| Token | BNB | FIL | AR |
| Programming | Solidity | Limited | Lua/WQL |
`,
  },

  'bnb-bscscan': {
    id: 'bnb-bscscan',
    title: 'BSCScan / Dev Tools',
    content: `# BNB Chain Developer Tools

## Overview

BNB Chain inherits the full Ethereum developer toolchain. BSCScan (by the Etherscan team) provides the primary block explorer, while standard EVM tools (Hardhat, Foundry, Remix) work natively.

## BSCScan

The primary analytics and explorer for BNB Chain:
- Transaction tracking and verification
- Smart contract verification and interaction
- Token holder analytics
- Gas analytics

## EVM Compatibility Means

Everything from the Ethereum ecosystem works:
- **Hardhat & Foundry** — deployment scripts work with just a network config change
- **OpenZeppelin** — battle-tested contract libraries deploy unchanged
- **Chainlink** — price feeds for BEP-20 tokens
- **The Graph** — BNB Chain subgraphs for event indexing
- **MetaMask** — add BNB Chain as a custom network

## BEP-20 Standard

BNB Chain's token standard is BEP-20 — identical to ERC-20. Any ERC-20 contract is a valid BEP-20 contract. This made it trivially easy for Ethereum tokens to launch on BNB Chain.

## Developer Experience

The practical developer experience on BNB Chain is:
1. Write same Solidity as Ethereum
2. Change RPC endpoint in config
3. Deploy — everything works
4. Verify on BSCScan — same interface as Etherscan
`,
  },

  'bnb-pancakeswap': {
    id: 'bnb-pancakeswap',
    title: 'PancakeSwap',
    content: `# PancakeSwap

## Overview

PancakeSwap is BNB Chain's dominant DEX and a comprehensive DeFi hub. Starting as a Uniswap V2 fork on BSC, it has evolved into one of the most-used DEX platforms in crypto with a multi-chain presence.

## CAKE Tokenomics Evolution

- **Original**: High CAKE emissions, inflationary model
- **veCAKE (2023)**: Vote-escrow model (like Curve's veCRV)
  - Lock CAKE to get veCAKE
  - veCAKE holders vote on which pools get CAKE emissions
  - Protocols bribe veCAKE holders for their votes
  - Dramatically reduced token inflation

## Product Suite

- **AMM V3**: Concentrated liquidity
- **PancakeSwap Perps**: Perpetual futures (using Stork oracles)
- **NFT Marketplace**: Gaming and art NFTs
- **IFO (Initial Farm Offering)**: Token launches with CAKE commitment

## Multi-chain Strategy

PancakeSwap deployed on:
- BNB Chain (primary)
- Ethereum
- Arbitrum, zkSync, Base, Linea
- Aptos (via [[aptos-thala]] partnership)

This makes it one of the few DEXes genuinely competitive across multiple ecosystems.

## Market Position

PancakeSwap consistently ranks #2-3 in DEX volume globally (behind Uniswap), with most volume from BNB Chain's large retail user base.
`,
  },

  'bnb-venus': {
    id: 'bnb-venus',
    title: 'Venus Protocol',
    content: `# Venus Protocol

## Overview

Venus is the leading lending protocol on BNB Chain — a Compound-style money market with the addition of VAI, an algorithmic stablecoin. With $1B+ TVL, it's the anchor DeFi protocol on BNB Chain.

## XVS Token

- Governance over risk parameters (LTV ratios, liquidation incentives)
- Fees from protocol distributed to XVS vault stakers
- Also earns from the Prime program (loyalty rewards for large users)

## VAI Stablecoin

VAI is an algorithmic stablecoin minted by overlocking crypto collateral:
- Similar to MakerDAO's DAI
- Historically struggled to maintain the $1 peg (issued at >$1, traded <$1)
- V4 improvements focused on VAI stability mechanisms

## The 2021 Oracle Attack

Venus suffered a $150M loss when BNB price manipulation allowed a large holder to borrow against an inflated BNB price then default. This led to:
- Mandatory oracle diversity (Chainlink + on-chain TWAP)
- Isolated pools in V4 to prevent cascading
- More conservative LTV ratios

## V4 Architecture

Venus V4 introduced isolated pools:
- Main Pool: Blue-chip assets (BTC, ETH, BNB, USDC)
- Isolated Pools: Higher-risk assets with contained exposure
- Cross-chain pools (Arbitrum, Ethereum, opBNB)
`,
  },

  'bnb-four': {
    id: 'bnb-four',
    title: 'Four.meme',
    content: `# Four.meme

## Overview

Four.meme is BNB Chain's answer to pump.fun — a bonding curve token launch platform where anyone can create and launch a memecoin with minimal friction. Tokens graduate to [[bnb-pancakeswap]] once they reach a market cap threshold.

## How It Works

1. Pay a small fee in BNB to launch a token
2. Set the name, ticker, image, and description
3. Token trades on a bonding curve (price increases with each buy)
4. Once market cap threshold (~$69k) is reached, token "graduates"
5. Liquidity is seeded into PancakeSwap automatically
6. Creator receives a portion of the proceeds

## BNB Chain Advantages

- Near-zero fees make token creation cheaper than Solana's pump.fun
- PancakeSwap's deep liquidity for graduation
- BNB Chain's large retail user base as the natural audience

## Cultural Impact

Four.meme drove a wave of BNB Chain meme activity in 2024:
- Injected life into BNB Chain DeFi ecosystem
- Competed with Solana for memecoin culture
- Created new on-chain activity and fee revenue

## The Sustainability Question

Like all memecoin launchpads, Four.meme benefits during hype cycles but faces the challenge of maintaining relevance when market sentiment shifts. The long-term value depends on whether BNB Chain can retain the users attracted by meme speculation.
`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MEGAETH CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  'megaeth-l1': {
    id: 'megaeth-l1',
    title: 'MegaETH Overview',
    content: `# MegaETH

## Overview

MegaETH is an Ethereum L2 designed for real-time performance. The project's thesis: most L2s optimize for throughput and cost, but none have solved the latency problem. MegaETH targets sub-millisecond confirmations at 100k TPS.

## Why Real-time Matters

Current Ethereum L2s are fast enough for most DeFi (250ms-2s), but insufficient for:
- **High-frequency trading**: Need <10ms for competitive strategies
- **Real-time games**: MMORPGs and action games need <50ms
- **Social feeds**: Live updates require near-instant state changes
- **AI agents**: Autonomous agents need immediate feedback loops

## Core Architecture

- **Dedicated sequencer**: High-performance hardware handles all execution
- **Mini-nodes**: Lightweight nodes verify correctness without re-executing
- **Pre-confirmations**: Sequencer commits to txn inclusion instantly
- **Ethereum settlement**: Final security via L1 batches

## EVM Compatibility

Full EVM compatibility: all existing Ethereum contracts, tools, and wallets work on MegaETH without modification. The same Solidity code, same development workflow.

## Ecosystem

[[megaeth-eco]] details the applications being built, primarily focused on real-time DeFi, gaming, and AI agent interactions.
`,
  },

  'megaeth-realtime': {
    id: 'megaeth-realtime',
    title: 'Real-time EVM',
    content: `# Real-time EVM

## Overview

MegaETH's real-time EVM execution is the core innovation enabling sub-millisecond transaction confirmations. Traditional EVMs process transactions sequentially with significant overhead; MegaETH removes this overhead at the architectural level.

## The Latency Problem

Existing EVM chains have inherent latency:
- Ethereum mainnet: 12-second blocks
- Optimistic L2s: 250ms-2s
- ZK L2s: seconds to minutes for proof generation
- Even fast chains: 100ms+ per block

MegaETH targets <1ms — a 100-1000x improvement.

## How Sub-millisecond Works

1. **Continuous execution**: No discrete blocks — transactions processed as they arrive
2. **Async finality**: Pre-confirmations happen instantly; batch finality later
3. **Hardware optimization**: Sequencer uses specialized hardware (SSDs, high-core-count CPUs)

## Application Categories Enabled

- **On-chain order books**: Previously impossible without off-chain matching
- **Real-time pricing**: Oracle-free pricing from live on-chain orderbook depth
- **Live game state**: Entire game state on-chain, updated in real-time
- **AI agent loops**: Agents can query, process, and transact in tight feedback loops
`,
  },

  'megaeth-nodes': {
    id: 'megaeth-nodes',
    title: 'Mini-Nodes Architecture',
    content: `# Mini-Nodes Architecture

## Overview

Mini-nodes are the decentralization mechanism in MegaETH — lightweight nodes that verify the sequencer's execution without needing to re-execute all transactions. They maintain the network's trustlessness while the sequencer operates at full speed.

## The Verification Challenge

High-performance sequencers face a dilemma:
- Running fast requires powerful, expensive hardware
- Decentralization requires many participants
- These two requirements are in tension

Mini-nodes resolve this by separating execution from verification.

## How Mini-Nodes Work

1. Sequencer executes transactions and produces state diffs (what changed)
2. State diffs are distributed to all mini-nodes
3. Mini-nodes verify the diffs using succinct proofs (not full re-execution)
4. Invalid diffs are detected and the sequencer can be slashed

## Hardware Requirements

Mini-nodes have minimal requirements:
- Standard laptop can participate
- No GPU required
- Low bandwidth needs (receive diffs, not full blocks)

This makes mini-node operation accessible to thousands of participants globally.

## Security Model

The security guarantee: the sequencer must convince all mini-nodes that its state transitions are correct. With ZK proofs, this verification is efficient and cryptographically binding.
`,
  },

  'megaeth-preconfirm': {
    id: 'megaeth-preconfirm',
    title: 'Pre-confirmations',
    content: `# Pre-confirmations

## Overview

Pre-confirmations (pre-confs) are the mechanism enabling instant UX in MegaETH. The sequencer commits to including transactions immediately, backed by slashable stake, giving users sub-millisecond acknowledgment with economic security guarantees.

## The Commitment Model

1. User submits transaction
2. Sequencer checks transaction validity
3. Sequencer issues a pre-confirmation: "I will include this in the next batch"
4. User sees "confirmed" immediately
5. Transaction is included in the next batch (seconds later)
6. Batch settles to Ethereum L1 (minutes later)

## Why Pre-confs Are Secure

If the sequencer breaks a pre-confirmation promise (includes a different version, front-runs, or excludes):
- Mini-nodes detect the discrepancy
- Sequencer's staked capital is slashed
- Cryptoeconomic punishment makes cheating unprofitable

## Application Impact

For applications, pre-confs mean:
- **Trading apps**: Show "executed" immediately
- **Games**: Actions register instantly
- **Payments**: Transfer shows "sent" in sub-second

The game theory: the sequencer has strong incentives to honor pre-confs. Breaking them is expensive and destroys trust.

## Comparison

Traditional L2s: wait for block inclusion (250ms+)
MegaETH with pre-confs: instant acknowledgment (<1ms) with L2 security
`,
  },

  'megaeth-evm': {
    id: 'megaeth-evm',
    title: 'EVM Compatibility',
    content: `# MegaETH EVM Compatibility

## Overview

MegaETH maintains full EVM bytecode compatibility — the same level of compatibility as Ethereum mainnet. This means the entire Ethereum developer ecosystem works on MegaETH without any modifications.

## What This Means Practically

Any Ethereum project can deploy on MegaETH by:
1. Updating the RPC endpoint in config
2. Deploying — no code changes needed

## Developer Toolchain Works Natively

- **Hardhat**: Same deployment scripts, tests, and tasks
- **Foundry**: forge test, forge script, cast — all work
- **Remix**: Browser-based IDE works with MegaETH RPC
- **OpenZeppelin**: All contracts deploy unchanged
- **Ethers.js / Viem**: Same APIs work

## Wallet Compatibility

- **MetaMask**: Add MegaETH as custom network
- **WalletConnect**: Any WC-compatible wallet
- **Coinbase Wallet**: Custom network support
- **Rainbow, Zerion**: Standard EVM chain support

## The Composability Benefit

Full EVM compatibility means all existing DeFi protocols can deploy on MegaETH and immediately compose with each other. There's no "Year 1 problem" of waiting for a full ecosystem to be rebuilt — everything can port in immediately.

## Tradeoffs

Full EVM compatibility means MegaETH cannot add non-EVM optimizations (like Sui's object model). The bet is that the EVM developer base + composability > theoretical performance gains from a custom VM.
`,
  },

  'megaeth-eco': {
    id: 'megaeth-eco',
    title: 'MegaETH Ecosystem',
    content: `# MegaETH Ecosystem

## Overview

MegaETH's ecosystem is still in early stages, but it's attracting builders specifically interested in the real-time performance characteristics unavailable on other L2s.

## Target Application Categories

### Real-time DeFi
- **On-chain order books**: Native limit order books at CEX speed
- **High-frequency market making**: Tight spreads with instant updates
- **Real-time liquidation bots**: Near-instant position monitoring

### On-chain Gaming
- **Multiplayer action games**: Real-time state shared globally
- **Turn-based games**: Instant move submission without waiting
- **Game economies**: Items, trading, and crafting at real-time speed

### AI Agents
- **Autonomous trading agents**: Tight perception-action loops
- **Data oracle agents**: Real-time on-chain data processing
- **Coordination protocols**: Multi-agent interactions at sub-ms speed

## Ecosystem Development

MegaETH is running hackathons and providing grants for:
- DeFi protocols that leverage real-time features
- Games that previously couldn't run on-chain
- Infrastructure providers (indexers, analytics, explorers)

## Relationship to Ethereum

MegaETH is part of the Ethereum ecosystem — final settlement on [[eth]] L1. Applications that need Ethereum mainnet composability (e.g., Uniswap V4 hooks that work on mainnet) can use MegaETH as the execution layer.
`,
  },

  'eth-megaeth': {
    id: 'eth-megaeth',
    title: 'MegaETH (ETH Ecosystem)',
    content: `# MegaETH in the Ethereum Ecosystem

## Overview

MegaETH is an Ethereum L2 that extends the EVM ecosystem into real-time territory. As an Ethereum Layer 2, it settles to Ethereum L1 for final security while providing sub-millisecond execution for applications.

## Why MegaETH in the ETH Ecosystem

MegaETH complements existing L2s by targeting a different performance profile:
- [[eth-arbitrum]]: Optimized for security and decentralization
- [[eth-optimism]] / [[eth-base]]: Optimized for developer experience and distribution
- [[eth-zksync]], [[eth-starknet]]: Optimized for ZK security
- **MegaETH**: Optimized for real-time performance (<1ms latency)

## Technical Position

- Full EVM compatibility — all Ethereum contracts work
- Settles to Ethereum L1 for final security
- Pre-confirmations for instant UX
- 100k TPS target — highest in Ethereum's L2 ecosystem

## Ecosystem Role

MegaETH opens Ethereum to applications previously impossible on the EVM:
- Real-time gaming at Ethereum-grade security
- High-frequency trading with public verifiability
- AI agent loops with on-chain settlement

## See Also

Full MegaETH documentation: [[megaeth-l1]], [[megaeth-realtime]], [[megaeth-nodes]], [[megaeth-preconfirm]], [[megaeth-evm]], [[megaeth-eco]]
`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // RWA CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  'rwa-overview': {
    id: 'rwa-overview',
    title: 'Real World Assets',
    content: `# Real World Assets

## Overview

Real World Assets (RWA) tokenization is the process of bringing traditional financial assets — US Treasuries, private credit, real estate, commodities — onto public blockchains. The on-chain RWA market crossed $10B in 2024 and is projected to grow to trillions.

## Why Now?

Three factors converged in 2024:
1. **DeFi yield drought**: On-chain native yields fell; US Treasury yields at 5% became attractive
2. **Institutional validation**: [[rwa-blackrock]] BUIDL fund legitimized public blockchains for institutions
3. **Infrastructure maturity**: Enough infrastructure (bridges, stablecoins, custody) to handle institutional assets

## Asset Categories

- **Tokenized US Treasuries**: [[rwa-ondo]] OUSG/USDY, Franklin Templeton BENJI, BlackRock BUIDL
- **Private credit**: [[rwa-centrifuge]], [[rwa-maple]], [[rwa-goldfinch]]
- **Infrastructure**: [[rwa-chainlink]] Proof of Reserve

## The Permission Question

Most institutional RWA requires KYC (permissioned access). The "Holy Grail" of RWA is permissionless access — anyone with a wallet can invest in tokenized US Treasuries. Ondo's USDY moves toward this for non-US holders.

## Blockchain Selection

- Ethereum: Most institutional trust, highest security
- Solana: Growing institutional presence via tokenized T-bills
- Polygon: Significant enterprise RWA deployments
- Stellar: Focused on payments/remittance use cases
`,
  },

  'rwa-ondo': {
    id: 'rwa-ondo',
    title: 'Ondo Finance',
    content: `# Ondo Finance

## Overview

Ondo Finance is the leading institutional RWA protocol, providing tokenized US Treasuries and yield-bearing stablecoins to qualified investors. Ondo is building the "institutional DeFi" stack.

## Products

### OUSG
- Tokenized exposure to BlackRock's BFAR (short-duration US Treasury ETF)
- Qualified US purchasers only (>$100k minimum)
- On-chain, 24/7 liquidity
- Backed by [[rwa-blackrock]] BUIDL fund assets

### USDY
- Tokenized note backed by short-term US Treasuries
- Accessible to non-US holders globally
- Yield-bearing "stablecoin" alternative
- No minimum investment

### Ondo Chain
- Purpose-built blockchain for institutional RWA
- Permissioned access with built-in KYC/AML
- Connects institutional issuers with global demand

## The Institutional Bridge

Ondo's role: connect traditional financial infrastructure (ETFs, custody) with DeFi protocols. Their OUSG product uses BlackRock's BUIDL as collateral — showing composability between institutional RWA products.

## Competition

- Franklin Templeton BENJI
- WisdomTree WTSB
- Superstate's USTB
Ondo differentiates through deeper DeFi integration and the Ondo Chain infrastructure vision.
`,
  },

  'rwa-centrifuge': {
    id: 'rwa-centrifuge',
    title: 'Centrifuge',
    content: `# Centrifuge

## Overview

Centrifuge is the leading protocol for private credit RWA — connecting real-world borrowers (invoice financiers, trade finance, real estate) with DeFi liquidity providers. It's the infrastructure layer for "private credit on-chain."

## How It Works

1. **Asset Originator** (e.g., invoice finance company) submits a pool of real-world assets
2. **Pool structure**: Senior tranche (lower risk, lower return) + Junior tranche (first-loss, higher return)
3. **DeFi LPs** deposit USDC/DAI into the pool via a Centrifuge pool
4. **Borrowers** receive USDC from the pool, repay with interest
5. **LPs** earn yield from real-world interest payments

## Major Integrations

- **MakerDAO**: Centrifuge pools are the largest real-world asset backing for DAI
- **Aave**: Real-World Asset market using Centrifuge pools
- **Frax**: Centrifuge pools as collateral for FRAX stablecoin

## CFG Token

CFG token is used for governance over protocol risk parameters — which asset types are eligible, maximum pool sizes, and fee structures.

## Asset Classes Supported

- Invoice financing
- Trade finance (letters of credit)
- US consumer loans
- Real estate bridge loans
- Carbon credits
`,
  },

  'rwa-maple': {
    id: 'rwa-maple',
    title: 'Maple Finance',
    content: `# Maple Finance

## Overview

Maple Finance enables institutional on-chain lending — professional credit managers ("Pool Delegates") assess creditworthiness and manage lending pools for institutional borrowers.

## The Pool Delegate Model

Unlike Aave's automated risk parameters, Maple uses professional credit managers:
1. A Pool Delegate establishes a lending pool (e.g., "Blue Chip Senior Secured Loans")
2. The delegate sets terms, underwrites borrowers, and manages risk
3. Liquidity providers deposit into the pool, trusting the delegate's judgment
4. Borrowers receive loans (can be under-collateralized for creditworthy institutions)

## MPL Token

- Governance over protocol parameters
- Pool delegates must stake MPL (skin in the game)
- Revenue sharing for staked MPL holders

## Post-FTX Evolution

Maple had significant exposure to FTX/Alameda. After the 2022 collapse:
- Pivoted away from uncollateralized crypto trading firm loans
- Added real-world asset backed lending (receivables, treasury bills)
- Strict borrower vetting and collateral requirements

## Cash Management Pools

Maple now offers "Cash Management" pools for DAOs and protocols:
- Deploy idle treasury into short-duration T-bills
- Earn ~5% yield on stablecoin reserves
- Redemption in hours, not weeks

This product targets the $10B+ in on-chain stablecoins sitting in DAO treasuries.
`,
  },

  'rwa-blackrock': {
    id: 'rwa-blackrock',
    title: 'BlackRock BUIDL',
    content: `# BlackRock BUIDL Fund

## Overview

The BlackRock USD Institutional Digital Liquidity Fund (BUIDL) is the world's largest asset manager's tokenized money market fund. Launched in March 2024 on Ethereum, it quickly became the largest tokenized fund and validated public blockchains for institutional finance.

## Fund Details

- **Assets**: Cash, US Treasury bills, and repurchase agreements
- **Yield**: ~5% (based on Fed funds rate)
- **Blockchain**: Ethereum mainnet
- **Custodian**: BNY Mellon
- **Transfer Agent**: Securitize (manages token issuance)
- **Minimum**: $5M (institutional only)

## Why This Matters

BlackRock had multiple options for tokenization infrastructure:
- Private blockchain (Hyperledger, R3 Corda)
- Permissioned Ethereum fork
- **They chose: public Ethereum mainnet**

This signals that the world's largest asset manager considers Ethereum's security, finality, and composability acceptable for regulated financial products.

## Composability in Practice

[[rwa-ondo]]'s OUSG uses BUIDL as collateral — DeFi protocols can now compose on top of BlackRock's institutional product. This is the first time TradFi and DeFi have been compositionally linked at scale.

## Competitors

- Franklin Templeton BENJI (on Stellar and Polygon)
- WisdomTree WTSB (on Ethereum)
- Superstate USTB (on Ethereum)
BUIDL overtook BENJI to become #1 within weeks of launch.
`,
  },

  'rwa-chainlink': {
    id: 'rwa-chainlink',
    title: 'Chainlink PoR',
    content: `# Chainlink Proof of Reserve

## Overview

Chainlink Proof of Reserve (PoR) provides automated, on-chain verification that tokenized assets are actually backed by the claimed real-world reserves. It's the trust layer that enables DeFi protocols to use tokenized assets without manual audits.

## The Problem

How does a smart contract know that a tokenized US Treasury (like [[rwa-ondo]] OUSG) actually holds the claimed amount in a real custodian account? Without verification:
- A malicious issuer could mint unbacked tokens
- Smart contracts can't audit bank accounts
- Manual audits are slow, infrequent, and trusted

## How PoR Works

1. Chainlink oracle network connects to custodian APIs, bank portals, and audit reports
2. Oracles aggregate reserve data from multiple sources
3. Verified reserve amount is published on-chain
4. Smart contracts check the PoR feed before accepting collateral

## Use Cases

- **USDC**: Circle's reserves verified by Chainlink PoR
- **Wrapped BTC (WBTC)**: Bitcoin backing verified
- **Tokenized treasury funds**: OUSG, BUIDL reserves
- **Real estate tokens**: Property valuations and ownership

## Integration with RWA

Chainlink PoR makes the entire RWA stack more trustworthy:
- [[rwa-ondo]] uses PoR for OUSG backing verification
- [[rwa-centrifuge]] uses PoR for asset valuation
- DeFi protocols can accept RWA as collateral with automated reserve verification
`,
  },

  'rwa-goldfinch': {
    id: 'rwa-goldfinch',
    title: 'Goldfinch',
    content: `# Goldfinch

## Overview

Goldfinch is a decentralized credit protocol with a social mission: extending credit to borrowers in emerging markets using crypto capital. Unlike other RWA protocols focused on US institutional assets, Goldfinch lends to fintechs in Africa, Latin America, and Asia.

## The Mission

Billions of people lack access to affordable credit not because they're uncreditworthy, but because of infrastructure failures — no credit history, no banking relationships, geographic isolation. Goldfinch uses DeFi to route capital to fintechs that serve these populations directly.

## Pool Structure

- **Backers**: First-loss capital providers who conduct their own due diligence on specific deals
- **Senior Pool**: Diversified capital that goes into multiple deals; lower risk, lower yield
- **Borrowers**: Fintechs in Kenya, Nigeria, Mexico, India, Southeast Asia

## GFI Token

- Governance over protocol parameters
- Staking rewards for Auditors and Backers
- "Membership" for enhanced yield access

## Performance

Goldfinch has deployed $100M+ in real loans to:
- Cauris Finance (Africa, Southeast Asia)
- Almavest (Africa, India)
- Tugende (Uganda)
- QuickCheck (Nigeria)

## The Challenge

Goldfinch faces the classic "bridge" challenge: DeFi capital (liquid, anonymous, global) vs. real-world loans (illiquid, KYC-required, jurisdictional). Defaults have occurred (Stratos, Almavest), testing the protocol's risk models.
`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAYMENTS CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  'payments-overview': {
    id: 'payments-overview',
    title: 'Crypto Payments',
    content: `# Crypto Payments

## Overview

Crypto payments have found product-market fit with stablecoins as the unit of account. In 2024, stablecoin settlement volume ($10T+) surpassed Visa and Mastercard combined. The infrastructure for mainstream crypto payments is maturing rapidly.

## The Stablecoin Payments Stack

- **Layer 1**: Stablecoin issuers ([[payments-circle]] USDC, Tether USDT)
- **Layer 2**: Payment processors ([[payments-stripe]], [[payments-coinbase]])
- **Layer 3**: Standards and protocols ([[payments-x402]], [[payments-request]])
- **Infrastructure**: Cross-border rails ([[payments-stellar]])

## Key Milestones (2024-2025)

- Stripe re-enabled crypto payments via USDC
- PayPal launched PYUSD on Solana
- Visa and Mastercard launched USDC settlement pilots
- Stripe acquired Bridge (stablecoin infrastructure)
- x402 standard proposed for micropayments

## Chain Competition for Payments

- **[[sol]]**: Speed, near-zero fees, growing institutional presence
- **[[base]]**: Coinbase distribution, x402 standard, US consumer focus
- **[[eth]] L2s**: Regulatory clarity preferred by European/institutional merchants
- **[[payments-stellar]]**: Purpose-built for cross-border, XLM focus

## The AI Payments Opportunity

AI agents need to pay for APIs, compute, and data autonomously. [[payments-x402]] enables machine-to-machine micropayments — potentially the largest new payment market in decades.
`,
  },

  'payments-stripe': {
    id: 'payments-stripe',
    title: 'Stripe Crypto',
    content: `# Stripe Crypto Payments

## Overview

Stripe re-enabled cryptocurrency payments in 2024 after dropping Bitcoin support in 2018. This time, the focus is stablecoins (USDC) rather than volatile assets — enabling merchants to accept crypto with fiat-equivalent stability.

## The 2024 Return

Stripe's original 2018 exit: Bitcoin fees and volatility made it impractical for commerce.
The 2024 re-entry: Stablecoins solve both problems.

Key differences:
- USDC instead of BTC (no price volatility)
- Solana and Base for near-zero fees (no $50 transaction costs)
- Optional fiat conversion (merchants can receive USD automatically)

## Technical Implementation

Stripe's crypto integration works at checkout:
1. Customer selects "Pay with Crypto" at checkout
2. Stripe generates a USDC payment request
3. Customer's wallet sends USDC to Stripe's address
4. Stripe optionally converts to fiat before settling to merchant
5. Merchant's Stripe dashboard shows the sale in USD

## Supported Chains

- **Solana**: Primary (fast, cheap)
- **Ethereum**: Higher fees but institutional preference
- **Base**: Coinbase distribution alignment

## Bridge Acquisition

Stripe's $1.1B acquisition of Bridge in 2024 (stablecoin infrastructure) showed their deep commitment to building crypto-native payments. Bridge enables programmatic stablecoin issuance and routing.
`,
  },

  'payments-circle': {
    id: 'payments-circle',
    title: 'Circle / USDC',
    content: `# Circle and USDC

## Overview

Circle is the issuer of USDC — the leading regulated stablecoin. With $40B+ in circulation, USDC is the backbone of institutional DeFi and crypto payments, with reserves fully backed by cash and US Treasuries.

## USDC Architecture

- 1 USDC = 1 USD, always
- Backed by: Cash, US Treasury bills, and money market funds
- Monthly attestations by Grant Thornton (Big 4 accounting)
- Circled licensed as a money transmitter in all 50 US states

## Cross-Chain Transfer Protocol (CCTP)

CCTP solves the "wrapped token" problem:
- **Old way**: Lock USDC on Ethereum → mint "Bridged USDC" on Solana
  - Creates bridge risk, liquidity fragmentation
- **CCTP way**: Burn USDC on Ethereum → mint native USDC on Solana
  - Native USDC on every chain, no bridge risk

## Key Relationships

- **Coinbase**: Co-founder of USDC with Circle; earns interest on USDC reserves
- **Visa**: Settles transactions in USDC via Visa's network
- **BlackRock**: Manages USDC reserves; Circle uses BlackRock BUIDL as backing
- **[[rwa-blackrock]] link**: Institutional RWA composable with USDC

## The EURC Expansion

Circle also issues EURC (Euro Coin) — backed by euro-denominated assets. This positions Circle as the stablecoin infrastructure provider for multiple currency zones, not just USD.
`,
  },

  'payments-coinbase': {
    id: 'payments-coinbase',
    title: 'Coinbase Commerce',
    content: `# Coinbase Commerce

## Overview

Coinbase Commerce is a non-custodial merchant payment tool that allows businesses to accept crypto payments directly into their own wallets. Unlike traditional payment processors, there's no Coinbase intermediary holding funds.

## Non-custodial Design

When a customer pays via Commerce:
1. Commerce generates a payment address
2. Customer sends crypto to that address
3. Funds land directly in the merchant's wallet
4. Commerce provides confirmation and settlement reporting

No Coinbase custody = no counterparty risk for merchants.

## Supported Assets

- USDC (primary, recommended)
- USDT
- ETH, BTC (for crypto-native merchants)
- Custom ERC-20 tokens

## Supported Chains

- Ethereum (primary)
- Base (growing — lower fees, Coinbase integration)
- Polygon (legacy merchant support)

## Integrations

- Shopify plugin
- WooCommerce plugin
- Magento extension
- Custom API for developers

## Relation to x402

Commerce is separate from [[payments-x402]] — Commerce targets merchant-consumer payments (B2C), while x402 targets API micropayments and machine-to-machine payments (M2M). Together they form Coinbase's payments ecosystem.

## The Base Strategy

Coinbase is migrating Commerce toward Base to leverage lower fees and Smart Wallet integration — eventually making USDC payments on Base the default payment method for all Commerce merchants.
`,
  },

  'payments-request': {
    id: 'payments-request',
    title: 'Request Network',
    content: `# Request Network

## Overview

Request Network is a decentralized payment request protocol — an open standard for creating, storing, and paying invoices using crypto. The REQ token pays for protocol usage.

## Core Concept

A Request is a signed, immutable payment intent stored on the Request Network:
- Payer, payee, amount, currency, due date
- Can be denominated in any currency (fiat or crypto)
- Payable in any accepted crypto (with conversion)
- Stored on IPFS with hash on Ethereum/Gnosis chain

## Use Cases

### B2B Invoicing
- Companies invoice each other in USDC
- Payment proof is on-chain (useful for accounting)
- Multi-currency support (invoice in EUR, pay in USDC)

### Payroll
- Programmatic recurring payment requests
- Employees receive crypto salaries via Request

### Expense Reporting
- On-chain expense receipts
- Automatic reimbursement flows

## Integration with DeFi

Request integrates with:
- Aave (earn yield on pending receivables)
- Centrifuge (finance invoices before they're paid)
- EasyInvoice and Gnosis Safe for DAO treasury management

## Competition

- Superfluid (streaming payments)
- Sablier (token vesting/streaming)
Request's differentiator: focus on one-time/irregular B2B payments rather than streaming.
`,
  },

  'payments-x402': {
    id: 'payments-x402',
    title: 'x402 Standard',
    content: `# x402 — HTTP Payment Standard

## Overview

x402 revives the HTTP 402 "Payment Required" status code as a protocol standard for crypto micropayments. It enables APIs and services to demand payment before serving content, with clients (including AI agents) paying automatically.

## Background

HTTP 402 was defined in 1996 but never standardized — it was reserved "for future use." x402 finally gives it a concrete implementation using stablecoins.

## How It Works

1. **Client requests resource**: GET /api/data
2. **Server responds**: 402 Payment Required with a payment specification
3. **Client constructs payment**: Signs a USDC transaction per the spec
4. **Client re-requests**: Includes payment proof in header
5. **Server verifies and serves**: Returns the requested resource

## AI Agent Use Case

This is the killer application:

    AI Agent → API Request → 402 "Pay 0.001 USDC"
    AI Agent → Pays automatically → API delivers data
    AI Agent → Uses data → Continues task

No API keys, no subscription management, no billing accounts. Just micropayments per request, automated entirely by the agent.

## Technical Specification

- Payment amount, currency, chain specified in 402 response
- Client wallet signs a transaction (not broadcast yet)
- Signature included in follow-up request header
- Server validates and optionally broadcasts the transaction

## Coinbase's Role

x402 was developed by Coinbase's developer platform team. It's designed to work natively with Base (Coinbase's L2) and Coinbase Smart Wallet, but the spec is chain-agnostic.
`,
  },

  'payments-stellar': {
    id: 'payments-stellar',
    title: 'Stellar / XLM',
    content: `# Stellar

## Overview

Stellar is a blockchain purpose-built for payments and cross-border money transfers. With 3-5 second finality, $0.00001 per transaction, and USDC as its primary stablecoin, Stellar is optimized for financial inclusion and remittances.

## Architecture

Stellar's Federated Byzantine Agreement (FBA):
- No mining, no staking
- Nodes choose which other nodes to trust
- Consensus reaches across overlapping "quorum slices"
- Result: fast (5s) finality with low energy consumption

## USDC on Stellar

Circle chose Stellar as one of the first chains for USDC (alongside Ethereum) because:
- Payment-focused architecture (not smart contract first)
- Low fees enable micropayments
- Built-in DEX for currency conversion
- MoneyGram on/off-ramp partnership

## Built-in DEX

Stellar has a native decentralized exchange built into the protocol:
- Currency conversion as part of payment path
- Stellar Lumens (XLM) as reserve currency for cross-currency payments
- Automatic path finding: pay in USD, receiver gets EUR

## MoneyGram Partnership

MoneyGram uses Stellar for its crypto-to-cash service:
- Users can send USDC on Stellar to any MoneyGram location
- Recipient collects local currency cash
- This creates a global blockchain-to-cash off-ramp accessible in 200+ countries

## Comparison to Other Chains

Stellar is slower to add smart contract features than Ethereum or Solana, but its focus on payments means it excels at what it does: fast, cheap, reliable money movement.
`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WALLETS CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  'wallets-overview': {
    id: 'wallets-overview',
    title: 'Wallets & Identity',
    content: `# Wallets & Identity

## Overview

The wallet layer is undergoing its most significant transformation since MetaMask launched in 2016. Three converging technologies are reshaping how users interact with crypto: embedded wallets, account abstraction (ERC-4337), and passkeys.

## The Traditional Wallet Problem

MetaMask-style wallets (externally owned accounts, EOAs) have fundamental UX problems:
- **Seed phrases**: 12 random words that can't be recovered if lost
- **Gas management**: Users must hold ETH for every transaction
- **No recovery**: Lose device = lose funds
- **Single approval per action**: Every game click needs a signature

## Three Solutions Converging

### 1. Embedded Wallets
[[wallets-privy]], [[wallets-dynamic]], [[wallets-magic]] create wallets during social login:
- Email/Google/Apple → automatic wallet creation
- No seed phrases shown to users
- Key management via MPC (secure, non-custodial)

### 2. Account Abstraction (ERC-4337)
[[wallets-erc4337]] enables smart contract wallets:
- Paymasters pay gas for users
- Session keys for gaming (no per-action approval)
- Social recovery (lose device, recover via contacts)

### 3. Passkeys
Face ID / Touch ID replaces passwords and seed phrases:
- Hardware-secured private keys
- Cannot be phished
- Works across devices via iCloud/Google sync

## The Convergence

The best wallets combine all three: embedded creation + account abstraction features + passkey authentication. Coinbase Smart Wallet is the most prominent example.
`,
  },

  'wallets-privy': {
    id: 'wallets-privy',
    title: 'Privy',
    content: `# Privy

## Overview

Privy provides the infrastructure for embedded wallets — allowing apps to create crypto wallets for users during standard social/email login, with no seed phrases required.

## How It Works

1. User signs up to app with email or Google/Apple
2. Privy creates a crypto wallet in the background
3. App requests wallet operations via Privy's SDK
4. Privy manages key security transparently

## Key Management

Privy uses MPC (Multi-Party Computation) for key management:
- Private key is split into shares
- No single party (including Privy) holds the full key
- Key reconstruction requires combining shares from multiple parties
- User holds one share (via device or passkey)

## Developer Experience

The Privy SDK provides simple methods for wallet creation:

    const { createWallet } = usePrivy();
    // Creates wallet for logged-in user
    await createWallet();
    // Sign transactions
    const signature = await signMessage("Hello");

## Cross-app Portability

Privy wallets are portable — users can export their keys to MetaMask or any other wallet if they choose. This prevents lock-in and gives users a path to full self-custody.

## Notable Users

- Farcaster's Warpcast client
- Various NFT platforms and DeFi apps
- Gaming applications that need invisible wallet UX

## Privy vs Custodial

Privy is NOT custodial: the user holds a key share. If Privy disappears, users can recover their wallet using their key share + device. This is a fundamental security difference from exchange wallets.
`,
  },

  'wallets-dynamic': {
    id: 'wallets-dynamic',
    title: 'Dynamic',
    content: `# Dynamic

## Overview

Dynamic provides enterprise-grade Web3 authentication and embedded wallet infrastructure. Its key differentiator is the focus on complex enterprise use cases: multi-wallet management, compliance tools, and advanced user management.

## Core Features

### Multi-wallet Authentication
- Link multiple wallets to one user profile
- Mix of embedded and external wallets (MetaMask, WalletConnect)
- Unified identity across wallet types

### Compliance Tools
- **Token-gating**: Restrict access based on NFT/token ownership
- **Geo-blocking**: Restrict access by country/region
- **KYC integration**: Plug in identity verification providers
- **Allowlists/Denylists**: Granular user access control

### Embedded Wallets
- Email/social login → wallet creation
- MPC key management (similar to Privy)
- Same wallet works across all apps using Dynamic

## Developer Integration

The Dynamic SDK provides React hooks for wallet access:

    const { user, primaryWallet } = useDynamicContext();
    // Access user's primary wallet
    const signer = await primaryWallet.connector.ethers.getSigner();

## Target Market

Enterprise and gaming companies that need:
- Compliance-first approach
- Fine-grained access control
- Multi-wallet user management
- White-label customization

## Comparison to Privy

Dynamic is more feature-rich but more complex to set up. Privy is simpler and better for consumer apps. Dynamic is the choice when compliance, multi-wallet, or enterprise features are required.
`,
  },

  'wallets-magic': {
    id: 'wallets-magic',
    title: 'Magic Labs',
    content: `# Magic Labs

## Overview

Magic Labs (magic.link) provides passwordless authentication with embedded crypto wallets. The "Magic Link" model — email authentication with no password — became one of the first widely adopted approaches to non-seed-phrase wallet creation.

## Magic Link Authentication

1. User enters email
2. Magic sends a time-limited link to that email
3. Clicking the link authenticates the user
4. Magic creates/retrieves their wallet automatically

No password, no seed phrase — just email access.

## Key Management

Magic's approach differs from Privy/Dynamic:
- Keys managed by Magic's HSM (Hardware Security Module) network
- Magic is technically custodial (they control the HSM)
- Recovery: if you have email access, you have wallet access

This is simpler than MPC but makes Magic the trusted key custodian. Most users prefer simplicity over understanding MPC cryptography.

## SDK

Magic SDK example:

    import { Magic } from 'magic-sdk';
    const magic = new Magic('YOUR_API_KEY');
    // Login and get wallet
    await magic.auth.loginWithMagicLink({ email: 'user@example.com' });
    const signer = new ethers.providers.Web3Provider(magic.rpcProvider).getSigner();

## Use Case Fit

Magic is well-suited for apps where:
- Users are entirely non-crypto (no MetaMask expectation)
- Recovery convenience > absolute self-custody
- Quick integration is prioritized

## Developer Footprint

Magic has been integrated by hundreds of DeFi, NFT, and gaming applications since 2019 — one of the earliest and most widely adopted embedded wallet providers.
`,
  },

  'wallets-erc4337': {
    id: 'wallets-erc4337',
    title: 'ERC-4337 / Account Abstraction',
    content: `# ERC-4337 — Account Abstraction

## Overview

ERC-4337 is the Ethereum standard for Account Abstraction — transforming crypto wallets from simple key-pair accounts (EOAs) into programmable smart contracts. This enables a new generation of wallet features impossible with traditional wallets.

## Core Components

### UserOperation
A new transaction type that goes through a separate mempool:
- Not directly signed by the user's key
- Flexible validation logic defined by the wallet contract

### Bundler
Bundles UserOperations and submits them as a single transaction:
- Pays L1 gas
- Recovers costs from paymasters or users

### Paymaster
Contract that sponsors gas fees:
- Apps can pay gas for their users (gasless UX)
- Users can pay gas in non-ETH tokens
- Session-specific gas limits

### Entry Point
The canonical smart contract that validates and executes UserOperations.

## Key Features Enabled

1. **Gasless transactions**: Paymaster pays gas, user never needs ETH
2. **Session keys**: Time/contract-limited signing keys for games
3. **Batched transactions**: Multiple actions in one user signature
4. **Social recovery**: Trusted contacts can restore wallet access
5. **Spending limits**: Contract-enforced limits on transaction amounts

## Implementations

- **Coinbase Smart Wallet**: Passkey-based AA wallet
- **[[wallets-safe]] 4337 module**: Safe + AA features
- **ZeroDev**: Developer SDK for AA wallets
- **[[wallets-particle]] Universal Account**: Cross-chain AA

## Adoption

ERC-4337 is deployed across Ethereum, Polygon, Base, Arbitrum, and all major EVM chains. 2024 saw millions of AA wallets deployed.
`,
  },

  'wallets-safe': {
    id: 'wallets-safe',
    title: 'Safe (Multisig)',
    content: `# Safe

## Overview

Safe (formerly Gnosis Safe) is the de facto standard for multisig wallets in crypto — securing $100B+ in assets across Ethereum and 20+ chains. It's used by nearly every major DAO, DeFi protocol, and institutional crypto holder.

## M-of-N Multisig

Safe requires M of N signers to approve transactions:
- Example: 3-of-5 — any 3 of 5 designated signers can execute
- No single point of failure
- Resistant to individual key compromise

Common configurations:
- DAO treasury: 4-of-7 elected signers
- Protocol upgrade keys: 5-of-9 core team + external signers
- Individual security: 2-of-3 (personal device, hardware wallet, backup key)

## Usage

- **DAOs**: MakerDAO, Uniswap, Compound all use Safe for treasury
- **Protocol upgrade keys**: Aave, Compound, Curve governance
- **Institutional custody**: Hedge funds, family offices
- **Personal security**: High-value individual holders

## Safe Modules

Extend Safe functionality:
- **Zodiac** — governance modules for DAO compatibility
- **Reality Module** — on-chain reality check via Kleros
- **4337 Module** — ERC-4337 Account Abstraction compatibility

## Safe 4337 Module

Combines multisig security with AA features:
- Paymasters can pay gas for Safe transactions
- Batched operations in one multisig approval
- ERC-4337 compatible without sacrificing multisig security

## Transaction Guard

Optional hook that validates all transactions against custom rules:
- Allowlists of approved contract interactions
- Spending limits per token per day
- Emergency pause functionality
`,
  },

  'wallets-rainbow': {
    id: 'wallets-rainbow',
    title: 'Rainbow Wallet',
    content: `# Rainbow Wallet

## Overview

Rainbow is a consumer-grade Ethereum wallet known for its beautiful design and user-friendly approach to NFTs, DeFi, and multi-chain interaction. It made Ethereum accessible to users who value aesthetics and simplicity.

## Design Philosophy

Rainbow bet that design quality matters for crypto adoption:
- NFT gallery that displays artwork beautifully (not just token IDs)
- Token sparklines (price charts) directly in the portfolio
- Human-readable transaction explanations
- Clear warnings for risky contracts

## Security Features

**Smart transactions** simulate before signing:
- Predict what will happen before you approve
- Warn about suspicious contracts (drainers)
- Detect excess approval amounts
- Flag unusual transaction patterns

## ENS Integration

Rainbow treats ENS names as first-class citizens:
- Display ENS names throughout the UI
- Address book with ENS resolution
- ENS avatar shown for known addresses
- Reverse ENS lookup for all addresses

## RainbowKit

RainbowKit is Rainbow's open-source wallet connector library for dApps:

    import { ConnectButton } from '@rainbow-me/rainbowkit';
    // Beautiful "Connect Wallet" button with all major wallets

Used by hundreds of dApps — this made Rainbow's brand visible across the ecosystem even to users who don't use Rainbow's mobile app.

## Multi-chain

- Ethereum (primary)
- Polygon, Optimism, Arbitrum, Base
- zkSync, Zora, Blast

Rainbow navigates multi-chain complexity transparently, showing unified portfolio view.
`,
  },

  'wallets-particle': {
    id: 'wallets-particle',
    title: 'Particle Network',
    content: `# Particle Network

## Overview

Particle Network is building "chain abstraction" — the idea that users should have one account, one gas balance, and one interface regardless of which blockchain an application uses. The Universal Smart Account works across all chains simultaneously.

## The Chain Abstraction Problem

Today's multi-chain reality is fragmented:
- User needs separate accounts on Ethereum, Solana, BNB Chain
- Must bridge assets and maintain separate gas balances on each
- Different wallets for different chains (MetaMask for EVM, Phantom for Solana)
- UI jumble when a dApp bridges you to a new chain

## Universal Smart Account

Particle's solution:
- One address that works on all chains
- One gas balance (can use any token as gas)
- Cross-chain operations look like local operations
- Particle Chain handles routing and execution

## Particle Chain

A purpose-built blockchain for cross-chain coordination:
- Routes user intents to destination chains
- Handles gas payment and conversion
- Aggregates transaction results

## ERC-4337 Foundation

Universal Smart Account is built on [[wallets-erc4337]] Account Abstraction:
- Extended to non-EVM chains (Solana, Bitcoin)
- Cross-chain paymasters (pay gas from any token on any chain)
- Unified social recovery across all chain accounts

## Developer SDK

Particle's SDK example for cross-chain execution:

    const { smartAccount } = useSmartAccount();
    // Execute on any chain from one account
    await smartAccount.sendTransaction({
      to: '0x...',
      chain: 'ethereum',
      value: parseEther('0.1'),
    });

The developer promise: write chain-agnostic code, Particle handles the cross-chain complexity.
`,
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // COSMOS SUB-CANVAS
  // ═══════════════════════════════════════════════════════════════════════════

  'cosmos-l1': {
    id: 'cosmos-l1',
    title: 'Cosmos Hub',
    content: `# Cosmos Hub

## Overview

The Cosmos Hub is the first and most prominent blockchain in the Cosmos ecosystem. It serves as the central coordinator of the interchain — home to ATOM, Interchain Security, and the canonical IBC implementation. Unlike application-specific chains such as Osmosis or Injective, the Hub is intentionally minimal: its value comes from being the trust anchor and economic center of the broader network.

## ATOM and Staking

ATOM is the native staking token of the Hub. Stakers secure the network via Proof of Stake and earn a share of transaction fees and inflation. The 21-day unbonding period is a security parameter: it ensures that any validator misbehaving can be slashed before they can exit. ATOM's inflation rate adjusts dynamically based on staking participation — if less than two-thirds of supply is staked, inflation rises to incentivize more stakers.

## Tendermint BFT Consensus

The Hub uses Tendermint BFT (now called CometBFT), a Byzantine Fault Tolerant consensus algorithm that provides:
- **Instant finality** — once a block is committed, it cannot be reverted
- **2/3+ honest validators** required for safety
- **Fast finality** — ~6 second block times

This is in contrast to probabilistic finality chains (Bitcoin, old Ethereum) where you wait for many confirmations. Tendermint's finality is what makes IBC trustless — light clients can verify finalized state immediately.

## Interchain Security

Interchain Security (ICS) lets "consumer chains" borrow the Cosmos Hub's validator set for security. Instead of bootstrapping 100+ independent validators, a new chain can launch secured by ATOM validators from day one. Stride (liquid staking) and Neutron (CosmWasm contracts) are consumer chains.

This creates a flywheel: consumer chains pay fees to ATOM stakers, increasing ATOM's yield, attracting more stakers, strengthening the Hub's security, and making ICS more valuable for future consumer chains.

## The Appchain Thesis

Cosmos pioneered the idea that the best DeFi apps should be their own sovereign chains, not contracts on a shared VM. This gives them:
- Custom fee parameters
- Dedicated blockspace (no gas wars)
- Direct control over validator incentives

[[eth]] has adopted a version of this via rollups — but Cosmos chains maintain full sovereignty, while rollups inherit Ethereum's security model.
`,
  },

  'cosmos-ibc': {
    id: 'cosmos-ibc',
    title: 'IBC Protocol',
    content: `# IBC — Inter-Blockchain Communication

## What Is IBC?

IBC is the TCP/IP of blockchains. It's a trustless, permissionless protocol for passing arbitrary messages — tokens, NFT ownership, smart contract calls — between sovereign blockchains. It was designed as part of the original Cosmos vision and is now used by 100+ chains.

## How It Works

IBC uses **light clients**: each chain maintains a minimal, cryptographic representation of the other chain's consensus state. To transfer tokens from Chain A to Chain B:

1. A relayer (permissionless off-chain actor) picks up the packet from Chain A
2. The relayer submits the packet plus a Merkle proof to Chain B
3. Chain B's IBC module verifies the proof against Chain A's light client
4. Tokens arrive on Chain B — no trusted custodian, no multisig

The light client tracks the other chain's validator set and verifies new headers against it. If the source chain finalizes a state transition, the receiving chain can cryptographically verify it happened.

## Why IBC Is Different from Bridges

Most bridges use one of two models:
- **Multisig custodians** — a set of trusted parties hold assets (e.g., early Multichain)
- **Optimistic bridges** — anyone can challenge fraud within a window (e.g., Hop, Across)

Both introduce trust assumptions. IBC's light-client design means:
- No locked collateral
- No trusted validators beyond the connected chains themselves
- No need for a separate token to secure the bridge

The only trust assumption is in the chains themselves — if both chains have honest 2/3+ validators, IBC is secure.

## Relayers

Relayers are off-chain processes that monitor IBC channels and ferry packets between chains. They're permissionless — anyone can run one. Relayer economics are funded by the applications using IBC (e.g., DEXes pay relayers to keep channels alive). There's no staking or slashing for relayers; they simply can't produce invalid proofs since Chain B verifies everything.

## IBC Beyond Tokens

IBC supports arbitrary data — not just token transfers. Applications include:
- **Interchain Accounts** — control a wallet on Chain B from Chain A
- **Interchain Queries** — read state from another chain
- **NFT transfers** — ICS-721 standard

This extensibility is why IBC is compared to TCP/IP: it's a transport layer, and the application protocols sit on top.

## Connection to [[cosmos-l1]]

[[cosmos-l1]] is the canonical home of IBC and the most IBC-connected chain. Most new IBC channels open a connection through the Hub before extending to other chains.
`,
  },

  'cosmos-sdk': {
    id: 'cosmos-sdk',
    title: 'Cosmos SDK',
    content: `# Cosmos SDK

## What Is the Cosmos SDK?

The Cosmos SDK is an open-source framework for building application-specific blockchains. It packages the most common blockchain primitives — token transfers, staking, governance, slashing — into modular, composable components. Teams building on the SDK start with these battle-tested modules and layer in their application logic.

## Why Build an Appchain?

Shared VMs (Ethereum, Solana) force all applications to compete for the same blockspace and operate under the same rules. An appchain lets you:
- Set your own fee market (or make txns free)
- Customize validator incentives
- Upgrade logic without waiting for a network-wide hard fork
- Issue your own token as a first-class protocol asset

dYdX, the largest perp DEX by volume, migrated from Ethereum to a Cosmos SDK chain to run a CLOB — impossible on Ethereum's throughput.

## Module System

The SDK uses a module architecture. Each module handles a slice of state and exposes messages, queries, and events. Key built-in modules:

- **bank** — token minting, transfers, multi-send
- **staking** — delegated PoS, validator set management
- **governance** — on-chain proposals and voting
- **slashing** — penalize validators for misbehavior
- **IBC** — [[cosmos-ibc]] integration built in

Teams add custom modules for their application logic (e.g., a DEX module, a derivatives module).

## CosmWasm

CosmWasm is a WebAssembly (Wasm) smart contract layer for Cosmos SDK chains. Teams that don't want to write a full module can deploy contracts written in Rust. CosmWasm contracts are sandboxed, upgradeable, and IBC-aware.

This means a Cosmos SDK chain can support both native modules (for performance-critical code) and smart contracts (for rapid iteration and developer accessibility).

## Notable SDK Chains

- **[[cosmos-osmosis]]** — IBC DEX hub, custom TWAP oracle
- **[[cosmos-injective]]** — on-chain order book, perps and spot
- **[[cosmos-celestia]]** — modular data availability
- **dYdX** — migrated from Ethereum for CLOB at scale
- **Sei** — parallelized EVM targeting DeFi

## Ignite CLI

Ignite CLI (formerly Starport) is the scaffolding tool for Cosmos SDK chains — similar to "create-react-app" but for blockchains. It generates boilerplate for modules, messages, and types, letting teams go from zero to running testnet in hours.
`,
  },

  'cosmos-osmosis': {
    id: 'cosmos-osmosis',
    title: 'Osmosis',
    content: `# Osmosis — The IBC DEX Hub

## Overview

Osmosis is the primary decentralized exchange of the Cosmos ecosystem — an AMM built as its own sovereign Cosmos SDK appchain. Rather than a DEX deployed as a contract on another chain, Osmosis controls its own blockspace, fee parameters, and protocol upgrades through OSMO governance.

## How Osmosis Works

Osmosis uses a standard AMM with concentrated liquidity (CLMM) pools. Traders swap IBC assets (ATOM, OSMO, TIA, INJ, stATOM, etc.) directly on-chain. Since Osmosis is IBC-connected to 50+ chains, assets flow in and out trustlessly.

Key mechanics:
- **OSMO** — governance token, earns a share of swap fees and inflation
- **LP tokens** — represent shares of a liquidity pool
- **Superfluid staking** — LP tokens can be staked simultaneously (earn swap fees + staking rewards)
- **TWAP oracle** — Osmosis's time-weighted average price is used by other protocols as a price feed

## Superfluid Staking

This is Osmosis's most innovative feature: OSMO LPs can simultaneously stake their liquidity position to help secure the Osmosis chain. This creates a capital efficiency triple-stack:
1. **Swap fees** from the LP position
2. **Liquidity mining rewards** from OSMO emissions
3. **Staking rewards** from Osmosis validator delegation

No other major DEX has combined all three incentive streams into a single position.

## Role in the IBC Ecosystem

Osmosis is the most IBC-connected chain — nearly every new Cosmos chain creates its first liquidity pool on Osmosis. It functions as a cross-chain clearing house: if you want to swap Token A from Chain X for Token B on Chain Y, the path often goes through Osmosis.

Volume is driven by [[cosmos-ibc]] flows from [[cosmos-l1]] and the broader appchain ecosystem.
`,
  },

  'cosmos-celestia': {
    id: 'cosmos-celestia',
    title: 'Celestia',
    content: `# Celestia — Modular Data Availability

## What Is Celestia?

Celestia is the first modular blockchain designed solely for data availability (DA). It doesn't execute transactions or settle state — it just ensures data is published and available for anyone who needs to verify it. This separation of concerns is the "modular blockchain" thesis in practice.

## The Modular Stack

Traditional blockchains (monolithic) do everything in one layer:
- **Consensus** — agree on ordering
- **Execution** — run transactions
- **Data availability** — publish data
- **Settlement** — finalize state

Celestia handles only consensus + DA. Rollups and appchains post their transaction data to Celestia as "blobs", while running their own execution and settling wherever they choose (Ethereum, another chain, or standalone).

## Data Availability Sampling (DAS)

The key innovation: Celestia uses DAS so that light nodes can verify data availability without downloading all the data. Each block's data is encoded with erasure codes — meaning 50% of the data is sufficient to reconstruct the full block. Light nodes sample random chunks and probabilistically verify that the full data is available.

This means Celestia can have very large blocks (cheap DA fees) while still supporting lightweight verification — a fundamental scalability breakthrough.

## TIA Token

TIA is used to pay for blob fees on Celestia. It is also used for staking (securing Celestia's consensus) and governance. Rollup teams "airdrop" new chains by distributing to TIA stakers — Celestia's stakers have become the de-facto early-adopter community for the modular ecosystem.

## Relation to [[cosmos-sdk]]

Celestia is built with the Cosmos SDK and connects to the IBC ecosystem. While its primary value is as a DA layer for rollups (including Ethereum rollups via celestia-node), it's a native IBC chain and part of the broader Cosmos interchain.

## Influence on Ethereum

Ethereum's EIP-4844 (blobspace) was directly influenced by Celestia's research on separating DA from execution. The Danksharding roadmap extends this further. Celestia's core team published the foundational research that shaped both Ethereum's and Cosmos's scaling roadmaps.
`,
  },

  'cosmos-injective': {
    id: 'cosmos-injective',
    title: 'Injective',
    content: `# Injective — On-Chain Order Book

## Overview

Injective is a high-performance blockchain purpose-built for on-chain derivatives and financial markets. It runs a fully on-chain Central Limit Order Book (CLOB) — something impossible on Ethereum due to throughput constraints — at 10,000+ TPS with instant finality.

## Why a CLOB Instead of AMM?

AMMs (like Uniswap) work for most retail trading but have limitations:
- **Impermanent loss** for LPs
- **No limit orders** — only market orders against a curve
- **Worse price discovery** than an order book

Professional market makers and institutional traders prefer CLOBs: you can set limit orders, post buy/sell walls, and implement sophisticated strategies. The problem: a CLOB requires constant order updates (cancel, re-post), which costs gas on Ethereum.

Injective's dedicated blockspace makes frequent order updates cheap, enabling a true exchange experience on-chain.

## EVM + CosmWasm

Injective is dual-compatible:
- **EVM compatibility** — Solidity developers can deploy Ethereum contracts
- **CosmWasm** — Rust developers can deploy Cosmos-style contracts

This makes Injective accessible to both the Ethereum and Cosmos developer ecosystems, maximizing the surface area for integrations and protocol deployments.

## INJ Token and Burn Mechanism

INJ is used for staking (securing consensus), governance, and collateral. The deflationary mechanism: 60% of all exchange fees are used to buy back and burn INJ in weekly on-chain auctions. Anyone can bid on the auction; the winning bid (in INJ) is burned, and the bidder receives the week's accumulated fees.

This creates a direct link between Injective's trading volume and INJ scarcity.

## Ecosystem

Injective hosts a growing set of financial protocols: perpetuals exchanges, prediction markets, RWA tokenization, and cross-chain DeFi. Its connection to [[cosmos-ibc]] means assets can flow in from any IBC chain, and its EVM compatibility attracts protocols from [[eth]] as well.
`,
  },

  'cosmos-stride': {
    id: 'cosmos-stride',
    title: 'Stride',
    content: `# Stride — Liquid Staking for IBC

## Overview

Stride is a liquid staking protocol built as a Cosmos SDK appchain and secured by the Cosmos Hub via Interchain Security. It issues liquid staking tokens (stTokens) for IBC-native assets — stATOM, stOSMO, stINJ, stTIA — letting stakers earn staking yield while keeping their capital liquid and usable across IBC DeFi.

## The Liquid Staking Problem

Staking ATOM on the Cosmos Hub earns yield (~15% APR historically) but requires a 21-day unbonding period. During that time, your ATOM is illiquid — you can't trade it, use it as collateral, or provide liquidity. This creates a tradeoff: security (staking) vs. capital efficiency (DeFi).

Liquid staking resolves this tradeoff.

## How stTokens Work

When you deposit ATOM to Stride:
1. Stride stakes your ATOM with a diversified set of Cosmos Hub validators via Interchain Accounts ([[cosmos-ibc]])
2. You receive stATOM, representing your staked ATOM + accruing rewards
3. stATOM's price appreciates over time relative to ATOM as staking rewards accumulate
4. You can use stATOM in DeFi: LP on [[cosmos-osmosis]], collateral on lending protocols, etc.
5. When you redeem, stATOM is burned and you receive ATOM after the 21-day unbonding

## Interchain Security

Stride is a consumer chain — it doesn't run its own validator set. Instead, Cosmos Hub validators (ATOM stakers) also validate Stride transactions. This means:
- Stride inherits the Hub's security from day one
- No need to incentivize an independent validator set
- ATOM stakers earn additional yield from Stride's fees

This is the Interchain Security model in action: consumer chains pay a fee to the Hub, aligning incentives across the entire Cosmos ecosystem.

## Relation to [[cosmos-l1]]

Stride's security is directly derived from [[cosmos-l1]] via ICS. Stride's growth (more staked assets = more fees to ATOM stakers) is a direct positive for the Hub, creating a flywheel between Cosmos DeFi adoption and ATOM's security budget.
`,
  },
};

// ─── Backlinks Map ──────────────────────────────────────────────────────────
// Maps nodeId → list of article IDs that reference [[nodeId]]

function buildBacklinks(): Record<string, string[]> {
  const backlinks: Record<string, string[]> = {};
  const wikiLinkRegex = /\[\[([^\]]+)\]\]/g;

  for (const [articleId, article] of Object.entries(ARTICLES)) {
    const matches = article.content.matchAll(wikiLinkRegex);
    for (const match of matches) {
      const targetId = match[1];
      if (!backlinks[targetId]) backlinks[targetId] = [];
      if (!backlinks[targetId].includes(articleId)) {
        backlinks[targetId].push(articleId);
      }
    }
  }

  return backlinks;
}

export const BACKLINKS: Record<string, string[]> = buildBacklinks();
