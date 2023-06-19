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
    tags: ["typeScript", "programming language", "vscode", "vue", "picocss"],
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
    description:
      "Add an EDHREC-like clipboard for copying card names on Scryfall",
    date: "2023-6-19"
  }
] as Project[];
