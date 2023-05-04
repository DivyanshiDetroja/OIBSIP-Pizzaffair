import { CardOrderItem } from "./CardOrderItem";
import React from "react";
import "./sidebar.css";
import { logOut } from "../redux/userRedux";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const cart = useSelector((state) => state.user.cart);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logOut());
  };

  return (
    <div className="sidebar-container">
      <div className="menu">
        <h1 className="sidebar-dark">PizzAffair</h1>
        <div className="options">
          <a className="a-menu sidebar-dark" href="#">
            Menu
          </a>
          <a className="a-menu sidebar-dark" href="#">
            Order Status
          </a>
          <a className="a-menu sidebar-dark" href="#" onClick={handleLogout}>
            Logout
          </a>
        </div>
        <div className="cart-heading-div">
          <h2 className="order-summary">Your Order Summary</h2>
        </div>
      </div>
      <div className="order">
        <div className="order-item-container">
          {cart?.orderItems.map((pizza, index) => (
            <CardOrderItem pizza={pizza} key={index} />
          ))}
        </div>
        <div className="order-total">
        <h2 className="checkout-total">Total: ₹{cart.totalPrice}</h2>
          <button className="checkout-button">Proceed to Checkout</button>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
