import "./projects.css"
const Projects = ({projectName,aim,impact,textTag}) => {
  return(
   <div>
    <h4>{projectName}</h4>
    <ul>
        <li>{aim}</li>
        <li>{impact}</li>
        <li>{textTag}</li>
    </ul>
   </div>
  );
};
export default Projects;
