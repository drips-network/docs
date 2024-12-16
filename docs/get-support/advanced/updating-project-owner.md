---
title: Updating the owner of a claimed project
---

When [claiming a project](/get-support/claim-your-repository) on Drips, the Ethereum address added to the `FUNDING.json` file on the GitHub repository's main branch is set to be the project's owner on-chain. This owner has the ability to manage the project's splits, dependencies, and maintainers, and to collect any claimable funds.

In order to change the owner of an already-claimed project, you'll need to send a simple transaction that requests the Drips oracle to look up the `FUNDING.json` file again, and update the owner on-chain.

In order to do that, follow these steps:

1. Edit your `FUNDING.json` file on your repo's main (default) branch with the desired new owner's Ethereum address. Ensure that you set the expected address for the right chain, for example `ethereum` or `filecoin`. Before editing the file, make sure that it's valid JSON and all Ethereum addresses are valid.
2. Head to the Drips' app ["Secret Menu" page](https://drips.network/app/secret-menu), which allows accessing some advanced functionality, including updating the owner of a project.
3. Under "Request project owner update", fill out the URL to your GitHub repository. Note that this field is **case-sensitive**, so the URL must match that on GitHub exactly.
4. If you haven't already, connect your wallet. It doesn't need to be the old or new owner address.
5. Click "Request owner update". The transaction will be proposed to your connected wallet. Send the transaction, and wait for it to be confirmed.
6. The Drips Oracle will pick up the request and update the owner of your project on-chain. After a few minutes, reload your project's page on Drips, and you should see the new owner.

:::caution
The above procedure only updates the **owner address** of the project, which is the address that may edit its metadata and splits configuration. It does NOT update your project's splits in any way. If you want to split funds to the new address, head over to the project's profile, click "Edit" next to its splits, and make the desired changes after updating the owner.
:::