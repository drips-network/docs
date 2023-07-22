---
id: accounts-in-drips
title: Accounts In Drips
---

In this section we take a look at the Drips Protocol's driver-based account model and review the types of user accounts that are available in Drips V2 today.

## Background and Introduction

Drips V2 comes with a driver-based account model, which opens the door to enabling many different types of user accounts to exchange funds with one another in Drips.

What exactly does this mean? It means, for instance, that end-users can choose to stream or Split funds from an account that is directly associated with their Ethereum address, similar to how an ordinary Ethereum wallet works. Or they can choose to create one or more NFT-based accounts that will each have its own separate balance and Drips and Splits configurations, but will all be controlled by the Ethereum address holding the NFTs.

Under the hood, each of these account types is enabled by an account driver which has been added into the Drips smart contracts by the Drips Team, and we expect that even more drivers will be deployed in the future to add support for new types of accounts.

We'll dive into all of the details below, but from a high-level the most important things to keep in mind are:

- **In Drips, multiple types of user accounts are able to control funds, including Ethereum addresses, NFT-based accounts and even GitHub repositories.**
- **This is possible because of Drips' use of an extensible system of "account drivers", which govern the implementations of different account types through smart contracts.**

### What Do We Mean by "Accounts" in Drips?

First, let's briefly review what we mean by an "account". For the purposes of Drips, what we mean is:

- A unique identifier that corresponds one-to-one to an account that can send and receive funds (e.g. using streams or Splits) in the Drips Protocol.
- A way to authenticate critical actions on that account, like withdrawing funds, or setting up new streams and Splits configurations.

With that out of the way, let's take a look at some more of the technical details.

## Drips Account IDs

As mentioned above, every user identity in Drips has an account ID. This account ID is a 32 byte number, where the bytes in the number are used to encode two other "component" IDs, as shown below:

![Diagram 1][u1]

The **Driver ID** is the ID of the driver in the Drips smart contracts, which is responsible for Authenticating and managing funds for the account.

The **Driver Sub-Account ID** is the ID of the account's specific place within the range of IDs managed by the driver, and is used to distinguish it from all of the other accounts managed by that driver.

It's worth noting that most end-users will likely never have to consider such low-level technical details when using Drips, but in some cases, developers will. For developers building on Drips, the important thing to remember about account IDs is that every account ID always points to a single driver in DripsHub (which "manages" that ID, in a sense and authorizes the user's access), as well as a single "sub-account" in the space of accounts managed by that driver, which serves to separate the account's funds and configurations from those of others.

## DripsHub Account Drivers

Now let's dive a bit deeper into what an account driver is and how it works. As discussed above, to allow for flexibility and extensibility in the types of accounts supported in Drips, we introduced the concept of account drivers in Drips V2. Each driver is responsible for managing a range of account IDs where the first 4 bytes of the account ID matches the ID with which the driver is registered in DripsHub.

### AddressDriver

To understand this better through an example, let's consider AddressDriver, which is registered under ID 0 in DripsHub. This driver was the very first driver created by the Drips Team and its purpose is to enable each Ethereum address to manage a unique account in Drips.

We can see how this works by looking at the code in the code in the <a href="https://github.com/radicle-dev/drips-contracts/blob/master/src/AddressDriver.sol" target="_blank">AddressDriver</a> smart contract.

As we can see, AddressDriver contains a `setDrips(...)` method which, when called, "Sets the message sender's drips configuration." 

Looking into the code a bit more, we see that AddressDriver also contains the helper methods `callerAccountId()` and `calcAccountId(address userAddr)`, which translate the message sender's address into a unique account ID within the range of account IDs controlled by AddressDriver.

When `setDrips(...)` is called in AddressDriver, we can see that `callerUserId()` is called to get the account ID for the message sender, and then another call is made to the `setDrips(...)` method in the DripsHub smart contract, passing this calculated account ID as a parameter. The end result is that AddressDriver
translates between the identity feature it's interested in (in this case, the message sender's Ethereum address) and the more general account IDs utilized by
the DripsHub.

### NFTDriver

AddressDriver is probably the easiest driver to understand, because it intuitively matches how we most often think about accounts within Ethereum-based web3 apps. Namely, for most web3 apps we think "I connect with my Ethereum wallet (and its address)". 

