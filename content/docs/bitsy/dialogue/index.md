---
title: "Dialogue"
date: 2026-10-09
draft: false
weight: 5
description: "Write what sprites and items say: pages, text effects, sequences, and conditions on items and variables."
summary: "Write what sprites and items say: pages, text effects, sequences, and conditions on items and variables."
tags: ["bitsy", "creator", "tutorial", "dialogue"]
---

Dialog is the text that appears when the avatar talks to a sprite, picks up an item, or reaches an ending. The game's **title**, set at the top of the **game** window, is the first thing the player sees.

## Write simple dialog

1. Select a sprite or item in the **paint** window. The **dialog** window shows its text.
2. Type what it says. Long text wraps onto several pages automatically; the player presses a button to advance.

On VGC Zero the player advances dialog with **A**. In the web player it is **Z**, and arrow keys or WASD move.

## Text effects

Select some text and use **text effects** to make it wavy, shaky, rainbow-colored, or a different color from the palette. Effects work best on a word or two, for emphasis.

## Add blocks

Press **add** in the dialog window to add more than plain text. The options are grouped:

- **dialog**: another block of text.
- **lists**: text that changes each time the player talks to the sprite.
  - **sequence list** goes through each item once, then keeps repeating the last one. Good for a conversation that moves forward.
  - **cycle list** repeats its items in order, forever.
  - **shuffle list** picks one at random each time.
- **branching list**: shows the first branch whose condition is true. Branches can check an **item** count or a **variable**.
- **item and variable actions**: give or take items, or set and change variables.
- **exit and ending actions**: move the player to another room, end the game, or lock and unlock an exit or ending.
- **pagebreak**: start a new page of dialog.

Each block has its own controls in the dialog window, so you build logic by clicking rather than typing code. If you are curious, **show code** reveals the Bitsy script behind it.

## Example: a door guard

A guard who only lets the player through with a key:

1. Draw a `guard` sprite and place it in a doorway.
2. In the guard's dialog, **add** a **branching list** with an **item branch**: if `key` in inventory is at least 1.
3. In that branch, write "Ah, you have the key. Go ahead." and add an **exit** action that moves the player to the next room.
4. In the **default branch**, write "Nobody passes without a key."

Now scatter a `key` item somewhere in the first room and play it through.

## Variables

Variables remember things the player has done that are not items, like whether they have already met someone. Create them in the **variables** tab of the **inventory** window, change them with **set variable value** or **change variable value**, and check them with a **variable branch**.

## Preview while you write

Press **preview** in the dialog window to see the text the way it appears in the game, or press **play** and walk into the sprite.

## Next

Connect your rooms and finish the story in [Exits and endings](/docs/bitsy/exits-and-endings/).
