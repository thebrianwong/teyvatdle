import { forwardRef } from "react";
import paimonCheer from "../../assets/gameArea/paimonCheer.png";
import GameCompleteProps from "./type";

const GameComplete = forwardRef<HTMLDivElement, GameCompleteProps>(
  ({ gameType }, ref) => {
    return (
      <div ref={ref}>
        <h1>Nice Job, Traveler!</h1>
        <p>
          Come back tomorrow and Paimon will have a new {gameType} for you to
          guess!
        </p>
        <img src={paimonCheer} alt="A cheering and excited Paimon." />
      </div>
    );
  }
);

export default GameComplete;
