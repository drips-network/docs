---
title: Overview
---

Drips protocol is a fully decentralized, non-custodial, autonomous, and gas-optimized protocol allowing you to schedule and structure your ERC-20 token transactions to particular addresses. The information provided herein are for educational purposes only.

<div className="legal-disclaimer">
Disclaimer: The Drips protocol operates in a fully decentralized and autonomous manner, like the Ethereum protocol with which it is integrated. Therefore, no entity or person controls or is in any way responsible for the ongoing operation, running, or functioning of the Drips protocol, nor does any entity or person have custody of any funds raised or streamed in the Drips protocol. You acknowledge that you are solely responsible for any interaction with the Drips protocol and any harm, damage or loss that may occur. There is no warranty, express or implied, for the Drips protocol and/or the software and/or any content. The Drips protocol and in particular the software is of experimental nature and available for use to the public on an “as-is” basis and no representations or warranties of any kind are made with respect to the Drips protocol, its operations and functionality, or its fitness for any specific purpose. BY ACCESSING THE DRIPS PROTOCOL, YOU ACKNOWLEDGE, UNDERSTAND AND AGREE THAT YOU USE THE DRIPS PROTOCOL AND THE SOFTWARE AT YOUR OWN RISK AND YOU ASSUME ANY COSTS, RESPONSIBILITY AND/OR ANY LIABILITY FOR ANY DAMAGES OR LOSSES YOU MAY INCUR, INCLUDING ANY SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE, OR INABILITY TO USE, THE DRIPS PROTOCOL AND/OR THE SOFTWARE.
</div>
<br />

There are three ways in which funds can be flowing in Drips protocol:

-   **Streaming** is moving funds between users over a period of time at a fixed per-second rate.
-   **Giving** is transferring an amount of funds between users immediately.
-   **Splitting** is transferring a fixed fraction of funds received by one user to another user.

# Streaming

The streaming functionality sends funds over a period of time. To start streaming you need to configure a list of stream receivers and top up your streamable balance. Once you configure those, the funds flow will start automatically and will stop when the balance runs out. You can change the balance at any time, either top up more funds or withdraw any amount from what hasn't been streamed yet. The balance is updated every second, and there's no way to withdraw already-streamed funds. The list of receivers can be changed at any time with an immediate effect, but it'll never affect the past, only the streaming behavior during the present timestamp and in the future. For each ERC-20 token every user has a separate streams configuration and a separate balance, so you can configure streaming different tokens independently.

The streams receivers list contains between 0 and 100 entries. By default, every account has an empty receivers list. An empty list means that there are no receivers, so nothing will be streamed to anybody. The list must be sorted, and it can't contain duplicate entries. Only streams receivers on your currently set list are receiving tokens streamed from you, so, when you add a receiver or remove one, it respectively starts or stops streaming to them. Every entry consists of a receiver user ID and a streaming rate, which is expressed in tokens per second. To increase precision the amount streamed every second has 9 extra decimals, so you express streaming rates with precision higher than one full token per second. For example, you can stream 2.5 tokens per second or 0.001 tokens per second. See [Streaming Fractional Amounts](/the-protocol/advanced/fractional-amounts) for more details. Optionally, each stream receivers list entry may contain a start timestamp and a maximum duration. If the start timestamp is in the future, streaming will be postponed until that timestamp. If the duration is set, streaming will stop after it elapses. The duration is relative to the start timestamp, or, if the start timestamp isn't set, the timestamp when the stream configuration is updated.

