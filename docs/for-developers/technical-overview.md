---
id: technical-overview
title: Technical Overview
---

This page offers an introduction to the core mechanics of the Drips smart contracts. The implementation can be found on [Github](https://github.com/radicle-dev/radicle-drips-hub):

## Drips Concepts

### Drips - The Protocol

Drips is a protocol for any EVM-based blockchain that allows users to set up and manage streaming payments - continuous transfers of funds from one account to
another over time. We refer to such streaming payments as "Drips".

![](https://i.imgur.com/L3XSop5.png)

Technically, tokens that are dripped are not sent directly to the recipient's address. Instead, the `DripsHub` contract keeps track of the sender and recipient's balances and allows the receiver to collect funds whenever they wish.

### Attributes of Drips

A drip is defined by the following attributes:

- **sender** - A Drips user, typically an Ethereum address.
- **receiver** - A Drips user, typically an Ethereum address.
- **amount per second** - (a uint192) The amount per-second being dripped, with high decimal-precision to support all ERC-20 tokens.
- **start** - The UNIX timestamp at which the drip will start.
- **duration** - Duration in milliseconds from the time it starts.

### Scheduled Drips

When a Drip is configured, the sender can decide whether funds will start flowing immediately (i.e. in the same block that the transaction is processed)
or whether the flow of funds will be **scheduled** to start at some future time. Similarly, the duration of the Drip can be set explicitly, or it can be configured
to stream funds until the user either stops the Drip, or funds run out. We refer to Drips with an explicitly defined start time or duration as "scheduled".

### What are Splits?

The Drips protocol also includes built-in features for sharing of funds, or "Splitting". When a user creates a Split, a percentage of all funds sent to them though the Drips protocol will be automatically split to another user of their choice. More precisely, an Ethereum address (the receiver) can define a set of split addresses with percentages:

![](https://i.imgur.com/Cs8Dz0V.png)


In the Drips protocol, a user can receive funds in three different ways:

- Drips (streams).
- A direct "Give" (one-time transfer).
- From other Splits.

Each time a user collects funds sent to them, if they have chosen to define Splits for their account, then splitting is applied.

## DripsHub Smart Contract Architecture

`DripsHub` and the related smart contracts allow users to create and manage real-time streams of funds (Drips) as well as splitting of any funds sent to them (Splits). One can start, alter or end the process of sending their funds at any time with immediate effect. The flow of funds is maintained automatically by the protocol and is continuous over time.

### Design Principles

Anyone who has worked with Ethereum and other EVM-based blockchains knows that there are significant limitations with regards to gas and transaction costs. Because of this, the Drips protocol was carefully designed to be as scalable and gas-efficient as possible. In particular, we wanted Drips to be able to support use cases like sponsorship or streaming memberships, where a single user (or org) may be receiving funds from hundreds or thousands of senders.

With these requirements in mind, let's consider the case of a receiver collecting funds that have been Dripped to them. The obvious technical design for a streaming system like Drips would be to store a list of all Drips being sent to each receiver and then simply iterate the list whenever collect() is called. However, storing and iterating a list with hundreds or thousands of entries quickly becomes cost-prohibitive from a gas perspective on Etheruem and might even exceed the total gas available in a block in the worst case.

Instead, to increase efficiency, `DripsHub` works internally with the concept of `cycles` and all funds being sent to a given recipient for a given cycle are aggregated and stored together as a pooled amount in the DripsHub smart contracts. In fact, for greater efficiency, it is not even the pooled stream amounts themselves that are stored, but rather the "deltas", or changes in amount streamed, from one cycle to the next.

### Drips Cycles

A cycle has a fixed time interval so that every block is assigned to a cycle based on its timestamp. Cycles are numbered starting with zero.

![](https://i.imgur.com/8yiM2Cq.png)

### Dripping Funds

Any user can be a sender in Drips. The state of sender for a specific ERC20 token can be described with the following attributes:
 - **Balance** - balance of tokens that the sender holds in their account.
 - **Set of DripsConfigs** - configurations for Drips that the sender is streaming to other users (if any).

Based on the set of drips, a total funding rate per cycle can be derived. The balance is automatically reduced by the funding rate every second and the same amount is credited to the sender's receivers.

When the sender's balance reaches an amount lower than the per-second funding rate,the funding is stopped. This process doesn't actually require updates every second. Instead, its effects are calculated on the fly whenever they are needed. Thus the contract state is updated only when the funding parameters are altered by the users.

The sender balance is manually increased by topping up, which requires sending some ERC-20 tokens from the user's wallet to the `DripsHub` contract. The opposite operation is withdrawal, which results in removing tokens from the contract back to the user wallet.

In order to start sending, the only requirements are that the sender has a non-zero balance and a non-empty list of receivers. As soon as the sender's configuration is updated to match these criteria, the flow of assets starts. First, the funding period is calculated. Its start is the current block timestamp and its end is the moment on which the balance will run out (unless some Drips have been **scheduled** as discussed above).

### Receiving Funds

There are no setup steps for one to become a receiver. Any user can receive funds at any time, from any sender. The only function of this role is the collection of funds sent by others.

Each receiver mantains a mapping for all cycles, which can be imagined as a timeline. Here, we see the timeline of a receiver who is receiving funds from two different senders. Each of the senders has sent different amounts over different periods of time. In this example there is a overlap between the two senders:

![](https://i.imgur.com/vUifBxW.png)

If a sender starts dripping to a receiver this timeline is modified. For each ERC20 token a seperate timeline of tokens exists. As discussed above, in order to maximize efficiency and minimize gas, we only store deltas of rate changes per-cycle, rather than full details about each Drip configuration. Every second, funds from the sender’s pool account are credited to the sender’s receivers according to the funding rate. 

**Received**
![](https://i.imgur.com/HMQ048c.png)

The `DripsHub` needs to be able to keep track of how much was sent to each receiver in a given cycle. We do this by aggregating the amounts being Dripped to the receiver and then representing the aggregate per-cycle amounts in the form of delta-based rate changes between each cycle. This allows us to calculate the funds that the receiver will receive in each not-yet collected cycle.

## Receiver Deltas

While it is useful to consider **amounts received per cycle** for purposes of explanation, in reality, for efficiency we instead store the **deltas** of change for each cycle as discussed above. If no delta is stored for a specific cycle, we can assume the previous cycle receiving rate should be applied for the current one.

In our example **sender A** wants to stream **5** per cycle.

If the sender would start/end exactly at the beginning of a cycle we would have a 
- start delta (+5)
- end delta (-5)

Which we would store on the timeline of the receiver.

### Calculation of Deltas
Normally, a Drip will not start exactly at the beginning of a cycle. A stream will start most of the time during an ongoing cycle.

Therefore, we need to split the start and end deltas into two seperate deltas.

Let’s take a look at the example from **sender A**, how to calculate the deltas.

![](https://i.imgur.com/BoDNwLq.png)

**Deltas: Start Sending**
The sender will be sending 1 per second or 5 per cycle. The senders usually are sending constant per-cycle amounts over long periods of time, so the added values tend to create long series of constant numbers, in this case, 5s.

We exploit this observation to turn the per-cycle flows of funds into **deltas** relative to the previous cycles. Now that we need to store data only for cycles where the funding rate changes, it's very cheap. This is what the contract actually stores: a mapping from cycle numbers to deltas.


In the case of **sender 1** the total change of the per-cycle delta is +5 to start sending.
The current cycle isn't fully affected though, only 3 out of 5 seconds are sending.
It's effectively going to transfer only the amount of 3, which is reflected in the +3 delta change.
On the other hand, the next cycle and the ones after it are going to transfer the full 5.
This is expressed with the +2 delta change, which turns 2 per cycle into the full 5 per cycle

When funding is stopped, the deltas need to be reverted. To do that, essentially the same process is applied, just with negative deltas.
In this case, the reverting is split into 2 cycles too, one with -4 and the other with -1.

## Storing Deltas
For are complete example, we can see the delta calculation for both **sender 1** and **sender 2**.

From the perspective of the receiver each cycle has one delta value. This delta value is modified if sender start/stops a stream in this speicific cycle.

![](https://i.imgur.com/RxRvxfY.png)


The stored delta for a cycle in the timeline can be seen as the sum of individuals sender deltas for that cycle.

**Actual Storage In The Contract**
![](https://i.imgur.com/oh4wuRo.png)

Here we can see to represent the two senders in the timeline of the receiver, we only modified 5 different cycle deltas.


## Collecting

The receiver can at any time collect the funds sent to them. The contract calculates the total amount and then transfers it out to the receiver's wallet. The collected amount is always everything available to be collected at the given moment.

As shown in the previous sections, the collectable amount is described with deltas, one per cycle. The receiver stores the number of the first cycle, for which the funds haven't been collected yet, which assures that funds can be collected only once.


### Updating or Cancelling Drips

Of course it's quite likely that a sender may want to update their Drips at some point in the future, either to change the amount being Dripped, or perhaps to stop streaming entirely. It is important to know that while such changes are permitted, it is only possible to change Drips configurations for the future and never the past. Specifically, any funds already sent to another user in the past cannot be recovered by the sender if they change their mind. In technical terms, it is not possible to change the funding rate of a past cycle, or for any time in the current cycle which has already passed.

For simplification lets assume, each stream starts and end exactly at cycle beginning. In the real implementation, we need to split each delta into two individual ones.

**Example: previous Deltas**
Let say the current configuration is that **sender 1** streams **5** per cycle.

![](https://i.imgur.com/lFxJTsS.png)


**Example: Delete (stop stream at current block.timestamp)**

![](https://i.imgur.com/1nYFKQm.png)

The earliest time we can stop an ongoing stream is the current block.timestamp.

We add a `-5` stop delta for the current timestamp and need to remove the outdated end time.



**Update Example**


**Update: Increase rate to 2 per second and stream one cycle longer**

The sender wants to increase the amount per second and wants to stream for one cycle more. 

This change should happen immediately. (current block.timstamp)

![](https://i.imgur.com/1xRNU3e.png)


In that case, technically the stream is split into two parts and the following operations need to be performed

- add new end time of first stream (new end is now) -5
- remove first stream outdated end time
    - previously a -5 is stored
    - by adding a +5 is is cancelled to zero
- add second stream starting from now + 10
- add end time second stream -10


## Wrapping Up

Whew! That was quite an adventure -- congratulations! If you've made it this far, you should now have an understanding of the most important technical aspects of the Drips protocol and the DripsHub smart contracts. As a next step, please consider exploring our "Getting Started" guide (coming soon), or you can dive deeper into the techical aspects of how Drips user identities and Apps work in the guide "Drips Apps and User Identities" (coming soon). 
