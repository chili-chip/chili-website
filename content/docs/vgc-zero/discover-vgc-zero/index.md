---
title: "Discover VGC Zero"
date: 2025-09-17
lastmod: 2025-09-25
draft: false
description: "VGC Zero is a tiny open hardware & open source handheld (targeting 2027) built for playing and making games—right from your keychain."
tags: ["vgc-zero", "console", "keychain", "portable", "gaming", "open-source"]
heroStyle: thumbAndBackground
---

# VGC Zero: The Ultra-Portable Keychain Video Game Console

{{< figure
    src="render.jpg"
    alt="Console render"
    caption="VGC Zero visualization (not final hardware)"
    >}}

**VGC Zero** is a pocket‑scale handheld you can actually carry everywhere. Clip it to your keys, plug in, code a game, share it—same device. Retro vibe, modern internals, fully hackable.


## Highlights

What it feels like to own & build on VGC Zero:
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

We are currently working on creating first prototypes. Our work can be tracked on our [github](https://github.com/chili-chip).

{{< figure
    src="breadboard-prototype.jpg"
    alt="Breadboard prototype"
    caption="VGC Zero breadboard prototype (not final hardware)"
    >}}

First public hardware target: **2027**.

We’re fully **open hardware + open source**:
- Schematics, PCB, enclosure CAD: to be published under a permissive license.
- Bootloader, firmware, SDK, tools, sample games: open repo with documented changes.

{{< figure
    src="featured.jpg"
    alt="PCB wireframe"
    caption="Wireframe of VGC Zero PCB (not final hardware)"
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

## Technical Specs

| Component | Specification |
|-----------|---------------|
| CPU       | RP2350 @ 150MHz |
| RAM       | 520KB on-chip + 16MB PSRAM |
| Storage   | 16MB Flash |
| Display   | 128×128 color TFT |
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
    - VGC Zero
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

Join us on [Discord](https://discord.gg/xB9sPYKBZc) to discuss VGC Zero, share ideas, and get involved in development.