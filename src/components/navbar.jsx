import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import defaultuser from "../assets/img/user.png";

const Navbar = () => {
  const [userImg, setUserImg] = useState("");
  const location = useLocation();

  const data = JSON.parse(localStorage.getItem("userdata") || "null");

  useEffect(() => {
    const storedImg = localStorage.getItem("userImage");
    if (storedImg) setUserImg(storedImg);
  }, []);

  const linkClass = (path) =>
    `${location.pathname === path
      ? "text-white text-[20px] font-semibold p-[5px] border-b-2 border-white max-[650px]:text-[18px]"
      : "text-white text-[20px] font-semibold p-[5px] border border-transparent hover:border-white hover:rounded-[5px] transition-all duration-200 ease-in max-[650px]:text-[15px] max-[330px]:text-[13px]"
    } no-underline`;

  return (
    <div className="w-full flex items-center justify-between flex-row bg-[#0b0b14] shadow-[3px_3px_3px_rgba(0,0,0,0.105)] z-[1000] max-[500px]:flex-col">
      <h2 className="ml-[25px]">Logo</h2>
      <div className="flex w-1/2 flex-row justify-between items-center mr-[25px] max-[500px]:w-full max-[500px]:justify-evenly">
        <Link to="/" className={linkClass("/")}>
          Home
        </Link>
        <Link to="/carrer" className={linkClass("/carrer")}>
          Career
        </Link>
        <Link to="/courses" className={linkClass("/courses")}>
          Courses
        </Link>
        <Link to="/about" className={linkClass("/about")}>
          About
        </Link>
        <Link
          to={data ? "/user" : "/login"}
          className={linkClass(data ? "/user" : "/login")}
        >
          <div className="flex gap-[10px]">
            {userImg ? (
              <img
                src={userImg}
                alt="actual user"
                className="h-[30px] w-[30px] rounded-full"
              />
            ) : (
              <img
                src={defaultuser}
                alt="default user"
                className="h-[30px] w-[30px] rounded-full"
              />
            )}
            {data ? data.name : "Login"}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
