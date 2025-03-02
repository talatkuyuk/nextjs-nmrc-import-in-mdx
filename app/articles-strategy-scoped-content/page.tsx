import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ipikuka Articles with Scoped Content Strategy",
};

export default async function Home() {
  return (
    <div style={{ display: "grid", justifyItems: "center" }}>
      <h1>Articles with Flat Content Strategy</h1>
      <p style={{ marginBottom: "0", textAlign: "center" }}>
        Todo: List the articles with scoped content strategy
      </p>
    </div>
  );
}
