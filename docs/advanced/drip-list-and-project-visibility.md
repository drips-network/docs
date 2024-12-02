---
title: Managing Drip List and project visibility
---

import Figure from '../components/Figure'

By default, newly-claimed projects and created Drip Lists are publicly visible across the Drips App, including on their owner's profiles. However, as the owner of a project or Drip List, you may choose to *hide* them. In addition, Drip Lists transferred to another address must be explicitly un-hidden before appearing on the new owner's public profile.

<Figure caption="Example of a hidden project." src="/img/advanced/hidden-project.png" />

## Controlling visibility of a project or Drip List

In order to hide or un-hide a project or Drip List, connect your wallet, navigate to the project or Drip List in question, click "Edit" next to its name, and toggle the "Hidden" switch. Lastly, confirm the change in your wallet.

### Visibility of transferred Drip Lists

Drip Lists are represented on-chain as ERC-721 tokens (NFTs), and may thus be transferred between Ethereum addresses. Due to the nature of the blockchain, anyone may send any other address any token(s) they own, even without explicit consent by the receiving party. In order to prevent unwanted Drip Lists to inadvertedly appear on users' profiles, Drip Lists are **automatically hidden** upon transfer, with the caveats listed below. Should you receive a Drip List that you wish to display on your profile, simply un-hide it as described above.

### Effects of hiding a project or Drip List

When a project or Drip List is hidden, it will:

- no longer appear on their owner's public Drips profile,
- be hidden behind a "Show hidden" toggle on the owner's own dashboard,
- be greyed out on any other projects, Drip Lists, or users that already split or donated to the now-hidden project or Drip List pre-hiding,
- no longer allow creating new donations or splits to it via the official Drips App, and
- be hidden from Google and other search engines.

However, due to Drips being an open & transparent, blockchain-based protocol:

- Hidden projects or Drip Lists are **not** hidden on the Ethereum blockchain, and may be discovered by looking at raw blockchain data itself.
- Users with direct links to hidden projects or Drip Lists **can still access them**, but the app will display a banner informing them that the project or Drip List is hidden.
- If other projects or Drip Lists are (still) splitting funds to a now-hidden project or Drip List, the hidden project will **still appear** on those entities' pages, but will be greyed out and marked as hidden.
- While the Drips App will generally prevent new funds from being sent to hidden projects or Drip Lists, **it is still possible to send funds** by interacting directly with the underlying smart contracts, through third-party apps, or if a split to a now-hidden project was established before it was hidden.
