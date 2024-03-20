import { CharacterData, GameDataType } from "../../__generated__/graphql";
import TableAPIData from "../../types/tableAPIData.type";

type ConstellationPageProps = {
  dailyRecordID: string;
  guessesCounter: number;
  complete: boolean;
  guesses: CharacterData[];
  setGuessCounter: (type: GameDataType, newValue: number) => void;
  setCompletedState: (type: GameDataType) => void;
  updateGuesses: (newGuesses: TableAPIData[], gameType: GameDataType) => void;
};

export default ConstellationPageProps;
