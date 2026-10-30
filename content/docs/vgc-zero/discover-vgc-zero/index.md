---
title: "Discover the chilichip console"
date: 2025-09-17
lastmod: 2026-10-30
draft: false
description: "The chilichip console is a tiny open hardware & open source handheld (targeting 2027) built for playing and making games—right from your keychain."
tags: ["vgc-zero", "console", "keychain", "portable", "gaming", "open-source"]
---

# chilichip console: the ultra-portable keychain game console

{{< figure
    src="render.jpg"
    alt="Console render"
    caption="chilichip console visualization (not final hardware)"
    >}}

The **chilichip console** is a pocket‑scale handheld you can actually carry everywhere. Clip it to your keys, plug in, code a game, share it—same device. Retro vibe, modern internals, fully hackable.


## Highlights

What it feels like to own & build on the chilichip console:
- Always‑with‑you size: lives on your keychain, not a drawer
- Hack-first mindset: hardware + firmware intentionally open
- Fast iteration loop: edit → flash → run in seconds
- Unique input: rotary encoder enables scroll, spin, dial mechanics
- Audio flexibility: speaker for casual play, jack/Bluetooth for focus
- Community moddable shells & CAD from day one
- Teaches embedded concepts without overwhelming complexity
- Designed for sharing: small game binaries, simple packaging
- Runs on approachable tooling (forked 32blit SDK + Python/C++)

## Development Status

Progress so far:

| Stage | Status |
|-------|--------|
| Breadboard prototype | Done. Runs our games. |
| v1.1.4 PCB | 10 boards ordered, 2 working prototypes built and in testing. See the [blog post](/posts/first-pcb-prototypes/). |
| v1.2.0 PCB | In design. Modular: screen, sound, radio and brain on small modules. |
| First public hardware | 2027 |

