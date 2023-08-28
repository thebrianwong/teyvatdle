import CharacterAPIData from "../../types/data/characterAPIData.type";

type SelectOptionsProps = {
  dataList: CharacterAPIData[];
  filterValue: string;
  guesses: string[];
  handleGuess: (guess: string) => void;
};

export default SelectOptionsProps;
