import React, { use, useEffect } from "react";
import Navbar from "./../components/navbar.jsx";
import { User } from "lucide-react";
import { useState } from "react";
import "./login.css";
import toast, { Toaster } from "react-hot-toast";
import Button from "./../components/button.jsx";
import { Link } from "react-router-dom";
const login = () => {
  const [username, setUsername] = useState("");
  const [userpassword, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [path, setPath] = useState("");
  //retriving the data
  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("userdata") || "null");
    setUser(store);
  }, []);

  const handlelogin = () => {
    const { name, password } = user;
    if (username !== name && userpassword !== password) {
      toast.error("Invalid username or password");
      setPath("/login");
      return;
    }
    setPath("/");
    toast.success("log in successfull");
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="login-container">
          <div className="side-container">
            <h1>Welcome</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              magnam velit corporis veniam eum ipsum quo excepturi pariatur
              cumque saepe. Quia qui veniam nostrum dignissimos tempore
              molestias, earum cumque ratione.
            </h2>
            <Link to="/signin">
              <Button name="Sign In" />
            </Link>
          </div>
          <div className="login-form">
            <form>
              <h2 className="login-heading">Log In</h2>
              <div className="inputs">
                <User />
                <input
                  type="text"
                  placeholder="enter a username"
                  name="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="inputs">
                <User />
                <input
                  type="password"
                  placeholder="enter a password"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </form>
            <Link to={path}>
              <Button name="Log In" onClick={handlelogin} />
            </Link>
          </div>
        </div>
      </div>
         <Link to="/contact">Contact</Link> 
      <Toaster />
    </div>
  );
};

export default login;
