import React from "react";
import {Link} from "react-scroll";
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
        <div className="topContent_container">
            <h1>
                Atlas Gym
            </h1>
            <p>A profesional Gym with a Profesional Staffs</p>
            <a href="www.google.com">
                <button className="topContent_signinbutton">Sign in</button>
            </a>
            <Link to="features" smooth={true} duration={500}>
                <button className="topContent_loginbutton">Login</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent