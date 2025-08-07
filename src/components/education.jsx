import "./education.css"
import Heading from "./heading.jsx"
const Education = ({title,education,college,percentage})=>
{
 return(
    <div>
    <Heading title={title}/>
    <ul>
        <li>{education} </li>
        <li>{college}</li>
        <li>percentage : {percentage}%</li>
    </ul>
    </div>
 )
}
export default Education;