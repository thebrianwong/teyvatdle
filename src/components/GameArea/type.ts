import { GameDataType } from "../../__generated__/graphql";
import ListAPIData from "../../types/data/listAPIData.type";
import TableAPIData from "../../types/data/tableAPIData.type";
import SelectType from "../../types/selectType.type";

type GameAreaProps = {
  gameType: GameDataType;
  selectType: SelectType;
  gameData: TableAPIData[];
  dailyEntity: TableAPIData | ListAPIData;
  dailyRecordID: string;
  guessesCounter: number;
  complete: boolean;
  guesses: TableAPIData[];
  setGuessCounter: (type: GameDataType, newValue: number) => void;
  setCompletedState: (type: GameDataType) => void;
  updateGuesses: (newGuesses: TableAPIData[], gameType: GameDataType) => void;
};

export default GameAreaProps;
