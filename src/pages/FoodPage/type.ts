import { FoodData, GameDataType } from "../../__generated__/graphql";
import TableAPIData from "../../types/tableAPIData.type";

type FoodPageProps = {
  dailyRecordID: string;
  guessesCounter: number;
  complete: boolean;
  guesses: FoodData[];
  setGuessCounter: (type: GameDataType, newValue: number) => void;
  setCompletedState: (type: GameDataType) => void;
  updateGuesses: (newGuesses: TableAPIData[], gameType: GameDataType) => void;
};

export default FoodPageProps;
