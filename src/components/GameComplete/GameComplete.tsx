import { forwardRef } from "react";
import paimonCheer from "../../assets/gameArea/paimonCheer.png";
import GameCompleteProps from "./type";
import "./styles.scss";
import ResetTimer from "../ResetTimer/ResetTimer";
import determineCorrectness from "../GuessTableRow/determineCorrectness";

const GameComplete = forwardRef<HTMLDivElement, GameCompleteProps>(
  ({ gameType, selectType, guesses, answer }, ref) => {
    const displayEmojiGuesses = () => {
      let string = "";
      guesses.forEach((guess) => {
        const acc = determineCorrectness(selectType, guess, answer);
        Object.keys(acc!).forEach((key) => {
          const value = acc![key as keyof typeof acc];
          if (value === "wrong") {
            string = string + "🟥";
          }
        });
      });
    };

    return (
      <div ref={ref} className="game-complete-container">
        <h1>Nice Job, Traveler!</h1>
        <p>
          Come back tomorrow and Paimon will have a new {gameType} for you to
          guess!
        </p>
        <ResetTimer />
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
