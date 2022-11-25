---
id: installing
title: Installing the SDK and Running the Example App
---
## Installing the SDK
You can include the Drips SDK directly into your project's package.json as a dependency by using the command:

`npm install https://github.com/radicle-dev/drips-js-sdk`

or

`yarn add https://github.com/radicle-dev/drips-js-sdk`

## Cloning the SDK Repo and Running the NFT Driver Example App

The SDK ships with a fully self-contained example web app that illustrates how NFT-based sub-accounts can be created and managed. To get started exploring the Drips SDK through this example, you will first need to clone the repository to your local machine:

`git clone https://github.com/radicle-dev/drips-js-sdk.git`

The example app we will be running is `nft-driver-examples`. This app shows how web apps can build on the SDK to allow an Ethereum address to create an unlimited number of NFT-based Drips "sub-accounts", each of which has its own account balance and Drips and Splits configuration distinct from the Ethereum address that controls it. To run the NFT Driver App, from the root directory of the SDK project, first change directory to the directory of the example:

`cd nft-driver-examples`

Next, install the project dependencies for the example app using npm:

`npm install`

Finally, to start the web-based Drips SDK example locally run:

`npm run dev`

Now open your web browser and go to `localhost:5173`.

You should see a simple UI that will let you explore the Drips SDK functionality related to creating and managing NFT-based sub-accounts. If you do, then the NFT Driver example app is running successfully. Nice work!

In the next guide, we'll take a look at how to connect a wallet to the NFT Driver example app.