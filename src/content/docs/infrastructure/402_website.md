---
title: 49 Website
author: joanalnu
---

:::tip[Summary]
In this guide you will learn how the CAPIBARA website is built and deployed, how to preview your changes locally, and how to publish them through a pull request.
:::

:::caution[Prerequisites]
- [Git](../coding/103_git)
- [GitHub](../coding/104_github)
- [Node.js](https://nodejs.org) (LTS version) with the `npm` package manager
:::

## 1. Overview

The website lives in the [`capibara3/website`](https://github.com/capibara3/website) repository and is built with [Astro](https://astro.build). Astro compiles the content (mostly markdown, the same format used in notes, discussions and everywhere on GitHub) into static HTML/CSS/JS pages. The site is hosted on [Cloudflare Pages](https://developers.cloudflare.com/pages/).

The repository has two long-lived branches:

| Branch | Content | Published at |
|--------|---------|--------------|
| `main` | The website (production) | the main CAPIBARA domain |
| `docs` | The documentation (see [Documentation](403_documentation)) | `docs.<project>.pages.dev` |

Changes to the website go to `main`; changes to the documentation go to `docs`. Never mix both in the same pull request.

## 2. Installation

To edit the website you can either edit the files directly on `github.com`, or download the repository to preview your changes before publishing them (recommended).

First, clone the repository (assuming you have [ssh](../coding/103_git) set up):
```shell
git clone git@github.com:capibara3/website.git
cd website
```
Then install the dependencies:
```shell
npm install
```

## 3. Editing the Website

The repository structure looks roughly like this:
```shell
src/
    content/    # -> markdown content, edit these files for text changes
    pages/      # -> page templates and routes
    components/ # -> reusable pieces of layout
public/         # -> static files (images, favicon, ...)
astro.config.mjs
package.json
```
For most changes (news, people, pages) you only need to edit the markdown files in `src/content`. Each file starts with a short block of metadata (the *frontmatter*):
```markdown
---
title: My page
author: your_username
---
```
followed by the content in markdown. Put images in `public/` (or next to the content, if the page supports it) and reference them with a relative path.

## 4. Previewing Your Changes

Start the local development server:
```shell
npm run dev
```
and open [http://localhost:4321](http://localhost:4321) in your browser. The page reloads automatically whenever you save a file.

Before opening a pull request, check that the production build works:
```shell
npm run build
npm run preview
```
If the build fails, the same failure would happen on Cloudflare and the website would not be updated.

## 5. Publishing Your Changes

Never push directly to `main`. Instead, create a branch, commit your changes and open a pull request:
```shell
git switch -c my_username/my_branch
git add .
git commit -m "Added that, removed this"
git push origin my_username/my_branch
```
If you have the [GitHub CLI](https://cli.github.com) installed you can create the pull request with
```shell
gh pr create
```

Cloudflare Pages automatically builds a **preview deployment** for every branch and pull request, and the preview link appears in the pull request. Use it to check your changes online (and to share them with reviewers) before merging.

When the pull request is merged into `main`, Cloudflare automatically builds and publishes the updated website. This may take a few minutes.

## 6. Administration

*This section is for maintainers with access to the Cloudflare account.*

The Cloudflare Pages project is connected to the `capibara3/website` repository with these settings:

| Setting | Value |
|---------|-------|
| Production branch | `main` |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |

Preview deployments are enabled for all other branches, which is how the `docs` branch is published as `docs.<project>.pages.dev`. The custom domain is configured in the Cloudflare Pages project under *Custom domains*.

## Troubleshooting

- **`npm run dev` fails after pulling changes:** run `npm install` again, dependencies may have changed.
- **Build works locally but fails on Cloudflare:** check that your local Node version matches the one set in the Cloudflare project (you can pin it with a `.node-version` file in the repository root).
- **The preview link does not appear in the pull request:** open the *Deployments* tab of the Cloudflare Pages project and check the build log.

## Resources

Please, consult the documentation of each tool:
- [Astro Docs](https://docs.astro.build)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Markdown](https://www.markdownguide.org/)
