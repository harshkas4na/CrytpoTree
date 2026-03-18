# 04 — Infrastructure: The Builder Stack

> "The invisible layer that makes everything work — oracles, indexers, RPCs, dev tools, and wallets."

## Why This Canvas Matters

Every DeFi protocol, every NFT marketplace, every wallet app is built on infrastructure nobody sees. This canvas is for builders and curious intermediates who want to understand: "Who provides the data? Who runs the nodes? How do apps connect to blockchains?"

---

## Canvas Structure

### Main Node: "Infrastructure"
*"The tools, services, and protocols that developers use to build on blockchains"*

### Sub-Nodes (7 categories):

#### 1. Oracles — Real-World Data On-Chain
- **Concept**: Blockchains can't see the outside world; oracles bridge that gap
- **Nodes**:
  - Chainlink (the oracle king — CCIP, VRF, Data Feeds, Functions)
  - Pyth Network (high-frequency price feeds from first-party sources, Solana-native)
  - API3 (first-party oracles, dAPIs)
  - DIA (open-source oracle platform)
  - Band Protocol (cross-chain oracles)
  - Chronicle (MakerDAO's oracle, now standalone)
  - Pragma (StarkNet-native oracle)
- **Beginner**: "How does Aave know the price of ETH? It asks an oracle."
- **Advanced**: Oracle extractable value (OEV), pull vs push models, Pyth's confidence intervals

#### 2. Indexers — Making Blockchain Data Queryable
- **Concept**: Raw blockchain data is unusable; indexers organize it
- **Nodes**:
  - The Graph (decentralized subgraphs, GRT token)
  - Goldsky (real-time indexing, Mirror pipelines)
  - Envio (HyperIndex, multi-chain)
  - Subsquid (data lake approach)
  - Dune Analytics (SQL-based blockchain analytics)
  - Nansen (wallet labels, smart money tracking)
  - Arkham (intelligence platform, entity identification)
- **Beginner**: "How does Etherscan show your transaction history? Indexers."
- **Advanced**: Subgraph composition, real-time event streaming, decentralized indexing economics

#### 3. Node Infrastructure / RPCs
- **Concept**: Every app needs to talk to a blockchain node
- **Nodes**:
  - Alchemy (dominant provider, 80+ chains, Account Abstraction SDK)
  - Infura (ConsenSys, oldest provider)
  - QuickNode (70+ chains, custom webhooks)
  - Helius (Solana-specific, DAS API)
  - Ankr (decentralized RPC)
  - dRPC (decentralized RPC aggregator)
  - Running your own node (Ethereum, Bitcoin, etc.)
- **Beginner**: "When your wallet shows your balance, it's asking an RPC node"
- **Advanced**: RPC vs websocket, MEV-protected RPCs, Flashbots Protect integration

#### 4. Developer Frameworks & SDKs
- **Concept**: Tools for writing, testing, deploying smart contracts
- **Nodes**:
  - Foundry (Rust-based, fastest EVM dev tool, Forge/Cast/Anvil)
  - Hardhat (JavaScript, most popular EVM framework)
  - Anchor (Solana's primary framework)
  - thirdweb (full-stack web3 SDK, contracts + frontend)
  - Alchemy SDK / Moralis (backend-as-a-service)
  - OpenZeppelin (audited contract libraries)
  - Wagmi / Viem (React hooks for Ethereum)
  - Ethers.js / Web3.js (low-level Ethereum libraries)
  - Solidity vs Vyper (EVM languages)
  - Move (Sui, Aptos language)
  - Rust (Solana, Near, Polkadot)
- **Beginner**: "What do developers actually use to build?"
- **Advanced**: Foundry fuzzing, symbolic execution, gas optimization

#### 5. Block Explorers & Analytics
- **Nodes**:
  - Etherscan (and chain variants — Basescan, Arbiscan, etc.)
  - Blockscout (open-source explorer)
  - Solscan / SolanaFM
  - DefiLlama (TVL tracking, the dashboard for DeFi)
  - Token Terminal (protocol revenue data)
  - L2Beat (L2 risk analysis and comparison)
- **Beginner**: "How to check if your transaction went through"
- **Advanced**: Verified contract reading, trace analysis, MEV detection

#### 6. Wallets as Infrastructure
- **Existing canvas (wallets)** — link and enhance
- **Additional nodes**:
  - WalletConnect (wallet ↔ dApp connection standard)
  - Account Abstraction (ERC-4337) — key infrastructure primitive
  - Embedded wallets (Privy, Dynamic, Magic — "invisible" wallets)
  - MPC wallets (Fireblocks, Fordefi)
  - Passkey wallets (WebAuthn-based, no seed phrase)
  - Safe (multisig infrastructure, $100B+ secured)

#### 7. Storage & Compute
- **Nodes**:
  - IPFS (decentralized file storage, content-addressed)
  - Arweave (permanent storage, pay once)
  - Filecoin (incentivized IPFS, storage deals)
  - Ceramic (decentralized database for dApps)
  - Lit Protocol (decentralized access control & compute)
  - Akash (decentralized compute marketplace)

---

## Cross-Links

| This Node | Links To | Why |
|-----------|----------|-----|
| Oracles | DeFi (03) | Price feeds power all of DeFi |
| Oracles | RWA (03) | Real-world data for tokenized assets |
| Indexers | DeFi (03) | Dune/Nansen analyze DeFi data |
| RPCs | Chains (02) | Every chain needs RPC access |
| Dev Frameworks | Foundations (01) | Build on blockchain primitives |
| Wallets | Identity (11) | DIDs, verifiable credentials |
| Storage | NFTs (10) | Where NFT media lives (IPFS, Arweave) |
| Account Abstraction | MEV (05) | Bundler → searcher dynamics |

---

## Research Needed

- [ ] Oracle comparison: Chainlink vs Pyth vs API3 (architecture, update frequency, cost, chains supported)
- [ ] Indexer comparison: The Graph vs Goldsky vs Envio (speed, cost, flexibility)
- [ ] RPC provider comparison (pricing, chains, reliability)
- [ ] ERC-4337 adoption stats (bundlers, paymaster usage, smart accounts deployed)
- [ ] Developer tool usage stats (Foundry vs Hardhat market share)
- [ ] Decentralized storage comparison (Arweave vs IPFS/Filecoin — permanence, cost, speed)
