---
id: scheduling
title: Scheduling
---

One of the most powerful features of Drips V2 is the ability for users to *schedule streams*. This means that when users or apps create new Drips, they can optionally assign `startTime` and `duration` parameters, which allow them to define when the Drip should start and end in time.

Let's take a look at <a href="https://drips-js-sdk-api.netlify.app/modules.html#DripsReceiverStruct" target="_blank">DripsReceiverStruct</a> to see how this works in more detail:

```
DripsReceiverStruct: { 
    config: PromiseOrValue<BigNumberish>;
    userId: PromiseOrValue<BigNumberish> 
    }
```

We can see that a `DripsReceiverStruct` contains two values: (1) a "config" variable and (2) the userId that will be the recipient of the stream.

The "config" variable is actually a single field which is used to encode a number of other variables into a single number. We can see how this works by taking a look at <a href="https://drips-js-sdk-api.netlify.app/modules.html#DripsReceiverConfig" target="_blank">DripsReceiverConfig</a>, which shows all of the variables that are part of a config value:

```
DripsReceiverConfig: {
    amountPerSec: bigint;
    dripId: bigint;
    duration: bigint;
    start: bigint
}
```

The SDK provides some helpful utility functions to help with converting `DripsReceiverConfig` structs to and from single-integer-encoded values. Take a look at  <a href="https://drips-js-sdk-api.netlify.app/modules/utils.dripsreceiverconfiguration#toUint256" target="_blank">Utils.toUint256</a> and <a href="https://drips-js-sdk-api.netlify.app/modules/utils.dripsreceiverconfiguration#fromUint256" target="_blank">Utils.fromUint256</a> to see how they work.

And to see a complete example of how these types and functions can be used to encode a configuration with a `startTime` and `duration` and schedule a Drip in practice, have a look at <a href="https://github.com/radicle-dev/drips-js-sdk/blob/1d1957983a1e220c27143164b9ed16f346db91c1/nft-driver-examples/src/routes/streams/SetDrips.svelte#L82" target="_blank">the relevant section of the setDrips() function</a> from the example app.

When scheduling Drips, one thing to consider is that the block time when your transaction is executed makes a difference. In particular, if you call `NFTDriverClient.setDrips()` with a `startTime` earlier than the block time when the transaction is executed, the new Drip will only start from the block time when the transaction was executed, not the time that you specified.

Therefore, if it is important to you that your Drip starts exactly on-schedule at `startTime`, always make sure that the transaction containing the `setDrips()` call is executed well before that time.
