---
title: "VGC Zero - Breadboard Prototype"
date: 2025-11-02
draft: false
description: "Showcasing the breadboard prototype of VGC Zero, our ultra-portable keychain video game console."
summary: "Build your own VGC Zero breadboard prototype with our open-source design files and step-by-step instructions today!"
tags: ["vgc-zero", "breadboard", "prototype", "hardware", "open-source"]
---
Build your own VGC Zero breadboard prototype with our open-source design files and step-by-step instructions today!

## Bill of Materials
To assemble your own VGC Zero breadboard prototype, you will need the following components:
- Raspberry Pi Pico 2 W Microcontroller - [Raspberry Pi Official Website](https://www.raspberrypi.com/products/raspberry-pi-pico-2/)
- ST7735S 1.44" 128x128 SPI TFT Display - [AliExpress](https://pl.aliexpress.com/w/wholesale-st7735s-128x128.html?g=y&SearchText=st7735s+128x128)
- Audio Amplifier Module (e.g., HXJ8002) - [AliExpress](https://pl.aliexpress.com/w/wholesale-hxj8002-amplifier.html?g=y&SearchText=hxj8002+amplifier)
- Speaker (32 Ohm, ~0.5W) - [AliExpress](https://pl.aliexpress.com/w/wholesale-32ohm-speaker.html?g=y&SearchText=32ohm+speaker)
- Tactile Push Buttons - [AliExpress](https://pl.aliexpress.com/w/wholesale-tactile-button.html?g=y&SearchText=tactile+button)
- Breadboard and Jumper Wires - [AliExpress](https://pl.aliexpress.com/w/wholesale-breadboard.html?g=y&SearchText=breadboard)

## Schematic Diagram
Below is the schematic diagram for the VGC Zero breadboard prototype. This diagram illustrates how to connect all the components together.

### Simple Schematic
{{< figure
  src="featured.png"
  alt="Simple Schematic Diagram"
  caption="Simple Schematic Diagram of VGC Zero Breadboard Prototype"
>}}

### Kicad Schematic
Coming soon!

## Assembly Instructions
1. **Set Up the Breadboard**: Place the Raspberry Pi Pico 2 W on the breadboard.
2. **Connect the Display**: Wire the ST7735S display to the Raspberry Pi Pico according to the schematic.
3. **Add the Audio Module**: Connect the audio amplifier module and speaker to the Raspberry Pi Pico.
4. **Install Buttons**: Place the tactile push buttons on the breadboard and wire them to the appropriate GPIO pins on the Raspberry Pi Pico.

## Software Instructions

### Ready-Made Games
To get started quickly, you can download pre-compiled games for the VGC Zero from our GitHub page: [chilichip](https://github.com/chili-chip/)
1. Choose a game repository. For example, the "Chili Game of Life" can be found at [chili-game-of-life](https://github.com/chili-chip/chili-game-of-life).
2. Download the compiled UF2 file from the repository's releases section.
3. Connect your Raspberry Pi Pico 2 W to your computer while holding the BOOTSEL button to enter bootloader mode.
4. Copy the UF2 file to the Raspberry Pi Pico drive that appears on your computer.
5. Done! The game should start running on your VGC Zero breadboard prototype.

### Self-Development
To develop your own games for the VGC Zero, follow these steps:
1. **Set Up the Development Environment**: Follow the instructions in the chilichip's 32blit SDK repository to set up your development environment. [32blit SDK](https://github.com/chili-chip/32blit-sdk)
2. **Create a New Project**: Use the game template to create a new repository for your game. [Game Template](https://github.com/chili-chip/game-template)
3. **Write Your Game Code**: Implement your game logic using C++ and the 32blit SDK APIs.
4. **Build the game with CMake**: Use CMake to compile your game into a UF2 file.
5. **Flash the Game**: Connect your Raspberry Pi Pico 2 W in bootloader mode and copy the UF2 file to the device.
6. **Test and Iterate**: Run your game on the VGC Zero breadboard prototype and make adjustments as needed.