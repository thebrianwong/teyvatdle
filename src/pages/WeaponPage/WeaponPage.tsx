import GameArea from "../../components/GameArea/GameArea";
import { useAppSelector } from "../../redux/hooks";
import { loadDailyWeapon, loadWeapons } from "../../redux/apiDataSlice";
import {
  selectDailyWeaponID,
  selectDailyWeaponSolved,
} from "../../redux/dailyRecordSlice";
import WeaponPageProps from "./type";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import PageHeader from "../../components/PageHeader/PageHeader";
import Tooltip from "../../components/Tooltip/Tooltip";

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
      <PageHeader
        title="weapon"
        dataLoaded={dailyWeaponData ? true : false}
        solvedValue={dailyWeaponSolved}
      />
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
      <Tooltip type={"weapon"} />
    </>
  );
};

export default WeaponPage;
