---
id: drips-v2-features
title: Drips v2 Features
---

The goal of Drips v2 is to deliver the most powerful and feature-complete protocol for streaming and splitting funds in web3, with the following key features:

### Multi-Token Support (Any ERC20)

Drips v2 allows streaming of any ERC20 token.

### No Wrapped Tokens

Some streaming protocols require users to first wrap their tokens, introducing additional contracts as well as assumptions around trust and solvency. Drips v2 allows users to natively stream any ERC20 token - no wrapped tokens required.

### Gas-Optimized for Many-to-One Subscriptions and Memberships

Most web3 streaming protocols only allow users to receive streams from small numbers of other users, and cannot practically support designs where hundreds or thousands of subscribers stream to one creator. In contrast, Drips v2 is architected to be extremely gas-efficient for both one-to-one streaming and many-to-one streaming use cases (like subscription memberships) at real-world scales, targeting Ethereum mainnet.

### Scheduled Drips

With Drips v2, users and developers have the ability to schedule Drips to start and end at specific times in the future, avoiding the need for transaction
scheduling and allowing for more precision around the total amount of funds streamed.

### Shared Stream Balances

While other streaming protocols require users to independently fund and top-up each stream that they create, leading to many transactions and high gas costs
to maintain streams over time, Drips allows users to fund and top-up multiple streams using a single account balance and a single transaction.

### A Flexible Identity Model

Drips v2 also introduces a new, more flexible model for user identity that provides additional options for app developers around how end-user accounts are created and managed in Drips.

### One Smart Contract / One Payment Graph

Drips uses one smart contract for streaming *and* splitting, enabling effortless and flexible token routing. For instance, in Drips, when one user streams funds to another, the recipient can set up a Splits configuration to automatically and continuously share a portion of all incoming funds streamed to them with whomever they wish.


