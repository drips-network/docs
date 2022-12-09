---
id: start-a-stream
title: Start a Stream
---

In Drips, starting a new stream for an account is the same as updating the Drips configuration for the account to include a new recipient.

So to start a stream for an NFTDriver-based account, you'll need to use the NFTDriver.setDrips method:

```
setDrips(
    tokenId: string, 
    tokenAddress: string, 
    currentReceivers: DripsReceiverStruct[], 
    newReceivers: DripsReceiverStruct[], 
    transferToAddress: string, 
    balanceDelta?: BigNumberish
    )
: Promise<ContractTransaction>
```

Take a look at <a href="https://drips-js-sdk-api.netlify.app/classes/nftdriverclient#setDrips" target="_blank">this method's documentation</a> to understand what each parameter represents.

To use this method you will first need to [create a NFTDriverClient and a DripsSubgraphClient][is].

You’ll also need to know the assetId of the ERC20 token you’re updating:

```
const assetId = Utils.Asset.getIdFromAddress(tokenAddress);
```

You'll need to have the list of current receivers in order to update the Drips configuration. You can get the current receivers by calling:

```
const currentDripsConfiguration =
    await subgraphClient.getUserAssetConfigById(configuredUserId, assetId);
const currentReceivers = currentDripsConfiguration.dripsEntries || [];
```

Next, you’ll need to create the new receivers list that you want to set. This means adding a new `DripsReceiverStruct` to the existing receivers
list, to define the new stream you wish to create.

Take a look at <a href="https://github.com/radicle-dev/drips-js-sdk/blob/f5f4d1d4ada1b8db0214f5785103b0f03739cb65/nft-driver-examples/src/routes/streams/SetDrips.svelte#L76" target="_blank">this code sample</a>, which shows how you can do this with the help of some utility functions the SDK exposes, from some form inputs. If you would like to see this code sample in action, you can do so by [running the NFTDriverClient examples app][in].

Finally call the `setDrips` method to set the new Drips configuration, which will include your newly-created stream.


[is]: /docs/for-developers/initialize-sdk
[in]: /docs/for-developers/installing
