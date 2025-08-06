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
            <p className="personal-detail-heading">Personal Details</p>
            <ul>
                <li>satyamrk18@gmail.com</li>
                <li>+91 7588035979</li>
                <li>V.n.p. appt, panchavati nashik</li>
            </ul>
          </div>
          <div className="skill">
            <p className="personal-detail-heading">Skill</p>
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
            <p className="personal-detail-heading">Soft skill</p>
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
