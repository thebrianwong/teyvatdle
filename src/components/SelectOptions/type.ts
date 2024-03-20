import TableAPIData from "../../types/tableAPIData.type";
import SelectType from "../../types/selectType.type";

type SelectOptionsProps = {
  dataList: TableAPIData[];
  dataType: SelectType;
  filterValue: string;
  guesses: TableAPIData[];
  handleGuess: (guess: TableAPIData) => void;
};

export default SelectOptionsProps;
