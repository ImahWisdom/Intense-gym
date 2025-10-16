import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav>
      <Link to="/" className="title" onClick={handleLinkClick}>
        Intense
      </Link>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/about" onClick={handleLinkClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={handleLinkClick}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" onClick={handleLinkClick}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
