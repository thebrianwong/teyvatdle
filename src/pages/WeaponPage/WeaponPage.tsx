import allWeapData from "../../allWeapons.json";
import dummyTwoStarWeapon from "../../twoStarWeapon.json";
import GameArea from "../../components/GameArea/GameArea";
import WeaponAPIData from "../../types/data/weaponAPIData.type";
import paimonImage from "../../assets/title/paimonThinking.png";
import { useAppSelector } from "../../redux/hooks";
import { loadDailyWeapon, loadWeapons } from "../../redux/apiDataSlice";
import { selectDailyWeaponID } from "../../redux/dailyRecordSlice";

const WeaponPage = () => {
  const weaponData = useAppSelector(loadWeapons);
  const dailyWeaponID = useAppSelector(selectDailyWeaponID);
  const dailyWeaponData = useAppSelector((state) =>
    loadDailyWeapon(state, dailyWeaponID)
  );

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={paimonImage} alt="" />
        <h1>Which Weapon is Paimon Thinking of...?</h1>
      </div>
      {dailyWeaponData && (
        <GameArea
          gameType="weapon"
          selectType="weapon"
          data={weaponData}
          dailyEntity={dailyWeaponData!}
        />
      )}
    </>
  );
};

export default WeaponPage;
