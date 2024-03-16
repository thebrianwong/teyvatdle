import { GameDataType } from "../../__generated__/graphql";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import TableAPIData from "../../types/data/tableAPIData.type";

type ConstellationPageProps = {
  dailyRecordID: string;
  guessesCounter: number;
  complete: boolean;
  guesses: CharacterAPIData[];
  setGuessCounter: (type: GameDataType, newValue: number) => void;
  setCompletedState: (type: GameDataType) => void;
  updateGuesses: (newGuesses: TableAPIData[], gameType: GameDataType) => void;
};

export default ConstellationPageProps;
