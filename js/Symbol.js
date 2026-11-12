/* Open Slots - adapted from upstream src/js/Symbol.js
 *
 * Only functional change: the upstream file used webpack's CommonJS-style
 * asset resolution inside a template string. That does not work in a native
 * ES module, so it is replaced with a module-relative URL built from
 * import.meta.url. This also makes the code work at a domain root and under
 * a GitHub Pages /<repo>/ prefix.
 *
 * Everything else (cache, preload, symbol list, uniform random) is unchanged.
 */

const cache = {};

export default class Symbol {
  constructor(name = Symbol.random()) {
    this.name = name;

    if (cache[name]) {
      this.img = cache[name].cloneNode();
    } else {
      this.img = new Image();
      // Resolve relative to THIS module, not the page URL; no bundler needed.
      this.img.src = new URL(`../assets/symbols/${name}.svg`, import.meta.url).href;
      this.img.alt = "";              // decorative icon, avoid screen-reader noise
      this.img.decoding = "async";
      cache[name] = this.img;
    }
  }

  static preload() {
    Symbol.symbols.forEach((symbol) => new Symbol(symbol));
  }

  static get symbols() {
    return [
      "at_at",
      "c3po",
      "darth_vader",
      "death_star",
      "falcon",
      "r2d2",
      "stormtrooper",
      "tie_ln",
      "yoda",
    ];
  }

  static random() {
    return this.symbols[Math.floor(Math.random() * this.symbols.length)];
  }
}
