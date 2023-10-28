import CharacterAPIData from "../../types/data/characterAPIData.type";
import GuessTable from "../GuessTable/GuessTable";
import SelectMenu from "../SelectMenu/SelectMenu";
import TableAPIData from "../../types/data/tableAPIData.type";
import { useEffect, useRef } from "react";
import GameAreaProps from "./type";
import GuessList from "../GuessList/GuessList";
import ListAPIData from "../../types/data/listAPIData.type";
import TalentConstellationImage from "../TalentConstellationImage/TalentConstellationImage";
import { updateDailyRecordSolved } from "../../services/DailyRecordService";
import GameComplete from "../GameComplete/GameComplete";
import "./styles.scss";
import AnimatedValue from "../AnimatedValue/AnimatedValue";
import TalentAPIData from "../../types/data/talentAPIData.type";
import ConstellationAPIData from "../../types/data/constellationAPIData.type";

const GameArea = ({
  gameType,
  selectType,
  data,
  dailyEntity,
  dailyRecordID,
  guessesCounter,
  complete,
  guesses,
  setGuessCounter,
  setCompletedState,
  updateGuesses,
}: GameAreaProps) => {
  const completeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (complete) {
      // let delay: number;
      // if (gameType === "talent" || gameType === "constellation") {
      //   delay = 100
      // } else if (gameType === "character") {
      //   delay =
      // }
      setTimeout(() => {
        completeRef.current!.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }, 300);
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
    updateGuesses(newGuesses, gameType);
    setGuessCounter(gameType, guessesCounter + 1);
    if (
      guess[`${selectType}_name` as keyof typeof guess] ===
      dailyEntity![`${selectType}_name` as keyof typeof dailyEntity]
    ) {
      handleGameCompletion();
    }
  };

  return (
    <div className="game-area-container">
      <div className="game-area-top-container">
        <SelectMenu
          selectType={selectType}
          data={data}
          guesses={guesses}
          gameCompleted={complete}
          handleGuess={handleGuess}
        />
        <p>
          Total Guesses: <AnimatedValue value={guessesCounter} direction="up" />
        </p>
      </div>
      {gameType === "talent" || gameType === "constellation" ? (
        <>
          {complete && gameType === "talent" && (
            <h1 className="talent-constellation-answer">{`${
              (dailyEntity as TalentAPIData).character_name
            }'s ${(dailyEntity as TalentAPIData).talent_type} Talent: ${
              (dailyEntity as TalentAPIData).talent_name
            }`}</h1>
          )}
          {complete && gameType === "constellation" && (
            <h1 className="talent-constellation-answer">{`${
              (dailyEntity as ConstellationAPIData).character_name
            }'s Level ${
              (dailyEntity as ConstellationAPIData).constellation_level
            } Constellation: ${
              (dailyEntity as ConstellationAPIData).constellation_name
            }`}</h1>
          )}
          <TalentConstellationImage
            type={gameType}
            data={dailyEntity as ListAPIData}
          />
          <GuessList
            guesses={guesses as CharacterAPIData[]}
            answer={dailyEntity as ListAPIData}
          />
          {complete && (
            <GameComplete
              gameType={gameType}
              selectType={selectType}
              guesses={guesses}
              answer={dailyEntity as TableAPIData}
              ref={completeRef}
            />
          )}
        </>
      ) : (
        <>
          <GuessTable
            tableType={selectType}
            guessesProp={guesses}
            answer={dailyEntity as TableAPIData}
            complete={complete}
          />
          {complete && (
            <GameComplete
              gameType={gameType}
              selectType={selectType}
              guesses={guesses}
              answer={dailyEntity as TableAPIData}
              ref={completeRef}
            />
          )}
        </>
      )}
    </div>
  );
};

export default GameArea;
