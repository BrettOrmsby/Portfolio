import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("posts");
  return rss({
    title: "Brett Ormsby | Blog",
    description: "My articles about the projects I work on.",
    site: "https://brettormsby.github.io/portfolio/",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`
    })),
    customData: `<language>en-ca</language>`
  });
}
