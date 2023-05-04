import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/userRedux";

// forget password, not a member? register
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("hi");
    if (Email && Password) {
      const loginUser = {
        email: Email,
        password: Password,
      };
      console.log(loginUser);
      axios.post("http://localhost:5000/user/login", loginUser).then((res) => {
        dispatch(logIn(res.data));
      }).catch(()=>{toast.error("Oops, Something went wrong =(")});
    }
    else{
      toast.error("Oops, Something went wrong :O");
    }
  };

  return (
    <div className="container border-radius-all">
      <div className="left-img border-radius-left"></div>
      <div className="right-login border-radius-right">
        <div className="form-card">
          <div className="form">
            <h1>PizzAffair</h1>

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              id=""
              placeholder="Email"
              autofill="off"
              className="input-login"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id=""
              placeholder="Password"
              className="input-login"
            />
            <a href="#">Forgot Password?</a>

            <button
              type="submit"
              className="login-button"
              onClick={handleLogin}
            >
              Log In
            </button>
            <Toaster />
            <a href="#">Not a member? Create an account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
