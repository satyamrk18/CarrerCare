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
             <div className="login-form">
               <h2 className="login-heading">Our Team</h2>
                <div className="team-cards">
                   <div className="member-card">
                       <h3>Tanishka Shivarkar</h3>
                         <div className="social-links">
                           <a href="https://github.com/TanishkaShivarkar" target="_blank">
                           <Github size={20} />
                           </a>
                            <a href="https://www.linkedin.com/in/tanishka-shivarkar-566351375/" target="_blank">
                           <Linkedin size={20} />
                           </a>
                            <a href="https://peerlist.io/tanishka_3112" target="_blank">
                           <Peerlist size={20} />
                            </a>
                         </div>
                   </div>
                </div>
             </div>
        </div>
      </div>
    </div>
    
  );
};

export default AboutUs;