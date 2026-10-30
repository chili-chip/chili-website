---
title: "Minesweeper"
date: 2025-09-20
lastmod: 2026-10-16
draft: false
description: "The classic logic puzzle for the chilichip console, with four levels, best times and an original soundtrack"
summary: "Flag the mines, clear the board, beat your best time. Classic Minesweeper for the chilichip console"
tags: ["game", "logic", "puzzle"]
---

{{< lead >}}
Flag the mines, clear the board, beat your best time.
{{< /lead >}}

{{< game-iframe url="https://minesweeper-game.chilichip.eu/" width="600" height="600" title="Minesweeper" >}}

### How to play

- Pick a **Level** on the title screen with the arrow keys, then **Play** with **Z** (A).
- Each number tells you how many mines touch that cell. Your first reveal is always safe and always opens an area.
- **Z** (A) reveals a cell, **X** (B) plants or lifts a flag.
- Press **Z** or **X** on a number once all its mines are flagged to open every cell around it at once (chording).
- Clear every safe cell to win. Make the top five for your level and you get to enter your initials.
- **Esc** (MENU) pauses. The board is hidden while paused, so no peeking.

| Key | Button |
| --- | --- |
| Arrow keys / WASD | D-pad (hold to repeat) |
| Z | A (reveal / select) |
| X | B (flag / back) |
| Esc | MENU (pause) |

On mobile the embedded game is hidden; use the button to open it in a new tab.

### Levels

| Level | Board | Mines |
| --- | --- | --- |
| Easy | 9x9 | 10 |
| Medium | 12x12 | 24 |
| Hard | 16x15 | 40 |
| Expert | 16x15 | 50 |

Each level keeps its own top-five best times, games won and win streaks. **Music** and **Sound** can be turned off in the menu, and everything is saved.

### About the game
The classic Minesweeper for the chilichip console, with ripple reveals, a chain-reaction explosion, confetti when you clear the board, a board that plays itself behind the menus and an original chiptune soundtrack synthesised live on the console's audio channels. Built with the chili-chip 32blit SDK for the handheld, desktop, and the web.

### Source code

{{< github repo="chili-chip/chili-minesweeper" showThumbnail=true >}}
