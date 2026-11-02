---
title: "Chili Rush"
date: 2026-11-02
draft: false
description: "A fast pseudo-3D endless runner for the chilichip console"
summary: "Switch lanes, jump, slide and set yourself on fire. A fast endless runner for the chilichip console"
tags: ["game", "arcade", "runner"]
---

{{< lead >}}
Run, dodge, grab chilis, catch fire.
{{< /lead >}}

{{< game-iframe url="https://rush-game.chilichip.eu/" width="600" height="600" title="Chili Rush" >}}

### How to play

- A little chili sprints down an endless highway that gets faster the further you go.
- Change lane with the **left and right arrows**. **Z** (A) or up jumps over low obstacles, **X** (B) or down slides under signs and arches. Parked cars and the volcano's spires you have to dodge. Watch the cars' headlights: off, dipped, full beam or flashing.
- Grab chilis in a row to build a combo and raise your score multiplier. They also fill the heat bar.
- When the heat bar is full, press **V** (Y) for a fire dash: a few seconds of extra speed in which you smash through everything.
- Milk is a shield that takes one hit, the sombrero pulls chilis towards you.
- Complete missions to earn stars; every star adds to your score multiplier.
- **STYLE** on the title screen lets you pick one of four colour schemes for every obstacle. Your choice is saved.
- PLAY opens with a short camera move: the chili puts on its shades and the camera swings round behind it. Any button skips it, and RUN AGAIN goes straight to the countdown.

| Key | Button |
| --- | --- |
| Arrow keys / WASD | D-pad |
| Z | A (jump) |
| X | B (slide) |
| V | Y (fire dash) |
| Esc | MENU (pause) |

On mobile the embedded game is hidden; use the button to open it in a new tab.

### About the game
A pseudo-3D runner in the style of the old arcade racers: the road is drawn one line at a time and the sprites scale with distance, so it runs on the 128×128 screen of the chilichip console without a 3D engine. Three biomes (desert at sunset, neon city at night, volcano), original chiptune music, and a test bot that checks every obstacle row can be survived. Best score, missions, settings and colours are saved. Built with the chili-chip 32blit SDK for the handheld, desktop and the web.

### Source code

{{< github repo="chili-chip/chili-rush" showThumbnail=true >}}
