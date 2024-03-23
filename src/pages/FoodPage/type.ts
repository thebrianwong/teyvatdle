import { FoodData, GameDataType } from "../../__generated__/graphql";
import TableData from "../../types/tableData.type";

type FoodPageProps = {
  dailyRecordID: string;
  guessesCounter: number;
  complete: boolean;
  guesses: FoodData[];
  setGuessCounter: (type: GameDataType, newValue: number) => void;
  setCompletedState: (type: GameDataType) => void;
  updateGuesses: (newGuesses: TableData[], gameType: GameDataType) => void;
};

export default FoodPageProps;
