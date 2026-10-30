---
title: "Our first chilichip console PCBs are alive"
date: 2026-10-30
draft: false
description: "We ordered ten console boards, built two working prototypes and have been playing and testing on them ever since. Here is what they look like."
tags: ["vgc-zero", "hardware", "pcb", "prototype", "console"]
authors: ["kacper"]
---

Remember the [breadboard full of wires](/docs/vgc-zero/vgc-breadboard/) where the console started? It grew up! A couple of months ago we ordered our first batch of **ten console PCBs** and built **two working prototypes** from them. We kept quiet for a while because we were busy playing on them. Time to show them off.

{{< figure
  src="featured.jpg"
  alt="A v1.1.4 prototype held in a hand, showing the Space Fighters TURBO title screen"
  caption="The v1.1.4 prototype, small enough to hold in one hand"
>}}

## What is on the board

The prototypes use board revision **v1.1.4**, a 2-layer PCB designed in KiCad. It is fully open: the schematic, layout and gerbers are on [GitHub](https://github.com/chili-chip/vgc-zero-hardware).

| Part | What we used |
|------|--------------|
| Brain | [Waveshare RP2350-Plus](https://www.waveshare.com/wiki/RP2350-Plus) (RP2350, Pico pinout) |
| Screen | [Waveshare 1.5" RGB OLED](https://www.waveshare.com/wiki/1.5inch_RGB_OLED_Module), 128×128, SSD1351 |
| Buttons | 10 tactile buttons: D-pad, A, B, X, Y, MENU and HOME |
| Sound | A small buzzer |
| Power | Slide switch, USB-C, and a LiPo battery on the RP2350-Plus battery connector |
| Extras | An LED and three pin headers with spare GPIO |

{{< figure
  src="front.jpg"
  alt="Front of the v1.1.4 board with the OLED screen, D-pad, A B X Y buttons and the chilichip logo"
  caption="The front: OLED screen on top, D-pad on the left, A B X Y on the right"
>}}

Flip it over and you find the RP2350-Plus, the buzzer, the display cable and the power switch. The battery is taped to the back for now. Not pretty, but it lets us play without a cable.

{{< figure
  src="back.jpg"
  alt="Back of the v1.1.4 board with the RP2350-Plus module, buzzer, display connector, power switch and a LiPo battery"
  caption="The back: RP2350-Plus, buzzer, display connector and a taped-on battery"
>}}

## What we have been doing with them

Since the build we have been testing on them. Our games run on the real hardware: [Space Fighters TURBO](/games/space-fighter/), [Tetris](/games/tetris/), [Snek](/games/snek/), [Minesweeper](/games/minesweeper/) and more. They also became our test bench for [ChiliChip OS](/posts/chilichip-os/) and for [Bitsy games with citsy](/posts/citsy-engine/).

We also printed a case to see how the console feels as a real handheld instead of a bare board.

{{< figure
  src="case.jpg"
  alt="A red 3D-printed console case with white and red buttons and a square screen"
  caption="A 3D-printed test case"
>}}

## The design files

The board is open hardware under the MIT license. You can grab the schematic and gerbers from the [v1.1.4 release](https://github.com/chili-chip/vgc-zero-hardware/releases/tag/v1.1.4) and build your own.

{{< figure
  src="v1-1-4-schematic.png"
  alt="Schematic of the v1.1.4 board with the RP2350-Plus, ten buttons, power switch, LED, buzzer, display connector and GPIO headers"
  caption="The v1.1.4 schematic"
>}}

{{< figure
  src="v1-1-4-render-top.jpg"
  alt="KiCad render of the front of the v1.1.4 board"
  caption="v1.1.4 board, front (KiCad render)"
>}}

{{< figure
  src="v1-1-4-render-bottom.jpg"
  alt="KiCad render of the back of the v1.1.4 board with the MCU footprint, buzzer, display connector and pin headers"
  caption="v1.1.4 board, back (KiCad render)"
>}}

## What's next

Two boards in our hands taught us more than months of drawing. We are already working on the next version, and we will share it here when it is ready.

Want to build one, or just have ideas? Come chat in the [community forum](https://platform.chilichip.eu/community), say hi on [Discord](https://discord.gg/xB9sPYKBZc), or open an issue on [GitHub](https://github.com/chili-chip/vgc-zero-hardware).
