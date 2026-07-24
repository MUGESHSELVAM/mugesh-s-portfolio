import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogFrontmatter = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  topic: string;
  readingTime: string;
};

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getBlogPost(slug: string): { frontmatter: BlogFrontmatter; content: string } | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as BlogFrontmatter, content };
}

export function getAllBlogPosts(): BlogFrontmatter[] {
  return getAllBlogSlugs()
    .map((slug) => getBlogPost(slug)?.frontmatter)
    .filter((f): f is BlogFrontmatter => Boolean(f))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
