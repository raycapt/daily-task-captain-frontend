
import React, { useState } from "react";

export default function ParentDashboard({ user, onLogout }) {
  const [task, setTask] = useState({
    name: "",
    description: "",
    points: 10,
    required: true,
    assigned_to: "",
    type: "yesno",
    active_days: ["Mon", "Tue", "Wed"]
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...task, id: Date.now().toString() };

    fetch("https://daily-task-captain-api.onrender.com/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        alert("Task created!");
        setTask(prev => ({ ...prev, name: "", description: "" }));
      });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome, {user.name} (Parent)</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Task Name" value={task.name} onChange={handleChange} required />
        <br />
        <input name="description" placeholder="Description" value={task.description} onChange={handleChange} />
        <br />
        <input name="assigned_to" placeholder="Child ID (e.g. jake-child)" value={task.assigned_to} onChange={handleChange} required />
        <br />
        <input name="points" type="number" value={task.points} onChange={handleChange} />
        <br />
        <select name="type" value={task.type} onChange={handleChange}>
          <option value="yesno">Yes/No</option>
          <option value="mcq">Multiple Choice</option>
        </select>
        <br />
        <label>
          Required? <input name="required" type="checkbox" checked={task.required} onChange={handleChange} />
        </label>
        <br /><br />
        <button type="submit">Create Task</button>
      </form>
      <br />
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
}
