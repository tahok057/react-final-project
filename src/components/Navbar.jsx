import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar bg-dark border-bottom border-body">
      <NavLink to="/">home</NavLink>
      <NavLink to="/items">universities</NavLink>
      <NavLink to="/about">about</NavLink>
    </nav>
  );
};

export default Navbar;
