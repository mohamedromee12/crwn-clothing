import "./check-out-item.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, decrementItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <span
          className="arrow value"
          onClick={() => decrementItemToCart(cartItem)}
        >
          &#8592;
        </span>{" "}
        {quantity}{" "}
        <span className="arrow value" onClick={() => addItemToCart(cartItem)}>
          &#8594;
        </span>
      </span>

      <span className="price">{price}</span>

      <div
        className="remove-button"
        onClick={() => removeItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
