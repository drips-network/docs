---
id: connecting-a-wallet
title: Connecting a Wallet
---

*Note: this guide builds on code included with the NFT Driver example app from the Drips SDK repository. Therefore as a prerequisite to being able to follow the instructions in this guide yourself, you will need to first clone the Drips SDK repo and build the NFT Driver example app as described [here][in]. Specifically, you must make sure you have run `npm install` once in the `nft-driver-examples` directory, in order to build the example app project.*

## Start the NFT Example App

Let's start the NFT example App. From inside the directory `nft-driver-examples`, run the command:

`npm run dev`

This will start up a lightweight Svelte webserver running the NFT example app on a local port (likely 5173). Open up a browser and
navigate to "localhost:5173" to see it.

## Connect a Wallet

Now we're going to see how the example app allows an end user to connect a wallet that they control to the app, which will be necessary for any interactions with the Drips contracts which require sending a transaction.

Click the "Connect" button in the example app.

![Connect 1][c1]

We can see that the end user is being offered the option to connect their wallet. To see what's happening behind the scenes, you can open the file `nft-driver-examples/src/routes/Header.svelte` in your favorite editor. In particular, see that
<a href="https://github.com/radicle-dev/drips-js-sdk/blob/a2ad5226284e2e967e95d7f5d24fea79583222b9/nft-driver-examples/src/routes/Header.svelte#L35" target="_blank">the connect() function that is called</a> when the collect button is clicked:

![Connect 2][c2]

Here we can see that the function first *awaits* the result of the user completing their interaction with web3modal (the modal screen in the example app). Note that it is not required that your app work with web3modal to build on the
Drips SDK. As we can see by looking at the next line in the code, all that is required to create a Web3Provider is to pass in a walletProvider and many different types of wallet providers are supported.

In the next part of the connect function (lines 40-44), we can see that two different types of clients are created for interacting with the Drips SDK. The first is:

`nftDriverClient: await NFTDriverClient.create(provider)`

... which creates an NFTDriverClient. This client allows developers' application code to send transactions to the NFTDriver smart contract and perform actions like setting Drips or Splits and collecting funds from an NFT-based sub-account.

The second client that is created is a DripsSubgraphClient:

`subgraphClient: DripsSubgraphClient.create((await provider.getNetwork()).chainId)`

This client assists application code in executing commonly used graphQL queries against the Drips Network's subgraph and formatting the results as Javascript objects.

Now that we have a wallet connected, we're ready to see how a third-party app can allow a user to create an NFT-based Drips account using the SDK in the next guide.



[c1]: /img/nft_example_app_connect1.png
[c2]: /img/nft_example_app_connect2.png
[in]: installing.html


