---
title: Terminal
author: joanalnu
---

:::tip[Summary]
The **Terminal** (also called Command Line or Shell) is a text-based way to talk to your computer. Instead of clicking icons, you type instructions. It's faster, customisable and more powerful.
:::

:::caution[Prerequisites]
- [UNIX](../101_unix)
:::

## 1. Opening the Terminal

Before you can type, you need to open the terminal:
- **macOS:** Press `Cmd + Space`, type "Terminal" and hit Enter.
- **Linux/WSL:** Press `Ctrl + Alt + T`.

## 2. Navigation

Think of the terminal as a "File Explorer" (Explorer/Finder) without the windows. You are always inside a folder.

- `pwd` (print working directory): Shows the path to the folder you are currently standing in.
- `ls`(list): Shows the list of files and folders inside you current location.
- `cd <folder>`(change directory): Moves into a folder.


When you open the terminal, you can run `pwd` and you will see something similar to `/users/username`. This is the path to your home directory.

You can then run `ls` to see what directories you already have. Probably you will find something like `Desktop` or `Downloads`. Go ahead and type `cd Downloads` and `ls`. You will see the files in your Downloads folder.

:::tip[Changing Directory]
* `~` is a shortcut to your home directory. Running `cd ~/` or `cd ~/Desktop`, will get you there.
* To return to a previous directory, run `cd ../`. `../` described the path to the mother directory.
:::


## 3. Managing Files & Folders

:::danger[Remove Commands]
Running a remove command (`rm`, `rmdir` or `rm -r`), **fully deletes** a file or directory. **It is not moved to a trash bin**, once run it is completely gone. **Be very careful!**

_**NEVER** run the command `rm -rf` on `/` or the home directory, this will delete all of your files, pratically destroying your computer._
:::

- `mkdir <name>`(make directory): creates a new folder.
- `touch <filename>`: create a new, empty file.
- `rm <filename>`(remove): Deletes a file.
- `rmdir <folder>`: Deletes an empty folder.
- `rm -r <folder`: Delete of a non-empty folder.

:::tip[Flags]
If you have noticed, the last command: `rm -r` consists of the remove command with an extra component preceded by a minus (`-`). These are called flags and are used to provide extra information to the command. For example, in this case it meant to run the command (`rm`), recursively (`-r`); i.e., deleting a folder and the files inside it.
:::


## 4. Reading and Editing

You don't need to open Notepad++ or TextEdit to see what's inside a file.
- `cat <filename>`: Dumps the entire text of a file into your terminal so you can read it.
- `nano <filename>`: Opens a simple, "old-school" text editor inside the terminal.
	- Press `Ctrl+O` and Enter to save, and `Ctrl + X`to exit.

these [tui]() text editors are very basic and integrated into the terminal. it is possible to have powerful text editors in the terminal, like [vim](), [neovim](), or [emacs](). especially if you are beginning to code, you may consider using a [gui]() text editor application. vscode and vscodium are popular options.

These terminal-based text editors are relatively basic, although more powerful options like Vim, Neovim, and Emacs are also available. If you're just starting to code, you may find it easier to use a graphical text editor or IDE (Integrated Development Environment), such as Visual Studio Code or PyCharm. These applications provide a more intuitive interface for browsing files and editing code, and they typically include an integrated terminal, allowing you to run commands without leaving the editor.


## 5. Understanding the System

Unix organises files like a tree. Everything starts at the **Root** (`/`).
- `/`: The very top level (there is no mother directory).
- `~`: Short-hand for your **Home** folder (where your personal files live, normally the user folder in the computer)
- `sudo` (SuperUser Do): Use this before a command if you get a "Permission Denied" error. It's communicates you are the administrator and it will prompt you to enter your password. Be aware: _with great power, comes great responsibility!_


## 6. Beginner Tips

- **Tab Completion:** Start typing a folder name and hit the `Tab` key: the terminal finishes the word for you.
- `clear`: Use this when the screen gets to messy.
- `man <command>`: If you forget how a command works, type `man` followed by the command (e.g., `man ls`, `man rm`) to see the manual. Press `q` to quit the manual.

