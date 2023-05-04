import React, { useEffect, useState } from 'react'
import './customize.css'
import PizzaRound from '../images/pizza-removebg-preview.png'
import { useDispatch } from 'react-redux';
import {addPizza} from '../redux/cartRedux'

const Customize = (props) => {

    const pizza = props.pizza;
    const dispatch = useDispatch();

    const [order, setOrder] = useState({
        customItems: {
            base: "regular",
            sauce: "marinara",
            cheese: "mozzarella",
            veggies: "bell-pepper"
          }
        

    });

    const handleAddCart= ()=>{
      console.log(addPizza)
      dispatch(addPizza(order))
    };

    const handleQuantity = (a) =>{
      if (a === "add") {
        setOrder({...order, quantity: order.quantity+1})
      } else {
        if(order.quantity > 1)
          setOrder({...order, quantity: order.quantity-1})
        
      }
    }

    useEffect(() => {
        if (props.pizza) {
          setOrder({...order,
            pizzaName: pizza.pizzaName,
            price: pizza.price,
            quantity: 1,
          });
        }
      }, [pizza.pizzaName, pizza.price, props.pizza]);

      const Check = ()=>{
        console.log(order);
      }
   
  return (
    // <div className='pizza-custom-container'>
        <div className="custom-card">
            <div className="left-custom">
                <h2 className='heading-left-custom'>Customise Your</h2>
                <div className="base-div">
                    <h2 className='custom-base-heading'>Choose Your Base</h2>
                        <form className='base-form' onChange={(e)=>setOrder({
                    ...order,
                    customItems: {
                      ...order.customItems,
                      base: e.target.value,
                    },
                  })}>
                            
                            <input className='cutom-inputs' type="radio" id='regular-base' name="base" value='regular' defaultChecked />
                            <label className='custom-labels' for="regular-base">Regular Base</label ><br/>
                            
                            <input className='cutom-inputs' type="radio" id='thin-base' name="base" value='thin' />
                            <label className='custom-labels' for="thin-base">Thin Crust Base</label ><br/>
                            
                            <input className='cutom-inputs' type="radio" id='cheese-burst-base' name="base" value='cheese-burst' />
                            <label className='custom-labels' for="cheese-burst">Cheese Burst Base</label ><br/>
                            
                            <input className='cutom-inputs' type="radio" id='pie-base' name="base" value='pie' />
                            <label className='custom-labels' for="pie-base">Pie Base</label ><br/>
                            
                            <input className='cutom-inputs' type="radio" id='whole-wheat-base' name="base" value='whole-wheat' />
                            <label className='custom-labels' for="whole-wheat-base">Whole Wheat Base</label ><br/>
                        </form >
                </div>
                <div className="sauce-div">
                <h2 className='custom-sauce-heading'>Choose Your Sauce</h2>
                    <form className='sause-form' onChange={(e)=>setOrder({
                    ...order,
                    customItems: {
                      ...order.customItems,
                      sauce: e.target.value,
                    },
                  })} >
                        <input className='cutom-inputs' type="radio" id='marinara-sauce' name="sauce" value='marinara' defaultChecked/>
                        <label className='custom-labels' for="marinara-sauce">Marinara Sauce</label ><br/>

                        <input className='cutom-inputs' type="radio" id='white-garlic-sauce' name="sauce" value='white-garlic' />
                        <label className='custom-labels' for="white-garlic-sauce">White Garlic Sauce</label ><br/>

                        <input className='cutom-inputs' type="radio" id='creamy-pesto-sauce' name="sauce" value='creamy-pesto' />
                        <label className='custom-labels' for="creamy-pesto-sauce">Creamy Pesto</label ><br/>

                        <input className='cutom-inputs' type="radio" id='schezwan-sauce' name="sauce" value='schezwan' />
                        <label className='custom-labels' for="schezwan-sauce">Schezwan Sauce</label ><br/>

                        <input className='cutom-inputs' type="radio" id='makhani-sauce' name="sauce" value='makhani' />
                        <label className='custom-labels' for="makhani-sauce">Makhani Sauce</label ><br/>

                    </form >
                </div>
                
                </div>
           
            <div className="middle-custom">
                <h2 className='heading-middle-custom'>{pizza.pizzaName}</h2>
                <img src={PizzaRound}  className='pizza-round-round' alt="" />
                <div className="details-custom">
                    <button className='custom-button' onClick={handleAddCart}>Add to Cart</button>
                    <div className="button-group">
                     <button className="order-pizza-button left-border-radius-button" onClick={()=>handleQuantity("add")}>+</button>
                    <button className="order-pizza-button zero">{order.quantity}</button>
                    <button className="order-pizza-button right-border-radius-button" onClick={()=>handleQuantity("sub")}>-</button>
            </div>
                    <h1 className='custom-price'>₹{pizza.price}</h1>
                </div>
            </div>
            <div className="right-custom">
                <h2 className='heading-right-custom'>Pizza Here!</h2>
                <div className="cheese-div">
                <h2 className='custom-cheese-heading'>Choose Your Cheese</h2>
                    <form className='cheese-form' onChange={(e)=>setOrder({
                    ...order,
                    customItems: {
                      ...order.customItems,
                      cheese: e.target.value,
                    },
                  })}>
                        <input className='cutom-inputs' type="radio" id='cheddar-cheese' name="cheese" value='cheddar' />
                        <label className='custom-labels' for="cheddar-cheese">Cheddar Cheese</label ><br/>

                        <input className='cutom-inputs' type="radio" id='parmesan-cheese' name="cheese" value='parmesan' defaultChecked/>
                        <label className='custom-labels' for="parmesan-cheese">Parmesan Cheese</label ><br/>

                        <input className='cutom-inputs' type="radio" id='gouda-cheese' name="cheese" value='gouda' />
                        <label className='custom-labels' for="gouda-cheese">Gouda Cheese</label><br/>

                        <input className='cutom-inputs' type="radio" id='mozzarella-cheese' name="cheese" value='mozzarella' />
                        <label className='custom-labels' for="mozzarella-cheese">Mozzarella Cheese</label ><br/>

                        <input className='cutom-inputs' type="radio" id='cream-cheese' name="cheese" value='cream-cheese' />
                        <label className='custom-labels' for="cream-cheese">Cream Cheese</label><br/>
                    </form >
                <div className="veggies-div">
                <h2 className='custom-veggies-heading'>Choose Your Veggies</h2>
                    <form className='veggies-form' onChange={(e)=>setOrder({
                    ...order,
                    customItems: {
                      ...order.customItems,
                      veggies: e.target.value,
                    },
                  })}>
                        <input className='cutom-inputs' type="radio" id="mushroom-topping" name="vegetable-toppings[]" value="mushroom" />
                        <label className='custom-labels' for="mushroom-topping" id="mushroom-topping-label className='custom-labels'">Mushroom</label ><br/>

                        <input className='cutom-inputs' type="radio" id="olive-topping" name="vegetable-toppings[]" value="olive" />
                        <label className='custom-labels' for="olive-topping" id="olive-topping-label className='custom-labels'">Olive</label ><br/>

                        <input className='cutom-inputs' type="radio" id="broccoli-topping" name="vegetable-toppings[]" value="broccoli" />
                        <label className='custom-labels' for="broccoli-topping" id="broccoli-topping-label className='custom-labels'">Broccoli</label ><br/>

                        <input className='cutom-inputs' type="radio" id="corn-topping" name="vegetable-toppings[]" value="corn" />
                        <label className='custom-labels' for="corn-topping" id="corn-topping-label className='custom-labels'">Corn</label ><br/>

                        <input className='cutom-inputs' type="radio" id="bell-pepper-topping" name="vegetable-toppings[]" value="bell-pepper" defaultChecked />
                        <label className='custom-labels' for="bell-pepper-topping" id="bell-pepper-topping-label className='custom-labels'">Bell Pepper</label><br/>

                        <input className='cutom-inputs' type="radio" id="paneer-topping" name="vegetable-toppings[]" value="paneer" />
                        <label className='custom-labels' for="paneer-topping" id="paneer-topping-label className='custom-labels'">Paneer</label><br/>

                        <input className='cutom-inputs' type="radio" id="jalapeno-topping" name="vegetable-toppings[]" value="jalapeno" />
                        <label className='custom-labels' for="jalapeno-topping" id="jalapeno-topping-label className='custom-labels'">Jalapeno</label ><br/>

                        <input className='cutom-inputs' type="radio" id="pineapple-topping" name="vegetable-toppings[]" value="pineapple" />
                        <label className='custom-labels' for="pineapple-topping" id="pineapple-topping-label className='custom-labels'">Pineapple</label ><br/>

                    </form>
                </div>
            </div>
        </div>
        </div>
    // </div>
    
  )
}

export default Customize