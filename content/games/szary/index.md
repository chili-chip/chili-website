---
title: "Szary"
date: 2026-11-06
draft: false
description: "A short grey ASCII noir on the windy Baltic dunes for the chilichip console"
summary: "One night, a dark lighthouse and grass that remembers who walked through it. A short detective story in grey ASCII"
tags: ["game", "detective", "story", "ascii"]
authors: ["pawel"]
---

{{< lead >}}
The lighthouse went dark at 22:40. The keeper is gone. You have one night.
{{< /lead >}}

{{< game-iframe url="https://chili-chip.github.io/chili-gray-ascii/" width="600" height="600" title="Szary" >}}

### How to play

- You are Szary, the only policeman in Wydma, a small Baltic seaside town in November. Walk the dunes, the lighthouse, the bar, the harbour and an old bunker.
- Stand at something and press **Z** (A) to look, talk, go in or out.
- **V** (Y) switches the torch on and off. The night is dark: the torch shows what you would miss. Where a spot needs light, the game says so.
- Watch the grass. It bends with the wind, but grass that someone stepped on lies **against** it.
- **C** (X) opens the notebook. Szary writes every clue down himself, you never type. Pick two clues to put them together into a conclusion. Next to a person, show them a clue: some change their story.
- The notebook also lists the open questions, the people you met and a map of the places you know.
- Boards are sentences with gaps. The first ones tell you if you are right. The last one does not.
- Five chapters, about an hour, and four endings. The game saves itself; after the first ending you can start any chapter.

| Key | Button |
| --- | --- |
| Arrow keys | D-pad (walk) |
| Z | A (look, talk, next line) |
| X | B (hold to walk faster) |
| C | X (notebook) |
| V | Y (torch) |
| Esc | MENU (pause: language, text speed, FPS) |

On mobile the embedded game is hidden; use the button to open it in a new tab.

### About the game
Everything is drawn with ASCII characters in eight shades of grey: a tiny 3×5 font with Polish letters, and even smaller marks for the sky, the sea and the sand. Characters move one pixel at a time, so it stays smooth on the 128×128 screen. Every blade of grass is a small spring in a wind field with gusts that roll across the dunes, and the weather gets worse every chapter, from a breeze to a storm. Polish and English. A test bot plays the whole story to all four endings on every build. Built with the chili-chip 32blit SDK for the handheld, desktop and the web.

### Source code

{{< github repo="chili-chip/chili-gray-ascii" showThumbnail=true >}}
