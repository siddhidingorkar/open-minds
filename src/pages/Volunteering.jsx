import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './volunteering.css'

const Volunteering = () => {
  // State to manage form input values
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [qualification, setQualification] = useState('');
  const [gender, setGender] = useState('male'); // Set the default gender here
  const [contactNumber, setContactNumber] = useState('');
  const [date, setDate] = useState('');

  const handleRegister = () => {
    if (!fullName || !age || !email || !qualification || !contactNumber || !date) {
      alert('Please fill in all required fields.');
    } else {
      alert('Registered successfully');
      // Clear the input fields
      setFullName('');
      setAge('');
      setEmail('');
      setQualification('');
      setGender('male'); // Reset the gender to the default value
      setContactNumber('');
      setDate('');
    }
  };

  return (
    <div className="volunteering-container">
      <h2>Volunteer Form</h2>
      <form>
        <div className="input-group">
          <input
            type="text"
            name="full-name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label>Full Name</label>
        </div>

        <div className="input-group">
          <input
            type="number"
            name="age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label>Age</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="qualification"
            required
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
          <label>Qualification</label>
        </div>

        <div className="input-group">
          <select
            name="gender"
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="input-group">
          <input
            type="tel"
            name="contact-number"
            required
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <label>Contact Number</label>
        </div>

        <div className="input-group">
          <input
            type="date"
            name="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <a href="#" className="submit-button" onClick={handleRegister}>
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
