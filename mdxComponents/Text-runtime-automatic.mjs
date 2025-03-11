async function getData() {
  const res = await fetch("http://localhost:3000/api/text");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.text();
}

export default async function Post({ jsx: _jsx, jsxs: _jsxs }) {
  const text = await getData();

  return _jsx("span", {
    style: {
      color: "var(--greenary)",
    },
    children: _jsx("span", {
      children: text,
    }),
  });
}
