import "./ContactForm.css";

import React from "react";

const ContactForm = () => {
  return (
    <div>
      <div className="Contact-box">
        <form className="contactPage" action="">
          <center>
            <h3>Contact Us</h3>
          </center>
          <div className="contactdetails">
            <label>Enter Your Name</label>
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="contactdetails">
            <label>Enter Your Email</label>
            <input type="email" placeholder="Email" />
          </div>

          <div className="contactdetails">
            <label>Your Message</label>
            <textarea
              placeholder="Write your message..."
              style={{ height: "100px" }}
            />
          </div>

          <center>
            <button className="contact-btn">Send</button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
