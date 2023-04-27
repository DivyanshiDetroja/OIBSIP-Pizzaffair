import { OrderSubItem } from './OrderSubItem';
import React from 'react'
import './orderstatuscard.css'


const OrderStatusCard = () => {
  return (
    // <div className='order-status-card-container'>
        <div className="order-status-card">
            <div className="left-animation"></div>
            <div className="right-order-info">
                <div className='order-status-card-heading'>
                  <h2 className='order-status-card-order-number'>Order number 1</h2>
                  <h2 className='order-status-card-order-status'>🍕 Out for Delivery 🍕</h2>
                </div>
                <div className="order-sub-items-container">
                  <OrderSubItem     />
                  <OrderSubItem     />
                </div>
                <div className="order-status-card-total-container">
                  <h3 className='order-time'>Ordered on: 9th Sept, 2021, 5:00pm</h3>
                  <h2 className='order-status-card-total'>₹899</h2>
                </div>
            </div>
        </div>
    // </div>
  )
}

export default OrderStatusCard