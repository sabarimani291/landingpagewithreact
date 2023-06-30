import React from "react";
import { Link } from "react-scroll";
import "./Header.css"; 

const Header = () => {
  return (
    <div className="header">
        <div className="header_left">
           <h1>
             Atlas<span>Gym</span>
             </h1>
        </div>
        <div className="header_right">
             <Link to="about" smooth="true" duration="{500}">
              <h4>About</h4>
              </Link>
              <Link to="features" smooth="true" duration="{500}">
              <h4>Features</h4>
              </Link>
              <Link to="fees" smooth="true" duration="{500}">
              <h4>Fees</h4>
              </Link>
              <Link to="training" smooth="true" duration="{500}">
              <h4>Training</h4>
              </Link>

        </div>
    </div>
  )
}

export default Header;