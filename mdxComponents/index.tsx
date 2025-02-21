import dynamic from "next/dynamic";
import Image, { type ImageProps } from "next/image";
import type { MDXComponents } from "next-mdx-remote-client/rsc";

export const components: MDXComponents = {
  ALink: dynamic(() => import("next/link")),
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className="custom-strong" {...props} />
  ),
  wrapper: (props: React.ComponentPropsWithoutRef<"div">) => {
    return <div id="mdx-layout">{props.children}</div>;
  },
  CustomImage: function CustomImage(props: ImageProps) {
    return <Image {...props} />;
  },
  Image,
};
