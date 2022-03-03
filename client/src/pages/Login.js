import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <form>
        <input
          type="text"
          className="register-field"
          placeholder="Username"
          name="username"
        ></input>
        <input
          type="password"
          className="register-field"
          placeholder="Password"
          name="password"
        ></input>
        <input type="submit" className="submit-button" value="Login"></input>
      </form>
    </div>
  );
};

export default Login;
