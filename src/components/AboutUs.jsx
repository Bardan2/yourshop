import "./AboutUs.css";

import React from "react";

const AboutUs = () => {
  return (
    <>
      <h1 className="topspace"></h1>

      <div className="textabout">

      <div className="abouttext">
       <h1 className="storyHead">Documentation</h1>
        <p className="storyHead">This is Yourstore a simple ecommerce UI design site. There are some products with prices and desgin images. There isn't attached backend and any other Api's. There are structure like Navbar, body contain and Footer. In Navbar section there are some pages Home page, Products page, About page, Contact page, Cart page and Account page and they can be navigate form one page to another page. You can found hover effect on product image and buttons.
This UI based frontend ecommerce site is built using React. There are using react-dom, useState, Jsx, css, components and react-icons. It is looking simple UI desgin and it is responsive.</p>
      </div>
        <img src="aboutstore.jpg" />
      </div>
    </>
  );
};

export default AboutUs;
