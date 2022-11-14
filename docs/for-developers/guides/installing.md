---
id: installing
title: Installing the SDK and Running the Example Apps
---
**Install Using NPM or Yarn**
You can include the Drips SDK directly into your project's package.json as a dependency by using the command:

`npm install https://github.com/radicle-dev/drips-js-sdk#v2`

or

`yarn add https://github.com/radicle-dev/drips-js-sdk#v2`

**Clone the SDK Repo and Run the Address Driver Example App**

The SDK ships with two fully self-contained example web applications that illustrate how Drips can be incorporated into a web app. To get started exploring the Drips SDK through these examples, we recommend first cloning repository to your local machine:

`git clone https://github.com/radicle-dev/drips-js-sdk.git`

The first example app is `address-driver-examples`. This app shows how the SDK can be used to set up Drips and Splits configurations for an Ethereum address, as well as collecting funds that have been streamed or split to that address.
To run it, from the root directory of the SDK project, first change directory to the directory of the example:

`cd address-driver-examples`

Next, install the project dependencies for the example app using npm:

`npm install`

Finally, to start the web-based Drips SDK example locally run:

`npm run dev`

Open your web browser and go to localhost. You should see a simple UI that will let you explore most of the Drips SDK functionality.

A few notes:

(1) Take a look at the code in examples-app/src/Header.svelte to see how this example web app is utilizing the AddressDriverClient and the DripsSubgraphClient, and play around with the code in all *.svelte files in src/components.

(2) You will need to click on the Connect button in the UI to connect your MetaMask or WalletConnect wallet before the other functionality will be enabled.

(3) There is a hosted version of the examples-app here.

**Run the NFT Driver Example App**

Running the other example app `nft-driver-examples` works exactly the same way. Simply follow the same instructions as above, but replace `address-driver-examples` wherever it appears with `nft-driver-examples` to build and run the NFT examples app. This app shows how web apps can build on the SDK to allow an Ethereum address to create an unlimited number of NFT-based Drips "sub-accounts", each of which has its own account balance and Drips and Splits configuration distinct from the Ethereum address that controls it.

Enjoy!