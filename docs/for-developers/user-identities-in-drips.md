---
id: user-identities-in-drips
title: User Identities In Drips
---

In this section we take a look at the Drips Protocol's driver-based user identity model and review the two types of user identities, Etherem addresses and NFT-based sub accounts, that are available in Drips V2 today.

## Background and Introduction

When we started developing the Drips Protocol, a question came up around which kinds of user identities should be able to control an "account"
in Drips. Different streaming protocols have chosen very different answers this question - with some protocols deciding, for instance, that an account will always correspond one-to-one with an Ethereum address, and others deciding that an account will always be governed by an NFT.

After looking at several of these options however, we found that it was hard for us to commit to a single approach. In certain cases, for example, we saw a clear benefit to being able to have a Drips account associated directly with an Ethereum address, while in other cases it seemed clear that NFT-based accounts could be very advantageous. In addition, we also explored some new ideas for radically different types of user identities, like accounts that could be governed by a Twitter handle or Github username, which have not been available in streaming protocols up to this point.

Therefore, after reviewing a number of these identity designs, we decided that it didn't make sense for us to choose just a single type to support in Drips. Instead, we engineered a solution that supports multiple "identity drivers", which allow many different types of user identities, including Ethereum addresses, NFT-based accounts and more. While this approach gives a lot of power and flexibility to users and developers, with great power comes great complexity, so we'll be spending the rest of this section diving into the details.

From a high-level though, the most important things to keep in mind are:

- **In Drips, multiple types of user accounts are able to control funds, including Ethereum addresses and NFT-based accounts.**
- **This is possible because of DripsHub's use of an extensible system "identity drivers", which govern the implementations of different user types through smart contracts.**

### What Do We Mean by "User Identity" in Drips?

First, let's briefly review what we mean by a "user identity" here, since the word "identity" can mean
different things in different contexts. For the purposes of Drips, what we mean by a user identity is:

- A unique identifier that corresponds one-to-one to an account that can send and receive funds (e.g. using Drips or Splits) in the Drips Protocol.
- A way to authenticate critical actions on that account, like withdrawing funds, or setting up new Drips and Splits configurations.

With that out of the way, let's take a look at some more of the technical details.

## Drips User IDs

As mentioned above, every user identity in Drips has a user ID. This user ID is a 32 bit number, where the bits in the number are used to encode two other "component" IDs, as shown below:

![Diagram 1][u1]

The **Driver ID** is the ID of the driver in DripsHub which is responsible for Authenticating and managing funds for the user (and their account).

The **Driver Sub-Account ID** is the ID of the user's specific sub-account within the range of IDs managed by the driver, and is used to distinguish it from all of the other user accounts managed by that driver.

It's worth noting that most end-users will likely never have to consider such low-level technical details when using Drips, but in some cases, developers will. For developers building on Drips, the important thing to remember about user IDs is that every user ID always points to a single driver in DripsHub (which "manages" that ID, in a sense and authorizes the user's access), as well as a single "sub-account" in the space of accounts managed by that driver, which serves to separate the user's funds and configurations from those of others.

## DripsHub Identity Drivers

Now let's dive a bit deeper into what an identity driver is and how it works. As discussed above, to allow for flexibility and extensibility in the types of user identities supported in Drips, we introduced the concept of identity drivers in Drips V2. Each driver is responsible for managing a range of user IDs where the first 4 bytes of the user ID matches the ID with which the driver is registered in DripsHub.

### AddressDriver

To understand this better through an example, let's consider AddressDriver, which is registered under ID 0 in DripsHub. This driver was the very first driver created by the Drips Team and its purpose is to enable each Ethereum address to manage a unique user ID and account in Drips.

We can see how this works by looking at the code in the code in the <a href="https://github.com/radicle-dev/drips-contracts/blob/master/src/AddressDriver.sol" target="_blank">AddressDriver</a> smart contract.

As we can see, AddressDriver contains a `setDrips(...)` method which, when called, "Sets the message sender's drips configuration." 

Looking into the code a bit more, we see that AddressDriver also contains the helper methods `callerUserId()` and `calcUserId(address userAddr)`, which translate the message sender's address into a unique user ID within the range of user IDs controlled by AddressDriver.

When `setDrips(...)` is called in AddressDriver, we can see that `callerUserId()` is called to get the user ID for the message sender, and then another call is made to the `setDrips(...)` method in the DripsHub smart contract, passing this calculated user ID as a parameter. The end result is that AddressDriver
translates between the identity feature it's interested in (in this case, the message sender's Ethereum address) and the more general user IDs utilized by
the DripsHub.

### NFTDriver

AddressDriver is probably the easiest driver to understand, because it intuitively matches how we most often think about user identity within Ethereum-based web3 apps. Namely, for most web3 apps we think "I connect with my Ethereum wallet (and its address)". 

