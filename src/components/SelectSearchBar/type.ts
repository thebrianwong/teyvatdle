import SelectType from "../../types/selectType.type";

type SelectSearchBarProps = {
  value: string;
  gameCompleted: boolean;
  selectType: SelectType;
  allowInteraction: boolean;
  handleClick: () => void;
  handleInput: (value: string) => void;
};

export default SelectSearchBarProps;
