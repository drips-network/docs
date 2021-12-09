---
id: create-a-community
title: Create a Community
---

This is a guide for creators or developers who wish to set up a Community and issue member NFT tokens to
raise funds from their fans.

Let's jump in and see how it works!

## Create a Community

First, open a new browser tab and navigate to [https://drips.radicle.network/][da].

Next, click on the 'Create' button in the top right corner of the page.
</br>  
![Click Create][c1]
 
You will be prompted to connect a wallet. Go ahead and do so in order to proceed. The rest of this guide will assume the use of Metamask, but the steps are similar with other wallets.
</br>  
![Connect Your Wallet][c2]
 
Once a wallet has been connected, the "Create a Community" screen will appear.
</br>  
![Create Detail Screen 1][c3]

Fill out basic information about your Community, including any links to social media accounts. Then click "Next".
</br>  
![Create Detail Screen 2][c4]

On this page you'll be able to configure details for the "member tokens" (NFT membership badges) that your supporters will receive. A few notes:

- *Minimum subscription* is the minimum monthly funding amount that supporters must commit to drip to you in order to become a member.
- *Token Symbol* is the symbol that will be associated with your member tokens, and is a standard value that all NFTs must define as part of the ERC-721 standard. If you're not certain about what to enter, you should choose a short text string that you feel represents your community. For instance, if the name of your community is "Computer Club", you might choose
"COMP" for the symbol.
- *Monthly Funding Goal* (optional) is a way for you to let your fans know the total amount of funds you hope to raise each month through Drips.
- *Custom Token Image IPFS Hash* (optional) allows you define a custom image that will appear on your community's member tokens when they are viewed in the Drips web app, or on sites like Opensea, by entering the hash of the image in IPFS. Instructions on how to upload an image to IPFS are beyond the scope of this guide, and in order to use this functionality it is probably best to be an advanced user.

After filling these out, click "Next" again to continue.
</br>  
![Create Detail Screen 3][c5]

This is the fun part! Here you can configure drips which will share a percentage of the funds your Community receives
with other users or Communities in your ecosystem. For example, you might choose to drip to contributors or developers
on your team, or to Communities for software libraries that you depend on.

You can add as many drip shares as you would like here by clicking the "+" button. Once you are finished, click "Review"
to move on to a final screen to review everything before submitting your transaction to Ethereum.
</br>  
![Create Detail Screen 4][c6]

On this screen, check everything carefully and make sure it looks good! Especially the fields in red, since once you
go ahead those values will be permanent and cannot be changed or updated later.

When you're ready to continue, click "Create".
</br>  
![Create Detail Screen 5][c7]

You will be prompted by your wallet to Confirm the transaction. Note that while the Drips protocol does not charge a fee to create a Community, you will need to pay the necessary gas fees to deploy the ERC-721 contract to Ethereum, so please make sure to carefully review the transaction amounts before clicking "Confirm".

After you've clicked "Confirm" there will be a delay of up to 1-2 minutes while the transaction is being added to a block and confirmed. Once that has happened you will be taken to the page for your new Community. 
</br>  
![Create Detail Screen 6][c8]

Congrats! You have created a Community on Drips and are ready to start raising funds from supporters! 

For a guide on how your supporters can purchase member tokens from your Community page, please head over to our [Purchase a Membership guide][pm].

For instructions on how set up benefits for your members, check out our guide on [Setting Up Benefits][sb].

[da]: https://drips.radicle.network/
[c1]: /img/drips_create1.png
[c2]: /img/drips_create2.png
[c3]: /img/drips_create3.png
[c4]: /img/drips_create4.png
[c5]: /img/drips_create5.png
[c6]: /img/drips_create6.png
[c7]: /img/drips_create7.png
[c8]: /img/drips_create8.png
[pm]: using-drips/purchase-a-membership.md