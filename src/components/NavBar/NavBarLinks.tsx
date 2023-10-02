import { Link } from "react-router-dom";
import characterIcon from "../../assets/nav/navCharacter.png";
import weaponIcon from "../../assets/nav/navWeapon.png";
import foodIcon from "../../assets/nav/navFood.png";
import talentIcon from "../../assets/nav/navTalent.png";
import constellationIcon from "../../assets/nav/navConstellation.png";

const NavBarLinks = () => {
  return (
    <>
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
    </>
  );
};

export default NavBarLinks;
