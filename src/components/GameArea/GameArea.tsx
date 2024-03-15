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
import "./styles.scss";
import AnimatedValue from "../AnimatedValue/AnimatedValue";
import TalentAPIData from "../../types/data/talentAPIData.type";
import ConstellationAPIData from "../../types/data/constellationAPIData.type";
import { CharacterData } from "../../__generated__/graphql";

const GameArea = ({
  gameType,
  selectType,
  gameData,
  dailyEntity,
  dailyRecordID,
  guessesCounter,
  complete,
  guesses,
  setGuessCounter,
  setCompletedState,
  updateGuesses,
}: GameAreaProps) => {
  const [isMidAnimation, setIsMidAnimation] = useState(false);
  const completeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (complete) {
      setTimeout(() => {
        if (completeRef.current) {
          completeRef.current.scrollIntoView({
            behavior: "smooth",
            inline: "start",
          });
        }
      }, 300);
    }
  }, []);

  const handleGameCompletion = async () => {
    setCompletedState(gameType);
    const results = await updateDailyRecordSolved(dailyRecordID, gameType);
    console.log(results);
    let delay = 0;
    if (gameType === "talent" || gameType === "constellation") {
      delay = 750;
    }
    setTimeout(() => {
      if (completeRef.current) {
        completeRef.current.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    }, delay);
  };

  const handleGuess = (guess: TableAPIData) => {
    const newGuesses = [guess, ...guesses];
    updateGuesses(newGuesses, gameType);
    setGuessCounter(gameType, guessesCounter + 1);

    const LEEWAY_TIME = 50;
    const ANIMATION_TIME = 750;
    const INITIAL_DELAY = 250;
    const NUM_OF_CHAR_CELLS = 8;
    const NUM_OF_WEAP_CELLS = 5;
    const NUM_OF_FOOD_CELLS = 6;

    let delay: number;
    if (gameType === "talent" || gameType === "constellation") {
      delay = LEEWAY_TIME + ANIMATION_TIME;
    } else if (gameType === "character") {
      delay =
        LEEWAY_TIME + INITIAL_DELAY + (NUM_OF_CHAR_CELLS - 1) * ANIMATION_TIME;
    } else if (gameType === "weapon") {
      delay =
        LEEWAY_TIME + INITIAL_DELAY + (NUM_OF_WEAP_CELLS - 1) * ANIMATION_TIME;
    } else if (gameType === "food") {
      delay =
        LEEWAY_TIME + INITIAL_DELAY + (NUM_OF_FOOD_CELLS - 1) * ANIMATION_TIME;
    }

    if (
      guess[`${selectType}_name` as keyof typeof guess] ===
      dailyEntity![`${selectType}_name` as keyof typeof dailyEntity]
    ) {
      setTimeout(() => {
        handleGameCompletion();
      }, delay!);
    } else {
      setIsMidAnimation(true);
      setTimeout(() => {
        setIsMidAnimation(false);
      }, delay!);
    }
  };

  return (
    <div className="game-area-container">
      <div className="game-area-top-container">
        <SelectMenu
          selectType={selectType}
          data={gameData}
          guesses={guesses}
          gameCompleted={complete}
          allowInteraction={!isMidAnimation}
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
            guesses={guesses as CharacterData[]}
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
