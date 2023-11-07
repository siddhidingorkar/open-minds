import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../index.css';

const Login = () => {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="email" name="" required=""/>
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required=""/>
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
      <p style={{ color: 'white', marginTop: '20px' }}>
        Don't have an account? <Link to="/signup">Register</Link>
      </p>
    </div>
  );
};

export default Login;
