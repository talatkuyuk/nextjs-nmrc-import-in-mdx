"use client";

// client component due to "useState" hook
function ExampleForm({ React, jsx: _jsx, jsxs: _jsxs }) {
  const id = React.useId(); // Generates a unique ID
  const [name, setName] = React.useState("");
  return /*#__PURE__*/ _jsxs("div", {
    children: [
      /*#__PURE__*/ _jsx("label", {
        htmlFor: `${id}-name`,
        children: "Enter your name:",
      }),
      /*#__PURE__*/ _jsx("input", {
        id: `${id}-name`,
        type: "text",
        value: name,
        onChange: (e) => setName(e.target.value),
      }),
      /*#__PURE__*/ _jsxs("p", {
        children: ["Hello, ", name || "stranger", "!"],
      }),
    ],
  });
}
export default ExampleForm;
