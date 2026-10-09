---
title: "Inventory"
date: 2026-10-09
draft: false
weight: 8
showHero: false
description: "Set starting items and variables, and watch them change while you play."
summary: "Set starting items and variables, and watch them change while you play."
tags: ["bitsy", "creator", "editor"]
---

{{< screenshot src="featured.png" alt="The inventory window showing item counts" caption="The inventory window, items tab" >}}

The **inventory** window has two tabs.

## items

Every item in your game with a count. While editing, the count is how many the player starts with, usually 0. While [playing](/docs/bitsy/tools/play-mode/), the counts update live as the player picks things up, so you can check your item logic.

## variables

Named values your [dialog](/docs/bitsy/tools/dialog/) can read and change, like `met_the_cat` or `coins`. Add a variable here and set its starting value. While playing, the values update live.

Use variables for anything the game should remember that is not a physical item: whether a door is open, how many times the player has talked to someone, or which path they chose.

See also: [Items](/docs/bitsy/items/).
