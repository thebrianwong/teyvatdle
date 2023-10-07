import { Link, useLocation } from "react-router-dom";
import characterIcon from "../../assets/nav/navCharacter.png";
import weaponIcon from "../../assets/nav/navWeapon.png";
import foodIcon from "../../assets/nav/navFood.png";
import talentIcon from "../../assets/nav/navTalent.png";
import constellationIcon from "../../assets/nav/navConstellation.png";
import { memo } from "react";

const NavBarLinks = memo(() => {
  const location = useLocation();

  return (
    <>
      <Link
        to="/"
        className={`${location.pathname === "/" ? "active-nav-link" : ""}`}
      >
        Characters
        <img src={characterIcon} alt="" />
      </Link>
      <Link
        to="/weapon"
        className={`${
          location.pathname === "/weapon" ? "active-nav-link" : ""
        }`}
      >
        Weapons
        <img src={weaponIcon} alt="" />
      </Link>
      <Link
        to="/food"
        className={`${location.pathname === "/food" ? "active-nav-link" : ""}`}
      >
        Foods
        <img src={foodIcon} alt="" />
      </Link>
      <Link
        to="/talent"
        className={`${
          location.pathname === "/talent" ? "active-nav-link" : ""
        }`}
      >
        Talents
        <img src={talentIcon} alt="" />
      </Link>
      <Link
        to="/constellation"
        className={`${
          location.pathname === "/constellation" ? "active-nav-link" : ""
        }`}
      >
        Constellations
        <img src={constellationIcon} alt="" />
      </Link>
    </>
  );
});

export default NavBarLinks;
