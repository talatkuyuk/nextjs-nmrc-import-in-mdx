import fs from "fs";
import path from "path";

import { getFrontmatter } from "next-mdx-remote-client/utils";

import type { Post, Frontmatter } from "@/types";

type MarkdownFilename = `${string}.md` | `${string}.mdx`;

export const RE = /\.mdx?$/; // Only .md(x) files

export function getMarkdownExtension(fileName: MarkdownFilename): "md" | "mdx" {
  const match = fileName.match(/\.mdx?$/);

  return match![0].substring(1) as "md" | "mdx";
}

export function toFilename(slug: string): MarkdownFilename {
  // replace the last dash with dot
  return slug.replace(/-(?=[^-]*$)/, ".") as MarkdownFilename;
}

export function toSlug(filename: string): string {
  // replace the last dot with dash
  return filename.replace(/\.(?=[^.]*$)/, "-");
}

export const getSource = async (
  filename: string
): Promise<string | undefined> => {
  const sourcePath = path.join(process.cwd(), "data", filename);
  if (!fs.existsSync(sourcePath)) return;
  return await fs.promises.readFile(sourcePath, "utf8");
};

export const getSourceSync = (filename: string): string | undefined => {
  const sourcePath = path.join(process.cwd(), "data", filename);
  if (!fs.existsSync(sourcePath)) return;
  return fs.readFileSync(sourcePath, "utf8");
};

/**
 * get the markdown file list
 */
export const getMarkdownFiles = (): string[] => {
  return fs
    .readdirSync(path.join(process.cwd(), "data"))
    .filter((filePath: string) => RE.test(filePath));
};

/**
 * get the source and format from a slug !
 */
export const getMarkdownFromSlug = async (
  slug: string
): Promise<
  | {
      source: string;
      format: "md" | "mdx";
    }
  | undefined
> => {
  if (!/-mdx?$/.test(slug)) return;

  const filename = toFilename(slug);

  const fullPath = path.join(process.cwd(), "data", filename);

  if (fs.existsSync(fullPath)) {
    const source = await getSource(filename);

    if (!source) return;

    return {
      source,
      format: getMarkdownExtension(filename),
    };
  }
};

/**
 * get the frontmatter and slug of a file
 */
export const getPostInformation = (filename: string): Post | undefined => {
  const source = getSourceSync(filename);

  if (!source) return;

  const frontmatter = getFrontmatter<Frontmatter>(source).frontmatter;

  const post: Post = {
    ...frontmatter,
    slug: toSlug(filename),
  };

  return post;
};
