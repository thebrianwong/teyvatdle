import GameArea from "../../components/GameArea/GameArea";
import paimonImage from "../../assets/title/paimonThinking.png";
import { useAppSelector } from "../../redux/hooks";
import { loadCharacters, loadDailyCharacter } from "../../redux/apiDataSlice";
import {
  selectDailyCharacterID,
  selectDailyCharacterSolved,
} from "../../redux/dailyRecordSlice";
import HomePageProps from "./type";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import PageHeader from "../../components/PageHeader/PageHeader";

const HomePage = ({
  dailyRecordID,
  guessesCounter,
  complete,
  guesses,
  setGuessCounter,
  setCompletedState,
  updateGuesses,
}: HomePageProps) => {
  const characterData = useAppSelector(loadCharacters);
  const dailyCharacterID = useAppSelector(selectDailyCharacterID);
  const dailyCharacterData = useAppSelector((state) =>
    loadDailyCharacter(state, dailyCharacterID)
  );
  const dailyCharacterSolved = useAppSelector(selectDailyCharacterSolved);

  return (
    <>
      <PageHeader
        title="character"
        dataLoaded={dailyCharacterData ? true : false}
        solvedValue={dailyCharacterSolved}
      />
      {dailyCharacterData ? (
        <GameArea
          gameType="character"
          selectType="character"
          data={characterData}
          dailyEntity={dailyCharacterData!}
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

export default HomePage;
