---
id: topping-up
title: Topping Up
---

*Note: this guide builds on code included with the NFT Driver example app from the Drips SDK repository. Therefore as a prerequisite to being able to follow the instructions in this guide yourself, you will need to first clone the Drips SDK repo and build the NFT Driver example app as described [here][in]. Additionally, you will need to make sure you have completed the instructions in the [guide][ca] "Creating an App-Specific Drips Account", to ensure that you have at least one NFT-based sub-account available for you to top-up with funds.*

## Look Up an NFT Sub-Account ID You Control Using the 'List an Owner's Accounts' Screen

This guide will walk you through how to "top up" a Drips NFT-based sub-account with funds using the SDK. "Topping up" means adding funds to the account so that you can Drip or Give funds from that account to others. In order to top up, you will first need the NFT account ID (user ID) of the account you wish to add funds to. To look this up, please follow the instructions in the previous guide, [Listing Accounts][la]. After listing accounts for your connected wallet, make sure to copy one of the account numbers and paste it somewhere so that you have it available for reference (e.g. in an editor on your local computer).

## Make Sure You Have Some of At Least One ERC-20 Token in Your Wallet on Goerli

In order to top up funds in your Drips account, you will need to have the funds that you wish to add available in your wallet on the Goerli testnet. Practically speaking, this means you will need to have some of at least one ERC-20 token available in your wallet.

If you don't have any tokens already, one way to get some is to buy them on Uniswap. To do this, go to:

https://app.uniswap.org/

You can then exchange Goerli ETH for an ERC-20 token of your choice (e.g. DAI). **When you do this, make sure to double-check that your
wallet and the dropdown on the Uniswap webpage are both set to "Goerli".** You should be exchanging a small amount of testnet tokens only, for the purposes of testing. We are *not* advising you to buy tokens using Uniswap on mainnet.

After you swap for some of the ERC-20 token on Goerli, you may be prompted by the site asking you if you wish to add the token to your list of tracket assets (e.g. this happens in Metamask at least). We suggest you add the token to your wallet so that you can easily look up the ERC-20 contract address of the tokens you hold, which you will need in the next step.

## Approve the ERC-20 Token and Top Up Funds Using the NFT-Based Sub-Account ID

Now you're ready to top-up your account with some funds! To do so, make sure that the NFT Driver example app is running, and navigate back to the "home" screen at `http://localhost:5173/`. From there, click on the `TopUp` link. You should see a page like this:

![Topup 1][t1]

Before you can top up funds, you will need to first [approve][ap] the DripsHub smart contract to be able to transfer the type of ERC-20 tokens that you wish to stream from being under the control of your wallet to being controlled by the DripsHub smart contract. Note that a given Ethereum address/wallet will only have to do this step once for each ERC-20, so if you have done it in the past it will not be required to do it again the next time you wish to top up with the same ERC-20 token.

To approve the DripsHub smart contract, enter the ERC-20 contract address of the token that you are planning to top up with (this should be the contract address of the same token that you swapped for on Uniswap above if you used Uniswap to get some ERC-20 tokens). If you are unsure what the contract address for the token is, you should be able to find this out by inspecting your account using [the goerli version of Etherscan][ge] or using your wallet (in Metamask you can find details by clicking on a token then clicking on the vertical "..." button and choosing "Token Details").

Paste the contract address into the box and click the "Approve" button. You should see something like this (the specific contract address will likely be different):

![Topup 2][t2]

And then if it succeeds, this:

![Topup 3][t3]



TODO -- The rest of this guide is still under construction.

[ap]: https://ethereum.org/en/developers/tutorials/transfers-and-approval-of-erc-20-tokens-from-a-solidity-smart-contract/
[t1]: /img/nft_example_app_topup1.png
[t2]: /img/nft_example_app_topup2.png
[t3]: /img/nft_example_app_topup3.png
[ge]: https://goerli.etherscan.io/



[la]: listing-accounts.html
