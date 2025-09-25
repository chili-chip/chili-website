---
title: "Conway's Game of Life"
date: 2025-09-21
draft: false
description: "Conway's Game of Life"
summary: "Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
tags: ["game", "automaton", "simulation"]
heroStyle: background
---

{{< lead >}}
“The rules of Life were designed to be as simple as possible, and yet allow for surprising complexity.”
— John Horton Conway
{{< /lead >}}

{{< game-iframe url="https://life-game.chilichip.eu/" width="600" height="600" title="Conway's Game of Life" >}}

### How to play

- Press ESC for the MENU button action (restart simulation with random seed).

On mobile the embedded game is hidden; use the button to open it in a new tab.

### About the game
Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. The game consists of a grid of cells that can be in one of two states: alive or dead. The state of each cell changes over discrete time steps according to a set of simple rules based on the states of its eight neighbors. These rules lead to complex and often unpredictable patterns, making the Game of Life a fascinating subject for study in mathematics, computer science, and artificial life.

### Source code

{{< github repo="chili-chip/chili-game-of-life" showThumbnail=true >}}