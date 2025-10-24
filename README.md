This is a [Next.js](https://nextjs.org) project powered with

## Application

The application is designed for:

1. finding a solution **import static assets with relative path using `./` and `../`** in MDX.
2. finding a solution **import components/modules/functions** in MDX.

## Getting Started

First, run the development server and open [http://localhost:3000](http://localhost:3000) with your browser.

```bash
npm run dev
```

Or, run the production mode and open [http://localhost:3000](http://localhost:3000) with your browser.

```bash
npm run build
npm run start
```

## Import static assets with relative path in MDX

Static assets which are located in a different directory other than `public` needs a `middleware` in `Next.js`.

### Create Middleware

Nodejs runtime is supported in the middleware as of `next@15.5` as stable thanks to the config `{runtime: "nodejs"}` in the middleware.

Hence, `middleware.ts` in the project can serve assets placed in a different directory other than public directory.

> [!WARNING]
> The middleware works perfect in development/production mode in local; and can serve the static assets other than public.
>
> **But, when deploy to the vercel, the middleware cant' find the assets. Because Vercel does not upload entire project directory. To keep **`/data`** directory accessible by middleware you need to set `outputFileTracingIncludes` option in the next config. This ensures the **`/data`** directory is packaged into serverless function bundle on Vercel so middleware can access it.**

See [the living web site](https://nextjs-nmrc-import-in-mdx.vercel.app/)

### Employ two `recma` plugins

With the **[`recma-mdx-import-media`](https://github.com/ipikuka/recma-mdx-import-media)** and **[`recma-mdx-change-imports`](https://github.com/ipikuka/recma-mdx-change-imports)** plugins working together, you can seamlessly display images using **relative path** in Markdown/MDX.

In this application, I am able to display images using _relative paths_.

```markdown
Pay attention to that I am not using any import declarations at all !

### using markdown syntax

![article image](./article-assets/image.png "Article Image")
![blog image](../blog-assets/image.png "Blog Image")

### using html syntax

<img alt="article image" src="./article-assets/image.png" />
<img alt="blog image" src="../blog-assets/image.png" />
```

## Import components/modules/functions in MDX

**[`next-mdx-remote-client`](https://github.com/ipikuka/next-mdx-remote-client)** provides feature for importing modules/functions/components.

Importing a function or module from a file doesn't need anything extra in **`next-mdx-remote-client`**.

But, importing a `React` component needs to use a `recma` plugin called **[`recma-mdx-import-react`](https://github.com/ipikuka/recma-mdx-import-react)**. This recma plugin ensures getting `React` instance from the arguments and makes the runtime props `{React, jsx, jsxs, jsxDev, Fragment}` is available in the dynamically imported components in the compiled source of MDX.

## TODOs

- importing React components from `.jsx` file.
- importing React components from `.mjs` file with `jsx` syntax.
- importing modules from `node_modules` in MDX.
