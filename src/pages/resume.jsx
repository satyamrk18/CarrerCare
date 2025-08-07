import react from "react";
import "./resume.css";
import Navbar from "./../components/navbar.jsx";
import Heading from "../components/heading.jsx";
import Projects from "../components/projects.jsx";
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
        </div>
        <div className="main-detail">
          <Heading title="Satyam Katkade" />
          {/* summary */}
          <div className="Summary">
            <Heading stitle="Summary" />
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
            <Heading title="projects" />
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
            <Heading title="projects" />
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
        </div>
      </div>
    </div>
  );
};
export default resume;
