---
title: Security
---

At Drips, we take security seriously and have taken a number of steps to ensure the security of our smart contracts on Ethereum.

### High test coverage and fuzz tests

Our codebase has a high level of unit test coverage and we used Foundry to fuzz-test the key features of our contracts.

### Security Reviews

A complete audit of the smart contracts has been completed by [Spearbit](https://spearbit.com/) as of November 2023:

See the [Spearbit Network Security Review](/img/Spearbit_Drips_Network_Security_Review.pdf)

Previously to the Spearbit audit, we also worked with an independent security auditor to conduct smart contract security reviews during the development of the contracts:

See the [Security Report](/img/Drips_Audit_Report.pdf)

In addition, a member of the Drips core team is also a security auditor, so we were able to leverage their expertise in this area to perform an internal audit:

See the [Internal Report](https://hackmd.io/6_EgTHw6TVGlfxls0iKMAQ?view)

We also worked with Code4rena to conduct an audit contest where 26 wardens conducted analysis of the protocol and smart contracts and provided feedback:

See the [Code4rena Report](https://code4rena.com/reports/2023-01-drips)

Drips has a public [bug bounty program with Immunefi](https://immunefi.com/bounty/drips/).

`BridgedGovernor` and `Giver` contracts were audited separately, see the [Cantina Security Report](/img/cantina-05-july-2024-report-review-drips.pdf).

The `RepoDriver` migration to Gelato was audited separately, see the [Cantina Security Report](/img/report-cantinacode-drips-0722-4.pdf).

### Certora

Additionally, we have worked with the [Certora](https://www.certora.com/) team to formally verify certain parts of our smart contracts. This involved mathematically proving the correctness of our code, which helps to identify and eliminate potential vulnerabilities.

While we are excited about the potential of using formal verification to improve the security of our smart contracts, it's important to note that this technology is still in its early stages and at an experimental level for Drips.

However, we believe that it is important to stay at the forefront of technology and explore new approaches to smart contract security.  By doing so, we hope to gain valuable insights and improve our security measures over time.

You can read the [report from Certora](/img/Certora_Radicle_Drips_Report.pdf), or explore [our work on invariants with the Certora prover in Github.](https://github.com/radicle-dev/drips-contracts/tree/certora)

### Risk

Of course, it's important to note that despite our efforts to ensure the security of our smart contracts, there is always a certain level of risk involved.

:::warning
No system is completely immune to security threats, and it's impossible to guarantee that our smart contracts will never be exploited.
:::
