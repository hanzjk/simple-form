import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with name: ${name}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.5rem", width: "200px" }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
