const Projects = ({projectName,aim,impact,textTag}) => {
  return(
   <div>
    <h4 className="ml-[10px] break-words whitespace-normal text-purple-600">{projectName}</h4>
    <ul>
        <li className="text-[13px] list-disc break-words whitespace-normal max-w-full">{aim}</li>
        <li className="text-[13px] list-disc break-words whitespace-normal max-w-full">{impact}</li>
        <li className="text-[13px] list-disc break-words whitespace-normal max-w-full">{textTag}</li>
    </ul>
   </div>
  );
};
export default Projects;
