import { CardOrderItem} from './CardOrderItem';
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
                <a className="a-menu sidebar-dark" href="#">Order Status</a>
                <a className="a-menu sidebar-dark" href="#">Logout</a>
            </div>
        </div>
        <div className="order">
          <div className="order-item-container">
            <CardOrderItem    />
            <CardOrderItem    />
            <CardOrderItem    />
            <CardOrderItem    />
            <CardOrderItem    />
            <CardOrderItem    />
            <CardOrderItem    />
            <CardOrderItem    />
          
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