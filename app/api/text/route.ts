import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  const text = "Hello from text which is fetched from a server component";
  return new NextResponse(text, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
