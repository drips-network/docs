import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  logoUrl: '/img/logo.svg',
  topNav: [
    {
      text: 'Home',
      link: 'https://drips.network',
    },
    {
      text: 'Launch app',
      link: 'https://drips.network/app',
    },
    {
      text: 'GitHub',
      link: 'https://github.com/drips-network',
    },
  ],
  sidebar: [
    {
      text: 'Introduction',
      link: '/',
    },
    {
      text: 'Support your dependencies',
      items: [
        {
          text: 'Overview',
          link: '/support-your-dependencies/overview',
        },
        {
          text: 'Collaborative Drip Lists',
          items: [
            {
              text: 'Create a collaborative list',
              link: '/support-your-dependencies/collaborative-drip-lists/creating-a-collaborative-drip-list',
            },
            {
              text: 'Vote on a list',
              link: '/support-your-dependencies/collaborative-drip-lists/voting-on-a-list',
            }
          ]
        },
      ]
    },
    {
      text: 'Get support for your project',
      items: [
        {
          text: 'Claim your repository',
          link: '/get-support/claim-your-repository',
        },
        {
          text: 'Advanced',
          collapsed: true,
          items: [
            {
              text: 'Handle renamed GitHub repos',
              link: '/get-support/advanced/handling-renamed-github-repos',
            },
            {
              text: 'Update the owner of a project',
              link: '/get-support/advanced/updating-project-owner',
            }
          ]
        },
      ]
    },
    {
      text: 'Advanced usage',
      items: [
        {
          text: 'Using Drips with a Safe',
          link: '/advanced/usage-with-a-safe',
        },
        {
          text: 'Drip List & Project visibility',
          link: '/advanced/drip-list-and-project-visibility',
        },
      ]
    },
    {
      text: 'The Drips protocol',
      collapsed: true,
      items: [
        {
          text: 'Overview',
          link: '/the-protocol/overview',
        },
        {
          text: 'Drips V2 features',
          link: '/the-protocol/drips-v2-features',
        },
        {
          text: 'Drips accounts',
          link: '/the-protocol/accounts-in-drips',
        },
        {
          text: 'Smart Contract details',
          link: '/the-protocol/smart-contract-details',
        },
        {
          text: 'Security',
          link: '/the-protocol/security',
        },
        {
          text: 'Advanced',
          collapsed: true,
          items: [
            {
              text: 'Account metadata',
              link: '/the-protocol/advanced/account-metadata',
            },
            {
              text: 'Batching with Caller',
              link: '/the-protocol/advanced/batching-with-caller',
            },
            {
              text: 'Drips inner workings',
              link: '/the-protocol/advanced/drips-inner-workings',
            },
            {
              text: 'Fractional amounts',
              link: '/the-protocol/advanced/fractional-amounts',
            },
          ]
        },
      ]
    },
    
    {
      text: 'FAQ',
      link: '/faq',
    },
    {
      text: 'Legal',
      items: [
        {
          text: 'Accessing Drips',
          link: 'https://drips.network/legal/access',
        },
        {
          text: 'Legal disclaimer',
          link: 'https://drips.network/legal/disclaimer',
        },
        {
          text: 'Privacy Policy',
          link: 'https://drips.network/legal/privacy',
        },
      ]
    }
    
  ],
});
