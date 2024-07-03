/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Support your dependencies',
      items: [
        'support-your-dependencies/overview',
        'support-your-dependencies/collaborative-drip-lists',
      ],
    },
    {
      type: 'category',
      label: 'Get support for your project',
      items: [
        'get-support/claim-your-repository',
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'get-support/advanced/handling-renamed-github-repos',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'The Drips protocol',
      items: [
        'the-protocol/overview',
        'the-protocol/drips-v2-features',
        'the-protocol/accounts-in-drips',
        'the-protocol/smart-contract-details',
        'the-protocol/security',
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'the-protocol/advanced/account-metadata',
            'the-protocol/advanced/batching-with-caller',
            'the-protocol/advanced/drips-inner-workings',
            'the-protocol/advanced/fractional-amounts',
          ]
        }
      ]
    },
    'usage-with-a-safe',
    'access',
    'faq',
  ],
};

module.exports = sidebars;
