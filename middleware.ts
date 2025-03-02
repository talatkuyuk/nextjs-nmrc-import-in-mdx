import fs from "node:fs";
import path from "node:path";

import { type NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const url = req.nextUrl.pathname;

  if (url.startsWith("/blog-assets/")) {
    const imageName = url.split("/blog-assets/")[1];
    const imagePath = path.join(
      process.cwd(),
      "articles-strategy-flat-content",
      "blog-assets",
      imageName
    );

    try {
      const data = fs.readFileSync(imagePath);

      const ext = path.extname(imageName).toLowerCase();
      const contentType =
        ext === ".png"
          ? "image/png"
          : ext === ".jpg" || ext === ".jpeg"
          ? "image/jpeg"
          : ext === ".gif"
          ? "image/gif"
          : "application/octet-stream";

      return new NextResponse(data, {
        headers: {
          "Content-Type": contentType,
        },
      });
    } catch (err) {
      console.error(`❌ Image not found: ${imagePath}`, err);
      return new NextResponse("Image not found", { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs",
  matcher: "/blog-assets/:path*",
};
