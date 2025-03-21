---
title: FAQ
---

### Are there fees for using Drips?

The Drips Protocol is free to use and does not impose any fees on users. Users will still need to pay gas
fees to interact with the Drips Contracts as they would with any contract on Ethereum.

Third-party apps building on Drips may choose to impose fees of their own.

### Can I split or stream funds directly to exchange-managed Ethereum addresses?

No. When an address receives funds on Drips, the owner of that address needs to *collect* them before they are transferred to their wallet. Exchanges typically offer non-custodial addresses specifically for receiving ERC-20 tokens on various networks, but offer no way to sign contract interactions from those addresses. As a result, funds sent on Drips to such a custodial, exchange-managed address may be unrecoverable. For this reason, only split or stream funds to self-custodial wallets, such as externally-owned wallets (EOAs) or smart contract wallets (multisigs) like Safe.

### Do I need to have ETH in my account to send or receive tokens using Drips?

Users of Drips generally do need to have ETH (or the analogous gas token to ETH on networks other than Ethereum)
available in their wallet to cover transaction fees, if they wish to create streams or Splits to 
stream or share funds with others. Users do not need to have ETH in their accounts to receive
funds from other users who are streaming or Splitting to them. However, they will need to have
a small amount of ETH available in their account when they are ready to collect funds sent to
them (again, to cover gas costs of sending the collect transaction). In certain situations, Drips may "sponsor" the claiming of projects or collecting of funds. In this case, the transaction screen will indicate that gas is "paid for by Drips".

### What happens to funds that have been streamed to a Github repository that is never claimed by its owner?

For now, nothing happens to these funds and they will remain in Drips waiting for the repository owner to claim them forever. It's possible that in the future the governance of the Drips protocol will decide to change this, so that funds given to a Github repository that go unclaimed are donated to an alternative public goods fund like Gitcoin, or to some other cause.
