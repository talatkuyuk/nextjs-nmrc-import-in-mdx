// react server component

const Bar = ({ jsx: _jsx, jsxs: _jsxs }) => {
  return _jsxs("span", {
    style: { color: "var(--primary)" },
    children: [
      "Imports work, Hello from imported ",
      _jsx("code", { children: "<Bar />" }),
      " component.",
    ],
  });
};

export default Bar;
