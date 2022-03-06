import React, { useState } from "react";
import "../styles/Login.css";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/users", {
      username,
      password,
    });
    console.log(res);
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="register-field"
          placeholder="Username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          className="register-field"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type="submit" className="submit-button" value="Register"></input>
      </form>
    </div>
  );
};

export default Register;
