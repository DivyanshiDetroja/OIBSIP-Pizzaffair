import React from 'react'
import "./login.css"


// forget password, not a member? register

const Login = () => {
  return (
    <div className="container border-radius-all">
        <div className="left-img border-radius-left">
        </div>
        <div className="right-login border-radius-right">
            <div className="form-card">
            <form action="/" method="post">
                <h1>PizzAffair</h1>
                
                

                <input type="email" name="email" id="" placeholder="Email" autocomplete="off" className="email"/>
                <input type="text" name="address" id="" placeholder="Address" autocomplete="off" />
                <input type="password" name="password" id="" placeholder="Password" autocomplete="off" />
            
                <button type="submit">Register</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login