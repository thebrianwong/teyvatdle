import ListAPIData from "../../types/data/listAPIData.type";
import TableAPIData from "../../types/data/tableAPIData.type";
import GameMode from "../../types/gameMode.type";
import SelectType from "../../types/selectType.type";

type GameAreaProps = {
  gameType: GameMode;
  selectType: SelectType;
  data: TableAPIData[];
  dailyEntity: TableAPIData | ListAPIData;
  dailyRecordID: number;
  guessesCounter: number;
  complete: boolean;
  setGuessCounter: (type: GameMode, newValue: number) => void;
  setCompletedState: (type: GameMode) => void;
};

export default GameAreaProps;
