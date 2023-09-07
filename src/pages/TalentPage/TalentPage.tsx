import allCharData from "../../allChars.json";
import dummyTalent from "../../talentPlaceholder.json";
import GameArea from "../../components/GameArea/GameArea";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import TalentAPIData from "../../types/data/talentAPIData.type";

const TalentPage = () => {
  // will later get from redux
  const chars = allCharData as CharacterAPIData[];
  const talentDaily = dummyTalent as TalentAPIData;

  return (
    <>
      <h1>Daily Talent</h1>
      <GameArea
        gameType="talent"
        selectType="character"
        data={chars}
        dailyEntity={talentDaily}
      />
    </>
  );
};

export default TalentPage;
