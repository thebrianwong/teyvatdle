import TableAPIData from "../../types/data/tableAPIData.type";
import WeaponAPIData from "../../types/data/weaponAPIData.type";
import GameMode from "../../types/gameMode.type";

type WeaponPageProps = {
  dailyRecordID: string;
  guessesCounter: number;
  complete: boolean;
  guesses: WeaponAPIData[];
  setGuessCounter: (type: GameMode, newValue: number) => void;
  setCompletedState: (type: GameMode) => void;
  updateGuesses: (newGuesses: TableAPIData[], gameType: GameMode) => void;
};

export default WeaponPageProps;
