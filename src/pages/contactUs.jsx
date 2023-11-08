import React from 'react';
import './contact.css'
import Footer from '../components/Footer';
const ContactUs = () => {
  return (
    <>
    <section id="contact">
    <div class="contact-box">
      <div class="contact-links">
        <h2>CONTACT US</h2>
        <ul style={{color:"white", marginTop:"80px"}}>
        <li>Email: Rajat@email.com</li>
        <li>Phone: +91 82562546</li>
        <li>Address: 123 Main Street, pune, Maharashtra</li>
      </ul>

      </div>
      <div class="contact-form-wrapper">
        <form>
          <div class="form-item">
            <input type="text" name="sender" required/>
            <label>Name:</label>
          </div>
          <div class="form-item">
            <input type="text" name="email" required/>
            <label>Email:</label>
          </div>
          <div class="form-item">
            <textarea class="" name="message" required></textarea>
            <label>Message:</label>
          </div>
          <button class="submit-btn">Send</button>  
        </form>
      </div>
    </div>

  </section>
  <Footer/>
  </>
  
  );
};

export default ContactUs;
