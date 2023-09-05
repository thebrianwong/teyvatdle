import CharacterAPIData from "../../types/data/characterAPIData.type";
import WeaponAPIData from "../../types/data/weaponAPIData.type";
import FoodAPIData from "../../types/data/foodAPIData.type";
import GuessTable from "../GuessTable/GuessTable";
import SelectMenu from "../SelectMenu/SelectMenu";
import TableAPIData from "../../types/data/tableAPIData.type";
import { useState } from "react";
import GameAreaProps from "./type";
import GuessList from "../GuessList/GuessList";
import ListAPIData from "../../types/data/listAPIData.type";

const GameArea = ({
  gameType,
  selectType,
  data,
  dailyEntity,
}: GameAreaProps) => {
  const [guesses, setGuesses] = useState<TableAPIData[]>([]);
  const [gameCompleted, setGameCompleted] = useState<boolean>(false);

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

  const sortedData = (data: TableAPIData[]) => {
    return data.sort((a, b) => {
      if (
        a[`${selectType}_name` as keyof typeof a] <
        b[`${selectType}_name` as keyof typeof b]
      ) {
        return -1;
      } else if (
        a[`${selectType}_name` as keyof typeof a] >
        b[`${selectType}_name` as keyof typeof b]
      ) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <>
      <SelectMenu
        selectType={selectType}
        data={sortedData(data)}
        guesses={guesses}
        gameCompleted={gameCompleted}
        handleGuess={handleGuess}
      />
      {gameType === "talent" || gameType === "constellation" ? (
        <GuessList
          guesses={guesses as CharacterAPIData[]}
          answer={dailyEntity as ListAPIData}
        />
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
