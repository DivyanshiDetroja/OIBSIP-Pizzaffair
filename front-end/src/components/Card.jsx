import React from 'react'
import "./card.css"

const Card = () => {
  return (
    <div className="card">
        <div className="left"></div>
        <div className="right">
            <h1 className='pizza-name'>Pizza Name</h1>
            <p className="p-card">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, minus.</p>
            <div className="card-group">
            <h2 className='card-price'>₹369/-</h2>
            <button className='card-customize-button'>
              Customize
            </button>
            </div>
        </div>
    </div>
  )
}

export default Card