import { forwardRef } from "react";
import SelectSearchBarProps from "./type";
import "./styles.scss";

const SelectSearchBar = forwardRef<HTMLInputElement, SelectSearchBarProps>(
  (
    {
      value,
      gameCompleted,
      selectType,
      allowInteraction,
      handleClick,
      handleInput,
    },
    ref
  ) => {
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
          autoComplete="off"
          disabled={gameCompleted || !allowInteraction}
          placeholder={determinePlaceholderValue()}
          value={value}
          ref={ref}
          onClick={() => {
            if (allowInteraction) {
              handleClick();
            }
          }}
          onFocus={() => {
            if (allowInteraction) {
              handleClick();
            }
          }}
          onChange={(e) => {
            if (allowInteraction) {
              handleClick();
              handleInput(e.target.value);
            }
          }}
        />
      </>
    );
  }
);

export default SelectSearchBar;
