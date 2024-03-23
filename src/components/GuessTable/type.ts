import TableData from "../../types/tableData.type";
import SelectType from "../../types/selectType.type";

type GuessTableProps = {
  tableType: SelectType;
  guessesProp: TableData[];
  answer: TableData;
  complete: boolean;
};

export default GuessTableProps;
