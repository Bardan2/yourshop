import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="first-container">
        <div className="text-content">
          <h1 className="headOne">
            A symphony of goods, a shopper's{" "}
            <span className="paradise">paradise</span>.
          </h1>
          <p className="para">
            Success isn’t always about greatness. It’s about consistency.
            <br />
            Consistent hard work gains success. Greatness will come.
          </p>
          <center>
            <Link to="/product">
              <button className="btn">
                Explore Now{"  "}
                <img src="Arrow.png" width={25} height={10} className="arrow" />
              </button>
            </Link>
          </center>
        </div>
        <div className="personlogo">
          <img src="landing.png" alt="Football" className="baller" />
        </div>
      </div>

      <div className="imgs">
        <img src="category-1.jpg" width={200} />
        <img src="category-2.jpg" width={200} />
        <img src="category-3.jpg" width={200} />
      </div>

      <h2 className="featured-head">Featured Products</h2>
      <div className="featured-products">
        <div className="product">
          <img src="gallery-1.jpg" width={200} />
          <br />
          <h4>Red Printed T-Shirt</h4>
          <p>$50.00</p>
        </div>

        <div className="product">
          <img src="buy-2.jpg" width={200} />
          <br />
          <h4>HRX Spots Shoes</h4>
          <p>$75.00</p>
        </div>

        <div className="product">
          <img src="buy-3.jpg" width={200} />
          <br />
          <h4>HRX Gray Trackpants</h4>
          <p>$45.00</p>
        </div>

        <div className="product">
          <img src="gallery-2.jpg" width={200} />
          <br />
          <h4>Blue Printed Y-Shirt</h4>
          <p>$55.00</p>
        </div>
      </div>

      {/* latest products... */}
      <h2 className="featured-head">Latest Products</h2>
      <div className="latest-products">
        <div className="product">
          <img src="product-5.jpg" width={200} />
          <br />
          <h4>Red Printed T-Shirt</h4>
          <p>$50.00</p>
        </div>

        <div className="product">
          <img src="product-6.jpg" width={200} />
          <br />
          <h4>HRX Spots Shoes</h4>
          <p>$75.00</p>
        </div>

        <div className="product">
          <img src="product-7.jpg" width={200} />
          <br />
          <h4>HRX Gray Trackpants</h4>
          <p>$45.00</p>
        </div>

        <div className="product">
          <img src="product-8.jpg" width={200} />
          <br />
          <h4>Blue Printed Y-Shirt</h4>
          <p>$55.00</p>
        </div>
        {/* second row */}
        <div className="product">
          <img src="product-9.jpg" width={200} />
          <br />
          <h4>Red Printed T-Shirt</h4>
          <p>$50.00</p>
        </div>

        <div className="product">
          <img src="product-10.jpg" width={200} />
          <br />
          <h4>HRX Spots Shoes</h4>
          <p>$75.00</p>
        </div>

        <div className="product">
          <img src="product-11.jpg" width={200} />
          <br />
          <h4>HRX Gray Trackpants</h4>
          <p>$45.00</p>
        </div>

        <div className="product">
          <img src="product-12.jpg" width={200} />
          <br />
          <h4>Blue Printed Y-Shirt</h4>
          <p>$55.00</p>
        </div>
      </div>

      <div className="exclusive">
        <div className="exclusive-img">
          <img src="exclusive.png" />
        </div>
        <div className="exclusive-texts">
          <p className="exclusive-para">Exclusively Available on RedStore</p>
          <h1 className="exclusive-head">Smart Band 4</h1>
          <p className="exclusive-para2">
            The Mi Smart band 4 features a 39.9% larger (than Mi Band 3) AMOLED
            color full-touch display with adjustable brightness, so everything
            is clear as can be.
          </p>
          <button className="btn">
            Buy Now{"  "}
            <img src="Arrow.png" width={25} height={10} className="arrow" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
