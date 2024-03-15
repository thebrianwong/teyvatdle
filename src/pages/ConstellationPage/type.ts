import CharacterAPIData from "../../types/data/characterAPIData.type";
import TableAPIData from "../../types/data/tableAPIData.type";
import GameMode from "../../types/gameMode.type";

type ConstellationPageProps = {
  dailyRecordID: string;
  guessesCounter: number;
  complete: boolean;
  guesses: CharacterAPIData[];
  setGuessCounter: (type: GameMode, newValue: number) => void;
  setCompletedState: (type: GameMode) => void;
  updateGuesses: (newGuesses: TableAPIData[], gameType: GameMode) => void;
};

export default ConstellationPageProps;
