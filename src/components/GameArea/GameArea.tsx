import CharacterAPIData from "../../types/data/characterAPIData.type";
import GuessTable from "../GuessTable/GuessTable";
import SelectMenu from "../SelectMenu/SelectMenu";
import TableAPIData from "../../types/data/tableAPIData.type";
import { useRef, useState } from "react";
import GameAreaProps from "./type";
import GuessList from "../GuessList/GuessList";
import ListAPIData from "../../types/data/listAPIData.type";
import TalentConstellationImage from "../TalentConstellationImage/TalentConstellationImage";
import { updateDailyRecordSolved } from "../../services/DailyRecordService";
import GameComplete from "../GameComplete/GameComplete";

const GameArea = ({
  gameType,
  selectType,
  data,
  dailyEntity,
  dailyRecordID,
}: GameAreaProps) => {
  const [guesses, setGuesses] = useState<TableAPIData[]>([]);
  const [gameCompleted, setGameCompleted] = useState<boolean>(false);
  const [counter, setCounter] = useState(0);
  const completeRef = useRef<HTMLDivElement>(null);

  const handleGameCompletion = async () => {
    const results = await updateDailyRecordSolved(dailyRecordID, gameType);
    console.log(results);
    setTimeout(() => {
      completeRef.current!.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }, 200);
  };

  const handleGuess = (guess: TableAPIData) => {
    const newGuesses = [guess, ...guesses];
    setGuesses(newGuesses);
    setCounter((prev) => prev + 1);
    if (
      guess[`${selectType}_name` as keyof typeof guess] ===
      dailyEntity![`${selectType}_name` as keyof typeof dailyEntity]
    ) {
      setGameCompleted(true);
      handleGameCompletion();
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
      <p>Total Guesses: {counter}</p>
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
          {gameCompleted && (
            <GameComplete gameType={gameType} ref={completeRef} />
          )}
        </>
      ) : (
        <>
          <GuessTable
            tableType={selectType}
            guessesProp={guesses}
            answer={dailyEntity as TableAPIData}
          />
          {gameCompleted && (
            <GameComplete gameType={gameType} ref={completeRef} />
          )}
        </>
      )}
    </>
  );
};

export default GameArea;
