import React from "react";
import Navbar from "./../components/navbar.jsx";
import "./login.css";
const login = () => {
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
            <button>Sign In</button>
          </div>
          <div className="login-form">
          <form>
              <h2>Log In</h2>
            <input 
            type="text"
            placeholder="enter a username"
            name="username"
            />
             <input 
            type="password"
            placeholder="enter a username"
            name="username"
            />
          </form>
            <button>Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
