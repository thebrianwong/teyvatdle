import GuessTable from "../GuessTable/GuessTable";
import SelectMenu from "../SelectMenu/SelectMenu";
import TableData from "../../types/tableData.type";
import { useEffect, useRef, useState } from "react";
import GameAreaProps from "./type";
import GuessList from "../GuessList/GuessList";
import ListData from "../../types/listData.type";
import TalentConstellationImage from "../TalentConstellationImage/TalentConstellationImage";
import GameComplete from "../GameComplete/GameComplete";
import "./styles.scss";
import AnimatedValue from "../AnimatedValue/AnimatedValue";
import {
  CharacterData,
  ConstellationData,
  GameDataType,
  TalentData,
  TalentType,
} from "../../__generated__/graphql";
import { useMutation } from "@apollo/client";
import { UPDATE_DAILY_RECORD } from "../../graphql/mutations/updateDailyRecord";
import lowerCaseFirstLetter from "../../utils/lowerCaseFirstLetter";

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
  const [updateDailyRecord, { error, data }] = useMutation(
    UPDATE_DAILY_RECORD,
    { variables: { id: dailyRecordID, type: gameType } }
  );

  const talentTypeEnumMap = {
    [TalentType.NormalAttack]: "Normal Attack",
    [TalentType.ElementalSkill]: "Elemental Skill",
    [TalentType.AlternateSprint]: "Alternate Sprint",
    [TalentType.ElementalBurst]: "Elemental Burst",
    [TalentType.FirstAscensionPassive]: "1st Ascension Passive",
    [TalentType.FourthAscensionPassive]: "4th Ascension Passive",
    [TalentType.NightRealmsGiftPassive]: "Night Realm's Gift Passive",
    [TalentType.UtilityPassive]: "Utility Passive",
    [TalentType.Passive]: "Passive",
  };

  useEffect(() => {
    if (data !== undefined) {
      console.log(data?.updateDailyRecord);
    }
    if (error !== undefined) {
      console.log(error);
    }
  }, [data, error]);

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
    updateDailyRecord();
    setTimeout(() => {
      if (completeRef.current) {
        completeRef.current.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    }, 500);
  };

  const handleGuess = (guess: TableData) => {
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
    if (
      gameType === GameDataType.Talent ||
      gameType === GameDataType.Constellation
    ) {
      delay = LEEWAY_TIME + ANIMATION_TIME;
    } else if (gameType === GameDataType.Character) {
      delay =
        LEEWAY_TIME + INITIAL_DELAY + (NUM_OF_CHAR_CELLS - 1) * ANIMATION_TIME;
    } else if (gameType === GameDataType.Weapon) {
      delay =
        LEEWAY_TIME + INITIAL_DELAY + (NUM_OF_WEAP_CELLS - 1) * ANIMATION_TIME;
    } else if (gameType === GameDataType.Food) {
      delay =
        LEEWAY_TIME + INITIAL_DELAY + (NUM_OF_FOOD_CELLS - 1) * ANIMATION_TIME;
    }

    if (
      guess[`${lowerCaseFirstLetter(selectType)}Name` as keyof typeof guess] ===
      dailyEntity![
        `${lowerCaseFirstLetter(selectType)}Name` as keyof typeof dailyEntity
      ]
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
      {gameType === GameDataType.Talent ||
      gameType === GameDataType.Constellation ? (
        <>
          {complete && gameType === GameDataType.Talent && (
            <h1 className="talent-constellation-answer">{`${
              (dailyEntity as TalentData).characterName
            }'s ${
              talentTypeEnumMap[(dailyEntity as TalentData).talentType!]
            } Talent: ${(dailyEntity as TalentData).talentName}`}</h1>
          )}
          {complete && gameType === GameDataType.Constellation && (
            <h1 className="talent-constellation-answer">{`${
              (dailyEntity as ConstellationData).characterName
            }'s Level ${
              (dailyEntity as ConstellationData).constellationLevel
            } Constellation: ${
              (dailyEntity as ConstellationData).constellationName
            }`}</h1>
          )}
          <TalentConstellationImage
            type={gameType}
            data={dailyEntity as ListData}
          />
          <GuessList
            guesses={guesses as CharacterData[]}
            answer={dailyEntity as ListData}
          />
          {complete && (
            <GameComplete
              gameType={gameType}
              selectType={selectType}
              guesses={guesses}
              answer={dailyEntity as TableData}
              ref={completeRef}
            />
          )}
        </>
      ) : (
        <>
          <GuessTable
            tableType={selectType}
            guessesProp={guesses}
            answer={dailyEntity as TableData}
            complete={complete}
          />
          {complete && (
            <GameComplete
              gameType={gameType}
              selectType={selectType}
              guesses={guesses}
              answer={dailyEntity as TableData}
              ref={completeRef}
            />
          )}
        </>
      )}
    </div>
  );
};

export default GameArea;
