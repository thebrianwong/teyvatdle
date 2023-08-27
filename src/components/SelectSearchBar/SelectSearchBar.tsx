import { forwardRef } from "react";
import SelectSearchBarProps from "./type";

const SelectSearchBar = forwardRef<HTMLInputElement, SelectSearchBarProps>(
  ({ handleClick }, ref) => {
    return <input type="search" id="search" ref={ref} onClick={handleClick} />;
  }
);

export default SelectSearchBar;
