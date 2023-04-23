import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar-container">
        <div className="menu">
            <h1 className='sidebar-dark'>PizzAffair</h1>
            <div className="options">
                <a className="a-menu sidebar-dark" href="https://www.google.com">Menu</a>
                <a className="a-menu sidebar-dark" href="#">Customized Pizza</a>
                <a className="a-menu sidebar-dark" href="#">Cart</a>
                <a className="a-menu sidebar-dark" href="#">Order Status</a>
            </div>
        </div>
        <div className="order">
          <div className="order-item-container">
          <div className="order-item">
            <h3 className="order-pizza-name">Pizza Name Sample Ssmple Sample</h3>
            <h3 className="order-pizza-price"> ₹369</h3>
            <div className="button-group">
            <button className="order-pizza-button left-border-radius-button">+</button>
            <button className="order-pizza-button zero">0</button>
            <button className="order-pizza-button right-border-radius-button">-</button>
            </div>
          </div>
          <div className="order-item"></div>
          <div className="order-item"></div>
          <div className="order-item"></div>
          <div className="order-item"></div>
          <div className="order-item"></div>
          <div className="order-item"></div>
          <div className="order-item"></div>
          <div className="order-item"></div>
          <div className="order-item"></div>
          <div className="order-item"></div>
          </div>
          <div className="order-total">
            <button className='checkout-button'>Proceed to Checkout</button>
            <h2 className='checkout-total'>Total: ₹369</h2>
          </div>
        </div>
      </div>
  )
}

export default Sidebar