import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => (
  <header>
    <nav className="container d-flex-space-be">
      <div className="logo">
        <NavLink to="/">CRYPSHARE</NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavMenu;
