---
title: Support your dependencies
---

import Figure from './components/Figure'

On Drips, anyone can create a _Drip List_ to flexibly send funds to a list of up to 200 open-source GitHub repositories and Ethereum addresses at a time. As project maintainers come to Drips to claim their funds, they themselves are asked to provide a list of other projects they depend on, and can choose to automatically forward a percentage of their earnings to them. In this article, we'll go over how you can create your very own _Drip List_ with your critical dependencies, and start supporting it with a stream of any ERC-20 token.

:::info
If you haven't yet, learn more about the Drips Dependency Tree in our [introduction](/).
:::

## Creating your Drip List

To create a Drip List, open the Drips App, connect your wallet, and navigate to **Drip List → Create Drip List**. You'll be asked to specify which up to 200 individual GitHub repositories, Ethereum addresses, or other Drip Lists you'd like to forward what percentage of funds. Then, you'll have a chance to immediately start supporting your list with a _Support Stream_. Once done, funds will start moving immediately, and within a month end up with the recipients you specified.

:::info
If you choose to include someone's elses Drip List on yours, **make sure that you trust the list's owner**, because they may at any point in the future change its recipients.
:::

## How funds flow through a Drip List

You can think of your Drip List as a personal "money router" that automatically _splits_ any incoming funds to its recipients once a month. You yourself can establish one or more _Support Streams_ to your own list.

<Figure caption="You can stream any amount of any ERC-20 token to your Drip List, which will automatically split any received funds to its receipients once per month." src="/img/fund/funding-cashflow.png" />

### Support Streams

A _Support Stream_ on Drips is an ongoing _stream_ of funds, with per-second settlement.

Let's say you'd like to support the projects on your Drip List with 500 USDC every month. To do so, you create a _Support Stream_ to your list, configure it to stream 500 USDC over 30 days, and then top up your USDC balance on Drips with an initial amount. As soon as your account is funded, you'll see USDC funds stream to your list in real-time. The benefit of _streams_ over monthly payments is that you're in full control: You can pause, alter or completely stop your stream even in the middle of the month. As your balance decreases, you can flexibly _top up_ your Drips account with additional USDC to keep the stream running, or at any point withdraw any not-yet-streamed funds that are still on your Drips account.

:::info
Apart from supporting your Drip List with a Support Stream, you can also establish arbitrary _Token Streams_ to any Ethereum address for any other usecase. To do so, head over to **Streams → Create Stream** in the Drips App.
:::

### Settlement of funds

While the stream to your Drip List is calculated per-second, funds in the global Drips Dependency Tree are automatically _split_ once per month (on every month's last Thursday), resulting in effective _monthly settlement_. This means that any funds you stream to your Drip List end up with the projects on the list (and, if applicable, their dependencies) once per month.

You can at any point review the next settlement day within the Drips App's "Projects" tab, but please note that the settlement doesn't occur exactly at midnight, but rather at some point throughout the indicated day, roughly within the UTC time zone.

As a result of this, you can edit the recipients on your Drip List before the settlement day anytime, and this will cause _all_ funds sent to your list within the current settlement period to be split according to the new configuration.

:::info
If you'd like to learn more about the technical details behind settlement, you can read through our technical [Drips inner workings](the-protocol/advanced/drips-inner-workings) article.
:::

### Supporting other Drip Lists

Drip Lists are _nestable_, meaning anyone can add anyone elses Drip List to _their_ Drip List, and forward a specific percentage of _its_ income to the projects contained on the nested list.
