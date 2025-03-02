import type { Metadata } from "next";
import Link from "next/link";

import { getPostInformation, getMarkdownFiles } from "@/utils/file";
import type { Post } from "@/types";

export const metadata: Metadata = {
  title: "Ipikuka Articles with Flat Content Strategy",
};

export default async function Articles() {
  const dir = "articles-strategy-flat-content";
  const files = getMarkdownFiles(dir);

  const posts = files
    .map((f) => getPostInformation(dir, f))
    .filter((post): post is Post => post !== undefined)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  console.log(posts);

  return (
    <div>
      <h1>Articles with Flat Content Strategy</h1>
      <ul className="articles">
        {posts.map((post) => (
          <li key={post.title}>
            <strong>
              <Link href={`/articles-strategy-flat-content/${post.slug}`}>
                {post.title}
              </Link>
            </strong>
            <p>
              <span>{String(post.date)}, </span>
              <span>
                written by <strong>{post.author}</strong>
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
