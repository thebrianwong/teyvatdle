import allCharData from "../../allChars.json";
import dummy from "../../placeholder.json";
import GameArea from "../../components/GameArea/GameArea";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import paimonImage from "../../assets/title/paimonThinking.png";
import { useAppSelector } from "../../redux/hooks";
import { loadCharacters } from "../../redux/apiDataSlice";
import { store } from "../../redux/store";
import { useEffect } from "react";

const HomePage = () => {
  // will later get from redux
  const chars = useAppSelector(loadCharacters);
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
