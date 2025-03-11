// react server component

const Bar = () => {
  return (
    <span style={{ color: "var(--primary)" }}>
      Imports work, so I am able to say HELLO from imported
      <code>
        <Bar />
      </code>
      component.
    </span>
  );
};

export default Bar;
