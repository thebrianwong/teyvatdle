import TableData from "../../types/tableData.type";
import SelectType from "../../types/selectType.type";

type GuessTableRowProps = {
  rowType: SelectType;
  rowDataProp: TableData;
  answer: TableData;
  complete: boolean;
  playAnimations: boolean;
};

export default GuessTableRowProps;
