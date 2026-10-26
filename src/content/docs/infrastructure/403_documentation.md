---
title: Documentation
author: joanalnu
---

:::tip[Summary]
In this guide you will learn how the CAPIBARA documentation is organised, how to write and preview pages, and how to publish your changes.
:::

:::caution[Prerequisites]
- [Git](../coding/103_git)
- [GitHub](../coding/104_github)
- [Node.js](https://nodejs.org) (LTS version) with the `npm` package manager
- Read the [Website](402_website) guide first, the workflow is the same.
:::

## 1. Overview

The documentation is built with [Starlight](https://starlight.astro.build), a documentation theme for [Astro](https://astro.build). It lives in the `docs` branch of the [`capibara3/website`](https://github.com/capibara3/website) repository, next to the website (`main` branch), and is published by Cloudflare Pages at `docs.<project>.pages.dev`.

Pages are written in markdown. Starlight turns them into a searchable site with a sidebar, a table of contents on each page and dark/light mode.

## 2. Installation

Clone the repository and switch to the `docs` branch:
```shell
git clone git@github.com:capibara3/website.git
cd website
git switch docs
npm install
```

## 3. Writing Documentation

### 3.1 Where Files Live
All pages are markdown files inside `src/content/docs/`. The folder structure determines the URL: `src/content/docs/coding/103_git.md` is published as `/coding/103_git/`.

```shell
src/content/docs/
    index.mdx        # -> landing page
    coding/          # -> Unix, terminal, Git, GitHub, ...
    packages/        # -> creating packages
    ...
astro.config.mjs     # -> site title and sidebar
```

### 3.2 Page Format
Every page starts with a frontmatter block. `title` is required:
```markdown
---
title: Creating Packages
description: How to structure, version and publish a Python package.
author: your_username
---

## 1. Introduction
...
```
The `title` is rendered as the page heading, so start your content with `##` headings and do not repeat the title as a `#` heading.

### 3.3 Callouts
Starlight supports callout boxes (*asides*) with the `:::` syntax. These are used at the top of tutorials for the summary and prerequisites:
```markdown
:::tip[Summary]
What you will learn in this tutorial.
:::

:::caution[Prerequisites]
- [Git](../coding/103_git)
:::
```
Available types are `note`, `tip`, `caution` and `danger`.

### 3.4 Links
Use standard markdown links with relative paths:
```markdown
[Git](../coding/103_git)
```
The wiki-style links (`[[file|text]]`) used in the previous setup are **not** supported and have to be converted.

### 3.5 Code Blocks
Specify the language after the opening backticks for syntax highlighting (`shell`, `python`, `text`, ...). Optionally, add a title:
````markdown
```python title="setup.py"
from setuptools import setup
```
````

### 3.6 Sidebar
The sidebar is configured in `astro.config.mjs`. It can be generated automatically from the folders, so a new page in an existing folder shows up without further changes. Sidebar order follows the file names, which is why tutorials are numbered (`101_unix`, `102_terminal`, ...). To change the order or labels, edit the `sidebar` option; see the Starlight documentation linked below.

## 4. Previewing Your Changes

```shell
npm run dev
```
and open [http://localhost:4321](http://localhost:4321). Before opening a pull request, check that the build succeeds and has no broken links:
```shell
npm run build
```

## 5. Publishing Your Changes

Create a branch **from `docs`**, push it and open a pull request **targeting `docs`** (not `main`):
```shell
git switch docs
git switch -c my_username/my_docs_change
git add .
git commit -m "Added tutorial on X"
git push origin my_username/my_docs_change
gh pr create --base docs
```
Cloudflare Pages builds a preview of your pull request, and the link appears in the pull request. Once it is merged into `docs`, the documentation at `docs.<project>.pages.dev` is updated automatically after a few minutes.

## Troubleshooting

- **A page does not appear in the sidebar:** check that the file is inside `src/content/docs/`, has a `title` in its frontmatter and has the `.md` or `.mdx` extension.
- **A link is broken:** use relative paths without the file extension, and no wiki-links.
- **Build fails with a frontmatter error:** make sure the block starts and ends with `---` and the YAML is valid (quote titles containing a colon).

## Resources

- [Starlight Docs](https://starlight.astro.build)
- [Astro Docs](https://docs.astro.build)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Markdown](https://www.markdownguide.org/)
