"use client";

// client component due to "useState" hook
function ExampleForm({ React }) {
  const id = React.useId(); // Generates a unique ID
  const [name, setName] = React.useState("");
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement(
      "label",
      { htmlFor: `${id}-name` },
      "Enter your name:"
    ),
    /*#__PURE__*/ React.createElement("input", {
      id: `${id}-name`,
      type: "text",
      value: name,
      onChange: (e) => setName(e.target.value),
    }),
    /*#__PURE__*/ React.createElement(
      "p",
      null,
      `Hello, ${name || "stranger"} !`
    )
  );
}
export default ExampleForm;
