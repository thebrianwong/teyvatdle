import TableAPIData from "../../types/tableAPIData.type";
import SelectType from "../../types/selectType.type";

type GuessTableRowProps = {
  rowType: SelectType;
  rowDataProp: TableAPIData;
  answer: TableAPIData;
  complete: boolean;
  playAnimations: boolean;
};

export default GuessTableRowProps;
