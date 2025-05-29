
import React, { useEffect, useState } from "react";

export default function ChildDashboard({ user }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`https://daily-task-captain-api.onrender.com/tasks/${user.id}`)
      .then(res => res.json())
      .then(data => setTasks(data));
  }, [user.id]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome, {user.name}</h2>
      <h3>Your Tasks</h3>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <strong>{task.name}</strong> ({task.type}) — {task.points} pts {task.required ? "[Required]" : ""}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
