import { GameDataType, WeaponData } from "../../__generated__/graphql";
import TableAPIData from "../../types/data/tableAPIData.type";

type WeaponPageProps = {
  dailyRecordID: string;
  guessesCounter: number;
  complete: boolean;
  guesses: WeaponData[];
  setGuessCounter: (type: GameDataType, newValue: number) => void;
  setCompletedState: (type: GameDataType) => void;
  updateGuesses: (newGuesses: TableAPIData[], gameType: GameDataType) => void;
};

export default WeaponPageProps;
