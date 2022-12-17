---
id: fractional-amounts
title: Dripping Fractional Amounts
---

## Introduction: token decimals

If you know how token decimals work, feel free to skip this section.

We, the web3 users, are familiar with the notion of tokens being dividable into smaller parts. E.g. you can have 2.5 USDC, or you can receive 0.03 Ether. This in fact is not how the tokens are handled by the computers and the blockchains. The reality is that the tokens are indivisible, but all the quantities are much larger than what's presented to us, which enables creating an illusion of fractions. Every token has defined a number of decimals, in case of USDC it's 6, in case of Ether 18, and so on. The number of decimals is applied when displaying the amounts for the users. E.g. if your wallet states that you have 2.5 USDC, the actual amount stored in the smart contract has 6 extra digits and is 2,500,000 (`2.5 * 10 ^ 6`). When you want to transfer 0.003 Ether, the wallet sends in the transaction an amount with 18 extra digits, or in this case 30,000,000,000,000,000 (`0.03 * 10 ^ 18`). This convention makes handling tokens simpler for the computers, because they don't need to work with fractions. On the other hand for the users the visible amounts are easy to work with, because they are small, have relatively high per-unit monetary value, and offer convenient fractions.

## Dripping rate has a sub-token precision

When setting up drips, each receiver is configured with an integer per-second dripping rate, `amtPerSec`. This rate is expressed in the smallest units of the token with 9 extra decimals, which lets expressing rates with precision higher than 1 token per second.

For example, the user wants to drip 0.000,001 USDC per second. USDC has 6 decimals, so the actual rate they want is 1 token per second. The drips configuration requires the rate to have 9 extra decimals, so the `amtPerSec` needs be set to value 1,000,000,000. Dripping 0.000,001 USDC per second adds up to 2.592 USDC per 30 days. Let's say that the user feels that it's too much, now they want to drip only 1 USDC per 30 days. This is 0.385,802,469 tokens per second, to which we add 9 decimals and end up passing as `amtPerSec` the integer value 385,802,469.

|| Example token amount representation|
|-|-
| Seen by the user | 0.05 USDC
| Stored in the smart contracts as an amount | 50,000 (USDC has 6 decimals, so we calculate `0.05 * 10 ^ 6`)
| Passed as `amtPerSec` as a per second dripping rate | 50,000,000,000,000 (`amtPerSec` requires 9 extra decimals on top of the smart contract representation, so we calculate `50,000 * 10 ^ 9`)

## The API requires 9 extra decimals only in `DripsConfig`'s `amtPerSec`

In DripHub API per-second rates are always wrapped in `DripsConfig` packed structures, they are never passed or emitted as standalone integers. All instances of `DripsConfig` have their `amtPerSec` with 9 extra decimals. On the other hand no other values follow that convention, all the balances and amounts are always expressed as regular numbers of full tokens without any extra precision or fractions.

## Dripped amounts are always full tokens

When dripping, both the sender's balance and the amounts receiveable by the receivers are always full tokens, and at all times they add up to the amount put into the protocol by the sender. There are no losses or temporarily stuck tokens, the protocol is precise and sound when handling tokens. This holds even when dripping at rates which are not expressible as full token units per second. Partially dripped tokens are kept in the sender's balance, but as soon as they add up to full units, they're moved from the sender and become receiveable by the receiver. This makes the amounts actually dripped on each timestamp change from second to second withing a range of 1 token per second, but when observed over a period of time, the dripped tokens add up to the rate which was configured.

For example, the user wants to drip 0.000,001,4 USDC per second, which is 1.4 tokens per second. The dripped amount on the first second will be 1.4, so only 1 token will be subtracted from the sender's balance and moved to the receiver, 0.4 will stay on the sender's side. During the next second another 1.4 tokens are being dripped, to which 0.4 from the previous second is added resulting in 1.8 tokens sent. Again 1 is moved from the sender to the receiver and 0.8 stays on the sender. Finally, during the third second another 1.4 is dripped, which with 0.8 from the previous cycles adds up to 2.2. This time 2 tokens are taken from the sender's balance and made receiveable by the receiver, and 0.2 stays on the sender's side waiting to be dripped during the upcoming seconds.

## Technical details of how dripped fractions add up

When dripping with a given rate the Nth second of each cycle moves the same amount from the sender to the receiver. It doesn't matter when dripping starts or ends, the exact amount dripped during a given second depends only on the rate and the position of the timestamp in the cycle. The first second of each cycle always moves `floor(amtPerSec)`, but every other timestamp T moves `floor(T % cycleSecs * amtPerSec) - floor((T - 1) % cycleSecs * amtPerSec)`.

The result of this behavior is that operations which update drips without altering the dripping rate, for example a change of the balance, do not disrupt the existing streams. This makes calculating the amount dripped over a given period of time easy to do using just the rate and the cycle length.

Unfortunately it may lead to surprising behaviors when dripping at extremely low rates. For example, a user drips 0.001 tokens per second, so a single token should be moved to the receiver once every 1000 seconds. Depending on when exactly dripping starts, a token may be moved on the first second of dripping or it may be moved after 999 seconds, to the user it may look random. Consecutive tokens will be moved as expected, once per 1000 seconds. The only exception is when a cycle ends, because then the unmoved fractions will be cleared, and the countdown to moving the next token will be reset to 1000 seconds.

The cycle boundaries behavior determines the lowest possible dripping rate, which is 1 token per cycle. If a dripping rate is lower than that, a drip configuration will be valid, but it'll silently cause no movement of tokens.