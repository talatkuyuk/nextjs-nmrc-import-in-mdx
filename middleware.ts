import fs from "node:fs";
import path from "node:path";

import { type NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const url = req.nextUrl.pathname;

  if (url.startsWith("/data/")) {
    const imagePath = path.join(process.cwd(), url);
    console.log({ imagePath });

    try {
      const data = fs.readFileSync(imagePath);

      const contentTypeMap: Record<string, string> = {
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
      };

      const ext = path.extname(imagePath).toLowerCase();
      const contentType = contentTypeMap[ext] || "application/octet-stream";

      return new NextResponse(data, {
        headers: {
          "Content-Type": contentType,
        },
      });
    } catch (err) {
      console.error(`Image not found: ${imagePath}`, err);
      return new NextResponse("Image not found", { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs",
  matcher: "/data/:path*",
};
