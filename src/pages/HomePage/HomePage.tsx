import allCharData from "../../allChars.json";
import dummy from "../../placeholder.json";
import GameArea from "../../components/GameArea/GameArea";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import paimonImage from "../../assets/title/paimonThinking.png";
import { useAppSelector } from "../../redux/hooks";
import { loadCharacters, loadDailyCharacter } from "../../redux/apiDataSlice";
import { selectDailyCharacterID } from "../../redux/dailyRecordSlice";

const HomePage = () => {
  const characterData = useAppSelector(loadCharacters);
  const dailyCharacterID = useAppSelector(selectDailyCharacterID);
  const dailyCharacter = useAppSelector((state) =>
    loadDailyCharacter(state, dailyCharacterID)
  );

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={paimonImage} alt="" />
        <h1>Which Character is Paimon Thinking of...?</h1>
      </div>
      <GameArea
        gameType="character"
        selectType="character"
        data={characterData}
        dailyEntity={dailyCharacter!}
      />
    </>
  );
};

export default HomePage;
