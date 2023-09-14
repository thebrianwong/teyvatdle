import SelectType from "../../types/selectType.type";

type SelectSearchBarProps = {
  value: string;
  gameCompleted: boolean;
  selectType: SelectType;
  handleClick: () => void;
  handleInput: (value: string) => void;
};

export default SelectSearchBarProps;
