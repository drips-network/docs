---
id: create
title: Create an Account
---

Creating a new account in the Drips protocol means creating a new user ID for your end user or application to control. User IDs are created using identity drivers. See [User Identities in Drips][ui] for a more detailed discussion of how user IDs and identity drivers work in Drips.

Most developers building on Drips will likely wish to use NFT-based sub-accounts for their users. To build on NFT-based sub-accounts, you will first need to [create a NFTDriverClient and a DripsSubgraphClient][is].

Once you have a NFTDriverClient, you can create a new account by calling `NFTDriverClient.createAccount()`:

```
createAccount(
    transferToAddress: string,
    associatedApp?: BytesLike,
    userMetadata: UserMetadataStruct[] = []
	): Promise<string>
```
Take a look at <a href="https://drips-js-sdk-api.netlify.app/classes/nftdriverclient#createAccount" target="_blank">the method's documentation</a> to understand what each parameter represents.

Calling this method creates a new NFT-based sub-account and transfers that NFT to the Ethereum address that was given in the `transferToAddress` parameter to the `createAccount` function call.

As soon as the NFT is minted, the user who controls `transferToAddress` will control the new Drips sub-account and can take actions like adding funds, setting Drips and Splits for the account and so on.

Account creation works differently for each identity driver. For example with `AddressDriver`, each Ethereum address always has exactly one Drips account associated with it and that account is already "created" by default for each address. In other words, no explicit action is required to create an account for an Ethereum address in `AddressDriver`. Instead, a user with a connected wallet can simply use <a href="https://drips-js-sdk-api.netlify.app/classes/addressdriverclient" target="_blank">AddressDriverClient</a> to start adding funds and/or configuring Drips and Splits for the account that corresponds to their address.

[ui]: /docs/the-protocol/user-identities-in-drips
[is]: /docs/for-developers/initialize-sdk
