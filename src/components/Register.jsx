import { Link } from "react-router-dom";
import "./RegisterLogin.css";
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "./Footer";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="login-box">
        <form className="loginPage">
          <center>
            <h3>Register</h3>
          </center>
          <div className="formdetails">
            <label>Enter Your Name</label>
            <input type="text" placeholder="Enter Your Name" />
          </div>

          <div className="formdetails">
            <label>Enter Your Email</label>
            <input type="email" placeholder="Enter Your Email" />
          </div>

          <div className="formdetails">
            <label>Enter Your Password</label>
            <input type="password" placeholder="Password" />
          </div>

          <center>
            <p className="newregister">
              Already have account? <Link to="/login">Login</Link>
            </p>{" "}
            <button className="form-btn">Register</button>
          </center>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
