import allCharData from "../../allChars.json";
import dummy from "../../placeholder.json";
import GameArea from "../../components/GameArea/GameArea";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import paimonImage from "../../assets/title/paimonThinking.png";
import { useAppSelector } from "../../redux/hooks";
import { loadCharacters, loadDailyCharacter } from "../../redux/apiDataSlice";
import {
  selectDailyCharacterID,
  selectDailyCharacterSolved,
} from "../../redux/dailyRecordSlice";
import HomePageProps from "./type";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";

const HomePage = ({ dailyRecordID }: HomePageProps) => {
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
      {dailyCharacterData && (
        <GameArea
          gameType="character"
          selectType="character"
          data={characterData}
          dailyEntity={dailyCharacterData!}
          dailyRecordID={dailyRecordID}
        />
      )}
    </>
  );
};

export default HomePage;
