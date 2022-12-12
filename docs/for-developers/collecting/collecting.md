---
id: collecting
title: How to Collect
---

You can use the SDK to collect funds sent to an NFT-based sub-account by calling the function `NFTDriverClient.collect`:

```
collect(
    tokenId: string,
    tokenAddress: string,
    transferToAddress: string)
: Promise<ContractTransaction>
```

Take a look at <a href="https://drips-js-sdk-api.netlify.app/classes/nftdriverclient#collect" target="_blank">this method's documentation</a> to understand what each parameter represents.

Note in particular that the `tokenId` parameter here is the userId for the NFT-based sub-account to collect funds for, since tokenIds are always userIds, as you can see from <a href="https://github.com/radicle-dev/drips-contracts/blob/615a92ecfb995619254b459d9b53c2b762bc19d6/src/NFTDriver.sol#L49" target="_blank">the tokenId-generation code</a>.

Calling collect will move all of the funds that have currently been received by the account *in past/completed* cycles to the wallet at `transferToAddress`. To collect funds from Drips that have been received during the current cycle, you will need to "squeeze" those Drips - see the next section on [Squeezing Drips][sd].

If the account you are interested in collecting funds from is an address-based account rather than an NFT-based sub-account, you can collect funds by calling the function <a href="https://drips-js-sdk-api.netlify.app/classes/addressdriverclient#collect" target="_blank">AddressDriverClient.collect</a> 

[sd]: /docs/for-developers/collecting/squeezing-drips