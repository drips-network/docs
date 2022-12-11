---
id: immutable-splits
title: Immutable Splits
---

The Drips Protocol enables the creation of immutable Splits using the ImmutableSplitsDriver. Immutable Splits are different from the Splits configurations for user accounts created by NFTDriver and AddressDriver in that once an immutable Split is created, it can never be changed.

To create an immutable Split using the SDK, you will need to instantiate an `ImmutableSplitsDriverClient`:

```
const immutableSplitsDriverClient = ImmutableSplitsDriverClient.create(provider);
```

You can then call `ImmutableSplitsDriverClient.createSplits` to create an immutable Split:

```
createSplits(
    receivers: SplitsReceiverStruct[],
    userMetadata: UserMetadataStruct[])
: Promise<string>
```

Take a look at <a href="https://drips-js-sdk-api.netlify.app/classes/immutablesplitsdriverclient#createSplits" target="_blank">this method's documentation</a> to understand what each parameter represents.

You can optionally use the `UserMetadataStruct` array to define metadata for the Split configuration. See the [account metadata][am] section of the docs for further discussion of account metadata and how to use it.

[am]: /docs/for-developers/advanced/account-metadata