import TableAPIData from "../../types/data/tableAPIData.type";

type GameAreaTableProps = {
  gameType: "character" | "weapon" | "food";
  data: TableAPIData[];
  dailyEntity: TableAPIData;
};

export default GameAreaTableProps;
