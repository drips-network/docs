---
id: initialize-sdk
title: Initializing the SDK
---

The Drips SDK provides two main types for interacting with the Drips Protocol. First, there is `DripsSubgraphClient`, which provides "read", or query-related functionality for events in the protocol, and specifically allows developers to query the Drips subgraph.

You can <a href="https://drips-js-sdk-api.netlify.app/classes/dripssubgraphclient#create" target="_blank">create</a> a DripsSubgraphClient like this:

```
// Pass the `chainID` of the network you want to connect to.
const dripsSubgraphClient = DripsSubgraphClient.create(chainId);
```

For the list of supported networks see <a href="https://drips-js-sdk-api.netlify.app/modules/utils.network#configs" target="_blank">here</a>.

The second type of client is 'NFTDriverClient'. This client provides "write" functionality and more specifically it allows application code to send transactions to the NFTDriver smart contract and perform actions like setting Drips or Splits and collecting funds from an NFT-based sub-account.

Because NFTDriverClient will send transactions to the blockchain, a provider instance is required to instantiate it. This provider could
come from a wallet connected by one of your application's end-users, or from a wallet controlled by the application itself.

Once you have a provider, you can <a href="https://drips-js-sdk-api.netlify.app/classes/nftdriverclient#create" target="_blank">create</a> an NFTDriverClient like this:

```
// Assuming you have your wallet connected you should have a `provider` instance.
const nftDriverClient = await NFTDriverClient.create(provider);
```

Once you've instantiated a DripsSubgraphClient or an NFTDriverClient or both, your app is ready to interact with Drips!