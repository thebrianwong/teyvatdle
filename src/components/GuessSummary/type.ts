import { GameDataType } from "../../__generated__/graphql";
import TableAPIData from "../../types/data/tableAPIData.type";
import SelectType from "../../types/selectType.type";

type GuessesSummaryProp = {
  gameType: GameDataType;
  selectType: SelectType;
  guesses: TableAPIData[];
  answer: TableAPIData;
};

export default GuessesSummaryProp;
