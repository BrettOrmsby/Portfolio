import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Brett Ormsby | Blog",
    description: "My articles about the projects I work on.",
    site: "github.com",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-ca</language>`,
  });
}