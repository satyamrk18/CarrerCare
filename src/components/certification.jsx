
import Heading from "./heading.jsx";
const Certification = ({title,one,two,three}) => {
  return (
    <div>
      <Heading title={title} />
      <ul>
        <li className="list-disc">{one}</li>
        <li className="list-disc">{two}</li>
        <li className="list-disc">{three}</li>
      </ul>
    </div>
  );
};
export default Certification;
