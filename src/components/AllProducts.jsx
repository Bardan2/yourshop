import React from "react";
import "./AllProducts.css";
// import { FaArrowRightLong } from "react-icons/fa";

const AllProducts = () => {
  return (
    <>
      <div className="products-title">
        <h2>All Products</h2>
        <select className="select-box">
          <option>Default Shorting</option>
          <option>Jacket</option>
          <option>Shoes</option>
          <option>Jersey</option>
        </select>
      </div>

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

      <div className="pages">
        <div className="num">1</div>
        <div className="num">2</div>
        <div className="num">3</div>
        <div className="num">4</div>
        <div className="num arrowbtn">
          {/* <FaArrowRightLong /> */}
          <img src="Arrow.png" width={25} />
        </div>
      </div>
    </>
  );
};

export default AllProducts;
