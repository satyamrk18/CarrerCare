import "./profilePic.css";
import DefaultProfile from "../assets/img/defaultProfilePic.jpg";
const profile = ({ profilepic }) => {
  return (
    <div className="default-Profile-Pic">
      <img src={profilepic === "" ? DefaultProfile : profilepic} />
    </div>
  );
};
export default profile;
