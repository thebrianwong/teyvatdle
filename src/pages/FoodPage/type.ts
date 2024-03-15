import FoodAPIData from "../../types/data/foodAPIData.type";
import TableAPIData from "../../types/data/tableAPIData.type";
import GameMode from "../../types/gameMode.type";

type FoodPageProps = {
  dailyRecordID: string;
  guessesCounter: number;
  complete: boolean;
  guesses: FoodAPIData[];
  setGuessCounter: (type: GameMode, newValue: number) => void;
  setCompletedState: (type: GameMode) => void;
  updateGuesses: (newGuesses: TableAPIData[], gameType: GameMode) => void;
};

export default FoodPageProps;
