"use client";

// client component due to "useState" hook
function ExampleForm({ React }) {
  const id = React.useId(); // Generates a unique ID
  const [name, setName] = React.useState("");

  return (
    <div>
      <label htmlFor={`${id}-name`}>Enter your name:</label>
      <input
        id={`${id}-name`}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || "stranger"}!</p>
    </div>
  );
}

export default ExampleForm;
