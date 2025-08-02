import React from 'react'
import "./button.css"
const button = ({name}) => {
  return (
    <div>
       <button className="btn">{name}</button>
    </div>
  )
}

export default button
