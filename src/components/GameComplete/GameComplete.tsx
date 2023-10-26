import { forwardRef } from "react";
import paimonCheer from "../../assets/gameArea/paimonCheer.png";
import GameCompleteProps from "./type";
import "./styles.scss";
import ResetTimer from "../ResetTimer/ResetTimer";
import GuessSummary from "../GuessSummary/GuessSummary";

const GameComplete = forwardRef<HTMLDivElement, GameCompleteProps>(
  ({ gameType, selectType, guesses, answer }, ref) => {
    return (
      <div ref={ref} className="game-complete-container">
        <h1>Nice Job, Traveler!</h1>
        <p>
          Come back tomorrow and Paimon will have a new {gameType} for you to
          guess!
        </p>
        <ResetTimer />
        <GuessSummary
          gameType={gameType}
          selectType={selectType}
          guesses={guesses}
          answer={answer}
        />
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
