---
id: overview
title: Overview
---

There are three ways in which funds can be flowing in Drips protocol:

- **Dripping** is moving funds between users over a period of time at a fixed per-second rate.
- **Giving** is transferring an amount of funds between users immediately.
- **Splitting** is transferring a fixed fraction of funds received by one user to another user.

# Dripping

Dripping sends funds over a period of time.
To start dripping you need to configure a list of drips receivers and top up your dripped balance.
The funds flow will start automatically and will stop when the balance runs out.
You can change the balance at any time, either top up more funds
or withdraw any amount from what hasn't been dripped yet.
The balance is updated every second, and there's no way to withdraw already dripped funds.
The list of receivers can be changed at any time with an immediate effect, but it'll never
affect the past, only the dripping behavior during the present timestamp and in the future.
For each ERC-20 token every user has a separate drips configuration and a separate balance,
so you can configure dripping different tokens independently.

The drips receivers list contains between 0 and 100 entries.
By default, every user has an empty receivers list.
An empty list means that there are no receivers, so nothing will be dripped to anybody.
The list must be sorted, and it can't contain duplicate entries.
Only drips receivers on your currently set list are receiving drips from you,
so adding a receiver immediately starts, and removing them immediately stops dripping to them.
Every entry consists of a receiver user ID and a dripping rate,
which is expressed in tokens per second.
To increase precision the amount dripped every second has 9 extra decimals,
so you express dripping rates with precision higher than one full token per second.
For example, you can drip 2.5 tokens per second or 0.001 tokens per second.
See [Dripping Fractional Amounts][fractional] for more details.
Optionally, each drips receivers list entry may contain a start timestamp and a maximum duration.
If the start timestamp is in the future, dripping will be postponed until that timestamp.
If the duration is set, dripping will stop after it elapses.
The duration is relative to the start timestamp, or, if the start timestamp isn't set,
the timestamp when the drips configuration is updated.

Both balance management and receivers list updates are done by calling
the `setDrips` function of the [driver][drivers] managing your user ID.
You can't change the balance without updating the drips receivers list,
but it's fine if both the old and the new lists are identical.
You also can't update the drips receivers list without changing the balance,
but it's fine if the balance change is zero.

For details about how dripping is implemented see [Drips Inner Workings][inner].

# Giving

Giving transfers an amount of tokens to the chosen user.
It's different from dripping because it's a one-time, immediate operation,
and there's no configuration involved.
The funds are transferred into the protocol while giving,
there's no separate balance to put funds into before giving.

Giving is done by calling the `give` function of the [driver][drivers] managing your user ID.

# Splitting

