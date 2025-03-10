const Bar = ({ React }) => {
  return (
    <div style={{ color: "blue" }}>
      Imports work, so I am able to say HELLO from imported{" "}
      <code>
        <Bar />
      </code>{" "}
      component."
    </div>
  );
};

export default Bar;
