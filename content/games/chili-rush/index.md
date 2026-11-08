---
title: "Chili Rush"
date: 2026-11-02
draft: false
description: "A fast pseudo-3D endless runner for the chilichip console"
summary: "Switch lanes, jump, slide and set yourself on fire. A fast endless runner for the chilichip console"
tags: ["game", "arcade", "runner"]
authors: ["pawel"]
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
- Every chili you collect goes into your wallet. Spend it in **STYLE** on the title screen: new colours for every obstacle (200, 400 and 800 chilis) and a second look for each one (2500 chilis): hay bales, roadworks, a bone pile, a ranch gate, a sky bridge, a rib arch, a camper van, a taxi, crystals and an old tyre. Y shows the new look, A buys it.
- Big moments get big effects: a new best score, a new biome and 100, 200, 500, 1000 chilis in one run set the screen on fire, with hit markers and an air horn. Dodging at the very last moment gets a smaller burst.
- Watch the tumbleweed: now and then it stops right on your line of chilis.
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
A pseudo-3D runner in the style of the old arcade racers: the road is drawn one line at a time and the sprites scale with distance, so it runs on the 128×128 screen of the chilichip console without a 3D engine. Three biomes (desert at sunset, neon city at night, volcano), original chiptune music, and a test bot that checks every obstacle row can be survived. Best score, missions, settings, your chili wallet and everything you bought are saved. Built with the chili-chip 32blit SDK for the handheld, desktop and the web.

### Source code

{{< github repo="chili-chip/chili-rush" showThumbnail=true >}}
