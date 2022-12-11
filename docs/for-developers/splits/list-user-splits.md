---
id: list-user-splits
title: List User Splits
---

Using the SDK, it's straightforward to retrieve a list of the splits that are currently configured for a Drips given account. To do so, use the `DripsSubgraphClient.getSplitsConfigByUserId method:`

```
getSplitsConfigByUserId(
    userId: string)
: Promise<SplitsEntry[]>
```

To use this method you will first need to [create a DripsSubgraphClient][is].

When given the user ID of the Drips account that you wish to query the splits configuration for, this method returns an array of SplitsEntries:

```
SplitsEntry: { 
    id: string; 
    senderId: string; 
    userId: string; 
    weight: bigint
}
```

Take a look at <a href="https://github.com/radicle-dev/drips-js-sdk/blob/1d1957983a1e220c27143164b9ed16f346db91c1/nft-driver-examples/src/routes/streams/SplitsConfiguration.svelte#L12" target="_blank">this code sample</a>, which shows how you can retrieve the list of splits that are currently configured for a user ID and display them. If you would like to see this code sample in action, you can do so by [running the NFTDriverClient examples app][in].

[is]: /docs/for-developers/initialize-sdk


