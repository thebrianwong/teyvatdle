import { forwardRef, useEffect, useState } from "react";
import SelectSearchBarProps from "./type";

const SelectSearchBar = forwardRef<HTMLInputElement, SelectSearchBarProps>(
  ({ value, handleClick, handleInput }, ref) => {
    const [inputValue, setInputValue] = useState<string>(value);

    useEffect(() => {
      handleInput(inputValue);
    }, [inputValue]);

    return (
      <input
        type="search"
        id="search"
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
