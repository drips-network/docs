---
id: installing
title: Installing the SDK and Running the Example Apps
---
## Installing the SDK
You can include the Drips SDK directly into your project's package.json as a dependency by using the command:

`npm install https://github.com/radicle-dev/drips-js-sdk`

or

`yarn add https://github.com/radicle-dev/drips-js-sdk`

## Cloning the SDK Repo and Running the NFT Driver Example App

The SDK ships with two fully self-contained example web applications that illustrate how Drips can be incorporated into a web app. To get started exploring the Drips SDK through these examples, you will first need to clone the repository to your local machine:

`git clone https://github.com/radicle-dev/drips-js-sdk.git`

The first example app is `nft-driver-examples`. This app shows how web apps can build on the SDK to allow an Ethereum address to create an unlimited number of NFT-based Drips "sub-accounts", each of which has its own account balance and Drips and Splits configuration distinct from the Ethereum address that controls it. To run it, from the root directory of the SDK project, first change directory to the directory of the example:

`cd nft-driver-examples`

Next, install the project dependencies for the example app using npm:

`npm install`

Finally, to start the web-based Drips SDK example locally run:

`npm run dev`

Open your web browser and go to localhost. You should see a simple UI that will let you explore the Drips SDK functionality related to creating and managing NFT-based sub-accounts.

A few notes:

(1) Take a look at the code in examples-app/src/Header.svelte to see how this example web app is utilizing the NFTDriverClient and the DripsSubgraphClient, and play around with the code in all *.svelte files in src/components.

(2) You will need to click on the Connect button in the UI to connect your wallet before the other functionality will be enabled. (Note: we recommend using MetaMask when working with the example apps. They may work with WalletConnect, but it has not been tested.)

## Run the Address Driver Example App

Running the other example app `address-driver-examples` works exactly the same way. This app shows how the SDK can be used to set up Drips and Splits configurations for an Ethereum address, as well as collecting funds that have been streamed or split to that address. Simply follow the same instructions as above, but replace `nft-driver-examples` wherever it appears with `address-driver-examples` to build and run the Address Driver example app. 

Enjoy!