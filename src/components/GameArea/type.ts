import { GameDataType } from "../../__generated__/graphql";
import ListData from "../../types/listData.type";
import TableData from "../../types/tableData.type";
import SelectType from "../../types/selectType.type";

type GameAreaProps = {
  gameType: GameDataType;
  selectType: SelectType;
  gameData: TableData[];
  dailyEntity: TableData | ListData;
  dailyRecordID: string;
  guessesCounter: number;
  complete: boolean;
  guesses: TableData[];
  setGuessCounter: (type: GameDataType, newValue: number) => void;
  setCompletedState: (type: GameDataType) => void;
  updateGuesses: (newGuesses: TableData[], gameType: GameDataType) => void;
};

export default GameAreaProps;
