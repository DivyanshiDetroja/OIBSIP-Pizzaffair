import React from 'react'
import './orderstatus.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import OrderStatusCard from '../components/OrderStatusCard'

const OrderStatus = () => {
  return (
    <div className="div-home">
        <Sidebar/>
        <div className="main-home">
          <Header/>
          <div className="order-status-container-container">
            <h1 className='order-status-page-heading'>Orders</h1>
            <div className="orders-to-scroll">
            <OrderStatusCard/>
            <OrderStatusCard/>
            <OrderStatusCard/>
            <OrderStatusCard/>
            <OrderStatusCard/>
            <OrderStatusCard/>
            <OrderStatusCard/>
            </div>
            
          </div>
       
  </div>
  </div>
  )
}

export default OrderStatus