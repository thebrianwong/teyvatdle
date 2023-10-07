import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/nav/logo.png";
import "./styles.scss";
import { useEffect, useState } from "react";
import NavBarLinks from "./NavBarLinks";

const NavBar = () => {
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);
  const [isButtonMenu, setIsButtonMenu] = useState(
    window.innerWidth <= 580 ? true : false
  );
  const [displayMenu, setDisplayMenu] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [hideAnimation, setHideAnimation] = useState(false);

  const handleMenuClose = () => {
    setShowAnimation(false);
    setHideAnimation(true);
    setTimeout(() => {
      setDisplayMenu(false);
      setHideAnimation(false);
    }, 500);
  };

  const handleMenuOpen = () => {
    setDisplayMenu(true);
    setShowAnimation(true);
  };

  useEffect(() => {
    const listenForResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", listenForResize);

    return () => {
      window.removeEventListener("resize", listenForResize);
    };
  }, []);

  useEffect(() => {
    window.innerWidth <= 580 ? setIsButtonMenu(true) : setIsButtonMenu(false);
    setDisplayMenu(false);
  }, [width]);

  useEffect(() => {
    handleMenuClose();
  }, [location]);

  return (
    <nav className="nav-bar">
      <Link to="/">
        <img className="logo" src={logo} alt="Teyvatdle Logo." />
      </Link>
      {isButtonMenu ? (
        <>
          <button
            className="menu-button"
            onClick={() => {
              if (displayMenu) {
                handleMenuClose();
              } else {
                handleMenuOpen();
              }
            }}
          >
            <svg
              className="menu-button-image"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>menu</title>
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </button>
          <div
            style={{
              display: displayMenu ? "flex" : "none",
            }}
            className={`responsive-menu-container 
            ${showAnimation ? "show-animation" : ""}
            ${hideAnimation ? "hide-animation" : ""}
            `}
          >
            <NavBarLinks />
          </div>
        </>
      ) : (
        <NavBarLinks />
      )}
    </nav>
  );
};

export default NavBar;
