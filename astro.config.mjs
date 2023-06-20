import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import {remarkReadingTime} from "./remark-read-time.mjs"

// https://astro.build/config
export default defineConfig({
  site: 'https://brettormsby.github.io',
  base: '/Portfolio',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  }
});
