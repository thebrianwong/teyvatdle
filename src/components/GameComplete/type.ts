import { GameDataType } from "../../__generated__/graphql";
import TableData from "../../types/tableData.type";
import SelectType from "../../types/selectType.type";

type GameCompleteProps = {
  gameType: GameDataType;
  selectType: SelectType;
  guesses: TableData[];
  answer: TableData;
};

export default GameCompleteProps;
