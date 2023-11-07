import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../index.css';

const signup = () => {
  return (
    <div className="login-box" style={{marginTop:"30px"}}> 
      <h2>Register</h2>
      <form>
      <div className="user-box">
          <input type="text" name="" required=""/>
          <label>Name</label>
        </div>
        <div className="user-box">
          <input type="text" name="" required=""/>
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="text" name="" required=""/>
          <label>Phone No</label>
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
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default signup;
