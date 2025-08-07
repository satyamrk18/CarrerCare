import React from 'react'
import './About-us.css'
import Navbar from './../components/navbar.jsx'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="conatiner">
        <div className="login-container">
           <div className="side-container"> 
             <h1>About CareerCare</h1>
             <h2>
              CareerCare is a career exploration platform that helps students and learners
              discover different career options, required skills, courses, job roles, and
              growth paths. It aims to make career planning easy, informative, and
              engaging.
            </h2>
             <Button name="Explore Careers" />
           </div>
        </div>
      </div>
    </div>
    
  )
}

export default AboutUs