import { Link } from "react-router-dom";
import "./RegisterLogin.css";
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "./Footer";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="login-box">
        <form className="loginPage">
          <center>
            <h3>Login</h3>
          </center>
          <div className="formdetails">
            <label>Enter Your Username</label>
            <input type="text" placeholder="Username" />
          </div>

          <div className="formdetails">
            <label>Enter Your Email</label>
            <input type="email" placeholder="Email" />
          </div>

          <center>
            <p className="newregister">
              New here? <Link to="/register">Register</Link>
            </p>{" "}
            <button className="form-btn">Login</button>
          </center>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
