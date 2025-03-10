// react server component

const Bar = ({ React }) => {
  React.useId(); // for testing

  return React.createElement(
    "div",
    { style: { color: "blue" } },
    "Imports work, so I am able to say HELLO from imported ",
    React.createElement("code", null, "<Bar />"),
    " component."
  );
};

export default Bar;
