---
id: list
title: List Sub-Accounts
---

With the SDK, you can query the Drips subgraph to get a list of the NFT-based sub-accounts belonging to a
given Ethereum address. To do so, you will first need to [DripsSubgraphClient][is].

Once you have it, you can simply call `DripsSubgraphClient.getNftSubAccountsByOwner`. The full method signature looks like this:

```
getNftSubAccountsByOwner(ownerAddress: string): Promise<NftSubAccount[]>
```

Take a look at <a href="https://drips-js-sdk-api.netlify.app/classes/dripssubgraphclient#getNftSubAccountsByOwner" target="_blank">the method's documentation</a> for additional
details.

*TODO - switch this to getNftSubAccountsByOwnerAndApp() once we add that function*

This method will return all NFT-based sub-accounts belonging to the given Ethereum address. If the address is the
address of an end-user of your app who happens to have a wallet connected, your app can then allow that end user to
perform actions on the sub-account like [adding funds][af], [starting a stream][ss] or [creating splits][cs].


[is]: /docs/for-developers/initialize-sdk
[af]: /docs/for-developers/accounts/add-funds
[ss]: /docs/for-developers/streams/start-a-stream
[cs]: /docs/for-developers/splits/create-user-splits

