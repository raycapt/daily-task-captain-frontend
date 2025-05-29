
import React, { useState } from "react";
import Login from "./Login";
import ChildDashboard from "./ChildDashboard";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  if (user.role === "child") {
    return <ChildDashboard user={user} />;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Parent dashboard coming soon.</h2>
      <button onClick={() => setUser(null)}>Log out</button>
    </div>
  );
}

export default App;
