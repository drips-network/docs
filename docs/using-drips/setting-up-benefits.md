---
id: setting-up-benefits
title: Setting Up Benefits
---

This guide is intended for a creator or developer who has set up a Community on
Drips and is interested in offering benefits to their members.

> If you're a community member who is interested in how to use benefits offered
by a community that you hold a member token for, you should instead head over to
our [Accessing Benefits][ab] guid to learn more.

With that out of the way, let's dive into how to set up benefits for your Community! 
This is exciting, because it's a way for you as a creator or developer to give back
and incentivize the community members who support you!

This guide will provide high-level details on how to set up two common types of 
benefits that you might wish to offer to your members:

(1) access to a gated (private) channel on the community's Discord server (if one exists) and

(2) access to voting on community issues and polls in Snapshot.

## Understanding Capabilities and Limitations of Benefits

A few important notes about member benefits:

First, offering benefits is entirely optional and not all creators / Communities will choose to do so. Users
can see a description of the benefits offered as part of the process of [purchasing a membership][pu]
and should carefully read the description there to understand the benefits being offered before completing
the purchase of a membership.

Second, offering access to a resource outside of Drips (e.g. a Discord server or Snapshot space) as a
benefit requires that the project creator be willing to set up and maintain that resource. This guide 
only explains how to connect Drips memberships to Discord and Snapshot. A full discussion of how to
set up, maintain and use them is beyond the scope of this guide, and users should pursue product-specific
documentation for complete details.

## Benefit: Set Up Access to a Private Channel on Discord

If a Community has a [Discord][di] server, one type of benefit that the creator can offer to members is 
access to one or more private channels on that server, governed by holding a member token for the Community.

The gated access can be set up and managed using a Discord bot devloped by [Collab.land][cl].

Setting up the bot consists of the following steps:

1. Create your discord server, install the bot and set up private channels.

- Follow instructions [here][s1].
- Note that if your Community already has a Discord server, you should skip the step related to creating
a new server and use your existing server instead.

2. Configure token-permissioned roles using the Collab.land bot.

- Follow instructions [here][s2].
- When asked to choose a network, you should choose "Mainnet".
- When asked to choose a "service to configure", you should choose "Token Permissioned Role".
- When asked to choose a token type, choose "ERC-721"
- In step 4 when entering parameters:

  - For the token contract address, you will need to use the contract address specific to your Community.
  You can find this by navigating to your drips Community page in the web app and looking for the address
  after the "/" at the end of the URL
</br>  
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
</br>  
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