Splitting divides received funds and transfers them to other users.
To split, you need to configure a list of splits receivers.
Next, all funds going through the [splitting](#split) step
will be distributed according to that configuration.
Each user has a single splits receivers list which is applied to all ERC-20 tokens,
so all received funds are split in the same way.

Updating the splits configuration doesn't split funds that haven't been split yet.
This means that unless funds are actually split, there's no guarantee that the current configuration
will be used to split the funds, the user who received the funds may route them however they feel.
If a splits configuration needs to be trusted to never change,
`ImmutableSplitsDriver` may be used to create a dummy user who's only able to set
their splits configuration once and can't change it afterward.

The splits receivers list contains between 0 and 200 entries.
By default, every user has an empty receivers list set.
An empty list means that no funds are split, and 100% of the funds go to the user who received them.
Each splits receiver on the list has a percentage assigned to them,
which defines the fraction of received funds that will be transferred to that user when splitting.
All the list entries must add up to no more than 100%, in which case the receiving user
won't get any funds, and will transfer all received funds to others.
The list must be sorted, and it can't contain duplicate entries.

Splits configuration is updated by calling the `setSplits` function
of the [driver][drivers] managing your user ID.

# Receiving flow

Received funds go through a few steps before they can be collected.

- **Receiving drips** and **squeezing drips** gathers funds that have been dripped to you.
- **Splitting** gets all received and squeezed drips, given funds and funds received from splitting,
and distributes them according to the current splits configuration.
- **Collecting** transfers out of the protocol funds left after splitting.

![Diagram 1][img1]

## Receive drips

Receiving drips gets funds dripped to you in the past from all the users.
It doesn't matter how many people have been dripping, receiving funds from them always has
the same cost depending only on the length of the period from which you're receiving drips.
You must receive drips for each ERC-20 token separately, each of them has an independent state.

You only can receive drips from the already finished cycles.
The entire timeline is globally divided into cycles of constant length defined on deployment,
usually on a scale of days or weeks.
Every timestamp during which somebody is dripping to you falls into a cycle.
All the funds that have been dripped from anybody to you during a cycle
are mixed together and become receivable only when the cycle ends,
so nobody can change their drips anymore during that cycle.
This reduces gas cost of receiving drips, because instead of analyzing multiple complex histories
of many users dripping to you, the protocol only needs to scan the cycles from which you haven't
received drips yet and see how much has been dripped to you in total.
See [Drips Inner Workings][inner] for more technical details.

Receiving drips is done by calling `receiveDrips` function on `DripsHub` contract.
Anybody can call this function for any user ID.
This is fine because the users can't be hurt when somebody triggers receiving drips for them,
the caller only covers the gas cost, but the effects are the same,
the user gets their drips received and prepared to be split.
This function can't be used to perform a DoS attack on the user.

## Squeeze drips

Squeezing drips is a companion to receiving drips.
While receiving can be done only on funds dripped during the finished cycles,
squeezing can be done only on funds dripped during the current cycle, which isn't finished yet.
It allows receiving drips without waiting for the cycle to end,
but it's more expensive in terms of gas usage.
You must squeeze not only for each ERC-20 token separately,
but also for each user from whom you want to squeeze drips.
Any funds you don't squeeze will be receivable when the cycle ends.

In order to squeeze drips from a user you need to provide that user's complete history
of drips configurations from any point in the past until their current configuration.
That history will be then analyzed to see how much they have dripped to you
during the current cycle until now, and these funds will be squeezed.
You don't need to squeeze the entire history you provide,
you can choose which historical configurations you want to analyze, and skip all the rest.
This is useful when a historical configuration has already been squeezed by you in the past
or doesn't yield enough value to justify the gas cost, either because it was so short-lived,
didn't drip to you at a high enough rate, or just didn't include you as a receiver.

Squeezing drips is done by calling `squeezeDrips` function on `DripsHub` contract.
Anybody can call this function for any user ID.
This is fine because the users can't be hurt when somebody triggers squeezing drips for them,
the caller only covers the gas cost, but the effects are the same,
the user gets their drips squeezed and prepared to be split.
This function can't be used to perform a DoS attack on the user.

## Split

Splitting distributes funds you've received from all sources among users
who you've configured as your [splits receivers](#splitting).
Splitting is done on your current splittable balance,
which aggregates your received and squeezed drips, funds given to you, and funds split to you.
The funds are split according to your current splits receivers list.
Each of its entries contains a user ID and a percentage of splittable funds that they will receive.
Any funds not split among the receivers will become collectable by you.

Splitting is done by calling `split` function on `DripsHub` contract.
Anybody can call this function for any user ID, but they must pass the splits configuration
that is currently set by that user, so their funds are always split according to their will.
This makes setting splits receivers list somewhat bonding because right until you update it,
anybody can split funds you've received according to that configuration.
You may even be frontrun by somebody who doesn't like your splits configuration update
to split as much as possible using the current configuration.
Splitting can't be used to DoS a splits configuration update, but constant changes
to the user's splits configuration could be used to DoS splitting for that user.

Receiving drips, squeezing drips and splitting being callable by anybody
constitute a highly efficient system where funds are never stuck
and can be always pushed to keep flowing in the network of splits.
If you have a splits receiver configured, and you have some funds dripped,
given or split to you, your splits receiver can perform all the necessary actions
to get their splits from you, without bothering you.
You could neglect the protocol for years, but the funds will keep moving
in the network as long as they benefit from it.
This can go even further, because a splits receiver of your splits receiver may trigger
a cascade of splitting to get their funds, it can go arbitrarily deep.

## Collect

Collecting takes the funds left after splitting and transfers them
out of the protocol, e.g. into your wallet.
Collecting doesn't trigger splitting, you need to split in order to have collectable funds,
even if you have an empty splits receivers list.

Collecting is done by calling the `collect` function of the [driver][drivers] managing your user ID.

[img1]: /img/overview1.png
[fractional]: /docs/for-developers/advanced/fractional-amounts
[inner]: /docs/for-developers/advanced/drips-inner-workings
[drivers]: /docs/the-protocol/user-identities-in-drips#dripshub-identity-drivers

<div class="legal-disclaimer">
Disclaimer: The Drips protocol operates in a fully decentralized and autonomous manner, like the Ethereum protocol with which it is integrated. Therefore, no entity or person controls or is in any way responsible for the ongoing operation, running, or functioning of the Drips protocol, nor does any entity or person have custody of any funds raised or streamed in the Drips protocol. You acknowledge that you are solely responsible for any interaction with the Drips protocol and any harm, damage or loss that may occur. There is no warranty, express or implied, for the Drips protocol and/or the software and/or any content. The Drips protocol and in particular the software is of experimental nature and available for use to the public on an “as-is” basis and no representations or warranties of any kind are made with respect to the Drips protocol, its operations and functionality, or its fitness for any specific purpose. BY ACCESSING THE DRIPS PROTOCOL, YOU ACKNOWLEDGE, UNDERSTAND AND AGREE THAT YOU USE THE DRIPS PROTOCOL AND THE SOFTWARE AT YOUR OWN RISK AND YOU ASSUME ANY COSTS, RESPONSIBILITY AND/OR ANY LIABILITY FOR ANY DAMAGES OR LOSSES YOU MAY INCUR, INCLUDING ANY SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE, OR INABILITY TO USE, THE DRIPS PROTOCOL AND/OR THE SOFTWARE.
</div>
