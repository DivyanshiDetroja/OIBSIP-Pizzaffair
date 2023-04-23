import React from 'react'
import './home.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'

const Home = () => {
  return (
    <div className="div-home">
        <Sidebar/>
        <div className="main-home">
          <Header/>
          <div className="card-wrap">
          <Card/> 
          <Card/> 
          <Card/> 
          <Card/> 
          <Card/> 
          <Card/>
          </div>
         </div>
    </div>
  )
}

export default Home