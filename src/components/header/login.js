import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router";
import "../../styles/login.css";

const LoginForm = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "mPARmANi" && password === "BuShiMiN") {
      console.log("Login button clicked");
      console.log("Username:", username);
      console.log("Password:", password);
      login();
      navigate("/");
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login">
    <div class="colm-form">
        <div class="form-container">
          <input type="text" placeholder="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button class="btn-login" onClick={handleLogin}>Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    </div>
    </div>
          
  );
};

export default LoginForm;
