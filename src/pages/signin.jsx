import React from 'react'
import "./signin.css"
import Button from "./../components/button.jsx"
import { Link } from "react-router-dom";
import {User } from "lucide-react"
import Navbar from "./../components/navbar.jsx";
const signin = () => {
  return (
     <div>
      <Navbar />
      <div className="container">
        <div className="login-container">
          <div className="side-container">
            <h1>Welcome</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              magnam velit corporis veniam eum ipsum quo excepturi pariatur
              cumque saepe. Quia qui veniam nostrum dignissimos tempore
              molestias, earum cumque ratione.
            </h2>
           <Link to="/login"><Button name="Log In"/></Link>
          </div>
          <div className="login-form">
          <form>
              <h2 className="login-heading">Sign In</h2>
          <div className="inputs"> 
            <User />
             <input 
            type="text"
            placeholder="enter a username"
            name="username"
            /></div>
            <div className="inputs"> 
            <User />
             <input 
            type="password"
            placeholder="enter a password"
            name="password"
            /></div>
            <div className="inputs"> 
            <User />
             <input 
            type="text"
            placeholder="Conform Passeowd"
            name="password"
            /></div>
          </form>
           <Button name="Sign In"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default signin
