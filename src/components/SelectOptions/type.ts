import TableData from "../../types/tableData.type";
import SelectType from "../../types/selectType.type";

type SelectOptionsProps = {
  dataList: TableData[];
  dataType: SelectType;
  filterValue: string;
  guesses: TableData[];
  handleGuess: (guess: TableData) => void;
};

export default SelectOptionsProps;
