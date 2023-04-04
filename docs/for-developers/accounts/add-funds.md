---
id: add-funds
title: Add Funds
---

To add funds to an NFT-based sub-account you will first need to [create a NFTDriverClient and a DripsSubgraphClient][is].

You can then add funds to the account by calling `NFTDriverClient.setDrips` with a positive value for the `balanceDelta` parameter. The value of the `balanceDelta` parameter will be the amount of funds that you add (or withdraw, in case of a negative value) from the account's streaming balance.

The full signature of the `setDrips` method looks like this: 

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

Initially it may be somewhat unintuitive that you would need to call setDrips() to simply add or withdraw funds from an account's streaming balance. However, it makes sense when you consider the fact that making a change to the streaming balance will cause the DripsHub contract to recalculate the new end times (i.e. when they will run out of funds) of any Drips that the account has configured. Moreover, because DripsHub doesn't store the full receivers lists on-chain, for gas-optimization, it makes sense that we would need to pass them in again when we make any change to the streaming balance.

With this in mind, you'll need to have the list of current receivers in order to update the Drips configuration. You can get the current receivers by calling:

```
const currentDripsConfiguration =
    await subgraphClient.getUserAssetConfigById(configuredUserId, assetId);
const currentReceivers = currentDripsConfiguration.dripsEntries || [];
```

Finally call the `setDrips` method, with a value of `balanceDelta` equal to the quantity of tokens you would like to add (or withdraw) to/from the account's streaming balance.


[is]: /docs/for-developers/initialize-sdk

