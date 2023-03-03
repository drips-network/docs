---
id: safe
title: Connecting to a Safe
---

You can use the Drips App as a Safe App for conveniently proposing transactions to your Safe.

### Launching Drips as a Safe App

Within your Safe's UI, simply navigate to Apps → Custom Apps → Add custom app.

![Clicking "Add custom app" within the Safe UI](/img/drips-app/safe/1.png)

In the resulting modal, enter "https://beta.drips.network" as the URL, and all other fields will auto-complete. Add the app, and launch it by clicking. The Drips app will open and auto-connect to your Safe.

### Interacting with Drips through a Safe

You can generally interact with Drips the same way as you would with an EOA wallet. There are a few things to consider, however.

#### Edits to streams or balances only apply at the time the transaction is executed

When you create, pause or edit a stream, the edits will only apply in the exact moment your Safe executes the transaction, not at the timestamp of proposal. For instance, this means that an outgoing stream that you pause will continue streaming until your Safe executes the pause transaction.

When scheduling a stream for the future, ensure that the transaction is executed before its scheduled start date. Scheduled streams begin streaming at the time of transaction confirmation *or* any scheduled start date, depending on which date is later.

#### Some transactions are invalidated by updates to a Drips account's state

Many interactions within the Drips app rely on a specific version of the Drips account's current state of stream receivers, and will fail if said state is altered by a different interaction between such a transaction being proposed and executed. Some of these interactions actively alter your account's state, resulting in any other pending transactions relying on said state becoming invalid, while others do not alter your account's state but will themselves fail if another state-altering transaction occurs after they're proposed.

These interactions include:

- Adding funds (Does not invalidate other pending transactions)
- Collecting funds (Does not invalidate other pending transactions)
- Creating a stream (Invalidates other pending transactions)
- Editing a stream (Invalidates other pending transactions)
- Deleting a stream (Invalidates other pending transactions)
- Pausing / Un-pausing a stream (Invalidates other pending transactions)

Additionally, edits to your Splits receivers will invalidate other transactions altering Splits receivers, but are not invalidated by any edits to your account's stream receivers.

Consider the following example:

- You propose a transaction that creates a new stream.
- Before executing that transaction, you propose another transaction that adds funds for a token.
- You execute the 1st transaction and a new stream is created, altering your account's state of stream receivers.
- The 2nd transaction would fail if executed, because it relies on the account's specific state before the new stream was created.

However, the following scenario works fine, because adding funds does not alter your account's stream receiver state:

- You propose a transaction that adds funds for a token to your Drips account.
- Before executing that transaction, you propose another transaction that creates a new stream.
- You execute the first transaction, and funds are added to your Drips account.
- You execute the second transaction, and the new stream is created.
