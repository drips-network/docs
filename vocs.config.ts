import { defineConfig } from 'vocs';

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
            },
          ],
        },
      ],
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
            },
          ],
        },
      ],
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
        {
          text: 'Drips SDK',
          collapsed: true,
          items: [
            {
              text: 'Overview',
              link: '/advanced/drips-sdk/overview',
            },
            {
              text: 'Installation',
              link: '/advanced/drips-sdk/installation',
            },
            {
              text: 'Quick Start',
              link: '/advanced/drips-sdk/quick-start',
            },
            {
              text: 'Initialization',
              link: '/advanced/drips-sdk/initialization',
            },
            {
              text: 'Blockchain Client Support',
              link: '/advanced/drips-sdk/blockchain-client-support',
            },
            {
              text: 'IPFS Metadata Uploader',
              link: '/advanced/drips-sdk/ipfs-metadata-uploader',
            },
            {
              text: 'GraphQL Configuration',
              link: '/advanced/drips-sdk/graphql-configuration',
            },
            {
              text: 'Modules',
              link: '/advanced/drips-sdk/modules',
            },
            {
              text: 'Error Handling',
              link: '/advanced/drips-sdk/error-handling',
            },
            {
              text: 'API Reference',
              link: '/advanced/drips-sdk/api-reference',
            },
          ],
        },
      ],
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
          ],
        },
      ],
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
      ],
    },
  ],
});
