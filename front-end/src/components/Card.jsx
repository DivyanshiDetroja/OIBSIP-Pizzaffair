import React from 'react'
import "./card.css"
import { useNavigate } from 'react-router-dom'

const Card = (props) => {

  const pizzaDetails = props.pizza;
  const navigate = useNavigate();

  return (
    <div className="card" onClick ={ ()=> navigate(`/Customized/${pizzaDetails._id}`)}>
        <div className="left" style={{ backgroundImage: `url(${pizzaDetails.image})` }}></div> 
        <div className="right">
            <h1 className='pizza-name'>{pizzaDetails.pizzaName}</h1>
            <p className="p-card">{pizzaDetails.description.slice(0,160)}</p>
            <div className="card-group">
            <h2 className='card-price'>₹{pizzaDetails.price}</h2>
            <button className='card-customize-button'>
              Customize
            </button>
            </div>
        </div>
    </div>
  )
}

export default Card