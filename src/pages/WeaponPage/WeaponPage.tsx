import GameArea from "../../components/GameArea/GameArea";
import { useAppSelector } from "../../redux/hooks";
import { loadWeapons } from "../../redux/apiDataSlice";
import {
  selectDailyWeapon,
  selectDailyWeaponSolved,
} from "../../redux/dailyRecordSlice";
import WeaponPageProps from "./type";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import PageHeader from "../../components/PageHeader/PageHeader";
import Tooltip from "../../components/Tooltip/Tooltip";
import Credits from "../../components/Credits/Credits";
import { useEffect } from "react";
import { GameDataType } from "../../__generated__/graphql";

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
  const dailyWeaponData = useAppSelector(selectDailyWeapon);
  const dailyWeaponSolved = useAppSelector(selectDailyWeaponSolved);

  useEffect(() => {
    document.title = "Teyvatdle | Weapon";

    if (!complete) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <PageHeader
        title="weapon"
        dataLoaded={dailyWeaponData ? true : false}
        solvedValue={dailyWeaponSolved}
      />
      {dailyWeaponData ? (
        <GameArea
          gameType={GameDataType.Weapon}
          selectType="weapon"
          gameData={weaponData}
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
      <Credits />
      <Tooltip type={"weapon"} />
    </>
  );
};

export default WeaponPage;
