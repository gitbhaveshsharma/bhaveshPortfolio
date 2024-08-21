import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Work <span className="slash"> / </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/play"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Play
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
