import { useEffect, useRef, useState } from "react";
import SelectMenuProps from "./type";
import SelectSearchBar from "../SelectSearchBar/SelectSearchBar";
import SelectOptions from "../SelectOptions/SelectOptions";
import TableAPIData from "../../types/data/tableAPIData.type";

const SelectMenu = ({
  selectType,
  data,
  guesses,
  handleGuess,
}: SelectMenuProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const [showResults, setShowResults] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        showResults &&
        inputRef.current &&
        !inputRef.current.contains(e.target as HTMLElement) &&
        menuRef.current &&
        !menuRef.current.contains(e.target as HTMLElement)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showResults]);

  return (
    <search is="search" style={{ position: "relative" }}>
      <label>Guess a {selectType}!</label>
      <br></br>
      <SelectSearchBar
        value={searchValue}
        handleClick={() => setShowResults(true)}
        handleInput={(value) => setSearchValue(value)}
        ref={inputRef}
      />
      {showResults && (
        <SelectOptions
          dataList={data}
          dataType={selectType}
          filterValue={searchValue}
          guesses={guesses}
          handleGuess={(guess: TableAPIData) => {
            handleGuess(guess);
            setShowResults(false);
            setSearchValue("");
          }}
          ref={menuRef}
        />
      )}
    </search>
  );
};

export default SelectMenu;
