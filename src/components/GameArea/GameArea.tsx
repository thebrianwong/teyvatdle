import CharacterAPIData from "../../types/data/characterAPIData.type";
import GuessTable from "../GuessTable/GuessTable";
import SelectMenu from "../SelectMenu/SelectMenu";
import TableAPIData from "../../types/data/tableAPIData.type";
import { useEffect, useRef, useState } from "react";
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
  guessesCounter,
  complete,
  setGuessCounter,
  setCompletedState,
}: GameAreaProps) => {
  const [guesses, setGuesses] = useState<TableAPIData[]>([]);
  const completeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!complete) {
      setGuessCounter(gameType, 0);
    } else {
      completeRef.current!.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  }, []);

  const handleGameCompletion = async () => {
    setCompletedState(gameType);
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
    setGuessCounter(gameType, guessesCounter + 1);
    if (
      guess[`${selectType}_name` as keyof typeof guess] ===
      dailyEntity![`${selectType}_name` as keyof typeof dailyEntity]
    ) {
      handleGameCompletion();
    }
  };

  return (
    <>
      <SelectMenu
        selectType={selectType}
        data={data}
        guesses={guesses}
        gameCompleted={complete}
        handleGuess={handleGuess}
      />
      <p>Total Guesses: {guessesCounter}</p>
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
          {complete && <GameComplete gameType={gameType} ref={completeRef} />}
        </>
      ) : (
        <>
          <GuessTable
            tableType={selectType}
            guessesProp={guesses}
            answer={dailyEntity as TableAPIData}
          />
          {complete && <GameComplete gameType={gameType} ref={completeRef} />}
        </>
      )}
    </>
  );
};

export default GameArea;
