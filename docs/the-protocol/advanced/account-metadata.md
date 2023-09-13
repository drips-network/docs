---
id: account-metadata
title: Account Metadata
---

The Drips Protocol includes functionality allowing general metadata information to be associated with user accounts. Like setting streams or Splits, the authority to add such metadata ultimately rests with the end-user who controls the account. However apps building on Drips can build on this capability to store any kind of metadata they wish (with their end-users' permission).

Knowing that we can't predict every metadata-related use case that developers may be interested in, we've designed metadata in Drips to be extremely flexible, but some examples of use cases that we envision are:

* Being able to mark a Drips NFT-based account as "associated" with a specific web3 application.
* Being able to attach "user profile"-related information to a Drips account (e.g. name, link to a profile image in IPFS, etc.)
* Being able to attach descriptive information to streams and Splits that are configured for the account (perhaps stored as an array or map).

### Adding Account Metadata

Associating metadata with an account is simple. After [creating an NFTDriverClient][is], your app can call `NFTDriverClient.emitAccountMetadata`:

```
emitAccountMetadata(
    tokenId: string,
    accountMetadata: AccountMetadataStruct[])
: Promise<ContractTransaction>
```

Take a look at <a href="https://drips-js-sdk-api.netlify.app/classes/nftdriverclient#emitUserMetadata" target="_blank">this method's documentation</a> to understand what each parameter represents.

As you can see, calling this method emits an EVM event that contains an array of `AccountMetadataStruct`s, which can be populated by the app developer however they wish:

```
AccountMetadataStruct: {
    key: PromiseOrValue<BytesLike>;
    value: PromiseOrValue<BytesLike>
}
```

### Querying Account Metadata

Once metadata events are emitted, they are indexed and stored in the Drips Protocol subgraph just like other events emitted by the protocol. After [creating a DripsSubgraphClient][is], you can query these metadata events by calling `DripsSubgraphClient.getMetadataHistory`:

```
getMetadataHistory(
    accountId: string,
    key?: BytesLike,
    skip: number = 0,
    first: number = 100
): Promise<AccountMetadataEntry[]>
```

Take a look at <a href="https://drips-js-sdk-api.netlify.app/classes/dripssubgraphclient#getMetadataHistory" target="_blank">this method's documentation</a> to understand what each parameter represents.

### Metadata Formatting Standards

Over time, we hope that standards will emerge around how metadata is formatted, that will allow web3 apps building on Drips to interoperate related to key use cases (e.g. always storing the "name" or "description" of an account based on agreed-upon key values). However, at the same time we also felt it would be too ambitious to try to propose comprehensive formatting standards right from the start. Instead, we would prefer to let conventions emerge based on the use cases and requirements of developers building on Drips.

### Associating an Account With an App

There is one metadata use case for which we would like to establish a convention from the start. That use case is for an app that wishes to allow users to create Drips NFT-based accounts that are specifically "associated" with their app.

To see the need for this, imagine that if multiple web3 apps end up building solutions for end-users on top of Drips NFT-based accounts, those end users' Ethereum wallets may end up holding NFT-sub accounts designed to be used with a number of different apps. Moreover, most of these NFT-based accounts may only be intended to be used with a single web3 app, so that each app would probably only want to show users the accounts created by their specific app.

In an effort to establish a convention around account-app associations, the Drips SDK includes an optional `associatedApp` parameter in the `NFTDriverClient.createAccount` method:

```
createAccount(
    transferToAddress: string,
    associatedApp?: BytesLike,
    accountMetadata: AccountMetadataStruct[] = []
	): Promise<string>
```

Passing a parameter value for `associatedApp` causes the SDK to automatically emit an `AccountMetadataStruct` at the time the account is created, with a `key='associatedApp'` and value equal to the specified value. By building this convention into the SDK, we hope to establish a standard of using the `associatedApp` key to indicate the app(s) that an account is associated with.


[is]: /docs/for-developers/initialize-sdk
