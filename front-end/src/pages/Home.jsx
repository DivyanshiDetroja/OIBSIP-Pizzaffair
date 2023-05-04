import React, { useEffect, useState } from 'react'
import './home.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {


  const [pizzas, setPizzas] = useState([]);
   
  useEffect( () => {
    const getPizzas = async () =>{
      try{
        const res = await axios.get('http://localhost:5000/pizza');
       setPizzas(res.data);
      }
      catch(err){
        console.log(err);
      } 
    };
    getPizzas();
  }, []);
  

  return (
    <div className="div-home">
        <Sidebar/>
        <div className="main-home">
          <Header/>
          <div className="card-wrap">
          {pizzas?.map((pizza)=> <Card pizza={pizza} />)}
          </div>
         </div>
    </div>
  )
}

export default Home