---
id: using-a-gnosis-safe-with-drips
title: Using a Gnosis Safe With Drips
---

For some teams using Drips, the team may prefer to use a Gnosis Safe rather than an individual Ethereum account -- for instance, for creating and managing a Community, in the case that the team wants the Community to be owned by more than one account.

Connecting and using a Gnosis Safe with Drips is easy! Let's see how it works with the Drips webapp. FYI, there are several ways to interact with the Drips protocols and components, as laid out [here][ad] and [here][to].


Connecting and using a Gnosis Safe with Drips is easy! Let's see how it works.

### How to Connect a Gnosis Safe

Before you can connect a Gnosis Safe to Drips, you'll need to have one available. If you don't
already have a Gnosis Safe, you can [follow these instructions][cs] to create one.

Once you have a safe ready, open it in the [Gnosis Safe App][ga] in a new browser tab.

Now in a second browser tab, navigate to the [Drips App][da]. In the top right corner of the 
Drips App screen, you'll see a "Connect" button. Click on it.

![Connect][g0]

A box should pop up offering you the choice between Metamask and WalletConnect. Click on the
WalletConnect button. A box will pop up with a QR code image. Click on the "Copy to Clipboard"
button beneath the image.

![Connect][g2]

Now go back to the other browser tab where you have your Gnosis Safe open in the Gnosis Safe App.
Click on "Apps" in the menu on the left and enter "WalletConnect" in the search box. Click on
the WalletConnect option that comes up below to launch that app.

![Connect][g1]

Gnosis will warn you that you are using a third-party app. Accept this warning to proceed. Now in the
WalletConnect app screen that appears, click in the box that says "Place WalletConnect QR Code..."
as shown in the image below and then paste the QR code you copied from the Drips app screen.

![Connect][g3]

After a moment you should see a confirmation screen like the on below showing you that your 
Gnosis Safe is connected to Drips. Note: You'll need to keep the Gnosis Safe App open in the browser
tab in order to continue to use the Drips app in the other tab.

![Connect][g4]

Back in the Drips browser tab, you should now see the addreess (or ENS name) of your Gnosis Safe in the top
right corner of the screen.

Nice -- your Gnosis Safe is now connected to Drips!

### How to Set Up a Drip Using a Gnosis Safe

This section assumes that you've completed the steps in the previous section and that you have a
Gnosis Safe conncted to the Drips App. If you don't have your Gnosis Safe connected, please go back
and follow the instructions in the previous section before proceeding.

Now we're going to walk through the process of setting up a Drip from a Gnosis Safe to another user in
the Drips app. This is a specific example, but it's also meant to serve as a general guide to how to
take any action in the Drips App using a Gnosis Safe, since taking other actions (e.g. creating a new Community)
works in exactly the same way.

Let's get started!

Back in the Drips App browser tab, click "Create" and then click on "Drip Monthly" as shown in the image
below.

![Connect][g5]

In the next screen, configure a Drip as usual to send funds to a friend's address, or another address you
control. NOTE: if you actually execute this transaction, it will move funds from your Gnosis Safe into Drips 
and also send funds to the recipient address that you specify. Make sure that you actually want to do this
if you follow the rest of the steps in this guide.

![Connect][g6]

Once you've configured the Drip(s) how you want, click "Submit" at the bottom of the screen.

Now go back to the Gnosis Safe App browser tab. You should see a popup like the one below. Click "Submit"
to approve it. If you're using Metamask, a Metamask window should also pop up and you will need to
click "Sign" in that window as well.

![Connect][g7]

Once you've approved and signed, you'll still need enough members of the Gnosis safe to confirm the
transaction before it can go through. The exact number of signatures required will vary depending on
how your Safe is configured. For instance, if it's only set up to require a single signature, then
the transaction will go through immediately. However most Safes are configured to require multiple
signatures. In the example safe we're using, for instancee, two signatures are required.

If you click on "Transactions" in the left menu, you'll be able to see the pending transaction, and you
can expand it to see the details by clicking on the little down-arrow on the far right.

![Connect][g8]

Here we can see that the transaction is pending and requires one additional confirmation in order for
it to be approved.

At this point you will want to get in touch with another member of your Gnosis Safe and ask them to
confirm the transaction. When they log into the Gnosis Safe App and click on Transactions, they will
see something like this:

![Connect][g9]

At this point they will be able to click "Confirm". An approval screen will pop up and they will need
to click "Approve" and then also sign with whatever wallet they are using. If only two signatures are 
required by your Gnosis Safe, then the transaction will go through immediately. If more signatures are 
required, you'll need to reach out to more members of the gnosis safe to
get them to confirm the transaction as described above. Once enough members of the safe have confirmed,
the transaction will go through.

Unfortunately the Drips app does not correctly receive callbacks from Gnosis Safe transactions at this
time, so the UI won't automatically take you to the screen where you can see the new Drip, as it would with a normal wallet.

However don't fear -- the transaction will still go through. To see this, just click on the button for the
connected account (your Gnosis Safe address) in the top right of the screen to go to the account profile
page in Drips. You should see the new Drip configuration as shown in the image below.

![Connect][g10]

That's it -- we successfully set up a Drip using a Gnosis Safe in the Drips App!

As discussed above, this is just one example, but you can complete any action in Drips using a Gnosis
Safe as you would using any other wallet by following the steps above (approving the transaction in
the Gnosis Safe App and then having enough members of the safe Confirm it so that the transaction goes
through).


[ad]: accessing-drips.md
[to]: for-developers/technical-overview.md
[cw]: connect-a-wallet.md
[cs]: https://help.gnosis-safe.io/en/articles/3876461-create-a-safe
[ga]: https://gnosis-safe.io/app/
[da]: https://radicle-drips-app.netlify.app/explore
[g0]: /img/drips_gnosis0.png
[g1]: /img/drips_gnosis1.png
[g2]: /img/drips_gnosis2.png
[g3]: /img/drips_gnosis3.png
[g4]: /img/drips_gnosis4.png
[g5]: /img/drips_gnosis5.png
[g6]: /img/drips_gnosis6.png
[g7]: /img/drips_gnosis7.png
[g8]: /img/drips_gnosis8.png
[g9]: /img/drips_gnosis9.png
[g10]: /img/drips_gnosis10.png