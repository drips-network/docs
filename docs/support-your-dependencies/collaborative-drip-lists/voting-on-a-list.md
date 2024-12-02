---
title: Voting on a list
---

import Video from '../../components/Video'

Voting on a collaborative Drip List is quick, easy, and entirely gasless. Here's a step-by-step guide on how to submit your vote.

<Video src='/video/how-to-vote.mp4' caption="Voting on a collaborative Drip List. The list in this example is pre-configured with a set of possible recipients, and has hidden collaborators." />

## Step-by-step

1. **Navigate to the Drip List in voting.** Either follow a link directly to the Drip List in voting, or open the Drips App and find its creator's profile by using the Search button in the top-right corner.
2. **Connect your wallet.** Click "Connect" in the top-right corner and choose the wallet address that you are eligible to vote with.
3. **Click "Cast your vote".** If the currently-connected wallet address is a collaborator for the given list, the button will appear in the "Collaborators" section automatically.
4. **Assign percentages.** If the list has a set of pre-configured recipients, assign percentages to them according to your will. If there are no pre-configured recipients, first add any set of open-source GitHub repositories, other Drip Lists, or Ethereum addresses. Your percentages must add up to 100% before you can proceed.
5. **Submit your vote.** Once your percentages are assigned, click Submit, and confirm the vote signature in your wallet. Voting is off-chain, and entirely gasless. You'll be able to change your vote at any point within the voting period.
6. **Wait for the results.** If the Drip List in question is configured to hide collaborators, you'll be able to see the final results at the end of the voting period. If its collaborators are public, you can immediately see a running tally of what the list would look like if voting were to end right now.

### Voting with a Safe Multisig

If your collaborator address is managed by a Safe Multisig, follow the instructions in [Usage with a Safe](/advanced/usage-with-a-safe) to launch Drips within the Safe{Wallet} web app. You'll be able to vote by following the same steps outlined above, except your vote signature will require reaching quorum on your Safe.

## How votes are tallied

Every collaborator is asked to vote for what they think the final Drip List should look like — specifically, what Projects, ETH addresses, or other Drip Lists should receive what percentage of funds. The final result of the voting round is simply an average percentage of a particular recipient across all votes, capped to the top 200 recipients by overall percentage.
