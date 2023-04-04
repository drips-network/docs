---
id: withdraw-funds
title: Withdraw funds
---

In this section, you'll learn how to withdraw funds you've previously <a href="/docs/the-drips-app/manage-funds/add-funds" target="_blank">added to your *outgoing balance*</a> back to your wallet. If you're trying to collect earnings from incoming streams or splits, please read <a href="/docs/the-drips-app/manage-funds/collect-earnings" target="_blank">"Collect earnings"</a> instead.

To get started, first navigate to the Token view for the particular outgoing ERC-20 token balance you're trying to withdraw from. Simply click the token on your dashboard, or search for it by name or token address using the search bar.

![Clicking the token balance on the Drips dashboard](/img/drips-app/withdraw-funds/1.png)

On the token screen, click on "Withdraw" under "Outgoing balance" to enter the Withdraw flow.

![Clicking "Withdraw" on the token page](/img/drips-app/withdraw-funds/2.png)

Next up, indicate how much of your outgoing balance you'd like to withdraw.

![Clicking "Withdraw" on the token page](/img/drips-app/withdraw-funds/3.png)

If you currently have an active stream for the given ERC-20 token, you'll notice your outgoing balance decreasing in real-time. You can either choose to withdraw a specific amount lower than the remaining outgoing balance estimate at the given moment, or enable the "Max" switch, which will always withdraw the entire remaining amount at the exact second the withdraw transaction is confirmed on-chain.

If you have an active stream while withdrawing and you enter an amount only barely lower than your current outgoing balance, the amount you actually end up withdrawing may be less than the one you entered into the app. This is due to slight timing deviations between your system clock and the blockchain network, and because it may take a while for the network to confirm your withdrawal transaction. Of course, no funds are "lost" in this case — you may have just ended up streaming for a few seconds longer at the time of transaction confirmation, resulting in more of your outgoing balance being sent to your stream recipients.

Moving on — once you've entered your amount, click "Withdraw" in the app and sign the transaction with your connected wallet. 

Once the transaction has been confirmed, the withdrawn funds will appear in your connected wallet, and the app will update to reflect your decreased outgoing balance. If your balance doesn't immediately update, please refresh the app a few times, as it sometimes might take a short while for it to update.
