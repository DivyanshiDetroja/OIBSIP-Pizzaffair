import React from 'react'
import './admin.css'
import AdminOrderListItem from "../components/AdminOrderListItem"

const Admin = () => {
  return (
    <div className='admin-parent-container'>
        <div className="sidebar-admin">
            <div className="sidebar-admin-img"></div>
            <a href="" className="sidebar-admin-menu">LogOut</a>
        </div>
        <div className="admin-main-container">
            <div className="admin-orders-list">
                <div className="admin-orders-card">
                    <h1 className="admin-orders-heading">Orders List: Update Status here 🢃</h1>
                    <AdminOrderListItem/>
                    <AdminOrderListItem/>
                    <AdminOrderListItem/>
                    <AdminOrderListItem/>

                </div>
            </div>
            <div className="admin-inventory-container">
                <div className="inventory-base-container">
                <h1 className="inventory-base-heading"> Base </h1>
                <div className="inventory-items-container">
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                </div>
                
                </div>
                <div className="inventory-sauce-container">
                <h1 className="inventory-sauce-heading"> Sauce </h1>
                <div className="inventory-items-container">
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                </div>
                </div>
                <div className="inventory-cheese-container">
                <h1 className="inventory-cheese-heading"> Cheese </h1>
                <div className="inventory-items-container">
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                </div>
                </div>
                <div className="inventory-veggies-container">
                <h1 className="inventory-veggies-heading"> Veggies </h1>
                <div className="inventory-items-container">
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                <h3 className="inventory-base-item"><span>Lorem, ipsum dolor.</span> <span>2</span></h3>
                </div>
                </div>
            </div>
        </div>
    </div>
 
  )
}

export default Admin