import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <nav className="navBar">
    <h1>Book Search</h1>
    <NavLink to="/" exact>
      Search
    </NavLink>
    <NavLink to="/saved" exact>
      Saved
    </NavLink>
  </nav>
);

export default NavBar;
