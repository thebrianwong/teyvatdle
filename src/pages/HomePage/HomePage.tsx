import allCharData from "../../allChars.json";
import dummy from "../../placeholder.json";
import GameArea from "../../components/GameArea/GameArea";
import CharacterAPIData from "../../types/data/characterAPIData.type";

const HomePage = () => {
  // will later get from redux
  const chars = allCharData as CharacterAPIData[];
  const charDaily = dummy as CharacterAPIData;

  return (
    <GameArea
      gameType="character"
      selectType="character"
      data={chars}
      dailyEntity={charDaily}
    />
  );
};

export default HomePage;
