---
title: "Citsy"
date: 2026-09-15
draft: false
description: "Bitsy player for VGC Zero"
summary: "A native Bitsy player with a 128×128 retro launcher. Author games at bitsy.org, export a .bitsy file, and play on VGC Zero, 32blit, desktop, or the web."
tags: ["game", "bitsy", "vgc-zero", "adventure", "citsy"]
---

{{< lead >}}
A little engine for little games — running natively on VGC Zero’s 128×128 screen.
{{< /lead >}}

{{< game-iframe url="https://citsy.chilichip.eu/" width="600" height="600" title="Citsy Bitsy player" >}}

### How to play

- Arrow keys or WASD move the cursor and walk.
- Press **Z** for A (confirm / interact / advance dialog).
- Press **X** for B (back / cancel).
- Press **C** or **Escape** for settings from the launcher.
- Press **Escape** or **2** in-game for the pause overlay (Resume / Restart / Exit).

On mobile the embedded player is hidden; use the button to open it in a new tab.

The launcher ships with **Mossland** and **Sandbox**. Drop your own `.bitsy` export next to the desktop binary, in a `games/` folder, or on the handheld’s SD card and it appears in the same list.

{{< figure
  src="mossland.png"
  alt="Mossland running in citsy"
  caption="Mossland, a bundled Bitsy adventure"
>}}

### About the player

**Citsy** is a headless C++ reimplementation of the [Bitsy](https://bitsy.org) engine. **citsy-32blit** is the 32blit host: it maps VGC Zero / desktop controls, blits the 128×128 framebuffer, and plays square-wave audio. Rooms are 16×16 tiles of 8×8 pixels — native resolution on the console.

Read the launch post: [Announcing Citsy: Bitsy on VGC Zero](/posts/citsy-engine/).

### Source code

{{< github repo="TeriyakiGod/citsy" showThumbnail=true >}}

{{< github repo="TeriyakiGod/citsy-32blit" showThumbnail=true >}}
