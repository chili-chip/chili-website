---
title: "Our first VGC Zero PCBs are alive"
date: 2026-10-30
draft: false
description: "We ordered ten VGC Zero boards, built two working prototypes and have been playing and testing on them ever since. Here is what they look like and what comes next."
tags: ["vgc-zero", "hardware", "pcb", "prototype", "console"]
authors: ["kacper"]
---

Remember the [breadboard full of wires](/docs/vgc-zero/vgc-breadboard/) where VGC Zero started? It grew up! A couple of months ago we ordered our first batch of **ten VGC Zero PCBs** and built **two working prototypes** from them. We kept quiet for a while because we were busy playing on them. Time to show them off.

{{< figure
  src="featured.jpg"
  alt="A VGC Zero v1.1.4 prototype held in a hand, showing the Space Fighters TURBO title screen"
  caption="VGC Zero v1.1.4, small enough to hold in one hand"
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
  alt="Front of the VGC Zero v1.1.4 board with the OLED screen, D-pad, A B X Y buttons and the chilichip logo"
  caption="The front: OLED screen on top, D-pad on the left, A B X Y on the right"
>}}

Flip it over and you find the RP2350-Plus, the buzzer, the display cable and the power switch. The battery is taped to the back for now. Not pretty, but it lets us play without a cable.

{{< figure
  src="back.jpg"
  alt="Back of the VGC Zero board with the RP2350-Plus module, buzzer, display connector, power switch and a LiPo battery"
  caption="The back: RP2350-Plus, buzzer, display connector and a taped-on battery"
>}}

## What we have been doing with them

Since the build we have been testing on them. Our games run on the real hardware: [Space Fighters TURBO](/games/space-fighter/), [Tetris](/games/tetris/), [Snek](/games/snek/), [Minesweeper](/games/minesweeper/) and more. They also became our test bench for [ChiliChip OS](/posts/chilichip-os/) and for [Bitsy games with citsy](/posts/citsy-engine/).

We also printed a case to see how VGC Zero feels as a real handheld instead of a bare board.

{{< figure
  src="case.jpg"
  alt="A red 3D-printed VGC Zero case with white and red buttons and a square screen"
  caption="A 3D-printed test case"
>}}

## What we learned

Two boards in our hands taught us more than months of drawing. Here is what changes in the next version:

- **Screen on a pin header.** The OLED stays, but it plugs into a simple 2.54 mm pin header instead of a cable.
- **Better sound.** The buzzer gives way to a small audio module with a MAX98357A amplifier and noise filtering.
- **A clock.** We are adding an RTC, so games and the OS know the time.
- **Wireless.** WiFi and Bluetooth come from the Raspberry Pi Radio Module 2.
- **The LED goes.** It will be removed or replaced.

## What's next

We are now designing the next version. It is **modular**: small, ready-made modules for the screen, sound, radio, buttons and the brain, which you solder onto the main board yourself. You can follow along in the [tracking issue](https://github.com/chili-chip/vgc-zero-hardware/issues/32).

Want to build one, or just have ideas? Come chat in the [community forum](https://platform.chilichip.eu/community), say hi on [Discord](https://discord.gg/xB9sPYKBZc), or open an issue on [GitHub](https://github.com/chili-chip/vgc-zero-hardware).
