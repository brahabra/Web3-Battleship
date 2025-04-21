# 🛳️ Web3 Battleship with Vipps SSO
A Web3-enabled Battleship game that explores how Single Sign-On (SSO) using Vipps can lower the entry barrier for new users in the decentralized ecosystem. Built as part of a master thesis on user onboarding and trusted identity in Web3.

## 🔐 Web3 Onboarding with Vipps SSO
To reduce onboarding friction, this project integrates **Vipps SSO** to allow users to sign in using a familiar Web2 login method — no wallet setup or private key management required. Here's how it works:

1. The user logs in using Vipps through an OAuth 2.0 authentication flow.

2. We retrieve the user's unique sub identifier from Vipps, which acts as their identity reference.

3. We check if this user already has a private key stored in our database.

4. If not, we generate a new **Ethereum-compatible private key**, store it in our MongoDB database, and return it to the frontend.

This private key enables users to sign blockchain transactions without requiring them to manually interact with a wallet. While simplified, this architecture functions similarly to a lightweight **Wallet-as-a-Service (WaaS)** solution, helping onboard users into Web3 without requiring them to manage keys or install tools like MetaMask.

## 📲 How to Setup Vipps Test User
Follow this [guide](https://developer.vippsmobilepay.com/docs/knowledge-base/test-environment/#app-installation), and use this test user:

- NIN: 52035644113

- Phone: +47 93636402

## 📦 How to Run the Project
### 🚀 Frontend
1. `cd frontend/vite-react`

2. `npm install`

3. `npm run dev`

### 🛠 Backend
1. `cd backend`

2. `npm install`

3. `npm run dev`

## 🧱 Tech Stack

### 🖥 Frontend
- **React with Vite** – Fast and modern frontend tooling  
- **TypeScript** – Type-safe JavaScript  
- **Wagmi** – React hooks for Web3 integration
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Mantine** - UI component library used for layout, modals, and form elements

### 🛠 Backend
- **Node.js + Express** – REST API for user and session handling  
- **Vipps SSO** – Integration with Vipps' API for user authentication  
- **MongoDB** – Database for storing user/session data (if used)

### ⛓ Blockchain
- **Solidity** – Smart contract language for the Battleship game logic  
- **Sepolia Testnet** – Ethereum test network used for development with no real ETH required  


## 🗂️ Code Structure
```sh
├── frontend/vite-react/                 # Vite + React frontend app
│   ├── src/                             # Source code for the frontend
│   │   ├── components/                  # Reusable React components
│   │   ├── pages/                       # Page views (e.g., Home, Game)
│   │   ├── hooks/                       # Custom React hooks
│   │   ├── contexts/                    # React Contexts for global state
│   │   ├── utils/                       # Utility functions and constants
│   │   ├── types/                       # TypeScript type definitions
│   │   ├── App.tsx                      # Main React app component
│   │   ├── main.tsx                     # Entry point for the React app
│   │   └── wagmi.ts                     # Wagmi config for blockchain interactions
│
├── backend/                             # Node.js / Express backend
│   ├── routes/                          # API route definitions (e.g., auth, game)
│   ├── controllers/                     # Logic for handling API requests
│   ├── models/                          # Database models (optional)
│   ├── config/                          # Config files (e.g., DB connection, env vars)
│   └── server.js                        # Main entry point for the backend server
│
└── battleship-contract/                 # Smart contracts
    └── contracts/                       # Solidity contract files
        ├── Contract.sol                 # Multiplayer Battleship contract
        └── SinglePlayerBattleship.sol   # Singleplayer Battleship contract
```

## ⛓️ What is Web3?
Web3 represents a new vision for the internet, emphasizing decentralization and user empowerment. Unlike traditional Web2, where data is controlled by centralized corporations, Web3 uses blockchain-based networks of independent nodes to validate and store transactions. This ensures transparency, security, and gives users greater control over their data, identity, and online interactions.

## 🔐 Login using Vipps vs Metamask
In Web3, users interact through wallets that manage identity and access using cryptographic keys - not by storing assets. Each account has a public key for transactions and a private key that proves ownership. If the private key is lost, access to the account is gone permanently. To make onboarding easier, we offer Vipps Login as a familiar alternative to wallets like MetaMask, helping newcomers get started while still supporting full control for experienced users.

## 🪙What are transactions?
In Web3, transactions are actions like sending assets or interacting with apps, and they require approval with your private key. Each transaction includes a gas fee, paid to the network for processing. Some transactions involve smart contracts — self-executing programs on the blockchain. In this game, you'll interact with a smart contract to run the game logic.

## 💸🔥 Does this mean I will be using money to play the game?
No! Using Vipps or MetaMask won’t cost you anything. This game runs on Sepolia, an Ethereum test network where the ETH is fake and has no real value. It’s a safe space to explore blockchain features without spending real money - so you can play freely, risk-free.

## ✨ Our goal...
We’re exploring how new users interact with a Web3 application and what barriers might hinder adoption. To make onboarding easier, we’ve integrated Vipps Login as a familiar alternative to wallets like MetaMask, helping users get started without needing to understand complex blockchain concepts.