However, another driver which may be even more useful to developers looking to build on Drips is <a href="https://github.com/radicle-dev/drips-contracts/blob/master/src/NFTDriver.sol" target="_blank">NFTDriver</a>. Instead of allowing a user to make changes to the "main" Drips account for
their Ethereum address, with NFTDriver, developers can enable users to create an unlimited number of NFT-based sub accounts that are specific to their app, each with its own account balance and streaming settings. In practice, this kind of functionality is probably more what most app developers are interested in.

Similar to AddressDriver, we can see how NFTDriver translates between NFTs and Drips user IDs by looking at <a href="https://github.com/radicle-dev/drips-contracts/blob/master/src/NFTDriver.sol" target="_blank">the code</a>. The first thing we notice is that
NFTDriver itself is an ERC-721 contract which can mint and burn new NFT-based Drips accounts based on calls to `mint(...)`, which is callable by anyone.
We can also see that the methods `_useNextTokenId()` and `nextTokenId()`, which are called in turn by `mint(...)`, play similar roles to the role that `callerUserId()` and `calcUserId(address userAddr)` play in AddressDriver.

In particular, when `setDrips(...)` and other permissioned methods in NFTDriver are called, the code uses the modifier `onlyHolder(uint256 tokenId)` to check that the
method is being called by the holder of the NFT token. Assuming it is, the call is then passed on to the corresponding method (e.g. in this case `setDrips()`) in the DripsHub smart contract, and the token ID is passed to DripsHub as the user ID of the user identity to make changes for.

Here again, we can see how NFTDriver acts as a kind of translation layer between the identity and authorization features of interest (i.e. "does the sender hold this NFT?") and the more generalized user IDs required by DripsHub. The end result is that developers building on Drips are able to mint new
NFT-based sub-accounts, which will each have their own balances and settings for streaming and splitting, whenever they wish. And each such NFT also corresponds to a single underlying user ID (and account) in DripsHub.

Having looked at AddressDriver and NFTDriver in detail, we can now see how the Drips Protocol's identity model enables many different types of identities (and accounts) to be used, all of which still function similarly and interchangably at the lowest level of the protocol.

## User Identities and the Drips Javascript SDK

When interacting with Drips through the <a href="/docs/js-sdk/drips-sdk" target="_blank">Javascript SDK</a>, most of these details are abstracted away from developers by convenience classes that hide the full complexity - including user IDs - for most common actions developers will wish to take. For instance, to build on the SDK and allow an end-user to collect funds streamed to them through Drips, a developer simply creates an [AddressDriverClient][ad] and calls the `collect()` method, which has a signature that looks like this:

> public async collect(tokenAddress: string, transferToAddress: string): Promise<ContractTransaction>

You'll notice that this method signature contains no mention of any user IDs - it's all just ordinary Ethereum addresses (here `transferToAddress` is the Ethereum address that the user wishes to collect their funds to).

On the other hand, for developers looking to build more sophisticated applications on top of Drips, it will likely be necessary for them to have a full understanding
of the Drips user identity model and in some cases to interact with user IDs rather than simple Ethereum addresses, even if they are building on top of the SDK. 

For instance,
one area where user IDs are heavily used is in the Drips subgraph, where many entity types in <a href="https://github.com/radicle-dev/drips-subgraph/blob/v2/schema.graphql" target="_blank">the subgraph schema</a> refer to user IDs rather than Ethereum addresses and the
corresponding query methods in the [DripsSubgraphClient][ds] in the SDK take userId-based parameter values and also returns data that includes userIds. So
developers wishing to work directly with that data in its raw form will need to understand what the user IDs mean and how to unpack them.

At the same time, as time goes on the Drips Team will likely be adding more and more convenience classes and helper code to the SDK to make working with
user IDs as simple and easy as possible, in cases where it is required.

## Wrapping Up

In this section, we did a deep dive into some of the technical aspects of Drips Protocol's flexible driver-based approach to managing user identity. We also looked at the two
drivers the Drips Team shipped with Drips V2, which provide developers and users with the option to set up and manage Drips accounts based on either Ethereum addresses or NFTs. Hopefully you enjoyed this somewhat technical adventure :)

One last note, that the Drips Team plans to release more identity drivers in the coming months, which should enable entirely new and different kinds of user accounts to work with Drips. Stay tuned for more details!


[ad]: https://github.com/radicle-dev/drips-js-sdk/blob/v2/src/AddressDriver/AddressDriverClient.ts
[ds]: https://github.com/radicle-dev/drips-js-sdk/blob/v2/src/DripsSubgraph/DripsSubgraphClient.ts
[u1]: /img/drips_user_identity-1.png
