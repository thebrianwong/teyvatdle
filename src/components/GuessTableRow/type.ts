import TableAPIData from "../../types/data/tableAPIData.type";

type GuessTableRowProps = {
  rowType: "character" | "weapon" | "food";
  rowDataProp: TableAPIData;
};

export default GuessTableRowProps;
