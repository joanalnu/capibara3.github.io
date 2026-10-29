---
title: Plans for future tutorials
author: joanalnu & gemini
---


:::tip[Summary]
Python is a key tool in our collaboration. There are many Python use cases, libraries, ... make sure to check documentation and tutorials outside the collaboration's docs. Learning Python is a very good skill not only for CAPIBARA but also for later in your career.
:::



Here is a summary of the pages that are still unwritten. We would be very grateful if you could contribute to any of these.

You can check how to edit the documentation in [Documentation](../infrastructure/403_documentation).




## Pages to be writen


### 303_python_basics

**A fast-paced refresher tailored to scientific problems rather than generic web development examples.**

Topics to cover:
- Numeric types (int, float, complex), strings (f-strings for formatting numbers and units), and booleans.
- Core data structures: list (ordered series), tuple (immutable coordinates/constants), dict (parameter mappings), and set.
- Control flow (if/elif/else, for, while, enumerate, zip) and list comprehensions.

Include resources to learning Python, you can't teach a programming language in a documentation page!

### 304_functions_modules

**Copy-pasting code blocks across notebooks leads to silent calculation bugs.**

Topics to cover:

- Defining pure functions with clear inputs, outputs, default arguments, and basic type hints (def calc_energy(mass: float) -> float:).
- Writing NumPy-style docstrings (explaining parameters, units, and return values).
- Organizing a repository: separating data/, notebooks/, src/, and tests/, and importing custom functions across files.

  
### 305_numpy_scipy

**Python for loops are slow; vectorized array operations are fast and concise.**

Topics to cover:
- Creating ndarray objects, indexing, slicing, and boolean masking (filtering outliers).
- Vectorization and broadcasting (replacing nested loops with array math).
- Essential SciPy tools: scipy.constants (physical constants), scipy.optimize.curve_fit (fitting models to experimental data), and scipy.integrate.


### 306_pandas

**Experimental and observational data rarely arrive clean.**

Topics to cover:

- Loading and saving data formats (CSV, Excel, Parquet/HDF5 for large datasets) using pathlib and Pandas.
- Inspecting DataFrame objects, handling missing values (NaN), and filtering rows.
- Grouping, aggregating (groupby), and computing summary statistics.

### 307_visualisation

**Default plots rarely meet journal or collaboration standards.**

Topics to cover:

- The Matplotlib object-oriented interface (fig, ax = plt.subplots()).
- Scientific plotting essentials: error bars (ax.errorbar), logarithmic scales, subplots, and colorblind-safe palettes (viridis, cividis).
- Formatting axes with units, LaTeX math notation (r"$\alpha_s$ [GeV]"), collaboration style sheets (.mplstyle), and exporting vector graphics (.pdf, .svg) for LaTeX papers.


### 308_guidelines

**Replaces outdated formatting rules with automated tools so students don't waste time arguing over spaces vs. tabs.**

Topics to cover:
- Naming conventions for science (avoiding single-letter variables like temp, a, x2 in favor of temperature_kelvin, acceleration_ms2).
- PEP 8 essentials and using ruff (or black + flake8) to auto-format code on save.
- How to keep secrets, hardcoded local file paths (/Users/john/Desktop/...), and large raw data files out of Git using pathlib and .gitignore.



### 309_testing

**In science, code that runs without crashing can still produce physically impossible results.**

Topics to cover:
- Reading Python tracebacks from bottom to top.
- Using assert and ValueError to enforce physical constraints (e.g., probabilities between 0 and 1, positive Kelvin temperatures).
- Writing simple unit tests with pytest (including pytest.approx for floating-point comparisons).

