import type { PluggableList } from "unified";
import { nodeTypes } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import recmaMdxImportMedia from "recma-mdx-import-media";
import recmaMdxChangeImports, {
  type ChangeImportsOptions,
} from "recma-mdx-change-imports";
import recmaMdxImportReact from "recma-mdx-import-react";

export const remarkPlugins: PluggableList = [remarkGfm];

export const rehypePlugins: PluggableList = [
  [rehypeRaw, { passThrough: nodeTypes }],
];

export const recmaPlugins: (pathname: string) => PluggableList = (pathname) => [
  // turn media paths into imports in markdown syntax
  recmaMdxImportMedia,

  // turn imports with relative paths into constant variable declaration of resolvable URL string
  [recmaMdxChangeImports, { pathname } as ChangeImportsOptions],

  // make React instance is available in the compiled source
  recmaMdxImportReact,
];
