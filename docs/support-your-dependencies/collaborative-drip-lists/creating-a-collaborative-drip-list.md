---
title: Creating a collaborative Drip List
---

import Figure from '../../components/Figure'
import Video from '../../components/Video'

With a Collaborative Drip Lists, a group of people can come together and vote on the recipients of a Drip List before it gets deployed on-chain. This makes it easy to settle on a list of dependencies with distributed teams, and even allows running larger Public Goods Funding programs on Drips.

<Video playing={false} muted={false} src='/video/collaborative-lists.mp4' caption="Overview over Collaborative Drip Lists." />

## Creating a collaborative Drip List

To create a new collaborative Drip List, simply click **Drip Lists → Create Drip List**, and select "Collaborate on recipients". You'll be asked to provide a list of *collaborators*, which can be any selection of ETH addresses, and when the voting should end. Additionally, you can choose to hide the list of collaborators and their votes from the public.

Once created, a collaborative Drip List lives off-chain until *published* after voting is concluded. During the voting period, *collaborators* may submit their votes.

:::info
Currently, voting is only possible for creating an entirely new Drip List. Soon, it'll also be possible to vote on a new set of receivers for an existing Drip List.
:::


<Figure caption="Lifecycle of a collaborative Drip List." src="/img/fund/collab-drip-list-lifecycle.png" />

### Publisher

The address that creates the collaborative Drip List is considered its *publisher*. As the publisher, you may delete the list after creating it, and *publish* it on-chain after voting is concluded. Once published, the list is on-chain, and can be funded with support streams or one-time donations by anyone.

:::info
Collaborative Drip Lists may be shared with their URL, and appear on the publisher's public profile the same way a non-collaborative Drip List does.
:::

### Collaborators

You can configure up to five thousand individual Ethereum addresses to act as "collaborators" for your collaborative Drip List.

Each collaborator will be able to submit a vote within the voting period you configured. Once the collaborative Drip List has been submitted, a "Submit your vote" button will appear on the Drip List's page if the app is connected to a collaborator's wallet.

While voting, collaborators are asked to submit what they think the recipients of the list should be. All votes are tallied continously, and a preview of what the list would look like if voting were to end right now is displayed (unless you chose to "hide collaborators").

#### Hide collaborators

If you enable "Hide collaborators" during the Drip List creation flow, only you as the publisher may reveal the list of collaborators and their individual votes. Anyone else will only be able to submit and see their own vote. In this mode, votes are only tallied at the end of the voting period, and only the final results are automatically publicized. No-one but the publisher may see who voted for what, though it is possible to check whether a particular address has submitted a vote or not. Please note that while our systems don't expose the full list of collaborators and their votes to the public in this mode, both are stored off-chain in a private database operated by the Public Goods Association.

### Restricting possible recipients

By default, collaborators can add any possible recipient and assign percentages during the voting process. You can optionally choose to specify up to two hundred Ethereum addresses, open-source GitHub repositories, or other Drip Lists that the possible recipients of the vote will be restricted to.

<Figure caption="Restricting possible recipients of a collaborative Drip List." src="/img/fund/collab-drip-list-restrict-recipients.png" />

In this mode, collaborators can only assign percentages to the specified possible recipients, and not add any others. Collaborators can choose to assign 0% to one or more of the possible recipients, as long as the total percentage allocation of their vote adds up to 100%.

## How votes are tallied

Every collaborator is asked to vote for what they think the final Drip List should look like — specifically, what Projects, ETH addresses, or other Drip Lists should receive what percentage of funds. The final result of the voting round is simply an average percentage of a particular recipient across all votes, capped to the top 200 recipients by overall percentage.
