import { Link } from "react-router-dom";
import logo from "../../assets/nav/logo.png";
import characterIcon from "../../assets/nav/navCharacter.png";
import weaponIcon from "../../assets/nav/navWeapon.png";
import foodIcon from "../../assets/nav/navFood.png";
import talentIcon from "../../assets/nav/navTalent.png";
import constellationIcon from "../../assets/nav/navConstellation.png";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img style={{ width: "250px" }} src={logo} alt="Teyvatdle Logo." />
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
