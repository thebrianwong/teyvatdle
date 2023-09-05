import CharacterAPIData from "../../types/data/characterAPIData.type";
import ListAPIData from "../../types/data/listAPIData.type";

type GuessListProps = {
  guesses: CharacterAPIData[];
  answer: ListAPIData;
};

export default GuessListProps;
