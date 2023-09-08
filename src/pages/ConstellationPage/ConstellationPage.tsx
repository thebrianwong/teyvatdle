import allCharData from "../../allChars.json";
import dummyConstellation from "../../constellationPlaceholder.json";
import GameArea from "../../components/GameArea/GameArea";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import ConstellationAPIData from "../../types/data/constellationAPIData.type";
import paimonImage from "../../assets/title/paimonThinking.png";

const ConstellationPage = () => {
  // will later get from redux
  const chars = allCharData as CharacterAPIData[];
  const constellationDaily = dummyConstellation as ConstellationAPIData;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={paimonImage} alt="" />
        <h1>Which Constellation is Paimon Thinking of...?</h1>
      </div>
      <GameArea
        gameType="constellation"
        selectType="character"
        data={chars}
        dailyEntity={constellationDaily}
      />
    </>
  );
};

export default ConstellationPage;
