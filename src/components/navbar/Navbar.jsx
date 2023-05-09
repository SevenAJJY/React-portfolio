import React, { useState } from "react";
import { links } from "../../data/data";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navStyles = ({ isActive }) => {
    return isActive ? "nav__link active--nav" : "nav__link";
  };
  return (
    <nav className="nav">
      <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
        <ul className="nav__list">
          {links.map((link) => (
            <li key={link.id} className="nav__item">
              <NavLink
                to={link.url}
                className={navStyles}
                onClick={() => setShowMenu(!showMenu)}
              >
                {<link.icon className="nav__icon" />}
                <h3 className="nav__name">{link.name}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <button className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
