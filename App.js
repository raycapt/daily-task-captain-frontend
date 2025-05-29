
import React, { useState } from "react";
import Login from "./Login";
import ChildDashboard from "./ChildDashboard";
import ParentDashboard from "./ParentDashboard";

function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login onLogin={setUser} />;
  if (user.role === "child") return <ChildDashboard user={user} />;
  if (user.role === "parent") return <ParentDashboard user={user} onLogout={() => setUser(null)} />;

  return null;
}

export default App;
