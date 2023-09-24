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
      <header>
        <img
          src={paimonImage}
          alt="A thinking Paimon sticker from a Genshin Impact web event on the Chinese servers."
        />
        <div>
          <h1>Which Character is Paimon Thinking of...?</h1>
          {dailyCharacterData ? (
            <p>{`${dailyCharacterSolved} Travelers have guessed Paimon's character today!`}</p>
          ) : (
            <LoadingSkeleton quantity={1} width={"50%"} hasContainer={false} />
          )}
        </div>
      </header>
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
