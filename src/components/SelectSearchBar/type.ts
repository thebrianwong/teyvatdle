type SelectSearchBarProps = {
  value: string;
  gameCompleted: boolean;
  placeholderType: "character" | "weapon" | "food";
  handleClick: () => void;
  handleInput: (value: string) => void;
};

export default SelectSearchBarProps;
