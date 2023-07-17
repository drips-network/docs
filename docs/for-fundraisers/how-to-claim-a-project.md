---
id: how-to-claim-a-project
title: How to Claim a Project
---

With Drips, funders can send financial support (in the form of ERC20 tokens) directly to public software projects and the developers who contribute to them, regardless of whether the developers who own the project have Ethereum addresses or not.

The way this works is that the tokens are streamed to a Drips account associated with a software repository on a public forge (Github, Gitlab, Radicle, etc.). And then separately, either before or after that, any developer with commit rights on that repository can show up and claim the funds by adding a FUNDING.json file to the root of the repository's default branch and associating an Ethereum address with the account.

To give this a try with your project, start by navigating to <a href="https://drips.network/" target="_blank">drips.network</a> and then click on "Open App" in the top right corner of the page to open the Drips Web app. Next, you will need to connect a web3 wallet to start using the app.

Once your wallet is connected, click on the "Project" button in the menu on the left and then click on "Claim Project".

![The Claim Project button](/img/drips-app/drip-lists/how_to_claim_a_project_1.png)

Enter the full URL of the repository you would like to claim and then click "Submit". *Note that currently, only Github is supported and that the repository must be public.*

![The Claim Project button](/img/drips-app/drip-lists/how_to_claim_a_project_2.png)

Assuming you entered a valid URL, the app will display the amount of funds that have been sent to the account associated with the repository in Drips. Unless you have reason to believe that someone has sent funds to your project, most likely there will be no funds available to claim. But regardless of whether funds are available or not, if you're an owner of the project, you can still move forward with claiming ownership.

To do so, click the "Continue" button to proceed.

![The Claim Project button](/img/drips-app/drip-lists/how_to_claim_a_project_3.png)

Now the app will display the address of the wallet you are connected with. Before you move forward, make sure you are connected with the Ethereum address that you wish to associate with the repository to act as its owner, on-chain. If you wish to use a different address, now is a good time to disconnect your wallet, reconnect with the wallet you want to use, and then repeat the steps above to return to this point.

When you're ready to proceed, click "Continue".

![The Claim Project button](/img/drips-app/drip-lists/how_to_claim_a_project_4.png)

Now you will need to add a file called FUNDING.json in the root directory of the default branch of your project. As described in the instructions, this file will need to contain the JSON fragment that is shown, in order to correctly associate your Ethereum address with the project.

*Note -- if you are logged into Github, the Drips webapp UI provides a handy shortcut to help stage a commit for the required FUNDING.json file in your Github repo with the correct contents pre-filled. To try this, simply click on the...*

<br>
![The Claim Project button](/img/drips-app/drip-lists/how_to_claim_a_project_icon.png)
<br>

*...button in the UI.*

After you've added the FUNDING.json file and are ready to proceed, check the box next to "I added the FUNDING.json file..." and finally click "Verify now". Assuming the contents of the file are correct, this will initiate the process of directing the Chainlink-based oracle to query your repository and check for the presence of the file. Please be patient.

Once this has completed, the next step is to set up the splits configuration for your projects. This configuration determines how funds sent to the project by funders will be divided between maintainers and other project that your project depends on. Use the slider in the UI to set this split however you would like. When you're ready, click "Continue".

![The Claim Project button](/img/drips-app/drip-lists/how_to_claim_a_project_5.png)

Now you have a chance to add Ethereum addresses (or ENS names) for other maintainers who contribute to the project. Add any other maintainers who you would like to share funds with and then adjust the values to the right of the entries to specify how the funds going to the "maintainers" part of the split should be divided. When you are ready to proceed, click "Continue" again.

![The Claim Project button](/img/drips-app/drip-lists/how_to_claim_a_project_6.png)

This step is similar to the previous one, except here you are specifying how the funds sent to the "dependencies" part of the split should be divided among other projects that your project depends on. Add as many Github repository URLs, or Ethereum addresses as you would like and specify the percentage that you would like each to receive. When you are ready, click "Continue" again.

![The Claim Project button](/img/drips-app/drip-lists/how_to_claim_a_project_7.png)

This is the last step -- here you have the chance to review everything. Make sure to look everything over carefully before continuing. Once you are satisfied, click "Confirm in wallet".

You will be prompted to confirm a transaction and then you will have to wait. Please be patient. Assuming that all goes well, you will be sent to the profile screen for your newly-claimed project. You have now claimed your project on Drips! Any funds streamed or *given* to the project will be split to the different maintainer and dependency accounts you specified in your configuration.

Conratulations and thank you for claiming your project on Drips and helping to bring the interdependent ecosystem of FOSS public goods on-chain!

