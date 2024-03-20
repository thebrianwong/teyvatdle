import GameArea from "../../components/GameArea/GameArea";
import { useAppSelector } from "../../redux/hooks";
import { getCharacters } from "../../redux/gameDataSlice";
import {
  selectDailyTalent,
  selectDailyTalentSolved,
} from "../../redux/dailyRecordSlice";
import TalentPageProps from "./type";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import PageHeader from "../../components/PageHeader/PageHeader";
import Tooltip from "../../components/Tooltip/Tooltip";
import Credits from "../../components/Credits/Credits";
import { useEffect } from "react";
import { GameDataType } from "../../__generated__/graphql";

const TalentPage = ({
  dailyRecordID,
  guessesCounter,
  complete,
  guesses,
  setGuessCounter,
  setCompletedState,
  updateGuesses,
}: TalentPageProps) => {
  const characterData = useAppSelector(getCharacters);
  const dailyTalentData = useAppSelector(selectDailyTalent);
  const dailyTalentSolved = useAppSelector(selectDailyTalentSolved);

  useEffect(() => {
    document.title = "Teyvatdle | Talent";

    if (!complete) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <PageHeader
        title={GameDataType.Talent}
        dataLoaded={Object.keys(dailyTalentData).length ? true : false}
        solvedValue={dailyTalentSolved}
      />
      {Object.keys(dailyTalentData).length ? (
        <GameArea
          gameType={GameDataType.Talent}
          selectType={GameDataType.Character}
          gameData={characterData}
          dailyEntity={dailyTalentData!}
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
      <Tooltip type={GameDataType.Talent} />
    </>
  );
};

export default TalentPage;
