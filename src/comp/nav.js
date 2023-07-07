import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss"
const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">
            Work <span className="slash"> / </span>
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Fun</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
