import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart";
import CheckOutItem from "../CheckOutItem/CheckOutItem";
import "./CheckOutList.css";

const CheckOutList = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Name</span>
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
      {cartItems &&
        cartItems.map((item) => <CheckOutItem key={item.id} item={item} />)}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default CheckOutList;
