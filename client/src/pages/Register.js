import React from "react";
import "../styles/Login.css";

const Register = () => {
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
        <input type="submit" className="submit-button" value="Register"></input>
      </form>
    </div>
  );
};

export default Register;
