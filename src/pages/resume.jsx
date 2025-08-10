import react, { use } from "react";
import "./resume.css";
import Navbar from "./../components/navbar.jsx";
import Heading from "../components/heading.jsx";
import Projects from "../components/projects.jsx";
import Certification from "../components/certification.jsx";
import Education from "./../components/education.jsx";
import SocialMedia from "./../components/socialMedia.jsx";
import ProfilePic from "../components/profilePic.jsx";
import { useState, useEffect } from "react";
import Input from "../components/input.jsx";
const resume = () => {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [project1, setPorject1] = useState("");
  const [project2, setPorject2] = useState("");
  const [aim1, setAim1] = useState("");
  const [aim2, setAim2] = useState("");
  const [impact1, setImpact1] = useState("");
  const [impact2, setImpact2] = useState("");
  const [textTag1, settextTag1] = useState("");
  const [textTag2, settextTag2] = useState("");
  const [certification, setCertification] = useState({
    one: "",
    two: "",
    three: "",
  });
  const [hobbie, setHobbies] = useState({
    one: "",
    teo: "",
    three: "",
  });

  //personal information
  const [img, setImg] = useState("");
  return (
    <div>
      <Navbar />
      <div className="resume-container">
        {/* resume form */}
        <div className="resume-form">
          <Input
            type="text"
            heading="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            type="text"
            heading="summary"
            onChange={(e) => {
              setSummary(e.target.value);
            }}
          />
          <Heading title="projects" />
          <Input
            type="text"
            heading="1st project name"
            onChange={(e) => {
              setPorject1(e.target.value);
            }}
          />
          <Input
            type="text"
            heading="aim"
            onChange={(e) => {
              setAim1(e.target.value);
            }}
          />
          <Input
            type="text"
            heading="Impact"
            onChange={(e) => {
              setImpact1(e.target.value);
            }}
          />
          <Input
            type="text"
            heading="Text Tag"
            onChange={(e) => {
              settextTag1(e.target.value);
            }}
          />
          <Input
            type="text"
            heading="2nd project name"
            onChange={(e) => {
              setPorject2(e.target.value);
            }}
          />
          <Input
            type="text"
            heading="aim"
            onChange={(e) => {
              setAim2(e.target.value);
            }}
          />
          <Input
            type="text"
            heading="Impact"
            onChange={(e) => {
              setImpact2(e.target.value);
            }}
          />
          <Input
            type="text"
            heading="text tag"
            onChange={(e) => {
              settextTag2(e.target.value);
            }}
          />

          {/* certification  */}
          <Input
            type="text"
            heading="Certification 1"
            onChange={(e) =>
              setCertification({ ...certification, one: e.target.value })
            }
          />
          <Input
            type="text"
            heading="Certification 2"
            onChange={(e) =>
              setCertification({ ...certification, two: e.target.value })
            }
          />
          <Input
            type="text"
            heading="Certification 3"
            onChange={(e) =>
              setCertification({ ...certification, three: e.target.value })
            }
          />
          {/* hobbies */}
          <Input
            type="text"
            heading="Hobbies 1"
            onChange={(e) => setHobbies({ ...hobbie, one: e.target.value })}
          />
          <Input
            type="text"
            heading="Hobbies 2"
            onChange={(e) => setHobbies({ ...hobbie, two: e.target.value })}
          />
          <Input
            type="text"
            heading="Hobbies 3"
            onChange={(e) => setHobbies({ ...hobbie, three: e.target.value })}
          />

          {/* personal imformation */}
          <Input
            type="profile pic"
            heading="Profile picture"
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </div>
        {/* actual resume */}
        <div className="actual-resume">
          {/* personal detail from resume */}
          <div className="personal-detail">
            {/* profile picture */}
            <ProfilePic profilepic={img}/>
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
              <Heading title="Education" />
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
              <SocialMedia
                title="peerlist"
                link="http://localhost:5173/resume"
              />
              <SocialMedia
                title="git hub"
                link="http://localhost:5173/resume"
              />
            </div>
          </div>

          {/* main detail */}
          <div className="main-detail">
            <Heading title={name || `satyam katkade`} />
            {/* summary */}
            <div className="Summary">
              <Heading title="Summary" />
              <p className="summary-container">
                {summary ||
                  ` Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.`}
              </p>
            </div>
            {/* projects */}
            <div className="projects">
              <Heading title="projects" />
              <Projects
                projectName={project1 != "" ? `1] ${project1}` : `1] project 1`}
                aim={
                  aim1 ||
                  `Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.`
                }
                impact={
                  impact1 ||
                  `Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.`
                }
                textTag={
                  textTag1 ||
                  `Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.`
                }
              />
              {/* project-2 */}
              <Projects
                projectName={project2 != "" ? `2] ${project2}` : `2] project 2`}
                aim={
                  aim2 ||
                  ` Temporibus iste itaque, ab culpa velit iure     
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.`
                }
                impact={
                  impact2 ||
                  `Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.`
                }
                textTag={
                  textTag2 ||
                  `Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.`
                }
              />
            </div>

            {/* certification */}
            <div className="certification-hobbies">
              <Certification
                title="Certification"
                one={certification.one || "Web Dev"}
                two={certification.two || "App dev"}
                three={certification.three || "cloud computing"}
              />
              <Certification
                title="Hobbies"
                one={hobbie.one || "developemnt"}
                two={hobbie.two || "cricket"}
                three={hobbie.three || "gamming"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default resume;
