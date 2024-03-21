import { CharacterData, GameDataType } from "../../__generated__/graphql";
import TableData from "../../types/tableData.type";

type TalentPageProps = {
  dailyRecordID: string;
  guessesCounter: number;
  complete: boolean;
  guesses: CharacterData[];
  setGuessCounter: (type: GameDataType, newValue: number) => void;
  setCompletedState: (type: GameDataType) => void;
  updateGuesses: (newGuesses: TableData[], gameType: GameDataType) => void;
};

export default TalentPageProps;
