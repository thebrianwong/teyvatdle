import GameArea from "../../components/GameArea/GameArea";
import paimonImage from "../../assets/title/paimonThinking.png";
import { useAppSelector } from "../../redux/hooks";
import {
  loadCharacters,
  loadDailyConstellation,
} from "../../redux/apiDataSlice";
import {
  selectDailyConstellationID,
  selectDailyConstellationSolved,
} from "../../redux/dailyRecordSlice";
import ConstellationPageProps from "./type";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import PageHeader from "../../components/PageHeader/PageHeader";

const ConstellationPage = ({
  dailyRecordID,
  guessesCounter,
  complete,
  guesses,
  setGuessCounter,
  setCompletedState,
  updateGuesses,
}: ConstellationPageProps) => {
  const characterData = useAppSelector(loadCharacters);
  const dailyConstellationID = useAppSelector(selectDailyConstellationID);
  const dailyConstellationData = useAppSelector((state) =>
    loadDailyConstellation(state, dailyConstellationID)
  );
  const dailyConstellationSolved = useAppSelector(
    selectDailyConstellationSolved
  );

  return (
    <>
      <PageHeader
        title="constellation"
        dataLoaded={dailyConstellationData ? true : false}
        solvedValue={dailyConstellationSolved}
      />
      {dailyConstellationData ? (
        <GameArea
          gameType="constellation"
          selectType="character"
          data={characterData}
          dailyEntity={dailyConstellationData!}
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

export default ConstellationPage;