Both balance and receivers list updates are done by calling the `setStreams` function of the [driver](/the-protocol/accounts-in-drips#drips-account-drivers) managing your user ID. You can't change the balance without updating the streams receivers list, but it's fine if both the old and the new lists are identical. You also can't update the streams receivers list without changing the balance, but it's fine if the balance change is zero.

For details about how streaming is implemented see [Drips Inner Workings](the-protocol/advanced/drips-inner-workings).

# Giving

The Giving functionality transfers an amount of tokens to the chosen user. It's different from streaming because it's a one-time, immediate operation, and there's no streaming configuration involved. Since the funds are transferred into the protocol while giving, there is no need for a user to have a separate balance dedicated to a specific giving operation.

Giving is done by calling the `give` function of the [driver](/the-protocol/accounts-in-drips#drips-account-drivers) managing your account ID.

# Splitting

The Splitting functionality divides received funds and transfers them to other users. To split, you need to configure a list of splits receivers. Next, all funds you setup to be split will be distributed according to that configuration. Each user has a single splits receivers list which is applied to all ERC-20 tokens, so all received funds are split in the same way.

Updating the splits configuration doesn't split funds that haven't been split yet. This means that unless funds are actually split, there's no guarantee that the current configuration will be used to split the funds, the user who received the funds may route them however they feel. If a splits configuration needs to be trusted to never change, `ImmutableSplitsDriver` may be used to create a dummy user who's only able to set their splits configuration once and can't change it afterward.

The splits receivers list contains between 0 and 200 entries. By default, every user has an empty receivers list set. An empty list means that no funds are split, and 100% of the funds go to the user who received them. Each splits receiver on the list has a percentage assigned to them, which defines the fraction of received funds that will be transferred to that user when splitting. All the list entries must add up to no more than 100%, in which case the receiving user won't get any funds, and will transfer all received funds to others. The list must be sorted, and it can't contain duplicate entries.

Splits configuration is updated by calling the `setSplits` function of the [driver](/the-protocol/accounts-in-drips#drips-account-drivers) managing your user ID.

# Receiving flow

Received funds go through a few steps before they can be collected.

-   **Receiving drips** and **squeezing drips** gathers funds that have been dripped to you.
-   **Splitting** gets all received and squeezed drips, given funds and funds received from splitting,
    and distributes them according to the current splits configuration.
-   **Collecting** transfers out of the protocol funds left after splitting.

![Diagram 1][img1]

## Receive streams

By receiving streams, you get the funds streamed to you in the past from all users. It doesn't matter how many people have been streaming. Receiving funds from them always has the same cost depending only on the length of the period from which you're receiving streams. You must receive streams for each ERC-20 token separately, each of them has an independent state.

You only can receive streams from the already finished cycles. The entire timeline is globally divided into cycles of constant length defined on deployment, usually on a scale of days or weeks. Every timestamp during which somebody is streaming to you falls into a cycle. All the funds that have been streamed from anybody to you during a cycle become receivable only when the cycle ends, so nobody can change their streams anymore during that cycle. This reduces gas cost of receiving streams. See [Streams Inner Workings](/the-protocol/advanced/drips-inner-workings) for more technical details.

Receiving streams is done by calling the `receiveStreams` function on the `Drips` contract. Anybody can call this function for any user ID. This is fine because the users can't be hurt when somebody triggers receiving streams for them, the caller only covers the gas cost, but the effects are the same, the user gets their streams received and prepared to be split. This function can't be used to perform a DoS attack on the user.

## Squeeze streams

Squeezing streams is a companion to receiving streams. While receiving can be done only on funds streamed during the finished cycles, squeezing can be done only on funds streamed during the current cycle, which isn't finished yet. It allows receiving streams without waiting for the cycle to end, but it's more expensive in terms of gas usage. You must squeeze not only for each ERC-20 token separately, but also for each user from whom you want to squeeze streams. Any funds you don't squeeze will be receivable when the cycle ends.

In order to squeeze streams from a user you need to provide that user's complete history of streams configurations from any point in the past until their current configuration. That history will be then analyzed to see how much they have streamed to you during the current cycle until now, and these funds will be squeezed. You don't need to squeeze the entire history you provide, you can choose which historical configurations you want to analyze, and skip all the rest. This is useful when a historical configuration has already been squeezed by you in the past or doesn't yield enough value to justify the gas cost, either because it was so short-lived, didn't stream to you at a high enough rate, or just didn't include you as a receiver.

Squeezing streams is done by calling `squeezeStreams` on the `Drips` contract. Anybody can call this function for any user ID. This is fine because the users can't be hurt when somebody triggers squeezing streams for them, the caller only covers the gas cost, but the effects are the same, the user gets their streams squeezed and prepared to be split. This function can't be used to perform a DoS attack on the user.

## Split

Splitting distributes funds you've received from all sources among users who you've configured as your [splits receivers](/the-protocol/overview#splitting). Splitting is done on your current splittable balance, which aggregates your received and squeezed streams, funds given to you, and funds split to you. The funds are split according to your current splits receivers list. Each of its entries contains a user ID and a percentage of splittable funds that they will receive. Any funds not split among the receivers will become collectable by you.

Splitting is done by calling the `split` function on the `Drips`?  contract. Anybody can call this function for any user ID, but they must pass the splits configuration that is currently set by that user, so their funds are always split according to their will. This makes setting splits receivers list somewhat bonding because right until you update it, anybody can split funds you've received according to that configuration.

Receiving streams, squeezing streams and splitting being callable by anybody constitute a highly efficient system where funds are never stuck and can be always pushed to keep flowing in the network of splits. If you have a splits receiver configured, and you have some funds streamed, given or split to you, your splits receiver can perform all the necessary actions to get their splits from you, without bothering you. As the protocol is autonomous it runs without your intervention and the funds will keep moving in the network as long as your receiver benefits from it. This can go even further, because a splits receiver of your splits receiver may trigger a cascade of splitting to get their funds, it can go arbitrarily deep.

## Collect

The Collecting functionality takes the funds left after splitting and transfer them out of the protocol, e.g. into your wallet. Collecting doesn't trigger splitting, you need to split in order to have collectable funds, even if you have an empty splits receivers list.

Collecting is done by calling the `collect` function of the [driver](/the-protocol/accounts-in-drips#drips-account-drivers) managing your user ID.

[img1]: /img/overview1.png
