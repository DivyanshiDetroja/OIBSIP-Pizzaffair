import React from "react";
import { useDispatch } from "react-redux";
import { removePizza } from "../redux/cartRedux";


export function CardOrderItem(props) {

  const pizza = props.pizza;
  const index = props.index;

  const dispatch = useDispatch();

  const terminatePizza = ()=> {
    dispatch(removePizza([index, pizza]));
  }

  return <div className="order-item">
            <div className="order-pizza-deets-wrap">
            <h3 className="order-pizza-name">{pizza.pizzaName}</h3>
            <h4 className="order-pizza-description">{pizza.customItems.base} , {pizza.customItems.sauce}, {pizza.customItems.cheese}, {pizza.customItems.veggies}</h4>
            </div>
            <h3 className="order-pizza-price"> ₹{pizza.price}</h3>
            <div className="button-group-order">
            <button className="order-qty-pizza">{pizza.quantity}</button>
            <button className="order-remove-pizza" onClick={terminatePizza}>⛔</button>
            </div>
            
            
          </div>;
}
  