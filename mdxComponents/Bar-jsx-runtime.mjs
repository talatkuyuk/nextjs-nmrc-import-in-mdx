// react server component

const Bar = ({ jsx: _jsx, jsxs: _jsxs }) => {
  return _jsxs("div", {
    style: { color: "blue" },
    children: [
      "Imports work, so I am able to say HELLO from imported",
      _jsx("code", { children: _jsx(Bar, {}) }),
      "component.",
    ],
  });
};

export default Bar;
