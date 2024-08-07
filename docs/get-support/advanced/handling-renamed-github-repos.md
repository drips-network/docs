---
title: Handling renamed GitHub repositories
---

import Figure from '../../components/Figure'

Due to Drips' unique decentralized and permissionless approach to Public Goods Funding, there are a few extra considerations when it comes to handling funds sent to GitHub repositories on Drips that were later renamed on GitHub. Let's dive a bit deeper into why that is, and how best to handle it.

<Figure caption="Wevm's abitype project handling funds sent to an outdated Drips project by splitting 100% of funds to the new project." src="/img/raise/rename/abitype.png" />

## Background

Every public GitHub repository gets a project profile on Drips and may be funded by anyone. Behind the scenes, our on-chain Smart Contracts assign an `accountId` to every possible GitHub repository URL, and then allow access to those accounts through an ownership assertation system that involves adding a `FUNDING.json` file to a particular GitHub repository.

:::info
Read more about the access control system for Drips projects [here](/get-support/claim-your-repository). If you'd like to dive deeper into Drips' account system, go [here](/the-protocol/accounts-in-drips).
:::

As a result of this, anyone can theoretically split or directly send funds to any possible GitHub repository URL, even if that URL does not (currently) correspond to an existing repo. In practice, the Drips App will automatically validate any entered GitHub URL when creating splits, and...

- reject attempts to split to a non-existent GitHub repo URL,
- automatically replace URLs to a repo that has been renamed with its new URL,
- automatically correct the casing of URLs to the exact casing as set in the repo name on GitHub (because GitHub repo URLs are case-insensitive).

In addition, when navigating to a project profile on Drips corresponding to the old URL of a now-renamed GitHub repo, the app will display a disclaimer that links to the new Drips project, and hide the "Become a Supporter" section.

In practice, this means that any *new* funds split or directly sent to your renamed repo on Drips will go to the Drips project corresponding with its new, up-to-date URL. However, this doesn't apply to any funds split or sent to your project *before* its repo has been renamed — those will stay with the Drips project corresponding to the *old* repo URL. In addition, a different project or Drip List that has been set to split to that old URL will continue splitting any new funds it receives to that same outdated Drips project.

But, of course **no funds are ever lost**: GitHub always redirects all traffic to an outdated repo URL to the new URL / name of that repo. This makes it possible to simply claim an "outdated" Drips project using the same `FUNDING.json` file present within the newly-renamed repo.

## Recommended approach

This recommended approach for handling a renamed GitHub repo ensures that you only need to maintain a single set of maintainer and dependency splits, that *all* funds sent to both the outdated and new Drips projects are distributed to. This is achieved by claiming both projects (the outdated one that received funds, and the new, renamed one), and setting the outdated project to split 100% of its funds to the new one.

<Figure caption="Handling a renamed project by splitting 100% of funds from the old project to the new." src="/img/raise/rename/solution.png" />

### Step-by-step

#### Claim the old project

1. Navigate to the Drips project profile corresponding to your repo's old URL. **Tip**: When entering a GitHub repo URL into the search bar, the app usually automatically redirects you to the renamed project. You can get around this by appending `?exact` to the project profile URL — for example: `https://drips.network/app/projects/github/gh-username/old-repo-name?exact`
2. Click "Claim project" to initiate the claim flow, and follow the instructions.
3. When prompted to choose the maintainer / dependency split percentage, drag the slider so that all funds are going to "dependencies".
4. Configure a single "dependency": Your own, newly renamed repo. To do so, just paste the (renamed) GitHub repo URL into the splits editor.
5. Continue following the instructions until you've successfully claimed the old project.

All funds received by the old project are now claimable on the new project.

:::info
In some cases, the funds received by your old project may not make their way over to the new, renamed project for a while — this is temporary. They will be moved latest by the next [settlement date](/get-support/claim-your-repository#settlement-of-future-funds).
:::

#### Claim the new project

1. Navigate to your new, still unclaimed Drips project.
2. Click "Claim project" to initiate the claim flow, and follow the instructions.
3. Configure maintainers & dependencies according to your wishes. All past & future funds sent to both your old & new Drips projects will be distributed accordingly.
4. Continue following the instructions until you've successfully claimed the old project.

That's it! All claimable funds should now have been distributed according to your splits configuration. If this hasn't happened yet, you may have to wait until the next [settlement date](/get-support/claim-your-repository#settlement-of-future-funds).
