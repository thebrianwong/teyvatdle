import CharacterAPIData from "../../types/data/characterAPIData.type";
import TableAPIData from "../../types/data/tableAPIData.type";

type SelectOptionsProps = {
  dataList: TableAPIData[];
  dataType: "character" | "weapon" | "food";
  filterValue: string;
  guesses: TableAPIData[];
  handleGuess: (guess: TableAPIData) => void;
};

export default SelectOptionsProps;
