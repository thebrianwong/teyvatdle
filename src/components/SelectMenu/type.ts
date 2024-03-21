import TableData from "../../types/tableData.type";
import SelectType from "../../types/selectType.type";

type SelectMenuProps = {
  selectType: SelectType;
  data: TableData[];
  guesses: TableData[];
  gameCompleted: boolean;
  allowInteraction: boolean;
  handleGuess: (guess: TableData) => void;
};

export default SelectMenuProps;
