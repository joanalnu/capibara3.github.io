---
title: Roadmap
author: joanalnu & gemini
---

Detailed Breakdown by Tutorial
Phase 1: Setup & Foundations

Goal: Prevent the classic "it works on my machine" problem and establish core language fluency.

    Tutorial 01: Modern Python Setup & Virtual Environments

        Why it matters: Young researchers often break their system Python by installing packages globally.

        Topics to cover:

            Why never to touch the OS default Python.

            Installing a package/environment manager (recommend standardizing on either Miniforge/conda for heavy scientific binary dependencies or uv/venv for lightweight setups).

            Creating, activating, and exporting reproducible environments (environment.yml or requirements.txt).

    Tutorial 02: Choosing Your Workflow — Scripts vs. Notebooks

        Why it matters: Students frequently write 1,000-line Jupyter notebooks that are impossible to version-control or run on a cluster.

        Topics to cover:

            Setting up VS Code with the Python and Jupyter extensions.

            When to use Jupyter Notebooks (data exploration, quick plots, reporting) vs. .py scripts (reusable pipelines, simulations, batch jobs).

            Running scripts from the terminal and passing basic command-line arguments.

    Tutorial 03: Core Python Essentials for Scientists

        Why it matters: A fast-paced refresher tailored to scientific problems rather than generic web development examples.

        Topics to cover:

            Numeric types (int, float, complex), strings (f-strings for formatting numbers and units), and booleans.

            Core data structures: list (ordered series), tuple (immutable coordinates/constants), dict (parameter mappings), and set.

            Control flow (if/elif/else, for, while, enumerate, zip) and list comprehensions.

Phase 2: Writing Clean, Collaborative Code

Goal: Transition students from writing "throwaway scripts" to writing code that other CAPIBARA members can read, trust, and reuse.

    Tutorial 04: Functions, Modules, and Scientific Project Layout

        Why it matters: Copy-pasting code blocks across notebooks leads to silent calculation bugs.

        Topics to cover:

            Defining pure functions with clear inputs, outputs, default arguments, and basic type hints (def calc_energy(mass: float) -> float:).

            Writing NumPy-style docstrings (explaining parameters, units, and return values).

            Organizing a repository: separating data/, notebooks/, src/, and tests/, and importing custom functions across files.

    Tutorial 05: Collaboration Guidelines — Style, Linting & Formatting

        Why it matters: Replaces outdated formatting rules with automated tools so students don't waste time arguing over spaces vs. tabs.

        Topics to cover:

            Naming conventions for science (avoiding single-letter variables like temp, a, x2 in favor of temperature_kelvin, acceleration_ms2).

            PEP 8 essentials and using ruff (or black + flake8) to auto-format code on save.

            How to keep secrets, hardcoded local file paths (/Users/john/Desktop/...), and large raw data files out of Git using pathlib and .gitignore.

    Tutorial 06: Debugging, Exceptions & Unit Testing Scientific Code

        Why it matters: In science, code that runs without crashing can still produce physically impossible results.

        Topics to cover:

            Reading Python tracebacks from bottom to top.

            Using assert and ValueError to enforce physical constraints (e.g., probabilities between 0 and 1, positive Kelvin temperatures).

            Writing simple unit tests with pytest (including pytest.approx for floating-point comparisons).

Phase 3: The Scientific Python Ecosystem

Goal: Equip students with the core libraries used in day-to-day data analysis, modeling, and paper writing.

    Tutorial 07: Numerical Computing with NumPy & SciPy

        Why it matters: Python for loops are slow; vectorized array operations are fast and concise.

        Topics to cover:

            Creating ndarray objects, indexing, slicing, and boolean masking (filtering outliers).

            Vectorization and broadcasting (replacing nested loops with array math).

            Essential SciPy tools: scipy.constants (physical constants), scipy.optimize.curve_fit (fitting models to experimental data), and scipy.integrate.

    Tutorial 08: Data Handling & Analysis with Pandas

        Why it matters: Experimental and observational data rarely arrive clean.

        Topics to cover:

            Loading and saving data formats (CSV, Excel, Parquet/HDF5 for large datasets) using pathlib and Pandas.

            Inspecting DataFrame objects, handling missing values (NaN), and filtering rows.

            Grouping, aggregating (groupby), and computing summary statistics.

    Tutorial 09: Publication-Quality Visualization with Matplotlib & Seaborn

        Why it matters: Default plots rarely meet journal or collaboration standards.

        Topics to cover:

            The Matplotlib object-oriented interface (fig, ax = plt.subplots()).

            Scientific plotting essentials: error bars (ax.errorbar), logarithmic scales, subplots, and colorblind-safe palettes (viridis, cividis).

            Formatting axes with units, LaTeX math notation (r"$\alpha_s$ [GeV]"), collaboration style sheets (.mplstyle), and exporting vector graphics (.pdf, .svg) for LaTeX papers.
