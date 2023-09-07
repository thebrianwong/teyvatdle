import allCharData from "../../allChars.json";
import dummyConstellation from "../../constellationPlaceholder.json";
import GameArea from "../../components/GameArea/GameArea";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import ConstellationAPIData from "../../types/data/constellationAPIData.type";

const ConstellationPage = () => {
  // will later get from redux
  const chars = allCharData as CharacterAPIData[];
  const constellationDaily = dummyConstellation as ConstellationAPIData;

  return (
    <>
      <h1>Daily Constellation</h1>
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
