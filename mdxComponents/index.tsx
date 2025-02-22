import dynamic from "next/dynamic";
import Link from "next/link";
import Image, { type ImageProps } from "next/image";
import type { MDXComponents } from "next-mdx-remote-client/rsc";

export const components: MDXComponents = {
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className="custom-strong" {...props} />
  ),
  wrapper: (props: React.ComponentPropsWithoutRef<"div">) => {
    return <div id="mdx-layout">{props.children}</div>;
  },
  Image,
  CustomImage: function CustomImage(props: ImageProps) {
    return <Image {...props} />;
  },
  DynamicLink: dynamic(() => import("next/link")),
  Link,
};
