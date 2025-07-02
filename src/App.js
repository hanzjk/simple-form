import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameSubmit = (e) => {
    e.preventDefault();
    alert(`Name submitted: ${name}`);
  };

  const handleAgeSubmit = (e) => {
    e.preventDefault();
    alert(`Age submitted: ${age}`);
  };
  useEffect(() => {
    const nameBtn = document.getElementById("trigger-name-form");
    const ageBtn = document.getElementById("trigger-age-form");

    nameBtn?.addEventListener("click", () => {
      window.postMessage({ from: "webapp", action: "fillNameForm" }, "*");
    });

    ageBtn?.addEventListener("click", () => {
      window.postMessage({ from: "webapp", action: "fillAgeForm" }, "*");
    });

    return () => {
      nameBtn?.removeEventListener("click", () => {});
      ageBtn?.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <button id="trigger-name-form" style={{ marginTop: "2rem" }}>
        Fill & Submit Name Form
      </button>

      <button id="trigger-age-form" style={{ marginLeft: "1rem" }}>
        Fill & Submit Age Form
      </button>

      <h2>Form 1: Name</h2>
      <form id="name-form" onSubmit={handleNameSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button type="submit">Submit Name</button>
      </form>

      <h2 style={{ marginTop: "3rem" }}>Form 2: Age</h2>
      <form id="age-form" onSubmit={handleAgeSubmit}>
        <label htmlFor="age">Age:</label>
        <br />
        <input
          id="age"
          name="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <button type="submit">Submit Age</button>
      </form>
    </div>
  );
}

export default App;
