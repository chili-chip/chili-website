---
title: "Work in progress: an audio module and a new main board"
date: 2026-10-30T12:00:00+01:00
draft: false
description: "A sneak peek at what comes after our first console PCBs: a tiny audio module with a real amplifier and a new modular main board."
tags: ["vgc-zero", "hardware", "pcb", "audio", "work-in-progress"]
authors: ["kacper"]
---

Our [first console PCBs](/posts/first-pcb-prototypes/) taught us a lot. So we went back to KiCad. Here is a sneak peek at two boards we are working on right now: a tiny **audio module** and a new **main board**. Nothing here is final yet.

{{< figure
  src="featured.jpg"
  alt="KiCad render of the audio module with the MAX98357A amplifier, a speaker connector and labelled pins"
  caption="The audio module (KiCad render)"
>}}

## Real sound with an audio module

The first prototypes beep through a buzzer. Fun, but our games have chiptune soundtracks that deserve better. So sound gets its own little board.

The audio module uses a **MAX98357A**, a small I2S amplifier that drives a speaker directly. The console sends digital audio over three wires, and the module turns it into sound.

| Pin | What it does |
|-----|--------------|
| DIN | Audio data |
| BCLK | Bit clock |
| LRCLK | Left/right clock |
| MODE | Turns the amplifier on (through a 510 kΩ resistor) |
| 3V3, GND | Power |
| Speaker | 2-pin MX1.25 connector |

Two capacitors (10 µF and 100 nF) keep the power clean. That's the whole board.

{{< figure
  src="audio-schematic.png"
  alt="Schematic of the audio module: MAX98357A, two decoupling capacitors, a 4-pin signal header, a 2-pin power header and a speaker connector"
  caption="Audio module schematic"
>}}

The module comes assembled from the factory. You only solder its pin headers onto the main board. The design files are on GitHub in [chili-audio-module-hardware](https://github.com/chili-chip/chili-audio-module-hardware).

## A new, modular main board

The new main board is **v1.2.0**. The idea: the tricky, tiny parts sit on small ready-made modules, and you solder those modules onto the main board yourself. The main board keeps the buttons and connects everything.

| Part | Change from v1.1.4 |
|------|--------------------|
| Screen | The OLED plugs into a 2.54 mm pin header instead of a cable |
| Sound | A spot for the audio module instead of the buzzer |
| Wireless | Raspberry Pi Radio Module 2 for WiFi and Bluetooth |
| Debugging | A 3-pin SWD header for flashing and debugging |

{{< figure
  src="board-top.jpg"
  alt="KiCad render of the front of the v1.2.0 main board with the display footprint and button layout"
  caption="v1.2.0 main board, front (KiCad render)"
>}}

{{< figure
  src="board-bottom.jpg"
  alt="KiCad render of the back of the v1.2.0 main board with spots for the RP2350 module (MCU1) and the audio module (AUDIO1)"
  caption="v1.2.0 main board, back: the brain (MCU1) and the audio module (AUDIO1)"
>}}

The schematic is done. The routing is not, which is why the renders have no traces yet.

{{< figure
  src="board-schematic.png"
  alt="Schematic of the v1.2.0 main board with the RP2350 module, buttons, display module, radio module and debug header"
  caption="v1.2.0 main board schematic"
>}}

## What's next

Next we finish routing the main board and order the audio modules. Audio noise filtering and a real-time clock are also on our list. When the boards arrive, we will put them together and tell you how it went.

You can follow along on GitHub in [vgc-zero-hardware](https://github.com/chili-chip/vgc-zero-hardware) and the [tracking issue](https://github.com/chili-chip/vgc-zero-hardware/issues/32). Ideas and questions are welcome in the [community forum](https://platform.chilichip.eu/community) and on [Discord](https://discord.gg/xB9sPYKBZc).
