import type { Metadata } from "next";
import { getFrontmatter } from "next-mdx-remote-client/utils";
import { MDXClientAsync } from "next-mdx-remote-client";
import {
  serialize,
  type SerializeOptions,
} from "next-mdx-remote-client/serialize";
import { nodeTypes } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import recmaMdxImportReact from "recma-mdx-import-react";

import type { Frontmatter } from "@/types";
import { getRandomInteger } from "@/utils";
import { getMarkdownFromSlug } from "@/utils/file";
import { components } from "@/mdxComponents";
import ErrorComponent from "@/components/ErrorComponent";
import LoadingComponent from "@/components/LoadingComponent";

const directory = "data/articles-modules-components";
const slug = "article-import-client-component-mjs-mdx";

export async function generateMetadata(): Promise<Metadata> {
  const file = await getMarkdownFromSlug(directory, slug);

  if (!file) return {};

  const { frontmatter } = getFrontmatter<Frontmatter>(file.source);

  return {
    title: frontmatter.title ?? "Article",
  };
}

/**
 * "MDXRemote" to be rendered
 */
export default async function Post() {
  const result = await getMarkdownFromSlug(directory, slug);

  if (!result) {
    return <ErrorComponent error="The source could not found !" />;
  }

  const { source, format } = result;

  const options: SerializeOptions = {
    parseFrontmatter: true,
    scope: {
      readingTime: getRandomInteger(5, 10),
    },
    mdxOptions: {
      format,
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypeRaw, { passThrough: nodeTypes }]],
      recmaPlugins: [recmaMdxImportReact],
      baseUrl: import.meta.url,
    },
  };

  const mdxSource = await serialize<Frontmatter>({
    source,
    options,
  });

  if ("error" in mdxSource) {
    return <ErrorComponent error={mdxSource.error} />;
  }

  return (
    <>
      it does not work, When MDXRemoto it says use "use client" but Next.js
      doesn't recognize, when MDXClient it can't run await due to runSync, when
      MDXClientAsync, can not pass components and can't import the client
      component on the client
    </>
  );
}
