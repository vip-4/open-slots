# Credits & license — Open Slots

## Upstream project

- **Repository**: https://github.com/johakr/html5-slot-machine
- **Author**: Johannes Kronmüller (`johakr`)
- **Description**: "Modern casino slot machine game using only plain JavaScript (Web Animations API)"
- **Popularity**: ~635 GitHub stars at selection time; the highest-starred
  open-source HTML5 slot / casino game found via GitHub search.
- **License**: **MIT** — full text bundled as [`LICENSE`](./LICENSE).
  The upstream copyright notice and permission notice are preserved verbatim.

## Icon artwork

The nine reel icons are from **KPD Media** —
[10 Star Wars Icons](https://iconstore.co/icons/10-star-wars-icons/) (Dribbble).
Per the upstream README, they **may be used for private and commercial purposes
with no attribution required**. Attribution is given here anyway for clarity.

The upstream repository also ships `assets/symbols/License and Author Info.pdf`
with the artwork terms; it is kept in `vendor/html5-slot-machine/` for reference
but is not part of the published site.

## Selection source

The requested starting point was
https://github.com/topics/open-source-games . That topic page lists 64
repositories (Flutter puzzle collections, Godot projects, curated directories,
browser game bundles) and contains **no casino / slot-machine game**. We therefore
used it as the entry point and searched the wider GitHub open-source game
ecosystem for casino titles, then shortlisted by stars and static-hosting fit:

| Repository | Stars | License | Static fit |
| --- | ---: | --- | --- |
| `johakr/html5-slot-machine` | 635 | MIT | vanilla JS; needed 2 small no-build fixes ✅ selected |
| `clintbellanger/Karma-Slots` | 206 | not declared | zero-build but no license file |
| `asiryk/slot-game` | 118 | MIT | TypeScript + rspack build |
| `bigmacman1129/slot-casino-game` | 61 | MIT | fork of `johakr` |

## Adaptations made for static production hosting

1. `js/Symbol.js`: replaced webpack-only
   `require(\`../assets/symbols/${name}.svg\`)`
   with `new URL(\`../assets/symbols/${name}.svg\`, import.meta.url).href`.
   This makes the code runnable as native ES modules and correct both at a domain
   root and under a GitHub Pages `/<repo>/` prefix.
2. Removed the unpkg `bootstrap-reboot` CDN stylesheet; a minimal local reset
   lives at the top of `css/style.css`. **Zero external network requests.**
3. `index.html` now explicitly loads `./css/style.css` and
   `<script type="module" src="./js/index.js">` (the upstream file relied on
   webpack's `HtmlWebpackPlugin` to inject them).
4. Added a full SEO / GEO layer without touching the game DOM:
   semantic `header` / `main` / `section` / `h1` / `h2`, a single `h1`,
   a symbol `<table>`, an ordered how-to list, a `<dl>` FAQ, complete meta tags
   (title, description, keywords, canonical, hreflang, Open Graph, Twitter Card),
   and a JSON-LD graph (`WebSite`, `WebPage`, `VideoGame`, `FAQPage`).
5. Added `robots.txt`, `sitemap.xml`, `llms.txt`, `404.html`, `privacy/index.html`,
   `site.webmanifest`, `CREDITS.md`, `_headers` and the MIT `LICENSE`.
6. Replaced the 1.75 MB `bg.jpg` with the upstream's own smaller `bg_small.jpg`
   (~454 KB) for every viewport, cutting initial payload by ~1.75 MB.
7. Added clear **18+ / play-money-only** and "no payouts, no win calculation"
   statements. The upstream demo has no paytable, no paylines and no RTP.

The game logic (`Reel.js`, `Slot.js`, `index.js`) and the `#slot` DOM structure
are **unchanged** from upstream.
