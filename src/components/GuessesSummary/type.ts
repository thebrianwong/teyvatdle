import TableAPIData from "../../types/data/tableAPIData.type";
import GameMode from "../../types/gameMode.type";
import SelectType from "../../types/selectType.type";

type GuessesSummaryProp = {
  gameType: GameMode;
  selectType: SelectType;
  guesses: TableAPIData[];
  answer: TableAPIData;
};

export default GuessesSummaryProp;
