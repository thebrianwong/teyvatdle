import allWeapData from "../../allWeapons.json";
import dummyTwoStarWeapon from "../../twoStarWeapon.json";
import GameArea from "../../components/GameArea/GameArea";
import WeaponAPIData from "../../types/data/weaponAPIData.type";

const WeaponPage = () => {
  // will later get from redux
  const weaps = allWeapData as WeaponAPIData[];
  const weapDaily = dummyTwoStarWeapon as WeaponAPIData;

  return (
    <GameArea
      gameType="weapon"
      selectType="weapon"
      data={weaps}
      dailyEntity={weapDaily}
    />
  );
};

export default WeaponPage;
