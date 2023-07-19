---
id: drips-v2-features
title: Drips v2 Features
---

The goal of Drips v2 is to be the most powerful and feature-complete decentralized, autonomous, and non-custodial protocol for streaming and splitting funds in web3, with the following key features.

<div class="legal-disclaimer">
Disclaimer: The Drips protocol operates in a fully decentralized and autonomous manner, like the Ethereum protocol with which it is integrated. Therefore, no entity or person controls or is in any way responsible for the ongoing operation, running, or functioning of the Drips protocol, nor does any entity or person have custody of any funds raised or streamed in the Drips protocol. You acknowledge that you are solely responsible for any interaction with the Drips protocol and any harm, damage or loss that may occur. There is no warranty, express or implied, for the Drips protocol and/or the software and/or any content. The Drips protocol and in particular the software is of experimental nature and available for use to the public on an “as-is” basis and no representations or warranties of any kind are made with respect to the Drips protocol, its operations and functionality, or its fitness for any specific purpose. BY ACCESSING THE DRIPS PROTOCOL, YOU ACKNOWLEDGE, UNDERSTAND AND AGREE THAT YOU USE THE DRIPS PROTOCOL AND THE SOFTWARE AT YOUR OWN RISK AND YOU ASSUME ANY COSTS, RESPONSIBILITY AND/OR ANY LIABILITY FOR ANY DAMAGES OR LOSSES YOU MAY INCUR, INCLUDING ANY SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE, OR INABILITY TO USE, THE DRIPS PROTOCOL AND/OR THE SOFTWARE.
</div>

### Multi-Token Support (Any ERC20)

Drips v2 allows streaming of any ERC20 token.

### No Wrapped Tokens

Some streaming protocols require users to first wrap their tokens, introducing additional contracts as well as assumptions around trust and solvency. Drips v2 allows users to natively stream any ERC20 token - no wrapped tokens required.

### Gas-Optimized for Many-to-One Streams

Most web3 streaming protocols only allow users to receive streams from small numbers of other users, and cannot practically support designs where hundreds or thousands of subscribers stream to a single recipient. In contrast, Drips v2 is architected to be extremely gas-efficient for both one-to-one streaming and many-to-one streaming use cases at real-world scales, targeting Ethereum mainnet.

### Scheduled Drips

With Drips v2, users and developers have the ability to schedule streams to start and end at specific times in the future, allowing more precision around the total amount of funds streamed.

### Shared Stream Balances

While other streaming protocols require users to top-up each stream that they create, leading to many transactions and high gas costs to maintain streams over time, Drips allows users to fund and top-up multiple streams using a single balance and a single transaction.

### A Flexible Identity Model

Drips v2 also introduces a new, more flexible model for user identity and accounts, that provides additional options for different ways that users can create accounts and engage with the protocol. For example, an NFT or a Git repository can control an account in Drips.

### One Smart Contract / One Graph

Drips uses one smart contract for streaming and splitting, enabling effortless and flexible token routing. For instance, in Drips, when one user streams funds to another, the recipient can set up a Splits configuration to automatically and continuously share a portion of all incoming funds streamed to them with whomever they wish.
