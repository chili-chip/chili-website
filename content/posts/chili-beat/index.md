---
title: "Chili Beat: make a game with rule cards"
date: 2026-10-31
draft: true
description: "Chili Beat is a new kind of game in the Chili Creator. Things bump, move and change on the beat, and rules are cards you build from pictures."
tags: ["chili-beat", "creator", "games", "vgc-zero"]
authors: ["kacper"]
---

The Chili Creator can now make two kinds of games. Next to Bitsy, there is
**Chili Beat**: a tiny engine where everything on the screen is a thing, things
bump into each other, and the world moves on a beat. You make the whole game
from pictures and rule cards. No code.

{{< figure
  src="featured.png"
  alt="The Chili Beat editor in the Chili Creator, with Bee Home open"
  caption="The Chili Beat editor, with the Bee Home example open"
>}}

## Six small ideas

- **One screen, one grid.** A 16 × 16 board of 8 × 8 cells.
- **Four colours.** Each game picks 4 from the Sweetie 16 palette by GrafxKid.
- **Everything is a thing.** Heroes, walls, coins, doors and enemies.
- **One verb: bump.** Move into a full cell and you bump what is there. With no rule, it is a wall.
- **Time is a beat.** 2 to 8 beats a second, and the music plays on the same beat. Or play in turns.
- **Rules are cards.** *When* something happens, *if* something is true, *then* do something.

That's all there is, and it goes a long way. A wall is a thing with no rule. A
coin is "when you bump Coin, Coin vanishes". A crate is "when you bump Crate,
Crate moves that way".

{{< figure
  src="bee-home.png"
  alt="Bee Home: a bee, flowers, a hive and a wasp in a hedge maze"
  caption="Bee Home: visit flowers, bring 5 pollen home, keep away from the wasp"
>}}

## Rules you can see

Rules are cards. Pick each part from a list, with pictures of your things. While
you play, the cards that just ran light up, so you can watch your rules work.

{{< figure
  src="rules.png"
  alt="Rule cards: When Bee bumps Flower, then Flower becomes Bud, Pollen goes up, play coin"
  caption="Rule cards in the Rules tool"
>}}

Not sure where to start? **Add a recipe** gives you ready-made cards: pick-up,
push, door and key, chaser, wanderer, talker, goal, spreader and timer.

## Puzzles, toys and chases

The same few pieces make very different games. Switch a game to turns and you
have a crate puzzle. Add chance and you have a garden that grows by itself.

{{< figure
  src="crate-puzzle.png"
  alt="Crate Puzzle: a hero, three crates and three holes in a brick room"
  caption="Crate Puzzle: push every crate into a hole"
>}}

## Try it

Open the [Chili Creator](https://chilichip.eu/creator), press **New game** and
pick **Chili Beat**. Start blank, or from Bee Home, Crate Puzzle or Garden Toy.
The [Bee Home tutorial](https://creator.chilichip.eu/beat/tutorial/) walks
you through a whole game.

{{< figure
  src="new-game.png"
  alt="New game asks: Bitsy or Chili Beat, with Chili Beat's example games"
  caption="New game asks which kind of game to make"
>}}

## On the console

Chili Beat games play on the VGC Zero too. Copy `chili-beat.blit` onto the
CHILICHIP drive once, and every `.beat` game shows up on the home screen. Games
from your library reach the console the same way Bitsy games do.

Chili Beat is open source: the engine, its file format and its rules are on
[GitHub](https://github.com/chili-chip/chili-beat).
