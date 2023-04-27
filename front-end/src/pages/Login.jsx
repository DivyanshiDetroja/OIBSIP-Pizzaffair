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
                
                <input type="text" name="email" id="" placeholder="Email" autocomplete="off" autofill="off" className="input-login" />
                <input type="password" name="password" id="" placeholder="Password" autocomplete="off" className="input-login" />
                <a href="#">Forgot Password?</a>
            
                <button type="submit" className="login-button">Log In</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login