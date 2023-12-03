import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [sideBar, setSidebar] = useState();

  const ClickMe = () => {
    setSidebar(!sideBar);
  };

  return (
    <>
      <div className="navbar-container">
        <h1 className="logo">
          <Link to="/">
            Your <span className="store">STORE</span>
          </Link>
        </h1>

        <ul className={sideBar ? "navbar active" : "navbar"}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/product">Products</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <li>
            <Link to="/login">Account</Link>
          </li>
        </ul>

        <div className="hamburger" onClick={ClickMe}>
          {!sideBar ? <FaBars size={20} /> : <FaTimes size={20} />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
