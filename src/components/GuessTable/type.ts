import TableAPIData from "../../types/tableAPIData.type";
import SelectType from "../../types/selectType.type";

type GuessTableProps = {
  tableType: SelectType;
  guessesProp: TableAPIData[];
  answer: TableAPIData;
  complete: boolean;
};

export default GuessTableProps;
