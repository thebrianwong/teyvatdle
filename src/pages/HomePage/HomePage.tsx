import allCharData from "../../allChars.json";
import dummy from "../../placeholder.json";
import GameArea from "../../components/GameArea/GameArea";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import paimonImage from "../../assets/title/paimonThinking.png";

const HomePage = () => {
  // will later get from redux
  const chars = allCharData as CharacterAPIData[];
  const charDaily = dummy as CharacterAPIData;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={paimonImage} alt="" />
        <h1>Which Character is Paimon Thinking of...?</h1>
      </div>
      <GameArea
        gameType="character"
        selectType="character"
        data={chars}
        dailyEntity={charDaily}
      />
    </>
  );
};

export default HomePage;
