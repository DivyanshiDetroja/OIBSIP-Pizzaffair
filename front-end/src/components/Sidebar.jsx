import { CardOrderItem } from "./CardOrderItem";
import React from "react";
import "./sidebar.css";
import { logOut } from "../redux/userRedux";
import { useDispatch, useSelector } from "react-redux";
import { cartReset } from "../redux/cartRedux";
import axios from 'axios';
import useRazorpay from "react-razorpay";
import toast, {Toaster} from 'react-hot-toast';


const Sidebar = () => {
  const cart = useSelector((state) => state.user.cart);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(cartReset());
    dispatch(logOut());
  };
  const RazorPay = useRazorpay();

  const handleCheckout = async ()=>{
    var orderRes = (await axios.post("http://localhost:5000/order/addOrder", {totalPrice: cart.totalPrice  })).data;
    

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      amount: orderRes.amount,
      currency: "INR",
      name: "PizzAffair",
      image: "https://w7.pngwing.com/pngs/528/809/png-transparent-chef-pizza-emblem-retro-design-06.png",
      description: "Viva la pizza!",
      order_id: orderRes.id,
      handler: (res) => {
        toast.success("Order Successfully Placed");
      },
      theme: {
          color: "#E5890A",
      },
    };
   
    const rzpay = new RazorPay (options);
    rzpay.open();
    console.log("Pay here now");
  };

  return (
    <div className="sidebar-container">
      <div className="menu">
        <h1 className="sidebar-dark">PizzAffair</h1>
        <div className="options">
          <Toaster/>
          <a className="a-menu sidebar-dark" href="/">
            Menu
          </a>
          <a className="a-menu sidebar-dark" href="#">
            Order Status
          </a>
          <a className="a-menu sidebar-dark"  onClick={handleLogout}>
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
          <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
