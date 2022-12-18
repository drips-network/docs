---
id: security
title: Security
---

At Radicle, we take security seriously and have taken a number of steps to ensure the security of our smart contracts on Ethereum. 

### High test coverage and fuzz tests

Our codebase has a high level of unit test coverage and we used Foundry to fuzz-test the key features of our contracts.

### Security Reviews
First and foremost, we worked with an independent security auditor to conduct smart contract security reviews during the development.

We performed two external security reviews:
See [Security Report](/img/drips-audit-report.pdf)

In addition, one team member is a security auditor, so we were able to leverage their expertise in this area and performed an internal audit. 

See [Internal Report](https://hackmd.io/6_EgTHw6TVGlfxls0iKMAQ?view)


### Certora
Additionally, we are working with [Certora](https://www.certora.com/) team to formally verify certain parts of our smart contracts. This involved mathematically proving the correctness of our code, which helps to identify and eliminate potential vulnerabilities.

While we are excited about the potential of using formal verification to improve the security of our smart contracts, it's important to note that this technology is still in its early stages and at an experimental level for Drips. 

However, we believe that it is important to stay at the forefront of technology and explore new approaches to smart contract security.  By doing so, we hope to gain valuable insights and improve our security measures over time.

See our work on invariants for the [Certora-Prover](https://github.com/radicle-dev/drips-contracts/tree/certora)


### Bug Bounty Immunefi

In the upcoming weeks, we will be launching a bug bounty on Immunefi. This will allow the broader community to help identify and report any potential issues with our smart contracts.

We will share the link here.
https://immunefi.com/

### Code4rena (C4)

Finally, we will be hosting a smart contract contest on Code4rena before our mainnet launch. |
This will give developers the opportunity to review our code and offer suggestions for improvement.

https://code4rena.com/

### Risk

Of course, it's important to note that despite our efforts to ensure the security of our smart contracts, there is always a certain level of risk involved.

>No system is completely immune to security threats, and it's impossible to guarantee that our smart contracts will never be exploited.


