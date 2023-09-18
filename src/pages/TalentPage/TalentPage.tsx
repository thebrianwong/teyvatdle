import GameArea from "../../components/GameArea/GameArea";
import paimonImage from "../../assets/title/paimonThinking.png";
import { useAppSelector } from "../../redux/hooks";
import { loadCharacters, loadDailyTalent } from "../../redux/apiDataSlice";
import {
  selectDailyTalentID,
  selectDailyTalentSolved,
} from "../../redux/dailyRecordSlice";
import TalentPageProps from "./type";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";

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

  return (
    <>
      <header>
        <img
          src={paimonImage}
          alt="A thinking Paimon sticker from a Genshin Impact web event on the Chinese servers."
        />
        <div>
          <h1>Which Talent is Paimon Thinking of...?</h1>
          {dailyTalentData ? (
            <p>{`${dailyTalentSolved} Travelers have guessed Paimon's talent today!`}</p>
          ) : (
            <LoadingSkeleton quantity={1} width={"50%"} />
          )}
        </div>
      </header>
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
        <LoadingSkeleton quantity={5} width="100%" />
      )}
    </>
  );
};

export default TalentPage;
