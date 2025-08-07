import react from "react";
import "./resume.css";
import Navbar from "./../components/navbar.jsx";
import Heading from "../components/heading.jsx";
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
            <Heading title="Personal Detail"/>
            <ul>
                <li>satyamrk18@gmail.com</li>
                <li>+91 7588035979</li>
                <li>V.n.p. appt, panchavati nashik</li>
            </ul>
          </div>
          <div className="skill">
            <Heading title="Skill"/>
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
            <Heading title="Soft Skill"/>
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
