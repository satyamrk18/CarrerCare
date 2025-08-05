import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from "./../components/navbar.jsx"
import {Link} from "react-router-dom"
const user = () => {
 
const [user,setUser] = useState("")
//retriving the data if exist
useEffect(()=>
{
 const data = JSON.parse(localStorage.getItem("userdata") || "null");
  setUser(data);
},[])

const {name} = user;

  return (
    <div>
        <Navbar />
      <h1>hi, {user.name}</h1>
      <Link to="/contact">Contact</Link> 
    </div>
  )
}

export default user
