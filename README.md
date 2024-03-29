# Welcome to Drips Docs 👋

This is the repository containing the Docusaurus code that is used to generate
the docs for v2 of Drips. The main branch of this repository contains the docs for V2 of the Drips Protocol and app and is deployed at: [docs.drips.network][v2]. The branch "v1" contains the docs for V1 of the Drips Protocol and app and is deployed at: [v1.docs.drips.network][v1].

The drips-docs repository accepts contributions via Radicle patches
and GitHub pull requests. This document outlines some contributing guidelines,
contact points, and other resources to make it easier to contribute to
drips-docs.

[docs.drips.network][v2] was created with [Docusaurus][do]. Full Docusaurus
documentation can be found on their [website][do].

If you've run into a problem or have a suggestion, browse the open [issues][is]
before opening a new one.

## Best Practices for Managing Contributions

- If a question is asked more than twice in a support channel, it should be
  added as an outstanding ![troubleshooting][tr] issue. If a resolution is found, it should be
  captured in the issue before it's closed or in a following pull request.
  Those involved in the support process should contribute to the documentation
  (i.e. if you answered the question, be sure to capture the outcome in the
  relevant documentation).

- ![improvement][im] issues should be created to capture upcoming documentation work
  related to new features or releases.

## How to Contribute

- [Get Started](#get-started)
- [Editing Content](#editing-an-existing-docs-page)
- [Adding Content](#adding-a-new-docs-page-to-an-existing-sidebar)

### Get Started

1. Make sure all the dependencies for the website are installed:

```sh
npm
```

2. Run your dev server:

```sh
npm run start
```

3. Publish to GH Pages

```sh
GIT_USER=<ENTER_YOUR_GITHUB-USERNAME_HERE> \
CURRENT_BRANCH=master \
USE_SSH=true \
npm run deploy
```

### Editing an Existing Docs Page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.md`

```markdown
---
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click [here][na].

### Adding a New Docs Page to an Existing Sidebar

1. Create the doc as a new markdown file in `/docs`, example
   `docs/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here...
```

1. Refer to that doc's ID in an existing sidebar in `website/sidebars.json`:

```javascript
// Add newly-created-doc to the Getting Started category of docs.
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```

For more information about adding new docs, click [here][na].

[do]: https://docusaurus.io
[im]: https://img.shields.io/badge/-improvement-blueviolet
[is]: https://github.com/radicle-dev/radicle-docs/issues
[na]: https://docusaurus.io/docs/en/navigation
[tr]: https://img.shields.io/badge/-troubleshooting-%23FBCA04
[v1]: https://v1.docs.drips.network
[v2]: https://docs.drips.network
