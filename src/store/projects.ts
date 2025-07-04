import type { Project } from "../utils/types";

export default [
  {
    name: "Blobbed Editor",
    image: { path: "blobbed-editor.jpg", alt: "Example output image" },
    link: "https://blobbededitor.vercel.app/",
    tags: [
      "design",
      "vue",
      "javascript",
      "highlight.js",
      "html2canvas",
      "picocss"
    ],
    description: "Create blobbed, syntax-highlighted images of your code.",
    date: "2022-8-11"
  },
  {
    name: "EDH Deck Check",
    image: { path: "edh-deck-check.jpg", alt: "EDH deck check hero image" },
    link: "https://edh-deck-check.vercel.app/",
    tags: ["vue", "typeScript", "primevue"],
    description: "How many combos does your EDH deck have?",
    date: "2022-10-12"
  },
  {
    name: "HTML Widget",
    image: {
      path: "html-widget.jpg",
      alt: "Example code to create a reddit widget"
    },
    link: "https://github.com/Normal-Tangerine8609/Scriptable-HTML-Widget",
    tags: ["scriptable", "widget", "javascript"],
    description:
      "HTML Widget allows you to create Scriptable widgets in HTML-like syntax. HTML Widget is easy to use and supports all widget features.",
    date: "2021-11-9"
  },
  {
    name: "TypeStack",
    image: {
      path: "type-stack.jpg",
      alt: "Example typestack fizzbuzz program"
    },
    link: "https://brettormsby.github.io/typestack/",
    tags: ["typescript", "programming language", "vscode", "vue", "picocss"],
    description: "A functional, stack-based, type-safe programing language",
    date: "2023-1-26"
  },
  {
    name: "Scryfall Clipboard",
    image: {
      path: "scryfall-clipboard.png",
      alt: "Example usage"
    },
    link: "https://addons.mozilla.org/en-CA/firefox/addon/scryfall-search-clipboard/",
    tags: ["javascript", "extension"],
    description:
      "Add an EDHREC-like clipboard for copying card names on Scryfall",
    date: "2023-6-19"
  },
  {
    name: "Portfolio",
    image: {
      path: "portfolio.png",
      alt: "Home screen"
    },
    link: "https://brettormsby.github.io/Portfolio/",
    tags: ["typescript", "astro", "picocss"],
    description: "Brett Ormsby; a student, programmer, webdev.",
    date: "2023-6-19"
  },
  {
    name: "Fris",
    image: {
      path: "fris.png",
      alt: "Fris Example"
    },
    link: "https://github.com/BrettOrmsby/fris",
    tags: ["typescript", "command-line"],
    description:
      "A command line tool to find and replace text within syntax scopes.",
    date: "2023-7-29"
  },
  {
    name: "Hyper Tagger",
    image: {
      path: "hyper-tagger.jpeg",
      alt: "Hyper Tagger Example"
    },
    link: "https://brettormsby.github.io/hyper-tagger/",
    tags: ["typescript", "primevue", "vue"],
    description:
      "Need to tag your Moxfield deck? Want to save time? Don't have a computer with you? Try this!",
    date: "2023-8-14"
  },
  {
    name: "Augur",
    image: {
      path: "augur.png",
      alt: "Augur search page example"
    },
    link: "https://augur-mtg.vercel.app/",
    tags: ["typescript", "primevue", "vue"],
    description: "A Brewers MTG Search Engine.",
    date: "2024-6-23"
  },
  {
    name: "Sprout",
    image: {
      path: "sprout.png",
      alt: "The Heal MidRose deck build with Sprout."
    },
    link: "https://sprout-deckbuider.vercel.app/",
    tags: ["typescript", "primevue", "vue", "auth", "supabase"],
    description: "A deck building website for Plants vs. Zombies Heros.",
    date: "2024-7-29"
  },
  {
    name: "Turbo Tagger",
    image: {
      path: "turbo-tagger.png",
      alt: "An example of tagging a Blue Farm deck."
    },
    link: "https://brettormsby.github.io/turbo-tagger/",
    tags: ["typescript", "primevue", "vue"],
    description: "A faster, computer-based version of Hyper Tagger.",
    date: "2024-8-06"
  },
  {
    name: "Area Wars",
    image: {
      path: "area-wars.png",
      alt: "An example page where red is winning 85 to 26."
    },
    link: "https://brettormsby.github.io/area-wars/",
    tags: ["typescript", "vue", "game"],
    description:
      "A strategic, two-player, turn-based game of tile control and dominance.",
    date: "2024-12-13"
  },
  {
    name: "Shape Fall",
    image: {
      path: "shape-fall.png",
      alt: "An example level with red, blue, and green shapes."
    },
    link: "https://brettormsby.github.io/shape-fall/",
    tags: ["typescript", "matter-js", "game", "vite"],
    description: "A simple canvas-based physics puzzle game.",
    date: "2025-7-4"
  }
] as Project[];
