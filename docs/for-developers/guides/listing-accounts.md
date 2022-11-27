---
id: listing-accounts
title: Listing App Accounts
---
*Note: this guide builds on code included with the NFT Driver example app from the Drips SDK repository. Therefore as a prerequisite to being able to follow the instructions in this guide yourself, you will need to first clone the Drips SDK repo and build the NFT Driver example app as described [here][in]. Additionally, you will need to make sure you have completed the instructions in the [previous guide][ca] "Connecting an App-Specific Drips Account", to ensure that you have at least one NFT-based sub-account to show when you try to list your accounts.*

## Go to the 'List an Owner's Accounts' Screen

First, go back to the main screen for the NFT Driver Example App at `http://localhost:5173/`. From there, click the `List an Owner's Accounts` link on that page. In the section titled "List an Owner's Accounts", there is a text box labeled "Owner's Address". Copy and paste your Ethereum address into this box (or a different Ethereum address, if you want to see the accounts owned by an Ethereum address other than your own) and click "Get Accounts". Assuming that the address you entered controls at least one Drips NFT-based sub-account, you will see those account numbers displayed below, like this:

![Listing 1][l1]

The NFT-based Drips "account numbers" that you see listed here are actually Drips user IDs (see the [User Identities in Drips][ui] section for a full discussion), which each have thieir own token balances as well as their own Drips and Splits configurations. In later guides, we will see how apps can use the SDK to allow end users to perform actions on these accounts like topping-up, setting Drips and Splits and collecting.

However before moving on, let's take a look at the code in the NFT Driver Example App that allowed us to list the sub-accounts owned by an address. Open the file `nft-driver-examples/src/routes/accounts/ListAccounts.svelte` in your favorite editor and scroll down to the `getAccounts(owner: string)` function, which looks like this:

![Listing 2][l2]

[in]: installing.html
[ca]: creating-a-drips-account.html
[l1]: /img/nft_example_app_listing1.png
[ui]: /the-protocol/user-identities-in-drips.html






