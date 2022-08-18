---
id: drips-v02-features
title: Drips v0.2 Features
---

The goal of Drips v0.2 is to deliver the most powerful and feature-complete protocol for streaming funds in web3, with the following
key features:

### Multi-Token Support (Any ERC20)

In Drips v0.1, only DAI was supported. Drips v0.2 allows streaming of any ERC20 token.

### No Wrapped Tokens

Some streaming protocols require users to first wrap thier tokens, introducing additional contracts as well as assumptions around trust and solvency. 
Drips v0.2 allows users to natively stream any ERC20 token -- no wrapped tokens required.

### Gas-Optimized for Many-to-One Subscriptions and Memberships

In reality, most web3 streaming protocols only allow users to receive streams from small numbers of other users, and cannot practically support designs like subscription memberships at the scale of hundreds or thousands of subscribers. However Drips v0.2, by contrast, is architected to be extremely gas-efficient for both 1:1 streaming and many-to-one streaming use cases (like subscription memberships) at real-world scales, targeting Ethereum mainnet.

### Scheduled Drips

With Drips v0.2, users and developers have the ability to schedule Drips to start and end at specific times in the future, avoiding the need for transaction
scheduling and allowing for more precision around the total amount of funds streamed.

### Shared Stream Balances

Some streaming protocols require users to independently fund and top-up each stream that they create, leading to many transactions and high gas costs
to maintain streams over time. Drips allows users to fund and top-up multiple streams using a single account balance and a single transaction.

### Hub Identities

Drips v0.2 also introduces a new, more flexible model for user identity that provides more powerful options for app developers around how end-user accounts
are created and managed in Drips.




