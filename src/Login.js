
import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("child");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = name.toLowerCase().replace(/\s+/g, '-') + '-' + role;
    onLogin({ id, name, role });
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter name" required />
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="child">Child</option>
          <option value="parent">Parent</option>
        </select>
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
