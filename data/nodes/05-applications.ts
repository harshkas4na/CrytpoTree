// =============================================================================
// PHASE 5 — APPLICATIONS & VERTICALS
// =============================================================================
// Consumer-facing crypto verticals:
//   Privacy (protocols and chains)
//   NFTs (marketplaces, standards)
//   Gaming / GameFi
//   SocialFi
//   AI x Crypto
//   DePIN (Decentralized Physical Infrastructure)
//   Memecoins (now properly defined — fixes the dogecoin bug!)
//   DAO & Governance
//
// ADD HERE: new consumer apps, new verticals, specific protocols within
// any of the categories below.
// =============================================================================

import { CryptoNodeData } from '../types';

export const applicationNodes: CryptoNodeData[] = [

  // ── PRIVACY ──────────────────────────────────────────────────────────────────

  {
    id: 'privacy',
    parentId: 'root',
    label: 'Privacy',
    description: 'Technologies for shielding transaction data and user identity on-chain',
    category: 'chain-group',
    dependencies: ['root'],
    shortOverview: 'Tools to make transactions private on public blockchains.',
    deepInsight: 'Public blockchains are transparent: anyone can see your balance and transaction history. Privacy protocols use cryptography (like Zero Knowledge Proofs and Ring Signatures) to allow you to transact without revealing your history or net worth. Privacy is a fundamental human right — financial privacy enables dissent, protects businesses, and prevents targeted attacks.',
  },
  {
    id: 'monero',
    parentId: 'privacy',
    label: 'Monero',
    description: 'Privacy-centric cryptocurrency using ring signatures, stealth addresses, and RingCT',
    category: 'chain',
    dependencies: ['privacy'],
    shortOverview: 'The gold standard for private digital cash — private by default, not opt-in.',
    deepInsight: 'Monero is private by default. It uses Ring Signatures (mixing your signature with others to create ambiguity), Stealth Addresses (one-time addresses for each transaction), and RingCT (hiding transaction amounts). Unlike Bitcoin where every transaction is traceable, Monero is fungible — every XMR coin is identical and indistinguishable in history.',
  },
  {
    id: 'railgun',
    parentId: 'privacy',
    label: 'Railgun',
    description: 'ZK-based smart contract system for private DeFi interactions on Ethereum',
    category: 'player',
    dependencies: ['privacy'],
    shortOverview: 'A privacy system that lets you use DeFi privately — trade and lend without revealing your address.',
    deepInsight: 'Unlike mixers (which just shuffle funds), Railgun keeps your funds in a "shielded pool" but lets you interact with Uniswap or Aave from within that pool. You can trade and lend without ever revealing your address. It uses ZK proofs to prove you have the right to the funds without revealing which funds are yours.',
  },

  // ── NFT MARKETPLACES ─────────────────────────────────────────────────────────

  {
    id: 'nft-marketplaces',
    parentId: 'root',
    label: 'NFT Marketplaces',
    description: 'Platforms for trading non-fungible tokens and digital collectibles',
    category: 'chain-group',
    dependencies: ['root'],
    shortOverview: 'The Amazon and eBay of digital goods — where NFTs are listed, discovered, and traded.',
    deepInsight: 'NFT marketplaces aggregate liquidity and provide discovery for on-chain assets. They handle listings, search, escrowed sales, and reputation signals. Many also support creator royalties and launchpads. The market has bifurcated between professional trading platforms (Blur) and collector-focused ones (OpenSea), with royalty enforcement becoming a competitive battleground.',
  },
  {
    id: 'opensea',
    parentId: 'nft-marketplaces',
    label: 'OpenSea',
    description: 'Largest multi-chain NFT marketplace supporting ERC-721 and ERC-1155',
    category: 'player',
    dependencies: ['nft-marketplaces'],
    shortOverview: 'The first and historically largest NFT marketplace — defined the NFT trading experience.',
    deepInsight: 'OpenSea defined the NFT trading experience and onboarded millions of users. It supports almost every chain and asset type. Under competitive pressure from Blur, it removed mandatory creator royalties and reduced fees — a controversial move that hurt creators but maintained market share.',
  },
  {
    id: 'blur',
    parentId: 'nft-marketplaces',
    label: 'Blur',
    description: 'Pro-trader NFT marketplace with aggregated liquidity, lending (Blend), and zero fees',
    category: 'player',
    dependencies: ['nft-marketplaces'],
    shortOverview: 'An NFT marketplace built for professional traders — overtook OpenSea in volume.',
    deepInsight: 'Blur treats NFTs like financial assets. It focuses on speed, floor-sweeping (buying multiple NFTs at once), and incentivizing liquidity with BLUR token rewards. It overtook OpenSea in volume by catering to financial speculators. Blend (Blur Lending) introduced NFT-collateralized loans at scale.',
  },
  {
    id: 'magic-eden',
    parentId: 'nft-marketplaces',
    label: 'Magic Eden',
    description: 'Multi-chain NFT marketplace with Solana, Bitcoin Ordinals, and EVM support',
    category: 'player',
    dependencies: ['nft-marketplaces'],
    shortOverview: 'The leading marketplace for Solana NFTs and Bitcoin Ordinals.',
    deepInsight: 'Magic Eden built its reputation on Solana with fast UX and strong community focus, then expanded to Bitcoin Ordinals and EVM chains. It offers launchpads, collection verification, and cross-chain discovery. ME token rewards have been a central part of its growth strategy.',
  },

  // ── GAMING ───────────────────────────────────────────────────────────────────

  {
    id: 'gaming',
    parentId: 'root',
    label: 'Gaming (GameFi)',
    description: 'Blockchain-based gaming with asset ownership and play-to-earn / play-and-own models',
    category: 'chain-group',
    dependencies: ['root'],
    shortOverview: 'Video games where players truly own their in-game items as NFTs.',
    deepInsight: 'GameFi introduced "Play-to-Earn", but the focus has shifted to "Play-and-Own". The goal is to create sustainable economies where players can trade skins, swords, and land freely outside the game\'s walled garden. The key challenge is making the game fun first — crypto is the backend, not the frontend experience.',
  },
  {
    id: 'immutable',
    parentId: 'gaming',
    label: 'Immutable',
    description: 'ZK rollup purpose-built for NFT gaming with no gas fees for players',
    category: 'player',
    dependencies: ['gaming'],
    shortOverview: 'A Layer 2 blockchain dedicated to gaming — gas-free minting and trading for players.',
    deepInsight: 'Immutable solves gaming\'s biggest blockchain problem: Gas Fees. It offers gas-free minting and trading for gamers, ensuring that playing a blockchain game feels like playing a normal game. Immutable X uses StarkEx ZK proofs. They\'ve signed partnerships with major game studios including Ubisoft and EA.',
  },

  // ── SOCIALFI ─────────────────────────────────────────────────────────────────

  {
    id: 'socialfi',
    parentId: 'root',
    label: 'SocialFi',
    description: 'Decentralized social media protocols with user-owned identity and creator monetization',
    category: 'chain-group',
    dependencies: ['root'],
    shortOverview: 'Where social media meets financial ownership — you own your audience.',
    deepInsight: 'SocialFi reimagines social media with crypto primitives. Instead of platforms owning your followers and content, you own a portable social graph stored on-chain. Creators can monetize directly through tokens, NFTs, and on-chain subscriptions without intermediaries taking 30%+ cuts. The challenge is bootstrapping network effects without the existing user bases of Twitter or Instagram.',
  },
  {
    id: 'farcaster',
    parentId: 'socialfi',
    label: 'Farcaster',
    description: 'Decentralized social protocol with Warpcast client, Frames, and mini-apps',
    category: 'player',
    dependencies: ['socialfi'],
    shortOverview: 'Crypto Twitter\'s successor — a protocol for uncensorable social networking.',
    deepInsight: 'Farcaster separates the social protocol from clients. Your identity and social graph live on-chain (on Optimism); anyone can build apps on top. "Frames" allow interactive mini-apps within posts (mint NFTs, swap tokens, vote) directly in the feed. It\'s where crypto-native users are migrating for discourse, with channels replacing Twitter Lists.',
  },
  {
    id: 'lens',
    parentId: 'socialfi',
    label: 'Lens Protocol',
    description: 'Composable social graph by Aave team with NFT-based profiles and follows',
    category: 'player',
    dependencies: ['socialfi'],
    shortOverview: 'Your social identity as NFTs — own your followers and content forever.',
    deepInsight: 'Built by Aave\'s team, Lens represents your social presence as NFTs: your profile is an NFT, follows are NFTs, content is NFTs. This makes your social graph portable across any app built on Lens. Lens V2 introduced a more efficient "profile manager" model and expanded to EVM chains beyond Polygon.',
  },
  {
    id: 'friend-tech',
    parentId: 'socialfi',
    label: 'Friend.tech',
    description: 'Social trading app tokenizing access to creator chatrooms via bonding curve "Keys"',
    category: 'player',
    dependencies: ['socialfi'],
    shortOverview: 'The app that successfully monetized social clout on Base.',
    deepInsight: 'Friend.tech allows you to buy "Keys" to a person. Holding a key grants access to their private chatroom. Key prices scale on a bonding curve, meaning the more people buy, the more expensive it gets. It turned social influence into a speculative asset and generated millions in protocol fees. V2 added Clubs for group-based access.',
  },

  // ── AI x CRYPTO ──────────────────────────────────────────────────────────────

  {
    id: 'ai-crypto',
    parentId: 'root',
    label: 'AI x Crypto',
    description: 'The intersection of artificial intelligence and blockchain — decentralized compute, models, and agents',
    category: 'chain-group',
    dependencies: ['root'],
    shortOverview: 'Decentralized AI — compute, models, and agents owned by the people, not Big Tech.',
    deepInsight: 'AI x Crypto tackles the centralization of AI by giants like OpenAI and Google. Crypto provides: decentralized compute (no single point of control), open model marketplaces (anyone can contribute and earn), verifiable inference (prove an AI output is genuine via ZK proofs), and autonomous agents with their own wallets and economic identities.',
  },
  {
    id: 'bittensor',
    parentId: 'ai-crypto',
    label: 'Bittensor (TAO)',
    description: 'Decentralized machine learning network with subnet-based AI model competition',
    category: 'player',
    dependencies: ['ai-crypto'],
    shortOverview: 'The "Bitcoin of AI" — a network of competing AI models earning TAO tokens.',
    deepInsight: 'Bittensor creates a marketplace of AI models organized into "subnets". Miners run AI models and compete to provide the best outputs; validators evaluate quality. Top performers earn TAO tokens. Anyone can create subnets for different AI tasks: text generation, image creation, price prediction, etc. It\'s an internet of productive AI agents.',
  },
  {
    id: 'akash',
    parentId: 'ai-crypto',
    label: 'Akash Network',
    description: 'Permissionless decentralized cloud compute marketplace for AI and general workloads',
    category: 'player',
    dependencies: ['ai-crypto'],
    shortOverview: 'The "Airbnb of cloud" — rent unused servers at 80% below AWS prices.',
    deepInsight: 'Akash is a permissionless marketplace matching compute suppliers (anyone with servers) with buyers. It\'s 3-10x cheaper than AWS/GCP because it aggregates underutilized capacity. With the AI GPU crunch, Akash has become crucial for running LLM inference and training at scale for teams that can\'t access centralized providers.',
  },
  {
    id: 'render',
    parentId: 'ai-crypto',
    label: 'Render Network',
    description: 'Distributed GPU network for AI inference, 3D rendering, and media workloads',
    category: 'player',
    dependencies: ['ai-crypto'],
    shortOverview: 'Hollywood-grade rendering and AI compute powered by a decentralized GPU network.',
    deepInsight: 'Render started as distributed GPU rendering for 3D artists and studios (used for high-end film and TV production). With AI\'s GPU hunger, it expanded to support AI inference workloads. Node operators earn RNDR tokens for providing compute, creating a marketplace of GPU capacity that can compete with centralized providers on price.',
  },
  {
    id: 'ocean',
    parentId: 'ai-crypto',
    label: 'Ocean Protocol',
    description: 'Decentralized data marketplace with Compute-to-Data for privacy-preserving AI training',
    category: 'player',
    dependencies: ['ai-crypto'],
    shortOverview: 'Buy and sell data securely — the fuel for AI models without losing custody.',
    deepInsight: 'Ocean enables data monetization without loss of control. Data owners publish datasets; AI developers pay to access them. "Compute-to-Data" lets algorithms run on the data without the raw data ever leaving the owner\'s custody — crucial for sensitive datasets like medical records. Part of the Fetch.ai / Ocean / SingularityNET merger (ASI Alliance).',
  },
  {
    id: 'ai-agents',
    parentId: 'ai-crypto',
    label: 'AI Agents',
    description: 'On-chain AI agents with autonomous decision-making and crypto wallet control',
    category: 'primitive',
    dependencies: ['ai-crypto'],
    shortOverview: 'AI programs that live on the blockchain and can hold and spend money autonomously.',
    deepInsight: 'This is the next frontier: AI Agents with their own crypto wallets. They can earn money (by providing services), spend money (paying for compute or APIs), and interact with DeFi protocols — all without human intervention. Agents can be owned by their creators, by tokenholders, or be fully autonomous. The question of agent identity and accountability is still being solved.',
  },
  {
    id: 'virtuals',
    parentId: 'ai-agents',
    label: 'Virtuals Protocol',
    description: 'Framework for creating, co-owning, and monetizing AI agents with token economies',
    category: 'player',
    dependencies: ['ai-agents'],
    shortOverview: 'A fair-launch platform for tokenized AI agents — the "Initial Agent Offering" (IAO).',
    deepInsight: 'Virtuals Protocol allows anyone to launch an AI Agent (like a chatbot, gaming NPC, or trading bot) with its own token. Token holders co-own the agent and govern its behavior and revenue distribution. LUNA and AIXBT became the first agents to achieve viral scale, generating millions in agent-earned revenue.',
  },
  {
    id: 'fetch-ai',
    parentId: 'ai-agents',
    label: 'Fetch.ai',
    description: 'Autonomous economic agents framework for decentralized machine learning and task automation',
    category: 'player',
    dependencies: ['ai-agents'],
    shortOverview: 'A platform for building Autonomous AI Agents that can negotiate and transact.',
    deepInsight: 'Fetch.ai allows developers to create "Agents" — software that can perform tasks, negotiate, and transact on your behalf. Imagine an AI agent that automatically books a hotel room by negotiating directly with the hotel\'s agent. Part of the ASI Alliance merger with Ocean Protocol and SingularityNET to create a combined decentralized AI ecosystem.',
  },
  {
    id: 'morpheus-ai',
    parentId: 'ai-agents',
    label: 'Morpheus',
    description: 'Decentralized network for personal AI agents with on-chain economic agency',
    category: 'player',
    dependencies: ['ai-agents'],
    shortOverview: 'Your personal AI agent that can pay, trade, and work for you on-chain.',
    deepInsight: 'Morpheus builds personal AI agents that connect to your wallet. These agents can execute on-chain actions: swap tokens, manage positions, pay for services, and interact with smart contracts. Unlike ChatGPT, your Morpheus agent has economic agency — it can earn and spend crypto autonomously based on your instructions.',
  },

  // ── DEPIN ────────────────────────────────────────────────────────────────────

  {
    id: 'depin',
    parentId: 'root',
    label: 'DePIN',
    description: 'Decentralized Physical Infrastructure Networks — crypto-incentivized real-world infrastructure',
    category: 'infra',
    dependencies: ['root'],
    shortOverview: 'Using crypto incentives to build real-world physical infrastructure networks.',
    deepInsight: 'DePIN flips the model of telcos and cloud providers. Instead of one company building cell towers, a protocol pays individuals in tokens to put a hotspot in their window. It crowdsources infrastructure building. The killer insight: participants who contribute hardware early get asymmetric token upside, aligning individual incentives with network growth.',
  },
  {
    id: 'helium',
    parentId: 'depin',
    label: 'Helium',
    description: 'Decentralized wireless network for IoT and 5G coverage with hotspot mining',
    category: 'player',
    dependencies: ['depin'],
    shortOverview: 'People-powered wireless — earn crypto for hosting hotspots.',
    deepInsight: 'Helium pioneered DePIN by incentivizing individuals to deploy LoRaWAN hotspots for IoT devices. It has since expanded to 5G. Over 1 million hotspots globally provide coverage, disrupting traditional telecom\'s capital-intensive model. Helium migrated to Solana for scalability and lower transaction costs.',
  },
  {
    id: 'hivemapper',
    parentId: 'depin',
    label: 'Hivemapper',
    description: 'Decentralized mapping network using dashcam imagery for fresh street-level data',
    category: 'player',
    dependencies: ['depin'],
    shortOverview: 'Drive and earn — build Google Maps through dashcam footage.',
    deepInsight: 'Hivemapper pays drivers with HONEY tokens to collect street-level imagery using specialized dashcams. This crowdsourced approach creates maps that are fresher and cheaper than Google\'s camera cars. The data is valuable for autonomous vehicles, logistics companies, and governments that need up-to-date mapping.',
  },
  {
    id: 'dimo',
    parentId: 'depin',
    label: 'DIMO',
    description: 'User-owned vehicle data network connecting cars to earn tokenized data rewards',
    category: 'player',
    dependencies: ['depin'],
    shortOverview: 'Own your car\'s data and get paid for sharing it.',
    deepInsight: 'DIMO lets vehicle owners monetize the data their cars generate (mileage, battery health, driving patterns). Plug in a device, earn DIMO tokens when companies use your data. Users maintain control over their data while creating value from an asset they already own. Insurance companies, repair shops, and EV infrastructure providers are target customers.',
  },
  {
    id: 'io-net',
    parentId: 'depin',
    label: 'io.net',
    description: 'Decentralized GPU network aggregating underutilized compute for AI and ML training',
    category: 'player',
    dependencies: ['depin'],
    shortOverview: 'The world\'s largest decentralized GPU cluster for AI workloads.',
    deepInsight: 'io.net aggregates GPUs from independent data centers, crypto miners, and Filecoin providers into a single "Internet of GPUs". It offers compute at a fraction of the cost of AWS, specifically configured for machine learning workloads. During the AI GPU shortage, it became a critical alternative infrastructure source.',
  },

  // ── MEMECOINS ────────────────────────────────────────────────────────────────
  // NOTE: This was previously MISSING, causing dogecoin to have a broken
  // dependency. The memecoins node is now properly defined here.

  {
    id: 'memecoins',
    parentId: 'root',
    label: 'Memecoins',
    description: 'Tokens driven by internet culture, community, and social coordination — not technology',
    category: 'chain-group',
    dependencies: ['root'],
    shortOverview: 'Tokens that derive value from memes, community, and cultural momentum rather than utility.',
    deepInsight: 'Memecoins are the pure distillation of crypto\'s "money is a social construct" thesis. They have no product, no revenue, and no technology moat — yet some have reached tens of billions in market cap. They function as community coordination tools, speculation vehicles, and cultural artifacts simultaneously. The 2024 memecoin supercycle (BONK, WIF, PEPE, DOGE) generated more retail volume than most DeFi protocols combined.',
  },
  {
    id: 'dogecoin',
    parentId: 'memecoins',
    label: 'Dogecoin',
    description: 'The original memecoin — a Litecoin fork with Shiba Inu mascot and scrypt mining',
    category: 'player',
    dependencies: ['memecoins'],
    shortOverview: 'The King of Memecoins, started as a joke in 2013 — still the most recognized.',
    deepInsight: 'Dogecoin has its own blockchain (merged mined with Litecoin) with a 1-minute block time and inflationary supply (10B DOGE/year). It has survived multiple market cycles because it has a friendly, non-serious community ethos ("Do Only Good Everyday"). Elon Musk\'s vocal support catalyzed massive price appreciation in 2021. It is a testament to the fact that money is ultimately a social construct.',
  },
  {
    id: 'shiba-inu',
    parentId: 'memecoins',
    label: 'Shiba Inu (SHIB)',
    description: 'Ethereum-based memecoin with SHIB, LEASH, BONE ecosystem and ShibaSwap',
    category: 'player',
    dependencies: ['memecoins'],
    shortOverview: 'The "Dogecoin killer" that became its own ecosystem on Ethereum.',
    deepInsight: 'SHIB launched on Ethereum as an ERC-20 token with a 1 quadrillion supply (1,000,000,000,000,000 tokens). Half was burned to Vitalik Buterin who donated much of it to charity. Unlike Dogecoin, SHIB expanded into a full ecosystem (ShibaSwap DEX, Shibarium L2, SHIB metaverse). It made millions of holders overnight in 2021 and has maintained a strong community.',
  },
  {
    id: 'pepe',
    parentId: 'memecoins',
    label: 'PEPE',
    description: 'Ethereum-based memecoin inspired by the Pepe the Frog internet meme',
    category: 'player',
    dependencies: ['memecoins'],
    shortOverview: 'The fastest memecoin to $1B market cap — Pepe the Frog on-chain.',
    deepInsight: 'PEPE launched in April 2023 and reached $1B market cap faster than any other asset in history. It is a pure memecoin with no utility claims, no team allocation, and no roadmap — just vibes and the iconic Pepe meme. Its success inspired hundreds of frog-themed tokens and proved that cultural resonance alone can drive massive market caps.',
  },

  // ── DAO & GOVERNANCE ─────────────────────────────────────────────────────────

  {
    id: 'dao-governance',
    parentId: 'root',
    label: 'DAOs & Governance',
    description: 'Decentralized autonomous organizations using on-chain voting to manage protocols',
    category: 'chain-group',
    dependencies: ['root'],
    shortOverview: 'Internet-native organizations governed by token holders through on-chain votes.',
    deepInsight: 'DAOs replace the board of directors with token-weighted votes. Any holder can propose changes to a protocol — fee structures, treasury spending, risk parameters, or upgrades. The promise is transparent, censorship-resistant governance. The reality is often low participation rates, whale dominance, and governance attacks. Uniswap, Aave, MakerDAO, and Compound all operate as DAOs with billions in treasury.',
  },
  {
    id: 'snapshot',
    parentId: 'dao-governance',
    label: 'Snapshot',
    description: 'Gasless off-chain voting platform for DAOs using on-chain token balances',
    category: 'player',
    dependencies: ['dao-governance'],
    shortOverview: 'The standard tool for DAO voting — gasless, flexible, and used by almost every major protocol.',
    deepInsight: 'Snapshot enables DAOs to poll their token holders without requiring expensive on-chain transactions for every vote. Votes are signed messages stored on IPFS, verified against on-chain token balances at a specific block. Almost every major DAO (Uniswap, Aave, ENS, Gitcoin) uses Snapshot for signaling before on-chain execution. The tradeoff is that Snapshot votes are not automatically enforced — a separate execution step is needed.',
  },
  {
    id: 'tally',
    parentId: 'dao-governance',
    label: 'Tally',
    description: 'On-chain governance dashboard for compound-style governors and Governor Bravo',
    category: 'player',
    dependencies: ['dao-governance'],
    shortOverview: 'The "governance explorer" — discover, track, and participate in on-chain DAO votes.',
    deepInsight: 'Tally provides a UI for Governor Bravo and OpenZeppelin Governor contracts — the standard on-chain governance framework used by Compound, Uniswap, and hundreds of protocols. Unlike Snapshot (off-chain signaling), Tally votes execute automatically on-chain. It also shows delegate profiles and voting histories, improving accountability.',
  },

];
