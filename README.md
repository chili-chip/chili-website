# chili-website

Source of [chilichip.eu](https://chilichip.eu): the blog, the docs and the game pages. It is a [Hugo](https://gohugo.io) site using the [Blowfish](https://blowfish.page) theme.

## Requirements

- **Hugo extended, 0.164.0 to 0.167.0.** CI builds with 0.164.0 (`.github/workflows/pages.yml`). The lower bound comes from `config/_default/module.toml` (`min = "0.164.0"`), the upper bound from the pinned Blowfish theme (`max = "0.167.0"` in `themes/blowfish/config.toml`); outside that range Hugo warns that the theme is not compatible. Get it from the [Hugo releases page](https://github.com/gohugoio/hugo/releases) (`hugo_extended_0.164.0_*`), or see [Install Hugo](https://gohugo.io/installation/). Check with `hugo version`: the output must contain `+extended`.
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
hugo -d ./public --baseURL https://chilichip.eu
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
| `config/_default/` | Site config: `hugo.toml` (base URL, taxonomies, outputs), `params.toml` (theme options), `languages.en.toml` (site title, description, site-wide author), `menus.en.toml`, `markup.toml` (Markdown and syntax highlighting), `module.toml` (supported Hugo version). |
| `assets/` | Files Hugo processes: `img/` (logo, background) and `js/` (`game-iframe-focus.js`). |
| `static/` | Files copied to the site as they are: favicons and app icons. |

New post:

```sh
hugo new content posts/my-post/index.md
```

Embed a game (its web build is usually hosted on GitHub Pages of the game's repository):

```md
{{< game-iframe url="https://snek-game.chilichip.eu/" width="600" height="600" title="Snek" >}}
```

## Deploy

Every push to `main` runs `.github/workflows/pages.yml`. It builds the site with Hugo 0.164.0 extended and publishes it to GitHub Pages at https://chilichip.eu. Pull requests are **not** built, so run the production build above locally before you open one. You can also start the workflow by hand from the Actions tab (`workflow_dispatch`).

## Updating the theme

```sh
./update.sh
```

`update.sh` moves the `themes/blowfish` submodule to the latest commit of Blowfish's `main` branch and commits only that submodule pointer. It does not push. Before you push, check the new theme's Hugo range (`[module.hugoVersion]` in `themes/blowfish/config.toml`; a Blowfish bump has already required a newer Hugo once), run the production build above, and update the Hugo version in this README, `config/_default/module.toml` and `.github/workflows/pages.yml` if it changed. Then `git push`.
