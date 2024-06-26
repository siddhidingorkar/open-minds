import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../index.css";

const Login = () => {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="email" name="" required="" />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <p style={{ color: "black", marginTop: "20px" }}>
        Don't have an account?{" "}
        <Link to="/signup" className="register-link">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
