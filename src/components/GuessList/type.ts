import { CharacterData } from "../../__generated__/graphql";
import ListData from "../../types/listData.type";

type GuessListProps = {
  guesses: CharacterData[];
  answer: ListData;
};

export default GuessListProps;
