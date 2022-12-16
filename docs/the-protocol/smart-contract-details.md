---
id: smart-contract-and-subgraph-details
title: Smart Contract and Subgraph Details
---
  
## Goerli Testnet

### Smart Contract Details -- Deployment #8

#### Goerli Testnet 

<table>
<tr><td>Network</td><td>goerli</td></tr>
<tr><td>Deployer address</td><td>0x341a08926dCa7fa7D135F96E4d76b696e5f6d38d</td></tr>
<tr><td>Caller</td><td>0x4e31F3538c9BE4Cf1E0911D08290f5DDF4E57747</td></tr>
<tr><td>Reserve</td><td>0x96457167280107e578a664533d9Dc0759968F317</td></tr>
<tr><td>DripsHub</td><td>0x9EAd3182f7590a9981236375B33D31D682A5E9CD</td></tr>
<tr><td>DripsHub logic</td><td>0x7aAC7813f7167bB8A0BD3393aE84c9D26fC8E5Cd</td></tr>
<tr><td>DripsHub cycle seconds</td><td>604800</td></tr>
<tr><td>AddressDriver</td><td>0x19C957afB73F16010269fdA4a649017a9f613A0f</td></tr>
<tr><td>AddressDriver logic</td><td>0x80bF441AB345955FfE7F4d0083005a0Cc87eF920</td></tr>
<tr><td>AddressDriver ID</td><td>0</td></tr>
<tr><td>NFTDriver</td><td>0xBD3E202E5D65B1C506AdEA83fd41c53799c6D565</td></tr>
<tr><td>NFTDriver logic</td><td>0xD200652Fef8377eB6C7Ed67E7C98D3E6D295f0E2</td></tr>
<tr><td>NFTDriver ID</td><td>1</td></tr>
<tr><td>ImmutableSplitsDriver</td><td>0xA94B5a04A511937973F30A14F4dA9f30E8E35EB6</td></tr>
<tr><td>ImmutableSplitsDriver logic</td><td>0x5703E575854201283ecF67B2f4F99BBC4052699E</td></tr>
<tr><td>ImmutableSplitsDriver ID</td><td>2</td></tr>
<tr><td>Commit hash</td><td>5de9961b6d30ff78a16190d321b2840772214601</td></tr>
</table>

#### Mumbai Testnet 

<table>
<tr><td>Network</td><td>polygon-mumbai</td></tr>
<tr><td>Deployer address</td><td>0x341a08926dCa7fa7D135F96E4d76b696e5f6d38d</td></tr>
<tr><td>Caller</td><td>0xBD3E202E5D65B1C506AdEA83fd41c53799c6D565</td></tr>
<tr><td>Reserve</td><td>0xd998881Eb29BD4F0665C9a45941369C7226c71f2</td></tr>
<tr><td>DripsHub</td><td>0xA94B5a04A511937973F30A14F4dA9f30E8E35EB6</td></tr>
<tr><td>DripsHub logic</td><td>0x5703E575854201283ecF67B2f4F99BBC4052699E</td></tr>
<tr><td>DripsHub cycle seconds</td><td>604800</td></tr>
<tr><td>AddressDriver</td><td>0x4D18e63af9fDF2c8382e9198127a24aDA0DD57d9</td></tr>
<tr><td>AddressDriver logic</td><td>0x22CeCf1CB0935143c1a99Ee7e9Dc57f8Acb5063F</td></tr>
<tr><td>AddressDriver ID</td><td>0</td></tr>
<tr><td>NFTDriver</td><td>0x68401644F791293AA46DF37D70a6b4F1A7e88Ab7</td></tr>
<tr><td>NFTDriver logic</td><td>0xa084EB22827a5e9BB49a63AE76f66ac47A607B88</td></tr>
<tr><td>NFTDriver ID</td><td>1</td></tr>
<tr><td>ImmutableSplitsDriver</td><td>0xDfB1364ec55cA15E1cc286933776e70252EC1e39</td></tr>
<tr><td>ImmutableSplitsDriver logic</td><td>0x28703A7C5B25b58d6732fA14A62B25aFae189e38</td></tr>
<tr><td>ImmutableSplitsDriver ID</td><td>2</td></tr>
<tr><td>Commit hash</td><td>4e56074f7f2d13248165ef9f02ae5ab3f8d773dd</td></tr>
</table>

### Subgraph Details

The repository for the subgraph's code can be found 
<a href="https://github.com/radicle-dev/drips-subgraph/tree/v0.2" target="_blank">here</a>.

#### Goerli - Subgraph Page and Endpoints

Subgraph page on The Graph's Hosted Mode website:
<br><a href="https://thegraph.com/hosted-service/subgraph/gh0stwheel/drips-v02-on-goerli" target="_blank">https://thegraph.com/hosted-service/subgraph/gh0stwheel/drips-v02-on-goerli</a>

Subgraph endpoints:
Queries (HTTP):
<br>https://api.thegraph.com/subgraphs/name/gh0stwheel/drips-v02-on-goerli

Subscriptions (WS):
<br>wss://api.thegraph.com/subgraphs/name/gh0stwheel/drips-v02-on-goerli

#### Mumbai - Subgraph Page and Endpoints

Subgraph page on The Graph's Hosted Mode website:
<br><a href="https://thegraph.com/hosted-service/subgraph/gh0stwheel/drips-v2-on-mumbai" target="_blank">https://thegraph.com/hosted-service/subgraph/gh0stwheel/drips-v2-on-mumbai</a>

Subgraph endpoints:
Queries (HTTP):
<br>https://api.thegraph.com/subgraphs/name/gh0stwheel/drips-v2-on-mumbai

Subscriptions (WS):
<br>wss://api.thegraph.com/subgraphs/name/gh0stwheel/drips-v2-on-mumbai

#### How to Get Testnet Eth and DAI

The main faucet for the Goerli testnet is now operated by Alchemy. You will need to sign up for an Alchemy account to get testnet
ETH and you can do so [here][gf]. Alternately, you can use [this proof-of-work faucet][gp].

To get DAI on Goerli:

1. First get testnet ETH from the faucet.

2. Go to <a href="https://app.compound.finance/" target="_blank">https://app.compound.finance/</a> and connect a wallet, then make sure your wallet is connected to the Goerli testnet.

3. Click on `DAI`, select `Withdraw` and scroll down to a `Faucet` link.


[gf]: https://goerlifaucet.com/
[gp]: https://goerli-faucet.pk910.de/
[sb]: https://goerlifaucet.com/