import TableAPIData from "../../types/data/tableAPIData.type";

type GuessTableProps = {
  tableType: "character" | "weapon" | "food";
  guessesProp: TableAPIData[];
};

export default GuessTableProps;
