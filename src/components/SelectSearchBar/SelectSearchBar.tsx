import { forwardRef, useEffect, useState } from "react";
import SelectSearchBarProps from "./type";

const SelectSearchBar = forwardRef<HTMLInputElement, SelectSearchBarProps>(
  (
    { value, gameCompleted, placeholderType, handleClick, handleInput },
    ref
  ) => {
    const [inputValue, setInputValue] = useState<string>(value);

    const determinePlaceholderValue = () => {
      switch (placeholderType) {
        case "character":
          return "Paimon...?";
        case "weapon":
          return "Debate Club...?";
        case "food":
          return "Sweet Madame...?";
        default:
          return "Paimon...?";
      }
    };

    useEffect(() => {
      handleInput(inputValue);
    }, [inputValue]);

    return (
      <input
        type="search"
        id="search"
        disabled={gameCompleted}
        placeholder={determinePlaceholderValue()}
        value={value}
        ref={ref}
        onClick={handleClick}
        onChange={(e) => {
          setInputValue(e.target.value);
          handleInput(e.target.value);
        }}
      />
    );
  }
);

export default SelectSearchBar;
