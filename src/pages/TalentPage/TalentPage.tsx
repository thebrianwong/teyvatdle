import GameArea from "../../components/GameArea/GameArea";
import { useAppSelector } from "../../redux/hooks";
import { loadCharacters, loadDailyTalent } from "../../redux/apiDataSlice";
import {
  selectDailyTalentID,
  selectDailyTalentSolved,
} from "../../redux/dailyRecordSlice";
import TalentPageProps from "./type";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import PageHeader from "../../components/PageHeader/PageHeader";
import Tooltip from "../../components/Tooltip/Tooltip";
import Credits from "../../components/Credits/Credits";
import { useEffect } from "react";

const TalentPage = ({
  dailyRecordID,
  guessesCounter,
  complete,
  guesses,
  setGuessCounter,
  setCompletedState,
  updateGuesses,
}: TalentPageProps) => {
  const characterData = useAppSelector(loadCharacters);
  const dailyTalentID = useAppSelector(selectDailyTalentID);
  const dailyTalentData = useAppSelector((state) =>
    loadDailyTalent(state, dailyTalentID)
  );
  const dailyTalentSolved = useAppSelector(selectDailyTalentSolved);

  useEffect(() => {
    if (!complete) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <PageHeader
        title="talent"
        dataLoaded={dailyTalentData ? true : false}
        solvedValue={dailyTalentSolved}
      />
      {dailyTalentData ? (
        <GameArea
          gameType="talent"
          selectType="character"
          data={characterData}
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
      <Tooltip type="talent" />
    </>
  );
};

export default TalentPage;
