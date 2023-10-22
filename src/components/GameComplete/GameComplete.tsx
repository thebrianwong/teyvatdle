import { forwardRef, useEffect, useState } from "react";
import paimonCheer from "../../assets/gameArea/paimonCheer.png";
import GameCompleteProps from "./type";
import "./styles.scss";
import ResetTimer from "../ResetTimer/ResetTimer";
import determineCorrectness from "../GuessTableRow/determineCorrectness";

const GameComplete = forwardRef<HTMLDivElement, GameCompleteProps>(
  ({ gameType, selectType, guesses, answer }, ref) => {
    const [emojiHeaders, setEmojiHeaders] = useState<string[]>();
    const [emojiGuesses, setEmojiGuesses] = useState<string[]>();

    const chooseEmojiHeaders = () => {
      let headerStrings: string[];
      if (selectType === "character") {
        headerStrings = [
          "ㅤ♂️✨🔥📊🌸😈ㅤ",
          "🧑📏🌐⚔️💪👾📖🎂",
          "---------------",
        ];
      } else if (selectType === "weapon") {
        headerStrings = ["ㅤ✨📊😈ㅤ", "🗡️⚔️💪👾🎰", "---------"];
      } else if (selectType === "food") {
        headerStrings = ["ㅤ✨ㅤㅤㅤㅤㅤ", "🍽️🍴🎀🏪✍️🎊", "-----------"];
      }
      setEmojiHeaders(headerStrings!);
    };

    const calculateEmojiGuesses = () => {
      const guessStrings: string[] = [];
      guesses.forEach((guess) => {
        const accuracyObject = determineCorrectness(selectType, guess, answer);
        let guessRow = "";
        Object.keys(accuracyObject!).forEach((key) => {
          const value = accuracyObject![key as keyof typeof accuracyObject];
          if (value === "wrong") {
            guessRow = guessRow + "🟥";
          } else if (value === "partial") {
            guessRow = guessRow + "🟨";
          } else if (value === "correct") {
            guessRow = guessRow + "🟩";
          }
        });
        guessStrings.push(guessRow);
      });
      setEmojiGuesses(guessStrings);
    };

    useEffect(() => {
      chooseEmojiHeaders();
      calculateEmojiGuesses();
    }, []);

    return (
      <div ref={ref} className="game-complete-container">
        <h1>Nice Job, Traveler!</h1>
        <p>
          Come back tomorrow and Paimon will have a new {gameType} for you to
          guess!
        </p>
        <ResetTimer />
        {emojiHeaders && emojiGuesses && (
          <div className="emoji-container">
            {emojiHeaders.map((header) => {
              return (
                <p className="results-emojis" key={header}>
                  {header}
                </p>
              );
            })}
            {emojiGuesses.map((guess, index) => {
              return (
                <p className="results-emojis" key={`${guess}-${index}`}>
                  {guess}
                </p>
              );
            })}
          </div>
        )}
        <img
          src={paimonCheer}
          alt="A cheering and excited Paimon."
          className="game-complete-paimon"
        />
      </div>
    );
  }
);

export default GameComplete;
