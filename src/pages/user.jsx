import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./../components/navbar.jsx";
import { Link } from "react-router-dom";
import "./user.css";
import Button from "../components/button.jsx";
import Input from "../components/input.jsx";


const User = () => {
  const [user, setUser] = useState("");
  const [userImg, setUserImg] = useState("");
  //retriving the data if exist
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userdata") || "null");
    setUser(data);
  }, []);

  const { name } = user;

  return (
    <div>
      <Navbar />
      <div className="user-container">
        <div className="userData">
         <div className="userImage">
           <img src={userImg} alt="user image"/>
         </div>
          <Input
            type="file"
            heading="upload the image"
            placeholder="upload the image"
            onChange={(e)=>{
              const file = e.target.files[0];
              if(file)
              {
                setUserImg(URL.createObjectURL(file));
              }
            }}
          />
          <h1>hello , {name}</h1>
        </div>
        <div className="user-Suggessions">
          <Link to="/contact">
            <Button name="Contact" />
          </Link>
          <Link to="/resume">
            <Button name="Resume" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
