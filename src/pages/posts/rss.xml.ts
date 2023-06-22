import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Brett Ormsby | Blog",
    description: "My articles about the projects I work on.",
    site: "https://brettormsby.github.io/portfolio/",
    items: await pagesGlobToRssItems(import.meta.glob("./*.mdx")),
    customData: `<language>en-ca</language>`
  });
}
