import TableAPIData from "../../types/data/tableAPIData.type";

type GuessTableRowProps = {
  rowType: "character" | "weapon" | "food";
  rowDataProp: TableAPIData;
  answer: TableAPIData;
};

export default GuessTableRowProps;
