---
title: "Meet the chilichip CLI: one command for your console"
date: 2026-11-02
draft: false
description: "Update the chilichip console, install games and build your own from one command or a friendly terminal app."
tags: ["chilichip-cli", "tools", "console", "game-sdk"]
authors: ["kacper"]
---

Say hello to the **chilichip CLI**! It is one command for everything you do with a chilichip console from your computer. Update the firmware, install games, start a new game and play it. Run it with no arguments and you get a terminal app with menus for the same jobs.

{{< figure
  src="featured.png"
  alt="The chilichip TUI showing a connected console and its installed games: ChiliChip OS, Bitsy, Doom Fire and Chili Snake"
  caption="Run `chilichip` with no command to open the TUI"
>}}

## What it does

| Job | Command |
| --- | ------- |
| Keep the console up to date | `chilichip update` |
| Put games on it | `chilichip install game.blit` |
| See, start and remove games | `chilichip list`, `launch`, `delete` |
| Start a new game | `chilichip new space-cat` |
| Build and play it | `chilichip build`, `chilichip run` |
| Check your setup | `chilichip doctor` |

The full guide lives at [cli.chilichip.eu](https://cli.chilichip.eu/).

## Install it

You need Python 3.10 or newer. Install it with [pipx](https://pipx.pypa.io/):

```bash
pipx install https://github.com/chili-chip/chilichip-cli/releases/download/v0.8.0/chilichip-0.8.0-py3-none-any.whl
chilichip --version
```

On Linux, add yourself to the `dialout` group once, so you can talk to the console over USB:

```bash
sudo usermod -aG dialout $USER
```

Windows works for firmware updates and installing games. To build games for the console on Windows, use WSL. See [Install](https://cli.chilichip.eu/install/) for every system.

## Update the console in one step

Updating used to mean holding a button, copying a `.uf2` file, waiting, then copying a `.blit`. Now it is one command:

```console
$ chilichip update
Latest firmware: v1.0.1
This update changes:
  Loader: v1.0.0 -> v1.0.1
  ChiliChip OS: v1.0.0 -> v1.0.0
Installed games, saves and settings are kept.
Update now? [y/N]: y
Restarting the console into BOOTSEL mode...
Copying blit-loader.uf2 to /media/ada/RP2350...
Installing vgc-os.blit...
Done. The console runs v1.0.1.
```

It installs three parts: the loader, the [ChiliChip OS](/posts/chilichip-os/) home screen and the [Bitsy player](/posts/citsy-engine/). Your games, saves and settings stay.

How it works:

1. It downloads the latest releases from GitHub and checks each file against its sha256 digest.
2. It asks the console which loader version it runs. The loader now answers this over USB serial. Parts that are already current are skipped.
3. It shows what will change and asks before flashing.
4. It restarts the console into BOOTSEL mode for you, with no button to hold, and copies the loader.
5. When the console is back, it installs the home screen and the Bitsy player.

Already up to date? It says so and stops. Got a brand new or broken console? `chilichip update --factory` sets it up from scratch.

{{< figure
  src="tui-update.png"
  alt="The Update tab of the chilichip TUI listing what an update changes"
  caption="The same update from the TUI"
>}}

## Install games without the drive

Dragging games onto the `CHILICHIP` drive still works. For testing, this is faster, because there is nothing to eject:

```bash
chilichip install space-cat.blit
chilichip install cat-adventure.bitsy
chilichip install *.blit --launch
```

`.blit` games go into flash and show up on the home screen. `.bitsy` files go to the Bitsy player. Before uploading, the CLI reads the game's header. A game built for another device, or for a newer system than your console runs, is stopped with a clear message:

```text
game.blit is not a ChiliChip game: it was built for 32Blit
game.blit needs a system update: it uses API 0.7, the console has 0.6
```

You can also see what is on the console, start a game and remove one:

```console
$ chilichip list
Loader: v1.0.1
  4  ChiliChip OS              v1.0.0      chilichip         142 KB
  7  Bitsy                     v0.2.0      TeriyakiGod       393 KB
 14  Doom Fire                 v1.0.0      andreban          50 KB

$ chilichip launch "Doom Fire"
$ chilichip delete "Doom Fire"
```

Deleting a game keeps its saves, so installing it again brings your progress back.

## From nothing to a game on the console

Three commands take you from an empty folder to your own game running on the console:

```bash
chilichip new space-cat
cd space-cat
chilichip run              # on your computer
chilichip run --console    # on the console
```

`new` copies our [game template](https://github.com/chili-chip/game-template) (or the [RPG template](https://github.com/chili-chip/rpg-template) with `--template rpg`), names it, and starts a fresh git repository. If the SDKs are not next to your game yet, it offers to download them.

{{< figure
  src="tui-new.png"
  alt="The New project tab of the chilichip TUI"
  caption="Start a new game from the TUI"
>}}

`build` and `run` wrap the template's CMake presets, so you don't need to remember them. `run --console` builds a `.blit`, checks it, installs it and starts it.

{{< figure
  src="tui-build.png"
  alt="The Build and run tab of the chilichip TUI"
  caption="Build and run, with the CMake output in the log"
>}}

Missing a tool? `chilichip doctor` checks CMake, the compilers, the SDKs and the console, and tells you the command that fixes each gap:

```console
$ chilichip doctor
ok  CMake          /usr/bin/cmake
ok  C++ compiler   /usr/bin/g++
no  Arm toolchain  sudo apt install gcc-arm-none-eabi ...
ok  32blit-sdk     /home/ada/projects/32blit-sdk
ok  Console        /dev/ttyACM0
```

## Standing on 32blit-tools

The chilichip CLI is a fork of [32blit-tools](https://github.com/32blit/32blit-tools), the command line tools for the 32Blit handheld. All credit for the original tools goes to Pimoroni and the [32blit-tools contributors](https://github.com/32blit/32blit-tools/graphs/contributors), among them Philip Howard, Charlie Birks and Alistair Buxton. Thank you! Their MIT licence and copyright notice are kept in [our repo](https://github.com/chili-chip/chilichip-cli/blob/main/LICENSE).

Installing `chilichip` also gives you the `32blit` command. The [Game SDK](https://sdk.chilichip.eu/) still calls it to pack images, fonts and maps into your game.

## What's next

v0.8.0 is out now. These are planned, not built yet:

* **Saves**: back up, restore and delete game saves from your computer.
* **Games from the platform**: install games straight from [the chili platform](https://platform.chilichip.eu).
* **Easier install**: `pipx install chilichip` from PyPI.
* **VS Code extension**: build and upload games from the editor ([32blit-sdk #69](https://github.com/chili-chip/32blit-sdk/issues/69)).

The plan lives in [32blit-sdk #72](https://github.com/chili-chip/32blit-sdk/issues/72).

Give it a spin and tell us what breaks! Open an issue on [chilichip-cli](https://github.com/chili-chip/chilichip-cli/issues), come chat in the [community forum](https://platform.chilichip.eu/community) or say hi on [Discord](https://discord.gg/xB9sPYKBZc).
