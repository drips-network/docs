---
id: intro
title: Intro to Accounts
---

In the Drips Protocol, an "account" is the set of state associated with a given user ID. Exactly what is included in this state
will depend on which identity driver the user ID belongs to. See the [User Identies in Drips][ui] section for more discussion of
identity drivers.

For example, accounts associated with user IDs managed by NFTDriver and AddressDriver include the following state:

* A balance of funds added by the user and avaliable for streaming to others.
* A balance of funds received from streams sent by other users.
* A Drips Configuration.
* A Splits configuration.

Meanwhile, accounts associated with user IDs managed by ImmutableSplitsDriver, only include:

* A balance of funds received from streams sent by other users.
* A Splits configuration.

Such accounts do not include the ability to add funds for streaming, or to create Drips configurations. This is because accounts associated with user IDs managed by ImmutableSplitsDriver are only intended to be used to manage standalone Splits configurations.

In the future, even more types of new accounts with entirely new types of account state may be added, through the introduction of additional identity drivers.

[ui]: /docs/the-protocol/user-identities-in-drips