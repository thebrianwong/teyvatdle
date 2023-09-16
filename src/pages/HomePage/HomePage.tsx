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
  setGuessCounter,
  setCompletedState,
}: HomePageProps) => {
  const characterData = useAppSelector(loadCharacters);
  const dailyCharacterID = useAppSelector(selectDailyCharacterID);
  const dailyCharacterData = useAppSelector((state) =>
    loadDailyCharacter(state, dailyCharacterID)
  );
  const dailyCharacterSolved = useAppSelector(selectDailyCharacterSolved);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={paimonImage} alt="" />
        <div>
          <h1>Which Character is Paimon Thinking of...?</h1>
          {dailyCharacterData ? (
            <p
              style={{ fontStyle: "italic" }}
            >{`${dailyCharacterSolved} Travelers have guessed Paimon's character today!`}</p>
          ) : (
            <LoadingSkeleton quantity={1} width={"50%"} />
          )}
        </div>
      </div>
      {dailyCharacterData ? (
        <GameArea
          gameType="character"
          selectType="character"
          data={characterData}
          dailyEntity={dailyCharacterData!}
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

export default HomePage;
