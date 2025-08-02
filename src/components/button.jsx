import React from 'react'
import "./button.css"
const button = ({name, onClick}) => {
  return (
    <div>
       <button className="btn" onClick={onClick}>{name}</button>
    </div>
  )
}

export default button
