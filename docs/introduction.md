---
slug: /
title: Introduction
---

import Figure from './components/Figure'
import Disclaimer from './components/Disclaimer'

Drips is an app built on Ethereum that enables flexibly supporting open-source projects, with built-in _dependency splitting_.

## How funds flow on Drips

On Drips, anyone can create a _Drip List_ to flexibly send funds to a list of up to 200 open-source GitHub repositories and Ethereum addresses at a time. As project maintainers come to Drips to claim their funds, they themselves are asked to provide a list of other projects they depend on, and can choose to automatically forward a percentage of their earnings to them. Over time, this results in a global _dependency tree_, ensuring that even deeply-nested dependencies receive a portion of funds donated to their higher-level dependents. Thanks to our integration with GitHub, anyone can support any public GitHub repository (or list it as one of their own project's dependencies), even if their maintainers haven't yet registered it on Drips.

<Figure caption="The Drips Dependency Tree is a fundable representation of real-world software dependencies." src="/img/introduction/splitting_graph.png" />

### Supporting your dependencies with Drip Lists

Individuals and organizations wishing to support their dependencies can do so by creating their _Drip List_; a collection of up to 200 GitHub repositories, Ethereum addresses, or other Drip Lists, which are each assigned a specific percentage of funds sent to the list. The Drip List creator can now start sending a specific amount of any ERC-20 token to their list in form of a _stream_, which they can flexibly alter or stop at any point in the future. Once a month (on the last Thursday of every month), funds streamed to the list are automatically _split_ to its recipients. Those funds are then further split according to _their_ dependencies, and so on.

<Figure caption="Drip Lists allow anyone to flexibly and continously support a selection of up two 200 projects." src="/img/introduction/drip_list.png" />

Further, _anyone else_ can choose to support someone else's Drip List by simply adding it to _their_ Drip List, or sending one-time donations.

:::info

Learn how to create your Drip List and start supporting your dependencies [here](/support-your-dependencies/overview).

:::

### Raising funds by claiming your software project

A _Project_ on Drips represents an open-source repository on GitHub, with support for other Git hosts coming soon. Every GitHub repository starts out on Drips as _unclaimed_. In this state, it can already be funded with a Drip List, or added as a dependency of another project. At any point, the project's maintainers can _claim_ their project on Drips, configure a list of _maintainers_ and _dependencies_, and collect any previously-received earnings.

<Figure caption="Projects on Drips are fundable representations of GitHub repositories that automatically split income to their maintainers and dependencies." src="/img/introduction/project.png" />

Similarly to Drip Lists, each project can configure up to 200 _splits receivers_, and any funds coming in to the project (from Drip Lists or other projects) are automatically distributed accordingly once a month. The _splits_ of a project include both _maintainers_, which are Ethereum addresses that should directly receive a specific portion of earnings, and _dependencies_, which are _other projects_ that the particular project depends on.

:::info

Learn how to claim your GitHub repository on Drips [here](/get-support/claim-your-repository).

:::

<Disclaimer />
