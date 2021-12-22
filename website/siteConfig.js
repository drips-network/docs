/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "Drips docs",
  tagline: "When you drip I drip we drip.",
  url: "https://drips.radicle.network",
  baseUrl: "/",
  projectName: "radicle-drips-docs",
  organizationName: "radicle-dev",
  headerLinks: [],
  headerIcon: "img/drips-logo2.png",
  favicon: "img/favicon.ico",
  colors: {
    primaryColor: "#5555ff",
    secondaryColor: "#ff55ff",
  },
  highlight: {
    theme: "default",
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  onPageNav: "separate",
  cleanUrl: true,
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",
  algolia: {
    apiKey: "8bd6e28f1096b67612c18dbc3ba55438",
    indexName: "radicle",
  },
};

module.exports = siteConfig;
