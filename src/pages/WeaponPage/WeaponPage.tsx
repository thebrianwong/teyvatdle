import allWeapData from "../../allWeapons.json";
import dummyTwoStarWeapon from "../../twoStarWeapon.json";
import GameArea from "../../components/GameArea/GameArea";
import WeaponAPIData from "../../types/data/weaponAPIData.type";
import paimonImage from "../../assets/title/paimonThinking.png";

const WeaponPage = () => {
  // will later get from redux
  const weaps = allWeapData as WeaponAPIData[];
  const weapDaily = dummyTwoStarWeapon as WeaponAPIData;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={paimonImage} alt="" />
        <h1>Which Weapon is Paimon Thinking of...?</h1>
      </div>
      <GameArea
        gameType="weapon"
        selectType="weapon"
        data={weaps}
        dailyEntity={weapDaily}
      />
    </>
  );
};

export default WeaponPage;
