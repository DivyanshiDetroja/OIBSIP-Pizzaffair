import React from 'react'
import './adminOrderListItem.css'

const AdminOrderListItem = () => {
  return (
    <div className='admin-order-list-item'>
        <h3 className="admin-order-details">Order number: </h3>
        <div className='drop-down'>
          <div className='menu-item'></div>
          <div className='menu-item'></div>
          <div className='menu-item'></div>
          <div className='menu-item'></div>
        </div>

      
            <p className='admin-order-list-item-details'>pizzaName : base: sauce: cheese: veggies: qty:</p>
            <p className='admin-order-list-item-details'>pizzaName : base: sauce: cheese: veggies: qty:</p>
            <p className='admin-order-list-item-details'>pizzaName : base: sauce: cheese: veggies: qty:</p>
    </div>

  )
}

export default AdminOrderListItem