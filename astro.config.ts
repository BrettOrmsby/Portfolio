import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { satteri } from "@astrojs/markdown-satteri";
import { mdastReadingTimePlugin } from "./src/mdast/mdast-reading-time";

// https://astro.build/config
export default defineConfig({
  site: "https://brettormsby.github.io",
  base: "/Portfolio",
  integrations: [mdx()],
  markdown: {
    processor: satteri({
      mdastPlugins: [mdastReadingTimePlugin],
    }),
  },
});
