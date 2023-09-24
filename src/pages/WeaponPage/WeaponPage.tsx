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
  guesses,
  setGuessCounter,
  setCompletedState,
  updateGuesses,
}: WeaponPageProps) => {
  const weaponData = useAppSelector(loadWeapons);
  const dailyWeaponID = useAppSelector(selectDailyWeaponID);
  const dailyWeaponData = useAppSelector((state) =>
    loadDailyWeapon(state, dailyWeaponID)
  );
  const dailyWeaponSolved = useAppSelector(selectDailyWeaponSolved);

  return (
    <>
      <header>
        <img
          src={paimonImage}
          alt="A thinking Paimon sticker from a Genshin Impact web event on the Chinese servers."
        />
        <div>
          <h1>Which Weapon is Paimon Thinking of...?</h1>
          {dailyWeaponData ? (
            <p>{`${dailyWeaponSolved} Travelers have guessed Paimon's weapon today!`}</p>
          ) : (
            <LoadingSkeleton quantity={1} width={"50%"} hasContainer={false} />
          )}
        </div>
      </header>
      {dailyWeaponData ? (
        <GameArea
          gameType="weapon"
          selectType="weapon"
          data={weaponData}
          dailyEntity={dailyWeaponData!}
          dailyRecordID={dailyRecordID}
          guessesCounter={guessesCounter}
          complete={complete}
          guesses={guesses}
          setGuessCounter={setGuessCounter}
          setCompletedState={setCompletedState}
          updateGuesses={updateGuesses}
        />
      ) : (
        <LoadingSkeleton quantity={5} width="100%" hasContainer={true} />
      )}
    </>
  );
};

export default WeaponPage;
