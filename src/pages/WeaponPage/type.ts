import { GameDataType } from "../../__generated__/graphql";
import TableAPIData from "../../types/data/tableAPIData.type";
import WeaponAPIData from "../../types/data/weaponAPIData.type";

type WeaponPageProps = {
  dailyRecordID: string;
  guessesCounter: number;
  complete: boolean;
  guesses: WeaponAPIData[];
  setGuessCounter: (type: GameDataType, newValue: number) => void;
  setCompletedState: (type: GameDataType) => void;
  updateGuesses: (newGuesses: TableAPIData[], gameType: GameDataType) => void;
};

export default WeaponPageProps;
