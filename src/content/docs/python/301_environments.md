---
title: Modern Python Environments
author: joanalnu
---

:::tip[Summary]
We are going to install Python and setup a proper working environment for our packages.
:::

:::caution[Prerequisites]
- [Unix](../coding/101_unix)
- [Terminal](../coding/102_terminal)
:::

## 1. Why Python

[Python](https://python.org) is one of the most popular programming languages, for its versatility, simplicity and lots of powerful packages. It is well-adopted in research and engineering, and one of the most common software professional tools.

## 2. Installing Python

Python is pre-installed in many devices running Linux or MacOS. To check whether you already have installed it run the following command in the terminal

```bash
python --version
```

Write `python3` instead of `python` to look for Python version >3.0 in particular. If you get something like

```bash
python 3.10.0
```

you already have Python installed. You can run the following command to find out the location of your Python installation

```bash
which python # or which python3
```

If you don't have Python installed, follow the steps for your operating system.

### 2.1 Linux

If you are using Linux or Ubuntu via WSL, you can install Python using a package manager like `apt`:

```bash
sudo apt update # update package list
sudo apt install python3
python3 --version # verify installation
```

### 2.2 MacOS

The most common package manager for MacOS is [Homebrew](https://brew.sh/). If you haven't installed it yet, follow the instructions on their official website to do so.

Once Homebrew is installed, you can install Python by running

```bash
brew install python
python3 --version
```

## 3. Package Managers

The Python programming language is just the base. For instance, it allows you to do calculations, but for advanced mathematical expressions you need additional packages, such as NumPy for 'numerical Python'. Here's a list of popular packages that nearly everyone uses:

| Package Name | Usecase |
| --- | --- |
| NumPy | Array Computations and Math |
| Matplotlib | Plotting & Data Visualisation |
| Pandas | Tabular data tools |
| Scikit-Learn | Machine Learning Algorithms |

In order to install and manage the version of these packages, we use tools called package managers. We also uses these tools to create environments or virtual environments. Environments allow us to install packages only inside a project's environment, instead of system-wide, which allows for different versions and avoids compatibility issues across projects on the same computer.

In this guideline, we are going to show how to install and use `pip` and `uv`, since these are popular choices. While `pip` is the traditional choice, `uv` is a recent (launched 2024), very fast (Rust) package manager written.


### 3.1 `uv` (recommended)

`uv` is a fast Python package and project manager written in Rust, developed by Astral (and recently acquired by OpenAI). It replaces several traditional Python tools including `pip`, `venv`, `pip-tools`, and parts of `pyenv` and `pipx`.

**Installation**

If you know you already have `pip` installed, you can simply run `pip install uv`. If not, go the [`uv` official website](https://docs.astral.sh/uv/) and follow the instructions for your operating system.

Verify the installtion by running
```bash
uv --version
uv --help
```

**Usage**

You actually don't need to have installed Python, `uv` can download and manage Python versions automatically:

```bash
uv python install 3.12 # installs python3.12
uv python list # list available and installed Python versions
uv python find 3.12 # find a python executable (same as which python)
```

You can create a project using `uv` ad install only project specific dependencies.

```bash
# create project folder
uv init myproject
cd myproject

uv add requests # add 'requests' dependency
uv run main.py # uv can even run python scripts
# in this case we assume there is a file named 'main.py' containing some python code
```

The project directory will probably look similar to

```
myproject/
├── .python-version  # project's selected python version
├── .venv            # project virtual environment, created when needed only
├── pyproject.toml   # project configuration and dependency declarations
├── main.py          # user code
├── README.md        # user README, as the name says, this file is the main description fo the project
└── uv.lock          # exact resolved dependency versions for reproducible environments
```

If you already have a pre-existing project folder and only want to create a virtual environment to install some specific dependencies, you can run 


to create a virtual environment. Then use `uv pip install [...]` to install packages.


**Typical Commands**

```bash
uv init <project-name>          # create a new project
cd <project-name>

uv add <package-name>           # install a dependency
uv remove <package-name>        # remove a dependency

uv run main.py                  # run a python script with the environment dependencies
uv run python -m pytest         # run a python module


uv sync         # install/sync dependencies
uv lock         # update the lock file
uv tree         # list dependency tree

uv self update # update uv
```



### 3.2 `pip`

**Installation**

`pip` automatically is instaled by default with Python after `v3.4`, you can check for it by running
```bash
pip --version
```

**Usage**

You can install and uninstall packages running
```bash
pip install <pacakge-name>
# example: pip install numpy
# you can also install a specific version using
# pip install numpy>==2.5.0
# or pip install numpy>=2.3.0

pip uninstall <package-name>
```

You can also manage `pip` itself
```bash
pip install --upgrade pip
```

The `--upgrade` flag means the latest version of the package is reinstalled.

You can show the information of an installed package (e.g., what version), running
```bash
pip show <package-name>
```

