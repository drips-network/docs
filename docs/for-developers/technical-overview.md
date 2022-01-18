---
id: technical-overview
title: Technical Overview
---

## The Software Architecture of Drips

The diagram below provides an overview of how Drips works under the hood. Drips is a 100% decentralized protocol that is built 100% on open source software and tools.
  
![Architecture][ac]
  
In the following sections, we'll dive deeper into each of the different components of Drips and explain the role that each one plays.

Before diving in however, an important point we would like to make is that Drips is entirely modular and there is no requirement for users to interact with the components in the way they are arranged above. For example, the Drips Webapp is offered only as a reference implementation and users are free to create their own web apps or even interact with the smart contracts directly using transactions issued directly using Etherscan or similar tools. Similarly, there is nothing to stop users from querying the Radicle/Drips subgraph and IPFS files using any applications or tools they desire. By designing Drips in this way, the goal of our team has been to build and offer up the world's most flexible and powerful open protocol for recurring payments and fundraising of any kind. With that in mind, our hope is that many future apps, protocols and tools will be able to build on Drips and use it to empower solutions we can't even imagine today.

## Ethereum Contracts

### The DaiDripsHub Smart Contract

<i>DaiDripsHub is part of the <a href="https://github.com/radicle-dev/radicle-drips-hub/blob/master/src/DaiDripsHub.sol">Radicle-Drips-Hub</a> repository.</i>

The <a href="https://github.com/radicle-dev/radicle-drips-hub/">DaiDripsHub</a> smart contract is the "lowest-level" component in the Drips architecture. DaiDripsHub provides extremely general, standalone, functionality for allowing any Ethereum address to schedule one-time or streaming payments to
any other Ethereum address. In this case, "streaming" payments means payments that are made gradually over time -
something that is not possible using the standard Ethereum transactions.

An example of a streaming payment would be scheduling a recurring monthly payment from one user to another. However many other types of streaming payments are also possible and for that reason we believe that DaiDripsHub can be a poweful building block for any web3 app looking to implement transfers of value that happen gradually over time.

### The RadicleRegistry Smart Contract

<i>RadicleRegistry is part of the <a href="https://github.com/radicle-dev/radicle-drips/">Radicle-Drips</a> repository.</i>

The <a href="https://github.com/radicle-dev/radicle-drips/blob/master/src/registry.sol">RadicleRegistry</a> smart
contract builds on DAIDripsHub to allow users to create and deploy DripsToken ERC-721 Smart Contracts (described below). The main purpose of the registry is to ensure that all Communities share the same underlying contract format and utilize the same DaiDripsHub contract, so that they can all Drip to one another interchangably.

### The DripsToken ERC-721 Smart Contracts

<i>DripsToken is part of the <a href="https://github.com/radicle-dev/radicle-drips/">Radicle-Drips</a> repository.</i>

DripsToken is different from DaiDripsHub and RadicleRegistry in that rather than having a singleton contract deployed on Ethereum, a new (proxy) copy of DripsToken is deployed for each user who creates a Community using the RadicleRegistry, or the Drips webapp. Each DripsToken contract (which is also an ERC-721 contract) allows Member Token NFTs to be minted
for a Community, and also makes it clear who the owner of the community is (via the OpenZeppelin Ownable interface). The
owner of each DripsToken contract can interact with it directly to change parameters related to the minting of Member Tokens for the Community.

## The Drips Webapp Front-End

<i>Code for the Dripps webapp can be found in the <a href="https://github.com/radicle-dev/drips-app">Drips-App</a> repository.</i>

The Dripps webapp is a static web application written in HTML, CSS and Javascript. In this case, static means that
the app does not have any dependencies on the server that delivers it, so that if users wish they can download
and run the app on a local webserver (and verify all of the code).

However, for ease of use, a copy of the Drips webapp is also available at <a href="https://drips.radicle.xyz">drips.radicle.xyz</a>

The Drips webapp interacts directly with Ethereum (via Infura), as well as IPFS (via Piñata pinning servers) and
The Graph nodes to query graphQL.

## The Radicle/Drips GraphQL Subgraph

<i>Code for the Radicle/Drips subgraph can be found in the <a href="https://github.com/radicle-dev/radicle-subgraph">Radicle-Subgraph</a> repository.</i>

Drips utilizes a graphQL "subgraph" that contains indexed Ethereum data for efficient querying based on <a href="https://thegraph.com/">The Graph's</a> protocol. For simplicity of curation/indexing, the drips subgraph is part of the same subgraph that is used by Radicle orgs.

For Drips, the subgraph is used solely by the Drips Webapp to allow for efficient calculation of historical values, summary statistics and for queries that scope over multiple Communities or Users at once.

## IPFS and Piñata

Metadata for Communities created on Drips is stored into files on IPFS for simple/efficient storage. Drips uses Piñata as a pinning server for reliable access.


[ac]: /img/drips_tech-architecture.png
