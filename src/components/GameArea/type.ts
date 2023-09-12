import ListAPIData from "../../types/data/listAPIData.type";
import TableAPIData from "../../types/data/tableAPIData.type";
import GameModes from "../../types/gameModes.type";

type GameAreaProps = {
  gameType: GameModes;
  selectType: "character" | "weapon" | "food";
  data: TableAPIData[];
  dailyEntity: TableAPIData | ListAPIData;
  dailyRecordID: number;
};

export default GameAreaProps;
