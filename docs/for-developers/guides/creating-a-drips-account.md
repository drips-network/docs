---
id: creating-a-drips-account
title: Creating an App-Specific Drips Account
---

*Note: this guide builds on code included with the NFT Driver example app from the Drips SDK repository. Therefore as a prerequisite to being able to follow the instructions in this guide yourself, you will need to first clone the Drips SDK repo and build the NFT Driver example app as described [here][in]. Additionally, you will need to follow the instructions in the [previous guide][cw] "Connecting a Wallet" to ensure that you have a wallet connected before you try to create a new account.*

## Start the NFT Example App and Connect a Wallet

Assuming that the NFT Example App is running and you have a wallet connected (as described in the previous two guides), you should see something like this:

![Connect 3][c3]

<br>
Click on the link "Create a New Account". On the next screen, in the section titled "Create a New Account" you should copy and paste the address for the
wallet you have connected into the "Transfer to Address" box and then click the "Mint" button. You will be prompted to sign a transaction:
<br> 
<br>

![Minting 1][m1]

<br>
The text in the box at the bottom of the "Create a New Account" section will change to say "Minting...." After some time, if the transaction is successful, that
text should change to look like this:
<br> 
<br>

![Minting 2][m2]

Nice! An NFT-based sub-account has been created for you by the NFT Driver Example App and is under the full control of your Ethereum address. This account now functions as a standalone Drips account, with its own account balances, as well as its own Drips and Splits configurations, and has been "associated" with the NFT Driver Example App. We'll discuss more about this association below, but first let's take a look at the code from the Example app that created this new account.

Open the file `nft-driver-examples/src/routes/accounts/MintNewAccount.svelte` in your favorite editor and scroll down to the `mint()` function, which looks like this:

![Minting 3][m3]

Here we can see that when the Mint button is clicked in the UI, the function `safeCreateAccount(transferToAddress)` is called on the instance of the NFTDriverClient which was created when we initially [connected our wallet][cw]. We can also see that this is an async function call, which will return the ID
of the new sub-account when the minting of the sub-account NFT is complete. It's that simple. With just a single call to the SDK, a user of your app can
create a new Drips-account for use with your application.

This brings us back to this idea of Drips accounts that are "associated" with a specific app, which was mentioned earlier. The design of Drips allows 3rd-party developers to create applications that build on the Drips protocol and allow end-users (i.e. users of that app) to stream and split funds in ways that are specific to the app, but at the same time allow the end user rather than the app developer to retail full self-sovereign control of the funds.

The way that this works is that when the end user arrives at your web app, you can use the `safeCreateAccount(transferToAddress)` SDK function shown in this guide to mint an NFT-based sub-account that will be owned by the end-user, but which will manage all of the Drips-related functionality that you wish to incorporate into your web3 app. This sub-account will be marked as "associated" with your app, so that it will be segregated from the end-user's main Drips account (which is managed through AddressDriver) as well as other web3 apps building on Drips, which will have their own, separate, NFT-based sub accounts.

[TODO: exlpain how this association is managed through metadata once the new metadata app-association code has been added to the SDK]

[in]: installing.html
[cw]: connecting-a-wallet.html
[c3]: /img/nft_example_app_connected.png
[m1]: /img/nft_example_app_minting1.png
[m2]: /img/nft_example_app_minting2.png
[m3]: /img/nft_example_app_minting3.png



