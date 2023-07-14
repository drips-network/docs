---
id: collect-earnings
title: Collect earnings
---

In this section, you'll learn how to collect funds you've earned from incoming streams and splits. If you're trying to withdraw funds you've previously added to your *outgoing balance* back to your wallet, please read "<a href="/docs/streaming-and-splitting/manage-funds/add-funds" target="_blank">Withdraw funds"</a>" instead.

To get started, locate the token balance you want to collect from on your dashboard, and click it to navigate to the token page. You can also use the search bar to find a token by its name or address.

![Clicking the token balance on the Drips dashboard](/img/drips-app/collect-earnings/1.png)

Once on the token page, locate the "Collect" button under "Incoming balance", and click to open the Collect flow.

![Clicking "Collect" on the token page](/img/drips-app/collect-earnings/2.png)

Next, you'll see a breakdown of your collectable amount at the given moment.

![Clicking "Collect" on the token page](/img/drips-app/collect-earnings/3.png)

By default, you'll only collect funds from *concluded cycles*, but you can choose to include funds earned during the current cycle as well. However, doing so will slightly increase required gas fees for the collect transaction. You can read more about the Drips Cycle in our <a href="/docs/the-protocol/technical-overview" target="_blank">protocol overview</a>.

First however, let's take a look at the balances breakdown. You'll find multiple line items that add up to the total collectable amount. Some of these amounts may be hidden if they're zero.

- The `UNI from concluded cycles` amount is the amount earned from incoming streams *up until the beginning of the current cycle*.
- The `Splittable` amount is the amount you've earned from incoming Splits or "Gives" (a plain one-time transfer of funds within the Drips protocol).
- The `Splitting X%` amount indicates how much of your earnings you'll be splitting away to other users according to your <a href="/docs/streaming-and-splitting/splits/set-up-splits" target="_blank">Splits configuration</a>. If you don't have any Splits configured, this amount will be zero.
- The `You collect` amount is the resulting total and what will be sent to your wallet when you collect.

If you want to additionally collect funds that you've earned from incoming streams during the current cycle, enable "Include funds from current cycle".

![Including funds from current cycle](/img/drips-app/collect-earnings/4.png)

This brings up a selector for *senders*. If you activate a particular sender, their funds sent during the current cycle will be included with your collect transaction, but each sender you select raises the collect transaction's gas fees.

> ⚠️ When including funds from the current cycle, the amounts shown within the collect modal are estimates based on your current system time. The actual amount you end up collecting may differ.

Moving on — click "Collect" and sign the transaction with your wallet to collect the indicated funds. Once the transaction has been confirmed, the collected funds will appear in your wallet, and the app will update to reflect your decreased incoming balance. If your balance doesn't immediately update, please refresh the app a few times, as it sometimes might take a short while for it to update.
