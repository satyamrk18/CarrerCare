import React from 'react';
import './About-us.css';
import Navbar from './../components/navbar.jsx';
import Button from './../components/button.jsx';
import { Github, Linkedin, ExternalLink} from "lucide-react";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about-page">
    
           <div className="summary-section">
             <h1>About CareerCare</h1>
             <p>
              CareerCare is a career exploration platform that helps students and learners
              discover different career options, required skills, courses, job roles, and
              growth paths. It aims to make career planning easy, informative, and
              engaging.
            </p>
             <Button name="Explore Careers" />
           </div>
             <div className="team-section">
               <h2 className="team-heading">Our Team</h2>
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
                           <ExternalLink size={20} />
                            </a>
                         </div>
                   </div>


                </div>
             </div>
        </div>
      </div>
    
    
  );
};

export default AboutUs;