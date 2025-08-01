import React from 'react'
import Navbar from "./../components/navbar.jsx"
import "./login.css"
const login = () => {
  return (
    <div>
        <Navbar />
        <div className='container'>
  <div className='login-container'>
    <div className='side-container'></div>
  <div className='login-form'></div>
  </div>
        </div>
    </div>
  )
}

export default login
