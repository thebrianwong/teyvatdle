import { GameDataType } from "../../__generated__/graphql";
import TableAPIData from "../../types/tableAPIData.type";
import SelectType from "../../types/selectType.type";

type GameCompleteProps = {
  gameType: GameDataType;
  selectType: SelectType;
  guesses: TableAPIData[];
  answer: TableAPIData;
};

export default GameCompleteProps;
