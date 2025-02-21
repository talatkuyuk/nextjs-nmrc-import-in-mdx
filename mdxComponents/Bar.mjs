import React from "react";

const Bar = () => {
  return React.createElement(
    "div",
    { style: { color: "blue" } },
    "Imports work, so I am able to say HELLO from imported <Bar /> component."
  );
};

export default Bar;
