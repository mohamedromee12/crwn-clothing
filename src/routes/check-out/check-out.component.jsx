/* eslint-disable array-callback-return */
import "./check-out.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import CheckOutItem from "../../components/check-out-item/check-out-item.component";

const CheckOut = () => {
  const { cartItems, cartTotal } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        
        return (
            <CheckOutItem key={item.id} cartItem={item} />
          );
      })}

      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default CheckOut;
