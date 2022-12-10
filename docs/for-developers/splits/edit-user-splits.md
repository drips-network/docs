---
id: edit-user-splits
title: Edit User Splits
---

To edit the Splits configuration for a NFTDriver-based sub-account, you will need to use the <a href="https://drips-js-sdk-api.netlify.app/classes/nftdriverclient#setSplits" target="_blank">NFTDriver.setSplits</a> method:

```
setSplits(
    tokenId: string,
    receivers: SplitsReceiverStruct[])
: Promise<ContractTransaction>
```

Take a look at <a href="https://drips-js-sdk-api.netlify.app/classes/nftdriverclient#setSplits" target="_blank">this method's documentation</a> to understand what each parameter represents.

To use this method you will first need to [create a NFTDriverClient][is].

You will also need to know the `tokenId` of the NFT-based sub-account you wish to `setSplits` for. You can find all of the sub-accounts owned by an Ethereum
address, and their tokenIds, which are the same as their user IDs, by [getting an account list][la] for the address.

Next you will need to build the new list of splits receivers that you want to set, as a SplitsReceiverStruct[] array. As part of building this array, you may wish to keep some of the Splits from the existing/previous configuration. To do this, use an instance of `SubgraphClient` to query the existing Splits configuration by calling `SubgraphClient.getSplitsConfigByUserId`:

```
const currentSplitsConfiguration = await subgraphClient?.getSplitsConfigByUserId(userId);
```

You can now build a new SplitsReceiverStruct[] array by combining as many of the existing `SplitsReceiverStruct`s  returned by `getSplitsConfigByUserId` with new `SplitsReceiverStruct`s for new Splits you wish to create for the account

Take a look at <a href="https://github.com/radicle-dev/drips-js-sdk/blob/f5f4d1d4ada1b8db0214f5785103b0f03739cb65/nft-driver-examples/src/routes/streams/SetSplits.svelte#L31" target="_blank">this code sample</a>, which shows how you can do this with the help of some utility functions the SDK exposes, from some form inputs. If you would like to see this code sample in action, you can do so by [running the NFTDriverClient examples app][in].

Finally call the `setSplits` method to set the new Splits configuration for the account.


[is]: /docs/for-developers/initialize-sdk
[in]: /docs/for-developers/installing
[la]: /docs/for-developers/accounts/list
