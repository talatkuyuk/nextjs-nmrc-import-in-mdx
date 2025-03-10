// react server component

const Bar = ({ React }) => {
  React.useId(); // for testing

  React.createElement(
    "div",
    { style: { color: "blue" } },
    "Imports work, so I am able to say HELLO from imported ",
    React.createElement("code", null, React.createElement(Bar, null)),
    " component."
  );
};

export default Bar;
