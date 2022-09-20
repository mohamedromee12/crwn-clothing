import "./cart-dropdown.styles.scss";

import CartItem from "../cart-item/cart-item.component";

import { useContext, Fragment } from "react";

import { CartContext } from "../../context/cart.context";

import { Link } from "react-router-dom";

import "../button/button.styles.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
      </div>
      <br />
      <Fragment>
        <Link className="button-container inverted" to="check">
          GO TO CHECKOUT
        </Link>
        {/* <Outlet /> */}
      </Fragment>
    </div>
  );
};

export default CartDropDown;
