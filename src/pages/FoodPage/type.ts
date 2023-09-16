import GameMode from "../../types/gameMode.type";

type FoodPageProps = {
  dailyRecordID: number;
  guessesCounter: number;
  complete: boolean;
  setGuessCounter: (type: GameMode, newValue: number) => void;
  setCompletedState: (type: GameMode) => void;
};

export default FoodPageProps;
