---
title: Local LaTeX
author: joanalnu
---

:::tip[Summary]
If Markdown is a quick handwritten note (what we use on GitHub), LaTeX is a professional printing press. It is the industry standard across all academia for scientific publishing because it handles mathematics symbols, bibliographies, layouts and more automatically.
:::

:::caution[Prerequisites]
- [Unix](../101_unix)
- [Terminal](../102_terminal)
:::

## 1. Why Local LaTeX?

While tools like Overleaf exist, working **locally**, i.e. on your computer, gives you:

- **Speed:** No waiting for browser refreshes or lags
- **Git Integration:** Track changes to your paper just like you track changes to your code.
- **Power:** Avoid the compile timeout of the free version of Overleaf.


### Learning to Write LaTeX

This guideline shows you how to setup LaTeX compilation locally, however it does not address writing LaTeX files. To learn how to write math and other structures in LaTeX, check out the [Introduction to LaTeX](https://github.com/CAPIBARA3/papers/tree/main/Introduction_to_LaTeX) tutorial on GitHub. This is not a tutorial in the documentation because of the scope of this documentation and the face that this documentation is written in Markdown instead of LaTeX.


## 2. Installation

There are a lot of TeX distributions for different operating systems. Here, we recommend installing `BasicTeX` (macOS) and `TeX Live Small` (Linux/WSL), since they are very lightweight installations saving space while keeping essential engines.

### 2.1 Linux & WSL (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install texlive-latex-base texlive-latex-extra texlive-binaries
```

### 2.2 macOS

1. Install BasicTeX and update the TeX Live Manager
```bash
brew install --cask basictex
sudo tlmgr update --self
```

2. Install packages:
If you ever see a compilation error claiming "`missing <package-name>.sty`", run the following command to install it:

```bash
sudo tlmgr install <package-name>
```

if necessary, you can uninstall packages by running
```bash
sudo tlmgr uninstall <package-name>
```


## 2.3 Editor

You can edit LaTeX files as regular text files from your chosen text editor (VSCode, NeoVim, ...). You can also use the LaTeX Workshop extension, which provides auto-completion and built-in PDF viewer.


## 3. LaTeX Dictionary

| Term          | Meaning                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| `.tex`        | Your source code file. This is written in $\TeX$                                                              |
| `.bib`        | The bibliography files. This is where you write/copy your references in Bib$\TeX$.                            |
| Preamble      | The top of the file where you load packages and configuration. This is the content before `\begin{document}`. |
| Compilation   | The process of turning your code into a PDF.                                                                  |
| Aux/Log files | These files are created during compilation: ignore/hide these.                                                |


## 4. Compile a PDF

To compile a PDF we use the `pdflatex` command. Normally this is what you will run

```bash
pdflatex main.tex    # Generate the PDF
bibtex main          # Link the references
pdflatex main.tex    # Load the references
pdflatex main.tex    # Finalize the layout (ToC, labels, etc)
```


## 5. Collaboration

LaTeX files are plain text, which makes them perfect for Git.

1. **Clone & Branch**: Never work directly on `main`.
```bash
git clone git@github.com:capibara3/<repo-name>.git
git branch  <new-branch-name>
```

2. **Write:** Make your changes in the `.tex` file and compile the updated PDF

3. **Commit & Push:** Add only the `.tex`, `.bib`, and `.pdf` files. Avoid the `log` and `out` files, use `.gitignore` to ignore them.

:::tip[`.gitignore` Template]
Ignore these files is always appreciated unless explicitly stated otherwise.
```bash
*.aux
*.log
*.out
*.toc
*.blg
*.bbl
```
:::


## 6. Peer Review Rules

When you contribute on GitHub, you should always adhere to the []Contritbuting Guidelines](../governance/23_CONTRIBUTING.md). However, when contributing on LaTeX paper writing there are additional rules to observe:

1. **Addition-only**: if you are just adding text in your section, a team lead can merge it quickly just checking it complies with the standards.
2. **Modifying/Deleting**: if you are changing someone else's paragraph or equations, you **must** tag them as a reviewer and resolve the 'conflict of interests' in the comments before merging. The original author of the changing text must approve the pull request.a


:::note[Info]
If you are doing tutorials in a series, this is the last tutorial of the `coding` section (previously, `tech foundations`). You may now proceed to the `python` section.
:::
