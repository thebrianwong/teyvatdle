import { GameDataType } from "../../__generated__/graphql";
import FoodAPIData from "../../types/data/foodAPIData.type";
import TableAPIData from "../../types/data/tableAPIData.type";

type FoodPageProps = {
  dailyRecordID: string;
  guessesCounter: number;
  complete: boolean;
  guesses: FoodAPIData[];
  setGuessCounter: (type: GameDataType, newValue: number) => void;
  setCompletedState: (type: GameDataType) => void;
  updateGuesses: (newGuesses: TableAPIData[], gameType: GameDataType) => void;
};

export default FoodPageProps;
