async function getData() {
  const res = await fetch("http://localhost:3000/api/text");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.text();
}

export default async function Post({ React }) {
  const text = await getData();

  return React.createElement(
    "span",
    { style: { color: "var(--greenary)" } },
    React.createElement("span", null, text)
  );
}
