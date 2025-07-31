import React from 'react'
import {Link, useLocation} from "react-router-dom"
import "./navbar.css"
const navbar = () => {
    const location  = useLocation();
  return (
    <div className='navbar'>
       <h2 className='logo'>Logo</h2>
   <div className='navbar-content'>
      <Link to="/" className={location.pathname === "/"? "active": "navbar-item"}>Home</Link>
     <Link to="/carrer" className={location.pathname === "/carre"? "active": "navbar-item"}>Carrer</Link>
     <Link to=""className={location.pathname == "/courses"? "active": "navbar-item"}>courses</Link>
     <Link to="/about"className={location.pathname === "/about"? "active": "navbar-item"}>about</Link>
     <Link to="/login" className={location.pathname === "/login"? "active": "navbar-item"}>login</Link>
   </div>
    </div>
  )
}

export default navbar
    