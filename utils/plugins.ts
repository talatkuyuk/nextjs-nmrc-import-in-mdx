import type { PluggableList } from "unified";
import { nodeTypes } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import recmaMdxEscapeMissingComponents from "recma-mdx-escape-missing-components";

export const remarkPlugins: PluggableList = [remarkGfm];

export const rehypePlugins: PluggableList = [
  // allow HTML elements in "md" format, "passThrough" is for "mdx"
  [rehypeRaw, { passThrough: nodeTypes }],
  // turn media paths into imports in markdown syntax
  rehypeMdxImportMedia,
];

export const recmaPlugins: PluggableList = [
  [recmaMdxEscapeMissingComponents, ["Bar"]],
];