However, another driver which may be even more useful to developers looking to build on Drips is <a href="https://github.com/radicle-dev/drips-contracts/blob/master/src/NFTDriver.sol" target="_blank">NFTDriver</a>. Instead of allowing a user to make changes to the "main" Drips account for
their Ethereum address, with NFTDriver, developers can enable users to create an unlimited number of NFT-based accounts that are specific to their app, each with its own account balance and streaming settings. In practice, this kind of functionality is something that many app developers are interested in.

Similar to AddressDriver, we can see how NFTDriver translates between NFTs and Drips account IDs by looking at <a href="https://github.com/radicle-dev/drips-contracts/blob/master/src/NFTDriver.sol" target="_blank">the code</a>. The first thing we notice is that
NFTDriver itself is an ERC-721 contract which can mint and burn new NFT-based Drips accounts based on calls to `mint(...)`, which is callable by anyone.
We can also see that the methods `_useNextTokenId()` and `nextTokenId()`, which are called in turn by `mint(...)`, play similar roles to the role that `callerAccountId()` and `calcAccountId(address userAddr)` play in AddressDriver.

In particular, when `setDrips(...)` and other permissioned methods in NFTDriver are called, the code uses the modifier `onlyHolder(uint256 tokenId)` to check that the
method is being called by the holder of the NFT token. Assuming it is, the call is then passed on to the corresponding method (e.g. in this case `setDrips()`) in the DripsHub smart contract, and the token ID is passed to DripsHub as the account ID of the account identity to make changes for.

Here again, we can see how NFTDriver acts as a kind of translation layer between the account and the authorization features of interest (i.e. "does the sender hold this NFT?") and the more generalized account IDs required by DripsHub. The end result is that developers building on Drips are able to mint new
NFT-based accounts, which will each have their own balances and settings for streaming and splitting, whenever they wish. And each such NFT also corresponds to a single underlying account ID in Drips.

Having looked at AddressDriver and NFTDriver in detail, we can now see how the Drips Protocol's extensible account model enables many different types of accounts to be used, all of which still function similarly and interchangeably at the lowest level of the protocol.

## User Accounts and the Drips Javascript SDK

When interacting with Drips through the <a href="/docs/js-sdk/drips-sdk" target="_blank">Javascript SDK</a>, most of these details are abstracted away from developers by convenience classes that hide the full complexity - including account IDs - for most common actions developers will wish to take. For instance, to build on the SDK and allow an end-user to collect funds streamed to them through Drips, a developer simply creates an [AddressDriverClient][ad] and calls the `collect()` method, which has a signature that looks like this:

> public async collect(tokenAddress: string, transferToAddress: string): Promise<ContractTransaction>

You'll notice that this method signature contains no mention of any account IDs - it's all just ordinary Ethereum addresses (here `transferToAddress` is the Ethereum address that the user wishes to collect their funds to).

On the other hand, for developers looking to build more sophisticated applications on top of Drips, it will likely be necessary for them to have a full understanding
of the Drips account model and in some cases to interact with account IDs rather than simple Ethereum addresses, even if they are building on top of the SDK. 

For instance,
one area where account IDs are heavily used is in the Drips subgraph, where many entity types in <a href="https://github.com/radicle-dev/drips-subgraph/blob/v2/schema.graphql" target="_blank">the subgraph schema</a> refer to account IDs rather than Ethereum addresses and the
corresponding query methods in the [DripsSubgraphClient][ds] in the SDK take accountId-based parameter values and also returns data that includes accountIds. So
developers wishing to work directly with that data in its raw form will need to understand what the account IDs mean and how to unpack them.

At the same time, as time goes on the Drips Team will likely be adding more and more convenience classes and helper code to the SDK to make working with
account IDs as simple and easy as possible, in cases where it is required.

### RepoDriver

TBD

### ImmutableSplitsDriver

TBD

## Wrapping Up

In this section, we did a deep dive into some of the technical aspects of Drips Protocol's flexible driver-based approach to managing user accounts. We also looked at the
drivers the Drips Team shipped with Drips V2, which provide developers and users with the option to set up and manage Drips accounts based on either Ethereum addresses or NFTs. Hopefully you enjoyed this somewhat technical adventure :)

One last note, the Drips Team plans to release more account drivers in the coming months, which should enable entirely new and different kinds of accounts in Drips. Stay tuned for more details!


[ad]: https://github.com/radicle-dev/drips-js-sdk/blob/v2/src/AddressDriver/AddressDriverClient.ts
[ds]: https://github.com/radicle-dev/drips-js-sdk/blob/v2/src/DripsSubgraph/DripsSubgraphClient.ts
[u1]: /img/drips_user_identity-1.png
