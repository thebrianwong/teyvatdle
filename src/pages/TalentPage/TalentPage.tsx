import allCharData from "../../allChars.json";
import dummyTalent from "../../talentPlaceholder.json";
import GameArea from "../../components/GameArea/GameArea";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import TalentAPIData from "../../types/data/talentAPIData.type";
import paimonImage from "../../assets/title/paimonThinking.png";

const TalentPage = () => {
  // will later get from redux
  const chars = allCharData as CharacterAPIData[];
  const talentDaily = dummyTalent as TalentAPIData;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={paimonImage} alt="" />
        <h1>Which Talent is Paimon Thinking of...?</h1>
      </div>
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
