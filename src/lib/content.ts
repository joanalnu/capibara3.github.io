import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

const CONTENT_DIR = path.resolve(process.cwd(), "content");

export type ContentPage = {
  id: string;
  filePath: string;
  slug: string;
  title: string;
  description: string;
  date?: string;
  category: string;
  body: string;
};

function walk(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory()
      ? walk(fullPath)
      : fullPath.endsWith(".md")
        ? [fullPath]
        : [];
  });
}

export function slugify(value: string): string {
  return value
    .replace(/\.md$/i, "")
    .replace(/\.html?$/i, "")
    .replace(/\\/g, "/")
    .split("/")
    .map((segment) =>
      segment
        .trim()
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
    )
    .filter(Boolean)
    .join("/");
}

function routeFromRelative(relativePath: string): string {
  const withoutExtension = relativePath.replace(/\.md$/i, "");
  const segments = withoutExtension.split("/");
  if (segments.at(-1)?.toLowerCase() === "index") segments.pop();
  return slugify(segments.join("/"));
}

function linkToRoute(target: string): string {
  const cleanTarget = target.trim().replace(/^\/+|\/+$/g, "");
  if (/^(https?:|mailto:|#)/i.test(cleanTarget)) return target;
  if (cleanTarget.toLowerCase().startsWith("news/")) {
    return `/blog/${routeFromRelative(cleanTarget).replace(/^news\//, "")}`;
  }
  return `/${routeFromRelative(cleanTarget)}`;
}

function prepareMarkdown(markdown: string): string {
  const wikiLinks = markdown.replace(
    /\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g,
    (_, target: string, label?: string) =>
      `[${label ?? target.trim()}](${linkToRoute(target)})`,
  );
  return wikiLinks.replace(
    /\]\((?!https?:|mailto:|#|\/)([^)\s]+\.html?)(?:\s+"([^"]+)")?\)/gi,
    (_, target: string, title?: string) =>
      `](${linkToRoute(target)}${title ? ` "${title}"` : ""})`,
  );
}

export function getPages(): ContentPage[] {
  return walk(CONTENT_DIR)
    .map((filePath) => {
      const relativePath = path.relative(CONTENT_DIR, filePath);
      const parsed = matter(fs.readFileSync(filePath, "utf8"));
      const slug = routeFromRelative(relativePath);
      const title =
        parsed.data.title ||
        parsed.content.match(/^#\s+(.+)$/m)?.[1]?.replace(/[*_`]/g, "") ||
        path.basename(relativePath, ".md");
      const category = relativePath.includes("/")
        ? relativePath.split("/")[0]
        : "Overview";
      return {
        id: relativePath,
        filePath,
        slug,
        title,
        description: parsed.data.description || "",
        date: parsed.data.date
          ? String(parsed.data.date).slice(0, 10)
          : undefined,
        category,
        body: parsed.content,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getPageBySlug(slug: string): ContentPage | undefined {
  return getPages().find((page) => page.slug === slug);
}

export function getPagesBySection(
  section: "news" | "documentation" | "gamma",
): ContentPage[] {
  return getPages().filter(
    (page) => page.slug === section || page.slug.startsWith(`${section}/`),
  );
}

export function getNewsPages(): ContentPage[] {
  return getPagesBySection("news")
    .filter((page) => page.slug !== "news")
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export async function renderMarkdown(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeKatex)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(prepareMarkdown(markdown));
  return String(result);
}
