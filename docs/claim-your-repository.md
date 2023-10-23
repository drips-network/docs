---
title: Claim your open-source project
---

import Figure from './components/Figure'

A _Project_ on Drips represents an open-source repository on GitHub, with support for other Git hosts coming soon. Every GitHub repository starts out on Drips as _unclaimed_. In this state, it can already be funded with a Drip List, or added as a dependency of another project. At any point, the project's maintainers can _claim_ their project on Drips, configure a list of _maintainers_ and _dependencies_, and collect any previously-received earnings. Future incoming funds are then automatically split as configured, resulting in even deeply-nested dependencies receiving their share.

:::info
If you haven't yet, learn more about the Drips Network's fundamentals in our [introduction](/).
:::

## How funds reach projects

On Drips, individuals or organizations wishing to financially support their dependencies [can do so with a _Drip List_](support-your-dependencies). Funds sent to Drip Lists are automatically _split_ to its recipients (projects, Ethereum addresses, or other Drip Lists) once per week. When funds reach a project from a Drip List, they are further split according to the project's dependencies and maintainers, resulting in a global, fundable _dependency tree_.

<Figure caption="Funds enter the Drips Dependency Tree through Drip Lists, and are automatically split down to projects." src="/img/introduction/splitting_graph.png" />

## Your repository on Drips

To find your repository's associated Drips project, simply launch the Drips App, paste its GitHub URL into the search bar, and click **Jump to GitHub repo**. On the resulting project screen, you can see whether your project already accumulated any _claimable funds_, and quickly jump into the claim process by clicking **Claim project**.

<Figure caption="You can check if your project has claimable funds on its project view." src="/img/raise/unclaimed.png" />

## How Drips manages project access

Drips is built on Ethereum, a global, decentralized blockchain. On Drips, every claimed project is owned by an _Ethereum address_. You can learn more about Ethereum and create your own personal Ethereum address by [downloading and installing an Ethereum wallet app](https://ethereum.org/en/wallets/).

As part of the claim process, the on-chain Drips Smart Contracts ensure that a particular Ethereum address should be able to manage a project and its funds by checking whether its default branch on GitHub includes a `FUNDING.json` file in the root directory. Because Smart Contracts cannot just access the internet, Drips uses an [Oracle service](https://ethereum.org/en/developers/docs/oracles/) to fetch the `FUNDING.json` file.

<Figure caption="During the claim process, Drips' Smart Contracts check for a `FUNDING.json` file on the GitHub repository's _default_ branch." src="/img/raise/claim-process.png" />

The `FUNDING.json` file includes an Ethereum address, which will subsequently be granted access to the repository on Drips. This is an example; your real FUNDING.json file will include your own Ethereum address, and will automatically be generated for you as part of the claiming process.

```json
{
  "drips": {
    "ethereum": {
      "ownedBy": "0x0000000000000000000000000000000000000000"
    }
  }
}
```

:::info
If your project is led by a group of multiple individuals, you may consider using a [Safe multisig](https://safe.global/) to claim it on Drips. This will allow requiring a specific amount of individuals to agree on changes to who the project splits income to in the future. Learn how to use Drips with a Safe multisig [here](usage-with-a-safe).
:::

## Claiming your project

You can enter the claim process by launching the Drips App, connecting your Ethereum wallet, and navigating to **Projects → Claim project**. As part of the flow, you'll be asked to commit a `FUNDING.json` file to the repository's _default_ branch. If in order to do so you need to wait for a PR to be reviewed, you can simply resume the flow later.

Once the `FUNDING.json` file has been verified, you'll be asked to configure a list of _maintainers_ and _dependencies_ that incoming funds will be split to, and customize your project's appearance on Drips.

:::info
To claim your project, you will need a small amount of ETH in your connected Ethereum wallet to cover Ethereum's network ["gas fee"](https://ethereum.org/en/developers/docs/gas/).
:::

After you're done, your project will be claimed, and any future earnings will be split according to your configuration.

<Figure caption="An example claimed project on Drips." src="/img/introduction/project.png" />

### Editing your project

You can edit your project's appearance and split configuration at any point in the future by navigating to it from the Projects tab, and clicking **Edit** on the thing you'd like to change.

## Collecting earnings

If your project already has claimable funds, the claim process will immediately apply the percentage splits to maintainers and dependencies you set up. If you yourself received a portion of the claimable funds, you will be able to immediately transfer them to your Ethereum wallet by navigating to **Projects → Earnings** after you've successfully claimed your project.

## Settlement of future funds

Funds in the global Drips Dependency Tree are automatically split _once per week_, resulting in effective _weekly settlement_. This means that after claiming, funds may reach your project weekly, and will automatically be forwarded according to your configured splits to maintainers and dependencies.

You can at any point review the next settlement day within the Drips App's "Projects" tab, but please note that the settlement doesn't occur exactly at midnight, but rather at some point throughout the indicated day, roughly within the UTC time zone.

If you are set as the maintainer of a project, you can check for and collect any earnings by navigating to **Projects → Earnings** within the Drips app.
