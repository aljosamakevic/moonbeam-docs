---
title: Portfolio Tracking on Moonbeam with Zapper
description: Learn how to track your holdings on Moonbeam using Zapper and interact with different DeFi platforms on the Moonbeam Ecosystem.
---

# Portfolio Tracking with Zapper

## What is Zapper?

Zapper is a powerful Web3 application that allows users to explore on-chain data, manage portfolios, and interact with various decentralized finance (DeFi) protocols across multiple networks, including Moonbeam. By integrating with Zapper, users can seamlessly monitor and manage assets across Moonbeam's DeFi ecosystem, including Moonwell, StellaSwap, OmniLST, and Prime Protocol.

This tutorial provides a detailed step-by-step guide for both users and developers to integrate with Zapper and maximize their experience within the Moonbeam ecosystem.

## Accessing Moonbeam Assets on Zapper

You can navigate to [Zapper's official website](https://zapper.xyz){target=\_blank} and take the following steps to start interacting with the application:

1. Click on the **Connect Wallet** button at the top right corner.
2. Select your preferred wallet from the supported options (e.g., MetaMask, Talisman, Coinbase Wallet).
3. Follow the on-screen prompts to connect securely to Zapper.

![Zapper main site](/images/tutorials/integrations/Zapper/zapper-1.webp)

![Zapper wallet modal](/images/tutorials/integrations/Zapper/zapper-2.webp)

### Explore Your Portfolio

Once your wallet is connected, Zapper will automatically detect and display your assets across supported networks, including Moonbeam. You can navigate to your main dashboard by clicking on **My Profile** on the left sidebar or selecting it from the wallet icon on the top-right corner. The dashboard provides an overview of your holdings and activity split in the following categories:

- **Net Worth Summary**: Displays your total assets, liabilities, and net worth across all networks.
- **Token Balances**: Lists all tokens held in your connected wallet, including GLMR (Moonbeam's native token) and any ERC-20 tokens.
- **DeFi Positions**: Shows active positions in Moonbeam-based DeFi platforms such as lending, liquidity pools, and staking.
- **NFTs**: Displays any NFTs you own on Moonbeam or other supported chains.
- **On-Chain Activity**: Zapper's dashboard provides real-time data, enabling efficient management of your DeFi activities.

![Zapper Dashboard](/images/tutorials/integrations/Zapper/zapper-3.webp)

### Engage with Moonbeam's DeFi Ecosystem

Zapper provides access to interact directly with Moonbeam's DeFi protocols such as:

- **Moonwell**: Access lending and borrowing services.
- **StellaSwap**: Participate in token swaps and liquidity provision by depositing token pairs into StellaSwap liquidity pools.
- **OmniLST**: Engage in liquid staking opportunities (Stake GLMR tokens to receive liquid staking tokens and use them in other DeFi applications).
- **Prime Protocol**: Manage cross-chain assets and leverage borrowing services (deposit assets as collateral to borrow across multiple chains).

Follow these steps to interact with any of these protocols:

1. Select **Moonbeam** in the chain filter on the left sidebar.
2. Go to the **DeFi** section below Trending Apps and chose the protocol you want to interact with.
3. You'll be able to view your supplied and borrowed assets on Moonwell, Swap tokens using StellaSwap’s decentralized exchange, Stake GLMR on OmniLST, or interact with any other supported platform.

![Zapper DeFi Section](/images/tutorials/integrations/Zapper/zapper-4.webp)


## Integrating with Zapper's API

Developers can leverage Zapper's API to enrich their applications with comprehensive DeFi data from the Moonbeam network.

You can register for an API key by visiting the [Zapper API portal](https://protocol.zapper.xyz){target=\_blank}. An API key is necessary to authenticate your application and access Zapper's endpoints. 

Zapper offers several endpoints to fetch relevant data such as:

- **Balances**: Retrieve asset balances for addresses on Moonbeam.
- **Transactions**: Access transaction histories.
- **Prices**: Obtain real-time token prices.

Furthermore, you can familiarize yourself with the [Zapper API documentation](https://protocol.zapper.xyz/docs/api){target=\_blank}, which provides detailed information on the available endpoints, request structures, and response formats.

Depending on your preferred programming language, you can set up your environment to make HTTP requests to Zapper's API. Below is an example using Node.js:

??? code "Retrieve token balances"
    ```javascript
    --8<-- 'code/tutorials/integrations/Zapper/token-balances.js'
    ```

This script retrieves token balances for a specified wallet address on the Moonbeam network.


!!! note 

	Ensure that your application handles API responses appropriately and includes error handling mechanisms.


By following this tutorial, users and developers can effectively integrate with the Zapper DApp, building powerful applications to enhance their interaction with the Moonbeam network and its DeFi ecosystem. 

### Additional Resources

You can explore the [Zapper API GitHub repository](https://github.com/Zapper-fi/Docs){target=\_blank} for code examples and community contributions, or refer to [Zapper's integration guides](https://zapper.gitbook.io/integrations){target=\_blank} and [Moonbeam's Developer Portal](https://docs.moonbeam.network){target=\_blank} for detailed instructions and best practices on how to build your DApp and integrate it with Zapper.

--8<-- 'text/_disclaimers/educational-tutorial.md'

--8<-- 'text/_disclaimers/third-party-content.md'
