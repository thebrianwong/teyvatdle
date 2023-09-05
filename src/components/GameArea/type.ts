import ListAPIData from "../../types/data/listAPIData.type";
import TableAPIData from "../../types/data/tableAPIData.type";

type GameAreaProps = {
  gameType: "character" | "weapon" | "food" | "talent" | "constellation";
  selectType: "character" | "weapon" | "food";
  data: TableAPIData[];
  dailyEntity: TableAPIData | ListAPIData;
};

export default GameAreaProps;
