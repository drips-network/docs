---
id: squeezing-drips
title: Squeezing Drips
---
## How to Collect Funds Within a Cycle

In the [Technical Overview][to] section, we discuss how the Drips Protocol organizes transfers of tokens within time "cycles", to achieve high gas-efficiency, particularly in cases where many senders are streaming funds to a single recipient.

While this design is highly efficient, one of its downsides is that the <a href="https://drips-js-sdk-api.netlify.app/classes/nftdriverclient#collect" target="_blank">collect()</a> method described in the previous section only allows a recipient to collect funds streamed (or split) to them during past, or *completed*, cycles. On the other hand, if a recipient wishes to collect funds that were streamed to them during the *current* cycle, a different approach is required. We refer to collection of funds streamed during the current cycle as "squeezing Drips".

Unlike `collect()`, which allows a recipient to collect funds from all senders with a single call, when squeezing, a recipient will need to make a new method call for each sender they wish to collect funds from. Note, therefore, that because squeezing is less gas-efficient than ordinary collection, it will typically not make sense to squeeze streams that are  sending small amounts of funds, particularly on Ethereum mainnet.

To squeeze Drips, you will need to interact with the DripsHub contract directly, rather than interacting with a driver contract. For this you will need to first instantiate a `DripsHubClient` using the SDK:

```
const dripsHubClient = await DripsHubClient.create(signer: JsonRpcSigner);
```

To learn more about this class, please see <a href="https://drips-js-sdk-api.netlify.app/classes/dripshubclient" target="_blank">its API docs page</a>.

Once you have an instance of `DripsHubClient`, you can squeeze Drips for a user account by calling `DripsHubClient.squeezeDrips()`, like this:

```
public squeezeDrips(
    userId: string,
    tokenAddress: string,
    senderId: BigNumberish,
    historyHash: string,
    dripsHistory: DripsHistoryStruct[]
): Promise<ContractTransaction>
```

*Note: API-level documentation is not currently available for `squeezeDrips()`, but will be added soon. For now, please refer to the SDK and smart contract code to understand this method in more detail.*

While the first three parameters are straightforward, for the last two parameters (`historyHash` and `dripsHistory`) are more complex. First of all, what is a Drips `historyHash` anyway? The answer is that a `historyHash` is a hash that is unique to a given Drips configuration (set of recievers and amounts-per-second) that is calculated each time setDrips is called, as you can see in the Drips contract <a href="https://github.com/radicle-dev/drips-contracts/blob/2e9c34586a760921e80a81e1b4e46eb105f93525/src/Drips.sol#L621" target="_blank">here</a>.

To squeeze Drips, the user or developer executing the method call must pass the Drips historyHash for the moment in the sender's Drips history from which they wish to squeeze (i.e. only funds sent after the time of `historyHash` will be squeezed). In addition, the full `dripsHistory` containing all update events for the user from the time between `historyHash` and the present must also be sent. This is because for gas-efficiency reasons these historical configurations are not stored on-chain, but they are required for account balances to be updated correctly in the smart contracts when squeezing takes place.

To retrieve `dripsHistory` it will likely be easiest to use an instance of `DripsSubgraphClient` to query the subgraph for the required histories. The simplest way to do this is to call `DripsSubgraphClient.getArgsForSqueezingAllDrips()` which looks like this:

```
public async getArgsForSqueezingAllDrips(
    userId: string,
    senderId: string,
    tokenAddress: string
): Promise<[userId: string, tokenAddress: string, senderId: string, historyHash: string, dripsHistory: DripsHistoryStruct[]]>
```

You can then iterate over the array results returned and make a number of `DripsHubClient.squeezeDrips()` calls, as desired, to squeeze Drips for a number of the senders.


[to]: /docs/the-protocol/technical-overview

