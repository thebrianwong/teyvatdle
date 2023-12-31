import TableAPIData from "../../types/data/tableAPIData.type";
import SelectType from "../../types/selectType.type";

type SelectMenuProps = {
  selectType: SelectType;
  data: TableAPIData[];
  guesses: TableAPIData[];
  gameCompleted: boolean;
  allowInteraction: boolean;
  handleGuess: (guess: TableAPIData) => void;
};

export default SelectMenuProps;
