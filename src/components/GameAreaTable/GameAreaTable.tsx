import CharacterAPIData from "../../types/data/characterAPIData.type";
import WeaponAPIData from "../../types/data/weaponAPIData.type";
import FoodAPIData from "../../types/data/foodAPIData.type";
import GuessTable from "../../components/GuessTable/GuessTable";
import SelectMenu from "../../components/SelectMenu/SelectMenu";
import TableAPIData from "../../types/data/tableAPIData.type";
import { useState } from "react";
import GameAreaTableProps from "./type";

const GameAreaTable = ({ gameType, data, dailyEntity }: GameAreaTableProps) => {
  const [guesses, setGuesses] = useState<TableAPIData[]>([]);
  const [gameCompleted, setGameCompleted] = useState<boolean>(false);

  const handleGuess = (guess: TableAPIData) => {
    const newGuesses = [guess, ...guesses];
    setGuesses(newGuesses);
    if (
      guess[`${gameType}_name` as keyof typeof guess] ===
      dailyEntity![`${gameType}_name` as keyof typeof dailyEntity]
    ) {
      setGameCompleted(true);
    }
  };

  const sortedData = (data: TableAPIData[]) => {
    return data.sort((a, b) => {
      if (
        a[`${gameType}_name` as keyof typeof a] <
        b[`${gameType}_name` as keyof typeof b]
      ) {
        return -1;
      } else if (
        a[`${gameType}_name` as keyof typeof a] >
        b[`${gameType}_name` as keyof typeof b]
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
        selectType={gameType}
        data={sortedData(data)}
        guesses={guesses}
        gameCompleted={gameCompleted}
        handleGuess={handleGuess}
      />
      <GuessTable
        tableType={gameType}
        guessesProp={guesses}
        answer={dailyEntity!}
      />
    </>
  );
};

export default GameAreaTable;
