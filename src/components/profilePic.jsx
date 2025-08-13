import DefaultProfile from "../assets/img/defaultProfilePic.jpg";
const profile = ({ profilepic }) => {
  return (
    <div className="default-Profile-Pic">
      <img
        src={profilepic === "" ? DefaultProfile : profilepic}
        ale="profile pic"
        className="rounded-full w-[150px] h-[150px] border border-gray-500"
      />
    </div>
  );
};
export default profile;
