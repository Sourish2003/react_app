import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import GithubIcon from "../assets/github.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchGithubAccessToken } from "../github_auth/github.jsx";

const Navbar = ({ setRepos }) => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
      useAuth0();
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${navbarHeight}px`
        );
      }
    };

    updateNavbarHeight(); // Run on mount

    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight); // Clean up on unmount
    };
  }, []);

  useEffect(() => {
    // Fetch GitHub access token after successful login
    if (isAuthenticated && user) {
      setGithubAccessToken(user);
    }
  }, [isAuthenticated, user]);

  const [showMenu, setShowMenu] = useState(false);

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

  const setGithubAccessToken = async (user) => {
    if (!isAuthenticated) return;

    try {
      await fetchGithubAccessToken(user);
    } catch (error) {
      console.error("Error setting access token:", error);
    }
  };

  return (
    <header className="fixed w-full top-0 left-0 bg-transparent z-50">
      <nav className="flex items-center justify-between relative h-16 m-4">
        <div
          className={`fixed top-0 ${showMenu ? "right-0" : "-right-full"} 
          bg-black/20 backdrop-blur-lg w-4/5 h-full p-12 pt-24 transition-all duration-400
          lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:p-0 lg:backdrop-blur-none`}
        >
          <ul className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-center text-black">
            <li>
              <NavLink to="/">
                <h1 className="text-2xl font-semibold">Orbit API</h1>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/"
                className="font-semibold hover:text-blue-500 transition-colors duration-400"
                onClick={closeMenuOnMobile}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/features"
                className="font-semibold hover:text-blue-500 transition-colors duration-400"
                onClick={closeMenuOnMobile}
              >
                Features
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="font-semibold hover:text-blue-500 transition-colors duration-400"
                onClick={closeMenuOnMobile}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pricing"
                className="font-semibold hover:text-blue-500 transition-colors duration-400"
                onClick={closeMenuOnMobile}
              >
                Pricing
              </NavLink>
            </li>

            <li className="flex flex-col lg:flex-row items-center gap-4">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                    className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors duration-300"
                  >
                    Log Out
                  </button>

                  <div className="flex items-center gap-4">
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <h2 className="font-semibold">{user.name}</h2>
                      <p className="text-sm">{user.email}</p>
                    </div>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => {
                    loginWithRedirect({
                      connection: "github",
                      scope: "read:user repo", // Request GitHub access
                    });
                  }}
                  className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  Log In
                </button>
              )}
            </li>
          </ul>

          <button
            className="absolute top-4 right-6 text-2xl cursor-pointer lg:hidden"
            onClick={toggleMenu}
          >
            <IoClose />
          </button>
        </div>

        <button
          className="text-2xl cursor-pointer lg:hidden"
          onClick={toggleMenu}
        >
          <IoMenu />
        </button>

        {/* GitHub Icon aligned to the right with padding */}
        <a
          href="https://github.com/Sourish2003/react_app"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto mr-4 hover:opacity-80 transition-opacity duration-300"
        >
          <div>
            <GithubIcon />
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
