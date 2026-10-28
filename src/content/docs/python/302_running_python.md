---
title: Interactive and vs Script Running
author: joanalnu
---

:::tip[Summary]
This tutorial shows you how to run Python code interactively as well as creating and running Python scripts.
:::

:::caution[Prerequisites]
- [Unix](../coding/101_unix)
- [Terminal](../coding/102_terminal)
- [Environments](../301_environments)
:::

## Interactive Python in the Command Line

Open the terminal and run
```bash
python # or python3
```

to initiate the interactive Python shell. Inside this environment, you can run Python code line by line. Pressing enter will run the code and 

### Example

```bash
$python3
Python 3.9.6 (default, Aug 25 2026, 21:26:21) 
[Clang 21.0.0 (clang-2100.3.34.2)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> 1+1
2
>>> print("Hello World!")
Hello World!
>>> 2**2
4
>>> ^D
```

You can escape the environment pressing `Ctrl + D`.


## Scripted Python

To make Python code reproducible and practical, you can create a Pythons script (file). On the terminal, follow these steps:

1. **Create a file**

```bash
touch script.py
```

2. **Edit the file**

```bash
nano script.py # to open the file
```

Then, write some Python code like

```python [file=script.py]
print(1+1)
print("Hello World!")
```

Save and close the file using `Ctrl+O` and `Ctrl+X` on `nano`. Then, on the command line run the file using

```bash
python3 script.py
```

You will see the output being printed to the terminal.


### Editing Python files

To edit Python files, you can use you text editor of choice. A common GUI choice is VSCode. To open a Python project from the terminal in VSCode, you can use the command `code .` (which means open VSCode on the folder `.`, current folder.).


## Python Notebooks

In scientific computing, we often want to combine executable code, plots, equations (LaTeX) and explanatory text in a single document. Python Notebooks (files ending in `.ipynb`) allow you to organize your work into individual cells that you can run and modify at one time.

### Jupyter Notebook & JupyterLab

Jupyter is the standard tool for working with notebooks locally on your computer.

1. **Install jupyter** inside your venv

```bash
uv add jupyterlab
# or 
pip install jupyterlab
```

2. **Launch JupyterLab** from your project folder in the terminal
```bash
jupyter lab
```

This command will open a new tab in your default web browser where you can create `ipynb` files. Notebooks are composed of two main cell types:

* **Code cells*: Write and execute Python code by pressing `Shift + Enter`. Variables and imports are defined in one cell remain in memory for other cells.
* **Markdown cells**: Write formatted notes, bullet points, and LaTeX math equations (e.g., $E = mc^2$) to document your reasoning alongside your analysis.

:::tip[Notebooks in VS Code]
You don't always have to use your web browser! If you install the official Jupyter extension in VS Code, you can open, edit and run `.ipynb` files directly inside your code editor.
:::

### Google Colab

Google Colaboratory (Colab) is a free, cloud-based Jupyter Notebook environment hosted by Google ([colab.research.google.com](https://colab.research.google.com)).

* **Zero local setup** since it runs entirely in your browser and comes pre-installed with common libraries (`numpy`, `scipy`, `pandas`, `matplotlib`).
* **Easy sharing**: Notebooks are saved to Google Drive and can be shared with collaborators just like a Google Doc, or loaded directly from a GitHub repository.
* **Free hardware accelerators**: Colab provides free access to GPUs and TPUs, which is helpful when running machine learning models or heavy numerical simulations.

:::caution[Collaboration Best Practice: Hidden State]
Because notebook cells can be executed in **any order**, it is easy to accidentally create a notebook that only works on you screen because of a variable you deleted or ran out of sequence earlier.

Before sharing a notebook or pushing it to GitHub, always click **Kernel -> Restart Kernel and Run All Cells** to verify that your notebook runs cleanly from top to bottom without errors!
:::



## How to decide?

| Method | Best for ... | Avoid for ... |
| --- | --- | --- |
|**Interactive shell** |quick sanity checks, testing a single command, using Python as a calculator|anything you want to save or share|
|**Notebooks** |data exploration, plotting, step-by-step tutorials, and sharing visual reports|very long pipelines, automated jobs, or functions reused across multiple projects|
| **Scripts** |reusable functions, large simulations, automated data processing, clean Git version control|Rapid visual tweaking of plots (re-running whole script every time is slow)|

