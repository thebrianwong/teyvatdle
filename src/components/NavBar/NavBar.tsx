import { Link } from "react-router-dom";
import logo from "../../assets/nav/logo.png";
import characterIcon from "../../assets/nav/navCharacter.png";
import weaponIcon from "../../assets/nav/navWeapon.png";
import foodIcon from "../../assets/nav/navFood.png";
import talentIcon from "../../assets/nav/navTalent.png";
import constellationIcon from "../../assets/nav/navConstellation.png";
import "./styles.scss";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isButtonMenu, setIsButtonMenu] = useState(
    window.innerWidth <= 1024 ? true : false
  );

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
    window.innerWidth <= 1024 ? setIsButtonMenu(true) : setIsButtonMenu(false);
  }, [width]);

  return (
    <nav className="nav-bar">
      <Link to="/">
        <img className="logo" src={logo} alt="Teyvatdle Logo." />
      </Link>
      <Link to="/">
        Characters
        <img src={characterIcon} alt="" />
      </Link>
      <Link to="/weapon">
        Weapons
        <img src={weaponIcon} alt="" />
      </Link>
      <Link to="/food">
        Foods
        <img src={foodIcon} alt="" />
      </Link>
      <Link to="/talent">
        Talents
        <img src={talentIcon} alt="" />
      </Link>
      <Link to="/constellation">
        Constellations
        <img src={constellationIcon} alt="" />
      </Link>
    </nav>
  );
};

export default NavBar;
