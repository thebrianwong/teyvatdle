import ListAPIData from "../../types/data/listAPIData.type";
import TableAPIData from "../../types/data/tableAPIData.type";
import GameMode from "../../types/gameMode.type";

type GameAreaProps = {
  gameType: GameMode;
  selectType: "character" | "weapon" | "food";
  data: TableAPIData[];
  dailyEntity: TableAPIData | ListAPIData;
  dailyRecordID: number;
};

export default GameAreaProps;
