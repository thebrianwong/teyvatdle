import GameMode from "../../types/gameMode.type";

type HomePageProps = {
  dailyRecordID: number;
  guessesCounter: number;
  complete: boolean;
  setGuessCounter: (type: GameMode, newValue: number) => void;
  setCompletedState: (type: GameMode) => void;
};

export default HomePageProps;
