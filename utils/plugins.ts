import type { PluggableList } from "unified";
import { nodeTypes } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import recmaMdxEscapeMissingComponents from "recma-mdx-escape-missing-components";
import recmaMdxChangeImports, {
  type ChangeImportsOptions,
} from "recma-mdx-change-imports";

export const remarkPlugins: PluggableList = [remarkGfm];

export const rehypePlugins: PluggableList = [
  // allow HTML elements in "md" format, "passThrough" is for "mdx"
  [rehypeRaw, { passThrough: nodeTypes }],
  // turn media paths into imports in markdown syntax
  rehypeMdxImportMedia,
];

export const recmaPlugins: PluggableList = [
  // escape if there is no "Bar" component and don't throw error
  [recmaMdxEscapeMissingComponents, ["Bar"]],
  // turn imports with relatie paths into constant variable declaration
  [recmaMdxChangeImports, { pathname: "blog-assets" } as ChangeImportsOptions],
];
