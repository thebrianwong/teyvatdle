import { forwardRef } from "react";
import SelectSearchBarProps from "./type";
import "./styles.scss";
import { GameDataType } from "../../__generated__/graphql";

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
        case GameDataType.Character:
          return "Paimon...?";
        case GameDataType.Weapon:
          return "Debate Club...?";
        case GameDataType.Food:
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
