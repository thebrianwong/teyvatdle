import GameModes from "../../types/gameModes.type";

type SelectSearchBarProps = {
  value: string;
  gameCompleted: boolean;
  placeholderType: GameModes;
  handleClick: () => void;
  handleInput: (value: string) => void;
};

export default SelectSearchBarProps;
