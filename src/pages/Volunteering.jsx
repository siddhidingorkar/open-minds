import React from 'react';
import { Link } from 'react-router-dom';
import './volunteering.css'
const Volunteering = () => {
  return (
    <div className="volunteering-container">
      <h2>Volunteer Form</h2>
      <form>

        <div className="input-group">
          <input type="text" name="full-name" required />
          <label>Full Name</label>
        </div>

        <div className="input-group">
          <input type="number" name="age" required />
          <label>Age</label>
        </div>

        <div className="input-group">
          <input type="email" name="email" required />
          <label>Email</label>
        </div>

        <div className="input-group">
          <input type="text" name="qualification" required />
          <label>Qualification</label>
        </div>

        <div className="input-group">
          <select name="gender" required >
         
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="input-group">
          <input type="tel" name="contact-number" required />
          <label>Contact Number</label>
        </div>

        <div className="input-group">
          <input type="date" name="date" required />
       
        </div>

        <a href="#" className="submit-button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}

export default Volunteering;
