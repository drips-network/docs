---
id: create-user-splits
title: Create User Splits
---

To create splits for a NFTDriver-based sub-account, you will need to use the <a href="https://drips-js-sdk-api.netlify.app/classes/nftdriverclient#setSplits" target="_blank">NFTDriver.setSplits</a> method:

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

Next you will need to build the new list of splits receivers that you want to set. This means building a new SplitsReceiverStruct[] array and adding a new `DripsReceiverStruct` to define the new Split you wish to create.

Take a look at <a href="https://github.com/radicle-dev/drips-js-sdk/blob/f5f4d1d4ada1b8db0214f5785103b0f03739cb65/nft-driver-examples/src/routes/streams/SetSplits.svelte#L31" target="_blank">this code sample</a>, which shows how you can do this with the help of some utility functions the SDK exposes, from some form inputs. If you would like to see this code sample in action, you can do so by [running the NFTDriverClient examples app][in].

Finally call the `setSplits` method to set the new Splits configuration for the account.


[is]: /docs/for-developers/initialize-sdk
[in]: /docs/for-developers/installing
[la]: /docs/for-developers/accounts/list
