import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const NavMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const backHome = () => {
    navigate('/');
  };

  const isHomePage = location.pathname === '/';

  return (
    <header>
      <nav className="container d-flex-space-be">
        {!isHomePage && (
          <div className="logox">
            <BiArrowBack className="back-arrow" onClick={() => backHome()} />
          </div>
        )}
        {isHomePage && (
          <NavLink to="/" className="logo">
            CRYPSHARE
          </NavLink>
        )}
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavMenu;
