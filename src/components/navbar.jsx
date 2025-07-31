import React from 'react'
import {Link, useLocation} from "react-router-dom"
import "./navbar.css"
const navbar = () => {
  return (
    <div className='navbar'>
     <Link to="/" >Home</Link>
     <Link to="/carrer">Carrer</Link>
     <Link to="/courses">courses</Link>
     <Link to="/about">about</Link>
     <Link to="/login">login</Link>
    </div>
  )
}

export default navbar
