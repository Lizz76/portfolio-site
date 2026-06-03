import { readdir, readFile, writeFile } from "node:fs/promises";
import { basename, extname, join } from "node:path";

const root = new URL("..", import.meta.url);
const articleDir = new URL("assets/articles/", root);
const files = (await readdir(articleDir))
  .filter((file) => extname(file) === ".md")
  .sort();

const data = {};
for (const file of files) {
  const id = basename(file, ".md");
  data[id] = await readFile(join(articleDir.pathname, file), "utf8");
}

const output = [
  "// Generated from assets/articles/*.md so the site can read articles from file://.",
  `window.portfolioArticleMarkdown = ${JSON.stringify(data, null, 2)};`,
  "",
].join("\n");

await writeFile(new URL("article-data.js", root), output);
