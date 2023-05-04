import { React, useEffect, useState} from 'react'
import './customized.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Customize from '../components/Customize'
import { useLocation } from "react-router-dom"
import axios from 'axios'

const Customized = () => {

  const location = useLocation();
  const pizzaId = location.pathname.slice(12,);

  

  const [pizza, setPizza] = useState({});

  useEffect(() => {
    const reachCustomPizzaId = async()=>{
      try {
        
        const res = await axios.get('http://localhost:5000/pizza/'+pizzaId);
        // console.log(res.data);
        setPizza(res.data);
         console.log(res.data);
    
      } catch (err) {
        console.log(err);
      }
  
    };
    
  reachCustomPizzaId();

  }, []);
  
  

  return (
    <div className="div-home">
        <Sidebar/>
        <div className="main-home">
          <Header/>
          <div className="customize-container">
            <Customize pizza={pizza} />
          </div>
         </div>
    </div>
  )
}

export default Customized