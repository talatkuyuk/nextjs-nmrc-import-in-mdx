export type Frontmatter = {
  title: string;
  author: string;
  date: Date;
};

export type Post = Frontmatter & { slug: string };

export type Scope = {
  readingTime: string;
};
