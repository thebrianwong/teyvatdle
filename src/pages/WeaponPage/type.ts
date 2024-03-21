import { GameDataType, WeaponData } from "../../__generated__/graphql";
import TableData from "../../types/tableData.type";

type WeaponPageProps = {
  dailyRecordID: string;
  guessesCounter: number;
  complete: boolean;
  guesses: WeaponData[];
  setGuessCounter: (type: GameDataType, newValue: number) => void;
  setCompletedState: (type: GameDataType) => void;
  updateGuesses: (newGuesses: TableData[], gameType: GameDataType) => void;
};

export default WeaponPageProps;
