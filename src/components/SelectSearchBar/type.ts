type SelectSearchBarProps = {
  value: string;
  gameCompleted: boolean;
  selectType: "character" | "weapon" | "food";
  handleClick: () => void;
  handleInput: (value: string) => void;
};

export default SelectSearchBarProps;
