---
title: "Tetris"
date: 2026-10-06
lastmod: 2026-10-10
draft: false
description: "Polished falling-block puzzler for VGC Zero, with hold, ghost piece, high scores and a chiptune soundtrack"
summary: "Stack, clear, repeat. Polished Tetris with a chili twist for VGC Zero"
tags: ["game", "puzzle", "arcade"]
---

{{< lead >}}
Stack the falling blocks. Clear the lines. Don’t let the pile reach the top.
{{< /lead >}}

{{< game-iframe url="https://tetris-game.chilichip.eu/" width="600" height="600" title="Tetris" >}}

### How to play

- Pick **Play** on the title screen with **Z** (A). Arrow keys move through the menu.
- Guide each piece into the 10-wide well. Complete a row to clear it.
- **Up** hard-drops the piece, holding **Down** soft-drops it.
- **Z** rotates right and **X** rotates left. Pieces kick off walls and the stack when they rotate.
- **C** (X button) puts the piece on hold for later, once per piece.
- The ghost outline shows where the piece will land.
- Every 10 lines the level goes up, the pieces fall faster and the music speeds up.
- **Esc** (MENU) pauses. Make the top five and you get to enter your initials.

| Key | Button | Action |
| --- | --- | --- |
| Left / Right | D-pad | Move |
| Down | D-pad | Soft drop |
| Up | D-pad | Hard drop |
| Z | A | Rotate right / select |
| X | B | Rotate left / back |
| C or V | X or Y | Hold |
| Esc | MENU | Pause |

On mobile the embedded game is hidden; use the button to open it in a new tab.

### Scoring

| Clear | Points × level |
| --- | --- |
| Single | 100 |
| Double | 300 |
| Triple | 500 |
| Tetris (4 lines) | 800 |
| T-spin single / double / triple | 800 / 1200 / 1600 |

Back-to-back Tetrises and T-spins score 1.5×, clearing lines with consecutive pieces adds a combo bonus, and drops earn 1 point per row (2 for a hard drop).

### Options

- **Start level** from 1 to 15.
- **Music**, **Sound** and **Ghost piece** on or off. Settings and high scores are saved.

### About the game
A Tetris for VGC Zero with a chili twist: an animated title screen, modern rules (SRS rotation with wall kicks, 7-bag randomiser, hold, ghost piece, lock delay), next-three preview, line-clear flashes, particles and screen shake on a Tetris, a pause menu and a top-five high score table. The soundtrack is synthesised live on the console's audio channels: an original title theme, "Chili Habanera", and a new arrangement of the folk song Korobeiniki in game. Built with the chili-chip 32blit SDK for the handheld, desktop, and the web.

### Source code

{{< github repo="chili-chip/chili-tetris" showThumbnail=true >}}
