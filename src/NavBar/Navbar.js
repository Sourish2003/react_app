import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";
import GithubIcon from '../assets/github.jsx'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };


  return (
    <header className="header">
      <nav className="nav container">
        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu">

          <ul className="nav__list">
            <li>
              <NavLink to="/">  {/* Link to the home page on click */}
                <h1 className="App-title">Orbit API</h1>  {/* Website name */}
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/features" className="nav__link" onClick={closeMenuOnMobile}>
                Features
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about" className="nav__link" onClick={closeMenuOnMobile}>
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/pricing" className="nav__link" onClick={closeMenuOnMobile}>
                Pricing
              </NavLink>
            </li>



            <li>
              {isAuthenticated ? (
                <>
                  <li>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                      Log Out
                    </button>
                  </li>
                  <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                  </div>
                </>
              ) : (
                <li>
                  <button onClick={() => loginWithRedirect()}>Log In</button>
                </li>
              )}
            </li>

            <li>
              <a
                href="https://github.com/Sourish2003/react_app"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link">
                <div className="github-icon-container">
                  <GithubIcon />
                </div>
              </a>
            </li>

          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;