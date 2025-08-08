import react from "react";
import "./resume.css";
import Navbar from "./../components/navbar.jsx";
import Heading from "../components/heading.jsx";
import Projects from "../components/projects.jsx";
import Certification from "../components/certification.jsx";
import Education from "./../components/education.jsx";
import SocialMedia from "./../components/socialMedia.jsx";
import ProfilePic from "../components/profilePic.jsx"
const resume = () => {
  return (
    <div>
      <Navbar />
      <div className="resume-container">
      {/* resume form */}
      <div className="resume-form"></div>
      {/* actual resume */}
      <div className="actual-resume">
        {/* personal detail from resume */}
        <div className="personal-detail">
          {/* profile picture */}
          <ProfilePic profilepic=""/>
          <div className="contact-detail">
            <Heading title="Personal Detail" />
            <ul>
              <li>satyamrk18@gmail.com</li>
              <li>+91 7588035979</li>
              <li>V.n.p. appt, panchavati nashik</li>
            </ul>
          </div>
          <div className="skill">
            <Heading title="Skill" />
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
            <Heading title="Soft Skill" />
            <ul>
              <li>communication</li>
              <li>Leadership</li>
              <li>Hardworking</li>
              <li>Time Management</li>
            </ul>
          </div>
          <div className="education">
            <Heading title="Education"/>
            <Education
              education="Bachelors of engineering"
              college="SVIT"
              percentage={90}
            />
            <Education
              education="HSC"
              college="VN naik nashik"
              percentage={90}
            />
          </div>
          {/* social media linkes */}
          <div className="social-media-links">
            <Heading title="social handles" />
            <SocialMedia
              title="Linked in"
              link="http://localhost:5173/resume"
            />
            <SocialMedia title="peerlist" link="http://localhost:5173/resume" />
            <SocialMedia title="git hub" link="http://localhost:5173/resume" />
          </div>
        </div>

        {/* main detail */}
        <div className="main-detail">
          <Heading title="Satyam Katkade" />
          {/* summary */}
          <div className="Summary">
            <Heading title="Summary" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus iste itaque, ab culpa velit iure sapiente ipsum officia
              quam nobis accusantium enim tenetur tempora sequi dolores quos
              minima natus aspernatur. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.
            </p>
          </div>
          {/* projects */}
          <div className="projects">
            <Heading title="projects-1" />
            <Projects
              projectName=" Weathe Detection system"
              aim=" Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur."
              impact=" Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur."
              textTag=" Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur."
            />
            {/* project-2 */}
            <Heading title="projects-2" />
            <Projects
              projectName=" Weathe Detection system"
              aim=" Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur."
              impact=" Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur."
              textTag=" Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur."
            />
          </div>

          {/* certification */}
          <div className="certification-hobbies">
            <Certification
              title="Certification"
              one="web dev"
              two="app dev"
              three="cloud computing"
            />
            <Certification
              title="Hobbies"
              one="cricket"
              two="football"
              three="gamming"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default resume;
