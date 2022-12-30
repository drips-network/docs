---
id: squeezing-drips
title: Squeezing Drips
---
## Squeezing Drips -- How to Collect Funds Within a Cycle

In the [Technical Overview][to] section, we discuss how the Drips Protocol organizes transfers of tokens around "cycles" of time, to achieve high gas-efficiency, particularly in cases where many senders are streaming funds to a single recipient.

However, while this design is highly efficient, one drawback is that the standard <a href="https://drips-js-sdk-api.netlify.app/classes/nftdriverclient#collect" target="_blank">collect()</a> method described in the previous section only allows a recipient to collect funds that were streamed or split to them during past, or *completed*, cycles. If a recipient wishes to collect funds streamed to them during the *current* cycle, a different set of methods is required. We refer to such funds-collection as "squeezing Drips".

Unlike collect(), which allows a recipient to collect funds sent by all senders with a single call, with squeezing, a recipient will need to make a new method call for each sender they wish to collect funds from. Note therefore that because squeezing requires more method calls and is also less efficient than ordinary collection, it will likely not always make sense to squeeze streams that are only sending small amounts of funds, particularly on Ethereum mainnet.

To squeeze Drips, you will need to interact with the DripsHub contract directly. For this you will need to first instantiate a `DripsHubClient` using the SDK:

```
const dripsHubClient = await DripsHubClient.create(signer: JsonRpcSigner);
```

To learn more about how this class works in general, please see <a href="https://drips-js-sdk-api.netlify.app/classes/dripshubclient" target="_blank">its API docs page</a>.

Once you have an instance of `DripsHubClient`, you can squeeze Drips for a user account by calling `DripsHubClient.squeezeDrips()`, which looks like this:

```
public squeezeDrips(
    userId: string,
    tokenAddress: string,
    senderId: BigNumberish,
    historyHash: string,
    dripsHistory: DripsHistoryStruct[]
): Promise<ContractTransaction>
```

TODO -- Link in the API docs for this method once they're live on the API docs site.

While the first three parameters should be straightforward to determine, for the last two parameters (`historyHash` and `dripsHistory`) it will likely be necessary to use an instance of `DripsSubgraphClient` to query the subgraph for the required histories. The simplest way to do this is to call `DripsSubgraphClient.getArgsForSqueezingAllDrips()` which looks like this:

```
public async getArgsForSqueezingAllDrips(
    userId: string,
    senderId: string,
    tokenAddress: string
): Promise<[userId: string, tokenAddress: string, senderId: string, historyHash: string, dripsHistory: DripsHistoryStruct[]]>
```

You can then iterate over the array results returned by the Promise and make a number of `DripsHubClient.squeezeDrips()` calls, as desired, to squeeze Drips for a number of the senders.


[to]: /docs/the-protocol/technical-overview

