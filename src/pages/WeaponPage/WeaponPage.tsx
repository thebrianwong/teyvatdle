import GameArea from "../../components/GameArea/GameArea";
import paimonImage from "../../assets/title/paimonThinking.png";
import { useAppSelector } from "../../redux/hooks";
import { loadDailyWeapon, loadWeapons } from "../../redux/apiDataSlice";
import {
  selectDailyWeaponID,
  selectDailyWeaponSolved,
} from "../../redux/dailyRecordSlice";
import WeaponPageProps from "./type";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";

const WeaponPage = ({
  dailyRecordID,
  guessesCounter,
  complete,
  setGuessCounter,
  setCompletedState,
}: WeaponPageProps) => {
  const weaponData = useAppSelector(loadWeapons);
  const dailyWeaponID = useAppSelector(selectDailyWeaponID);
  const dailyWeaponData = useAppSelector((state) =>
    loadDailyWeapon(state, dailyWeaponID)
  );
  const dailyWeaponSolved = useAppSelector(selectDailyWeaponSolved);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={paimonImage} alt="" />
        <div>
          <h1>Which Weapon is Paimon Thinking of...?</h1>
          {dailyWeaponData ? (
            <p
              style={{ fontStyle: "italic" }}
            >{`${dailyWeaponSolved} Travelers have guessed Paimon's weapon today!`}</p>
          ) : (
            <LoadingSkeleton quantity={1} width={"50%"} />
          )}
        </div>
      </div>
      {dailyWeaponData ? (
        <GameArea
          gameType="weapon"
          selectType="weapon"
          data={weaponData}
          dailyEntity={dailyWeaponData!}
          dailyRecordID={dailyRecordID}
          guessesCounter={guessesCounter}
          complete={complete}
          setGuessCounter={setGuessCounter}
          setCompletedState={setCompletedState}
        />
      ) : (
        <LoadingSkeleton quantity={5} width="100%" />
      )}
    </>
  );
};

export default WeaponPage;
