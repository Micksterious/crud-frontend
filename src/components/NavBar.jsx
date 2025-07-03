import React from "react";
import "./NavBarStyles.css";
import { NavLink } from "react-router";

const NavBar = () => {
  return <nav className="navbar">{/* Some navbar stuff goes here */}
     {/* Currently, we're using <a> tags to navigate to different pages.
      This means that every time we click on a link, the page will reload.
      Let's fix that!
      */}
      {/* choose alt \^ , take to path*/}
      <NavLink to="/">Home</NavLink> 
      <NavLink to="/all-campus">All Campus</NavLink>
      <NavLink to="/all-student">All Student</NavLink>
      <NavLink to="/settings">Settings</NavLink>
  </nav>;
};

export default NavBar;