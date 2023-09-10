import CharacterAPIData from "../../types/data/characterAPIData.type";
import WeaponAPIData from "../../types/data/weaponAPIData.type";
import FoodAPIData from "../../types/data/foodAPIData.type";
import GuessTable from "../GuessTable/GuessTable";
import SelectMenu from "../SelectMenu/SelectMenu";
import TableAPIData from "../../types/data/tableAPIData.type";
import { useEffect, useState } from "react";
import GameAreaProps from "./type";
import GuessList from "../GuessList/GuessList";
import ListAPIData from "../../types/data/listAPIData.type";
import TalentAPIData from "../../types/data/talentAPIData.type";
import ConstellationAPIData from "../../types/data/constellationAPIData.type";
import TalentConstellationImage from "../TalentConstellationImage/TalentConstellationImage";

const GameArea = ({
  gameType,
  selectType,
  data,
  dailyEntity,
}: GameAreaProps) => {
  const [guesses, setGuesses] = useState<TableAPIData[]>([]);
  const [gameCompleted, setGameCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (gameCompleted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [gameCompleted]);

  const handleGuess = (guess: TableAPIData) => {
    const newGuesses = [guess, ...guesses];
    setGuesses(newGuesses);
    if (
      guess[`${selectType}_name` as keyof typeof guess] ===
      dailyEntity![`${selectType}_name` as keyof typeof dailyEntity]
    ) {
      setGameCompleted(true);
    }
  };

  return (
    <>
      <SelectMenu
        selectType={selectType}
        data={data}
        guesses={guesses}
        gameCompleted={gameCompleted}
        handleGuess={handleGuess}
      />
      {gameType === "talent" || gameType === "constellation" ? (
        <>
          <TalentConstellationImage
            type={gameType}
            data={dailyEntity as ListAPIData}
          />
          <GuessList
            guesses={guesses as CharacterAPIData[]}
            answer={dailyEntity as ListAPIData}
          />
        </>
      ) : (
        <GuessTable
          tableType={selectType}
          guessesProp={guesses}
          answer={dailyEntity as TableAPIData}
        />
      )}
    </>
  );
};

export default GameArea;
