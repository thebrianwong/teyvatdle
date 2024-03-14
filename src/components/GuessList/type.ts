import { CharacterData } from "../../__generated__/graphql";
import ListAPIData from "../../types/data/listAPIData.type";

type GuessListProps = {
  guesses: CharacterData[];
  answer: ListAPIData;
};

export default GuessListProps;
