import "./education.css"
const Education = ({education,college,percentage})=>
{
 return(
    <div className="education-comp">
    <ul>
        <li>{education} </li>
        <li>{college}</li>
        <li>percentage : {percentage}%</li>
    </ul>
    </div>
 )
}
export default Education;