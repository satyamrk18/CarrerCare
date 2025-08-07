import "./certification.css";
import Heading from "./heading.jsx";
const Certification = ({title,one,two,three}) => {
  return (
    <div>
      <Heading title={title} />
      <ul>
        <li>{one}</li>
        <li>{two}</li>
        <li>{three}</li>
      </ul>
    </div>
  );
};
export default Certification;
