import React, { useState } from "react";
import LoginForm from "./LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lift State Up Demo</h1>

      {isLoggedIn ? (
        <h2>You are logged in!</h2>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
