# chili-website

Source of [chilichip.eu](https://chilichip.eu): the blog, the docs and the game pages. It is a [Hugo](https://gohugo.io) site using the [Blowfish](https://blowfish.page) theme.

## Requirements

- **Hugo extended, 0.164.0 or newer.** `config/_default/module.toml` sets `min = "0.164.0"` and CI builds with 0.164.0. The pinned Blowfish version allows Hugo up to 0.167.0 (`themes/blowfish/config.toml`), so stay in that range. Get it from the [Hugo releases page](https://github.com/gohugoio/hugo/releases) (`hugo_extended_0.164.0_*`), or see [Install Hugo](https://gohugo.io/installation/). Check with `hugo version`: the output must contain `+extended`.
- **Git**, to fetch the theme submodule.
- **npm** (optional), only as a shortcut for `npm run dev`.

## Run locally

```sh
git clone https://github.com/chili-chip/chili-website.git
cd chili-website
git submodule update --init   # fetches themes/blowfish
npm run dev                   # same as: hugo server --minify -D -E -F
```

Open http://localhost:1313. The server reloads when you save a file. `-D -E -F` also shows drafts, expired and future-dated pages, so you can preview a post before it is published.

To check a production build the same way CI does:

```sh
hugo -d ./public
```

If the build fails with a theme error, the submodule is missing or out of date: run `git submodule update --init` again.

## How the content is organised

| Path | What lives there |
| --- | --- |
| `content/posts/<slug>/index.md` | Blog posts. Images sit next to `index.md` in the same folder (`featured.png` is the cover). Set `authors: ["<id>"]` in the front matter; ids are files in `data/authors/`. |
| `content/docs/` | Documentation: `game-sdk/` (quickstart and API), `bitsy/`, `vgc-zero/`. |
| `content/games/<game>/index.md` | One page per game. The playable web build is embedded with the `game-iframe` shortcode (below). |
| `data/authors/<id>.json` | Post authors (name, bio, links), see [Blowfish: Multiple Authors](https://blowfish.page/docs/multi-author/). |
| `layouts/shortcodes/` | Our own shortcodes: `game-iframe`, `screenshot`. |
| `archetypes/` | Templates used by `hugo new`. |
| `config/_default/` | Site config: `params.toml` (theme options), `menus.en.toml`, `languages.en.toml`. |
| `static/`, `assets/` | Static files and theme assets (logo, favicons, CSS). |

New post:

```sh
hugo new content posts/my-post/index.md
```

Embed a game (its web build is usually hosted on GitHub Pages of the game's repository):

```md
{{< game-iframe url="https://snek-game.chilichip.eu/" width="600" height="600" title="Snek" >}}
```

## Deploy

Every push to `main` runs `.github/workflows/pages.yml`. It builds the site with Hugo 0.164.0 extended and publishes it to GitHub Pages at https://chilichip.eu. Pull requests are **not** built, so run `hugo -d ./public` locally before you open one. You can also start the workflow by hand from the Actions tab (`workflow_dispatch`).

## Updating the theme

`update.sh` pulls the latest Blowfish into `themes/blowfish` and commits it directly. Before you push the update, check the new theme's supported Hugo range, because a Blowfish bump has already required a newer Hugo once.
