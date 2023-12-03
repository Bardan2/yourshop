import React from "react";
import "./CartPage.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <>
      <div className="table-containe">
        <table className="tablee">
          <tr>
            <th>Products</th>
            <th>Quality</th>
            <th>SubTotal</th>
          </tr>
          <tr className="all-carts">
            <td>
              <div className="cart-info">
                <img src="gallery-1.jpg" width={60} />
                <div>
                  <p>Red Printed T-Shirt</p>
                  <small>price: $50.00</small>
                  <br />
                  <Link>Remove</Link>
                </div>
              </div>
            </td>
            <td>
              {" "}
              <input type="number" value={1} className="numberType" />
            </td>
            <td>$50.00</td>
          </tr>

          {/* second */}
          <tr className="all-carts">
            <td>
              <div className="cart-info">
                <img src="buy-2.jpg" width={60} />
                <div>
                  <p>HRX Sport Shoes</p>
                  <small>price: $75.00</small>
                  <br />
                  <Link>Remove</Link>
                </div>
              </div>
            </td>
            <td>
              {" "}
              <input type="number" value={1} className="numberType" />
            </td>
            <td>$50.00</td>
          </tr>

          {/* third */}
          <tr className="all-carts">
            <td>
              <div className="cart-info">
                <img src="product-8.jpg" width={60} />
                <div>
                  <p>Black Sportx Watch</p>
                  <small>price: $135.00</small>
                  <br />
                  <Link>Remove</Link>
                </div>
              </div>
            </td>
            <td>
              {" "}
              <input type="number" value={1} className="numberType" />
            </td>
            <td>$50.00</td>
          </tr>

          {/* fourth */}
          <tr className="all-carts">
            <td>
              <div className="cart-info">
                <img src="product-7.jpg" width={60} />
                <div>
                  <p>HRX Set of 3 Socks</p>
                  <small>price: $30.00</small>
                  <br />
                  <Link>Remove</Link>
                </div>
              </div>
            </td>
            <td>
              {" "}
              <input type="number" value={1} className="numberType" />
            </td>
            <td>$50.00</td>
          </tr>
        </table>
        {/* </div> */}

        <div className="total-price">
          <table>
            <tr>
              <td>Sub Total</td>
              <td>$200.00</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$35.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$230.00</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default CartPage;
