import { forwardRef } from "react";
import SelectSearchBarProps from "./type";
import "./styles.scss";

const SelectSearchBar = forwardRef<HTMLInputElement, SelectSearchBarProps>(
  ({ value, gameCompleted, selectType, handleClick, handleInput }, ref) => {
    const determinePlaceholderValue = () => {
      switch (selectType) {
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

    return (
      <>
        <label htmlFor="search">Guess a {selectType}!</label>
        <br />
        <input
          type="search"
          id="search"
          className="guess-search-bar"
          disabled={gameCompleted}
          placeholder={determinePlaceholderValue()}
          value={value}
          ref={ref}
          onClick={handleClick}
          onChange={(e) => {
            handleInput(e.target.value);
          }}
        />
      </>
    );
  }
);

export default SelectSearchBar;