You can follow our work on [GitHub](https://github.com/chili-chip) and in the [hardware tracking issue](https://github.com/chili-chip/vgc-zero-hardware/issues/32).

{{< figure
    src="breadboard-prototype.jpg"
    alt="Breadboard prototype"
    caption="chilichip console breadboard prototype (not final hardware)"
    >}}

### Prototype hardware

The first prototype was built on a breadboard (see the [breadboard guide](/docs/vgc-zero/vgc-breadboard/)):

| Component | Part |
|-----------|------|
| MCU       | Raspberry Pi Pico 2 W (RP2350) |
| Display   | 1.44" 128×128 colour TFT, ST7735S driver, SPI |
| Audio     | HXJ8002 amplifier module + small speaker |
| Controls  | Tactile buttons + rotary encoder |

The current prototype is the **v1.1.4 PCB** ([vgc-zero-hardware](https://github.com/chili-chip/vgc-zero-hardware)). We ordered 10 boards and built 2 working prototypes:

{{< figure
    src="v1-1-4-front.jpg"
    alt="The v1.1.4 PCB prototype with the OLED screen and buttons"
    caption="v1.1.4 PCB prototype"
    >}}

| Component | Part |
|-----------|------|
| MCU       | Waveshare RP2350-Plus module (RP2350, Pico-compatible) |
| Display   | Waveshare 1.5" RGB OLED module, 128×128, SSD1351 driver, SPI |
| Audio     | Buzzer |
| Controls  | 10 tactile buttons |
| Power     | USB-C on the MCU module, slide power switch, LiPo battery on the module's battery connector |
| Other     | Status LED, 3 GPIO pin headers |

The v1.1.4 board has no headphone jack, rotary encoder or PSRAM.

### Next revision: v1.2.0 (in design)

The next board is **modular**. Small, ready-made modules carry the screen, sound, radio and the RP2350 brain. You solder them onto the main board yourself. Routing is not finished yet, so these renders show a work in progress.

| Change | Why |
|--------|-----|
| OLED on a 2.54 mm pin header | Simpler than the display cable |
| Audio module with a MAX98357A I2S amplifier | Real speaker sound instead of a buzzer |
| Raspberry Pi Radio Module 2 | WiFi and Bluetooth |
| SWD debug header | Easier firmware debugging |
| Audio noise filtering, RTC | Planned for this revision |

{{< figure
    src="v1-2-0-top.jpg"
    alt="Render of the front of the v1.2.0 main board"
    caption="v1.2.0 main board, front (render, routing in progress)"
    >}}

{{< figure
    src="v1-2-0-bottom.jpg"
    alt="Render of the back of the v1.2.0 main board with spots for the MCU and audio module"
    caption="v1.2.0 main board, back: brain (MCU1) and audio module (AUDIO1) spots"
    >}}

{{< figure
    src="v1-2-0-schematic.png"
    alt="Schematic of the v1.2.0 main board"
    caption="v1.2.0 main board schematic"
    >}}

The audio module is a tiny board with the MAX98357A amplifier and a 2-pin speaker connector ([chili-audio-module-hardware](https://github.com/chili-chip/chili-audio-module-hardware)).

{{< figure
    src="audio-module.jpg"
    alt="Render of the audio module with the MAX98357A amplifier"
    caption="Audio module (render)"
    >}}

{{< figure
    src="audio-module-schematic.png"
    alt="Schematic of the audio module"
    caption="Audio module schematic"
    >}}

First public hardware target: **2027**.

We’re fully **open hardware + open source**:
- Schematics and PCB: public now under the MIT license ([vgc-zero-hardware](https://github.com/chili-chip/vgc-zero-hardware)).
- Enclosure CAD: to be published under a permissive license.
- Bootloader, firmware, SDK, tools, sample games: open repo with documented changes.

{{< figure
    src="featured.jpg"
    alt="PCB wireframe"
    caption="Wireframe of the chilichip console PCB (not final hardware)"
    >}}

### What’s Coming Next

Rolling out soon:
- Hardware pinout & electrical notes
- Firmware architecture overview
- SDK & API reference
- Game packaging / distribution workflow
- Contribution & hacking guides

### DIY Builds

We’ll publish guides to assemble a working prototype from **off‑the‑shelf parts** (MCU module, 128×128 display, buttons, audio + power). Expect:
- Parts list + sourcing
- Wiring / pinout diagrams
- Flashing + first boot
- Optional add‑ons (rotary encoder, low‑power tweaks, audio variants)

Build early. Hack freely. Give feedback before the compact edition lands.

## Target Specs

These are the planned specs for the final chilichip console, not the current prototype.

| Component | Specification |
|-----------|---------------|
| CPU       | RP2350 @ 150MHz |
| RAM       | 520KB on-chip + 16MB PSRAM |
| Storage   | 16MB Flash |
| Display   | 128×128 colour OLED |
| Audio     | Mono speaker, 3.5mm jack, Bluetooth audio |
| Battery   | Target up to ~9 hours |
| Controls  | D‑Pad, A, B, START, MENU, 2 shoulders, rotary encoder |
| Connectivity | Wi‑Fi + Bluetooth |
| Charging  | USB‑C |


## Why It’s Different

Fully open. Small enough to carry daily. A rotary encoder adds an input axis most micro handhelds skip. You can fork firmware, design cases, and ship your own games without a gatekeeper.


## Make & Share Games

SDK features (work in progress):
- C++ & Python game development
- Rotary encoder + button input APIs
- Asset + build tooling
- Packaging & distribution flow

Automated CI:
- Games auto-build via GitHub Actions targeting 6 platforms with artifacts you can download directly from each release:
    - chilichip console
    - 32blit (console)
    - Web
    - Windows
    - Linux
    - MacOS


Based on a **fork of the 32blit SDK** with:
- RP2350 hardware bring‑up & memory layout changes
- 128×128 display timings + driver tweaks
- Rotary encoder input layer
- Power management hooks
- Expanded audio path (speaker / jack / Bluetooth)

We plan to upstream improvements where feasible with clear divergence docs.

{{< github repo="chili-chip/32blit-sdk" showThumbnail=true >}}

### Play Sample Games

- [Minesweeper](/games/minesweeper/)
- [Conway's Game of Life](/games/game-of-life/)

## Community

Join us on [Discord](https://discord.gg/xB9sPYKBZc) to discuss the chilichip console, share ideas, and get involved in development.