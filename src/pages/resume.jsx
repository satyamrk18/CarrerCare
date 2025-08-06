import react from "react";
import "./resume.css";
import Navbar from "./../components/navbar.jsx";
const resume = () => {
  return (
    <div className="resume-container">
      {/* resume form */}
      <div className="resume-form"></div>
      {/* actual resume */}
      <div className="actual-resume">
        {/* personal detail from resume */}
        <div className="personal-detail">
          <div className="contact-detail">
            <h2>Personal Details</h2>
            <h4>satyamrk18@gmail.com</h4>
            <h4>+91 7588035979</h4>
            <h4>V.n.p. appt, panchavati nashik</h4>
          </div>
          <div className="skill">
            <h2>Skill</h2>
            <ul>
                <li>java</li>
                <li>java</li>
                <li>java</li>
                <li>java</li>
                <li>java</li>
                <li>java</li>
            </ul>
          </div>
          {/* softskill */}
          <div className="soft-skill">
            <h2>Soft skill</h2>
          <ul>
            <li>communication</li>
            <li>Leadership</li>
            <li>Hardworking</li>
            <li>Time Management</li>
          </ul>
          </div>
        </div>
        <div className="main-detail"></div>
      </div>
    </div>
  );
};
export default resume;
