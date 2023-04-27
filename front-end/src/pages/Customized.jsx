import React from 'react'
import './customized.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Customize from '../components/Customize'

const Customized = () => {
  return (
    <div className="div-home">
        <Sidebar/>
        <div className="main-home">
          <Header/>
          <div className="customize-container">
            <Customize/>
          </div>
         </div>
    </div>
  )
}

export default Customized