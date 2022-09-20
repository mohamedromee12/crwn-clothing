import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/114 shopping-bag.svg";
import { useContext } from "react";

import { CartContext } from "../../context/cart.context";


const cartItemCount = (cartItems) => {
  var count = 0;
  // eslint-disable-next-line array-callback-return
  cartItems.map((item)=>{
    count += item.quantity;
  })

  return count;
}

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const { cartItems } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    //console.log(cartItems);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemCount(cartItems)}</span>
    </div>
  );
};

export default CartIcon;
