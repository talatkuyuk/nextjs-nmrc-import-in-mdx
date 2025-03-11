// react server component

const Bar = ({ React }) => {
  React.useId(); // for testing

  return React.createElement(
    "span",
    { style: { color: "var(--primary)" } },
    "Imports work, Hello from imported ",
    React.createElement("code", null, "<Bar />"),
    " component."
  );
};

export default Bar;
