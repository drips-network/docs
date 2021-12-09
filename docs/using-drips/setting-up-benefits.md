---
id: setting-up-benefits
title: Setting Up Benefits
---

This guide is intended for creators or developers who have set up a Community on
Drips and are interested in offering benefits to members.

> If you're a community member who is interested in how to use benefits offered
by a community that you hold a member token for, you should instead head over to
our [Accessing Benefits][ab] guide to learn more.

Let's dive into how to set up benefits for your Community. 
This is exciting, because it's a way for you as a creator or developer to give back
and incentivize the community members who support you!

This guide will provide high-level details on how to set up two common types of 
benefits that you might wish to offer your members:

(1) access to a gated (private) channel on the community's Discord server (if one exists)

(2) access to voting on community issues and polls in Snapshot.

## Understanding Capabilities and Limitations of Benefits

Before we explain how to set up benefits, there are a couple of points about benefits that are
good to consider.

First, offering benefits is entirely optional and not all creators / Communities will choose to do so. Users
can see a description of the benefits offered as part of the process of [purchasing a membership][pu]
and should carefully read the description there to understand the benefits being offered before completing
the purchase of a membership.

Second, offering access to a resource outside of Drips (e.g. a Discord server or Snapshot space), as a
benefit, requires that the project creator be willing to set up and maintain that resource. This guide explains 
how to connect Drips memberships to a Discord Server or a Snapshot Space, but a full discussion of how to
set up, maintain and use those resources is beyond the scope of this guide.

Finally, many other types of benefits are possible beyond those outlined in this guide. All benefits
in Drips are governed through ownership of Member Token NFTs, so benefits can literally be anything 
that ownershhip of an NFT can unlock. With that in mind, be on the lookout for more web2 and web3
apps to offer more types of resources and benefits that can be governed by NFTs in the near future!

## Benefit: Set Up Access to a Private Channel on Discord

If a Community has a [Discord][di] server (or is interested in setting up a Discord server) one type of 
benefit that the creator can offer members is access to one or more private channels on that server.
The access will be governed by holding a member token for the Community, so that any user who holds a
token will be able to automatically gain access the channel. This "gated" access is managed using a 
Discord bot devloped by [Collab.land][cl].

You can set up gated access to your Community's Discord by taking the following steps:

1. Create your Discord server, install the bot and set up private channels.

- Follow instructions [here][s1].

- If your Community already has a Discord server, you can skip the step related to creating
a new server and use your existing server instead.

2. Configure token-permissioned roles using the Collab.land bot.

- Follow instructions [here][s2].
- When asked to choose a network, you should choose "Mainnet".
- When asked to choose a "service to configure", you should choose "Token Permissioned Role".
- When asked to choose a token type, choose "ERC-721"
- In step 4 when entering parameters:

  - For the token contract address, you will need to use the contract address specific to your Community.
  You can find this by navigating to your drips Community page in the web app and finding the address
  after the "/" at the end of the URL
  
![Find Contract Address][s3]

  - For the min amount of tokens, you should choose 1

  - For the max amount of tokens, you should choose -1

  - For the role name, you should choose the name of the Discord role that you would like to grant to your
  token holders. Note that this should *not* be the Collab.land bot role, but rather should be one of the
  other Discord roles you created in step (1) above and which has access to the private channels that you
  wish to grant to your token-holding members.

  - Leave the token ID blank.

  - Finally, select "Add Role" to complete the process. 

- You're all set! Token holders should now be able to gain access the private channel. Note that in order to gain access, they will need to enter `!join` in any public channel and follow the steps indicated by the bot to prove
that they hold a token.

## Benefit: Set Up Access to a Snapshot Space

[Snapshot][sn] is an off-chain web app that allows the creators of tokens to create public polls on any topic,
which token-holders can vote on at no cost. If you are not familiar with Snapshot, we suggest that you
familiarize yourself with it by browsing the [Snapshot documentation][sd] before proceeding.

A type of benefit that Drips Communities can offer their token-holding members is access to a Snapshot space
for the Community. This space could be used for voting on any kind of community issue that the creator can imagine. 
For instance, an open source software projeect might create a poll around which new features should be prioritized
for development.

Note that setting up a space in Snapshot does require the Community to own and configure an ENS name -- a process that can cost several hundred USD worth of ETH when gas prices are high.

To set up a Snapshot space and connect it to your Community, please complete the steps in the [Create a space][cs] 
guide in the Snapshot docs. 

- Note that when you come to the "Strategies" part of step 3, you will want to choose the strategy '' (TBD). For
the "address" parameter, you will want to enter the address of your Community. You can find this by navigating to your drips Community page in the web app and looking for the address after the "/" at the end of the URL
  
![Find Contract Address][s3]

That's it! Your snapshot spacee should be all set up. Head over to Snapshot and [create a proposal][cp] and let your
community members know that they can vote on it!

[ab]: using-drips/accessing-benefits.md
[pu]: using-drips/purchase-a-membership.md
[di]: https://discord.com/
[cl]: https://collab-land.gitbook.io/collab-land/
[s1]: https://collab-land.gitbook.io/collab-land/bots/discord
[s2]: https://collab-land.gitbook.io/collab-land/bots/discord/token-permissioned-roles
[s3]: /img/drips_setup-benefits1.png
[sn]: https://snapshot.org/#/
[sd]: https://docs.snapshot.org/
[cp]: https://docs.snapshot.org/proposals/create
