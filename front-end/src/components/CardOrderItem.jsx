import React from "react";


export function CardOrderItem() {
  return <div className="order-item">
            <h3 className="order-pizza-name">Pizza Name Sample Ssmple Sample</h3>
            <h3 className="order-pizza-price"> ₹369</h3>
            <div className="button-group">
            <button className="order-pizza-button left-border-radius-button">+</button>
            <button className="order-pizza-button zero">0</button>
            <button className="order-pizza-button right-border-radius-button">-</button>
            </div>
          </div>;
}
  